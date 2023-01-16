import React, {Suspense} from 'react';
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {Route, Routes} from 'react-router-dom';
import Loader from "widgets/Loader/Loader";
import {useSelector} from "react-redux";
import {getUserAuthData} from "entities/User";

// Метод Object.values возвращает массив собственных перечисляемых значений свойств данного объекта со строковыми ключами.
const AppRouter = () => {

    const isAuth = useSelector(getUserAuthData)

  const routes = React.useMemo(() => {
      return Object.values(routeConfig).filter(route => {
          if (route.authOnly && !isAuth) {
              return false
          }
          return  true
      })
  }, [isAuth])

    return (
        <Routes>
            {routes.map(({path, element}) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<Loader/>}>
                            {element}
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default React.memo(AppRouter);