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
import TaskSummary from './TaskSummary.js';

/**
 * The JobTasksSummary model module.
 * @module model/JobTasksSummary
 * @version 0.0.0
 */
class JobTasksSummary {
    /**
     * Constructs a new <code>JobTasksSummary</code>.
     * Simplified list of tasks of a job. Contains all tasks, but not all info of each task.
     * @alias module:model/JobTasksSummary
     */
    constructor() { 
        
        JobTasksSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobTasksSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobTasksSummary} obj Optional instance to populate.
     * @return {module:model/JobTasksSummary} The populated <code>JobTasksSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobTasksSummary();

            if (data.hasOwnProperty('tasks')) {
                obj['tasks'] = ApiClient.convertToType(data['tasks'], [TaskSummary]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TaskSummary>} tasks
 */
JobTasksSummary.prototype['tasks'] = undefined;






export default JobTasksSummary;

