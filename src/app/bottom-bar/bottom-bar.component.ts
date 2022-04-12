import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { defineStepAction } from '../state/wizard.actions';
import { StepsState } from '../state/wizard.reducer';
import { selectByStep, selectBySteps } from '../state/wizard.selector';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  public step: number;
  public steps: number;
  public step$: Observable<number> = this.store.pipe(select(selectByStep));
  public steps$: Observable<number> = this.store.pipe(select(selectBySteps));

  public destroy$ = new Subject();

  constructor(private store: Store<StepsState>) {}

  ngOnInit(): void {
    this.step$.pipe(takeUntil(this.destroy$)).subscribe((step) => {
      this.step = step;
    });
    this.steps$.pipe(takeUntil(this.destroy$)).subscribe((steps) => {
      this.steps = steps;
    });
  }

  public previousStep() {
    if (this.step > 1) {
      this.store.dispatch(defineStepAction({ step: this.step - 1 }));
    }
  }

  public nextStep() {
    if (this.step < this.steps) {
      this.store.dispatch(defineStepAction({ step: this.step + 1 }));
    }
    
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
