import { useCallback, useRef, useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';

import styled from '@emotion/styled';

import { TextInput } from '../Input';
import useClickOutside from '../../utils/hooks/useClickOutside';
import { B3 } from '../Text';
import { color } from '../styles';

const Base = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  display: flex;
  width: 232px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  position: absolute;
  background-color: ${color.white};
  border-radius: 8px;
  box-shadow:
    0px 0px 1px 0px rgba(132, 132, 132, 0.31),
    0px 2px 5px 0px rgba(70, 70, 70, 0.2);

  .react-colorful {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .react-colorful__saturation {
    margin: 0;
    height: 212px;
    width: 212px;
    border-radius: 4px;
    border: none;
  }
  .react-colorful__pointer {
    width: 15px;
    height: 15px;
    border: 2px solid ${color.white};
  }
  .react-colorful__hue {
    margin-top: 12px;
  }
  .react-colorful__alpha {
    margin-top: 8px;
  }
  .react-colorful__hue,
  .react-colorful__alpha {
    height: 12px;
    width: 169px;
    border-radius: 15px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3) inset;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  width: 212px;
  padding-left: 4px;
  align-items: center;
  gap: 10px;
`;

const Clickable = styled.div<{ color: string }>`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ color }) => color};
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.1) inset;
`;

const ColorBox = styled.div<{ color: string }>`
  position: absolute;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  top: 234px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;

const ColorPickerContainer = styled.div`
  position: relative;
`;

interface Props {
  color: string;
  onChangeColor: (color: string) => void;
}

export function ColorPicker({ color, onChangeColor }: Props) {
  const [openPicker, setOpenPicker] = useState(false);
  const colorPickerRef = useRef(null);

  useClickOutside(
    colorPickerRef,
    useCallback(() => {
      setOpenPicker(false);
    }, []),
  );
  return (
    <div>
      <Clickable
        onClick={() => {
          setOpenPicker(!openPicker);
        }}
        color={color}
      />
      {openPicker && (
        <ColorPickerContainer ref={colorPickerRef}>
          <Base>
            <HexAlphaColorPicker
              color={color}
              onChange={v => {
                onChangeColor(v);
              }}
            />
            <ColorBox color={color} />
            <BottomContainer>
              <B3>Hex</B3>
              <TextInput
                value={color}
                onChange={v => {
                  onChangeColor(v.target.value);
                }}
                height={32}
              />
            </BottomContainer>
          </Base>
        </ColorPickerContainer>
      )}
    </div>
  );
}
