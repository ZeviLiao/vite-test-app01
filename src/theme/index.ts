import { createTheme } from '@mui/material/styles'

// Light 主题
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
})

// Dark 主题
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
})

// 预定义颜色主题
export const colorThemes = {
  blue: createTheme({ palette: { primary: { main: '#2196f3' } } }),
  green: createTheme({ palette: { primary: { main: '#4caf50' } } }),
  purple: createTheme({ palette: { primary: { main: '#9c27b0' } } }),
  orange: createTheme({ palette: { primary: { main: '#ff9800' } } }),
  red: createTheme({ palette: { primary: { main: '#f44336' } } }),
}
