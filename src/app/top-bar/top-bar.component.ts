import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { setStepsQuantity } from '../state/wizard.actions';
import { StepsState } from '../state/wizard.reducer';
import { selectByCurrentStep, selectByStepsArray, selectByStepsQuantity } from '../state/wizard.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public currentStep$: Observable<number> = this.store.pipe(
    select(selectByCurrentStep)
  );
  public stepsArray$: Observable<Array<number>> = this.store.pipe(
    select(selectByStepsArray)
  );

  constructor(private store: Store<StepsState>) {}

  ngOnInit(): void {
    this.store.dispatch(setStepsQuantity());
  }

}
