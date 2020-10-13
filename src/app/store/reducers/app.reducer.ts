import * as fromCustomerActions from '../actions/customer.action';
import { ICustomer } from '../../models/customer.model';
import { InitialState } from '@ngrx/store/src/models';


export interface CustomerState {
  data: ICustomer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [],
  loaded: false,
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
      };
    }

    case fromCustomerActions.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    case fromCustomerActions.UPDATE_CUSTOMER_SUCCESS: {
      const data = state.data.map(customer => {
        if (customer.id === action.payload.id) {
          return action.payload;
        } else {
          return customer;
        }
      });
    }
    // tslint:disable-next-line: no-switch-case-fall-through
    default: {
      return state;
    }
  }
}

export const getCustomers = (state: CustomerState) => state.data;
export const getCustomersLoaded = (state: CustomerState) => state.loaded;
export const getCustomersLoading = (state: CustomerState) => state.loading;
export const getCustomersError = (state: CustomerState) => state.error;
