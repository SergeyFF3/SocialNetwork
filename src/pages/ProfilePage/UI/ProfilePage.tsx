import React, {useCallback} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import Loader, {SizeLoader} from "widgets/Loader/Loader";
import {fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, ProfileCard} from "entities/Profile";
import {BgProfileColor} from "widgets/BgSwitcher/BgSwitcher";
import {getUserAuthData} from "../../../entities/User";
import Button, {ThemeButton} from "../../../shared/UI/Button/Button";

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({className}: ProfilePageProps) => {

    const {id} = useParams<{ id: string }>()

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const data = useSelector(getProfileData)

    const isLoading = useSelector(getProfileIsLoading)

    const error = useSelector(getProfileError)

    const isAuth = useSelector(getUserAuthData)

    const [bgColor, setBgColor] = React.useState<BgProfileColor>(BgProfileColor.mediumpurple)

    const onChangeBgColor = React.useCallback((value: BgProfileColor) => {
        setBgColor(value)
    }, [setBgColor])

    const [isOpen, setIsOpen] = React.useState(false)

    const closeHandler = useCallback(() => {
        setIsOpen(false)
    }, [])

    const openHandler = React.useCallback(() => {
        setIsOpen(true)
    }, [])

    const onAuthorization = React.useCallback(() => {
        navigate('/')
    }, [navigate])

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
    // console.log(isAuth)
    // if (!isAuth) {
    //     return <Button
    //         theme={ThemeButton.CLEAR}
    //         onClick={onAuthorization}>
    //         Авторизируйтесь чтобы пользоваться всеми возможностями Netty
    //     </Button>
    // }

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <div className={cls.container}>
                <ProfileCard
                    data={data}
                    error={error}
                    isOpen={isOpen}
                    onClose={closeHandler}
                    onOpen={openHandler}
                    navigateEdit={navigateEdit}
                    bgColor={bgColor}
                    onChangeBgColor={onChangeBgColor}
                />
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);