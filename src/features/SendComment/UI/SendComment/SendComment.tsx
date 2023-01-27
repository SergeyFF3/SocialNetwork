import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SendComment.module.scss'
import {useAppDispatch} from "../../../../app/provider/storeProvider/store";
import {sendCommentThunk} from "../..";
import {useParams} from 'react-router-dom';
import Button, {ThemeButton} from "../../../../shared/UI/Button/Button";
import Textarea from "../../../../shared/UI/Textarea/Textarea";
import {useSelector} from "react-redux";
import {getSendCommentText} from "../../model/selectors/getSendCommentData";
import { sendCommentActions } from 'features/SendComment/model/slices/sendCommentSlice';

interface SendCommentProps {
    className?: string
}

const SendComment = (props: SendCommentProps) => {

    const {
        className
    } = props

    const { id } = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

    const text = useSelector(getSendCommentText)

    const onChangeText = React.useCallback((value: string) => {
        dispatch(sendCommentActions.setText(value))
    }, [dispatch])

    const sendComment = React.useCallback(() => {
        dispatch(sendCommentThunk(id))
        console.log(id)
    }, [dispatch, id])

    return (
        <div className={classNames(cls.SendComment, {}, [className])}>
            <div className={cls.textarea}>
                <Textarea
                    placeholder='Оставьте комментарий...'
                    value={text}
                    onChange={onChangeText}
                />
            </div>
          <Button
              theme={ThemeButton.NORMAL}
              onClick={sendComment}
          >
              Отправить смс
          </Button>
        </div>
    );
};

export default React.memo(SendComment);