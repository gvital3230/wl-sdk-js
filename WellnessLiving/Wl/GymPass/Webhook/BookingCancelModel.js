/**
 * Booking cancellation API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
import {WlSdk_ModelAbstract} from "../../../ModelAbstract";

export function Wl_GymPass_Webhook_BookingCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Event type.
   *
   * @post post
   * @type {*}
   */
  this.event_type = undefined;

  /**
   * Event data.
   *
   * @post post
   * @type {*}
   */
  this.event_data = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_GymPass_Webhook_BookingCancelModel);

/**
 * @inheritDoc
 */
Wl_GymPass_Webhook_BookingCancelModel.prototype.config=function()
{
  return {"a_field": {"event_type": {"post": {"post": true}},"event_data": {"post": {"post": true}}}};
};
