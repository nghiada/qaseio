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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansApi = exports.PlansApiFactory = exports.PlansApiFp = exports.PlansApiAxiosParamCreator = void 0;
var axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * PlansApi - axios parameter creator
 * @export
 */
exports.PlansApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * This method allows to create a plan in selected project.
         * @summary Create a new plan.
         * @param {string} code Code of project, where to search entities.
         * @param {PlanCreate} planCreate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlan: function (code, planCreate, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'code' is not null or undefined
                            common_1.assertParamExists('createPlan', 'code', code);
                            // verify required parameter 'planCreate' is not null or undefined
                            common_1.assertParamExists('createPlan', 'planCreate', planCreate);
                            localVarPath = "/plan/{code}"
                                .replace("{" + "code" + "}", encodeURIComponent(String(code)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication TokenAuth required
                            return [4 /*yield*/, common_1.setApiKeyToObject(localVarHeaderParameter, "Token", configuration)];
                        case 1:
                            // authentication TokenAuth required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(planCreate, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * This method completely deletes a plan from repository.
         * @summary Delete plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlan: function (code, id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'code' is not null or undefined
                            common_1.assertParamExists('deletePlan', 'code', code);
                            // verify required parameter 'id' is not null or undefined
                            common_1.assertParamExists('deletePlan', 'id', id);
                            localVarPath = "/plan/{code}/{id}"
                                .replace("{" + "code" + "}", encodeURIComponent(String(code)))
                                .replace("{" + "id" + "}", encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication TokenAuth required
                            return [4 /*yield*/, common_1.setApiKeyToObject(localVarHeaderParameter, "Token", configuration)];
                        case 1:
                            // authentication TokenAuth required
                            _a.sent();
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * This method allows to retrieve a specific plan.
         * @summary Get a specific plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlan: function (code, id, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'code' is not null or undefined
                            common_1.assertParamExists('getPlan', 'code', code);
                            // verify required parameter 'id' is not null or undefined
                            common_1.assertParamExists('getPlan', 'id', id);
                            localVarPath = "/plan/{code}/{id}"
                                .replace("{" + "code" + "}", encodeURIComponent(String(code)))
                                .replace("{" + "id" + "}", encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication TokenAuth required
                            return [4 /*yield*/, common_1.setApiKeyToObject(localVarHeaderParameter, "Token", configuration)];
                        case 1:
                            // authentication TokenAuth required
                            _a.sent();
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * This method allows to retrieve all plans stored in selected project.
         * @summary Get all plans.
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlans: function (code, limit, offset, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'code' is not null or undefined
                            common_1.assertParamExists('getPlans', 'code', code);
                            localVarPath = "/plan/{code}"
                                .replace("{" + "code" + "}", encodeURIComponent(String(code)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication TokenAuth required
                            return [4 /*yield*/, common_1.setApiKeyToObject(localVarHeaderParameter, "Token", configuration)];
                        case 1:
                            // authentication TokenAuth required
                            _a.sent();
                            if (limit !== undefined) {
                                localVarQueryParameter['limit'] = limit;
                            }
                            if (offset !== undefined) {
                                localVarQueryParameter['offset'] = offset;
                            }
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * This method updates a plan.
         * @summary Update plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {PlanUpdate} planUpdate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlan: function (code, id, planUpdate, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'code' is not null or undefined
                            common_1.assertParamExists('updatePlan', 'code', code);
                            // verify required parameter 'id' is not null or undefined
                            common_1.assertParamExists('updatePlan', 'id', id);
                            // verify required parameter 'planUpdate' is not null or undefined
                            common_1.assertParamExists('updatePlan', 'planUpdate', planUpdate);
                            localVarPath = "/plan/{code}/{id}"
                                .replace("{" + "code" + "}", encodeURIComponent(String(code)))
                                .replace("{" + "id" + "}", encodeURIComponent(String(id)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'PATCH' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication TokenAuth required
                            return [4 /*yield*/, common_1.setApiKeyToObject(localVarHeaderParameter, "Token", configuration)];
                        case 1:
                            // authentication TokenAuth required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(planUpdate, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
/**
 * PlansApi - functional programming interface
 * @export
 */
exports.PlansApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.PlansApiAxiosParamCreator(configuration);
    return {
        /**
         * This method allows to create a plan in selected project.
         * @summary Create a new plan.
         * @param {string} code Code of project, where to search entities.
         * @param {PlanCreate} planCreate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlan: function (code, planCreate, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.createPlan(code, planCreate, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * This method completely deletes a plan from repository.
         * @summary Delete plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlan: function (code, id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.deletePlan(code, id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * This method allows to retrieve a specific plan.
         * @summary Get a specific plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlan: function (code, id, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getPlan(code, id, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * This method allows to retrieve all plans stored in selected project.
         * @summary Get all plans.
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlans: function (code, limit, offset, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getPlans(code, limit, offset, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * This method updates a plan.
         * @summary Update plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {PlanUpdate} planUpdate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlan: function (code, id, planUpdate, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.updatePlan(code, id, planUpdate, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
/**
 * PlansApi - factory interface
 * @export
 */
exports.PlansApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.PlansApiFp(configuration);
    return {
        /**
         * This method allows to create a plan in selected project.
         * @summary Create a new plan.
         * @param {string} code Code of project, where to search entities.
         * @param {PlanCreate} planCreate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPlan: function (code, planCreate, options) {
            return localVarFp.createPlan(code, planCreate, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * This method completely deletes a plan from repository.
         * @summary Delete plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePlan: function (code, id, options) {
            return localVarFp.deletePlan(code, id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * This method allows to retrieve a specific plan.
         * @summary Get a specific plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlan: function (code, id, options) {
            return localVarFp.getPlan(code, id, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * This method allows to retrieve all plans stored in selected project.
         * @summary Get all plans.
         * @param {string} code Code of project, where to search entities.
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlans: function (code, limit, offset, options) {
            return localVarFp.getPlans(code, limit, offset, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * This method updates a plan.
         * @summary Update plan.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {PlanUpdate} planUpdate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePlan: function (code, id, planUpdate, options) {
            return localVarFp.updatePlan(code, id, planUpdate, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * PlansApi - object-oriented interface
 * @export
 * @class PlansApi
 * @extends {BaseAPI}
 */
var PlansApi = /** @class */ (function (_super) {
    __extends(PlansApi, _super);
    function PlansApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method allows to create a plan in selected project.
     * @summary Create a new plan.
     * @param {string} code Code of project, where to search entities.
     * @param {PlanCreate} planCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    PlansApi.prototype.createPlan = function (code, planCreate, options) {
        var _this = this;
        return exports.PlansApiFp(this.configuration).createPlan(code, planCreate, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * This method completely deletes a plan from repository.
     * @summary Delete plan.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    PlansApi.prototype.deletePlan = function (code, id, options) {
        var _this = this;
        return exports.PlansApiFp(this.configuration).deletePlan(code, id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * This method allows to retrieve a specific plan.
     * @summary Get a specific plan.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    PlansApi.prototype.getPlan = function (code, id, options) {
        var _this = this;
        return exports.PlansApiFp(this.configuration).getPlan(code, id, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * This method allows to retrieve all plans stored in selected project.
     * @summary Get all plans.
     * @param {string} code Code of project, where to search entities.
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    PlansApi.prototype.getPlans = function (code, limit, offset, options) {
        var _this = this;
        return exports.PlansApiFp(this.configuration).getPlans(code, limit, offset, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * This method updates a plan.
     * @summary Update plan.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {PlanUpdate} planUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlansApi
     */
    PlansApi.prototype.updatePlan = function (code, id, planUpdate, options) {
        var _this = this;
        return exports.PlansApiFp(this.configuration).updatePlan(code, id, planUpdate, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return PlansApi;
}(base_1.BaseAPI));
exports.PlansApi = PlansApi;
//# sourceMappingURL=plans-api.js.map