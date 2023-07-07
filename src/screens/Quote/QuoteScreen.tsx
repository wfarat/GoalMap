import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import useRandomQuote from 'GoalMap/src/hooks/useRandomQuote';

const QuoteScreen = () => {
  const { t } = useTranslation(['quotes']);
  const { Fonts } = useTheme();

  return (
    <View>
      <Text style={[Fonts.textSmall, Fonts.textLight]}>
        {t(useRandomQuote())}
      </Text>
    </View>
  );
};

export default QuoteScreen;
