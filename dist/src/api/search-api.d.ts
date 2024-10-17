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
import { SearchResponse } from '../model';
/**
 * SearchApi - axios parameter creator
 * @export
 */
export declare const SearchApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to retrieve data sets for various entities using expressions with conditions.
     * @summary Search entities by Qase Query Language (QQL).
     * @param {string} query Expression in Qase Query Language.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search: (query: string, limit?: number | undefined, offset?: number | undefined, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SearchApi - functional programming interface
 * @export
 */
export declare const SearchApiFp: (configuration?: Configuration | undefined) => {
    /**
     * This method allows to retrieve data sets for various entities using expressions with conditions.
     * @summary Search entities by Qase Query Language (QQL).
     * @param {string} query Expression in Qase Query Language.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(query: string, limit?: number | undefined, offset?: number | undefined, options?: AxiosRequestConfig<any> | undefined): Promise<(axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SearchResponse>>;
};
/**
 * SearchApi - factory interface
 * @export
 */
export declare const SearchApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * This method allows to retrieve data sets for various entities using expressions with conditions.
     * @summary Search entities by Qase Query Language (QQL).
     * @param {string} query Expression in Qase Query Language.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    search(query: string, limit?: number | undefined, offset?: number | undefined, options?: any): AxiosPromise<SearchResponse>;
};
/**
 * SearchApi - object-oriented interface
 * @export
 * @class SearchApi
 * @extends {BaseAPI}
 */
export declare class SearchApi extends BaseAPI {
    /**
     * This method allows to retrieve data sets for various entities using expressions with conditions.
     * @summary Search entities by Qase Query Language (QQL).
     * @param {string} query Expression in Qase Query Language.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SearchApi
     */
    search(query: string, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<SearchResponse, any>>;
}
