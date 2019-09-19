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
 * Machine Learning Service (ML API)
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v2beta1.1 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    InputDataSource,
} from './';

/**
 *
 * @export
 * @interface InputData
 */
export interface InputData {
    /**
     * 
     * @type {string}
     * @memberof InputData
     */
    kind: InputDataKindEnum;

    /**
     * 
     * @type {InputDataSource}
     * @memberof InputData
     */
    source: InputDataSource;

}

/**
 * @export
 */
export enum InputDataKindEnum {
    SPL = 'SPL',
    RawData = 'RawData'
}
