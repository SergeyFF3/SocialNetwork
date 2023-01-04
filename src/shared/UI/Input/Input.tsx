import React, {InputHTMLAttributes} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Input.module.scss'

export enum ThemeInput {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

// Если сделать такую запись :
// interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
//     className?: string
//      value: string
//      onChange: (string) => void
// Возникнет конфликт типов, так как у input и так есть просы value u onChange.
// и чтобы этого избежать мы можем воспользоваться конструкцией как Omit
// Он позволяет забрать из типа все пропсы, но исключить какие-то которые нам не нужны.
// Первым аргументом указываем что хотим забрать, а вторым что хотим исключить
// }
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string | number) => void
    theme?: ThemeInput
    readonly?: boolean
}

const Input = (props: InputProps) => {

    const {
        className,
        value,
        onChange,
        readonly,
        theme,
        type = 'text',
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const Mods: Record<string, boolean> = {
        [cls.readonly]: readonly
    }

    return (
        <input
            className={classNames(cls.Input, Mods, [className, cls[theme]])}
            value={value}
            readOnly={readonly}
            onChange={onChangeHandler}
            type={type}
            {...otherProps}
        />
    );
};

export default React.memo(Input);