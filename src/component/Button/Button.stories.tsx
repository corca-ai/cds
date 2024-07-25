import styled from '@emotion/styled';

import { Button } from './Button';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  component: Button,
  tags: ['autodocs'],
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
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="filled">
            large filled
          </Button>
        </ButtonWrapper>
      </ButtonContainer>

      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="filled" disabled>
            small filled
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="filled" disabled>
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
          <Button size="small" variant="outline" focused>
            focused outline
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="outline">
            large outline
          </Button>
        </ButtonWrapper>
      </ButtonContainer>

      <ButtonContainer>
        <ButtonWrapper>
          <Button size="small" variant="outline" disabled>
            small outline
          </Button>
        </ButtonWrapper>

        <ButtonWrapper>
          <Button size="large" variant="outline" disabled>
            large outline
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
