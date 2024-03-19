import { css } from '@emotion/react';
import { PropsWithChildren, ReactElement } from 'react';

import styled from '@emotion/styled';

import { color, typography } from '../styles';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Position = 'start' | 'end' | 'center';

export type TooltipDirection = `${Placement}-${Position}`;

export interface TooltipProps {
  direction?: TooltipDirection;
  withArrow?: boolean;
  content: string | ReactElement;
}

type Split<S extends string> = S extends `${infer T}-${infer U}` ? [T, U] : [S];

export function Tooltip({
  direction = 'top-center',
  withArrow = true,
  children,
  content,
}: PropsWithChildren<TooltipProps>) {
  const [placement, position] = direction.split('-') as Split<typeof direction>;

  return (
    <TooltipContainer>
      <ContentsWrapper>{children}</ContentsWrapper>
      <TooltipWrapper className="tooltip-box">
        {withArrow && <TooltipArrow placement={placement} />}
        <TooltipBubble withArrow={withArrow} placement={placement} position={position}>
          {content}
        </TooltipBubble>
      </TooltipWrapper>
    </TooltipContainer>
  );
}

const TooltipContainer = styled.div`
  position: relative;
  &:hover {
    .tooltip-box {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const TooltipWrapper = styled.div`
  visibility: hidden;
  opacity: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const TOOLTIP_ARROW_WIDTH = 10;
const ARROW_DIAGONAL = Math.sqrt(TOOLTIP_ARROW_WIDTH ** 2 + TOOLTIP_ARROW_WIDTH ** 2);
const DISTANCE_FROM_CONTENT_TO_ARROW = 2;

const getArrowMixin = (placement: Placement) => {
  const BORDER_ARROW_RADIUS = 2;

  const DISTANCE_ARROW_DESCENDED_LENGTH = (ARROW_DIAGONAL - TOOLTIP_ARROW_WIDTH) / 2;
  const DISTANCE_ARROW_TO_ELEMENT =
    DISTANCE_ARROW_DESCENDED_LENGTH + DISTANCE_FROM_CONTENT_TO_ARROW;

  switch (placement) {
    case 'bottom':
      return css`
        border-bottom-right-radius: ${BORDER_ARROW_RADIUS}px;
        bottom: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        left: calc(50% - ${TOOLTIP_ARROW_WIDTH / 2}px);
      `;
    case 'top':
      return css`
        border-top-left-radius: ${BORDER_ARROW_RADIUS}px;
        top: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        left: calc(50% - ${TOOLTIP_ARROW_WIDTH / 2}px);
      `;
    case 'left':
      return css`
        border-top-right-radius: ${BORDER_ARROW_RADIUS}px;
        right: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      `;
    case 'right':
      return css`
        border-bottom-left-radius: ${BORDER_ARROW_RADIUS}px;
        left: calc(100% + ${DISTANCE_ARROW_TO_ELEMENT}px);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      `;
    default:
      return null;
  }
};

const TooltipArrow = styled.div<{ placement: Placement }>`
  position: absolute;
  background: ${color['main-black']};
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_WIDTH}px;
  transform: rotate(45deg);
  z-index: 10;
  ${props => getArrowMixin(props.placement)}
`;

type BubbleProps = {
  placement: Placement;
  position?: Position;
  withArrow?: boolean;
};

const getBubbleMixin = ({ withArrow, placement, position }: BubbleProps) => {
  const ARROW_OFFSET = `calc(100% + ${ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW}px)`;

  const TOP_BOTTOM_STYLE = css`
    left: 50%;
    transform: ${calculateBubbleTranslate({ placement, position, withArrow })};
  `;
  const LEFT_RIGHT_STYLE = css`
    top: 50%;
    transform: ${calculateBubbleTranslate({ placement, position, withArrow })};
  `;

  switch (placement) {
    case 'top':
      return css`
        top: ${ARROW_OFFSET};
        ${TOP_BOTTOM_STYLE}
      `;
    case 'bottom':
      return css`
        bottom: ${ARROW_OFFSET};
        ${TOP_BOTTOM_STYLE}
      `;
    case 'left':
      return css`
        right: 100%;
        ${LEFT_RIGHT_STYLE}
      `;
    case 'right':
      return css`
        left: 100%;
        ${LEFT_RIGHT_STYLE}
      `;
    default:
      return null;
  }
};

const mainAxis = (forward: boolean, threshold: number, offset) => {
  if (forward) {
    return `${offset - threshold}px`;
  }
  return `${threshold - offset}px`;
};

const crossAxis = (position: Position, diff: number) => {
  switch (position) {
    case 'center':
      return '-50%';
    case 'start':
      return `-${diff}px`;
    case 'end':
      return `calc(${diff}px - 100%)`;
    default:
      return '0%';
  }
};

const calculateBubbleTranslate = ({ placement, position, withArrow }: BubbleProps): string => {
  const TOP_BOTTOM_ARROW_DISTANCE = 15;
  const LEFT_RIGHT_ARROW_DISTANCE = 9;

  const VERT_ARROW_OFFSET = ARROW_DIAGONAL + TOP_BOTTOM_ARROW_DISTANCE;
  const HORI_ARROW_OFFSET = ARROW_DIAGONAL + LEFT_RIGHT_ARROW_DISTANCE;

  const DISTANCE_FROM_CONTENT = TOOLTIP_ARROW_WIDTH - DISTANCE_FROM_CONTENT_TO_ARROW;
  const offset = withArrow ? 0 : DISTANCE_FROM_CONTENT;

  function TopOrBottom() {
    const translateY = mainAxis(placement === 'bottom', 0, offset);
    const translateX = crossAxis(position, VERT_ARROW_OFFSET);
    return `translate(${translateX}, ${translateY})`;
  }

  function LeftOrRight() {
    const threshold = ARROW_DIAGONAL / 2 + DISTANCE_FROM_CONTENT_TO_ARROW;
    const translateX = mainAxis(placement === 'left', threshold, offset);
    const translateY = crossAxis(position, HORI_ARROW_OFFSET);
    return `translate(${translateX}, ${translateY})`;
  }

  switch (placement) {
    case 'top':
    case 'bottom':
      return TopOrBottom();
    case 'left':
    case 'right':
      return LeftOrRight();
    default:
      return '';
  }
};

const TooltipBubble = styled.div<BubbleProps>`
  position: absolute;
  z-index: 10;
  width: max-content;
  height: max-content;
  max-width: 300px;
  cursor: help;
  background: ${color['main-black']};
  color: ${color.white};
  font-size: ${typography.size.xxs}px;
  font-weight: ${typography.weight.regular};
  padding: 7px 10px;
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-all;

  ${props => getBubbleMixin(props)}
`;
