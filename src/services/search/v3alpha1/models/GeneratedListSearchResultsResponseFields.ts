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
 *
 * @export
 * @interface ListSearchResultsResponseFields
 */
export interface ListSearchResultsResponseFields {
    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    name: string;

    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    dataSource?: string;

    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    groupbyRank?: string;

    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    splitField?: string;

    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    splitValue?: string;

    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    splitbySpecial?: string;

    /**
     * 
     * @type {string}
     * @memberof ListSearchResultsResponseFields
     */
    typeSpecial?: string;

}

