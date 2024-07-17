import { type ReactElement } from 'react';

import styled from '@emotion/styled';

import { ModalContainer } from './ModalContainer';
import Icon from '../Icon';
import { H2 } from '../Text';
import { color } from '../styles';

const Container = styled.div`
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  width: 480px;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  gap: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const CloseIconContainer = styled.div`
  cursor: pointer;
`;

interface Props {
  title: string;
  opened: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
  closeOnBackdropClick?: boolean;
}

export function Drawer({ title, opened, onClose, children, closeOnBackdropClick }: Props) {
  return (
    <ModalContainer
      opened={opened}
      borderRadius={0}
      onClose={onClose}
      drawer={true}
      closeOnBackdropClick={closeOnBackdropClick}
    >
      <Container>
        <Header>
          <H2>{title}</H2>
          <CloseIconContainer onClick={onClose}>
            <Icon.CancelLarge size={24} />
          </CloseIconContainer>
        </Header>
        {children}
      </Container>
    </ModalContainer>
  );
}
