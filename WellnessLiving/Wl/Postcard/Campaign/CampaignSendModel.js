/**
 * API for force sending of mail campaign.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
import {WlSdk_ModelAbstract} from "../../../ModelAbstract";

export function Wl_Postcard_Campaign_CampaignSendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of mail campaign.
   * Primary key in {@link \Wl\Postcard\Campaign\CampaignSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_postcard_campaign = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Postcard_Campaign_CampaignSendModel);

/**
 * @inheritDoc
 */
Wl_Postcard_Campaign_CampaignSendModel.prototype.config=function()
{
  return {"a_field": {"k_postcard_campaign": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};
