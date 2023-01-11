import React, {CSSProperties} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Avatar.module.scss'

interface AvatarProps {
    className?: string
    src?: string
    alt?: string
    size?: number
}

const Avatar = (props: AvatarProps) => {

    const {
        className,
        size,
        src,
        alt
    } = props

    const styles = React.useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size])

    return (
        <img className={classNames(cls.Avatar, {}, [className])}
             src={src}
             alt={alt}
             style={styles}

        />
    );
};

export default React.memo(Avatar);