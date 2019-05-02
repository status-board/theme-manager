import defaultsDeep from 'lodash/defaultsDeep';
import defaultTheme from './themes/default';
import { Theme, Themes } from './types';

const themes = {
    [defaultTheme.name]: defaultTheme,
};

const ThemeManager = {
    defaultTheme: defaultTheme.name,

    add(theme: Theme) {
        themes[theme.name] = defaultsDeep(theme, defaultTheme);
    },

    listThemes(): Themes {
        return themes;
    },

    get(name: string): Theme {
        return themes[name];
    },
};

export default ThemeManager;
