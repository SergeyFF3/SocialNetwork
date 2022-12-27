import React, {PropsWithChildren} from 'react';
import { Theme, ThemeContext} from "./ThemeContext";
import {THEME_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const defaultTheme = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme || Theme.LIGHT

const ThemeProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [theme, setTheme] = React.useState<Theme>(defaultTheme)

    const defaultProps = React.useMemo( () => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;