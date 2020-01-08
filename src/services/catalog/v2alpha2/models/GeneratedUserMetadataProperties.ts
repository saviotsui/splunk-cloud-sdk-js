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

/**
 * Owner, createdby, and modifiedby user name properties for inclusion in other objects.
 * @export
 * @interface UserMetadataProperties
 */
export interface UserMetadataProperties {
    /**
     * The name of the user who created the object. This value is obtained from the bearer token and may not be changed.
     * @type {string}
     * @memberof UserMetadataProperties
     */
    readonly createdby: string;

    /**
     * The name of the user who most recently modified the object.
     * @type {string}
     * @memberof UserMetadataProperties
     */
    readonly modifiedby: string;

    /**
     * The name of the object's owner.
     * @type {string}
     * @memberof UserMetadataProperties
     */
    readonly owner: string;

}

