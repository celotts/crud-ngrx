import { Action } from '@ngrx/store';
import { ICustomer } from '../../models/customer.model';


export const LOAD_CUSTOMERS = '[Customer] Load customers';
export const LOAD_CUSTOMERS_SUCCESS = '[Customer] Load customers successs';
export const LOAD_CUSTOMERS_FAIL = '[Customer] Load customers fail';

// Uodate Customer
export const UPDATE_CUSTOMER = '[Customer] update customers';
export const UPDATE_CUSTOMER_SUCCESS = '[Customer] update customers successs';
export const UPDATE_CUSTOMER_FAIL = '[Customer] update customers fail';

export class LoadCustomer implements Action {
  readonly type = LOAD_CUSTOMERS;
  constructor() { }
}

export class LoadCustomerSuccess implements Action {
  readonly type = LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: ICustomer[]) { }
}

export class LoadCustomerFail implements Action {
  readonly type = LOAD_CUSTOMERS_FAIL;

  constructor(public payload: ICustomer) { }
}

export class UpdateCustomer implements Action {
  readonly type = UPDATE_CUSTOMER;
  constructor(public payload: ICustomer) { }

}

export class UpdateCustomerSuccess implements Action {
  readonly type = UPDATE_CUSTOMER_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateCustomerFail implements Action {
  readonly type = UPDATE_CUSTOMER_FAIL;
  constructor(public payload: any) { }
}

export type CustomerActions = LoadCustomer |
  LoadCustomerSuccess |
  LoadCustomerFail |
  UpdateCustomer |
  UpdateCustomerSuccess |
  UpdateCustomerFail;
