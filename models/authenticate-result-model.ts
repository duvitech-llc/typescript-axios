/* tslint:disable */
/* eslint-disable */
/**
 * Dashboard API
 * Dashboard
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface AuthenticateResultModel
 */
export interface AuthenticateResultModel {
    /**
     * 
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    accessToken?: any;
    /**
     * 
     * @type {string}
     * @memberof AuthenticateResultModel
     */
    encryptedAccessToken?: any;
    /**
     * 
     * @type {number}
     * @memberof AuthenticateResultModel
     */
    expireInSeconds?: any;
    /**
     * 
     * @type {number}
     * @memberof AuthenticateResultModel
     */
    userId?: any;
}