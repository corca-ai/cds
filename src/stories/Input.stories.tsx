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
  ColorPickerInput,
} from '../components';
import Icon from '../components/Icon';
import { BaseInput, type InputTooltipProps } from '../components/Input/InputContainer';
import { NumberInput } from '../components/Input/NumberInput';
import { useState } from 'react';
import { FileInput, FileInputProps } from '../components/Input/FileInput';

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

export const ColorPickerInputDefault: StoryFn<typeof ColorPickerInput> = args => {
  const [color, setColor] = useState('#00a4ff');
  return <ColorPickerInput {...args} color={color} onChangeColor={setColor} />;
};

ColorPickerInputDefault.args = baseArgs;
ColorPickerInputDefault.argTypes = argsType;

export function NumberInputDefault() {
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

export const FileInputDefault = () => {
  const [files, setFiles] = useState<{
    [key in FileInputProps['uploadType']]: File | null;
  }>({
    audio: null,
    image: null,
    video: null,
    csv: null,
    txt: null,
    pdf: null,
    default: null,
  });

  const handleFileChange = (type: FileInputProps['uploadType'], file: File | null) => {
    setFiles(prevFiles => ({
      ...prevFiles,
      [type]: file,
    }));
  };

  const fileTypes: FileInputProps['uploadType'][] = [
    'audio',
    'image',
    'video',
    'csv',
    'txt',
    'pdf',
    'default',
  ];

  return (
    <>
      {fileTypes.map(type => (
        <FileInput
          key={type}
          label={getFileInputExplain(type)}
          placeholder={getFileInputExplain(type)}
          description={getFileInputDescription(type)}
          width={400}
          onUpload={file => handleFileChange(type, file)}
          file={files[type as FileInputProps['uploadType'] | 'default']}
          uploadType={type as FileInputProps['uploadType']}
        />
      ))}
    </>
  );
};

const FILE_TYPE_CONFIGS: {
  [key in FileInputProps['uploadType']]: {
    explain: string;
    description: string;
  };
} = {
  audio: {
    explain: 'MP3, WAV, FLAC 파일 추가',
    description: '오디오 파일만 입력 가능한 입력창입니다.',
  },
  image: {
    explain: 'JPG, JPEG, PNG, SVG 파일 추가',
    description: '이미지 파일만 입력 가능한 입력창입니다.',
  },
  video: {
    explain: 'MP4, AVI, MOV 파일 추가',
    description: '비디오 파일만 입력 가능한 입력창입니다.',
  },
  csv: {
    explain: 'CSV 파일 추가',
    description: 'CSV 파일만 입력 가능한 입력창입니다.',
  },
  txt: {
    explain: 'TXT 파일 추가',
    description: 'TXT 파일만 입력 가능한 입력창입니다.',
  },
  pdf: {
    explain: 'PDF 파일 추가',
    description: 'PDF 파일만 입력 가능한 입력창입니다.',
  },
  default: {
    explain: '전체 유형의 파일 추가',
    description: '전체 유형의 파일을 입력할 수 있는 입력창입니다.',
  },
};

const getFileInputExplain = (uploadType?: FileInputProps['uploadType']) => {
  return (FILE_TYPE_CONFIGS[uploadType || 'default'] || FILE_TYPE_CONFIGS.default).explain;
};

const getFileInputDescription = (uploadType?: FileInputProps['uploadType']) => {
  return (FILE_TYPE_CONFIGS[uploadType || 'default'] || FILE_TYPE_CONFIGS.default).description;
};

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
