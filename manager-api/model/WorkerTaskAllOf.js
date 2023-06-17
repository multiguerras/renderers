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
 * The WorkerTaskAllOf model module.
 * @module model/WorkerTaskAllOf
 * @version 0.0.0
 */
class WorkerTaskAllOf {
    /**
     * Constructs a new <code>WorkerTaskAllOf</code>.
     * @alias module:model/WorkerTaskAllOf
     * @param jobId {String} 
     */
    constructor(jobId) { 
        
        WorkerTaskAllOf.initialize(this, jobId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, jobId) { 
        obj['job_id'] = jobId;
    }

    /**
     * Constructs a <code>WorkerTaskAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkerTaskAllOf} obj Optional instance to populate.
     * @return {module:model/WorkerTaskAllOf} The populated <code>WorkerTaskAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkerTaskAllOf();

            if (data.hasOwnProperty('job_id')) {
                obj['job_id'] = ApiClient.convertToType(data['job_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} job_id
 */
WorkerTaskAllOf.prototype['job_id'] = undefined;






export default WorkerTaskAllOf;

