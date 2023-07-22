import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({
  Gutters,
  Layout,
  NavigationColors,
}: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.regularHPadding,
    backgroundColor: NavigationColors.card,
    borderWidth: 1,
    padding: 15,
    margin: 15,
    borderColor: 'white',
  };
  return StyleSheet.create({
    base,
  });
}
