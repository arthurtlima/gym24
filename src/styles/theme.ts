export default {
    grid: {
        container: '73.125rem',
    },
    border: {
        radius_sm: '0.625rem',
        radius_md: '1.25rem',
        radius_lg: '1.875rem',
    },
    font: {
        family: "MADE Outer Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        sizes: {
            tiny: '0.75rem',
            small: '0.875rem',
            moderate: '1rem',
            medium: '1.125rem',
            large: '1.5rem',
            huge: '3rem',
            gigantic: '4rem',
        }  
    },
    colors: {
        mainBg: '#000000',
        lightBg: '#F2F2F2',
        white: '#FFFFFF',
        black: '#030517',
        gray: '#222222',
        yellow: '#FAFF00',
    },
    spacings: {
        spacing_1: '0.5rem',
        spacing_2: '1rem',
        spacing_3: '1.5rem',
        spacing_4: '2rem',
        spacing_5: '3rem',
        spacing_6: '4rem',
        spacing_7: '5rem',
        spacing_8: '6rem',
        spacing_9: '7rem',
        spacing_10: '8rem',
        spacing_11: '10rem',
        spacing_12: '15rem',
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    },
} as const

