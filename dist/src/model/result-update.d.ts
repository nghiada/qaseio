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
import { ResultUpdateSteps } from './result-update-steps';
/**
 *
 * @export
 * @interface ResultUpdate
 */
export interface ResultUpdate {
    /**
     *
     * @type {string}
     * @memberof ResultUpdate
     */
    'status'?: ResultUpdateStatusEnum;
    /**
     *
     * @type {number}
     * @memberof ResultUpdate
     */
    'time_ms'?: number | null;
    /**
     *
     * @type {boolean}
     * @memberof ResultUpdate
     */
    'defect'?: boolean | null;
    /**
     *
     * @type {Array<string>}
     * @memberof ResultUpdate
     */
    'attachments'?: Array<string> | null;
    /**
     *
     * @type {string}
     * @memberof ResultUpdate
     */
    'stacktrace'?: string | null;
    /**
     *
     * @type {string}
     * @memberof ResultUpdate
     */
    'comment'?: string | null;
    /**
     *
     * @type {Array<ResultUpdateSteps>}
     * @memberof ResultUpdate
     */
    'steps'?: Array<ResultUpdateSteps> | null;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ResultUpdateStatusEnum {
    IN_PROGRESS = "in_progress",
    PASSED = "passed",
    FAILED = "failed",
    BLOCKED = "blocked",
    SKIPPED = "skipped"
}
