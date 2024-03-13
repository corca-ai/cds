import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { type ReactElement } from 'react';

import styled from '@emotion/styled';

import { color, typography } from '../styles';

type Direction =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Position = 'start' | 'end';

export interface TooltipProps {
  direction?: Direction;
  withArrow?: boolean;
  children: ReactNode;
  content: string | ReactElement;
}

type TooltipStylesProps = Omit<TooltipProps, 'children' | 'content'>;

export function Tooltip({ direction = 'top', withArrow = true, children, content }: TooltipProps) {
  const [placement, position] = direction.split('-') as [Placement, Position];
  return (
    <TooltipContainer>
      <ContentsWrapper>{children}</ContentsWrapper>
      <TooltipWrapper className="tooltip-box">
        <TooltipArrow placement={placement} />
        <TooltipBubble placement={placement} position={position}>
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
      transition: opacity 0.3s ease-in-out;
    }
  }
`;

const TooltipWrapper = styled.div`
  z-index: 10;
  /* visibility: hidden;
  opacity: 0; */
`;

const ContentsWrapper = styled.div`
  display: flex;
`;

const TOOLTIP_ARROW_WIDTH = 10;
const TOP_BOTTOM_ARROW_DISTANCE = 15;

const TooltipArrow = styled.div<{
  placement: Placement;
}>`
  position: absolute;
  transform: translateX(-50%);
  background: ${color['main-black']};
  width: ${TOOLTIP_ARROW_WIDTH}px;
  height: ${TOOLTIP_ARROW_WIDTH}px;
  transform: rotate(45deg);

  ${props => {
    let additionalStyles = '';
    if (props.placement === 'top') {
      additionalStyles += `
        border-bottom-right-radius: 2px;
        bottom: calc(100% + ${TOOLTIP_ARROW_WIDTH / 2}px);
        left: calc(50% - ${TOOLTIP_ARROW_WIDTH / 2}px);
      `;
    }

    if (props.placement === 'bottom') {
      additionalStyles += `
        border-top-left-radius: 2px;  
        left: calc(50% - ${TOOLTIP_ARROW_WIDTH / 2}px);
        top: calc(100% + ${TOOLTIP_ARROW_WIDTH / 2}px);
      `;
    }

    if (props.placement === 'left') {
      additionalStyles += `
        border-top-right-radius: 2px;
        right: calc(100% + ${TOOLTIP_ARROW_WIDTH / 2}px);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      `;
    }

    if (props.placement === 'right') {
      additionalStyles += `
        border-bottom-left-radius: 2px;
        left: calc(100% + ${TOOLTIP_ARROW_WIDTH / 2}px);
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      `;
    }

    return css`
      ${additionalStyles}
    `;
  }}
`;

const TooltipBubble = styled.div<{
  placement: Placement;
  position?: Position;
}>`
  position: absolute;
  width: max-content;
  height: max-content;
  max-width: 200px;
  cursor: help;
  background: ${color['main-black']};
  color: ${color.white};
  font-size: ${typography.size.xxs}px;
  font-weight: ${typography.weight.regular};
  padding: 7px 10px;
  border-radius: 7px;
  white-space: pre-wrap;
  word-break: break-all;

  ${props => {
    let additionalStyles = '';
    if (props.placement === 'top') {
      additionalStyles += `
        bottom: calc(100% + ${TOOLTIP_ARROW_WIDTH}px);
        left: 50%;
        transform: translate(-50%);
      `;

      if (props.position === 'start') {
        additionalStyles += `
          transform: translate(-${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px);
        `;
      } else if (props.position === 'end') {
        additionalStyles += `
          transform: translate(calc(${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px - 100%));
        `;
      }
    }

    if (props.placement === 'bottom') {
      additionalStyles += `
        top: calc(100% + ${TOOLTIP_ARROW_WIDTH}px);
        left: 50%;
        transform: translate(-50%);
      `;

      if (props.position === 'start') {
        additionalStyles += `
          transform: translate(-${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px);
        `;
      } else if (props.position === 'end') {
        additionalStyles += `
          transform: translate(calc(${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px - 100%));
        `;
      }
    }

    if (props.placement === 'left') {
      additionalStyles += `
        right: 100%;
        transform: translate(-${TOOLTIP_ARROW_WIDTH}px, -50%);
      `;

      if (props.position === 'start') {
        additionalStyles += `
          transform: translate(-${TOOLTIP_ARROW_WIDTH}px, -${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px);
        `;
      }
      if (props.position === 'end') {
        additionalStyles += `
          transform: translate(-${TOOLTIP_ARROW_WIDTH}px, calc(-100% + ${TOOLTIP_ARROW_WIDTH}px));
        `;
      }
    }

    if (props.placement === 'right') {
      additionalStyles += `
        left: 100%;
        transform: translate(${TOOLTIP_ARROW_WIDTH}px, -50%);
      `;

      if (props.position === 'start') {
        additionalStyles += `
          transform: translate(${TOOLTIP_ARROW_WIDTH}px, calc(-100% + ${TOOLTIP_ARROW_WIDTH}px));
        `;
      }
      if (props.position === 'end') {
        additionalStyles += `
          transform: translate(${TOOLTIP_ARROW_WIDTH}px, -${TOOLTIP_ARROW_WIDTH + TOP_BOTTOM_ARROW_DISTANCE}px);
        `;
      }
    }

    return css`
      ${additionalStyles}
    `;
  }}
