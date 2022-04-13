---
sidebar_position: 1
id: vimeo-as-vod
title: Vimeo as the VOD Provider
---

## Overview

This guide will outline how to setup the Vimeo service as a Video on Demand (VOD) Provider and to allow the viewers to be captured or authenticated with Registrix

You must Setup the Video on Vimeo first

Have a thumbnail ready to upload
Get the Vimeo ID to Paste into Registrix
Start Streaming into Vimeo
Add the domain playback restriction to be your instance site url
Registrix will require

Vimeo Video ID to paste into Registrix

## Procedure

In a browser tab, log into the Vimeo service.  On the menu to the left side click on the Videos link.  This will show you a listing of your videos.  Find the video that you want to add to Registrix by clicking on the title

![Docs Version Dropdown](/img/vimeo/vimeo_videos.jpg)

A new window will open.  To the right side is a link with https://vimeo.com/{NUMBERS}  This is seen right above the video itself.  Copy those numbers.

![Docs Version Dropdown](/img/vimeo/vimeo-video-id.jpg)


## Security

If you want this video to play only on your attendee app, look to the menu on the left hand side, under General then select Privacy.

Change the drop down under the “Where can this be embedded” and select Specific Domains.  Enter the URL of the attendee app.

![Docs Version Dropdown](/img/vimeo/vimeo-privacy.jpg)

Click on Save when completed.

Switch over to the Registrix Vive, click on Events, then Manage Events, and either create a new event or the Gear icon to edit an event.

Go to the Video Source and set the Video Source to Vimeo and the Video Source Options to VOD, if the video is a VOD.  In the Video Content Paste the Numbers of this video.

Click the update button down on the bottom of the page, your video should now be available on your attendee watched page.