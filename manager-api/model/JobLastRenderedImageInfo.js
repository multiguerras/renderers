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
 * The JobLastRenderedImageInfo model module.
 * @module model/JobLastRenderedImageInfo
 * @version 0.0.0
 */
class JobLastRenderedImageInfo {
    /**
     * Constructs a new <code>JobLastRenderedImageInfo</code>.
     * Enough information for a client to piece together different strings to form a host-relative URL to the last-rendered image. To construct the URL, concatenate \&quot;{base}/{one of the suffixes}\&quot;. 
     * @alias module:model/JobLastRenderedImageInfo
     * @param base {String} 
     * @param suffixes {Array.<String>} 
     */
    constructor(base, suffixes) { 
        
        JobLastRenderedImageInfo.initialize(this, base, suffixes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, base, suffixes) { 
        obj['base'] = base;
        obj['suffixes'] = suffixes;
    }

    /**
     * Constructs a <code>JobLastRenderedImageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobLastRenderedImageInfo} obj Optional instance to populate.
     * @return {module:model/JobLastRenderedImageInfo} The populated <code>JobLastRenderedImageInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobLastRenderedImageInfo();

            if (data.hasOwnProperty('base')) {
                obj['base'] = ApiClient.convertToType(data['base'], 'String');
            }
            if (data.hasOwnProperty('suffixes')) {
                obj['suffixes'] = ApiClient.convertToType(data['suffixes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} base
 */
JobLastRenderedImageInfo.prototype['base'] = undefined;

/**
 * @member {Array.<String>} suffixes
 */
JobLastRenderedImageInfo.prototype['suffixes'] = undefined;






export default JobLastRenderedImageInfo;

