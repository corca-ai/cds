import { Meta, StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import { IconButton } from '../components';
import Icon from '../components/Icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-14796&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
} as Meta<typeof IconButton>;

export function Default() {
  return (
    <>
      <IconButton>
        <Icon.Add />
      </IconButton>

      <IconButton disabled>
        <Icon.Add />
      </IconButton>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
