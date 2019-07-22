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
    RelationshipField,
    RelationshipKind,
} from './';

/**
 * A complete relationship as rendered in POST, PATCH, and GET responses.
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     * The date and time object was created.
     * @type {string}
     * @memberof Relationship
     */
    readonly created: string;
    /**
     * The name of the user who created the object. This value is obtained from the bearer token and may not be changed.
     * @type {string}
     * @memberof Relationship
     */
    readonly createdby: string;
    /**
     * The relationship fields associated with the relationship.
     * @type {Array<RelationshipField>}
     * @memberof Relationship
     */
    fields: Array<RelationshipField>;
    /**
     * A unique relationship ID.
     * @type {string}
     * @memberof Relationship
     */
    id: string;
    /**
     * 
     * @type {RelationshipKind}
     * @memberof Relationship
     */
    kind: RelationshipKind;
    /**
     * The date and time object was modified.
     * @type {string}
     * @memberof Relationship
     */
    readonly modified: string;
    /**
     * The name of the user who most recently modified the object.
     * @type {string}
     * @memberof Relationship
     */
    readonly modifiedby: string;
    /**
     * The module that contains the relationship.
     * @type {string}
     * @memberof Relationship
     */
    module: string;
    /**
     * The relationship name.
     * @type {string}
     * @memberof Relationship
     */
    name: string;
    /**
     * The name of the object's owner.
     * @type {string}
     * @memberof Relationship
     */
    readonly owner: string;
    /**
     * A unique source dataset ID. Either the sourceid or sourceresourcename property must be specified.
     * @type {string}
     * @memberof Relationship
     */
    sourceid: string;
    /**
     * A unique target dataset ID. Either the targetid or targetresourcename property must be specified.
     * @type {string}
     * @memberof Relationship
     */
    targetid: string;
    /**
     * The Catalog version.
     * @type {number}
     * @memberof Relationship
     */
    version: number;
    /**
     * The source dataset name qualified by module name. Either the sourceid or sourceresourcename property must be specified.
     * @type {string}
     * @memberof Relationship
     */
    sourceresourcename?: string;
    /**
     * The target dataset name qualified by module name. Either the targetid or targetresourcename property must be specified.
     * @type {string}
     * @memberof Relationship
     */
    targetresourcename?: string;
}

