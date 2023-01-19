import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './CommentItem.module.scss'
import {Comment} from "../../model/types/comment";

interface CommentItemProps {
    className?: string
    comment?: Comment
    isLoading?: boolean
}

const CommentItem = (props: CommentItemProps) => {

    const {
        className,
        comment,
        isLoading
    } = props

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
comment
        </div>
    );
};

export default React.memo(CommentItem);