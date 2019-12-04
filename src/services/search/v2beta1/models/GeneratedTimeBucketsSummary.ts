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
 * OpenAPI spec version: v2beta1.1 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    SingleTimeBucket,
} from './';

/**
 * A timeline metadata model of the event distribution. The model shows the untransformed events that are read to date for a specific for search ID (sid). 
 * @export
 * @interface TimeBucketsSummary
 */
export interface TimeBucketsSummary {
    /**
     * Specifies if the events are returned in time order.
     * @type {boolean}
     * @memberof TimeBucketsSummary
     */
    IsTimeCursored?: boolean;

    /**
     * 
     * @type {Array<SingleTimeBucket>}
     * @memberof TimeBucketsSummary
     */
    buckets?: Array<SingleTimeBucket>;

    /**
     * Identifies where the cursor is in processing the events. The cursorTime is a timestamp specified in UNIX time.
     * @type {number}
     * @memberof TimeBucketsSummary
     */
    cursorTime?: number;

    /**
     * The number of events processed at the cursorTime.
     * @type {number}
     * @memberof TimeBucketsSummary
     */
    eventCount?: number;

}

