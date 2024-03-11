import { ReactElement, ReactNode, useId } from 'react';
import { Tooltip as BasicTooltip, PlacesType } from 'react-tooltip';

import styled from '@emotion/styled';

import { color, typography } from '../styles';

export type Direction = PlacesType;

interface TooltipProps {
  direction: Direction;
  withArrow?: boolean;
  children: ReactNode;
  content: string | ReactElement;
}

const TOOLTIP_SIZE = 10;

export function Tooltip({
  direction = 'bottom',
  withArrow = true,
  children,
  content,
}: TooltipProps) {
  const id = useId();

  return (
    <TooltipContainer>
      <Content
        data-tooltip-offset={withArrow ? TOOLTIP_SIZE / 2 : 2}
        data-tooltip-id={id}
        data-tooltip-delay-hide={10000000000}
      >
        {children}
      </Content>
      <TooltipBox id={id} noArrow={!withArrow} place={direction} positionStrategy="fixed">
        {content}
      </TooltipBox>
    </TooltipContainer>
  );
}

const TooltipContainer = styled.div`
  display: flex;
  width: fit-content;
`;

const Content = styled.div`
  display: flex;
`;

const TOOLTIP_TOP_BOTTOM_ARROW_SIZE = 15;

const TooltipBox = styled(BasicTooltip)`
  width: auto;
  max-width: 200px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  z-index: 10;
  position: absolute !important;

  // override tooltip's default style
  padding: 7px 10px !important;
  font-size: ${typography.size.xxs}px !important;
  font-weight: ${typography.weight.regular} !important;
  line-height: normal;
  border-radius: 8px !important;
  background: ${color['main-black']} !important;
  transform: rotate(0) !important;

  ${props => {
    const [position, direction] = props.place!.split('-');
    if (position === 'top' || position === 'bottom') {
      if (direction === 'start') {
        return `
            left: calc(50% - ${TOOLTIP_TOP_BOTTOM_ARROW_SIZE}px - ${TOOLTIP_SIZE}px) !important;
          `;
      }

      if (direction === 'end') {
        return `
            right: calc(50% - ${TOOLTIP_TOP_BOTTOM_ARROW_SIZE}px - ${TOOLTIP_SIZE}px) !important;
            left: auto !important;
        `;
      }
    }
  }}

  .react-tooltip-arrow {
    width: ${TOOLTIP_SIZE}px;
    height: ${TOOLTIP_SIZE}px;
    border-bottom-right-radius: 2px;
    ${props => {
      const [position, direction] = props.place!.split('-');
      if (position === 'top' || position === 'bottom') {
        if (direction === 'start') {
          return `
            left: ${TOOLTIP_TOP_BOTTOM_ARROW_SIZE + TOOLTIP_SIZE / 2}px !important;
          `;
        }

        if (direction === 'end') {
          return `
            left: auto !important;
            right: calc(${TOOLTIP_TOP_BOTTOM_ARROW_SIZE + TOOLTIP_SIZE / 2}px) !important;
        `;
        }
      }

      if (position === 'right' || position === 'left') {
        if (direction === 'start') {
          return `
            top: ${TOOLTIP_TOP_BOTTOM_ARROW_SIZE}px !important;
          `;
        }

        if (direction === 'end') {
          return `
            top: auto !important;
            bottom: ${TOOLTIP_TOP_BOTTOM_ARROW_SIZE}px !important;
        `;
        }
      }
    }}
  }
`;
