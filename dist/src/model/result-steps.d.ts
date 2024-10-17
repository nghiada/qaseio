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
import { Attachment } from './attachment';
/**
 *
 * @export
 * @interface ResultSteps
 */
export interface ResultSteps {
    /**
     *
     * @type {number}
     * @memberof ResultSteps
     */
    'status'?: number;
    /**
     *
     * @type {number}
     * @memberof ResultSteps
     */
    'position'?: number;
    /**
     *
     * @type {Array<Attachment>}
     * @memberof ResultSteps
     */
    'attachments'?: Array<Attachment>;
}