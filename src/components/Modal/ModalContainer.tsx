import React, { type ReactElement, useEffect, useRef } from 'react';

import styled from '@emotion/styled';

import { color } from '../styles';

interface Props {
  opened: boolean;
  children: ReactElement | ReactElement[];
  borderRadius: number;
  onClose: () => void;
  closeOnBackdropClick?: boolean;
  drawer?: boolean;
}

const Dialog = styled.dialog<{ borderRadius: number; drawer?: boolean }>`
  &::backdrop {
    background-color: ${color['grey-80']};
    opacity: 0.5;
  }
  margin: auto;
  border-radius: ${props => props.borderRadius}px;
  border: none;
  padding: 0;
  ${({ drawer }) =>
    drawer &&
    `
  position: fixed;
  left: 100%;
  transform: translateX(-100%);
  height: 100vh;
  &:modal {
    max-height: 100vh;
  }`}

  box-shadow: 0px 0px 1px 0px rgba(132, 132, 132, 0.31),
    0px 2px 5px 0px rgba(70, 70, 70, 0.2);
`;

export function ModalContainer({
  opened,
  children,
  borderRadius,
  onClose,
  closeOnBackdropClick = true,
  drawer = false,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (opened) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [opened]);

  function onClickBackdrop(e: React.MouseEvent<HTMLDialogElement, MouseEvent>) {
    if (closeOnBackdropClick) {
      const target = e.target as HTMLDialogElement;
      if (target === ref.current) {
        onClose();
      }
    }
  }

  return (
    <Dialog
      ref={ref}
      borderRadius={borderRadius}
      onClick={onClickBackdrop}
      onClose={onClose}
      drawer={drawer}
    >
      {children}
    </Dialog>
  );
}
