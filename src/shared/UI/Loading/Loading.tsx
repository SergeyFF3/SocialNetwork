import React from 'react';
import cls from './Loading.module.scss'
import Loader, {SizeLoader} from "widgets/Loader/Loader";

const Loading = () => {

    return (
        <div className={cls.loader}>
            <Loader size={SizeLoader.MEDIUM}/>
        </div>
    );
};

export default React.memo(Loading);