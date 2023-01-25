import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SendComment.module.scss'
import {useAppDispatch} from "../../../../app/provider/storeProvider/store";
import {sendCommentThunk} from "../..";
import { useParams } from 'react-router-dom';
import Button from "../../../../shared/UI/Button/Button";

interface SendCommentProps {
    className?: string
}

const SendComment = (props: SendCommentProps) => {

    const {
        className
    } = props

    const { id } = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

    const sendComment = React.useCallback(() => {
        dispatch(sendCommentThunk(id))
        console.log(id)
    }, [dispatch])

    return (
        <div className={classNames(cls.SendComment, {}, [className])}>
          <Button onClick={sendComment}>Отправить смс</Button>
        </div>
    );
};

export default React.memo(SendComment);