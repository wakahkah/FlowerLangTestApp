import React from 'react';
//import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MainParamsList } from 'types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  nav: StackNavigationProp<MainParamsList, 'Home', undefined>;
  name: string;
}

const DetailsHeader = (props: Props) => {
  //const { t } = useTranslation(['example', 'welcome']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();

  return (
    <View style={[Gutters.smallHPadding]}>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Gutters.regularTMargin,
        ]}
      >
        <TouchableOpacity
          style={[Common.button.circle, Gutters.regularBMargin]}
          onPress={() => {
            props.nav.goBack();
          }}
        >
          <Image
            source={Images.icons.back}
            style={{ tintColor: isDark ? '#A6A4F0' : '#44427D' }}
          />
        </TouchableOpacity>

        <Text style={[Fonts.titleRegular]}>{props.name}</Text>
      </View>
    </View>
  );
};

export default DetailsHeader;
