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
import { HashResponse } from '../model';
import { SharedStepCreate } from '../model';
import { SharedStepListResponse } from '../model';
import { SharedStepResponse } from '../model';
import { SharedStepUpdate } from '../model';
/**
 * SharedStepsApi - axios parameter creator
 * @export
 */
export declare const SharedStepsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to create a shared step in selected project.
     * @summary Create a new shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {SharedStepCreate} sharedStepCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSharedStep: (code: string, sharedStepCreate: SharedStepCreate, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method completely deletes a shared step from repository.
     * @summary Delete shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSharedStep: (code: string, hash: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to retrieve a specific shared step.
     * @summary Get a specific shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedStep: (code: string, hash: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method allows to retrieve all shared steps stored in selected project.
     * @summary Get all shared steps.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedSteps: (code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * This method updates a shared step.
     * @summary Update shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {SharedStepUpdate} sharedStepUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSharedStep: (code: string, hash: string, sharedStepUpdate: SharedStepUpdate, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SharedStepsApi - functional programming interface
 * @export
 */
export declare const SharedStepsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to create a shared step in selected project.
     * @summary Create a new shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {SharedStepCreate} sharedStepCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSharedStep(code: string, sharedStepCreate: SharedStepCreate, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<HashResponse>>;
    /**
     * This method completely deletes a shared step from repository.
     * @summary Delete shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSharedStep(code: string, hash: string, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<HashResponse>>;
    /**
     * This method allows to retrieve a specific shared step.
     * @summary Get a specific shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedStep(code: string, hash: string, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SharedStepResponse>>;
    /**
     * This method allows to retrieve all shared steps stored in selected project.
     * @summary Get all shared steps.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedSteps(code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SharedStepListResponse>>;
    /**
     * This method updates a shared step.
     * @summary Update shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {SharedStepUpdate} sharedStepUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSharedStep(code: string, hash: string, sharedStepUpdate: SharedStepUpdate, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<HashResponse>>;
};
/**
 * SharedStepsApi - factory interface
 * @export
 */
export declare const SharedStepsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * This method allows to create a shared step in selected project.
     * @summary Create a new shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {SharedStepCreate} sharedStepCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSharedStep(code: string, sharedStepCreate: SharedStepCreate, options?: any): AxiosPromise<HashResponse>;
    /**
     * This method completely deletes a shared step from repository.
     * @summary Delete shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSharedStep(code: string, hash: string, options?: any): AxiosPromise<HashResponse>;
    /**
     * This method allows to retrieve a specific shared step.
     * @summary Get a specific shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedStep(code: string, hash: string, options?: any): AxiosPromise<SharedStepResponse>;
    /**
     * This method allows to retrieve all shared steps stored in selected project.
     * @summary Get all shared steps.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSharedSteps(code: string, filters?: object | undefined, limit?: number | undefined, offset?: number | undefined, options?: any): AxiosPromise<SharedStepListResponse>;
    /**
     * This method updates a shared step.
     * @summary Update shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {SharedStepUpdate} sharedStepUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSharedStep(code: string, hash: string, sharedStepUpdate: SharedStepUpdate, options?: any): AxiosPromise<HashResponse>;
};
/**
 * SharedStepsApi - object-oriented interface
 * @export
 * @class SharedStepsApi
 * @extends {BaseAPI}
 */
export declare class SharedStepsApi extends BaseAPI {
    /**
     * This method allows to create a shared step in selected project.
     * @summary Create a new shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {SharedStepCreate} sharedStepCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedStepsApi
     */
    createSharedStep(code: string, sharedStepCreate: SharedStepCreate, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<HashResponse, any>>;
    /**
     * This method completely deletes a shared step from repository.
     * @summary Delete shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedStepsApi
     */
    deleteSharedStep(code: string, hash: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<HashResponse, any>>;
    /**
     * This method allows to retrieve a specific shared step.
     * @summary Get a specific shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedStepsApi
     */
    getSharedStep(code: string, hash: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SharedStepResponse, any>>;
    /**
     * This method allows to retrieve all shared steps stored in selected project.
     * @summary Get all shared steps.
     * @param {string} code Code of project, where to search entities.
     * @param {object} [filters]
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedStepsApi
     */
    getSharedSteps(code: string, filters?: object, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SharedStepListResponse, any>>;
    /**
     * This method updates a shared step.
     * @summary Update shared step.
     * @param {string} code Code of project, where to search entities.
     * @param {string} hash Hash.
     * @param {SharedStepUpdate} sharedStepUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SharedStepsApi
     */
    updateSharedStep(code: string, hash: string, sharedStepUpdate: SharedStepUpdate, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<HashResponse, any>>;
}
