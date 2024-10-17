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
import { CustomFieldValue } from './custom-field-value';
import { RunEnvironment } from './run-environment';
import { RunMilestone } from './run-milestone';
import { RunStats } from './run-stats';
import { TagValue } from './tag-value';
/**
 *
 * @export
 * @interface Run
 */
export interface Run {
    /**
     *
     * @type {number}
     * @memberof Run
     */
    'id'?: number;
    /**
     *
     * @type {string}
     * @memberof Run
     */
    'title'?: string;
    /**
     *
     * @type {string}
     * @memberof Run
     */
    'description'?: string | null;
    /**
     *
     * @type {number}
     * @memberof Run
     */
    'status'?: number;
    /**
     *
     * @type {string}
     * @memberof Run
     */
    'status_text'?: string;
    /**
     *
     * @type {string}
     * @memberof Run
     */
    'start_time'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Run
     */
    'end_time'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof Run
     */
    'public'?: boolean;
    /**
     *
     * @type {RunStats}
     * @memberof Run
     */
    'stats'?: RunStats;
    /**
     * Time in ms.
     * @type {number}
     * @memberof Run
     */
    'time_spent'?: number;
    /**
     *
     * @type {RunEnvironment}
     * @memberof Run
     */
    'environment'?: RunEnvironment | null;
    /**
     *
     * @type {RunMilestone}
     * @memberof Run
     */
    'milestone'?: RunMilestone | null;
    /**
     *
     * @type {Array<CustomFieldValue>}
     * @memberof Run
     */
    'custom_fields'?: Array<CustomFieldValue>;
    /**
     *
     * @type {Array<TagValue>}
     * @memberof Run
     */
    'tags'?: Array<TagValue>;
    /**
     *
     * @type {Array<number>}
     * @memberof Run
     */
    'cases'?: Array<number>;
}
