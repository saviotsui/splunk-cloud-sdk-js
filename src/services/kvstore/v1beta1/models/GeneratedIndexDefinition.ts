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
 * KV Store API
 * With the Splunk Cloud KV store service in Splunk Cloud Services, you can save and retrieve data within your Splunk Cloud apps, enabling you to manage and maintain state in your application.
 *
 * OpenAPI spec version: v1beta1.2 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    IndexFieldDefinition,
} from './';

/**
 *
 * @export
 * @interface IndexDefinition
 */
export interface IndexDefinition {
    /**
     * 
     * @type {Array<IndexFieldDefinition>}
     * @memberof IndexDefinition
     */
    fields: Array<IndexFieldDefinition>;

    /**
     * The name of the index.
     * @type {string}
     * @memberof IndexDefinition
     */
    name: string;

}

