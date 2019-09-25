/**
 * Copyright 2019 Splunk, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"): you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

// ***** TITLE: Populating and Searching a KV Collection
// ***** DESCRIPTION: This example shows how to create a kvcollection dataset, a lookup dataset, populate the collection
//              and search the collection via the lookup.
require('isomorphic-fetch');

const { SplunkCloud } = require('../splunk');
const { SPLUNK_CLOUD_API_HOST, SPLUNK_CLOUD_APPS_HOST, BEARER_TOKEN, TENANT_ID } = process.env;

function exitOnFailure() {
    process.exit(1);
}

async function main() {
    // ***** STEP 1: Get Splunk Cloud client
    const splunk = new SplunkCloud({
        urls: { api: SPLUNK_CLOUD_API_HOST, app: SPLUNK_CLOUD_APPS_HOST },
        tokenSource: BEARER_TOKEN,
        defaultTenant: TENANT_ID,
    });

    // ***** STEP 2: Create kvcollection
    let kvcollectionName = `kvcollection${Date.now()}`; // kvcollectionName should be unique

    let kvDataset = await splunk.catalog.createDataset({
        name: kvcollectionName,
        kind: 'kvcollection',
    });
    console.log(kvDataset);

    // ***** STEP 3: Create a lookup
    let lookupName = `lookup${Date.now()}`; // lookupName should be unique
    let lookupDataset = await splunk.catalog.createDataset({
        name: lookupName,
        kind: 'lookup',
        externalKind: 'kvcollection',
        externalName: kvcollectionName,
    });
    console.log(lookupDataset);

    // ***** STEP 4: Register the fields
    await splunk.catalog.createFieldForDatasetById(lookupDataset.id, {
        name: 'a',
        datatype: 'NUMBER',
        fieldtype: 'UNKNOWN',
        prevalence: 'UNKNOWN',
    });
    console.log('createFieldForDatasetById a');
    await splunk.catalog.createFieldForDatasetById(lookupDataset.id, {
        name: 'b',
        datatype: 'NUMBER',
        fieldtype: 'UNKNOWN',
        prevalence: 'UNKNOWN',
    });
    console.log('createFieldForDatasetById b');
    await splunk.catalog.createFieldForDatasetById(lookupDataset.id, {
        name: 'c',
        datatype: 'NUMBER',
        fieldtype: 'UNKNOWN',
        prevalence: 'UNKNOWN',
    });
    console.log('createFieldForDatasetById c');

    // ***** STEP 5: Insert records into the lookup
    await splunk.kvstore.insertRecords(kvcollectionName, [
        {
            a: '1',
            b: '2',
            c: '3',
        },
        {
            a: '4',
            b: '5',
            c: '6',
        },
    ]);
    console.log(`inserting records into ${kvcollectionName}`);

    // ***** STEP 6: Search the kvcollection via the lookup
    splunk.catalog
        .getDataset(lookupName)
        .then(dataset => {
            console.log(`Found ${dataset.name}`);

            splunk.search
                .createJob({ query: `| from ${dataset.name}` })
                .then(job => {
                    console.log(`Created sid: ${job.sid}`);
                    return splunk.search.waitForJob(job);
                })
                .then(job => {
                    console.log(`Getting results`);
                    return splunk.search.listResults(job.sid);
                })
                .then(results => {
                    console.log(results);
                })
                .then(() => {
                    // Clean up lookup dataset
                    console.log(`Deleting lookup ${lookupDataset.id}`);
                    splunk.catalog.deleteDatasetById(lookupDataset.id);
                })
                .then(() => {
                    // Clean up kvcollection dataset
                    console.log(`Deleting kvcollection ${kvDataset.id}`);
                    splunk.catalog.deleteDatasetById(kvDataset.id);
                });
        })
        .catch(err => {
            console.log(err);
            exitOnFailure();
        });
}
main();
