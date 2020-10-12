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

export function reducer(state = initialState, action: fromCustomerActions.CustomerActions) {
  switch (action.type) {
    case fromCustomerActions.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCustomerActions.LOAD_CUSTOMERS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      }
    }

    case fromCustomerActions.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload

      }
    }
    default: {
      return state;
    }
  }
}
