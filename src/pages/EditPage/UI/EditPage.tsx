import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './EditPage.module.scss'
import {useSelector} from "react-redux";
import {EditableProfile} from "features/editableProfile";
import {useAppDispatch} from "app/provider/storeProvider/store";
import {fetchProfileData, getProfileError, getProfileFormData, getProfileIsLoading} from "../../ProfilePage";
import Loader, {SizeLoader} from "widgets/Loader/Loader";

interface EditPageProps {
    className?: string
}

const EditPage = ({className}: EditPageProps) => {

    const dispatch = useAppDispatch()

    const formData = useSelector(getProfileFormData)

    const isLoading = useSelector(getProfileIsLoading)

    const error = useSelector(getProfileError)

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
            <EditableProfile
                data={formData}
                error={error}
            />
        </div>
    );
};

export default React.memo(EditPage);