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
 * Splunk Search service
 * Use the Search service in Splunk Cloud Services to dispatch, review, and manage searches and search jobs. You can finalize or cancel jobs, retrieve search results, and request search-related configurations from the Metadata Catalog service in Splunk Cloud Services.
 *
 * OpenAPI spec version: v2beta1.1 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import {
    FieldsSummary,
    ListPreviewResultsResponse,
    ListSearchResultsResponse,
    SearchJob,
    SearchStatus,
    TimeBucketsSummary,
    UpdateJob,
} from '../models';
import BaseApiService from "../../../../baseapiservice";
import { SearchServiceExtensions } from "../../../../service_extensions/search";
import { SplunkError } from '../../../../client';

export const SEARCH_SERVICE_PREFIX: string = '/search/v2beta1';
export const SEARCH_SERVICE_CLUSTER: string = 'api';

/**
 * Splunk Search service
 * Version: v2beta1.1
 * Use the Search service in Splunk Cloud Services to dispatch, review, and manage searches and search jobs. You can finalize or cancel jobs, retrieve search results, and request search-related configurations from the Metadata Catalog service in Splunk Cloud Services.
 */
export class GeneratedSearchService extends BaseApiService {
    getServiceCluster() : string {
        return SEARCH_SERVICE_CLUSTER
    }

