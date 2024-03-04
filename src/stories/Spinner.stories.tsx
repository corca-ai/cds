import styled from '@emotion/styled';

import { B3, Spinner, type SpinnerSize, color } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Spinner',
  component: Spinner,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?node-id=5196%3A37258&mode=dev',
    },
  },
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = args => <Spinner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'm',
  speed: 1,
  color: color['main-black'],
};

export function Size() {
  const sizes: SpinnerSize[] = ['s', 'm', 'l'];

  return (
    <SizeContainer>
      {sizes.map(size => (
        <SizeContents key={size}>
          <SizeContentText>
            <B3>{size.toLocaleUpperCase()}</B3>
          </SizeContentText>
          <Spinner size={size} />
        </SizeContents>
      ))}
    </SizeContainer>
  );
}

export function Color() {
  const sizes: SpinnerSize[] = ['s', 'm', 'l'];
  const colors = ['#0085ff', '#ae15f6', '#ff4545'];

  return (
    <SizeContainer>
      {sizes.map(size => (
        <ColorContainer key={size}>
          {colors.map(color => (
            <SizeContents key={color}>
              <Spinner size={size} color={color} />
            </SizeContents>
          ))}
        </ColorContainer>
      ))}
    </SizeContainer>
  );
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SizeContents = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SizeContentText = styled.div`
  width: 20px;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 20px;
`;
