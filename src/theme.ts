import { createTheme, Theme } from '@mui/material/styles';

type ColorGradients = {
  main: string;
  dark: string;
};

declare module '@mui/material/styles' {
  interface Palette {
    gradient: ColorGradients;
  }

  interface PaletteOptions {
    gradient: ColorGradients;
  }

  interface TypeText {
    tertiary: string;
  }
}

export const colors = {
  grey_1: '#adadad',
  grey_2: '#2a2a2a',
  grey_3: '#3d3d3d',
  white: '#ffffff',
};

const theme: Theme = createTheme({
  palette: {
    gradient: {
      main: 'linear-gradient(to right, #0ff 0%, #2f8fff 50%, #8349ff 100%)',
      dark: 'linear-gradient(to right, #00807f 0%, #003b80 50%, #290080 100%)',
    },
    background: {
      default: '#212121',
      paper: '#2A2A2A',
    },
    text: {
      primary: '#FFF',
      secondary: '#ADADAD',
      tertiary: '#5B5B5B',
    },
  },
  typography: {
    fontSize: 16, //browsers will set 16px as root by default
    fontFamily: 'Helvetica, sans-serif',
    h1: {
      fontSize: '6rem', //96px
      fontFamily: 'Helvetica Pro',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '4rem', //64px
      fontFamily: 'Helvetica Pro',
    },
    h3: {
      fontSize: '3rem', //48px
      fontFamily: 'Helvetica Pro',
    },
    body1: {
      fontSize: '1.5rem', //25px
      fontFamily: 'Helvetica Regular',
    },
    body2: {
      fontSize: '1.125rem', //18px
      fontFamily: 'Helvetica Medium',
    },
    caption: {
      fontSize: '0.75rem', //12px
      fontFamily: 'Helvetica Medium',
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: '1rem',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: 'outlined',
          },
          style: ({ theme }) => ({
            padding: '.6rem 1.6rem',
            position: 'relative',
            zIndex: '0',
            border: 'none',
            '&:before': {
              content: '""',
              position: 'absolute',
              zIndex: '-1',
              inset: 0,
              borderRadius: '2rem',
              padding: '2px',
              backgroundImage: theme.palette.gradient.main,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
            },
            '&:hover': {
              border: 'none',
            },
          }),
        },
        {
          props: {
            variant: 'contained',
          },
          style: ({ theme }) => ({
            padding: '.6rem 1.6rem',
            position: 'relative',
            zIndex: '0',
            backgroundImage: theme.palette.gradient.dark,
            borderRadius: '2.5rem',
            textTransform: 'none',
            '&:before': {
              content: '""',
              position: 'absolute',
              zIndex: '-1',
              inset: 0,
              borderRadius: '2rem',
              padding: '2px',
              backgroundImage: theme.palette.gradient.main,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
            },
          }),
        },
      ],
    },
  },
});

export default theme;
