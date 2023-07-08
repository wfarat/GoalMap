import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'goals',
  initialState: { goals: [], lastId: 0 } as Goals,
  reducers: {
    addGoal: (state, { payload: { title, description } }: GoalPayload) => {
      state.lastId++;
      state.goals.push({ id: state.lastId, steps: [], title, description });
    },
  },
});

export const { addGoal } = slice.actions;
export const selectGoals = (state: { goals: Goals }) => state.goals.goals;
export default slice.reducer;

type Step = { id: number; substeps: Step[]; name: string; completed: boolean };
type Goal = {
  id: number;
  steps: Step[];
  title: string | undefined;
  description: string | undefined;
};
type Goals = { goals: Goal[]; lastId: number };
type GoalPayload = {
  payload: Partial<Goal>;
};
