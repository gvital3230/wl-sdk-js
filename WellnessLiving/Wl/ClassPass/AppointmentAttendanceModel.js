/**
 * Api endpoint used to check appointment reservation state.
 *
 * ## Dispatched URL:
 * * <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/appointments/{appointment_id}/attendance</tt>
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
import {WlSdk_ModelAbstract} from "../../ModelAbstract";

export function Wl_ClassPass_AppointmentAttendanceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of appointment attendees.
   *
   * _Basically here will be only one attendee because <tt>Wellnessliving</tt>
   * do not support multiple attendees for one appointment ID._
   *
   * @get result
   * @type {*}
   */
  this.attendance = undefined;

  /**
   * Appointment reservation identifier generated by <tt>Classpass</tt>.
   *
   * @get get
   * @type {string}
   */
  this.s_appointment_id = undefined;

  /**
   * Partner ID.
   *
   * @get get
   * @type {string}
   */
  this.s_partner_id = undefined;

  /**
   * Venue ID.
   *
   * @get get
   * @type {string}
   */
  this.s_venue_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_AppointmentAttendanceModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_AppointmentAttendanceModel.prototype.config=function()
{
  return {"a_field": {"attendance": {"get": {"result": true}},"s_appointment_id": {"get": {"get": true}},"s_partner_id": {"get": {"get": true}},"s_venue_id": {"get": {"get": true}}}};
};
