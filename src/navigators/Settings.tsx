import React, { useState } from 'react';
import { Button, Dialog, Switch } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useTheme } from '../hooks';
import { changeTheme, ThemeState } from '../store/theme';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
const Settings = () => {
  const { t } = useTranslation(['common']);
  const { Common, Fonts, darkMode: isDark } = useTheme();
  const { button } = Common;
  const [dark, setDark] = useState(isDark);
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState(i18next.language);
  const toggleDialog = () => {
    setVisible(!visible);
  };
  const dispatch = useDispatch();

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const toggleDarkMode = () => {
    setDark(!isDark);
    onChangeTheme({ darkMode: !isDark });
  };
  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
    onChangeLanguage(language === 'pl' ? 'en' : 'pl');
  };
  const onChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
  };
  return (
    <View style={style.container}>
      <Button
        icon={
          <Icon
            name="ellipsis-horizontal"
            size={20}
            color={Fonts.titleLarge.color}
          />
        }
        buttonStyle={button.circle}
        onPress={toggleDialog}
      />
      <Dialog
        isVisible={visible}
        onBackdropPress={toggleDialog}
        overlayStyle={Common.dialog}
      >
        <Dialog.Title
          title={t('common:settings.title')}
          titleStyle={Fonts.textRegular}
        />
        <View style={style.switchContainer}>
          <Text style={Fonts.textLight}>{t('common:settings.dark')}</Text>
          <Switch
            onChange={toggleDarkMode}
            value={dark}
            thumbColor={dark ? '#000000' : '#FFFFFF'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={style.switchContainer}>
          <Text style={Fonts.textLight}>
            {t('common:settings.lang')} {language}
          </Text>
          <Switch
            onChange={toggleLanguage}
            value={language === 'pl'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
      </Dialog>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 70,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    marginLeft: 10,
  },
});
export default Settings;
