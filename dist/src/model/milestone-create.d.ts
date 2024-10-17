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
 * @interface MilestoneCreate
 */
export interface MilestoneCreate {
    /**
     *
     * @type {string}
     * @memberof MilestoneCreate
     */
    'title': string;
    /**
     *
     * @type {string}
     * @memberof MilestoneCreate
     */
    'description'?: string;
    /**
     *
     * @type {string}
     * @memberof MilestoneCreate
     */
    'status'?: MilestoneCreateStatusEnum;
    /**
     * unix timestamp
     * @type {number}
     * @memberof MilestoneCreate
     */
    'due_date'?: number;
}
/**
    * @export
    * @enum {string}
    */
export declare enum MilestoneCreateStatusEnum {
    COMPLETED = "completed",
    ACTIVE = "active"
}