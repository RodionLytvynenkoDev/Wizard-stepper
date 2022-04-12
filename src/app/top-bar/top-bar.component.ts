import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { StepsState } from '../state/wizard.reducer';
import { selectByStep } from '../state/wizard.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public step: number;
  public step$: Observable<number> = this.store.pipe(select(selectByStep));

  public destroy$ = new Subject();
  constructor(private store: Store<StepsState>) {}

  ngOnInit(): void {
    this.step$.pipe(takeUntil(this.destroy$)).subscribe((step) => {
      this.step = step;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
