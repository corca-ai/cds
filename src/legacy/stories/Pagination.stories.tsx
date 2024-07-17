import { useState } from 'react';

import styled from '@emotion/styled';

import { B3, Pagination } from '../components';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Pagination',
  component: Pagination,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-14950&mode=design&t=8qZkE0rAl2OEve56-0',
    },
  },
} as Meta<typeof Pagination>;

const Template: StoryFn<typeof Pagination> = args => {
  const [page, setPage] = useState(1);
  return <Pagination {...args} current={page} onSelect={setPage} />;
};

export const Basic = Template.bind({});
Basic.args = {
  total: 10,
};
Basic.argTypes = {
  current: {
    name: 'current',
    control: { type: 'select' },
  },
};

export function PageLength() {
  const PageTexts = {
    ONLY_ONE_PAGE: 'Only 1 page',
    ONE_TO_FIVE_PAGES: '1~5 pages',
    FIVE_PAGES_AND_UP: '5 pages ~',
    UP_TO_TEN_PAGES: '~ 10 pages',
    TEN_PAGES_AND_UP: '10 pages ~',
  };

  const [page1, setPage1] = useState({
    id: 1,
    current: 1,
    total: 1,
    text: PageTexts.ONLY_ONE_PAGE,
  });
  const [page2, setPage2] = useState({
    id: 2,
    current: 1,
    total: 5,
    text: PageTexts.ONE_TO_FIVE_PAGES,
  });
  const [page3, setPage3] = useState({
    id: 3,
    current: 5,
    total: 10,
    text: PageTexts.FIVE_PAGES_AND_UP,
  });
  const [page4, setPage4] = useState({
    id: 4,
    current: 6,
    total: 8,
    text: PageTexts.UP_TO_TEN_PAGES,
  });
  const [page5, setPage5] = useState({
    id: 5,
    current: 6,
    total: 20,
    text: PageTexts.TEN_PAGES_AND_UP,
  });

  const pages = [page1, page2, page3, page4, page5];
  const setPages = [setPage1, setPage2, setPage3, setPage4, setPage5];

  const handleSelect = (id: number, current: number) => {
    setPages.forEach((setPage, index) => {
      if (pages[index].id === id) {
        setPage({ ...pages[index], current });
      }
    });
  };

  return (
    <PageLengthContainer>
      <PageLengthTextContainer>
        {pages.map((page, index) => (
          <PageLengthTextWrapper key={index}>
            <B3>{page.text}</B3>
          </PageLengthTextWrapper>
        ))}
      </PageLengthTextContainer>
      <PageLengthPaginationContainer>
        {pages.map(page => (
          <Pagination
            key={page.id}
            current={page.current}
            total={page.total}
            onSelect={current => {
              handleSelect(page.id, current);
            }}
          />
        ))}
      </PageLengthPaginationContainer>
    </PageLengthContainer>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageLengthContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const PageLengthTextContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: flex-end;
`;

const PageLengthPaginationContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const PageLengthTextWrapper = styled.div`
  display: flex;
  height: 32px;
  flex-direction: column;
  justify-content: center;
`;
