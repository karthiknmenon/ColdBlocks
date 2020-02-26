import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.coldblocks.mynetwork{
   export class TransitPackage extends Asset {
      packageID: string;
      location: string;
      temperature: string;
      destination: string;
      holder: string;
      status: string;
   }
   export class Supplier extends Participant {
      supplierID: string;
      supplierName: string;
   }
   export class Manufacturer extends Participant {
      manufacturerID: string;
      manufacturerName: string;
   }
   export class Distributor extends Participant {
      distributorID: string;
      distributorName: string;
   }
   export class Consumer extends Participant {
      consumerID: string;
      consumerName: string;
   }
   export class HolderChangeEvent extends Event {
      newHolder: string;
      oldHolder: string;
      asset: TransitPackage;
   }
   export class TemperatureDropEvent extends Event {
      asset: TransitPackage;
      newTemperature: string;
      newLocation: string;
      newStatus: string;
      oldTemperature: string;
      oldLocation: string;
      oldStatus: string;
   }
   export class HolderChange extends Transaction {
      asset: TransitPackage;
      oldHolder: string;
      newHolder: string;
   }
   export class TemperatureDrop extends Transaction {
      asset: TransitPackage;
      newTemperature: string;
      newLocation: string;
   }
// }
