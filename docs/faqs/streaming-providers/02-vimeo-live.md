---
sidebar_position: 1
id: vimeo-as-live
title: Vimeo as Live Provider
---

## Overview

In a browser tab, log into the Vimeo service.  Click on the Manage Videos, then select Live Events.  This will show you a listing of existing live events.

You must Setup the Live Event on Vimeo first
> Setup the live channel on Vimeo

> Have a thumbnail ready to upload

> Get the Vimeo ID to Paste into Registrix

> Start Streaming into Vimeo

> There will be a 20 to 30 second delay between what you say and when the viewer sees and hear the message, unless you enable the Low Latency Mode


Vimeo Video ID to paste into Registrix

## Procedure

In a browser tab, log into the Vimeo service.  Click on the Manage Videos, then select Live Events.  This will show you a listing of existing live events

![Docs Version Dropdown](/img/vimeo/vimeo-1-liveevents.png)

To create a new Live Event, hover over the New Video drop down and select Create Live Video or click on the event title to edit an existing event

![Docs Version Dropdown](/img/vimeo/vimeo-2-event-settings.png)

> Enable the chat

> Enable the Low-Latency Streaming (Do not use if you require an ECDN solution)

> Hide from Vimeo

> Set Embed privacy to Specific domains

> Copy the ID of the Video in this case it is 1327045  (yours will not be this number)


In the Appearance Tab you can set some of unique customization of the player

![Docs Version Dropdown](/img/vimeo/vimeo-3-appearance.png)


The basic settings that should be enabled:

> Enable the Play bar

> Enable the Volume Control

> Enable the Fullscreen button 


The Show Event Schedule will display a date time when the show starts if you entered that information on the Events tab.

The show latest video will display the video that was last recorded on this live event, otherwise this will show the first video on this live event at the end of the event.

The Customize color will set the color of the play bar in the video player

The Show Vimeo logo will display the Vimeo logo in the video player

The Display Custom Logo will display an image that you upload into the video player

The Destination Tab is normally not needed unless you are streaming to mainland China.  This requires more advance setup with Registrix and a different CDN that we work with


## RTMP Settings

![Docs Version Dropdown](/img/vimeo/vimeo-4-rtmp.png)

The RTMPS configuration is found by click on the Connect (RTMPS) tab.  You can now copy and paste the information into your Streaming Encoder.  This information is NOT needed in Registrix

## Getting the Video ID

Switch over to the Registrix Vive Tab, click on Events, then Manage Events, and either create a new event or the Gear icon to edit an event.

Go to the Video Source and set the Video Source to Vimeo and the Video Source Options to LIVE, in the Video Content Paste the Numbers of this video

![Docs Version Dropdown](/img/vimeo/vimeo-5-registrix-vimeo.png)

## Chat Service

To enable the chat feature on this page, click on the Chat Source Accordion and Enable Chat, Set the Chat Source to Vimeo and enter the Vimeo ID.

![Docs Version Dropdown](/img/vimeo/vimeo-6-enablechat.png)