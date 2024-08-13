import { BaseInputType, type InputBaseProps } from './InputContainer';
export type FileInputProps = Omit<InputBaseProps, 'children' | 'value'> & {
    uploadType: 'audio' | 'image' | 'video' | 'csv' | 'txt' | 'pdf' | 'default';
    file: File | null;
    onUpload: (file: File) => void;
};
export declare function FileInput({ label, placeholder, description, name, file, error, disabled, onUpload, defaultValue, required, width, tooltip, onClick, height, uploadType, ...props }: FileInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare const UploadButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & BaseInputType, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
