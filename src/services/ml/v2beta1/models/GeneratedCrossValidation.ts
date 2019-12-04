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
 * @interface CrossValidation
 */
export interface CrossValidation {
    /**
     * Number of folds in the K-fold cross validation.
     * @type {number}
     * @memberof CrossValidation
     */
    kFold?: number;

    /**
     * Random state to shuffle and partition data.
     * @type {number}
     * @memberof CrossValidation
     */
    randomSeed?: number;

    /**
     * Determine whether stratification is used in partitioning the data.
     * @type {boolean}
     * @memberof CrossValidation
     */
    stratified?: boolean;

}

