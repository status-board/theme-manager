import ThemeManager from './ThemeManager';
import defaultTheme from './themes/default';

describe('Theme Manager', () => {
    test('that defaultTheme returns the default theme name', () => {
        const themeName = ThemeManager.defaultTheme;

        expect(themeName).toEqual(defaultTheme.name);
    });
});
