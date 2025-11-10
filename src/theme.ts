export const colors = {
  // Gray scale
  gray: {
    50: '#F8F9FA',
    100: '#F1F3F5',
    200: '#E9ECEF',
    300: '#DEE2E6',
    400: '#CED4DA',
    500: '#ADB5BD',
    600: '#868E96',
    700: '#495057',
    800: '#343A40',
    900: '#212529'
  },

  // Primary colors (Teal)
  teal: {
    50: '#E6FCF5',
    100: '#C3FAE8',
    200: '#96F2D7',
    300: '#63E6BE',
    400: '#38D9A9',
    500: '#20C997',
    600: '#12B886',
    700: '#0CA678',
    800: '#099268',
    900: '#087F5B'
  },

  // Secondary colors (Blue)
  blue: {
    50: '#E7F5FF',
    100: '#D0EBFF',
    200: '#A5D8FF',
    300: '#74C0FC',
    400: '#4DABF7',
    500: '#339AF0',
    600: '#228BE6',
    700: '#1C7ED6',
    800: '#1971C2',
    900: '#1864AB'
  },

  // Additional colors for modal states and interactions
  red: {
    50: '#FFF5F5',
    100: '#FED7D7',
    200: '#FEB2B2',
    300: '#FC8181',
    400: '#F56565',
    500: '#E53E3E',
    600: '#C53030',
    700: '#9B2C2C',
    800: '#822727',
    900: '#63171B'
  },

  green: {
    50: '#F0FFF4',
    100: '#C6F6D5',
    200: '#9AE6B4',
    300: '#68D391',
    400: '#48BB78',
    500: '#38A169',
    600: '#2F855A',
    700: '#276749',
    800: '#22543D',
    900: '#1C4532'
  },

  yellow: {
    50: '#FFFFF0',
    100: '#FEFCBF',
    200: '#FAF089',
    300: '#F6E05E',
    400: '#ECC94B',
    500: '#D69E2E',
    600: '#B7791F',
    700: '#975A16',
    800: '#744210',
    900: '#5F370E'
  }
}

// filepath: src/tokens/theme.ts
export const theme = {
  colors,
  semantic: {
    primary: colors.teal[600],
    secondary: colors.blue[600],
    success: colors.green[600],
    warning: colors.yellow[500],
    error: colors.red[500],
    background: colors.gray[50],
    surface: '#ffffff',
    text: {
      primary: colors.gray[900],
      secondary: colors.gray[700],
      muted: colors.gray[500]
    },
    border: {
      light: colors.gray[200],
      default: colors.gray[300],
      dark: colors.gray[400]
    }
  }
}
