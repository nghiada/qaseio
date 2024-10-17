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
 * @interface DefectCreate
 */
export interface DefectCreate {
    /**
     *
     * @type {string}
     * @memberof DefectCreate
     */
    'title': string;
    /**
     *
     * @type {string}
     * @memberof DefectCreate
     */
    'actual_result': string;
    /**
     *
     * @type {number}
     * @memberof DefectCreate
     */
    'severity': number;
    /**
     *
     * @type {number}
     * @memberof DefectCreate
     */
    'milestone_id'?: number | null;
    /**
     *
     * @type {Array<string>}
     * @memberof DefectCreate
     */
    'attachments'?: Array<string>;
    /**
     * A map of custom fields values (id => value)
     * @type {{ [key: string]: string; }}
     * @memberof DefectCreate
     */
    'custom_field'?: {
        [key: string]: string;
    };
    /**
     *
     * @type {Array<string>}
     * @memberof DefectCreate
     */
    'tags'?: Array<string>;
}
