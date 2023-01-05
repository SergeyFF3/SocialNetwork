import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import Loader, {SizeLoader} from "widgets/Loader/Loader";
import {EditableProfileCard, fetchProfileData, getFormData, getProfileData} from "features/editableProfileCard";



interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className
    } = props

    const {
        isLoading,
        error
    } = useSelector(getProfileData)

    const formData = useSelector(getFormData)

    const {id} = useParams<{ id: string }>()

    const dispatch = useAppDispatch()

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
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <div className={cls.container}>
                <EditableProfileCard
                formData={formData}
                error={error}
                />
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);