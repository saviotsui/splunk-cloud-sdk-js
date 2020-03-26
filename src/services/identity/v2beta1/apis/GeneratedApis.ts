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
 * Identity
 * With the Identity service in Splunk Cloud Services, you can authenticate and authorize Splunk Cloud Services users.
 *
 * OpenAPI spec version: v2beta1.17 (recommended default)
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import {
    AddGroupMemberBody,
    AddGroupRoleBody,
    AddMemberBody,
    CreateGroupBody,
    CreateRoleBody,
    Group,
    GroupMember,
    GroupRole,
    Member,
    Principal,
    Role,
    RolePermission,
    ValidateInfo,
} from '../models';
import BaseApiService from "../../../../baseapiservice";
import { IdentityServiceExtensions } from "../../../../service_extensions/identity";
import { SplunkError } from '../../../../client';

export const IDENTITY_SERVICE_PREFIX: string = '/identity/v2beta1';
export const IDENTITY_SERVICE_CLUSTER: string = 'api';

/**
 * Identity
 * Version: v2beta1.17
 * With the Identity service in Splunk Cloud Services, you can authenticate and authorize Splunk Cloud Services users.
 */
export class GeneratedIdentityService extends BaseApiService {
    getServiceCluster() : string {
        return IDENTITY_SERVICE_CLUSTER
    }

