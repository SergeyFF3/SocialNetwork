import React, {useCallback} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './EditableProfile.module.scss'
import {ProfileEditCard} from "entities/ProfileEditCard";
import {updateProfileData} from "../model/services/updateProfileData";
import {useAppDispatch} from "../../../app/provider/storeProvider/store";
import {updateProfileActions} from '../model/slices/updateProfileSlice';
import { Profile } from 'entities/Profile';

interface EditableProfileProps {
    className?: string
    data?: Profile
    error?: string
}

const EditableProfile = (props: EditableProfileProps) => {

    const {
        className,
        data,
    } = props

    const  dispatch = useAppDispatch()

    const onChangeAge = useCallback((value: number) => {
        dispatch(updateProfileActions.updateProfile({age: value}))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(updateProfileActions.updateProfile({city: value}))
    }, [dispatch])

    const onChangeHometown = useCallback((value: string) => {
        dispatch(updateProfileActions.updateProfile({hometown: value}))
    }, [dispatch])

    const cancelEditHandler = useCallback(() => {
        dispatch(updateProfileActions.cancelEdit())
    }, [dispatch])

    const saveDataClick = useCallback( () => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.EditableProfile, {}, [className])}>
           <ProfileEditCard
           data={data}
           onChangeAge={onChangeAge}
           onChangeCity={onChangeCity}
           onChangeHometown={onChangeHometown}
           cancelEdit={cancelEditHandler}
           saveData={saveDataClick}
           />
        </div>
    );
};

export default React.memo(EditableProfile);