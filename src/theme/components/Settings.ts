import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({ Layout, NavigationColors }: CommonParams<C>) {
  const base = {
    ...Layout.absolute,
    backgroundColor: NavigationColors.card,
    right: 5,
  };
  return StyleSheet.create({
    base,
    top: {
      ...base,
      top: 5,
    },
    bottom: {
      ...base,
      bottom: 5,
    },
  });
}
