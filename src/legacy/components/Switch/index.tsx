import styled from '@emotion/styled';

import { color, typography } from '../styles';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Switch({ checked, onChange, disabled = false }: SwitchProps) {
  const SwitchTextComponent = checked ? OnLabel : OffLabel;

  return (
    <Container aria-disabled={disabled ? 'true' : 'false'}>
      <CheckBox
        type="checkbox"
        checked={checked}
        onChange={() => {
          onChange(!checked);
        }}
        disabled={disabled}
      />
      <Slider checked={checked} disabled={disabled}>
        <SwitchTextComponent checked={checked} disabled={disabled}>
          {checked ? 'ON' : 'OFF'}
        </SwitchTextComponent>
      </Slider>
    </Container>
  );
}

type StylesProps = Omit<SwitchProps, 'onChange'>;

const SWITCH_WIDTH = 38;
const SWITCH_HEIGHT = 18;
const SWITCH_CIRCLE_SIZE = 12;
const SWITCH_CIRCLE_GAP = 3;

const Container = styled.label`
  position: relative;
  width: ${SWITCH_WIDTH}px;
  height: ${SWITCH_HEIGHT}px;
  user-select: none;
  display: inline-block;
`;

const Slider = styled.div<StylesProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  background: ${props =>
    props.disabled ? color['grey-50'] : props.checked ? color['main-black'] : color['grey-40']};
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    z-index: 10;
    width: ${SWITCH_CIRCLE_SIZE}px;
    height: ${SWITCH_CIRCLE_SIZE}px;
    background: ${({ disabled }) => (disabled ? color['grey-60'] : color.white)};
    border-radius: 50%;
    transition: transform ease 0.2s;
    transform: ${props =>
      `translateX(${
        props.checked ? SWITCH_WIDTH - SWITCH_CIRCLE_SIZE - SWITCH_CIRCLE_GAP : SWITCH_CIRCLE_GAP
      }px)`};
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SliderText = styled.span`
  position: absolute;
  font-size: 9px;
  font-style: normal;
  font-weight: ${typography.weight.medium};
  font-family: 'Pretendard Variable', Pretendard;
  line-height: 1.2;
`;

const OnLabel = styled(SliderText)<StylesProps>`
  left: 5px;
  color: ${({ disabled }) => (disabled ? color['grey-60'] : color.white)};
  opacity: ${({ checked }) => (checked ? 1 : 0)};
`;

const OffLabel = styled(SliderText)<StylesProps>`
  right: 3.5px;
  color: ${({ disabled }) => (disabled ? color['grey-60'] : color['grey-50'])};
  opacity: ${({ checked }) => (checked ? 0 : 1)};
`;
