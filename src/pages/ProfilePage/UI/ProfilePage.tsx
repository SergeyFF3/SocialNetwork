import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import { ProfileCard} from "entities/Profile";
import {useParams} from 'react-router-dom';
import Loader, {SizeLoader} from "widgets/Loader/Loader";
import {fetchProfileData} from "../model/services/fetchProfileData";
import {getProfileData} from "../model/selectors/getProfileData";


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
    console.log(data)

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
                <ProfileCard
                    data={data}
                    error={error}
                />
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);