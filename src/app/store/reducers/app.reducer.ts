import * as fromCustomerActions from '../actions/customer.action';
import { ICustomer } from '../../models/customer.model';
import { InitialState } from '@ngrx/store/src/models';


export interface CustomerState {
  data: ICustomer[];
  leaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [],
  leaded: false,
  loading: false,
  error: ''
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case fromCustomerActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      }
    }
    default: {
      return state;
    }
  }
}
