import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SearchUserCard.module.scss'
import {Profile} from 'entities/Profile';
import Avatar from "shared/UI/Avatar/Avatar";
import Text, {AlignText} from "shared/UI/Text/Text";
import Button, {ThemeButton} from "shared/UI/Button/Button";

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
            <div className={cls.AvatarWrapper}>
                <span className={cls.span}></span>
                <Avatar
                    className={cls.avatar}
                    size={140}
                    alt='Аватар пользователя'
                    src={item?.avatar}
                />
            </div>
            <div className={cls.botContent}>
                <div className={cls.name}>
                    <Text
                        className={cls.title}
                        align={AlignText.CENTER}
                        title={`${item?.firstname} ${item?.lastname}`}
                    />
                </div>
                <Button
                    className={cls.btn}
                    theme={ThemeButton.NORMAL}
                >
                    Добавить
                </Button>
            </div>
        </div>
    );
};

export default React.memo(SearchUserCard);