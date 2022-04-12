import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, StepsState } from './wizard.reducer';

export const selectStyleFeature = createFeatureSelector<StepsState>(featureName);

export const selectByStep = createSelector(
  selectStyleFeature,
  (state: StepsState): number => state.step
);

export const selectBySteps = createSelector(
  selectStyleFeature,
  (state: StepsState): number => state.steps
);

