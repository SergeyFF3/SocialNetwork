import React, {useCallback} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './EditPage.module.scss'
import {useSelector} from "react-redux";
import {useAppDispatch} from "app/provider/storeProvider/store";
import Loader, {SizeLoader} from "widgets/Loader/Loader";
import {
    fetchProfileData,
    updateProfileData,
    getProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
} from "entities/Profile";
import {ProfileEdit} from "entities/ProfileEdit";
import {profileActions} from 'entities/Profile/model/slices/profileSlice';


interface EditPageProps {
    className?: string
}

const EditPage = ({className}: EditPageProps) => {

    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileFormData)

    const data = useSelector(getProfileData)

    const isLoading = useSelector(getProfileIsLoading)

    const error = useSelector(getProfileError)

    const onChangeAge = useCallback((value?: number) => {
        dispatch(profileActions.updateProfile({age: value}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value}))
    }, [dispatch])

    const onChangeHometown = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({hometown: value}))
    }, [dispatch])

    const cancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const saveDataClick = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    React.useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    if (isLoading) {
        return (
            <div className={cls.loader}>
                <Loader size={SizeLoader.MEDIUM}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.EditPage, {}, [className])}>
            <div className={cls.container}>
                <ProfileEdit
                    formData={formData}
                    error={error}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeHometown={onChangeHometown}
                    cancelEdit={cancelEditHandler}
                    saveData={saveDataClick}
                />
            </div>
        </div>
    );
};

export default React.memo(EditPage);