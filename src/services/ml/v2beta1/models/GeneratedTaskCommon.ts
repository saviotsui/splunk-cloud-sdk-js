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
 * Machine Learning
 * Use the Machine Learning service in Splunk Cloud Services to deliver resource intensive machine learning workloads. The Machine Learning service covers model experimentation, training, inference, validation, scoring, and serving.
 *
 * OpenAPI spec version: v2beta1.1 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface TaskCommon
 */
export interface TaskCommon {
    /**
     * 
     * @type {string}
     * @memberof TaskCommon
     */
    kind?: TaskCommonKindEnum;

    /**
     * The name has to be unique in the same workflow, it is optional, can be used to identify that task artifact.
     * @type {string}
     * @memberof TaskCommon
     */
    name?: string;

}

/**
 * @export
 */
export enum TaskCommonKindEnum {
    Fit = 'fit'
}

