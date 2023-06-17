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
import JobStatus from './JobStatus.js';

/**
 * The JobAllOf model module.
 * @module model/JobAllOf
 * @version 0.0.0
 */
class JobAllOf {
    /**
     * Constructs a new <code>JobAllOf</code>.
     * @alias module:model/JobAllOf
     * @param id {String} UUID of the Job
     * @param created {Date} Creation timestamp
     * @param updated {Date} Timestamp of last update.
     * @param status {module:model/JobStatus} 
     * @param activity {String} Description of the last activity on this job.
     */
    constructor(id, created, updated, status, activity) { 
        
        JobAllOf.initialize(this, id, created, updated, status, activity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, created, updated, status, activity) { 
        obj['id'] = id;
        obj['created'] = created;
        obj['updated'] = updated;
        obj['status'] = status;
        obj['activity'] = activity;
    }

    /**
     * Constructs a <code>JobAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobAllOf} obj Optional instance to populate.
     * @return {module:model/JobAllOf} The populated <code>JobAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = JobStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('activity')) {
                obj['activity'] = ApiClient.convertToType(data['activity'], 'String');
            }
            if (data.hasOwnProperty('delete_requested_at')) {
                obj['delete_requested_at'] = ApiClient.convertToType(data['delete_requested_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * UUID of the Job
 * @member {String} id
 */
JobAllOf.prototype['id'] = undefined;

/**
 * Creation timestamp
 * @member {Date} created
 */
JobAllOf.prototype['created'] = undefined;

/**
 * Timestamp of last update.
 * @member {Date} updated
 */
JobAllOf.prototype['updated'] = undefined;

/**
 * @member {module:model/JobStatus} status
 */
JobAllOf.prototype['status'] = undefined;

/**
 * Description of the last activity on this job.
 * @member {String} activity
 */
JobAllOf.prototype['activity'] = undefined;

/**
 * If job deletion was requested, this is the timestamp at which that request was stored on Flamenco Manager. 
 * @member {Date} delete_requested_at
 */
JobAllOf.prototype['delete_requested_at'] = undefined;






export default JobAllOf;

