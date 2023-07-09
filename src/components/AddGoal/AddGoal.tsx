import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { addGoal } from 'GoalMap/src/store/goals';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
const AddGoal = () => {
  const { t } = useTranslation(['goals']);
  const { Common, Fonts } = useTheme();
  const { button } = Common;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const sendGoal = () => {
    dispatch(addGoal({ title, description }));
    toggleDialog();
  };
  return (
    <View>
      <Button
        icon={<Icon name="add" color={Fonts.titleLarge.color} size={20} />}
        buttonStyle={button.circle}
        onPress={toggleDialog}
      />
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
        overlayStyle={Common.dialog.base}
      >
        <Input
          placeholder={t('goals:title')}
          value={title}
          onChangeText={setTitle}
          inputStyle={Common.textInput}
        />
        <Input
          placeholder={t('goals:description')}
          value={description}
          onChangeText={setDescription}
          inputStyle={Common.multilineInput}
          multiline
          numberOfLines={4}
          maxLength={100}
        />
        <View style={style.buttonContainer}>
          <Button
            icon={<Icon name="close" />}
            onPress={toggleDialog}
            buttonStyle={button.base}
          />
          <Button
            icon={<Icon name="checkmark" onPress={sendGoal} />}
            buttonStyle={button.outline}
          />
        </View>
      </Dialog>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddGoal;
