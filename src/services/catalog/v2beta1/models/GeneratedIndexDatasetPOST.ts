// tslint:disable
/**
 * Copyright 2020 Splunk, Inc.
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
 *
 * Metadata Catalog
 * With the Metadata Catalog in Splunk Cloud Services you can create and manage knowledge objects such as datasets, fields, rules, actions, dashboards, and workflows.
 *
 * OpenAPI spec version: v2beta1.4 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    FieldPOST,
    IndexDatasetKind,
} from './';

/**
 * Initial property values for creating a new index dataset using a POST request.
 * @export
 * @interface IndexDatasetPOST
 */
export interface IndexDatasetPOST {
    /**
     * Specifies whether or not the Splunk index is disabled.
     * @type {boolean}
     * @memberof IndexDatasetPOST
     */
    disabled: boolean;

    /**
     * 
     * @type {IndexDatasetKind}
     * @memberof IndexDatasetPOST
     */
    kind: IndexDatasetKind;

    /**
     * The dataset name. Dataset names must be unique within each module.
     * @type {string}
     * @memberof IndexDatasetPOST
     */
    name: string;

    /**
     * The fields to be associated with this dataset.
     * @type {Array<FieldPOST>}
     * @memberof IndexDatasetPOST
     */
    fields?: Array<FieldPOST>;

    /**
     * The frozenTimePeriodInSecs to use for the index
     * @type {number}
     * @memberof IndexDatasetPOST
     */
    frozenTimePeriodInSecs?: number;

    /**
     * A unique dataset ID. Random ID used if not provided.
     * @type {string}
     * @memberof IndexDatasetPOST
     */
    id?: string;

    /**
     * The name of the module to create the new dataset in.
     * @type {string}
     * @memberof IndexDatasetPOST
     */
    module?: string;

}

