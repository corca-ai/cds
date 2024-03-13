import { StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import { Button, Toast, ToastPrepare } from '../components';

export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <>
        <ToastPrepare />
        <Story />
      </>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=1086-18652&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
};

export function Default() {
  return (
    <Container>
      <Button
        onClick={() => {
          Toast.success({ title: 'TITLE', message: 'message goes here' });
        }}
        variant="filled"
        size="small"
      >
        SUCCESS WITH TITLE
      </Button>
      <Button
        onClick={() => {
          Toast.success({ message: 'message goes here' });
        }}
        variant="filled"
        size="small"
      >
        SUCCESS WITHOUT TITLE
      </Button>
      <Button
        onClick={() => {
          Toast.error({ title: 'TITLE', message: 'message goes here' });
        }}
        variant="filled"
        size="small"
      >
        ERROR WITH TITLE
      </Button>
      <Button
        onClick={() => {
          Toast.error({ message: 'message goes here' });
        }}
        variant="filled"
        size="small"
      >
        ERROR WITHOUT TITLE
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
