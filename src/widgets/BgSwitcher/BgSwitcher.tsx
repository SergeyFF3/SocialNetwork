import React from 'react';
import Select from "shared/UI/Select/Select";
import cls from './BgSwitcher.module.scss'

export enum BgProfileColor {
    mediumpurple = 'Сиреневый',
    gray = 'Серый',
    green = 'Зеленый',
    orange = 'Оранжевый'
}

interface BgSwitcherProps {
    value?: BgProfileColor
    onChange?: (value: BgProfileColor) => void
    className?: string
}

const BgSwitcher = (props: BgSwitcherProps) => {

    const {
        value,
        onChange
    } = props

    const colorOptions = React.useMemo(() => (
            Object.entries(BgProfileColor).map((item) => (
                {value: item[0], content: item[1]}
            )))
        , [])

    const onChangeHandler = React.useCallback((value: string) => {
        onChange?.(value as BgProfileColor)
    }, [onChange])

    return (
        <Select
            clsOptions={cls.option}
            clsLabel={cls.label}
            className={cls.select}
            label='Цвет фона'
            value={value}
            onChange={onChangeHandler}
            options={colorOptions}
        />
    )

};

export default React.memo(BgSwitcher);