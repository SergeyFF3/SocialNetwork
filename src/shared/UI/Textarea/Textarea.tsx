import React, {TextareaHTMLAttributes} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Textarea.module.scss'

type TextareaType = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextareaProps extends TextareaType {
    className?: string
    value?: string
    onChange?: (value: string | number) => void
}

const Textarea = (props: TextareaProps) => {

    const {
        className,
        value,
        onChange,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <textarea
            className={classNames(cls.Textarea, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />


    );
};

export default React.memo(Textarea);