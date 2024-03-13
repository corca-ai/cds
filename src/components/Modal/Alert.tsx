import { MessageModal } from './MessageModal';
import { Button } from '..';

export interface AlertInfo {
  title: string;
  contents?: string;
}

export interface AlertProps extends AlertInfo {
  opened: boolean;
  close: {
    label: string;
    onClick: () => void;
  };
}

export function Alert({ title, contents, opened, close }: AlertProps) {
  return (
    <MessageModal
      title={title}
      contents={contents}
      bottom={
        <Button onClick={close.onClick} variant="filled" size="small">
          {close.label}
        </Button>
      }
      opened={opened}
      borderRadius={8}
      onClose={close.onClick}
    />
  );
}
