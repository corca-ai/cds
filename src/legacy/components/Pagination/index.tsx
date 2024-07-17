import { useMemo } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B2 } from '../Text';
import { color } from '../styles';

const Item = styled.button<{ selected?: boolean; borderRadius: number }>`
  padding: 0;
  width: 32px;
  height: 32px;
  border: 1px solid ${props => (props.selected ? color['grey-50'] : color['grey-40'])};
  border-radius: ${props => props.borderRadius}px;
  background-color: ${props => (props.selected ? color['grey-30'] : color.white)};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  gap: 6px;
`;

export interface PaginationProps {
  current: number;
  total: number;
  onSelect: (page: number) => void;
}

const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

const COUNT_PER_PAGE = 5;

export function Pagination({ current, total, onSelect }: PaginationProps) {
  const { start, end, visiblePages, showMore, canGoNext, canGoPrev } = useMemo(() => {
    const start = (Math.ceil(current / COUNT_PER_PAGE) - 1) * COUNT_PER_PAGE + 1;
    const end = Math.min(start + COUNT_PER_PAGE - 1, total);
    const visiblePages = range(start, end);

    const showMore = total > COUNT_PER_PAGE;

    const canGoPrev = current > COUNT_PER_PAGE;
    const canGoNext = end < total;

    return {
      start,
      end,
      visiblePages,
      showMore,
      canGoNext,
      canGoPrev,
    };
  }, [current, total]);

  return (
    <Container>
      {showMore && (
        <Item
          disabled={!canGoPrev}
          borderRadius={4}
          onClick={() => {
            if (canGoPrev) {
              onSelect(start - 1);
            }
          }}
        >
          <Icon.ChevronLeftSmall color={canGoPrev ? color['grey-80'] : color['grey-40']} />
        </Item>
      )}
      {visiblePages.map(page => (
        <Item
          disabled={page === current}
          key={page}
          selected={page === current}
          borderRadius={3}
          onClick={() => {
            onSelect(page);
          }}
        >
          <B2>{page}</B2>
        </Item>
      ))}
      {showMore && (
        <Item
          disabled={!canGoNext}
          borderRadius={4}
          onClick={() => {
            if (canGoNext) {
              onSelect(end + 1);
            }
          }}
        >
          <Icon.ChevronRightSmall color={canGoNext ? color['grey-80'] : color['grey-40']} />
        </Item>
      )}
    </Container>
  );
}
