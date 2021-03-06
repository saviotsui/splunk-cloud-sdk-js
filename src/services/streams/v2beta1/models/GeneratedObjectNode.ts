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
 * @interface ObjectNode
 */
export interface ObjectNode {
    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    array?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    bigDecimal?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    bigInteger?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    binary?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    boolean?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    containerNode?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    double?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    float?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    floatingPointNumber?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    int?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    integralNumber?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    long?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    missingNode?: boolean;

    /**
     * 
     * @type {string}
     * @memberof ObjectNode
     */
    nodeType?: ObjectNodeNodeTypeEnum;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    null?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    number?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    object?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    pojo?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    short?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    textual?: boolean;

    /**
     * 
     * @type {boolean}
     * @memberof ObjectNode
     */
    valueNode?: boolean;

}

/**
 * @export
 */
export enum ObjectNodeNodeTypeEnum {
    ARRAY = 'ARRAY',
    BINARY = 'BINARY',
    BOOLEAN = 'BOOLEAN',
    MISSING = 'MISSING',
    NULL = 'NULL',
    NUMBER = 'NUMBER',
    OBJECT = 'OBJECT',
    POJO = 'POJO',
    STRING = 'STRING'
}

