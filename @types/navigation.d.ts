import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type GoalsStackParamList = {
  GoalScreen: { id: number; parentId: number | undefined };
  GoalsScreen: undefined;
};

export type GoalScreenProps = StackScreenProps<
  GoalsStackParamList,
  'GoalScreen'
>;

export type GoalsScreenProps = StackScreenProps<
  GoalsStackParamList,
  'GoalsScreen'
>;
