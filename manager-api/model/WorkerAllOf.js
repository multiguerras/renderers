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
import WorkerCluster from './WorkerCluster';
import WorkerTask from './WorkerTask';

/**
 * The WorkerAllOf model module.
 * @module model/WorkerAllOf
 * @version 0.0.0
 */
class WorkerAllOf {
    /**
     * Constructs a new <code>WorkerAllOf</code>.
     * @alias module:model/WorkerAllOf
     * @param ipAddress {String} IP address of the Worker
     * @param platform {String} Operating system of the Worker
     * @param supportedTaskTypes {Array.<String>} 
     */
    constructor(ipAddress, platform, supportedTaskTypes) { 
        
        WorkerAllOf.initialize(this, ipAddress, platform, supportedTaskTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ipAddress, platform, supportedTaskTypes) { 
        obj['ip_address'] = ipAddress;
        obj['platform'] = platform;
        obj['supported_task_types'] = supportedTaskTypes;
    }

    /**
     * Constructs a <code>WorkerAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkerAllOf} obj Optional instance to populate.
     * @return {module:model/WorkerAllOf} The populated <code>WorkerAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkerAllOf();

            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('platform')) {
                obj['platform'] = ApiClient.convertToType(data['platform'], 'String');
            }
            if (data.hasOwnProperty('supported_task_types')) {
                obj['supported_task_types'] = ApiClient.convertToType(data['supported_task_types'], ['String']);
            }
            if (data.hasOwnProperty('task')) {
                obj['task'] = WorkerTask.constructFromObject(data['task']);
            }
            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], [WorkerCluster]);
            }
        }
        return obj;
    }


}

/**
 * IP address of the Worker
 * @member {String} ip_address
 */
WorkerAllOf.prototype['ip_address'] = undefined;

/**
 * Operating system of the Worker
 * @member {String} platform
 */
WorkerAllOf.prototype['platform'] = undefined;

/**
 * @member {Array.<String>} supported_task_types
 */
WorkerAllOf.prototype['supported_task_types'] = undefined;

/**
 * @member {module:model/WorkerTask} task
 */
WorkerAllOf.prototype['task'] = undefined;

/**
 * Clusters of which this Worker is a member.
 * @member {Array.<module:model/WorkerCluster>} clusters
 */
WorkerAllOf.prototype['clusters'] = undefined;






export default WorkerAllOf;

