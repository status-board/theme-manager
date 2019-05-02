import { CssTypography, Theme } from '../types';

export interface Typography {
    [key: string]: CssTypography;
}

const cache: Typography = {};

export default (theme: Theme, type = 'default', variant = 'default'): CssTypography => {
    const key = `${theme.name}.${type}.${variant}`;

    const cached = cache[key];
    if (cached !== undefined) {
        return cache[key];
    }

    let config = theme.typography[type].default;
    if (variant !== 'default') {
        config = {
            ...config,
            ...theme.typography[type][variant],
        };
    }

    cache[key] = {
        fontFamily: config.fontFamily as string,
        fontSize: config.fontSize as string,
        fontWeight: config.fontWeight as number,
        lineHeight: config.lineHeight as string,
    };

    return cache[key];
};
