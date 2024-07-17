import { StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import { BottomBar, color } from '../components';

export default {
  title: 'Components/BottomBar',
  component: BottomBar,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <Container>
        <Wrapper>
          <Story />
        </Wrapper>
      </Container>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=1130-20072',
    },
  },
};

export function Default() {
  return (
    <>
      <BottomBar
        dismiss={{
          label: 'Dismiss',
          onClick: () => {
            alert('Dismiss. ' + NOTE);
          },
        }}
        confirm={{
          label: 'Confirm',
          onClick: () => {
            alert('Confirm. ' + NOTE);
          },
        }}
      />
      <BottomBar
        dismiss={{
          label: 'Dismiss',
          onClick: () => {
            alert('Dismiss. ' + NOTE);
          },
        }}
        confirm={{
          label: 'Confirm',
          onClick: () => {
            alert('Confirm. ' + NOTE);
          },
        }}
        destroy={{
          label: 'Destroy',
          onClick: () => {
            alert('Destroy. ' + NOTE);
          },
        }}
      />
      <BottomBar
        dismiss={{
          label: 'Dismiss',
          onClick: () => {
            alert('Dismiss. ' + NOTE);
          },
        }}
        confirm={{
          label: 'Confirm',
          onClick: () => {
            alert('Confirm. ' + NOTE);
          },
          disabled: true,
        }}
        destroy={{
          label: 'Destroy',
          onClick: () => {
            alert('Destroy. ' + NOTE);
          },
        }}
      />
    </>
  );
}

const Container = styled.div`
  width: '100%';
  min-height: 250px;
  background-color: ${color['grey-10']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.span`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NOTE = 'Alert action is temporary for storybook and can be customized.';
