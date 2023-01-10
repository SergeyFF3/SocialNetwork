import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SearchPage.module.scss'

interface SearchPageProps {
    className?: string
}

const SearchPage = (props: SearchPageProps) => {

    const {
        className
    } = props

    return (
        <div className={classNames(cls.SearchPage, {}, [className])}>
            Search
        </div>
    );
};

export default React.memo(SearchPage);