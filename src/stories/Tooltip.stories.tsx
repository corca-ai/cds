import { Meta, StoryFn } from '@storybook/react';

import styled from '@emotion/styled';
import Icon from '../components/Icon';
import { Tooltip, Button } from '../components';
import { B7 } from '../components';

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

const TOOLTIP_CONTENT =
  'Corca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System TooltipCorca Design System Tooltip';

export const Basic = Template.bind({});
Basic.args = {
  direction: 'top-center',
  withArrow: true,
  content: TOOLTIP_CONTENT,
};

export const Arrow = () => {
  return (
    <ArrowContainer>
      <ArrowContent>
        <B7>Arrow Tooltip</B7>
        <Tooltip direction="bottom-center" withArrow content="Arrow Tooltip">
          <Icon.QuestionCircle />
        </Tooltip>
      </ArrowContent>

      <ArrowContent>
        <B7>No Arrow Tooltip</B7>
        <Tooltip direction="bottom-center" withArrow={false} content="No Arrow Tooltip">
          <Icon.QuestionCircle />
        </Tooltip>
      </ArrowContent>
    </ArrowContainer>
  );
};

export const Direction = () => {
  return (
    <DirectionContainer>
      <DirectionContent>
        <Tooltip content={TOOLTIP_CONTENT} direction="bottom-start">
          <Button size="small" variant="filled">
            bottom start
          </Button>
        </Tooltip>
        <Tooltip content={TOOLTIP_CONTENT} direction="bottom-center">
          <Button size="small" variant="filled">
            bottom
          </Button>
        </Tooltip>
        <Tooltip content={TOOLTIP_CONTENT} direction="bottom-end">
          <Button size="small" variant="filled">
            bottom end
          </Button>
        </Tooltip>
      </DirectionContent>

      <DirectionContent>
        <DirectionLeftAndRightWrapper align="start">
          <Tooltip content={TOOLTIP_CONTENT} direction="left-start">
            <Button size="small" variant="filled">
              left start
            </Button>
          </Tooltip>
          <Tooltip content={TOOLTIP_CONTENT} direction="left-center">
            <Button size="small" variant="filled">
              left
            </Button>
          </Tooltip>
          <Tooltip content={TOOLTIP_CONTENT} direction="left-end">
            <Button size="small" variant="filled">
              left end
            </Button>
          </Tooltip>
        </DirectionLeftAndRightWrapper>

        <DirectionLeftAndRightWrapper align="end">
          <Tooltip content={TOOLTIP_CONTENT} direction="right-start">
            <Button size="small" variant="filled">
              right start
            </Button>
          </Tooltip>
          <Tooltip content={TOOLTIP_CONTENT} direction="right-center">
            <Button size="small" variant="filled">
              right
            </Button>
          </Tooltip>
          <Tooltip content={TOOLTIP_CONTENT} direction="right-end">
            <Button size="small" variant="filled">
              right end
            </Button>
          </Tooltip>
        </DirectionLeftAndRightWrapper>
      </DirectionContent>

      <DirectionContent>
        <Tooltip content={TOOLTIP_CONTENT} direction="top-start">
          <Button size="small" variant="filled">
            top start
          </Button>
        </Tooltip>
        <Tooltip content={TOOLTIP_CONTENT} direction="top-center">
          <Button size="small" variant="filled">
            top
          </Button>
        </Tooltip>
        <Tooltip content={TOOLTIP_CONTENT} direction="top-end">
          <Button size="small" variant="filled">
            top end
          </Button>
        </Tooltip>
      </DirectionContent>
    </DirectionContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;
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
  justify-content: center;
  width: 100%;
  height: 700px;
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
