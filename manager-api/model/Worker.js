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
import WorkerAllOf from './WorkerAllOf.js';
import WorkerCluster from './WorkerCluster.js';
import WorkerStatus from './WorkerStatus.js';
import WorkerStatusChangeRequest from './WorkerStatusChangeRequest.js';
import WorkerSummary from './WorkerSummary.js';
import WorkerTask from './WorkerTask.js';

/**
 * The Worker model module.
 * @module model/Worker
 * @version 0.0.0
 */
class Worker {
    /**
     * Constructs a new <code>Worker</code>.
     * All information about a Worker
     * @alias module:model/Worker
     * @implements module:model/WorkerSummary
     * @implements module:model/WorkerAllOf
     * @param id {String} 
     * @param name {String} 
     * @param status {module:model/WorkerStatus} 
     * @param version {String} Version of Flamenco this Worker is running
     * @param ipAddress {String} IP address of the Worker
     * @param platform {String} Operating system of the Worker
     * @param supportedTaskTypes {Array.<String>} 
     */
    constructor(id, name, status, version, ipAddress, platform, supportedTaskTypes) { 
        WorkerSummary.initialize(this, id, name, status, version);WorkerAllOf.initialize(this, ipAddress, platform, supportedTaskTypes);
        Worker.initialize(this, id, name, status, version, ipAddress, platform, supportedTaskTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, status, version, ipAddress, platform, supportedTaskTypes) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['status'] = status;
        obj['version'] = version;
        obj['ip_address'] = ipAddress;
        obj['platform'] = platform;
        obj['supported_task_types'] = supportedTaskTypes;
    }

    /**
     * Constructs a <code>Worker</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Worker} obj Optional instance to populate.
     * @return {module:model/Worker} The populated <code>Worker</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Worker();
            WorkerSummary.constructFromObject(data, obj);
            WorkerAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = WorkerStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('status_change')) {
                obj['status_change'] = WorkerStatusChangeRequest.constructFromObject(data['status_change']);
            }
            if (data.hasOwnProperty('last_seen')) {
                obj['last_seen'] = ApiClient.convertToType(data['last_seen'], 'Date');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
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
 * @member {String} id
 */
Worker.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Worker.prototype['name'] = undefined;

/**
 * @member {module:model/WorkerStatus} status
 */
Worker.prototype['status'] = undefined;

/**
 * @member {module:model/WorkerStatusChangeRequest} status_change
 */
Worker.prototype['status_change'] = undefined;

/**
 * Last time this worker was seen by the Manager.
 * @member {Date} last_seen
 */
Worker.prototype['last_seen'] = undefined;

/**
 * Version of Flamenco this Worker is running
 * @member {String} version
 */
Worker.prototype['version'] = undefined;

/**
 * IP address of the Worker
 * @member {String} ip_address
 */
Worker.prototype['ip_address'] = undefined;

/**
 * Operating system of the Worker
 * @member {String} platform
 */
Worker.prototype['platform'] = undefined;

/**
 * @member {Array.<String>} supported_task_types
 */
Worker.prototype['supported_task_types'] = undefined;

/**
 * @member {module:model/WorkerTask} task
 */
Worker.prototype['task'] = undefined;

/**
 * Clusters of which this Worker is a member.
 * @member {Array.<module:model/WorkerCluster>} clusters
 */
Worker.prototype['clusters'] = undefined;


// Implement WorkerSummary interface:
/**
 * @member {String} id
 */
WorkerSummary.prototype['id'] = undefined;
/**
 * @member {String} name
 */
WorkerSummary.prototype['name'] = undefined;
/**
 * @member {module:model/WorkerStatus} status
 */
WorkerSummary.prototype['status'] = undefined;
/**
 * @member {module:model/WorkerStatusChangeRequest} status_change
 */
WorkerSummary.prototype['status_change'] = undefined;
/**
 * Last time this worker was seen by the Manager.
 * @member {Date} last_seen
 */
WorkerSummary.prototype['last_seen'] = undefined;
/**
 * Version of Flamenco this Worker is running
 * @member {String} version
 */
WorkerSummary.prototype['version'] = undefined;
// Implement WorkerAllOf interface:
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




export default Worker;

