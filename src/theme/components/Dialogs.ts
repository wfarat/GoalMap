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
  };

  return StyleSheet.create({
    base,
  });
}
