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
 * Metadata Catalog
 * With the Metadata Catalog you can create and manage knowledge objects such as datasets, fields, rules, actions, dashboards, and workflows.
 *
 * OpenAPI spec version: v2beta1.3
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    Task,
} from './';

/**
 * A complete workflow as rendered in POST, PATCH, and GET responses.
 * @export
 * @interface Workflow
 */
export interface Workflow {
    /**
     * The date and time object was created.
     * @type {string}
     * @memberof Workflow
     */
    readonly created: string;
    /**
     * The name of the user who created the object. This value is obtained from the bearer token and may not be changed.
     * @type {string}
     * @memberof Workflow
     */
    readonly createdby: string;
    /**
     * A unique workflow ID.
     * @type {string}
     * @memberof Workflow
     */
    id: string;
    /**
     * The date and time object was modified.
     * @type {string}
     * @memberof Workflow
     */
    readonly modified: string;
    /**
     * The name of the user who most recently modified the object.
     * @type {string}
     * @memberof Workflow
     */
    readonly modifiedby: string;
    /**
     * The workflow name. Workflow names must be unique within each tenant.
     * @type {string}
     * @memberof Workflow
     */
    name: string;
    /**
     * The name of the object's owner.
     * @type {string}
     * @memberof Workflow
     */
    readonly owner: string;
    /**
     * The workflow description.
     * @type {string}
     * @memberof Workflow
     */
    description?: string;
    /**
     * A unique experiment ID that is associated with the workflow.
     * @type {string}
     * @memberof Workflow
     */
    experimentid?: string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof Workflow
     */
    tasks?: Array<Task>;
    /**
     * The version of the workflow.
     * @type {number}
     * @memberof Workflow
     */
    version?: number;
}

