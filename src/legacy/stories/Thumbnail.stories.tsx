import styled from '@emotion/styled';

import { B3, Thumbnail } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Thumbnail',
  component: Thumbnail,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?node-id=435%3A15184&mode=dev',
    },
  },
} as Meta<typeof Thumbnail>;

const Template: StoryFn<typeof Thumbnail> = args => <Thumbnail {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  url: 'https://picsum.photos/id/237/200/300',
  alt: 'cute dog',
  size: 54,
};

export function Size() {
  const sizes = [54, 72, 90];

  return (
    <>
      {sizes.map(size => (
        <SizeContentsWrapper key={size}>
          <SizeTextWrapper>
            <B3>{`Size ${size}px`}</B3>
          </SizeTextWrapper>
          <SizeContents>
            <Thumbnail url="https://picsum.photos/id/237/200/300" alt="cute dog" size={size} />
            <Thumbnail url={null} alt="cute dog" size={size} />
          </SizeContents>
        </SizeContentsWrapper>
      ))}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const SizeTextWrapper = styled.div`
  display: flex;
  padding-right: 30px;
  align-items: center;
`;

const SizeContentsWrapper = styled.div`
  display: flex;
`;

const SizeContents = styled.div`
  display: flex;
  gap: 20px;
`;
