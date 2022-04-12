import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StepsState } from '../state/wizard.reducer';
import { selectByStep, selectBySteps } from '../state/wizard.selector';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss'],
})
export class MiddleContentComponent implements OnInit {
  public step$: Observable<number> = this.store.pipe(select(selectByStep));
  public steps$: Observable<number> = this.store.pipe(select(selectBySteps));

  constructor(private store: Store<StepsState>) {}

  ngOnInit(): void {}
}
