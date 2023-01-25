import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './CommentList.module.scss'
import Text from "shared/UI/Text/Text";
import CommentItem from '../CommentItem/CommentItem';
import {Comment} from "../../model/types/comment";

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean

}

const CommentList = (props: CommentListProps) => {

    const {
        className,
        isLoading,
        comments
    } = props

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
            ? comments.map(comment => (
                <CommentItem
                    key={comment?.id}
                    isLoading={isLoading}
                    comment={comment}
                />
                    )
                )
            : <Text text='Комментарии отсутствуют'/>}
        </div>
    );
};

export default React.memo(CommentList);