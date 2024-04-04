import {
  type InputBaseProps,
  InputContainer,
  baseInputStyles,
  BaseInputType,
} from './InputContainer';
import Icon from '../Icon';
import { color } from '../styles';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

export type FileInputProps = Omit<InputBaseProps, 'children'> & {
  uploadType?: 'audio' | 'image' | 'video' | 'csv' | 'txt' | 'pdf';
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
  value,
  error,
  disabled,
  onUpload,
  defaultValue,
  required = false,
  width,
  tooltip,
  onClick,
  height,
  uploadType,
  ...props
}: FileInputProps) {
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
          id="file-input"
        />
        <UploadButton
          isLeftSection
          error={error}
          height={height}
          cursorPointer
          htmlFor="file-input"
        >
          {placeholder}
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
  color: ${color['grey-50']};
`;
