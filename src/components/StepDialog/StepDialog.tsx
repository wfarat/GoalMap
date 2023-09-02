import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDialog,
  toggleDialog,
  addStep,
  editStep,
  deleteStep,
} from 'GoalMap/src/store/goals';
import { useTheme } from '../../hooks';
import { useTranslation } from 'react-i18next';
import type { StepProps } from '../../store/goals';
const StepDialog = (props: Partial<StepProps>) => {
  const { t } = useTranslation(['goals']);
  const { parentId } = props;
  const { open, id } = useSelector(selectDialog);
  const { Common, Fonts, Layout } = useTheme();
  const { button, dialog } = Common;
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const sendGoal = () => {
    if (parentId) {
      if (!id) {
        dispatch(addStep({ name, parentId }));
      } else {
        dispatch(editStep({ id, name, parentId }));
      }
    }
    dispatch(toggleDialog({}));
  };
  const handleToggle = () => {
    dispatch(toggleDialog({}));
  };
  const handleDelete = () => {
    dispatch(deleteStep({ id }));
    dispatch(toggleDialog({}));
  };
  return (
    <View style={Layout.center}>
      <Button
        icon={<Icon name="add" color={Fonts.titleLarge.color} size={20} />}
        buttonStyle={button.circle}
        onPress={handleToggle}
      />
      <Dialog
        isVisible={open}
        onBackdropPress={handleToggle}
        overlayStyle={dialog.base}
      >
        <Input
          placeholder={t('goals:name')}
          value={name}
          onChangeText={setName}
          inputStyle={Common.textInput}
        />
        <View style={Layout.rowHCenter}>
          <Button
            icon={
              <Icon name="close" color={Fonts.titleLarge.color} size={20} />
            }
            onPress={handleToggle}
            buttonStyle={button.base}
          />
          {id && (
            <Button
              icon={
                <Icon
                  name="trash-bin"
                  color={Fonts.titleLarge.color}
                  size={20}
                />
              }
              buttonStyle={button.base}
              onPress={handleDelete}
            />
          )}
          <Button
            icon={
              <Icon name="checkmark" color={Fonts.titleLarge.color} size={20} />
            }
            buttonStyle={button.outline}
            onPress={sendGoal}
          />
        </View>
      </Dialog>
    </View>
  );
};

export default StepDialog;
