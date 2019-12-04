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
 * Splunk Search service
 * Use the Search service in Splunk Cloud Services to dispatch, review, and manage searches and search jobs. You can finalize or cancel jobs, retrieve search results, and request search-related configurations from the Metadata Catalog service in Splunk Cloud Services.
 *
 * OpenAPI spec version: v3alpha1 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Events summary in a single time bucket.
 * @export
 * @interface SingleTimeBucket
 */
export interface SingleTimeBucket {
    /**
     * Count of available events. Not all events in a bucket  are retrievable. Typically this count is capped at 10000. 
     * @type {number}
     * @memberof SingleTimeBucket
     */
    availableCount?: number;

    /**
     * 
     * @type {number}
     * @memberof SingleTimeBucket
     */
    duration?: number;

    /**
     * The timestamp of the earliest event in the current bucket,  in UNIX format. This is the same time as 'earliestTimeStrfTime'  in UNIX format. 
     * @type {number}
     * @memberof SingleTimeBucket
     */
    earliestTime?: number;

    /**
     * The timestamp of the earliest event in the current bucket,  in UTC format with seconds. For example 2019-01-25T13:15:30Z,  which follows the ISO-8601 (%FT%T.%Q) format. 
     * @type {string}
     * @memberof SingleTimeBucket
     */
    earliestTimeStrfTime?: string;

    /**
     * Specifies if all of the events in the current bucket  have been finalized. 
     * @type {boolean}
     * @memberof SingleTimeBucket
     */
    isFinalized?: boolean;

    /**
     * The total count of the events in the current bucket.
     * @type {number}
     * @memberof SingleTimeBucket
     */
    totalCount?: number;

}

