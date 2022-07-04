import {DefaultTheme} from '@react-navigation/native';

const light = {
  theme: {
    reactNavigation: {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '#454bc9'
      },
    },
    background: 'white',
    primary: '#454bc9',
    secondary: '#5259ef',
    border: '#bdbdbd',
    backgroundAlt: '#eaeaeb',
    borderAlt: '#bdbdbd',
    text: '#171717',
  },
};
export default light;
