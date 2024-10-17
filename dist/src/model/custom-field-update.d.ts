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
import { CustomFieldCreateValue } from './custom-field-create-value';
/**
 *
 * @export
 * @interface CustomFieldUpdate
 */
export interface CustomFieldUpdate {
    /**
     *
     * @type {string}
     * @memberof CustomFieldUpdate
     */
    'title': string;
    /**
     *
     * @type {Array<CustomFieldCreateValue>}
     * @memberof CustomFieldUpdate
     */
    'value'?: Array<CustomFieldCreateValue> | null;
    /**
     * Dictionary of old values and their replacemants
     * @type {{ [key: string]: string; }}
     * @memberof CustomFieldUpdate
     */
    'replace_values'?: {
        [key: string]: string;
    } | null;
    /**
     *
     * @type {string}
     * @memberof CustomFieldUpdate
     */
    'placeholder'?: string | null;
    /**
     *
     * @type {string}
     * @memberof CustomFieldUpdate
     */
    'default_value'?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof CustomFieldUpdate
     */
    'is_filterable'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CustomFieldUpdate
     */
    'is_visible'?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CustomFieldUpdate
     */
    'is_required'?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof CustomFieldUpdate
     */
    'projects_codes'?: Array<string>;
}
