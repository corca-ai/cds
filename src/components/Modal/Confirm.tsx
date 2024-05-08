import { MessageModal } from './MessageModal';
import { Button } from '..';

export interface ConfirmProps {
  title: string;
  contents?: string;
  opened: boolean;
  cancel: {
    label: string;
    onClick: () => void;
  };
  confirm: {
    label: string;
    onClick: () => void;
  };
}

export function Confirm({ title, contents, opened, cancel, confirm }: ConfirmProps) {
  return (
    <MessageModal
      title={title}
      contents={contents}
      bottom={
        <>
          <Button onClick={cancel.onClick} variant="text" size="small">
            {cancel.label}
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
