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
 * With the Metadata Catalog you can create and manage knowledge objects such as datasets, fields, rules, actions, dashboards, and workflows.
 *
 * OpenAPI spec version: v2alpha2.6 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    RegexActionKind,
} from './';

/**
 * Initial property values for creating a new regex action using a POST request.
 * @export
 * @interface RegexActionPOST
 */
export interface RegexActionPOST {
    /**
     * Name of the field that is matched against the regular expression.
     * @type {string}
     * @memberof RegexActionPOST
     */
    field: string;

    /**
     * 
     * @type {RegexActionKind}
     * @memberof RegexActionPOST
     */
    kind: RegexActionKind;

    /**
     * A regular expression that includes named capture groups for the purpose of field extraction.
     * @type {string}
     * @memberof RegexActionPOST
     */
    pattern: string;

    /**
     * A unique action ID.
     * @type {string}
     * @memberof RegexActionPOST
     */
    id?: string;

    /**
     * The maximum number of times per event to attempt to match fields with the regular expression.
     * @type {number}
     * @memberof RegexActionPOST
     */
    limit?: number;

    /**
     * The rule that this action is part of.
     * @type {string}
     * @memberof RegexActionPOST
     */
    ruleid?: string;

    /**
     * The catalog version.
     * @type {number}
     * @memberof RegexActionPOST
     */
    version?: number;

}

