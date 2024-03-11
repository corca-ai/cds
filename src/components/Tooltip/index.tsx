import { ReactElement, ReactNode, useId } from 'react';
import { Tooltip as BasicTooltip, PlacesType } from 'react-tooltip';

import styled from '@emotion/styled';

import { color, typography } from '../styles';

export type Direction = PlacesType;

export interface TooltipProps {
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
        data-tooltip-offset={withArrow ? TOOLTIP_SIZE / 2 + 2 : 2}
        data-tooltip-id={id}
        data-tooltip-delay-show={0}
        data-tooltip-delay-hide={0}
      >
        {children}
      </Content>
      <TooltipBox id={id} noArrow={!withArrow} place={direction}>
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

const TooltipBox = styled(BasicTooltip)`
  width: auto;
  max-width: 300px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  z-index: 10;

  // override tooltip's default style
  padding: 7px 10px !important;
  font-size: ${typography.size.xxs}px !important;
  font-weight: ${typography.weight.regular} !important;
  line-height: normal;
  border-radius: 8px !important;
  background: ${color['main-black']} !important;
  opacity: 1 !important;

  .react-tooltip-arrow {
    width: ${TOOLTIP_SIZE}px;
    height: ${TOOLTIP_SIZE}px;
    border-bottom-right-radius: 2px;
  }
`;
