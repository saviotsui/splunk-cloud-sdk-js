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
 * Collect Service
 * With the Collect service in Splunk Cloud Services, you can manage how data collection jobs ingest event and metric data.
 *
 * OpenAPI spec version: v1beta1.7 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import {
    DeleteJobsResponse,
    Job,
    JobPatch,
    JobsPatch,
    ListJobsResponse,
    PatchJobsResponse,
    SingleJobResponse,
} from '../models';
import BaseApiService from "../../../../baseapiservice";
import { CollectServiceExtensions } from "../../../../service_extensions/collect";
import { SplunkError } from '../../../../client';

export const COLLECT_SERVICE_PREFIX: string = '/collect/v1beta1';
export const COLLECT_SERVICE_CLUSTER: string = 'api';

/**
 * Collect Service
 * Version: v1beta1.7
 * With the Collect service in Splunk Cloud Services, you can manage how data collection jobs ingest event and metric data.
 */
export class GeneratedCollectService extends BaseApiService {
    getServiceCluster() : string {
        return COLLECT_SERVICE_CLUSTER
    }

    getServicePrefix() : string {
        return COLLECT_SERVICE_PREFIX;
    }
    /**
     * This API returns `403` if the number of collect workers is over a certain limit.
     * Creates a job
     * @param job The API request schema for the job.
     * @param args parameters to be sent with the request
     * @return SingleJobResponse
     */
    public createJob = (job: Job, args?: object): Promise<SingleJobResponse> => {
        const path = `/collect/v1beta1/jobs`;
        return this.client.post(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), job, { query: args })
            .then(response => response.body as SingleJobResponse);
    }
    /**
     * Removes a job based on the job ID.
     * @param jobId The job ID.
     * @param args parameters to be sent with the request
     */
    public deleteJob = (jobId: string, args?: object): Promise<object> => {
        const path_params = {
            jobId: jobId
        };
        const path = this.template`/collect/v1beta1/jobs/${'jobId'}`(path_params);
        return this.client.delete(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Removes all jobs on a tenant.
     * @param args parameters to be sent with the request
     * @return DeleteJobsResponse
     */
    public deleteJobs = (args?: object): Promise<DeleteJobsResponse> => {
        const path = `/collect/v1beta1/jobs`;
        return this.client.delete(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as DeleteJobsResponse);
    }
    /**
     * Returns a job based on the job ID.
     * @param jobId The job ID.
     * @param args parameters to be sent with the request
     * @return SingleJobResponse
     */
    public getJob = (jobId: string, args?: object): Promise<SingleJobResponse> => {
        const path_params = {
            jobId: jobId
        };
        const path = this.template`/collect/v1beta1/jobs/${'jobId'}`(path_params);
        return this.client.get(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as SingleJobResponse);
    }
    /**
     * Returns a list of all jobs that belong to a tenant.
     * @param args parameters to be sent with the request
     * @param args.connectorID Specifies the connector ID used to filter jobs. A tailing wildcard is supported for the connector ID tag. If no wildcard is used then an exact match is used. Examples: * `my-connector:v1.0.0` selects `my-connector` connector with an exact match with tag \"v1.0.0\" * `my-connector` selects `my-connector` connector with an exact match. Note as no tag is specified it actually refers to \"latest\". * `my-connector:v1.*` selects all `my-connector` connectors with tags starting with \"v1.\", e.g. \"v1.0\", \"v1.1.1\", \"v1.2-alpha\", etc. * `my-connector:*` selects all `my-connector` connectors with any tag. 
     * @return ListJobsResponse
     */
    public listJobs = (args?: { connectorID?: string, [key: string]: any }): Promise<ListJobsResponse> => {
        const path = `/collect/v1beta1/jobs`;
        return this.client.get(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as ListJobsResponse);
    }
    /**
     * This API returns `403` if the number of collect workers is over a certain limit.
     * Modifies a job based on the job ID.
     * @param jobId The job ID.
     * @param jobPatch The API request schema for patching a job.
     * @param args parameters to be sent with the request
     * @return SingleJobResponse
     */
    public patchJob = (jobId: string, jobPatch: JobPatch, args?: object): Promise<SingleJobResponse> => {
        const path_params = {
            jobId: jobId
        };
        const path = this.template`/collect/v1beta1/jobs/${'jobId'}`(path_params);
        return this.client.patch(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), jobPatch, { query: args })
            .then(response => response.body as SingleJobResponse);
    }
    /**
     * This is a non-atomic operation and the results are returned as a list with each job patch result as its element. This API returns `200 OK` regardless of how many jobs were successfully patched. You must read the response body to find out if all jobs are patched. When the API is called, the `jobIDs` or `connectorID` must be specified. Do not specify more than one of them at the same time. This API returns `403` if the number of collect workers is over a certain limit.
     * Finds all jobs that match the query and modifies the with the changes specified in the request.
     * @param jobsPatch The API request schema for patching jobs.
     * @param args parameters to be sent with the request
     * @param args.connectorID Specifies the connector ID used to filter jobs. A tailing wildcard is supported for the connector ID tag. If no wildcard is used then an exact match is used. Examples: * `my-connector:v1.0.0` selects `my-connector` connector with an exact match with tag \"v1.0.0\" * `my-connector` selects `my-connector` connector with an exact match. Note as no tag is specified it actually refers to \"latest\". * `my-connector:v1.*` selects all `my-connector` connectors with tags starting with \"v1.\", e.g. \"v1.0\", \"v1.1.1\", \"v1.2-alpha\", etc. * `my-connector:*` selects all `my-connector` connectors with any tag. 
     * @param args.jobIDs The job ID list.
     * @return PatchJobsResponse
     */
    public patchJobs = (jobsPatch: JobsPatch, args?: { connectorID?: string, jobIDs?: Array<string>, [key: string]: any }): Promise<PatchJobsResponse> => {
        const path = `/collect/v1beta1/jobs`;
        return this.client.patch(COLLECT_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), jobsPatch, { query: args })
            .then(response => response.body as PatchJobsResponse);
    }
}
export type CollectService = GeneratedCollectService & CollectServiceExtensions;
export const CollectService = CollectServiceExtensions(GeneratedCollectService);
