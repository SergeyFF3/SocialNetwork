import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "shared/helpers/ThemeProvider/useTheme";
import {Theme} from "shared/helpers/ThemeProvider/ThemeContext";
import Button from "shared/UI/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {

    const {
        className
    } = props

    const {toggleTheme, theme} = useTheme()

    return (
        <div onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <span className={cls.span}>🌜</span>
            <span className={cls.span}>🌞</span>
            {theme === Theme.LIGHT
                ? <button className={classNames(cls.btn, {}, [cls.light])}/>
                : <Button className={classNames(cls.btn, {}, [cls.dark])}/>
            }
        </div>
    );
};

export default React.memo(ThemeSwitcher);