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
    MetricDatasetKind,
} from './';

/**
 * Properties of metric datasets which can only be read through the API.
 * @export
 * @interface MetricDatasetReadOnlyProperties
 */
export interface MetricDatasetReadOnlyProperties {
    /**
     * The timestamp, in seconds, of the earliest measure. The timestamp is in UNIX time.
     * @type {string}
     * @memberof MetricDatasetReadOnlyProperties
     */
    earliestEventTime?: string;

    /**
     * The earliest index time for any of the measures in this index.
     * @type {string}
     * @memberof MetricDatasetReadOnlyProperties
     */
    earliestIngestTime?: string;

    /**
     * 
     * @type {MetricDatasetKind}
     * @memberof MetricDatasetReadOnlyProperties
     */
    kind?: MetricDatasetKind;

    /**
     * The timestamp, in seconds, of the latest measure. The timestamp is in UNIX time.
     * @type {string}
     * @memberof MetricDatasetReadOnlyProperties
     */
    latestEventTime?: string;

    /**
     * The earliest index time for any of the measures in this index.
     * @type {string}
     * @memberof MetricDatasetReadOnlyProperties
     */
    latestIngestTime?: string;

    /**
     * The latest time that the metric index metadata was refreshed.
     * @type {string}
     * @memberof MetricDatasetReadOnlyProperties
     */
    latestMetadataUpdateTime?: string;

    /**
     * The number of measures in the index.
     * @type {number}
     * @memberof MetricDatasetReadOnlyProperties
     */
    totalEventCount?: number;

    /**
     * For metrics indexes, the totalSize is set to 0.
     * @type {number}
     * @memberof MetricDatasetReadOnlyProperties
     */
    totalSize?: number;

}

