import React from 'react';
import './styles/index.scss'
import Navbar from "widgets/Navbar/UI/Navbar/Navbar";
import AppRouter from "./provider/AppRouter/AppRouter";
import {classNames} from "shared/helpers/classNames/classNames";
import {useTheme} from "shared/helpers/ThemeProvider/useTheme";
import {useAppDispatch} from "./provider/storeProvider/store";
import {userActions} from 'entities/User';

function App() {

    const {theme} = useTheme()

    const dispatch = useAppDispatch()

    React.useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
