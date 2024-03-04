import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { type ReactElement } from 'react';

import styled from '@emotion/styled';

import { color, typography } from '../styles';

type Direction = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
  direction?: Direction;
  withArrow?: boolean;
  children: ReactNode;
  content: string | ReactElement;
}

type TooltipStylesProps = Omit<TooltipProps, 'children' | 'content'>;

export function Tooltip({ direction = 'top', withArrow = true, children, content }: TooltipProps) {
  return (
    <TooltipContainer>
      {children}
      <TooltipBox className="tooltip-box" withArrow={withArrow} direction={direction}>
        {content}
      </TooltipBox>
    </TooltipContainer>
  );
}

const TooltipContainer = styled.div`
  position: relative;
  &:hover {
    .tooltip-box {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

const TOOLTIP_ARROW_WIDTH = 9;
const TOOLTIP_ARROW_HEIGHT = 5;
const DISTANCE_OF_ARROW_ELEMENT = 4;

const directionStylesheet = ({
  direction,
  withArrow,
}: {
  direction?: Direction;
  withArrow?: boolean;
}) => {
  const directionStyle = {
    bubblePosition: `calc(100% + ${
      withArrow ? TOOLTIP_ARROW_HEIGHT + DISTANCE_OF_ARROW_ELEMENT : DISTANCE_OF_ARROW_ELEMENT
    }px)`,
    arrowPosition: `calc(100% - ${DISTANCE_OF_ARROW_ELEMENT}px)`,
    arrowRadius: '2px',
  } as const;

  switch (direction) {
    case 'top':
      return css`
        bottom: ${directionStyle.bubblePosition};
        left: 50%;
        transform: translate(-50%, 1px);

        &::after {
          top: ${directionStyle.arrowPosition};
          left: 50%;
          transform: translate(-50%, -1px) rotate(45deg);
          border-bottom-right-radius: ${directionStyle.arrowRadius};
        }
      `;
    case 'bottom':
      return css`
        top: ${directionStyle.bubblePosition};
        left: 50%;
        transform: translate(-50%, 1px);

        &::after {
          bottom: ${directionStyle.arrowPosition};
          left: 50%;
          transform: translate(-50%, 1px) rotate(45deg);
          border-top-left-radius: ${directionStyle.arrowRadius};
        }
      `;
    case 'left':
      return css`
        top: 50%;
        right: ${directionStyle.bubblePosition};
        transform: translate(1px, -50%);

        &::after {
          top: 40%;
          left: ${directionStyle.arrowPosition};
          transform: translateX(-1px) rotate(45deg);
          border-top-right-radius: ${directionStyle.arrowRadius};
        }
      `;
    case 'right':
      return css`
        top: 50%;
        left: ${directionStyle.bubblePosition};
        transform: translate(1px, -50%);

        &::after {
          top: 40%;
          right: ${directionStyle.arrowPosition};
          transform: translateX(1px) rotate(45deg);
          border-bottom-left-radius: ${directionStyle.arrowRadius};
        }
      `;
    default:
      return css``;
  }
};

const TooltipBox = styled.div<TooltipStylesProps>`
  position: relative;
  cursor: help;
  z-index: 10000;
  opacity: 0;

  ${({ direction, withArrow }) => directionStylesheet({ direction, withArrow })}

  position: absolute;
  visibility: hidden;
  width: max-content;
  height: max-content;

  background: ${color['main-black']};
  color: ${color.white};
  font-size: ${typography.size.xxs}px;
  font-weight: ${typography.weight.regular};
  padding: 7px 10px;
  border-radius: 7px;

  ${({ withArrow }) =>
    withArrow &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: ${TOOLTIP_ARROW_WIDTH}px;
        height: ${TOOLTIP_ARROW_WIDTH}px; // arrow의 base인 정사각형 세로 height
        background: ${color['main-black']};
      }
    `}
`;
