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
 * OpenAPI spec version: v2beta1.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * A complete task as rendered in POST, PATCH, and GET responses.
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * The task algorithm name.
     * @type {string}
     * @memberof Task
     */
    algorithm: string;
    /**
     * The children tasks of the task.
     * @type {Array<string>}
     * @memberof Task
     */
    children: Array<string>;
    /**
     * The date and time object was created.
     * @type {string}
     * @memberof Task
     */
    readonly created: string;
    /**
     * The name of the user who created the object. This value is obtained from the bearer token and may not be changed.
     * @type {string}
     * @memberof Task
     */
    readonly createdby: string;
    /**
     * The evaluation criteria of the task.
     * @type {Array<string>}
     * @memberof Task
     */
    evaluation: Array<string>;
    /**
     * The features of the task.
     * @type {Array<string>}
     * @memberof Task
     */
    features: Array<string>;
    /**
     * A unique task ID.
     * @type {string}
     * @memberof Task
     */
    id: string;
    /**
     * The date and time object was modified.
     * @type {string}
     * @memberof Task
     */
    readonly modified: string;
    /**
     * The name of the user who most recently modified the object.
     * @type {string}
     * @memberof Task
     */
    readonly modifiedby: string;
    /**
     * The task name.
     * @type {string}
     * @memberof Task
     */
    name: string;
    /**
     * The output transformer of the task.
     * @type {string}
     * @memberof Task
     */
    outputtransformer: string;
    /**
     * The name of the object's owner.
     * @type {string}
     * @memberof Task
     */
    readonly owner: string;
    /**
     * The task parameters.
     * @type {string}
     * @memberof Task
     */
    parameters: string;
    /**
     * The parent tasks of the task.
     * @type {Array<string>}
     * @memberof Task
     */
    parents: Array<string>;
    /**
     * The target feature of the task.
     * @type {string}
     * @memberof Task
     */
    targetfeature: string;
    /**
     * The task type.
     * @type {string}
     * @memberof Task
     */
    tasktype: string;
    /**
     * The timeout secs of the task.
     * @type {number}
     * @memberof Task
     */
    timeoutsecs: number;
    /**
     * A unique workflow ID that is associatd with the task.
     * @type {string}
     * @memberof Task
     */
    workflowid: string;
    /**
     * The version of the workflow that is associated with the task.
     * @type {number}
     * @memberof Task
     */
    workflowversion: number;
}

