import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { Button, Dialog, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { selectGoals } from 'GoalMap/src/store/goals';
import { useSelector } from 'react-redux';
const GoalsScreen = () => {
  const { t } = useTranslation(['welcome']);
  const { Fonts, Layout } = useTheme();
  const [visible, setVisible] = useState(false);
  const goals = useSelector(selectGoals);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View>
        <Text style={[Fonts.textLarge, Fonts.textLight]}>
          {t('welcome:title')}
        </Text>
        <Text style={[Fonts.textRegular, Fonts.textLight]}>
          {t('welcome:subtitle')}
        </Text>
      </View>
      {goals.length > 0 &&
        goals.map(goal => {
          return (
            <View>
              <Text>{goal.title}</Text>
              <Text>{goal.description}</Text>
            </View>
          );
        })}
      <View>
        <Button icon={<Icon name="add" />} onPress={toggleDialog} />
        <Dialog
          isVisible={visible}
          onBackdropPress={toggleDialog}
          overlayStyle={style.dialog}
        >
          <Input placeholder="Goal Title" />
          <Input placeholder="Goal Description" />
        </Dialog>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  dialog: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
});
export default GoalsScreen;
