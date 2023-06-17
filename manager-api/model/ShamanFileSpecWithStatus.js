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
import ShamanFileStatus from './ShamanFileStatus.js';

/**
 * The ShamanFileSpecWithStatus model module.
 * @module model/ShamanFileSpecWithStatus
 * @version 0.0.0
 */
class ShamanFileSpecWithStatus {
    /**
     * Constructs a new <code>ShamanFileSpecWithStatus</code>.
     * Specification of a file, which could be in the Shaman storage, or not, depending on its status.
     * @alias module:model/ShamanFileSpecWithStatus
     * @param sha {String} SHA256 checksum of the file
     * @param size {Number} File size in bytes
     * @param path {String} Location of the file in the checkout
     * @param status {module:model/ShamanFileStatus} 
     */
    constructor(sha, size, path, status) { 
        
        ShamanFileSpecWithStatus.initialize(this, sha, size, path, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sha, size, path, status) { 
        obj['sha'] = sha;
        obj['size'] = size;
        obj['path'] = path;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ShamanFileSpecWithStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShamanFileSpecWithStatus} obj Optional instance to populate.
     * @return {module:model/ShamanFileSpecWithStatus} The populated <code>ShamanFileSpecWithStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShamanFileSpecWithStatus();

            if (data.hasOwnProperty('sha')) {
                obj['sha'] = ApiClient.convertToType(data['sha'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ShamanFileStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * SHA256 checksum of the file
 * @member {String} sha
 */
ShamanFileSpecWithStatus.prototype['sha'] = undefined;

/**
 * File size in bytes
 * @member {Number} size
 */
ShamanFileSpecWithStatus.prototype['size'] = undefined;

/**
 * Location of the file in the checkout
 * @member {String} path
 */
ShamanFileSpecWithStatus.prototype['path'] = undefined;

/**
 * @member {module:model/ShamanFileStatus} status
 */
ShamanFileSpecWithStatus.prototype['status'] = undefined;






export default ShamanFileSpecWithStatus;

