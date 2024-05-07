import { MessageModal } from './MessageModal';
import { Button } from '..';

export interface ConfirmProps {
  title: string;
  contents?: string;
  opened: boolean;
  cancel: {
    label?: string;
    onClick: () => void;
  };
  confirm: {
    label: string;
    onClick: () => void;
  };
  language?: 'ko' | 'en';
}

export function Confirm({
  title,
  contents,
  opened,
  cancel,
  confirm,
  language = 'ko',
}: ConfirmProps) {
  return (
    <MessageModal
      title={title}
      contents={contents}
      bottom={
        <>
          <Button onClick={cancel.onClick} variant="text" size="small">
            {cancel.label || language === 'en' ? 'cancel' : '취소'}
          </Button>
          <Button onClick={confirm.onClick} variant="filled" size="small">
            {confirm.label}
          </Button>
        </>
      }
      opened={opened}
      borderRadius={8}
      onClose={cancel.onClick}
    />
  );
}
