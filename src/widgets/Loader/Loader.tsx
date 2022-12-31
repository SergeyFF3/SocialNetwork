import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import './Loader.scss'

export enum SizeLoader {
    SMALL = 'small',
    MEDIUM = 'medium'
}

interface LoaderProps {
    className?: string
    size?: SizeLoader
}

const Loader = (props: LoaderProps) => {

    const {
        className,
        size
    } = props

    const mods: Record<string, boolean> = {
        [size]: true
    }

    return (
        <div className={classNames('Loader', mods, [className])}>
            <div className="lds-ring">
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default React.memo(Loader);