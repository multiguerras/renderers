/**
 * Flamenco manager
 * Render Farm manager API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient.js";
import BlenderPathCheckResult from '../model/BlenderPathCheckResult.js';
import Error from '../model/Error.js';
import FlamencoVersion from '../model/FlamencoVersion.js';
import ManagerConfiguration from '../model/ManagerConfiguration.js';
import ManagerVariable from '../model/ManagerVariable.js';
import ManagerVariableAudience from '../model/ManagerVariableAudience.js';
import PathCheckInput from '../model/PathCheckInput.js';
import PathCheckResult from '../model/PathCheckResult.js';
import SetupAssistantConfig from '../model/SetupAssistantConfig.js';
import SharedStorageLocation from '../model/SharedStorageLocation.js';

/**
* Meta service.
* @module manager/MetaApi
* @version 0.0.0
*/
export default class MetaApi {

    /**
    * Constructs a new MetaApi. 
    * @alias module:manager/MetaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Validate a CLI command for use as way to start Blender
     * @param {Object} opts Optional parameters
     * @param {module:model/PathCheckInput} opts.pathCheckInput Command or executable path to check
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BlenderPathCheckResult} and HTTP response
     */
    checkBlenderExePathWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['pathCheckInput'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BlenderPathCheckResult;
      return this.apiClient.callApi(
        '/api/v3/configuration/check/blender', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Validate a CLI command for use as way to start Blender
     * @param {Object} opts Optional parameters
     * @param {module:model/PathCheckInput} opts.pathCheckInput Command or executable path to check
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BlenderPathCheckResult}
     */
    checkBlenderExePath(opts) {
      return this.checkBlenderExePathWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate a path for use as shared storage.
     * @param {Object} opts Optional parameters
     * @param {module:model/PathCheckInput} opts.pathCheckInput Path to check
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PathCheckResult} and HTTP response
     */
    checkSharedStoragePathWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['pathCheckInput'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PathCheckResult;
      return this.apiClient.callApi(
        '/api/v3/configuration/check/shared-storage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Validate a path for use as shared storage.
     * @param {Object} opts Optional parameters
     * @param {module:model/PathCheckInput} opts.pathCheckInput Path to check
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PathCheckResult}
     */
    checkSharedStoragePath(opts) {
      return this.checkSharedStoragePathWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find one or more CLI commands for use as way to start Blender
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BlenderPathCheckResult>} and HTTP response
     */
    findBlenderExePathWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [BlenderPathCheckResult];
      return this.apiClient.callApi(
        '/api/v3/configuration/check/blender', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find one or more CLI commands for use as way to start Blender
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BlenderPathCheckResult>}
     */
    findBlenderExePath() {
      return this.findBlenderExePathWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the configuration of this Manager.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ManagerConfiguration} and HTTP response
     */
    getConfigurationWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ManagerConfiguration;
      return this.apiClient.callApi(
        '/api/v3/configuration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the configuration of this Manager.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ManagerConfiguration}
     */
    getConfiguration() {
      return this.getConfigurationWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve the configuration of Flamenco Manager.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: Object}>} and HTTP response
     */
    getConfigurationFileWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/yaml'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/api/v3/configuration/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Retrieve the configuration of Flamenco Manager.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: Object}>}
     */
    getConfigurationFile() {
      return this.getConfigurationFileWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the shared storage location of this Manager, adjusted for the given audience and platform. 
     * @param {module:model/ManagerVariableAudience} audience 
     * @param {String} platform 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SharedStorageLocation} and HTTP response
     */
    getSharedStorageWithHttpInfo(audience, platform) {
      let postBody = null;
      // verify the required parameter 'audience' is set
      if (audience === undefined || audience === null) {
        throw new Error("Missing the required parameter 'audience' when calling getSharedStorage");
      }
      // verify the required parameter 'platform' is set
      if (platform === undefined || platform === null) {
        throw new Error("Missing the required parameter 'platform' when calling getSharedStorage");
      }

      let pathParams = {
        'audience': audience,
        'platform': platform
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SharedStorageLocation;
      return this.apiClient.callApi(
        '/api/v3/configuration/shared-storage/{audience}/{platform}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the shared storage location of this Manager, adjusted for the given audience and platform. 
     * @param {module:model/ManagerVariableAudience} audience 
     * @param {String} platform 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SharedStorageLocation}
     */
    getSharedStorage(audience, platform) {
      return this.getSharedStorageWithHttpInfo(audience, platform)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the variables of this Manager. Used by the Blender add-on to recognise two-way variables, and for the web interface to do variable replacement based on the browser's platform. 
     * @param {module:model/ManagerVariableAudience} audience 
     * @param {String} platform 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, module:model/{String: ManagerVariable}>} and HTTP response
     */
    getVariablesWithHttpInfo(audience, platform) {
      let postBody = null;
      // verify the required parameter 'audience' is set
      if (audience === undefined || audience === null) {
        throw new Error("Missing the required parameter 'audience' when calling getVariables");
      }
      // verify the required parameter 'platform' is set
      if (platform === undefined || platform === null) {
        throw new Error("Missing the required parameter 'platform' when calling getVariables");
      }

      let pathParams = {
        'audience': audience,
        'platform': platform
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': ManagerVariable};
      return this.apiClient.callApi(
        '/api/v3/configuration/variables/{audience}/{platform}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the variables of this Manager. Used by the Blender add-on to recognise two-way variables, and for the web interface to do variable replacement based on the browser's platform. 
     * @param {module:model/ManagerVariableAudience} audience 
     * @param {String} platform 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, module:model/{String: ManagerVariable}>}
     */
    getVariables(audience, platform) {
      return this.getVariablesWithHttpInfo(audience, platform)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the Flamenco version of this Manager
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FlamencoVersion} and HTTP response
     */
    getVersionWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FlamencoVersion;
      return this.apiClient.callApi(
        '/api/v3/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the Flamenco version of this Manager
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FlamencoVersion}
     */
    getVersion() {
      return this.getVersionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the Manager's configuration, and restart it in fully functional mode.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetupAssistantConfig} opts.setupAssistantConfig Configuration to save.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    saveSetupAssistantConfigWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['setupAssistantConfig'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v3/configuration/setup-assistant', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the Manager's configuration, and restart it in fully functional mode.
     * @param {Object} opts Optional parameters
     * @param {module:model/SetupAssistantConfig} opts.setupAssistantConfig Configuration to save.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    saveSetupAssistantConfig(opts) {
      return this.saveSetupAssistantConfigWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
