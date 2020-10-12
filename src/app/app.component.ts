import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { ICustomer } from './models/customer.model';
import { CustomerService } from './services/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: ICustomer[];

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadCustomer());
  }
  constructor(private store: Store<fromStore.IAppState>, custumerService: CustomerService) {
    store.select('customers').subscribe(resCustomer => {
      this.customers = resCustomer.data;
    });


  }
}
