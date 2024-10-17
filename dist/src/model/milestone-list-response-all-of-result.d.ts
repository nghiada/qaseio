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
import { Milestone } from './milestone';
/**
 *
 * @export
 * @interface MilestoneListResponseAllOfResult
 */
export interface MilestoneListResponseAllOfResult {
    /**
     *
     * @type {number}
     * @memberof MilestoneListResponseAllOfResult
     */
    'total'?: number;
    /**
     *
     * @type {number}
     * @memberof MilestoneListResponseAllOfResult
     */
    'filtered'?: number;
    /**
     *
     * @type {number}
     * @memberof MilestoneListResponseAllOfResult
     */
    'count'?: number;
    /**
     *
     * @type {Array<Milestone>}
     * @memberof MilestoneListResponseAllOfResult
     */
    'entities'?: Array<Milestone>;
}
