/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { IdResponse } from '../model';
import { MilestoneCreate } from '../model';
import { MilestoneListResponse } from '../model';
import { MilestoneResponse } from '../model';
import { MilestoneUpdate } from '../model';
/**
 * MilestonesApi - axios parameter creator
 * @export
 */
export declare const MilestonesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to create a milestone in selected project.
     * @summary Create a new milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {MilestoneCreate} milestoneCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMilestone: (code: string, milestoneCreate: MilestoneCreate, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method completely deletes a milestone from repository.
     * @summary Delete milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMilestone: (code: string, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to retrieve a specific milestone.
     * @summary Get a specific milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMilestone: (code: string, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to retrieve all milestones stored in selected project.
     * @summary Get all milestones.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMilestones: (code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method updates a milestone.
     * @summary Update milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {MilestoneUpdate} milestoneUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMilestone: (code: string, id: number, milestoneUpdate: MilestoneUpdate, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * MilestonesApi - functional programming interface
 * @export
 */
export declare const MilestonesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to create a milestone in selected project.
     * @summary Create a new milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {MilestoneCreate} milestoneCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMilestone(code: string, milestoneCreate: MilestoneCreate, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IdResponse>>;
    /**
     * This method completely deletes a milestone from repository.
     * @summary Delete milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMilestone(code: string, id: number, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IdResponse>>;
    /**
     * This method allows to retrieve a specific milestone.
     * @summary Get a specific milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMilestone(code: string, id: number, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<MilestoneResponse>>;
    /**
     * This method allows to retrieve all milestones stored in selected project.
     * @summary Get all milestones.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMilestones(code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<MilestoneListResponse>>;
    /**
     * This method updates a milestone.
     * @summary Update milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {MilestoneUpdate} milestoneUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMilestone(code: string, id: number, milestoneUpdate: MilestoneUpdate, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IdResponse>>;
};
/**
 * MilestonesApi - factory interface
 * @export
 */
export declare const MilestonesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * This method allows to create a milestone in selected project.
     * @summary Create a new milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {MilestoneCreate} milestoneCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMilestone(code: string, milestoneCreate: MilestoneCreate, options?: any): AxiosPromise<IdResponse>;
    /**
     * This method completely deletes a milestone from repository.
     * @summary Delete milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMilestone(code: string, id: number, options?: any): AxiosPromise<IdResponse>;
    /**
     * This method allows to retrieve a specific milestone.
     * @summary Get a specific milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMilestone(code: string, id: number, options?: any): AxiosPromise<MilestoneResponse>;
    /**
     * This method allows to retrieve all milestones stored in selected project.
     * @summary Get all milestones.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMilestones(code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): AxiosPromise<MilestoneListResponse>;
    /**
     * This method updates a milestone.
     * @summary Update milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {MilestoneUpdate} milestoneUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMilestone(code: string, id: number, milestoneUpdate: MilestoneUpdate, options?: any): AxiosPromise<IdResponse>;
};
/**
 * MilestonesApi - object-oriented interface
 * @export
 * @class MilestonesApi
 * @extends {BaseAPI}
 */
export declare class MilestonesApi extends BaseAPI {
    /**
     * This method allows to create a milestone in selected project.
     * @summary Create a new milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {MilestoneCreate} milestoneCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApi
     */
    createMilestone(code: string, milestoneCreate: MilestoneCreate, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IdResponse, any>>;
    /**
     * This method completely deletes a milestone from repository.
     * @summary Delete milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApi
     */
    deleteMilestone(code: string, id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IdResponse, any>>;
    /**
     * This method allows to retrieve a specific milestone.
     * @summary Get a specific milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApi
     */
    getMilestone(code: string, id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MilestoneResponse, any>>;
    /**
     * This method allows to retrieve all milestones stored in selected project.
     * @summary Get all milestones.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApi
     */
    getMilestones(code: string, filters?: object, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<MilestoneListResponse, any>>;
    /**
     * This method updates a milestone.
     * @summary Update milestone.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {MilestoneUpdate} milestoneUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MilestonesApi
     */
    updateMilestone(code: string, id: number, milestoneUpdate: MilestoneUpdate, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IdResponse, any>>;
}
