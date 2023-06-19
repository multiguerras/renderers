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
 * The ManagerVariable model module.
 * @module model/ManagerVariable
 * @version 0.0.0
 */
class ManagerVariable {
    /**
     * Constructs a new <code>ManagerVariable</code>.
     * @alias module:model/ManagerVariable
     * @param value {String} 
     * @param isTwoway {Boolean} One-way variables are the most common one, and are simple replacement from `{name}` to their value, which happens when a Task is given to a Worker. Two-way variables are also replaced when submitting a job, where the platform-specific value is replaced by `{name}`. 
     */
    constructor(value, isTwoway) { 
        
        ManagerVariable.initialize(this, value, isTwoway);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, value, isTwoway) { 
        obj['value'] = value;
        obj['is_twoway'] = isTwoway;
    }

    /**
     * Constructs a <code>ManagerVariable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManagerVariable} obj Optional instance to populate.
     * @return {module:model/ManagerVariable} The populated <code>ManagerVariable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerVariable();

            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('is_twoway')) {
                obj['is_twoway'] = ApiClient.convertToType(data['is_twoway'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} value
 */
ManagerVariable.prototype['value'] = undefined;

/**
 * One-way variables are the most common one, and are simple replacement from `{name}` to their value, which happens when a Task is given to a Worker. Two-way variables are also replaced when submitting a job, where the platform-specific value is replaced by `{name}`. 
 * @member {Boolean} is_twoway
 */
ManagerVariable.prototype['is_twoway'] = undefined;






export default ManagerVariable;
