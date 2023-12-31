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
import AvailableJobSettingSubtype from './AvailableJobSettingSubtype.js';
import AvailableJobSettingType from './AvailableJobSettingType.js';
import AvailableJobSettingVisibility from './AvailableJobSettingVisibility.js';

/**
 * The AvailableJobSetting model module.
 * @module model/AvailableJobSetting
 * @version 0.0.0
 */
class AvailableJobSetting {
    /**
     * Constructs a new <code>AvailableJobSetting</code>.
     * Single setting of a Job types.
     * @alias module:model/AvailableJobSetting
     * @param key {String} Identifier for the setting, must be unique within the job type.
     * @param type {module:model/AvailableJobSettingType} 
     */
    constructor(key, type) { 
        
        AvailableJobSetting.initialize(this, key, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, type) { 
        obj['key'] = key;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>AvailableJobSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableJobSetting} obj Optional instance to populate.
     * @return {module:model/AvailableJobSetting} The populated <code>AvailableJobSetting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableJobSetting();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = AvailableJobSettingType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('subtype')) {
                obj['subtype'] = AvailableJobSettingSubtype.constructFromObject(data['subtype']);
            }
            if (data.hasOwnProperty('choices')) {
                obj['choices'] = ApiClient.convertToType(data['choices'], ['String']);
            }
            if (data.hasOwnProperty('propargs')) {
                obj['propargs'] = ApiClient.convertToType(data['propargs'], Object);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], Object);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], Object);
            }
            if (data.hasOwnProperty('eval')) {
                obj['eval'] = ApiClient.convertToType(data['eval'], 'String');
            }
            if (data.hasOwnProperty('visible')) {
                obj['visible'] = AvailableJobSettingVisibility.constructFromObject(data['visible']);
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Identifier for the setting, must be unique within the job type.
 * @member {String} key
 */
AvailableJobSetting.prototype['key'] = undefined;

/**
 * @member {module:model/AvailableJobSettingType} type
 */
AvailableJobSetting.prototype['type'] = undefined;

/**
 * @member {module:model/AvailableJobSettingSubtype} subtype
 */
AvailableJobSetting.prototype['subtype'] = undefined;

/**
 * When given, limit the valid values to these choices. Only usable with string type.
 * @member {Array.<String>} choices
 */
AvailableJobSetting.prototype['choices'] = undefined;

/**
 * Any extra arguments to the bpy.props.SomeProperty() call used to create this property.
 * @member {Object} propargs
 */
AvailableJobSetting.prototype['propargs'] = undefined;

/**
 * The description/tooltip shown in the user interface.
 * @member {Object} description
 */
AvailableJobSetting.prototype['description'] = undefined;

/**
 * The default value shown to the user when determining this setting.
 * @member {Object} default
 */
AvailableJobSetting.prototype['default'] = undefined;

/**
 * Python expression to be evaluated in order to determine the default value for this setting.
 * @member {String} eval
 */
AvailableJobSetting.prototype['eval'] = undefined;

/**
 * @member {module:model/AvailableJobSettingVisibility} visible
 */
AvailableJobSetting.prototype['visible'] = undefined;

/**
 * Whether to immediately reject a job definition, of this type, without this particular setting. 
 * @member {Boolean} required
 * @default false
 */
AvailableJobSetting.prototype['required'] = false;

/**
 * Whether to allow editing this setting after the job has been submitted. Would imply deleting all existing tasks for this job, and recompiling it. 
 * @member {Boolean} editable
 * @default false
 */
AvailableJobSetting.prototype['editable'] = false;






export default AvailableJobSetting;

