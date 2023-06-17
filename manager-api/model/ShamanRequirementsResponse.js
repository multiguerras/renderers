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
import ShamanFileSpecWithStatus from './ShamanFileSpecWithStatus.js';

/**
 * The ShamanRequirementsResponse model module.
 * @module model/ShamanRequirementsResponse
 * @version 0.0.0
 */
class ShamanRequirementsResponse {
    /**
     * Constructs a new <code>ShamanRequirementsResponse</code>.
     * The files from a requirements request, with their status on the Shaman server. Files that are known to Shaman are excluded from the response.
     * @alias module:model/ShamanRequirementsResponse
     * @param files {Array.<module:model/ShamanFileSpecWithStatus>} 
     */
    constructor(files) { 
        
        ShamanRequirementsResponse.initialize(this, files);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, files) { 
        obj['files'] = files;
    }

    /**
     * Constructs a <code>ShamanRequirementsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShamanRequirementsResponse} obj Optional instance to populate.
     * @return {module:model/ShamanRequirementsResponse} The populated <code>ShamanRequirementsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShamanRequirementsResponse();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [ShamanFileSpecWithStatus]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ShamanFileSpecWithStatus>} files
 */
ShamanRequirementsResponse.prototype['files'] = undefined;






export default ShamanRequirementsResponse;
