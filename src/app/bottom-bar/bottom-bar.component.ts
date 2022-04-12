import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { goToNextStep, goToPreviousStep, setCurrentStep } from '../state/wizard.actions';
import { StepsState } from '../state/wizard.reducer';
import { selectByCurrentStep, selectByStepsQuantity } from '../state/wizard.selector';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  public step: number;
  public steps: number;

  public destroy$ = new Subject();

  constructor(private store: Store<StepsState>) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectByCurrentStep))
      .pipe(takeUntil(this.destroy$))
      .subscribe((step) => {
        this.step = step;
      });
    this.store
      .pipe(select(selectByStepsQuantity))
      .pipe(takeUntil(this.destroy$))
      .subscribe((steps) => {
        this.steps = steps;
      });
  }

  public previousStep() {
    if (this.step > 1) {
      this.store.dispatch(goToPreviousStep());
    }
  }

  public nextStep() {
    if (this.step < this.steps) {
      this.store.dispatch(goToNextStep());
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
