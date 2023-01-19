import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SearchUsersList.module.scss'
import SearchUserCard from "../SearchUserCard/SearchUserCard";
import {Profile} from 'entities/Profile';

interface SearchUsersListProps {
    className?: string
    SearchList?: Profile[]
}

const SearchUsersList = (props: SearchUsersListProps) => {

    const {
        className,
        SearchList
    } = props

    return (
        <div className={classNames(cls.SearchUsersList, {}, [className])}>
            {SearchList?.map(item => {
                return (
                    <SearchUserCard
                        key={item.id}
                        item={item}
                    />
                )
            })}
        </div>
    );
};

export default React.memo(SearchUsersList);