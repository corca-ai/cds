import { StoryFn } from '@storybook/react';

import styled from '@emotion/styled';

import {
  B7,
  H2,
  InputContainer,
  PasswordInput,
  TextInput,
  type TextInputProps,
  color,
} from '../components';
import Icon from '../components/Icon';
import { BaseInput, type InputTooltipProps } from '../components/Input/InputContainer';
import { NumberInput } from '../components/Input/NumberInput';
import { useState } from 'react';

export default {
  title: 'Components/Input',
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
      url: 'https://www.figma.com/file/tN7Q8dJZqVsjo2FWflOKfu/CDS(Corca-Design-System)?type=design&node-id=538-9681&mode=design&t=5x2Eq9JDnANEoXu9-0',
    },
  },
};

const baseArgs = {
  label: 'Label',
  placeholder: 'Placeholder',
  width: 400,
  disabled: false,
};

const tooltipArgs: InputTooltipProps = {
  content: 'Tooltip',
  direction: 'bottom-start',
  withArrow: true,
};

const argsType = {
  error: {
    name: 'error',
    control: { type: 'text' },
  },
  description: {
    name: 'description',
    control: { type: 'text' },
  },
};

const TextInputTemplate: StoryFn<typeof TextInput> = args => <TextInput {...args} />;

export const TextInputDefault = TextInputTemplate.bind({});
TextInputDefault.args = baseArgs;
TextInputDefault.argTypes = argsType;

const PasswordInputTemplate: StoryFn<typeof PasswordInput> = args => <PasswordInput {...args} />;

export const PasswordInputDefault = PasswordInputTemplate.bind({});
PasswordInputDefault.args = baseArgs;
PasswordInputDefault.argTypes = argsType;

export function NumberInputTemplate() {
  const [count, setCount] = useState<number | null>(null);
  const isError = count && (count < 1 || count > 20);
  return (
    <NumberInput
      value={count ?? ''}
      onChange={setCount}
      min={1}
      max={20}
      {...(isError && { error: 'Number Input은 1 이상 20 이하여야 합니다.' })}
    />
  );
}

export function WithIcon() {
  return (
    <>
      <IconTextWrapper>
        <B7>Left Section</B7>
        <InputContainer {...baseArgs} tooltip={tooltipArgs} leftSection={<Icon.ChatPlus />}>
          <BaseInput {...baseArgs} />
        </InputContainer>
      </IconTextWrapper>

      <IconTextWrapper>
        <B7>Right Section</B7>
        <InputContainer {...baseArgs} tooltip={tooltipArgs} rightSection={<Icon.ChatPlus />}>
          <BaseInput {...baseArgs} />
        </InputContainer>
      </IconTextWrapper>
    </>
  );
}

export function Component() {
  const textInputArgs = [
    [{}, { disabled: true }],
    [
      { tooltip: tooltipArgs },
      {
        disabled: true,
        tooltip: tooltipArgs,
      },
    ],
    [{ description: 'Description' }, { disabled: true, description: 'Description' }],
    [
      {
        description: 'Description',
        tooltip: tooltipArgs,
      },
      {
        disabled: true,
        description: 'Description',
        tooltip: tooltipArgs,
      },
    ],
  ] as Array<Array<Partial<TextInputProps>>>;

  const errorTextInputArgs = [
    {},
    {
      tooltip: tooltipArgs,
    },
    {
      description: 'Description',
    },
    {
      description: 'Description',
      tooltip: tooltipArgs,
    },
  ] as Array<Array<Partial<TextInputProps>>>;

  return (
    <ComponentContainer>
      <ComponentTextWrapper>
        <TextWrapper>
          <H2>Active</H2>
        </TextWrapper>
        <TextWrapper>
          <H2>Disabled</H2>
        </TextWrapper>
      </ComponentTextWrapper>

      <ComponentContentsWrapper>
        <ComponentContents>
          {textInputArgs.map((group, groupIndex) => (
            <ComponentWrapper key={groupIndex}>
              {group.map((props, index) => (
                <TextInput key={index} {...baseArgs} {...props} />
              ))}
            </ComponentWrapper>
          ))}
        </ComponentContents>

        <ComponentContents>
          {errorTextInputArgs.map((props, index) => (
            <ComponentWrapper key={index}>
              <TextInput {...baseArgs} {...props} error="Error message" />
            </ComponentWrapper>
          ))}
        </ComponentContents>
      </ComponentContentsWrapper>
    </ComponentContainer>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 100px;
  background-color: ${color['grey-10']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ComponentWrapper = styled.div`
  display: flex;
  gap: 37px;
`;

const ComponentContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const ComponentTextWrapper = styled.div`
  display: flex;
  padding-bottom: 35px;
`;

const TextWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
