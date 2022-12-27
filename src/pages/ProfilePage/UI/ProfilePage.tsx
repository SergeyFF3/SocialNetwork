import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import Text, {ThemeText} from "shared/UI/Text/Text";
import {fetchProfileData, getProfileData} from "entities/Profile";
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className
    } = props

    const {
        data,
        isLoading,
        readonly,
        error
    } = useSelector(getProfileData)

    const {id} = useParams<{id: string}>()

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    }, [dispatch, id])

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            {error && <Text theme={ThemeText.ERROR} title={error}/>}
            {data?.firstname}
            profile
        </div>
    );
};

export default React.memo(ProfilePage);