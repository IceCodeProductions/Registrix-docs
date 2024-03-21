---
sidebar_position: 1
id: eventbrite
title: EventBrite
---

# Connection of Eventbrite

This guide will show to setup the Registrix Service in order to use the Eventbrite Platform to sell tickets for an event, including setting up the webhooks, API Keys.

The Eventbrite platform allows you to sell online tickets for events and be able to promote the selling of the tickets on the Eventbrite Platform as well as getting Eventbrite Widgets and be able to sell tickets on other websites.  Once everything is configured correctly, then every ticket sale that occurs, no matter from what site, the ticket purchaser’s information will then be sent to the Registrix platform.  That purchaser would be able to log into Registrix about 30 seconds after the sale.

There are two services that needs to be setup to complete the entire project.  There is the WebHook service that must be setup and there is the API setup that must occur.

The API will allow you to sync all of the ticket sales from Eventbrite and place the viewer data into Registrix as Approved List viewers.  This sync manly occurs only when you have sold tickets prior to activating the webhook or if the webhook goes offline.

You will also be able to add the Get a Ticket button on the Registrix Microsite service in case a viewer is shared a link to the Registrix service.

You must be one of the **[eTicketing Participant](../guides/customization#use-eventbrite-or-universal)** modes.

## Considerations

If you have multiple Registrix sites that you need connected to your Eventbrite Account, please contact with your Registrix Account Manager so we can give you an updated URL and Secret to use for all of the sites.


## Setting up the Webhook

### Menu Location

From the left side menu, click on **Customization** then click **Webhooks**.

### Procedure

Click on the **Enable** switch of Eventbrite to active the service in Registrix.

:::tip

If this option is unavailable, visit the **[customization setting](../guides/customization)** to setup up an eTicketing mode.

:::


You are then be displayed a URL to paste into Eventbrite.

In a separate browser tab log into the Eventbrite Platform. 

Under your settings in the upper right menu, click on **Settings** or **Account Settings**.  

The options on the left side, expand on the **Developer Links** and select **Webhooks**.  

Click on the **Add Webhook** button.

The next screen allows you to select what events to apply the webhook to, select all events or just the event that will invoke the communication of data

Copy from Registrix Vive the URL and paste this URL into the Eventbrite **Payload URL**.

Be sure to check order.placed and order.refunded as actions.  Once completed, click the **Add Webhook** button.

## Setting up the API Sync Service

The next service to setup is the API Sync Service.  This service once working will permit you the ability to force a Sync of Viewer Data from Eventbrite to Registrix.

### Menu Location

From the left side menu, click on **Customization** then click **Vendor Access Keys**.

### Procedure

Click on the **Add** button and select **Eventbrite** from the drop down menu.

You will be filling in all three of the boxes listed above.  To get to the Eventbrite Token page, click on the **Open Eventbrite App Page**.  A new tab will open and you can click on the **Create API Key** button.

Enter your first name, last name, In the Application URL and the OAuth Redirect URI copy from Registrix the Redirect URI and paste into Eventbrite.

In the Application Name you can enter something that relates to this microsite such as Registrix, add “livestream portal” in the description, check the terms agreement and then click on **Create Key**.

Eventbrite will then create the keys, and then click on the “show API key, client secret and tokens” in order to view the keys.

With the Eventbrite tab open highlight the API key, then click back to the Registrix Tab and paste this information in the App ID field.  Switch back over to the Eventbrite Tab and copy the Client Secret and paste this into the Registrix Secret field

After pasting this information, click on the **Get Auth Token after Entering Key and Secret** Registrix will then open a new window.

Click the **Allow** button, the window will update and an Auth Token displayed.  This Auth Token must be copied into Registrix as the Auth Token.

Click **Save** in the Registrix window after pasting the Auth Token, and you can now close the **Almost There** window.

If everything has worked perfectly, now you just need to click on the **Authorize** icon.   This will now issue the final authorization code.

If the icon is now with a slash and when you hover over it, the label returns **Deauthorize**, everything is operational.

