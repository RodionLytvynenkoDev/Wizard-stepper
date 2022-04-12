import { createAction, props } from '@ngrx/store';

export enum actionTypes {
  defineStep = '[STEPS] defineStep',
  defineStepNumber = '[STEPS] defineStepNumber',
}

export const defineStepAction = createAction(
  actionTypes.defineStep,
  props<{ step: number }>()
);

export const defineStepNumberAction = createAction(
  actionTypes.defineStepNumber,
  props<{
    steps: number;
  }>()
);
