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
    <Container
      data-tooltip-offset={withArrow ? TOOLTIP_SIZE / 2 + 2 : 2}
      data-tooltip-id={id}
      data-tooltip-delay-show={0}
      data-tooltip-delay-hide={1000000}
    >
      <Contents>{children}</Contents>
      <TooltipBox id={id} noArrow={!withArrow} place={direction}>
        {content}
      </TooltipBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
`;

const Contents = styled.div`
  display: flex;
`;

const TooltipBox = styled(BasicTooltip)`
  width: auto;
  max-width: 300px;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  z-index: 10;
  /* position: absolute !important; */

  // override tooltip's default style
  padding: 7px 10px !important;
  font-size: ${typography.size.xxs}px !important;
  font-weight: ${typography.weight.regular} !important;
  line-height: normal;
  border-radius: 8px !important;
  background: ${color['main-black']} !important;
  opacity: 1 !important;

  ${props => {
    const [position, direction] = props.place!.split('-');
    let transform = '';
    let arrowTransform = '';
    let specificPosition = '';

    switch (position) {
      case 'top':
      case 'bottom':
        if (direction === 'start') {
          // transform = 'translate(-21px)';
          arrowTransform = 'rotate(45deg)';
          specificPosition = 'left: 25% !important;';
        } else if (direction === 'end') {
          // transform = 'translate(21px)';
          arrowTransform = 'rotate(45deg)';
          specificPosition = 'left: auto !important; right: 25% !important;';
        }
        break;
      case 'right':
      case 'left':
        if (direction === 'start') {
          transform = 'translateY(-10px)';
          arrowTransform = 'rotate(315deg) translate(-7px, 7px)';
        } else if (direction === 'end') {
          transform = 'translateY(10px)';
          arrowTransform = 'rotate(315deg) translate(7px, -7px)';
        }
        break;
      default:
        break;
    }

    return `
      transform: ${transform} !important;
      .react-tooltip-arrow {
        width: ${TOOLTIP_SIZE}px !important;
        height: ${TOOLTIP_SIZE}px !important;
        border-radius: 2px;
        transform: ${arrowTransform} !important;
      }
    `;
  }}
`;
