import { createReducer, on } from '@ngrx/store';
import { defineStepAction, defineStepNumberAction } from './wizard.actions';

export const featureName = 'steps';

export interface StepsState {
  step: number;
  steps: number;
}

export const initialState: StepsState = {
  step: 1,
  steps: 3,
};

export const WizardReducer = createReducer(
  initialState,
  on(defineStepAction, (state, { step }) => {
    return { ...state, step: step };
  }),
  on(defineStepNumberAction, (state) => {
    return {
      ...state,
      steps: 3,
    };
  })
);
