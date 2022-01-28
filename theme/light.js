import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import coreTheme from './coreTheme';

// Create a theme instance.
const theme = createMuiTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    background: {
      default: '#fff',
      paper: '#fff'
    },
    accountButton: {
      default: '#E84142'
    },
    primary: {
      main: '#E84142',
    },
    secondary: {
      main: '#DEDEDE'
    },
    type: 'light',
  },
  overrides: {
    ...coreTheme.overrides,
    MuiButton: {
      ...coreTheme.overrides.MuiButton,
      outlinedPrimary: {
        border: '1px solid #EAEAEA',
        "&:hover": {
          backgroundColor: '#E84142 !important',
          color: '#000'
        }
      }
    },
    MuiInputBase: {
      ...coreTheme.overrides.MuiInputBase,
      root: {
        background: "#fff"
      }
    },
    MuiOutlinedInput: {
      ...coreTheme.overrides.MuiOutlinedInput,
      notchedOutline: {
        borderColor: "#FFF"
      }
    },
    MuiSnackbarContent: {
      root: {
        color: 'rgba(0, 0, 0, 0.87)',
        backgroundColor: '#F8F9FE',
        padding: '0px',
        minWidth: 'auto',
        '@media (min-width: 960px)': {
          minWidth: '500px',
        }
      },
      message: {
        padding: '0px'
      },
      action: {
        marginRight: '0px'
      }
    },
  }
});

export default theme;
