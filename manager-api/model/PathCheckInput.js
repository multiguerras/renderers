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
 * The PathCheckInput model module.
 * @module model/PathCheckInput
 * @version 0.0.0
 */
class PathCheckInput {
    /**
     * Constructs a new <code>PathCheckInput</code>.
     * @alias module:model/PathCheckInput
     * @param path {String} 
     */
    constructor(path) { 
        
        PathCheckInput.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>PathCheckInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathCheckInput} obj Optional instance to populate.
     * @return {module:model/PathCheckInput} The populated <code>PathCheckInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathCheckInput();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} path
 */
PathCheckInput.prototype['path'] = undefined;






export default PathCheckInput;

