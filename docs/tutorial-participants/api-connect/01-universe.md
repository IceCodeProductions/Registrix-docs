---
sidebar_position: 1
id: universe
title: Universe
---

# Connection of Universe


This guide will show to setup the Registrix Service in order to use the Universe Platform to sell tickets for an event, including setting up the webhooks, API Keys.

The Universe platform allows you to sell online tickets for events and be able to promote the selling of the tickets on the Universe Platform as well as getting Universe Widgets and be able to sell tickets on other websites.  Once everything is configured correctly, then every ticket sale that occurs, no matter from what site, the ticket purchaser’s information will then be sent to the Registrix platform.  That purchaser would be able to log into Registrix about 30 seconds after the sale.

There are two services that needs to be setup to complete the entire project.  There is the WebHook service that must be setup and there is the API setup that must occur.

The API will allow you to sync all of the ticket sales from Universe and place the viewer data into Registrix as Approved List viewers.  This sync manly occurs only when you have sold tickets prior to activating the webhook or if the webhook goes offline.

You will also be able to add the Get a Ticket button on the Registrix Microsite service in case a viewer is shared a link to the Registrix service.

You must be one of the **[eTicketing Participant](../guides/customization#use-eventbrite-or-universal)** modes.

## Considerations

If you have multiple Registrix sites that you need connected to your Universe Account, please contact with your Registrix Account Manager so we can give you an updated URL and Secret to use for all of the sites.

In the event that the secret has been exposed click on the Reset button and a new code will be exposed. 

The Secret of Registrix MUST match the Secret code that is being pasted in Universe.

If you accidently clicked the reset button, when the event is live, then you must paste this new code to the Universe system.


## Setting up the Webhook

### Menu Location

From the left side menu, click on **Customization** then click **Webhooks**.

### Procedure

Click on the **Enable** switch of Universe to active the service in Registrix.

:::tip

If this option is unavailable, visit the **[customization setting](../guides/customization)** to setup up an eTicketing mode.

:::

You will then be displayed the URL and a Secret code.  This data must be pasted in the Universe Site.

Log into the Universe Platform.  Under your settings in the upper right menu, click on **Settings**.  Scroll down to the Webhooks section and click the **Add Webhook** button.

Switch between Registrix Vive and copy  & paste into Universe the URL and the Secret.  Be sure to click on the **Active** checkbox and then click **Save**.

## Setting up the API Sync Service

The next service to setup is the API Sync Service.  This service once working will permit you the ability to force a Sync of Viewer Data from Universe to Registrix.

### Menu Location

From the left side menu, click on **Customization** then click **Vendor Access Keys**.

### Procedure

To get started click on the **Add** button and select **Universe** from the drop down menu.

You will be filling in all three of the boxes listed above.  To get to the Universe Token page, click on the Open Universe App Page.  A new tab will open.

Click on the **New Application** button.

In the **Name** you can enter something that relates to this microsite such as Registrix, and copy from Registrix the Redirect URI and paste into Universe.  

Then click on **Submit**. 

The next screen will open that will contain some information for you to paste back into the Registrix Application.

With the Universe tab open highlight the Application ID, then click back to the Registrix Tab and paste this information in the App ID field.  Switch back over to the Universe Tab and copy the Secret and paste this into the Registrix Secret field.

The final field that you need to populate is the Auth Token field.  To perform this, switch back to the Universe Tab and click on the Authorize button.  A new Tab will open with the Auth Token that you need to copy and paste into Registrix under the Auth Token field.

Now click on the **Save** button.   You can close the Almost There browser tab now as well as the Universe Tab.

If everything has worked perfectly, now you just need to click on the **Authorize** icon.   The will now issue the final authorization code.

If the icon is now with a slash and when you hover over it, the label returns Deauthorize, everything is operational. 