import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomerReducer from './app.reducer';

export interface IAppState {
  customers: fromCustomerReducer.CustomerState;
}

export const reducers = {
  customers: fromCustomerReducer.reducer
};

export const getState = (state) => state;

export const getCustomerState = createFeatureSelector<fromCustomerReducer.CustomerState>('customers');
export const getCustomers = createSelector(getCustomerState, fromCustomerReducer.getCustomers);

export const getCustumerById = (id) => createSelector(getCustomers, (customers) => {
  if (customers) {
    const customerFound = customers.find(persona => persona.id === id);
    return customerFound || {};

  } else {
    return {};
  }
})
