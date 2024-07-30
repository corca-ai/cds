import { InputHTMLAttributes } from 'react';
import { TooltipProps } from '../Tooltip';
type SelectInputTooltipProps = Omit<TooltipProps, 'children'>;
/** RightIcon prop can only be used with searchable true.
 * Without searchable, the right icon is always ChevronDownSmall as CDS design. */
export interface SelectInputBaseProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'width'> {
    label?: string;
    description?: string;
    error?: string;
    width?: number;
    tooltip?: SelectInputTooltipProps;
    dropdownOpened?: boolean;
    searchable?: boolean;
    showIcon?: boolean;
    leftIcon?: React.ReactNode;
}
export declare function SelectInput({ label, description, required, error, width, tooltip, dropdownOpened, searchable, onClick, showIcon, leftIcon, ...props }: SelectInputBaseProps): import("@emotion/react/jsx-runtime").JSX.Element;
type SelectInputLabelProps = Pick<SelectInputBaseProps, 'label' | 'required' | 'tooltip'>;
export declare function SelectInputLabel({ label, required, tooltip }: SelectInputLabelProps): import("@emotion/react/jsx-runtime").JSX.Element;
export type SelectInputRightIconSectionProps = Pick<SelectInputBaseProps, 'dropdownOpened' | 'searchable'>;
export declare function SelectInputRightIconSection({ dropdownOpened, searchable, }: SelectInputRightIconSectionProps): import("@emotion/react/jsx-runtime").JSX.Element;
type SelectInputDescriptionProps = Pick<SelectInputBaseProps, 'description'>;
export declare function SelectInputDescription({ description }: SelectInputDescriptionProps): import("@emotion/react/jsx-runtime").JSX.Element;
type SelectInputErrorProps = Pick<SelectInputBaseProps, 'error'>;
export declare function SelectInputErrorSection({ error }: SelectInputErrorProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
