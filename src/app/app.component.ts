import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { ICustomer } from './models/customer.model';
import { CustomerService } from './services/customer.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers: ICustomer[];

  // tslint:disable-next-line: ban-types
  display: String = 'none';
  isEditModeEnabled = false;
  person: ICustomer = {};

  constructor(private store: Store<fromStore.IAppState>, custumerService: CustomerService) {
    store.select(fromStore.getCustomers).subscribe(resCustomer => {
      this.customers = resCustomer;
    });

    store.select(fromStore.getCustumerById(2)).subscribe(resCustomer => {
      console.log(resCustomer);
    });

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadCustomer());
  }


  updateCustomer(myForm) {

  }

  closeModal(myForm: NgForm) {
    this.display = 'none';
  }

  addCustomer(myForm) {

  }

  openModal() {
    this.display = 'block';
  }

  edit(item) {

    this.isEditModeEnabled = true;
    // tslint:disable-next-line: no-unused-expression
    this.person = { ...item };
    this.display = 'block';
  }

  remove(item) {

  }
}
