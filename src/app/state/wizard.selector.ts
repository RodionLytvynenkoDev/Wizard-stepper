import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, StepsState } from './wizard.reducer';

export const selectStyleFeature = createFeatureSelector<StepsState>(featureName);

export const selectByCurrentStep = createSelector(
  selectStyleFeature,
  (state: StepsState): number => state.currentStep
);

export const selectByStepsQuantity = createSelector(
  selectStyleFeature,
  (state: StepsState): number => state.stepsQuantity
);

export const selectByStepsArray = createSelector(
  selectStyleFeature,
  (state: StepsState): Array<number> => state.stepsArray
);

