/**
 * Api to end Non Integrated virtual meeting.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
import {WlSdk_ModelAbstract} from "../../../../ModelAbstract";

export function Wl_Virtual_Meeting_NonIntegrated_NonIntegratedMeetingEndModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Meeting id.
   *
   * @post post
   * @type {string}
   */
  this.s_meeting_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_Meeting_NonIntegrated_NonIntegratedMeetingEndModel);

/**
 * @inheritDoc
 */
Wl_Virtual_Meeting_NonIntegrated_NonIntegratedMeetingEndModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"s_meeting_id": {"post": {"post": true}}}};
};
