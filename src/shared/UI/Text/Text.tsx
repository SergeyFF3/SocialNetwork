import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Text.module.scss'

export enum SizeText {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl'
}

export enum ThemeText {
    ERROR = 'error'
}

interface TextProps{
    className?: string
    theme?: ThemeText
    title?: string
    text?: string
    size?: SizeText
}

const Text = (props: TextProps) => {

    const {
        className,
        theme,
        text,
        size,
        title
    } = props

    const Mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true
    }

    return (
        <div className={classNames(cls.Text, Mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

export default React.memo(Text);