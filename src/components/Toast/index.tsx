import { ReactNode } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B3, B7 } from '../Text';
import { color } from '../styles';

export const ToastPrepare = () => {
  return <Toaster />;
};

interface ToastData {
  title?: string;
  message: string;
  durationMs?: number;
}

const ToastBase = styled.div`
  display: flex;
  width: 420px;
  padding: 12px;
  justify-content: space-between;
  background-color: ${color.white};
  border-radius: 9px;
  box-shadow:
    0px 0px 1px 0px rgba(132, 132, 132, 0.31),
    0px 2px 5px 0px rgba(70, 70, 70, 0.2);
`;

const Left = styled.div`
  display: flex;
  height: 100%;
  gap: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  line-height: 18px;
`;

const CloseContainer = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
`;

const TitleAndMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  height: 17px;
  line-height: 17px;
`;

const MessageContainer = styled.div`
  display: flex;
  height: 100%;
`;

function renderToast(icon: ReactNode, message: ToastData) {
  toast.custom(
    t => (
      <ToastBase>
        <Left>
          <IconContainer>{icon}</IconContainer>
          <TitleAndMessageContainer>
            {message.title && (
              <TitleContainer>
                <B7>{message.title}</B7>
              </TitleContainer>
            )}
            <MessageContainer>
              <B3>{message.message}</B3>
            </MessageContainer>
          </TitleAndMessageContainer>
        </Left>
        <CloseContainer
          onClick={() => {
            toast.remove(t.id);
          }}
        >
          <Icon.CancelSmall />
        </CloseContainer>
      </ToastBase>
    ),
    { position: 'top-right', duration: message.durationMs || 3000 },
  );
}

export const Toast = {
  success: (message: ToastData) => {
    renderToast(<Icon.ToastSuccess />, message);
  },
  error: (message: ToastData) => {
    renderToast(<Icon.ToastError />, message);
  },
};
