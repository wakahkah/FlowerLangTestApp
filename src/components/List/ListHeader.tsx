import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const ListHeader = () => {
  const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang);
  };

  return (
    <View style={[Gutters.tinyHPadding]}>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Gutters.regularTMargin,
        ]}
      >
        <Text style={[Fonts.titleRegular]}>{t('welcome:title')}</Text>

        <TouchableOpacity
          style={[Common.button.circle, Gutters.regularBMargin]}
          onPress={() =>
            onChangeLanguage(i18next.language === 'fr' ? 'en' : 'fr')
          }
        >
          <Image
            source={Images.icons.translate}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListHeader;
