import { createAction, props } from '@ngrx/store';

export enum actionTypes {
  setCurrentStep = '[STEPS] setCurrentStep',
  goToNextStep = '[STEPS] goToNextStep',
  goToPreviousStep = '[STEPS] goToPreviousStep',
  setStepsQuantity = '[STEPS] setStepsQuantity',
}

export const setCurrentStep = createAction(
  actionTypes.setCurrentStep,
  props<{ currentStep: number }>()
);

export const goToNextStep = createAction(
  actionTypes.goToNextStep
);

export const goToPreviousStep = createAction(
  actionTypes.goToPreviousStep
);

export const setStepsQuantity = createAction(
  actionTypes.setStepsQuantity,
  
);
