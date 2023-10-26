import React, { useEffect, useState } from 'react';
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
    ActivityIndicator,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
//import { useLazyFetchOneQuery } from '../../services/modules/users';
import { useLazyFetchFlowerLangListQuery } from '../../services/modules/flowerLang';
//import { CATEGORIES } from '@/data/dummyData';
import GridItem from '@/components/GridItem/GridItem';
//import Category from '@/models/Category';
import ListHeader from '@/components/List/ListHeader';
import FlowerLangData from '@/models/FlowerLangData';
//import { FLOWER_LANG_DATA } from '@/data/dummyFlowerLangData';
//import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from 'types/navigation';

const FlowerLangList = ({ navigation }: HomeScreenProps) => {
    //const navigation = useNavigation();
    //const { t } = useTranslation(['example', 'welcome']);

    const [firstFetch, setFirstFetch] = useState<boolean>(false);
    const [flowerLangListData, setFlowerLangListData] = useState<
        FlowerLangData[] | null
    >(null);

    const { Gutters, Layout, darkMode: isDark } = useTheme();

    const [fetchFlowerLangList, { data, isSuccess, isLoading, isFetching }] =
        useLazyFetchFlowerLangListQuery();

    useEffect(() => {
        if (!firstFetch) {
            fetchFlowerLangList('');
            setFirstFetch(true);
        }
    });

    useEffect(() => {
        console.log('data', data);
        if (isSuccess && data?.data) {
            setFlowerLangListData(data?.data);
        }
    }, [isSuccess, data]);

    return (
        <SafeAreaView style={[Layout.fill]}>
            {isLoading || isFetching ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={flowerLangListData}
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
            )}
        </SafeAreaView>
    );
};

export default FlowerLangList;
