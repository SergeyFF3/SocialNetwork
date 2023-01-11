import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Text.module.scss'

export enum SizeText {
    S = 's',
    M = 'm',
    L = 'l',
    XL = 'xl'
}

export enum AlignText {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right'
}

export enum ThemeText {
    ERROR = 'error'
}

export enum ColorText {
    MEDIUMPURPLE = 'mediumpurple'
}

interface TextProps{
    className?: string
    theme?: ThemeText
    title?: string
    text?: string
    size?: SizeText
    align?: AlignText
    color?: ColorText
}

const Text = (props: TextProps) => {

    const {
        className,
        theme,
        text,
        align,
        size,
        title,
        color
    } = props

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={classNames(cls.text, {}, [cls[color]])}>{text}</p>}
        </div>
    );
};

export default React.memo(Text);