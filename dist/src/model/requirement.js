"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementTypeEnum = exports.RequirementStatusEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var RequirementStatusEnum;
(function (RequirementStatusEnum) {
    RequirementStatusEnum["VALID"] = "valid";
    RequirementStatusEnum["DRAFT"] = "draft";
    RequirementStatusEnum["REVIEW"] = "review";
    RequirementStatusEnum["REWORK"] = "rework";
    RequirementStatusEnum["FINISH"] = "finish";
    RequirementStatusEnum["IMPLEMENTED"] = "implemented";
    RequirementStatusEnum["NOT_TESTABLE"] = "not-testable";
    RequirementStatusEnum["OBSOLETE"] = "obsolete";
})(RequirementStatusEnum = exports.RequirementStatusEnum || (exports.RequirementStatusEnum = {}));
/**
    * @export
    * @enum {string}
    */
var RequirementTypeEnum;
(function (RequirementTypeEnum) {
    RequirementTypeEnum["EPIC"] = "epic";
    RequirementTypeEnum["USER_STORY"] = "user-story";
    RequirementTypeEnum["FEATURE"] = "feature";
})(RequirementTypeEnum = exports.RequirementTypeEnum || (exports.RequirementTypeEnum = {}));
//# sourceMappingURL=requirement.js.map