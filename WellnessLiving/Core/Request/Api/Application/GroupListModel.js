/**
 * Loads list of access groups for editor.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
import {WlSdk_ModelAbstract} from "../../../../ModelAbstract";

export function Core_Request_Api_Application_GroupListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of access groups.
   *
   * <tt>null</tt> if is not initialized yet.
   *
   * @get result
   * @type {?{}[]}
   */
  this.a_list = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_GroupListModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_GroupListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}}}};
};
