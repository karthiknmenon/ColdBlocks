/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransitPackageService } from './TransitPackage.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-transitpackage',
  templateUrl: './TransitPackage.component.html',
  styleUrls: ['./TransitPackage.component.css'],
  providers: [TransitPackageService]
})
export class TransitPackageComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  packageID = new FormControl('', Validators.required);
  location = new FormControl('', Validators.required);
  temperature = new FormControl('', Validators.required);
  destination = new FormControl('', Validators.required);
  holder = new FormControl('', Validators.required);
  status = new FormControl('', Validators.required);

  constructor(public serviceTransitPackage: TransitPackageService, fb: FormBuilder) {
    this.myForm = fb.group({
      packageID: this.packageID,
      location: this.location,
      temperature: this.temperature,
      destination: this.destination,
      holder: this.holder,
      status: this.status
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceTransitPackage.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.coldblocks.mynetwork.TransitPackage',
      'packageID': this.packageID.value,
      'location': this.location.value,
      'temperature': this.temperature.value,
      'destination': this.destination.value,
      'holder': this.holder.value,
      'status': this.status.value
    };

    this.myForm.setValue({
      'packageID': null,
      'location': null,
      'temperature': null,
      'destination': null,
      'holder': null,
      'status': null
    });

    return this.serviceTransitPackage.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'packageID': null,
        'location': null,
        'temperature': null,
        'destination': null,
        'holder': null,
        'status': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.coldblocks.mynetwork.TransitPackage',
      'location': this.location.value,
      'temperature': this.temperature.value,
      'destination': this.destination.value,
      'holder': this.holder.value,
      'status': this.status.value
    };

    return this.serviceTransitPackage.updateAsset(form.get('packageID').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceTransitPackage.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceTransitPackage.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'packageID': null,
        'location': null,
        'temperature': null,
        'destination': null,
        'holder': null,
        'status': null
      };

      if (result.packageID) {
        formObject.packageID = result.packageID;
      } else {
        formObject.packageID = null;
      }

      if (result.location) {
        formObject.location = result.location;
      } else {
        formObject.location = null;
      }

      if (result.temperature) {
        formObject.temperature = result.temperature;
      } else {
        formObject.temperature = null;
      }

      if (result.destination) {
        formObject.destination = result.destination;
      } else {
        formObject.destination = null;
      }

      if (result.holder) {
        formObject.holder = result.holder;
      } else {
        formObject.holder = null;
      }

      if (result.status) {
        formObject.status = result.status;
      } else {
        formObject.status = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'packageID': null,
      'location': null,
      'temperature': null,
      'destination': null,
      'holder': null,
      'status': null
      });
  }

}
