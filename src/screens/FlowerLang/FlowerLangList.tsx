import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  Pressable,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { useLazyFetchOneQuery } from '../../services/modules/users';
import { CATEGORIES } from '@/data/dummyData';
import GridItem from '@/components/GridItem/GridItem';
import Category from '@/models/Category';
import ListHeader from '@/components/List/ListHeader';
import FlowerLangData from '@/models/FlowerLangData';
import { FLOWER_LANG_DATA } from '@/data/dummyFlowerLangData';
//import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from 'types/navigation';

const FlowerLangList = ({ navigation }: HomeScreenProps) => {
  //const navigation = useNavigation();
  const { t } = useTranslation(['example', 'welcome']);
  const { Gutters, Layout, darkMode: isDark } = useTheme();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  useEffect(() => {
    if (isSuccess && data?.name) {
      Alert.alert(t('example:helloUser', { name: data.name }));
    }
  }, [isSuccess, data]);

  return (
    <SafeAreaView style={[Layout.fill]}>
      <FlatList
        data={FLOWER_LANG_DATA}
        numColumns={2}
        keyExtractor={(item: FlowerLangData) => item.name}
        renderItem={({ item }) => (
          <GridItem
            title={item.name}
            imgUrl={item.imageUrl}
            data={item}
            nav={navigation}
          />
        )}
        ListHeaderComponent={ListHeader}
        style={[Gutters.smallHPadding, Gutters.regularBPadding]}
      />
    </SafeAreaView>
  );
};

export default FlowerLangList;
