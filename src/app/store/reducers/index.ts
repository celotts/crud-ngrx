import * as fromCustomerReducer from './app.reducer';

export interface IAppState {
  customers: fromCustomerReducer.CustomerState;
}

export const reducers = {
  customers: fromCustomerReducer.reducer
};
