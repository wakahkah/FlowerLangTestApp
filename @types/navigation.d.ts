import FlowerLangData from '@/models/FlowerLangData';
import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import type { RouteProp } from '@react-navigation/native';

export type MainParamsList = {
  Home: undefined;
  Details: {
    data: FlowerLangData;
  };
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type DetailsScreenRouteProp = RouteProp<MainParamsList, 'Details'>;

export type HomeScreenProps = StackScreenProps<MainParamsList, 'Home'>;
