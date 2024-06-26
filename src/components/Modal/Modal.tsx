import { CSSProperties, type ReactElement } from 'react';

import styled from '@emotion/styled';

import { ModalContainer } from './ModalContainer';
import { BottomBar, ButtonAction } from '../BottomBar';
import Icon from '../Icon';
import { B1, H1 } from '../Text';
import { color } from '../styles';

const Container = styled.div<{ width?: CSSProperties['width'] }>`
  background-color: ${color.white};
  display: inline-flex;
  width: ${({ width }) => width ?? '669px'};
  padding: 0;
  flex-direction: column;
`;

const HeaderAndBody = styled.div`
  padding: 50px 40px 20px 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const TitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CloseIconContainer = styled.div`
  cursor: pointer;
`;

const Body = styled.div``;

interface ModalButtonProps extends ButtonAction {
  onClick: () => void;
}

interface Props {
  title: string;
  subtitle: string;
  children: ReactElement;
  opened: boolean;
  closeOnBackdropClick?: boolean;
  width?: CSSProperties['width'];
  cancel: ModalButtonProps;
  confirm: ModalButtonProps;
}

export function Modal({
  title,
  subtitle,
  opened,
  cancel,
  confirm,
  children,
  closeOnBackdropClick,
  width,
}: Props) {
  return (
    <ModalContainer
      opened={opened}
      borderRadius={12}
      onClose={cancel.onClick}
      closeOnBackdropClick={closeOnBackdropClick}
    >
      <Container width={width}>
        <HeaderAndBody>
          <Header>
            <TitleAndDescription>
              <H1>{title}</H1>
              <B1>{subtitle}</B1>
            </TitleAndDescription>
            <CloseIconContainer onClick={cancel.onClick}>
              <Icon.CancelLarge size={24} />
            </CloseIconContainer>
          </Header>
          <Body>{children}</Body>
        </HeaderAndBody>
      </Container>
      <BottomBar dismiss={cancel} confirm={confirm} />
    </ModalContainer>
  );
}
