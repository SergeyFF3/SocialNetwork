import React, {useCallback} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import Loader, {SizeLoader} from "widgets/Loader/Loader";
import {getProfileIsLoading} from "../model/selectors/getProfileIsLoading";
import {getProfileError} from "../model/selectors/getProfileError";
import {ProfileCard} from "entities/Profile";
import {fetchProfileData} from "../model/services/fetchProfileData";
import {getProfileFormData} from "../model/selectors/getProfileFormData";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({className}: ProfilePageProps) => {

    const {id} = useParams<{ id: string }>()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileFormData)

    const isLoading = useSelector(getProfileIsLoading)

    const error = useSelector(getProfileError)

    const [isOpen, setIsOpen] = React.useState(false)

    const closeHandler = useCallback(() => {
        setIsOpen(false)
    }, [])

    const openHandler = useCallback(() => {
        setIsOpen(true)
    }, [])

    const navigateEdit = React.useCallback(() => {
        navigate('/edit')
    }, [navigate])

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
                    data={formData}
                    error={error}
                    isOpen={isOpen}
                    onClose={closeHandler}
                    onOpen={openHandler}
                    navigate={navigateEdit}
                />
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);