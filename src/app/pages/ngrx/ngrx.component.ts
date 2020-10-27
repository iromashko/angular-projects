import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CountClearAction,
  CountDecreaseAction,
  CountIncreaseAction,
} from './counter.actions';
import { CountState } from './counter.reducer';
import { selectCount, selectUpdatedAt } from './counter.selectors';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss'],
})
export class NgrxComponent implements OnInit {
  public count$: Observable<number> = this.store.pipe(select(selectCount));
  public disableDecrease$: Observable<boolean> = this.count$.pipe(
    map((count) => count <= 0)
  );
  public updatedAt$: Observable<number> = this.store.pipe(
    select(selectUpdatedAt)
  );

  constructor(private store: Store<CountState>) {}

  ngOnInit(): void {}

  increase() {
    this.store.dispatch(new CountIncreaseAction());
  }
  decrease() {
    this.store.dispatch(new CountDecreaseAction());
  }
  clear() {
    this.store.dispatch(new CountClearAction());
  }
}
