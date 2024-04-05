import { ChangeEvent, useId } from 'react';

import styled from '@emotion/styled';

import Icon from '../Icon';
import { B3 } from '../Text';
import {
  BaseInputType,
  type InputBaseProps,
  InputContainer,
  baseInputStyles,
} from './InputContainer';

export type FileInputProps = Omit<InputBaseProps, 'children' | 'value'> & {
  uploadType: 'audio' | 'image' | 'video' | 'csv' | 'txt' | 'pdf' | 'default';
  file: File | null;
  onUpload: (file: File) => void;
};

const getMimeType = (uploadType?: FileInputProps['uploadType']) => {
  switch (uploadType) {
    case 'audio':
    case 'image':
    case 'video':
      return `${uploadType}/*`;
    case 'csv':
      return 'text/csv';
    case 'txt':
      return 'text/plain';
    case 'pdf':
      return '.pdf';
    default:
      return '*/*';
  }
};

export function FileInput({
  label,
  placeholder,
  description,
  name,
  file,
  error,
  disabled,
  onUpload,
  defaultValue,
  required = false,
  width,
  tooltip,
  onClick,
  height,
  uploadType = 'default',
  ...props
}: FileInputProps) {
  const id = useId();
  return (
    <InputContainer
      cursorPointer
      onClick={onClick}
      label={label}
      description={description}
      required={required}
      error={error}
      width={width}
      tooltip={tooltip}
      {...props}
      leftSection={<Icon.Upload />}
    >
      <>
        <FileUploadInput
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) {
              onUpload(event.target.files[0]);
            }
          }}
          type="file"
          accept={getMimeType(uploadType)}
          id={`file-input-${id}`}
        />
        <UploadButton
          isLeftSection
          error={error}
          height={height}
          cursorPointer
          htmlFor={`file-input-${id}`}
        >
          {file ? <B3>{file.name}</B3> : <B3 c="grey-50">{placeholder}</B3>}
        </UploadButton>
      </>
    </InputContainer>
  );
}

const FileUploadInput = styled.input`
  display: none;
`;

export const UploadButton = styled.label<BaseInputType>`
  ${props => baseInputStyles(props)}
  display: flex;
  align-items: center;
`;
