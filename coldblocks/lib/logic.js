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
 * Sample transaction
 * @param {org.coldblocks.mynetwork.HolderChange} HolderChange
 * @transaction
 */
async function HolderChange(holderChange) {
    // Save the old value of the asset.
    const oldValue = holderChange.TrasnitPackage.holder;

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
