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
/**
 *
 * @export
 * @interface RunCreate
 */
export interface RunCreate {
    /**
     *
     * @type {string}
     * @memberof RunCreate
     */
    'title': string;
    /**
     *
     * @type {string}
     * @memberof RunCreate
     */
    'description'?: string;
    /**
     *
     * @type {boolean}
     * @memberof RunCreate
     */
    'include_all_cases'?: boolean;
    /**
     *
     * @type {Array<number>}
     * @memberof RunCreate
     */
    'cases'?: Array<number>;
    /**
     *
     * @type {boolean}
     * @memberof RunCreate
     */
    'is_autotest'?: boolean;
    /**
     *
     * @type {number}
     * @memberof RunCreate
     */
    'environment_id'?: number;
    /**
     *
     * @type {number}
     * @memberof RunCreate
     */
    'milestone_id'?: number;
    /**
     *
     * @type {number}
     * @memberof RunCreate
     */
    'plan_id'?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof RunCreate
     */
    'tags'?: Array<string>;
}
