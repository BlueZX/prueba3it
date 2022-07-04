import { DarkTheme } from '@react-navigation/native'

const dark = {
  theme: {
    reactNavigation: {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: '#454bc9'
      },
    },
    background: 'black',
    primary: '#454bc9',
    secondary: '#5259ef',
    border: '#575c66',
    backgroundAlt: '#575c66',
    borderAlt: '#2E3440',
    text: '#ECEFF4',
  },
}

export default dark