    getServicePrefix() : string {
        return IDENTITY_SERVICE_PREFIX;
    }
    /**
     * Adds a member to a given group.
     * @param group The group name.
     * @param addGroupMemberBody The member to add to a group.
     * @param args parameters to be sent with the request
     * @return GroupMember
     */
    public addGroupMember = (group: string, addGroupMemberBody: AddGroupMemberBody, args?: object): Promise<GroupMember> => {
        const path_params = {
            group: group
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/members`(path_params);
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), addGroupMemberBody, { query: args })
            .then(response => response.body as GroupMember);
    }
    /**
     * Adds a role to a given group.
     * @param group The group name.
     * @param addGroupRoleBody The role to add to a group.
     * @param args parameters to be sent with the request
     * @return GroupRole
     */
    public addGroupRole = (group: string, addGroupRoleBody: AddGroupRoleBody, args?: object): Promise<GroupRole> => {
        const path_params = {
            group: group
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/roles`(path_params);
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), addGroupRoleBody, { query: args })
            .then(response => response.body as GroupRole);
    }
    /**
     * Adds a member to a given tenant.
     * @param addMemberBody The member to associate with a tenant.
     * @param args parameters to be sent with the request
     * @return Member
     */
    public addMember = (addMemberBody: AddMemberBody, args?: object): Promise<Member> => {
        const path = `/identity/v2beta1/members`;
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), addMemberBody, { query: args })
            .then(response => response.body as Member);
    }
    /**
     * Adds permissions to a role in a given tenant.
     * @param role The role name.
     * @param body The permission to add to a role.
     * @param args parameters to be sent with the request
     * @return RolePermission
     */
    public addRolePermission = (role: string, body: string, args?: object): Promise<RolePermission> => {
        const path_params = {
            role: role
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}/permissions`(path_params);
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), body, { query: args })
            .then(response => response.body as RolePermission);
    }
    /**
     * Creates a new group in a given tenant.
     * @param createGroupBody The group definition.
     * @param args parameters to be sent with the request
     * @return Group
     */
    public createGroup = (createGroupBody: CreateGroupBody, args?: object): Promise<Group> => {
        const path = `/identity/v2beta1/groups`;
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), createGroupBody, { query: args })
            .then(response => response.body as Group);
    }
    /**
     * Creates a new authorization role in a given tenant.
     * @param createRoleBody Role definition
     * @param args parameters to be sent with the request
     * @return Role
     */
    public createRole = (createRoleBody: CreateRoleBody, args?: object): Promise<Role> => {
        const path = `/identity/v2beta1/roles`;
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), createRoleBody, { query: args })
            .then(response => response.body as Role);
    }
    /**
     * Deletes a group in a given tenant.
     * @param group The group name.
     * @param args parameters to be sent with the request
     */
    public deleteGroup = (group: string, args?: object): Promise<object> => {
        const path_params = {
            group: group
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}`(path_params);
        return this.client.delete(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Deletes a defined role for a given tenant.
     * @param role The role name.
     * @param args parameters to be sent with the request
     */
    public deleteRole = (role: string, args?: object): Promise<object> => {
        const path_params = {
            role: role
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}`(path_params);
        return this.client.delete(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Returns information about a given group within a tenant.
     * @param group The group name.
     * @param args parameters to be sent with the request
     * @return Group
     */
    public getGroup = (group: string, args?: object): Promise<Group> => {
        const path_params = {
            group: group
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Group);
    }
    /**
     * Returns information about a given member within a given group.
     * @param group The group name.
     * @param member The member name.
     * @param args parameters to be sent with the request
     * @return GroupMember
     */
    public getGroupMember = (group: string, member: string, args?: object): Promise<GroupMember> => {
        const path_params = {
            group: group,
            member: member
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/members/${'member'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as GroupMember);
    }
    /**
     * Returns information about a given role within a given group.
     * @param group The group name.
     * @param role The role name.
     * @param args parameters to be sent with the request
     * @return GroupRole
     */
    public getGroupRole = (group: string, role: string, args?: object): Promise<GroupRole> => {
        const path_params = {
            group: group,
            role: role
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/roles/${'role'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as GroupRole);
    }
    /**
     * Returns a member of a given tenant.
     * @param member The member name.
     * @param args parameters to be sent with the request
     * @return Member
     */
    public getMember = (member: string, args?: object): Promise<Member> => {
        const path_params = {
            member: member
        };
        const path = this.template`/identity/v2beta1/members/${'member'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Member);
    }
    /**
     * Returns the details of a principal, including its tenant membership.
     * @param principal The principal name.
     * @param args parameters to be sent with the request
     * @return Principal
     */
    public getPrincipal = (principal: string, args?: object): Promise<Principal> => {
        const path_params = {
            principal: principal
        };
        const path = this.template`/system/identity/v2beta1/principals/${'principal'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Principal);
    }
    /**
     * Returns a role for a given tenant.
     * @param role The role name.
     * @param args parameters to be sent with the request
     * @return Role
     */
    public getRole = (role: string, args?: object): Promise<Role> => {
        const path_params = {
            role: role
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Role);
    }
    /**
     * Gets a permission for the specified role.
     * @param role The role name.
     * @param permission The permission string.
     * @param args parameters to be sent with the request
     * @return RolePermission
     */
    public getRolePermission = (role: string, permission: string, args?: object): Promise<RolePermission> => {
        const path_params = {
            role: role,
            permission: permission
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}/permissions/${'permission'}`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as RolePermission);
    }
    /**
     * Returns a list of the members within a given group.
     * @param group The group name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listGroupMembers = (group: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            group: group
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/members`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns a list of the roles that are attached to a group within a given tenant.
     * @param group The group name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listGroupRoles = (group: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            group: group
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/roles`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * List the groups that exist in a given tenant.
     * @param args parameters to be sent with the request
     * @param args.access List only the groups with specified access permission.
     * @return Array<string>
     */
    public listGroups = (args?: { access?: AccessEnum, [key: string]: any }): Promise<Array<string>> => {
        const path = `/identity/v2beta1/groups`;
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns a list of groups that a member belongs to within a tenant.
     * @param member The member name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listMemberGroups = (member: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            member: member
        };
        const path = this.template`/identity/v2beta1/members/${'member'}/groups`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns a set of permissions granted to the member within the tenant. 
     * @param member The member name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listMemberPermissions = (member: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            member: member
        };
        const path = this.template`/identity/v2beta1/members/${'member'}/permissions`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns a set of roles that a given member holds within the tenant. 
     * @param member The member name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listMemberRoles = (member: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            member: member
        };
        const path = this.template`/identity/v2beta1/members/${'member'}/roles`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns a list of members in a given tenant.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listMembers = (args?: object): Promise<Array<string>> => {
        const path = `/identity/v2beta1/members`;
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns the list of principals that the Identity service knows about.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listPrincipals = (args?: object): Promise<Array<string>> => {
        const path = `/system/identity/v2beta1/principals`;
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Gets a list of groups for a role in a given tenant.
     * @param role The role name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listRoleGroups = (role: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            role: role
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}/groups`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Gets the permissions for a role in a given tenant.
     * @param role The role name.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listRolePermissions = (role: string, args?: object): Promise<Array<string>> => {
        const path_params = {
            role: role
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}/permissions`(path_params);
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Returns all roles for a given tenant.
     * @param args parameters to be sent with the request
     * @return Array<string>
     */
    public listRoles = (args?: object): Promise<Array<string>> => {
        const path = `/identity/v2beta1/roles`;
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as Array<string>);
    }
    /**
     * Removes the member from a given group.
     * @param group The group name.
     * @param member The member name.
     * @param args parameters to be sent with the request
     */
    public removeGroupMember = (group: string, member: string, args?: object): Promise<object> => {
        const path_params = {
            group: group,
            member: member
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/members/${'member'}`(path_params);
        return this.client.delete(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Removes a role from a given group.
     * @param group The group name.
     * @param role The role name.
     * @param args parameters to be sent with the request
     */
    public removeGroupRole = (group: string, role: string, args?: object): Promise<object> => {
        const path_params = {
            group: group,
            role: role
        };
        const path = this.template`/identity/v2beta1/groups/${'group'}/roles/${'role'}`(path_params);
        return this.client.delete(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Removes a member from a given tenant
     * @param member The member name.
     * @param args parameters to be sent with the request
     */
    public removeMember = (member: string, args?: object): Promise<object> => {
        const path_params = {
            member: member
        };
        const path = this.template`/identity/v2beta1/members/${'member'}`(path_params);
        return this.client.delete(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Removes a permission from the role.
     * @param role The role name.
     * @param permission The permission string.
     * @param args parameters to be sent with the request
     */
    public removeRolePermission = (role: string, permission: string, args?: object): Promise<object> => {
        const path_params = {
            role: role,
            permission: permission
        };
        const path = this.template`/identity/v2beta1/roles/${'role'}/permissions/${'permission'}`(path_params);
        return this.client.delete(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Revoke all existing tokens issued to a principal
     * @param principal The principal name.
     * @param args parameters to be sent with the request
     */
    public revokePrincipalAuthTokens = (principal: string, args?: object): Promise<object> => {
        const path_params = {
            principal: principal
        };
        const path = this.template`/system/identity/v2beta1/principals/${'principal'}/revoke`(path_params);
        return this.client.post(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as object);
    }
    /**
     * Validates the access token obtained from the authorization header and returns the principal name and tenant memberships. 
     * @param args parameters to be sent with the request
     * @param args.include Include additional information to return when validating tenant membership. Valid parameters [tenant, principal]
     * @return ValidateInfo
     */
    public validateToken = (args?: { include?: Array<string>, [key: string]: any }): Promise<ValidateInfo> => {
        const path = `/identity/v2beta1/validate`;
        return this.client.get(IDENTITY_SERVICE_CLUSTER, this.client.buildPath('', path.split('/').slice(1)), { query: args })
            .then(response => response.body as ValidateInfo);
    }
}
export type IdentityService = GeneratedIdentityService & IdentityServiceExtensions;
export const IdentityService = IdentityServiceExtensions(GeneratedIdentityService);
export enum AccessEnum {
    Write = 'write'
}