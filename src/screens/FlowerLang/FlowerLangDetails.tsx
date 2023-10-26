import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import DetailsHeader from '@/components/Header/DetailsHeader';
import { DetailsScreenRouteProp, HomeScreenProps } from 'types/navigation';
import { useRoute } from '@react-navigation/native';

const FlowerLangDetails = ({ navigation }: HomeScreenProps) => {
    const route = useRoute<DetailsScreenRouteProp>();
    const { data } = route.params;

    //const { t } = useTranslation(['example', 'welcome']);
    const {
        //Common,
        //Fonts,
        Gutters,
        Layout,
        //Images,
        //darkMode: isDark,
    } = useTheme();

    return (
        <ScrollView style={[Layout.fill]}>
            <DetailsHeader nav={navigation} name={data.name} />
            <Image
                style={[
                    styles.image,
                    Gutters.smallHPadding,
                    Gutters.regularBMargin,
                ]}
                source={{ uri: data.imageUrl }}
            />
            <View style={[Layout.fill, Gutters.regularHPadding]}>
                <View style={styles.row}>
                    <Text style={[styles.cell, styles.headerCell]}>Color</Text>
                    <Text style={styles.cell}>{data.color.join(', ')}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.cell, styles.headerCell]}>
                        Meanings
                    </Text>
                    <Text style={styles.cell}>{data.meanings.join(', ')}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.cell, styles.headerCell]}>
                        Category
                    </Text>
                    <Text style={styles.cell}>{data.category}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    table: {
        marginBottom: 2,
        marginTop: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    headerCell: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    cell: {
        flex: 1,
        padding: 5,
        textAlign: 'left',
        fontSize: 18,
        color: 'black',
        textTransform: 'capitalize',
    },
    image: {
        width: '80%',
        height: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        borderColor: 'transparent',
    },
});

export default FlowerLangDetails;
