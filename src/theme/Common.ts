/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import {
  buttonStyles,
  cardStyles,
  dialogStyles,
  settingStyles,
} from './components';
import { CommonParams } from '../../@types/theme';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    dialog: dialogStyles({ Colors, ...args }),
    card: cardStyles({ Colors, ...args }),
    settings: settingStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.textGray400,
        height: 45,
        borderRadius: 10,
        paddingStart: 20,
      },
      multilineInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.textGray400,
        height: 110,
        borderRadius: 10,
        paddingStart: 20,
      },
    }),
  };
}
