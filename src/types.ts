export interface CssTypography {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
}

export interface TypographyDefaultDefault {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: string;
}

export interface TypographyDefaultStrong {
    fontWeight: number;
}

export interface TypographyDefaultSmall {
    fontSize: string;
}

export interface TypographyDisplayDefault {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
}

export interface TypographyMonoDefault {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
}

export interface Typography {
    [key: string]: {
        [key: string]: {
            fontFamily?: string;
            fontSize?: string;
            fontWeight?: number;
            lineHeight?: string;
        };
    };

    default: {
        default: TypographyDefaultDefault;
        strong: TypographyDefaultStrong;
        small: TypographyDefaultSmall;
    };
    display: {
        default: TypographyDisplayDefault;
    };
    mono: {
        default: TypographyMonoDefault;
    };
}

export interface Theme {
    name: string;
    typography: Typography;
    colors: {
        text: string;
        textHighlight: string;
        icon: string;
        unknown: string;
        success: string;
        warning: string;
        failure: string;
        [key: string]: string;
    };
    root: {
        background: string;
        extend: string;
    };
    dashboard: {
        header: {
            height: string;
            padding: string;
            background: string;
            color: string;
            boxShadow: string;
            extend: string;
            title: {
                color: string;
                textTransform: string;
                fontFamily: string;
                fontSize: string;
                extend: string;
            };
        };
        player: {
            slash: {
                margin: string;
                color: string;
                fontSize: string;
                extend: string;
            };
        };
    };
    widget: {
        background: string;
        extend: string;
        wrapper: {
            padding: string;
            extend: string;
        };
        header: {
            height: string;
            background: string;
            color: string;
            padding: string;
            fontSize: string;
            extend: string;
            subject: {
                extend: string;
            };
            count: {
                color: string;
                fontSize: string;
                extend: string;
            };
            icon: {
                color: string;
                fontSize: string;
                extend: string;
            };
        };
        body: {
            top: string;
            padding: string;
            extend: string;
        };
    };
    notifications: {
        item: {
            padding: string;
            background: string;
            color: string;
            extend: string;
        };
    };
    label: {
        background: string;
        color: string;
        extend: string;
        main: {
            padding: string;
            background: string;
            color: string;
            extend: string;
        };
        addon: {
            padding: string;
            background: string;
            color: string;
            extend: string;
        };
    };
    list: {
        item: {
            padding: string;
            background: string;
            extend: string;
            hover: {
                background: string;
                extend: string;
            };
            meta: {
                fontSize: string;
                extend: string;
            };
        };
    };
    charts: {
        axis: {
            textColor: string;
            fontSize: string;
            tickColor: string;
            legendColor: string;
            legendFontSize: string;
        };
        grid: {
            stroke: string;
        };
        colors: string[];
    };
}

export interface Themes {
    [key: string]: Theme;
}
