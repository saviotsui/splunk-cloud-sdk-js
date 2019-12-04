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
 * The type of match between the fields. Must be one of the valid values. The LATEST_BEFORE match type specifies that the datetime field in one dataset binds to the latest time before the datetime field in another dataset.
 * @export
 */
export enum RelationshipFieldKind {
    EXACT = 'EXACT',
    LATESTBEFORE = 'LATEST_BEFORE'
}

export function RelationshipFieldKindFromJSON(json: any): RelationshipFieldKind {
    return json as RelationshipFieldKind;
}

export function RelationshipFieldKindToJSON(value?: RelationshipFieldKind): any {
    return value as any;
}

