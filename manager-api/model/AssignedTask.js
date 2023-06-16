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
import Command from './Command';
import TaskStatus from './TaskStatus';

/**
 * The AssignedTask model module.
 * @module model/AssignedTask
 * @version 0.0.0
 */
class AssignedTask {
    /**
     * Constructs a new <code>AssignedTask</code>.
     * AssignedTask is a task as it is received by the Worker.
     * @alias module:model/AssignedTask
     * @param uuid {String} 
     * @param job {String} 
     * @param name {String} 
     * @param status {module:model/TaskStatus} 
     * @param priority {Number} 
     * @param jobPriority {Number} 
     * @param jobType {String} 
     * @param taskType {String} 
     * @param commands {Array.<module:model/Command>} 
     */
    constructor(uuid, job, name, status, priority, jobPriority, jobType, taskType, commands) { 
        
        AssignedTask.initialize(this, uuid, job, name, status, priority, jobPriority, jobType, taskType, commands);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid, job, name, status, priority, jobPriority, jobType, taskType, commands) { 
        obj['uuid'] = uuid;
        obj['job'] = job;
        obj['name'] = name;
        obj['status'] = status;
        obj['priority'] = priority;
        obj['job_priority'] = jobPriority;
        obj['job_type'] = jobType;
        obj['task_type'] = taskType;
        obj['commands'] = commands;
    }

    /**
     * Constructs a <code>AssignedTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignedTask} obj Optional instance to populate.
     * @return {module:model/AssignedTask} The populated <code>AssignedTask</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssignedTask();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('job')) {
                obj['job'] = ApiClient.convertToType(data['job'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TaskStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('job_priority')) {
                obj['job_priority'] = ApiClient.convertToType(data['job_priority'], 'Number');
            }
            if (data.hasOwnProperty('job_type')) {
                obj['job_type'] = ApiClient.convertToType(data['job_type'], 'String');
            }
            if (data.hasOwnProperty('task_type')) {
                obj['task_type'] = ApiClient.convertToType(data['task_type'], 'String');
            }
            if (data.hasOwnProperty('commands')) {
                obj['commands'] = ApiClient.convertToType(data['commands'], [Command]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} uuid
 */
AssignedTask.prototype['uuid'] = undefined;

/**
 * @member {String} job
 */
AssignedTask.prototype['job'] = undefined;

/**
 * @member {String} name
 */
AssignedTask.prototype['name'] = undefined;

/**
 * @member {module:model/TaskStatus} status
 */
AssignedTask.prototype['status'] = undefined;

/**
 * @member {Number} priority
 */
AssignedTask.prototype['priority'] = undefined;

/**
 * @member {Number} job_priority
 */
AssignedTask.prototype['job_priority'] = undefined;

/**
 * @member {String} job_type
 */
AssignedTask.prototype['job_type'] = undefined;

/**
 * @member {String} task_type
 */
AssignedTask.prototype['task_type'] = undefined;

/**
 * @member {Array.<module:model/Command>} commands
 */
AssignedTask.prototype['commands'] = undefined;






export default AssignedTask;

