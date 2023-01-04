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

interface TextProps{
    className?: string
    theme?: ThemeText
    title?: string
    text?: string
    size?: SizeText
    align?: AlignText
}

const Text = (props: TextProps) => {

    const {
        className,
        theme,
        text,
        align,
        size,
        title
    } = props

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

export default React.memo(Text);