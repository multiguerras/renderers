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
import Error from '../model/Error.js';
import Worker from '../model/Worker.js';
import WorkerCluster from '../model/WorkerCluster.js';
import WorkerClusterChangeRequest from '../model/WorkerClusterChangeRequest.js';
import WorkerClusterList from '../model/WorkerClusterList.js';
import WorkerList from '../model/WorkerList.js';
import WorkerSleepSchedule from '../model/WorkerSleepSchedule.js';
import WorkerStatusChangeRequest from '../model/WorkerStatusChangeRequest.js';

/**
* WorkerMgt service.
* @module manager/WorkerMgtApi
* @version 0.0.0
*/
export default class WorkerMgtApi {

    /**
    * Constructs a new WorkerMgtApi. 
    * @alias module:manager/WorkerMgtApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a new worker cluster.
     * @param {module:model/WorkerCluster} workerCluster The worker cluster.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkerCluster} and HTTP response
     */
    createWorkerClusterWithHttpInfo(workerCluster) {
      let postBody = workerCluster;
      // verify the required parameter 'workerCluster' is set
      if (workerCluster === undefined || workerCluster === null) {
        throw new Error("Missing the required parameter 'workerCluster' when calling createWorkerCluster");
      }

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
      let returnType = WorkerCluster;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/clusters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new worker cluster.
     * @param {module:model/WorkerCluster} workerCluster The worker cluster.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkerCluster}
     */
    createWorkerCluster(workerCluster) {
      return this.createWorkerClusterWithHttpInfo(workerCluster)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove the given worker. It is recommended to only call this function when the worker is in `offline` state. If the worker is still running, stop it first. Any task still assigned to the worker will be requeued. 
     * @param {String} workerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkerWithHttpInfo(workerId) {
      let postBody = null;
      // verify the required parameter 'workerId' is set
      if (workerId === undefined || workerId === null) {
        throw new Error("Missing the required parameter 'workerId' when calling deleteWorker");
      }

      let pathParams = {
        'worker_id': workerId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/workers/{worker_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove the given worker. It is recommended to only call this function when the worker is in `offline` state. If the worker is still running, stop it first. Any task still assigned to the worker will be requeued. 
     * @param {String} workerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorker(workerId) {
      return this.deleteWorkerWithHttpInfo(workerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove this worker cluster. This unassigns all workers from the cluster and removes it.
     * @param {String} clusterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkerClusterWithHttpInfo(clusterId) {
      let postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling deleteWorkerCluster");
      }

      let pathParams = {
        'cluster_id': clusterId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/cluster/{cluster_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove this worker cluster. This unassigns all workers from the cluster and removes it.
     * @param {String} clusterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkerCluster(clusterId) {
      return this.deleteWorkerClusterWithHttpInfo(clusterId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch info about the worker.
     * @param {String} workerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Worker} and HTTP response
     */
    fetchWorkerWithHttpInfo(workerId) {
      let postBody = null;
      // verify the required parameter 'workerId' is set
      if (workerId === undefined || workerId === null) {
        throw new Error("Missing the required parameter 'workerId' when calling fetchWorker");
      }

      let pathParams = {
        'worker_id': workerId
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
      let returnType = Worker;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/workers/{worker_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch info about the worker.
     * @param {String} workerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Worker}
     */
    fetchWorker(workerId) {
      return this.fetchWorkerWithHttpInfo(workerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a single worker cluster.
     * @param {String} clusterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkerCluster} and HTTP response
     */
    fetchWorkerClusterWithHttpInfo(clusterId) {
      let postBody = null;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling fetchWorkerCluster");
      }

      let pathParams = {
        'cluster_id': clusterId
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
      let returnType = WorkerCluster;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/cluster/{cluster_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a single worker cluster.
     * @param {String} clusterId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkerCluster}
     */
    fetchWorkerCluster(clusterId) {
      return this.fetchWorkerClusterWithHttpInfo(clusterId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of worker clusters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkerClusterList} and HTTP response
     */
    fetchWorkerClustersWithHttpInfo() {
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
      let returnType = WorkerClusterList;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/clusters', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get list of worker clusters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkerClusterList}
     */
    fetchWorkerClusters() {
      return this.fetchWorkerClustersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} workerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkerSleepSchedule} and HTTP response
     */
    fetchWorkerSleepScheduleWithHttpInfo(workerId) {
      let postBody = null;
      // verify the required parameter 'workerId' is set
      if (workerId === undefined || workerId === null) {
        throw new Error("Missing the required parameter 'workerId' when calling fetchWorkerSleepSchedule");
      }

      let pathParams = {
        'worker_id': workerId
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
      let returnType = WorkerSleepSchedule;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/workers/{worker_id}/sleep-schedule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} workerId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkerSleepSchedule}
     */
    fetchWorkerSleepSchedule(workerId) {
      return this.fetchWorkerSleepScheduleWithHttpInfo(workerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get list of workers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkerList} and HTTP response
     */
    fetchWorkersWithHttpInfo() {
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
      let returnType = WorkerList;
      return this.apiClient.callApi(
        '/api/v3/worker-mgt/workers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get list of workers.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkerList}
     */
    fetchWorkers() {
      return this.fetchWorkersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} workerId 
     * @param {module:model/WorkerStatusChangeRequest} workerStatusChangeRequest The status change to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    requestWorkerStatusChangeWithHttpInfo(workerId, workerStatusChangeRequest) {
      let postBody = workerStatusChangeRequest;
      // verify the required parameter 'workerId' is set
      if (workerId === undefined || workerId === null) {
        throw new Error("Missing the required parameter 'workerId' when calling requestWorkerStatusChange");
      }
      // verify the required parameter 'workerStatusChangeRequest' is set
      if (workerStatusChangeRequest === undefined || workerStatusChangeRequest === null) {
        throw new Error("Missing the required parameter 'workerStatusChangeRequest' when calling requestWorkerStatusChange");
      }

      let pathParams = {
        'worker_id': workerId
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
        '/api/v3/worker-mgt/workers/{worker_id}/setstatus', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} workerId 
     * @param {module:model/WorkerStatusChangeRequest} workerStatusChangeRequest The status change to request.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    requestWorkerStatusChange(workerId, workerStatusChangeRequest) {
      return this.requestWorkerStatusChangeWithHttpInfo(workerId, workerStatusChangeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} workerId 
     * @param {module:model/WorkerClusterChangeRequest} workerClusterChangeRequest The list of cluster IDs this worker should be a member of.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    setWorkerClustersWithHttpInfo(workerId, workerClusterChangeRequest) {
      let postBody = workerClusterChangeRequest;
      // verify the required parameter 'workerId' is set
      if (workerId === undefined || workerId === null) {
        throw new Error("Missing the required parameter 'workerId' when calling setWorkerClusters");
      }
      // verify the required parameter 'workerClusterChangeRequest' is set
      if (workerClusterChangeRequest === undefined || workerClusterChangeRequest === null) {
        throw new Error("Missing the required parameter 'workerClusterChangeRequest' when calling setWorkerClusters");
      }

      let pathParams = {
        'worker_id': workerId
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
        '/api/v3/worker-mgt/workers/{worker_id}/setclusters', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} workerId 
     * @param {module:model/WorkerClusterChangeRequest} workerClusterChangeRequest The list of cluster IDs this worker should be a member of.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    setWorkerClusters(workerId, workerClusterChangeRequest) {
      return this.setWorkerClustersWithHttpInfo(workerId, workerClusterChangeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {String} workerId 
     * @param {module:model/WorkerSleepSchedule} workerSleepSchedule The new sleep schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    setWorkerSleepScheduleWithHttpInfo(workerId, workerSleepSchedule) {
      let postBody = workerSleepSchedule;
      // verify the required parameter 'workerId' is set
      if (workerId === undefined || workerId === null) {
        throw new Error("Missing the required parameter 'workerId' when calling setWorkerSleepSchedule");
      }
      // verify the required parameter 'workerSleepSchedule' is set
      if (workerSleepSchedule === undefined || workerSleepSchedule === null) {
        throw new Error("Missing the required parameter 'workerSleepSchedule' when calling setWorkerSleepSchedule");
      }

      let pathParams = {
        'worker_id': workerId
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
        '/api/v3/worker-mgt/workers/{worker_id}/sleep-schedule', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {String} workerId 
     * @param {module:model/WorkerSleepSchedule} workerSleepSchedule The new sleep schedule.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    setWorkerSleepSchedule(workerId, workerSleepSchedule) {
      return this.setWorkerSleepScheduleWithHttpInfo(workerId, workerSleepSchedule)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing worker cluster.
     * @param {String} clusterId 
     * @param {module:model/WorkerCluster} workerCluster The updated worker cluster.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateWorkerClusterWithHttpInfo(clusterId, workerCluster) {
      let postBody = workerCluster;
      // verify the required parameter 'clusterId' is set
      if (clusterId === undefined || clusterId === null) {
        throw new Error("Missing the required parameter 'clusterId' when calling updateWorkerCluster");
      }
      // verify the required parameter 'workerCluster' is set
      if (workerCluster === undefined || workerCluster === null) {
        throw new Error("Missing the required parameter 'workerCluster' when calling updateWorkerCluster");
      }

      let pathParams = {
        'cluster_id': clusterId
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
        '/api/v3/worker-mgt/cluster/{cluster_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update an existing worker cluster.
     * @param {String} clusterId 
     * @param {module:model/WorkerCluster} workerCluster The updated worker cluster.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateWorkerCluster(clusterId, workerCluster) {
      return this.updateWorkerClusterWithHttpInfo(clusterId, workerCluster)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
