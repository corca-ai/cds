import styled from '@emotion/styled';

import { EmptyState } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Empty state',
  component: EmptyState,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <Container>
        <Story />
        <p>개발자 참고 : 실제 페이지 디자인 적용시 페이지 컨테이너의 shadow 적용</p>
      </Container>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=469-4458&mode=design&t=90XgbxcTRUn2ydEs-4',
    },
  },
} as Meta<typeof EmptyState>;

const Template: StoryFn<typeof EmptyState> = args => (
  <LayoutContainer>
    <EmptyState {...args} />
  </LayoutContainer>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  description: 'description',
  button: {
    text: 'Label',
    onClick: () => {},
  },
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const LayoutContainer = styled.div`
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
