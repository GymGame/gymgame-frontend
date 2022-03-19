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
  components: {
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

            '&:before': {
              content: '""',
              position: 'absolute',
              zIndex: '-1',
              inset: 0,
              borderRadius: '2rem',
              padding: '.17rem',
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
