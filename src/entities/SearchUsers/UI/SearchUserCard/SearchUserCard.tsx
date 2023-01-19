import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SearchUserCard.module.scss'
import { Profile } from 'entities/Profile';

interface SearchUserCardProps {
    className?: string
    item?: Profile
}

const SearchUserCard = (props: SearchUserCardProps) => {

    const {
        className,
        item
    } = props

    return (
        <div className={classNames(cls.SearchUserCard, {}, [className])}>
            {item.firstname}
        </div>
    );
};

export default React.memo(SearchUserCard);