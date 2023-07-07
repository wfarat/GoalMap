import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import i18next from 'i18next';

const Main = ({ navigation }) => {
  const { t } = useTranslation(['welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };

  const onChangeLanguage = (lang: 'pl' | 'en') => {
    i18next.changeLanguage(lang);
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

      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.fullWidth,
          Gutters.smallTMargin,
        ]}
      >
        <TouchableOpacity
          style={[Common.button.circle, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: !isDark })}
        >
          <Image
            source={Images.icons.colors}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Common.button.circle, Gutters.regularBMargin]}
          onPress={() => navigation.navigate('Quotes')}
        >
          <Image
            source={Images.icons.send}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Common.button.circle, Gutters.regularBMargin]}
          onPress={() =>
            onChangeLanguage(i18next.language === 'pl' ? 'en' : 'pl')
          }
        >
          <Image
            source={Images.icons.translate}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Main;
