import React, {ChangeEvent, SelectHTMLAttributes} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Select.module.scss'

export interface SelectOption {
    value?: string
    content?: string
}

type SelectPropsTypes = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'>

interface SelectProps extends SelectPropsTypes {
    className?: string
    clsOptions?: string
    clsLabel?: string
    wrapper?: string
    label?: string | number
    options?: SelectOption[]
    value?: string | number
    onChange?: (value: string | number) => void
}

const Select = (props: SelectProps) => {

    const {
        className,
        clsLabel,
        onChange,
        label,
        options,
        value,
        clsOptions,
        wrapper,
        ...otherProps
    } = props

    const optionsList = React.useMemo(() => options?.map(opt => (
        <option
            className={classNames(cls.option, {}, [clsOptions])}
            key={opt.value}
            value={opt.value}
        >
            {opt.content}
        </option>
    )), [options, clsOptions])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.wrapper, {}, [wrapper])}>
            {label && (
                <span
                    className={classNames(cls.label, {}, [clsLabel])}
                >
                    {label}
                </span>
            )}
            <select
                className={classNames(cls.select, {}, [className])}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            >
                {optionsList}
            </select>
        </div>

    );
};

export default React.memo(Select);