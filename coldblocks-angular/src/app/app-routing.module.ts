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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { TransitPackageComponent } from './TransitPackage/TransitPackage.component';

import { SupplierComponent } from './Supplier/Supplier.component';
import { ManufacturerComponent } from './Manufacturer/Manufacturer.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { ConsumerComponent } from './Consumer/Consumer.component';

import { HolderChangeComponent } from './HolderChange/HolderChange.component';
import { TemperatureDropComponent } from './TemperatureDrop/TemperatureDrop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'TransitPackage', component: TransitPackageComponent },
  { path: 'Supplier', component: SupplierComponent },
  { path: 'Manufacturer', component: ManufacturerComponent },
  { path: 'Distributor', component: DistributorComponent },
  { path: 'Consumer', component: ConsumerComponent },
  { path: 'HolderChange', component: HolderChangeComponent },
  { path: 'TemperatureDrop', component: TemperatureDropComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
