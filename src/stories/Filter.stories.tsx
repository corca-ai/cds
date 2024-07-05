import React, { useState } from 'react';

import styled from '@emotion/styled';

import { B3, H2, Select } from '../components';
import { Filter } from '../components/Filter';
import { type FilterCategoryType } from '../components/Filter/Default';

export default {
  title: 'Components/Filter',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=1013-35382&mode=design&t=S101dBYOOd2CT4Mo-0',
    },
  },
};

const MOCK_FILTER_CATEGORIES: Array<FilterCategoryType<string>> = [
  {
    label: '상태',
    options: [
      {
        label: '활성',
        value: '0',
      },
      {
        label: '비활성1',
        value: '1',
      },
      {
        label: '비활성2',
        value: '2',
      },
      {
        label: '비활성3',
        value: '3',
        disabled: true,
      },
    ],
  },
  {
    label: '생성일',
    options: [
      {
        label: '전체',
        value: '0',
      },
      {
        label: '1주',
        value: '1',
      },
      {
        label: '1개월',
        value: '2',
      },
      {
        label: '3개월',
        value: '3',
      },
      {
        label: '직접입력',
        value: '직접입력',
      },
    ],
  },
];

type FilterValues = Record<string, string>;

const INIT_FILTER_VALUE: FilterValues = {
  상태: '0',
  생성일: '0',
};

type CustomValue = Array<Date | null>;
const INIT_CUSTOM_VALUE: CustomValue = [null, null];

const SelectedValueWrapper = styled.div`
  min-height: 40px;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export function Basic() {
  const [filterValues, setFilterValues] = useState<FilterValues>(INIT_FILTER_VALUE);
  const [customValue, setCustomValue] = useState<CustomValue>(INIT_CUSTOM_VALUE);

  return (
    <>
      <SelectedValueWrapper>
        <h4>선택 : {JSON.stringify(filterValues)}</h4>
        <B3>{customValue[0] != null && `${customValue[0].toDateString()}부터 `}</B3>
        <B3>{customValue[1] != null && `${customValue[1].toDateString()}까지`}</B3>
      </SelectedValueWrapper>
      <Filter.Frame
        closeFilter={() => {
          alert('close');
        }}
        reset={() => {
          setFilterValues(INIT_FILTER_VALUE);
          setCustomValue(INIT_CUSTOM_VALUE);
        }}
        resetLabel="초기화"
      >
        {MOCK_FILTER_CATEGORIES.map(category => {
          return (
            <React.Fragment key={category.label}>
              <Filter.Category
                label={category.label}
                options={category.options}
                selected={filterValues[category.label]}
                changeValue={value => {
                  setFilterValues(prev => ({
                    ...prev,
                    [category.label]: value,
                  }));
                }}
              />
              {filterValues[category.label] === '직접입력' && (
                <Filter.DateRange
                  dateRange={customValue}
                  changeValue={value => {
                    setCustomValue(value);
                  }}
                  startDateLabel="부터"
                  endDateLabel="까지"
                  language="ko"
                />
              )}
            </React.Fragment>
          );
        })}
      </Filter.Frame>
    </>
  );
}

export function MultiSelectFilter() {
  const INIT_FILTER_VALUE = ['0'];
  const [filterValues, setFilterValues] = useState(INIT_FILTER_VALUE);
  const category = MOCK_FILTER_CATEGORIES[0];
  return (
    <>
      <SelectedValueWrapper>
        <H2>CDS 피그마 X, 개발단 예시</H2>
        선택 : {filterValues.join(', ')}
      </SelectedValueWrapper>
      <Filters>
        <Filter.Frame
          closeFilter={() => {
            alert('close');
          }}
          reset={() => {
            setFilterValues(INIT_FILTER_VALUE);
          }}
          resetLabel="초기화"
        >
          <Filter.Category
            label={category.label}
            options={category.options}
            selected={filterValues}
            changeValue={value => {
              setFilterValues(prev => {
                const newValue = prev.filter(v => v !== value);
                if (prev.includes(value)) {
                  return newValue ?? [];
                }
                return [...newValue, value];
              });
            }}
          />
        </Filter.Frame>
        <Filter.Frame
          width={473}
          closeFilter={() => {
            alert('close');
          }}
          reset={() => {
            setFilterValues(INIT_FILTER_VALUE);
          }}
          resetLabel="초기화"
        >
          <Filter.CategoryLabel>커스텀 카테고리 예시</Filter.CategoryLabel>
          <Filter.CategoryItemWrapper wrap="no-wrap">
            <Select selectedValue={''} onSelect={() => {}} options={[]} />
            <Select selectedValue={''} onSelect={() => {}} options={[]} />
            <Select selectedValue={''} onSelect={() => {}} options={[]} />
          </Filter.CategoryItemWrapper>
        </Filter.Frame>
      </Filters>
    </>
  );
}
