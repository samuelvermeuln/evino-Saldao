import React from 'react';
import { getLinkLayout, getLinkTheme } from '../utils/ThemeFactory';
import { getLocalStorage, setLocalStorage } from '../utils/StorageFactory';

export const ThemeContext = React.createContext({});

export const ThemeProvider = (props) => {

    const [theme, setTheme] = React.useState({
        mode: 'light',
        theme: getLinkTheme('light'),
        layout: getLinkLayout('light')
    });

    React.useEffect(() => {
        const themeStorage = getLocalStorage("theme");
        if (themeStorage) {
            setTheme(JSON.parse(themeStorage));
        } else {
            setTheme({
                mode: 'light',
                theme: getLinkTheme('light'),
                layout: getLinkLayout('light')
            });
        }
    }, []);

    const alterTheme = (mode) => {
        setLocalStorage("theme", {
            mode: mode,
            theme: getLinkTheme(mode),
            layout: getLinkLayout(mode)
        })
        setTheme({
            mode: mode,
            theme: getLinkTheme(mode),
            layout: getLinkLayout(mode)
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, alterTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export const useThemeContext = () => React.useContext(ThemeContext);