import {useContext} from "react";
import {Theme, ThemeContext} from "./ThemeContext";
import {THEME_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface UseThemeProps {
    theme?: Theme
    toggleTheme?: () => void
}

export function useTheme(): UseThemeProps {
    const {setTheme, theme} = useContext(ThemeContext)

    const toggleTheme = () => {
        let newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

        setTheme?.(newTheme)

        // следующая строка позволяет сохранить тему в localStorage
        // setItem функция позволяет сохранить тему, а LOCAL_STORAGE_THEME_KEY ключ по которому идет сохранение
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newTheme)
    }
    return {toggleTheme, theme}
}