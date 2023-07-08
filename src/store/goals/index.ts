import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'goals',
  initialState: { goals: [] } as Goals,
  reducers: {
    addGoal: (state, { payload: { title, description } }: GoalPayload) => {
      state.goals.push({ steps: [], title, description });
    },
  },
});

export const { addGoal } = slice.actions;
export const selectGoals = (state: Goals) => state.goals;
export default slice.reducer;

type Step = { substeps: Step[]; name: string; completed: boolean };
type Goal = {
  steps: Step[];
  title: string | undefined;
  description: string | undefined;
};
type Goals = { goals: Goal[] };
type GoalPayload = {
  payload: Partial<Goal>;
};
