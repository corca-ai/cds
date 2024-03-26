import styled from '@emotion/styled';

import { Button } from '../components';
import Icon from '../components/Icon';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=435-14796',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: 'small',
  variant: 'filled',
  children: 'Example Button',
  disabled: false,
};

Basic.argTypes = {
  icon: {
    name: 'icon',
    control: { type: 'select' },
  },
};

export function Filled() {
  return (
    <>
      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="filled">
            small filled
          </Button>
          <Button size="small" variant="filled" icon={<Icon.Add />}>
            small filled
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="filled">
            large filled
          </Button>
          <Button size="large" variant="filled" icon={<Icon.Add />}>
            large filled
          </Button>
        </ButtonWrapper>
      </ButtonContainer>

      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="filled" disabled>
            small filled
          </Button>
          <Button size="small" variant="filled" disabled icon={<Icon.Add />}>
            small filled
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="filled" disabled>
            large filled
          </Button>
          <Button size="large" variant="filled" disabled icon={<Icon.Add />}>
            large filled
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  );
}

export function Outline() {
  return (
    <>
      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="outline">
            small outline
          </Button>
          <Button size="small" variant="outline" icon={<Icon.Add />}>
            small outline
          </Button>
          <Button size="small" variant="outline" focused>
            focused outline
          </Button>
          <Button size="small" variant="outline" icon={<Icon.Add />} focused>
            focused outline
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="outline">
            large outline
          </Button>
          <Button size="large" variant="outline" icon={<Icon.Add />}>
            large outline
          </Button>
          <Button size="large" variant="outline" icon={<Icon.Add />} focused>
            focused outline
          </Button>
          <Button size="large" variant="outline" icon={<Icon.Add />} focused>
            focused outline
          </Button>
        </ButtonWrapper>
      </ButtonContainer>

      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="outline" disabled>
            small outline
          </Button>
          <Button size="small" variant="outline" disabled icon={<Icon.Add />}>
            small outline
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="outline" disabled>
            large outline
          </Button>
          <Button size="large" variant="outline" disabled icon={<Icon.Add />}>
            large outline
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  );
}

export function Text() {
  return (
    <>
      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="text">
            small text
          </Button>
          <Button size="small" variant="text" icon={<Icon.Add />}>
            small text
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="text">
            large text
          </Button>
          <Button size="small" variant="text" icon={<Icon.Add />}>
            small text
          </Button>
        </ButtonWrapper>
      </ButtonContainer>

      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="text" disabled>
            small text
          </Button>
          <Button size="small" variant="text" icon={<Icon.Add />} disabled>
            small text
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="text" disabled>
            large text
          </Button>
          <Button size="large" variant="text" icon={<Icon.Add />} disabled>
            large text
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
