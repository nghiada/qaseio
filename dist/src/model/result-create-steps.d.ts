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
 * @interface ResultCreateSteps
 */
export interface ResultCreateSteps {
    /**
     *
     * @type {number}
     * @memberof ResultCreateSteps
     */
    'position': number;
    /**
     *
     * @type {string}
     * @memberof ResultCreateSteps
     */
    'status': ResultCreateStepsStatusEnum;
    /**
     *
     * @type {string}
     * @memberof ResultCreateSteps
     */
    'comment'?: string | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ResultCreateSteps
     */
    'attachments'?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof ResultCreateSteps
     */
    'action'?: string;
    /**
     *
     * @type {string}
     * @memberof ResultCreateSteps
     */
    'expected_result'?: string | null;
    /**
     *
     * @type {string}
     * @memberof ResultCreateSteps
     */
    'data'?: string | null;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResultCreateStepsStatusEnum {
    PASSED = "passed",
    FAILED = "failed",
    BLOCKED = "blocked"
}
