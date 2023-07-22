import { StyleSheet } from 'react-native';
import { CommonParams } from '../../../@types/theme';

export default function <C>({
  Gutters,
  Layout,
  NavigationColors,
}: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.regularPadding,
    ...Gutters.tinyMargin,
    backgroundColor: NavigationColors.card,
    borderWidth: 1,
    borderColor: 'white',
  };
  return StyleSheet.create({
    base,
  });
}
