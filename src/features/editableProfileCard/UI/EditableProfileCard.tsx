import React, {useCallback} from 'react';
import {ProfileCard} from "entities/Profile";
import {Profile} from "features/editableProfileCard";
import {useAppDispatch} from "app/provider/storeProvider/store";
import { profileActions } from '../model/slices/profileSlice';
import {updateProfileData} from "../model/services/updateProfileData";

interface EditableProfileCardProps {
    formData?: Profile
    error?: string
}

const EditableProfileCard = (props: EditableProfileCardProps) => {

    const {
        formData,
        error
    } = props

    const dispatch = useAppDispatch()

    const [isOpen, setIsOpen] = React.useState(false)

    const closeHandler = React.useCallback(() => {
        setIsOpen(false)
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const openHandler = React.useCallback(() => {
        setIsOpen(true)
    }, [])

    const onChangeAge = useCallback((value: number) => {
        dispatch(profileActions.updateProfile({age: value}))
    }, [dispatch])

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({city: value}))
    }, [dispatch])

    const onChangeHometown = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({hometown: value}))
    }, [dispatch])

    const cancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const saveDataClick = useCallback( async () => {
        const result = await dispatch(updateProfileData())

        if (result.meta.requestStatus === 'fulfilled') {
            closeHandler()
        }
    }, [dispatch])

    return (
        <ProfileCard
            formData={formData}
            error={error}
            isOpen={isOpen}
            onClose={closeHandler}
            onOpen={openHandler}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeHometown={onChangeHometown}
            cancelEdit={cancelEditHandler}
            saveData={saveDataClick}
        />
    );
};

export default React.memo(EditableProfileCard);