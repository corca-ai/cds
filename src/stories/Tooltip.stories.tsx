import { Meta, StoryFn } from '@storybook/react';

import styled from '@emotion/styled';
import Icon from '../components/Icon';
import { type Direction as DirectionType, Tooltip } from '../components/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=1013-35371&mode=design&t=ML3YPcDZJzLhfFhw-0',
    },
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = args => {
  return (
    <Tooltip {...args}>
      <Icon.QuestionCircle />
    </Tooltip>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  direction: 'top',
  withArrow: true,
  content:
    'Corca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design ',
};

export const Direction = () => {
  const DirectionList: DirectionType[] = [
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ];

  return (
    <DirectionContainer>
      <DirectionContent>
        {DirectionList.map(place => (
          <Tooltip key={place} content={`Hello world from the ${place}!`} direction={place}>
            <Icon.QuestionCircle />
          </Tooltip>
        ))}
      </DirectionContent>
    </DirectionContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowContainer = styled(Container)`
  gap: 100px;
`;

const ArrowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const DirectionContainer = styled(Container)`
  gap: 50px;
  flex-direction: column;
`;

const DirectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

const DirectionLeftAndRightWrapper = styled.div<{ align: 'end' | 'start' }>`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: ${({ align }) => `flex-${align}`};
`;
