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
 * Metadata Catalog service
 * With the Metadata Catalog in Splunk Cloud Services you can create and manage knowledge objects such as datasets, fields, rules, actions, dashboards, and workflows.
 *
 * OpenAPI spec version: v2beta1.4 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * A complete dashboard as rendered in POST, PATCH, and GET responses.
 * @export
 * @interface Dashboard
 */
export interface Dashboard {
    /**
     * The date and time object was created.
     * @type {string}
     * @memberof Dashboard
     */
    readonly created: string;

    /**
     * The name of the user who created the object. This value is obtained from the bearer token and may not be changed.
     * @type {string}
     * @memberof Dashboard
     */
    readonly createdby: string;

    /**
     * The JSON dashboard definition.
     * @type {string}
     * @memberof Dashboard
     */
    definition: string;

    /**
     * A unique dashboard ID. Random ID used if not provided.
     * @type {string}
     * @memberof Dashboard
     */
    id: string;

    /**
     * The date and time object was modified.
     * @type {string}
     * @memberof Dashboard
     */
    readonly modified: string;

    /**
     * The name of the user who most recently modified the object.
     * @type {string}
     * @memberof Dashboard
     */
    readonly modifiedby: string;

    /**
     * The module that contains the dashboard.
     * @type {string}
     * @memberof Dashboard
     */
    module: string;

    /**
     * The dashboard name. Dashboard names must be unique within each tenant.
     * @type {string}
     * @memberof Dashboard
     */
    name: string;

    /**
     * The name of the object's owner.
     * @type {string}
     * @memberof Dashboard
     */
    readonly owner: string;

    /**
     * Whether the dashboard is active or not.
     * @type {boolean}
     * @memberof Dashboard
     */
    isactive?: boolean;

    /**
     * The version of the dashboard.
     * @type {number}
     * @memberof Dashboard
     */
    version?: number;

}

