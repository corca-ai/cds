import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B5 } from '../Text';
import { color } from '../styles';
import { MultiSelectInput } from './MultiSelectInput';
import { MultipleOptionList, OptionList, type BasicOptionItem } from './OptionList';
import { type SelectInputBaseProps } from './SelectInput';

interface MultiSelectProps<T extends string>
  extends Omit<SelectInputBaseProps, 'value' | 'onSelect' | 'width'> {
  searchable?: boolean;
  onCreate?: (value: string | null) => void;
  selectedValues: T[]; // TODO: delete null type
  onSelect: (value: T) => void;
  onDisSelect: (value: T) => void;
  options: Array<BasicOptionItem<T>>;
  width?: number;
  inputWidth?: number;
}

const CREATE_VALUE = 'CREATE_NEW_VALUE';

export function MultiSelect<T extends string>({
  searchable,
  onCreate,
  options,
  selectedValues = [],
  onSelect,
  onDisSelect,
  width,
  inputWidth,
  ...input
}: MultiSelectProps<T>) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [searchLabel, setSearchLabel] = useState<string | null>(null);
  const [focusedItemIdx, setFocusedItemIdx] = useState(-1);

  const selectedLabels = useMemo(() => {
    const selectedLabels: string[] = [];
    options.forEach(option => {
      if (!selectedValues?.includes(option.value)) {
        return;
      }
      selectedLabels.push(option?.label ?? '');
    });
    return selectedLabels;
  }, [selectedValues]);

  const optionItems: BasicOptionItem[] = useMemo(() => {
    if (searchable && searchLabel) {
      const searchFilteredOptions = options.filter(option =>
        option.label.toLocaleLowerCase().includes(searchLabel.toLocaleLowerCase()),
      );
      if (onCreate != null) {
        return [
          ...searchFilteredOptions,
          { icon: Icon.Add, label: searchLabel, value: CREATE_VALUE },
        ];
      }
      return searchFilteredOptions;
    }
    return options;
  }, [searchable, options, searchLabel]);

  const clearDropdownAndSearch = useCallback(() => {
    setSearchLabel(null);
    setFocusedItemIdx(-1);
    setShowDropdown(false);
  }, []);

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
          onSelect(item.value as T);
          clearDropdownAndSearch();
        }
      }
    },
    [setFocusedItemIdx, onSelect, setShowDropdown, optionItems, focusedItemIdx],
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
    if (!showDropdown || !optionItems?.length || !searchable) {
      return;
    }

    const handleKeyEvent = (event: any) => {
      handleKeyUpEvent(event);
    };

    document.addEventListener('keyup', handleKeyEvent);
    return () => {
      document.removeEventListener('keyup', handleKeyEvent);
    };
  }, [dropdownRef, showDropdown, optionItems, searchable, focusedItemIdx]);

  return (
    <SelectContainer width={width} ref={wrapperRef}>
      <MultiSelectInput
        searchable={searchable}
        width={inputWidth}
        dropdownOpened={showDropdown}
        values={selectedLabels}
        onChange={e => {
          if (searchable) {
            if (!showDropdown) setShowDropdown(true);
            setSearchLabel(e.currentTarget.value);
          }
        }}
        onFocus={() => {
          if (searchable) {
            setSearchLabel('');
          }
        }}
        onClick={() => {
          if (showDropdown) {
            setFocusedItemIdx(-1);
          }
          setShowDropdown(!showDropdown);
        }}
        readOnly={!searchable}
        {...input}
      />
      {showDropdown && !(optionItems.length === 0) && (
        <OptionListWrapper ref={dropdownRef}>
          <MultipleOptionList
            focusedItemIdx={focusedItemIdx}
            values={selectedValues}
            option={{
              type: 'basic',
              items: optionItems,
            }}
            onChange={item => {
              if (item === CREATE_VALUE) {
                onCreate?.(searchLabel);
                onSelect(searchLabel as T);
              } else if (selectedValues.find(value => value === item)) {
                onDisSelect(item as T);
              } else {
                onSelect(item as T);
              }
              clearDropdownAndSearch();
            }}
          />
        </OptionListWrapper>
      )}
    </SelectContainer>
  );
}

// interface SelectedItemButtonProps {
//   title: MultiSelectProps['selectedValues'];
//   onClick: () => void;
// }
// function SelectedItemButton() {
//   return (
//     <SelectedItemWrapper>
//       <B5></B5>
//       <Icon.CancelSmall size={13} />
//     </SelectedItemWrapper>
//   );
// }

const SelectContainer = styled.div<{ width?: number }>`
  position: relative;
  width: ${({ width }) => `${width}px` ?? '100%'};
`;

const OptionListWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 6px;
  z-index: 100;
`;

const SelectedItemWrapper = styled.div`
  height: 20px;
  padding: 3px 2px 3px 4px;
  border-radius: 4px 0px 0px 0px;
  background-color: ${color['grey-20']};

  display: flex;
  align-items: space-between;
`;
