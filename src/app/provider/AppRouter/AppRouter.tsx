import React, {Suspense} from 'react';
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {Route, Routes} from 'react-router-dom';

// Метод Object.values возвращает массив собственных перечисляемых значений свойств данного объекта со строковыми ключами.
const AppRouter = () => {

    return (
        <Routes>
            {Object.values(routeConfig).map(({path, element}) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={'Loading'}>
                            {element}
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default React.memo(AppRouter);