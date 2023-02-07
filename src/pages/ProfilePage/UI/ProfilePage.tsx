import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfilePage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, ProfileCard} from "entities/Profile";
import {BgProfileColor} from "widgets/BgSwitcher/BgSwitcher";
import {getUserAuthData} from "entities/User";
import Loading from "shared/UI/Loading/Loading";
import {CommentList, fetchComments, getCommentData} from "../../../entities/Comment";
import SendComment from "../../../features/SendComment/UI/SendComment/SendComment";

interface ProfilePageProps {
    className?: string
}

const ProfilePage: React.FC = ({className}: ProfilePageProps) => {

    let {id} = useParams<{ id: string }>()
    console.log(id)
    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const isAuth = useSelector(getUserAuthData)

    const data = useSelector(getProfileData)

    const isLoading = useSelector(getProfileIsLoading)

    const error = useSelector(getProfileError)

    const comments = useSelector(getCommentData)

    const [bgColor, setBgColor] = React.useState<BgProfileColor>(BgProfileColor.mediumpurple)

    const onChangeBgColor = React.useCallback((value: BgProfileColor) => {
        setBgColor(value)
    }, [setBgColor])

    const [isOpen, setIsOpen] = React.useState(false)

    const closeHandler = React.useCallback(() => {
        setIsOpen(false)
    }, [])

    const openHandler = React.useCallback(() => {
        setIsOpen(true)
    }, [])

    const navigateEdit = React.useCallback(() => {
        navigate('/edit')
    }, [navigate])

    React.useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id))
        }
    }, [dispatch, id])

    React.useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    if (isLoading) {
        return <Loading/>
    }

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <div className={cls.container}>
                <ProfileCard
                    data={data}
                    isAuth={isAuth}
                    error={error}
                    isOpen={isOpen}
                    onClose={closeHandler}
                    onOpen={openHandler}
                    navigateEdit={navigateEdit}
                    bgColor={bgColor}
                    onChangeBgColor={onChangeBgColor}
                />
                <SendComment/>
                <CommentList comments={comments}/>
            </div>
        </div>
    );
};

export default React.memo(ProfilePage);