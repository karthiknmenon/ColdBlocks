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

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Holder Change transaction
 * @param {org.coldblocks.mynetwork.HolderChange} HolderChange
 * @transaction
 */
async function HolderChange(holderChange) {
    //  function to detect change of holder for package
    // Save the old value of the asset.
    const oldHolder = holderChange.asset.holder;

    // Update the asset with the new value.
    holderChange.asset.holder = holderChange.newHolder;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.coldblocks.mynetwork.TransitPackage');
    // Update the asset in the asset registry.
    await assetRegistry.update(holderChange.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.coldblocks.mynetwork', 'HolderChangeEvent');
    event.asset = holderChange.asset;
    event.oldHolder = oldHolder;
    event.newHolder = holderChange.newHolder;
    emit(event);
}
/**
 * Temperature Drop transaction
 * @param {org.coldblocks.mynetwork.TemperatureDrop} TemperatureDrop
 * @transaction
 */
async function TemperatureDrop(temperatureDrop) {
    // function to detect temperature change
    const oldTemperature = temperatureDrop.asset.temperature;
    const oldLocation = temperatureDrop.asset.location;
    const oldStatus = temperatureDrop.asset.status;

    // Update the asset with the new value.
    temperatureDrop.asset.temperature = temperatureDrop.newTemperature;
    temperatureDrop.asset.location = temperatureDrop.newLocation;
    temperatureDrop.asset.status = temperatureDrop.newStatus;
    temperatureDrop.asset.status = oldStatus;
    // const oldTemperature = temperatureDrop.asset.temperature;

    // Update the asset with the new value.
    // temperatureDrop.asset.holder = temperatureDrop.newHolder;

     // Get the asset registry for the asset.
     const assetRegistry = await getAssetRegistry('org.coldblocks.mynetwork.TransitPackage');
     // Update the asset in the asset registry.
     await assetRegistry.update(temperatureDrop.asset);
 
     // Emit an event for the modified asset.
     let event = getFactory().newEvent('org.coldblocks.mynetwork', 'TemperatureDropEvent');
     event.asset = temperatureDrop.asset;
     event.oldTemperature = oldTemperature;
     event.oldLocation = oldLocation;
     event.oldStatus = oldStatus;
     event.newStatus = temperatureDrop.asset.status;
     event.newTemperature = temperatureDrop.newTemperature;
     event.newLocation = temperatureDrop.newLocation;
     emit(event);
}

