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

import ApiClient from '../ApiClient.js';

/**
 * The WorkerClusterChangeRequest model module.
 * @module model/WorkerClusterChangeRequest
 * @version 0.0.0
 */
class WorkerClusterChangeRequest {
    /**
     * Constructs a new <code>WorkerClusterChangeRequest</code>.
     * Request to change which clusters this Worker is assigned to.
     * @alias module:model/WorkerClusterChangeRequest
     * @param clusterIds {Array.<String>} 
     */
    constructor(clusterIds) { 
        
        WorkerClusterChangeRequest.initialize(this, clusterIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clusterIds) { 
        obj['cluster_ids'] = clusterIds;
    }

    /**
     * Constructs a <code>WorkerClusterChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkerClusterChangeRequest} obj Optional instance to populate.
     * @return {module:model/WorkerClusterChangeRequest} The populated <code>WorkerClusterChangeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkerClusterChangeRequest();

            if (data.hasOwnProperty('cluster_ids')) {
                obj['cluster_ids'] = ApiClient.convertToType(data['cluster_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} cluster_ids
 */
WorkerClusterChangeRequest.prototype['cluster_ids'] = undefined;






export default WorkerClusterChangeRequest;

