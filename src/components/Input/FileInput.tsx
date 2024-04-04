import {
  type InputBaseProps,
  InputContainer,
  baseInputStyles,
  BaseInputType,
} from './InputContainer';
import Icon from '../Icon';
import { color } from '../styles';
import styled from '@emotion/styled';

export type FileInputProps = Omit<InputBaseProps, 'children'> & {
  uploadType: 'audio' | 'image' | 'video';
};

export function FileInput({
  label,
  placeholder,
  description,
  name,
  value,
  error,
  disabled,
  onChange,
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
          onChange={onChange}
          type="file"
          accept={`${uploadType}/*`}
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
