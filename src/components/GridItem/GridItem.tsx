import FlowerLangData from '@/models/FlowerLangData';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { MainParamsList } from 'types/navigation';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

interface Props {
  title: string;
  imgUrl: string;
  data: FlowerLangData;
  nav: StackNavigationProp<MainParamsList, 'Home', undefined>;
}

const GridItem = (props: Props) => {
  return (
    <View style={[style.gridItem]}>
      <Pressable
        style={style.button}
        android_ripple={{ color: '#ccc' }}
        onPress={async () => {
          try {
            await analytics().logEvent('details', props.data);
            crashlytics().log(`Click Details: ${props.data.name}`);
            if (props.data.name.includes(' ')) {
              throw new Error('Name cannot contain spaces');
            }
            return props.nav.push('Details', { data: props.data });
          } catch (error) {
            if (error instanceof Error) {
              crashlytics().recordError(error);
              console.log('crashlytics error');
            } else {
              console.log(error);
            }
          }
        }}
      >
        {({ pressed }) => (
          <ImageBackground
            style={style.image}
            source={{ uri: props.imgUrl }}
            resizeMode="cover"
          >
            <View
              style={[
                style.innerContainer,
                {
                  backgroundColor: pressed
                    ? 'rgba(110,110,110,0.4)'
                    : 'rgba(110,110,110,0.6)',
                },
              ]}
            >
              <Text style={style.textStyling}>{props.title}</Text>
            </View>
          </ImageBackground>
        )}
      </Pressable>
    </View>
  );
};

export default GridItem;

const style = StyleSheet.create({
  textStyling: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '800',
    color: 'white',
  },
  innerContainer: {
    position: 'absolute',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(110,110,110,0.6)',
    width: '100%',
    height: '100%',
  },
  button: {
    flex: 1,
    position: 'relative',
  },
  gridItem: {
    flex: 1,
    margin: 6,
    height: 150,
    backgroundColor: 'white',
    elevation: 4,
    overflow: 'hidden',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});
