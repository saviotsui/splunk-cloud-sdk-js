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
 * Provisioner
 * With the Provisioner Service, you can provision your tenant and manage it
 *
 * OpenAPI spec version: v1beta1.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    InviteInfoErrors,
} from './';

/**
 *
 * @export
 * @interface InviteInfo
 */
export interface InviteInfo {
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    comment: string;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    createdBy: string;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    email: string;
    /**
     * 
     * @type {InviteInfoErrors}
     * @memberof InviteInfo
     */
    errors: InviteInfoErrors;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    expiresAt: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InviteInfo
     */
    groups: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    inviteID: string;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    status: InviteInfoStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    tenant: string;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof InviteInfo
     */
    updatedBy: string;
}

/**
 * @export
 */
export enum InviteInfoStatusEnum {
    Created = 'created',
    Invited = 'invited',
    Accepted = 'accepted',
    Rejected = 'rejected',
    Expired = 'expired',
    Failed = 'failed',
    Invalid = 'invalid'
}

