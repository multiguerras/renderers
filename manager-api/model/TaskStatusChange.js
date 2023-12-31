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
import TaskStatus from './TaskStatus.js';

/**
 * The TaskStatusChange model module.
 * @module model/TaskStatusChange
 * @version 0.0.0
 */
class TaskStatusChange {
    /**
     * Constructs a new <code>TaskStatusChange</code>.
     * @alias module:model/TaskStatusChange
     * @param status {module:model/TaskStatus} 
     * @param reason {String} The reason for this status change.
     */
    constructor(status, reason) { 
        
        TaskStatusChange.initialize(this, status, reason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, reason) { 
        obj['status'] = status;
        obj['reason'] = reason;
    }

    /**
     * Constructs a <code>TaskStatusChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskStatusChange} obj Optional instance to populate.
     * @return {module:model/TaskStatusChange} The populated <code>TaskStatusChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskStatusChange();

            if (data.hasOwnProperty('status')) {
                obj['status'] = TaskStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TaskStatus} status
 */
TaskStatusChange.prototype['status'] = undefined;

/**
 * The reason for this status change.
 * @member {String} reason
 */
TaskStatusChange.prototype['reason'] = undefined;






export default TaskStatusChange;

