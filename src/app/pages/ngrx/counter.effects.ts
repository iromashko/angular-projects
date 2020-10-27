import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { countActionsType, CountUpdatedAtAction } from './counter.actions';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(
        countActionsType.increase,
        countActionsType.decrease,
        countActionsType.clear
      ),
      map(() => {
        return new CountUpdatedAtAction({ updatedAt: Date.now() });
      })
    );
  }
}
