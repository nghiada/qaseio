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
import { Response } from '../model';
import { RunCreate } from '../model';
import { RunListResponse } from '../model';
import { RunPublic } from '../model';
import { RunPublicResponse } from '../model';
import { RunResponse } from '../model';
/**
 * RunsApi - axios parameter creator
 * @export
 */
export declare const RunsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to complete a specific run.
     * @summary Complete a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeRun: (code: string, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to create a run in selected project.
     * @summary Create a new run.
     * @param {string} code Code of project, where to search entities.
     * @param {RunCreate} runCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRun: (code: string, runCreate: RunCreate, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method completely deletes a run from repository.
     * @summary Delete run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRun: (code: string, id: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to retrieve a specific run.
     * @summary Get a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRun: (code: string, id: number, include?: string | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to retrieve all runs stored in selected project.
     * @summary Get all runs.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRuns: (code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, include?: string | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to update a publicity of specific run.
     * @summary Update publicity of a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {RunPublic} runPublic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunPublicity: (code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RunsApi - functional programming interface
 * @export
 */
export declare const RunsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to complete a specific run.
     * @summary Complete a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeRun(code: string, id: number, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<Response>>;
    /**
     * This method allows to create a run in selected project.
     * @summary Create a new run.
     * @param {string} code Code of project, where to search entities.
     * @param {RunCreate} runCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRun(code: string, runCreate: RunCreate, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IdResponse>>;
    /**
     * This method completely deletes a run from repository.
     * @summary Delete run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRun(code: string, id: number, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<IdResponse>>;
    /**
     * This method allows to retrieve a specific run.
     * @summary Get a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRun(code: string, id: number, include?: string | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RunResponse>>;
    /**
     * This method allows to retrieve all runs stored in selected project.
     * @summary Get all runs.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRuns(code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, include?: string | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RunListResponse>>;
    /**
     * This method allows to update a publicity of specific run.
     * @summary Update publicity of a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {RunPublic} runPublic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<RunPublicResponse>>;
};
/**
 * RunsApi - factory interface
 * @export
 */
export declare const RunsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * This method allows to complete a specific run.
     * @summary Complete a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    completeRun(code: string, id: number, options?: any): AxiosPromise<Response>;
    /**
     * This method allows to create a run in selected project.
     * @summary Create a new run.
     * @param {string} code Code of project, where to search entities.
     * @param {RunCreate} runCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRun(code: string, runCreate: RunCreate, options?: any): AxiosPromise<IdResponse>;
    /**
     * This method completely deletes a run from repository.
     * @summary Delete run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteRun(code: string, id: number, options?: any): AxiosPromise<IdResponse>;
    /**
     * This method allows to retrieve a specific run.
     * @summary Get a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRun(code: string, id: number, include?: string | undefined, options?: any): AxiosPromise<RunResponse>;
    /**
     * This method allows to retrieve all runs stored in selected project.
     * @summary Get all runs.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRuns(code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, include?: string | undefined, options?: any): AxiosPromise<RunListResponse>;
    /**
     * This method allows to update a publicity of specific run.
     * @summary Update publicity of a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {RunPublic} runPublic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: any): AxiosPromise<RunPublicResponse>;
};
/**
 * RunsApi - object-oriented interface
 * @export
 * @class RunsApi
 * @extends {BaseAPI}
 */
export declare class RunsApi extends BaseAPI {
    /**
     * This method allows to complete a specific run.
     * @summary Complete a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    completeRun(code: string, id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Response, any>>;
    /**
     * This method allows to create a run in selected project.
     * @summary Create a new run.
     * @param {string} code Code of project, where to search entities.
     * @param {RunCreate} runCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    createRun(code: string, runCreate: RunCreate, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IdResponse, any>>;
    /**
     * This method completely deletes a run from repository.
     * @summary Delete run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    deleteRun(code: string, id: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<IdResponse, any>>;
    /**
     * This method allows to retrieve a specific run.
     * @summary Get a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    getRun(code: string, id: number, include?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RunResponse, any>>;
    /**
     * This method allows to retrieve all runs stored in selected project.
     * @summary Get all runs.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {string} [include] Add this param to include a list of test cases into response. Possible value: cases
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    getRuns(code: string, filters?: object, limit?: number, offset?: number, include?: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RunListResponse, any>>;
    /**
     * This method allows to update a publicity of specific run.
     * @summary Update publicity of a specific run.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {RunPublic} runPublic
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunsApi
     */
    updateRunPublicity(code: string, id: number, runPublic: RunPublic, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<RunPublicResponse, any>>;
}
