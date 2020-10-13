import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCustomersAction from '../actions/customer.action';
import { CustomerService } from '../../services/customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerEffects {

  constructor(
    private actions$: Actions<any>, private custumerService: CustomerService
  ) { }

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$.pipe(
    ofType(fromCustomersAction.LOAD_CUSTOMERS),
    switchMap(() => this.custumerService.getCustomers()
      .pipe(
        map(response => {
          return new fromCustomersAction.LoadCustomerSuccess(response);
        },
          catchError(err => of(new fromCustomersAction.LoadCustomerFail(err))))
      ))
  );

  @Effect()
  updateCustomer: Observable<Action> = this.actions$.pipe(
    ofType(fromCustomersAction.UPDATE_CUSTOMER),
    map((action: fromCustomersAction.UpdateCustomer) => action.payload),
    switchMap((payload) => this.custumerService.updateCustomer(payload)
      .pipe(
        map(response => new fromCustomersAction.UpdateCustomerSuccess(response))
      ),
      catchError(error => of(new fromCustomersAction.UpdateCustomerFail(error))))
  );
}


