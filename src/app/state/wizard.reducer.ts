import { createReducer, on } from '@ngrx/store';
import {
  goToNextStep,
  goToPreviousStep,
  setCurrentStep,
  setStepsQuantity,
} from './wizard.actions';

export const featureName = 'steps';

export interface StepsState {
  currentStep: number;
  stepsQuantity: number;
  stepsArray: Array<number>;
}

export const initialState: StepsState = {
  currentStep: 1,
  stepsQuantity: 3,
  stepsArray: [],
};

export const WizardReducer = createReducer(
  initialState,
  on(setCurrentStep, (state, { currentStep }) => {
    return { ...state, currentStep: currentStep };
  }),
  on(goToNextStep, (state) => {
    return { ...state, currentStep: state.currentStep + 1 };
  }),
  on(goToPreviousStep, (state) => {
    return { ...state, currentStep: state.currentStep - 1 };
  }),
    on(setStepsQuantity, (state) => {
    return {
      ...state,
      stepsArray: [...Array(state.stepsQuantity).keys()],
    };
  })
);
