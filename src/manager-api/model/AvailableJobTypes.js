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

import ApiClient from '../ApiClient';
import AvailableJobType from './AvailableJobType';

/**
 * The AvailableJobTypes model module.
 * @module model/AvailableJobTypes
 * @version 0.0.0
 */
class AvailableJobTypes {
    /**
     * Constructs a new <code>AvailableJobTypes</code>.
     * List of job types supported by this Manager.
     * @alias module:model/AvailableJobTypes
     * @param jobTypes {Array.<module:model/AvailableJobType>} 
     */
    constructor(jobTypes) { 
        
        AvailableJobTypes.initialize(this, jobTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, jobTypes) { 
        obj['job_types'] = jobTypes;
    }

    /**
     * Constructs a <code>AvailableJobTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableJobTypes} obj Optional instance to populate.
     * @return {module:model/AvailableJobTypes} The populated <code>AvailableJobTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableJobTypes();

            if (data.hasOwnProperty('job_types')) {
                obj['job_types'] = ApiClient.convertToType(data['job_types'], [AvailableJobType]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AvailableJobType>} job_types
 */
AvailableJobTypes.prototype['job_types'] = undefined;






export default AvailableJobTypes;
