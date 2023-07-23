import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'goals',
  initialState: {
    goals: [],
    lastId: 0,
    dialogOpen: { open: false, id: undefined },
  } as Goals,
  reducers: {
    addGoal: (state, { payload: { title, description } }: GoalPayload) => {
      state.lastId++;
      state.goals.push({ id: state.lastId, steps: [], title, description });
    },
    deleteGoal: (state, { payload: { id } }: GoalPayload) => {
      state.goals = state.goals.filter(goal => goal.id !== id);
    },
    editGoal: (state, { payload: { id, title, description } }: GoalPayload) => {
      state.goals = state.goals.map(goal => {
        if (goal.id === id) {
          return { ...goal, title, description };
        } else {
          return goal;
        }
      });
    },
    toggleDialog: (state, { payload: { id } }: GoalPayload) => {
      state.dialogOpen.open = !state.dialogOpen.open;
      if (id) {
        state.dialogOpen.id = id;
      } else {
        state.dialogOpen.id = undefined;
      }
    },
  },
});

export const { addGoal, deleteGoal, editGoal, toggleDialog } = slice.actions;
export const selectGoals = (state: { goals: Goals }) => state.goals.goals;
export const selectDialog = (state: { goals: Goals }) => state.goals.dialogOpen;
export default slice.reducer;

export type Step = {
  id: number;
  steps: Step[];
  name: string;
  parentId: number;
  completed: boolean;
};
export type Goal = {
  id: number;
  steps: Step[];
  title: string | undefined;
  description: string | undefined;
};
type onPress = {
  onPress: (id: number) => void;
};
export type GoalProps = Goal & onPress;
type Goals = { goals: Goal[]; lastId: number; dialogOpen: dialogOpen };
type GoalPayload = {
  payload: Partial<Goal>;
};
type dialogOpen = { open: boolean; id: number | undefined };
