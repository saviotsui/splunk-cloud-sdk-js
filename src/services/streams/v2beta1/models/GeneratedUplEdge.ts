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
 * Data Stream Processing REST API
 * With the Streams service in Splunk Cloud Services, you can perform create, read, update, and delete (CRUD) operations on your data pipeline.The Streams service in Splunk Cloud Services also has metrics and preview session endpoints and gives you full control over your data pipeline.
 *
 * OpenAPI spec version: v2beta1.3 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface UplEdge
 */
export interface UplEdge {
    /**
     * The source function's (node's) id
     * @type {string}
     * @memberof UplEdge
     */
    sourceNode: string;

    /**
     * The source function's (node's) port
     * @type {string}
     * @memberof UplEdge
     */
    sourcePort: string;

    /**
     * The target function's (node's) id
     * @type {string}
     * @memberof UplEdge
     */
    targetNode: string;

    /**
     * The target function's (node's) port
     * @type {string}
     * @memberof UplEdge
     */
    targetPort: string;

    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UplEdge
     */
    attributes?: { [key: string]: any; };

}

