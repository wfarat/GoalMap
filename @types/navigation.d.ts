import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Step } from 'GoalMap/src/store/goals';

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
  GoalScreen: { steps: Step[] };
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
