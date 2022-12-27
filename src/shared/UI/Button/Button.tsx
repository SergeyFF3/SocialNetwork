import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    NORMAL = 'normal',
    DISABLED = 'disabled',
    GREEN = 'green'
}

export enum SizeButton {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
    size?: SizeButton
    disabled?: boolean
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {

    const {
        className,
        children,
        theme,
        disabled,
        size,
        ...otherProps
    } = props

    const Mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.disabled]: disabled
    }

    return (
        <button
            type='button'
            className={classNames(cls.Button, Mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default React.memo(Button);