import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { color } from '../styles';
import { MultiSelectInput, SearchInput } from './MultiSelectInput';
import { MultipleOptionList, type BasicOptionItem } from './OptionList';
import { type SelectInputBaseProps } from './SelectInput';

import { SearchInputProps } from './MultiSelectInput';

const CREATE_VALUE = 'CREATE_NEW_VALUE';

interface MultiSelectSearchType extends SearchInputProps {
  searchable?: boolean;
}

interface MultiSelectProps<T extends string>
  extends Omit<SelectInputBaseProps, 'value' | 'onSelect' | 'width' | 'searchable'> {
  search?: MultiSelectSearchType;
  selectedValues: T[];
  onCreate?: (value: string | null) => void;
  onSelect: (value: T) => void;
  onDeleteSingle: (value: T) => void;
  onDeleteAll: () => void;
  options: Array<BasicOptionItem<T>>;
  width?: number;
}

export function MultiSelect<T extends string>({
  search = {
    searchable: false,
  },
  options,
  selectedValues = [],
  onCreate,
  onSelect,
  onDeleteSingle,
  onDeleteAll,
  width,

  ...input
}: MultiSelectProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [focusedItemIdx, setFocusedItemIdx] = useState(-1);
  const [searchInputValue, setSearchInputValue] = useState<string | null>(null);
  const [selectedOptionItem, setSelectedOptionItem] = useState<BasicOptionItem<T>[]>([]);

  const optionItems: BasicOptionItem[] = useMemo(() => {
    if (search.searchable && searchInputValue) {
      const searchFilteredOptions = options.filter(option =>
        option.label.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase()),
      );
      if (onCreate != null) {
        return [
          ...searchFilteredOptions,
          { icon: Icon.Add, label: searchInputValue, value: CREATE_VALUE },
        ];
      }
      return searchFilteredOptions;
    }
    return options;
  }, [search.searchable, options, searchInputValue]);

  const onHandleSelect = useCallback(
    ({ value, label }: BasicOptionItem<T>) => {
      onSelect(value);
      setSelectedOptionItem(prev => [...prev, { label, value }]);
    },
    [onSelect, setSelectedOptionItem],
  );

  const onHandleDelete = useCallback(
    (isSingle: boolean, value?: T) => {
      if (isSingle && value) {
        onDeleteSingle(value);
        setSelectedOptionItem(prev => prev.filter(item => item.value !== value));
      } else {
        onDeleteAll();
        setSelectedOptionItem([]);
      }
    },
    [onDeleteSingle, onDeleteAll, setSelectedOptionItem],
  );

  const clearDropdownAndSearch = useCallback(() => {
    setSearchInputValue('');
    setFocusedItemIdx(-1);
    setShowDropdown(false);
  }, []);

  const onOptionListChange = useCallback(
    (item: BasicOptionItem<T>) => {
      if (item.value === CREATE_VALUE) {
        onCreate?.(searchInputValue);
        onHandleSelect({ value: searchInputValue as T, label: searchInputValue as T });
      } else if (selectedValues.includes(item.value as T)) {
        onHandleDelete(true, item.value as T);
      } else {
        onHandleSelect(item as BasicOptionItem<T>);
      }
      clearDropdownAndSearch();
    },
    [
      onCreate,
      searchInputValue,
      onHandleSelect,
      selectedValues,
      onHandleDelete,
      clearDropdownAndSearch,
    ],
  );

  const handleKeyUpEvent = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'ArrowDown':
          return setFocusedItemIdx(prev => (prev === optionItems.length - 1 ? -1 : prev + 1));
        case 'ArrowUp':
          return setFocusedItemIdx(prev => (prev === -1 ? optionItems.length - 1 : prev - 1));
        case 'Enter': {
          if (focusedItemIdx === -1) {
            return;
          }

          const item = optionItems[focusedItemIdx];
          if (item.value === CREATE_VALUE) {
            return;
          }
          onHandleSelect({ value: item.value as T, label: item.label });
          clearDropdownAndSearch();
        }
      }
    },
    [setFocusedItemIdx, onHandleSelect, setShowDropdown, optionItems, focusedItemIdx],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current != null && !wrapperRef.current.contains(event.target as Node)) {
        clearDropdownAndSearch();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    if (!showDropdown || !optionItems?.length || !search.searchable) {
      return;
    }

    const handleKeyEvent = (event: any) => {
      handleKeyUpEvent(event);
    };

    document.addEventListener('keyup', handleKeyEvent);
    return () => {
      document.removeEventListener('keyup', handleKeyEvent);
    };
  }, [dropdownRef, showDropdown, optionItems, search.searchable, focusedItemIdx]);

  return (
    <SelectContainer width={width} ref={wrapperRef}>
      <MultiSelectInput<T>
        optionItems={selectedOptionItem}
        onDeleteSingle={val => onHandleDelete(true, val)}
        onDeleteAll={() => onHandleDelete(false)}
        width={width}
        dropdownOpened={showDropdown}
        onFocus={() => search.searchable && setSearchInputValue('')}
        onClick={() => {
          showDropdown && setFocusedItemIdx(-1);
          setShowDropdown(!showDropdown);
        }}
        readOnly={!search.searchable}
        {...input}
      />
      {showDropdown && (
        <OptionListWrapper ref={dropdownRef}>
          <MultipleOptionList<T>
            focusedItemIdx={focusedItemIdx}
            values={selectedValues}
            option={{
              type: 'basic',
              items: optionItems as BasicOptionItem<T>[],
            }}
            onChange={onOptionListChange}
            searchInput={
              search.searchable && (
                <SearchInput
                  {...search}
                  type="text"
                  value={searchInputValue ?? ''}
                  onChange={e => setSearchInputValue(e.currentTarget.value)}
                />
              )
            }
          />
        </OptionListWrapper>
      )}
    </SelectContainer>
  );
}

const SelectContainer = styled.div<{ width?: number }>`
  position: relative;
  width: ${({ width }) => `${width}px` ?? '100%'};
  min-width: 310px;
`;

const OptionListWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 6px;
  z-index: 100;
`;
