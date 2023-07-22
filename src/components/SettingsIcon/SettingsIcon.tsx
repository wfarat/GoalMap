import React from 'react';
import { useTheme } from '../../hooks';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconNode } from '@rneui/base';
const SettingsIcon = () => {
  const { Fonts } = useTheme();
  return (
    <Icon name="ellipsis-horizontal" size={20} color={Fonts.titleLarge.color} />
  );
};

export default SettingsIcon as IconNode;
