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
 * The TaskLogInfo model module.
 * @module model/TaskLogInfo
 * @version 0.0.0
 */
class TaskLogInfo {
    /**
     * Constructs a new <code>TaskLogInfo</code>.
     * Info about the log of a single task.
     * @alias module:model/TaskLogInfo
     * @param taskId {String} 
     * @param jobId {String} 
     * @param url {String} The URL at which the task log itself can be downloaded.
     * @param size {Number} The size of the task log, in bytes.
     */
    constructor(taskId, jobId, url, size) { 
        
        TaskLogInfo.initialize(this, taskId, jobId, url, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, taskId, jobId, url, size) { 
        obj['task_id'] = taskId;
        obj['job_id'] = jobId;
        obj['url'] = url;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>TaskLogInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskLogInfo} obj Optional instance to populate.
     * @return {module:model/TaskLogInfo} The populated <code>TaskLogInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskLogInfo();

            if (data.hasOwnProperty('task_id')) {
                obj['task_id'] = ApiClient.convertToType(data['task_id'], 'String');
            }
            if (data.hasOwnProperty('job_id')) {
                obj['job_id'] = ApiClient.convertToType(data['job_id'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} task_id
 */
TaskLogInfo.prototype['task_id'] = undefined;

/**
 * @member {String} job_id
 */
TaskLogInfo.prototype['job_id'] = undefined;

/**
 * The URL at which the task log itself can be downloaded.
 * @member {String} url
 */
TaskLogInfo.prototype['url'] = undefined;

/**
 * The size of the task log, in bytes.
 * @member {Number} size
 */
TaskLogInfo.prototype['size'] = undefined;






export default TaskLogInfo;
