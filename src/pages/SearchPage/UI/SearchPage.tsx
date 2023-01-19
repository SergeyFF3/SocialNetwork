import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './SearchPage.module.scss'
import {useAppDispatch} from "app/provider/storeProvider/store";
import {useSelector} from "react-redux";
import {getSearchData, getSearchError, getSearchIsLoading} from "../model/selectors/getSearchData";
import Loading from "shared/UI/Loading/Loading";
import {fetchUsers} from "../model/services/fetchUsers";
import {SearchUsersList} from "entities/SearchUsers";
import Text, {SizeText, ThemeText} from "shared/UI/Text/Text";

interface SearchPageProps {
    className?: string
}

const SearchPage = (props: SearchPageProps) => {

    const {
        className
    } = props

    const dispatch = useAppDispatch()

    const data = useSelector(getSearchData)

    const isLoading = useSelector(getSearchIsLoading)

    const error = useSelector(getSearchError)

    React.useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (isLoading) {
        return <Loading/>
    }

    if (error) {
        return (
            <div className={cls.error}>
                <Text
                    theme={ThemeText.ERROR}
                    size={SizeText.L}
                    title={error}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.SearchPage, {}, [className])}>
            <div className={cls.container}>
                <SearchUsersList
                    SearchList={data}
                />
            </div>
        </div>
    );
};

export default React.memo(SearchPage);