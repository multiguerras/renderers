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
 * The WorkerRegistration model module.
 * @module model/WorkerRegistration
 * @version 0.0.0
 */
class WorkerRegistration {
    /**
     * Constructs a new <code>WorkerRegistration</code>.
     * @alias module:model/WorkerRegistration
     * @param secret {String} 
     * @param platform {String} 
     * @param supportedTaskTypes {Array.<String>} 
     * @param name {String} 
     */
    constructor(secret, platform, supportedTaskTypes, name) { 
        
        WorkerRegistration.initialize(this, secret, platform, supportedTaskTypes, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secret, platform, supportedTaskTypes, name) { 
        obj['secret'] = secret;
        obj['platform'] = platform;
        obj['supported_task_types'] = supportedTaskTypes;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>WorkerRegistration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkerRegistration} obj Optional instance to populate.
     * @return {module:model/WorkerRegistration} The populated <code>WorkerRegistration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkerRegistration();

            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('supported_task_types')) {
                obj['supported_task_types'] = ApiClient.convertToType(data['supported_task_types'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} secret
 */
WorkerRegistration.prototype['secret'] = undefined;

/**
 * @member {String} platform
 */
WorkerRegistration.prototype['platform'] = undefined;

/**
 * @member {Array.<String>} supported_task_types
 */
WorkerRegistration.prototype['supported_task_types'] = undefined;

/**
 * @member {String} name
 */
WorkerRegistration.prototype['name'] = undefined;






export default WorkerRegistration;