`;

// const TOOLTIP_ARROW_WIDTH = 9;
// const TOOLTIP_ARROW_HEIGHT = 5;
// const DISTANCE_OF_ARROW_ELEMENT = 4;

// const directionStylesheet = ({
//   direction,
//   withArrow,
// }: {
//   direction?: Direction;
//   withArrow?: boolean;
// }) => {
//   const directionStyle = {
//     bubblePosition: `calc(100% + ${
//       withArrow ? TOOLTIP_ARROW_HEIGHT + DISTANCE_OF_ARROW_ELEMENT : DISTANCE_OF_ARROW_ELEMENT
//     }px)`,
//     arrowPosition: `calc(100% - ${DISTANCE_OF_ARROW_ELEMENT}px)`,
//     arrowRadius: '2px',
//   } as const;

//   switch (direction) {
//     case 'top':
//       return css`
//         bottom: ${directionStyle.bubblePosition};
//         left: 50%;
//         transform: translate(-50%, 1px);

//         &::after {
//           top: ${directionStyle.arrowPosition};
//           left: 50%;
//           transform: translate(-50%, -1px) rotate(45deg);
//           border-bottom-right-radius: ${directionStyle.arrowRadius};
//         }
//       `;
//     case 'bottom':
//       return css`
//         top: ${directionStyle.bubblePosition};
//         left: 50%;
//         transform: translate(-50%, 1px);

//         &::after {
//           bottom: ${directionStyle.arrowPosition};
//           left: 50%;
//           transform: translate(-50%, 1px) rotate(45deg);
//           border-top-left-radius: ${directionStyle.arrowRadius};
//         }
//       `;
//     case 'left':
//       return css`
//         top: 50%;
//         right: ${directionStyle.bubblePosition};
//         transform: translate(1px, -50%);

//         &::after {
//           top: 40%;
//           left: ${directionStyle.arrowPosition};
//           transform: translateX(-1px) rotate(45deg);
//           border-top-right-radius: ${directionStyle.arrowRadius};
//         }
//       `;
//     case 'right':
//       return css`
//         top: 50%;
//         left: ${directionStyle.bubblePosition};
//         transform: translate(1px, -50%);

//         &::after {
//           top: 40%;
//           right: ${directionStyle.arrowPosition};
//           transform: translateX(1px) rotate(45deg);
//           border-bottom-left-radius: ${directionStyle.arrowRadius};
//         }
//       `;
//     default:
//       return css``;
//   }
// };

// const TooltipBox = styled.div<TooltipStylesProps>`
//   position: relative;
//   cursor: help;
//   z-index: 10000;
//   opacity: 0;

//   ${({ direction, withArrow }) => directionStylesheet({ direction, withArrow })}

//   position: absolute;
//   visibility: hidden;
//   width: max-content;
//   height: max-content;

//   background: ${color['main-black']};
//   color: ${color.white};
//   font-size: ${typography.size.xxs}px;
//   font-weight: ${typography.weight.regular};
//   padding: 7px 10px;
//   border-radius: 7px;

//   ${({ withArrow }) =>
//     withArrow &&
//     css`
//       &::after {
//         content: '';
//         position: absolute;
//         width: ${TOOLTIP_ARROW_WIDTH}px;
//         height: ${TOOLTIP_ARROW_WIDTH}px; // arrow의 base인 정사각형 세로 height
//         background: ${color['main-black']};
//       }
//     `}
// `;
