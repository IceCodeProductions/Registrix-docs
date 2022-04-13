---
sidebar_position: 1
id: zoom-api
title: Zoom API Setup
---

## Setting up API with Zoom

his guide how to setup the Registrix Service in order to communicate to the Zoom Platform to create and run webinars within Registrix.

The Zoom Webinar platform is the industry leader in webinars. There are limitations depending on which zoom service you are subscribed to as to the amount of viewers permitted.

There are two services that needs to be setup to complete the entire project. There is the API connection and the webhook connection.

The API will allow you to sync the Registrix events directly into Zoom without having to load the Zoom platform. The webhooks will push changes of the Zoom platform into the Registrix platform.

You can choose to run the Web SDK or the Zoom client for your viewers. The web SDK has limitations on its functionality and is being currently being updated as of this writing.


## Getting Started

To setup the API Sync, open up your browser and go to marketplace.zoom.us and in another tab load up Registrix Vive.

To get started, In the Registrix Application, select customization, then Vendor Access Keys. This section of the application is used to store Application ID’s and Secrets from external providers. To get started Click on the Add Button and select Zoom JWT. If you cannot install JWT due to your Zoom access, you can select Zoom OAuth from the drop down menu. Our preference is that you use Zoom JWT.

![Docs Version Dropdown](/img/zoom/zoom-1-vendoraccesskeys.jpg)

You will be filling in the AppId and Secret of the boxes listed above. Switch over to the Zoom Marketplace and then log into your account.

Click on the dropdown called develop, and select Build App. In the JWT click on the Create button.

![Docs Version Dropdown](/img/zoom/zoom-2-jwt-marketplace-create.jpg)

In the Information enter in Registrix Vive, your email address and contact name, then click continue.

![Docs Version Dropdown](/img/zoom/zoom-3-basicinformation.jpg)

In the App Credentials fields this is where you will copy the API key and the Secret key and paste this information into the Registrix Vive Tab.

![Docs Version Dropdown](/img/zoom/zoom-4-appcredentials.jpg)

Once the keys have been updated in Registrix, click on the Save button and you should see the Zoom JWT line.

![Docs Version Dropdown](/img/zoom/zoom-5-registrixvive-api.jpg)

Switch back to the Marketplace.Zoom tab and click on Continue so that you are in the Add Feature part. Enable the switch Event Subscriptions and click on the Add New Event subscription

![Docs Version Dropdown](/img/zoom/zoom-6-webhooksubscription.jpg)

Click on the button Add Events, and scroll down and place a check mark on the Meeting Has been Updated. Then click on the Done button

![Docs Version Dropdown](/img/zoom/zoom-7-meetingupdate.jpg)

In the Subscription Name type in Meetings

Event Notification Endpoint URL you need to switch your browser tab back to Registrix, and then click under Customization, Webhooks and enable the Zoom webhook. Copy the URL and paste this information into the Marketplace Zoom Event Notification endpoint URL.

![Docs Version Dropdown](/img/zoom/zoom-8-registrix-zoomwebhook.jpg)

Now click on the Save button in the Event Subscription page.

After a few moments the Zoom marketplace platform will present a Verification Token. This token must be pasted back into the Registrix Vive tab in the Zoom Webhook page and once pasted, click on the Update button

![Docs Version Dropdown](/img/zoom/zoom-9-enable-webhook-for-zoom.jpg)

You have now completed the Zoom API and Webhook interface

The Token of Registrix MUST match the Token that is being provided by ZOOM.