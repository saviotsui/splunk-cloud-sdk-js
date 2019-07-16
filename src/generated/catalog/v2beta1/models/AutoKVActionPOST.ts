// tslint:disable
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
 *
 * Metadata Catalog
 * With the Metadata Catalog you can create and manage knowledge objects such as datasets, fields, rules, actions, dashboards, and workflows.
 *
 * OpenAPI spec version: v2beta1.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    AutoKVActionKind,
} from './';

/**
 * Initial property values for creating a new autokv action using a POST request.
 * @export
 * @interface AutoKVActionPOST
 */
export interface AutoKVActionPOST {
    /**
     * 
     * @type {AutoKVActionKind}
     * @memberof AutoKVActionPOST
     */
    kind: AutoKVActionKind;
    /**
     * The autokv action mode.
     * @type {string}
     * @memberof AutoKVActionPOST
     */
    mode: string;
    /**
     * A unique action ID.
     * @type {string}
     * @memberof AutoKVActionPOST
     */
    id?: string;
    /**
     * The rule that this action is part of.
     * @type {string}
     * @memberof AutoKVActionPOST
     */
    ruleid?: string;
    /**
     * The catalog version.
     * @type {number}
     * @memberof AutoKVActionPOST
     */
    version?: number;
}

