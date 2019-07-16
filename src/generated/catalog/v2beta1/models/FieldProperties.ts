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
    FieldDataType,
    FieldPrevalence,
    FieldType,
} from './';

/**
 * Properties of fields which can be read, set, and changed through the API. Implementation detail of FieldPOST, FieldPATCH, and Field, do not use directly.
 * @export
 * @interface FieldProperties
 */
export interface FieldProperties {
    /**
     * 
     * @type {FieldDataType}
     * @memberof FieldProperties
     */
    datatype?: FieldDataType;
    /**
     * The field description.
     * @type {string}
     * @memberof FieldProperties
     */
    description?: string;
    /**
     * 
     * @type {FieldType}
     * @memberof FieldProperties
     */
    fieldtype?: FieldType;
    /**
     * Whether or not the field has been indexed.
     * @type {boolean}
     * @memberof FieldProperties
     */
    indexed?: boolean;
    /**
     * The field name.
     * @type {string}
     * @memberof FieldProperties
     */
    name?: string;
    /**
     * 
     * @type {FieldPrevalence}
     * @memberof FieldProperties
     */
    prevalence?: FieldPrevalence;
    /**
     * The field summary.
     * @type {string}
     * @memberof FieldProperties
     */
    summary?: string;
    /**
     * The field title.
     * @type {string}
     * @memberof FieldProperties
     */
    title?: string;
}

