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
* Enum class ManagerVariableAudience.
* @enum {}
* @readonly
*/
export default class ManagerVariableAudience {
    
        /**
         * value: "workers"
         * @const
         */
        "workers" = "workers";

    
        /**
         * value: "users"
         * @const
         */
        "users" = "users";

    

    /**
    * Returns a <code>ManagerVariableAudience</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ManagerVariableAudience} The enum <code>ManagerVariableAudience</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