    getServicePrefix() : string {
        return SEARCH_SERVICE_PREFIX;
    }
    /**
     * Creates a search job.
     * @param searchJob
     * @param args parameters to be sent with the request
     * @return SearchJob
     */
    public createJob = (searchJob?: SearchJob, args?: object): Promise<SearchJob> => {
        if (!searchJob) {
            throw new SplunkError({ message: `Bad Request: searchJob is empty or undefined` });
        }
        const path = `/search/v2beta1/jobs`;
        return this.client.post(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), searchJob, { query: args })
            .then(response => response.body as SearchJob);
    }
    /**
     * Return the search job with the specified search ID (SID).
     * @param sid The search ID.
     * @param args parameters to be sent with the request
     * @return SearchJob
     */
    public getJob = (sid: string, args?: object): Promise<SearchJob> => {
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}`(path_params);
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as SearchJob);
    }
    /**
     * Return events summary, for search ID (SID) search.
     * @param sid The search ID.
     * @param args parameters to be sent with the request
     * @param args.count The maximum number of entries to return. Set to 0 to return all available entries. 
     * @param args.earliest The earliest time filter, in absolute time. When specifying an absolute time specify either UNIX time, or UTC in seconds using the ISO-8601 (%FT%T.%Q) format.  For example 2019-01-25T13:15:30Z. GMT is the default timezone. You must specify GMT when you specify UTC. Any offset specified is ignored. 
     * @param args.field A field to return for the result set. You can specify multiple fields of comma-separated values if multiple fields are required. 
     * @param args.latest The latest time filter in absolute time. When specifying an absolute time specify either UNIX time, or UTC in seconds using the ISO-8601 (%FT%T.%Q) format.  For example 2019-01-25T13:15:30Z. GMT is the default timezone. You must specify GMT when you specify UTC. Any offset specified is ignored. 
     * @param args.offset Index of first item to return.
     * @return ListSearchResultsResponse
     */
    public listEventsSummary = (sid: string, args?: { count?: number, earliest?: string, field?: string, latest?: string, offset?: number, [key: string]: any }): Promise<ListSearchResultsResponse> => {
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}/timeline-metadata/auto/events-summary`(path_params);
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as ListSearchResultsResponse);
    }
    /**
     * Return fields stats summary of the events to-date, for search ID (SID) search.
     * @param sid The search ID.
     * @param args parameters to be sent with the request
     * @param args.earliest The earliest time filter, in absolute time. When specifying an absolute time specify either UNIX time, or UTC in seconds using the ISO-8601 (%FT%T.%Q) format.  For example 2019-01-25T13:15:30Z. GMT is the default timezone. You must specify GMT when you specify UTC. Any offset specified is ignored. 
     * @param args.latest The latest time filter in absolute time. When specifying an absolute time specify either UNIX time, or UTC in seconds using the ISO-8601 (%FT%T.%Q) format.  For example 2019-01-25T13:15:30Z. GMT is the default timezone. You must specify GMT when you specify UTC. Any offset specified is ignored. 
     * @return FieldsSummary
     */
    public listFieldsSummary = (sid: string, args?: { earliest?: string, latest?: string, [key: string]: any }): Promise<FieldsSummary> => {
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}/timeline-metadata/auto/fields-summary`(path_params);
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as FieldsSummary);
    }
    /**
     * Return the matching list of search jobs.
     * @param args parameters to be sent with the request
     * @param args.count The maximum number of jobs that you want to return the status entries for. 
     * @param args.filter Filter the list of jobs by sid. Valid format is  `sid IN ({comma separated list of SIDs in quotes})`. A maximum of 50 SIDs can be specified in one query. 
     * @param args.status Filter the list of jobs by status. Valid status values are 'running', 'done', 'canceled', or 'failed'. 
     * @return Array<SearchJob>
     */
    public listJobs = (args?: { count?: number, filter?: string, status?: SearchStatus, [key: string]: any }): Promise<Array<SearchJob>> => {
        const path = `/search/v2beta1/jobs`;
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<SearchJob>);
    }
    /**
     * Return the preview search results for the job with the specified search ID (SID). Can be used when a job is running to return interim results.
     * @param sid The search ID.
     * @param args parameters to be sent with the request
     * @param args.count The maximum number of entries to return. Set to 0 to return all available entries. 
     * @param args.offset Index of first item to return.
     * @return ListPreviewResultsResponse
     */
    public listPreviewResults = (sid: string, args?: { count?: number, offset?: number, [key: string]: any }): Promise<ListPreviewResultsResponse> => {
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}/results-preview`(path_params);
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as ListPreviewResultsResponse);
    }
    /**
     * Return the search results for the job with the specified search ID (SID).
     * @param sid The search ID.
     * @param args parameters to be sent with the request
     * @param args.count The maximum number of entries to return. Set to 0 to return all available entries. 
     * @param args.field A field to return for the result set. You can specify multiple fields of comma-separated values if multiple fields are required. 
     * @param args.offset Index of first item to return.
     * @return ListSearchResultsResponse
     */
    public listResults = (sid: string, args?: { count?: number, field?: string, offset?: number, [key: string]: any }): Promise<ListSearchResultsResponse> => {
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}/results`(path_params);
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as ListSearchResultsResponse);
    }
    /**
     * Return event distribution over time of the untransformed events read to-date, for search ID(SID) search.
     * @param sid The search ID.
     * @param args parameters to be sent with the request
     * @return TimeBucketsSummary
     */
    public listTimeBuckets = (sid: string, args?: object): Promise<TimeBucketsSummary> => {
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}/timeline-metadata/auto/time-buckets`(path_params);
        return this.client.get(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as TimeBucketsSummary);
    }
    /**
     * Update the search job with the specified search ID (SID) with an action.
     * @param sid The search ID.
     * @param updateJob
     * @param args parameters to be sent with the request
     * @return SearchJob
     */
    public updateJob = (sid: string, updateJob?: UpdateJob, args?: object): Promise<SearchJob> => {
        if (!updateJob) {
            throw new SplunkError({ message: `Bad Request: updateJob is empty or undefined` });
        }
        const path_params = {
            sid: sid
        };
        const path = this.template`/search/v2beta1/jobs/${'sid'}`(path_params);
        return this.client.patch(SEARCH_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), updateJob, { query: args })
            .then(response => response.body as SearchJob);
    }
}
export type SearchService = GeneratedSearchService & SearchServiceExtensions;
export const SearchService = SearchServiceExtensions(GeneratedSearchService);
