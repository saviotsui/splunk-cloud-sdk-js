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
 * With the Provisioner service in Splunk Cloud Services, you can provision and manage tenants.
 *
 * OpenAPI spec version: v1beta1.4 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ProvisionJobInfoErrors,
} from './';

/**
 *
 * @export
 * @interface ProvisionJobInfo
 */
export interface ProvisionJobInfo {
    /**
     * 
     * @type {Array<string>}
     * @memberof ProvisionJobInfo
     */
    apps: Array<string>;

    /**
     * 
     * @type {string}
     * @memberof ProvisionJobInfo
     */
    createdAt: string;

    /**
     * 
     * @type {string}
     * @memberof ProvisionJobInfo
     */
    createdBy: string;

    /**
     * 
     * @type {ProvisionJobInfoErrors}
     * @memberof ProvisionJobInfo
     */
    errors: ProvisionJobInfoErrors;

    /**
     * 
     * @type {string}
     * @memberof ProvisionJobInfo
     */
    jobID: string;

    /**
     * 
     * @type {string}
     * @memberof ProvisionJobInfo
     */
    status: ProvisionJobInfoStatusEnum;

    /**
     * 
     * @type {string}
     * @memberof ProvisionJobInfo
     */
    tenant: string;

}

/**
 * @export
 */
export enum ProvisionJobInfoStatusEnum {
    Created = 'created',
    Running = 'running',
    Completed = 'completed'
}

