import styled from '@emotion/styled';

import { ReactNode } from 'react';
import { H2 } from '../Text';
import { color, fontStyle } from '../styles';
import { ModalContainer } from './ModalContainer';

const Base = styled.div`
  background-color: ${color.white};
  display: flex;
  width: 600px;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
  white-space: pre-line;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-end;
  white-space: pre-line;
`;

interface Props {
  title: string;
  contents?: string;
  bottom: ReactNode;
  opened: boolean;
  onClose: () => void;
  borderRadius: number;
  closeOnBackdropClick?: boolean;
}

export function MessageModal({
  title,
  contents,
  bottom,
  opened,
  onClose,
  borderRadius,
  closeOnBackdropClick = false,
}: Props) {
  return (
    <ModalContainer
      opened={opened}
      borderRadius={borderRadius}
      onClose={onClose}
      closeOnBackdropClick={closeOnBackdropClick}
    >
      <Base>
        <H2>{title}</H2>
        {contents && (
          <span
            style={{
              ...fontStyle.b2,
              lineHeight: 'normal',
            }}
          >
            {contents}
          </span>
        )}
        <ActionsContainer>{bottom}</ActionsContainer>
      </Base>
    </ModalContainer>
  );
}
