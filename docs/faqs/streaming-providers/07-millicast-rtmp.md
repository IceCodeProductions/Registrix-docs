---
sidebar_position: 1
id: millicast-values
title: Millicast as Live Provider
---

## Setting Millicast as the Live Streaming Provider

Millicast has a low latency CDN solution for WebRTC. There are two ways to use their platform.  You can use the Millicast player, which will not be a "secure" stream. This means that a viewer can copy the src of the embed and share that url and anyone can then watch the live event.

The other solution is to allow Registrix to be the player which then allows the Subscribe token to be used.  Viewers are unable to view the live stream feed without logging into the Registrix platform.


### Setting up as Embed

You can use the Millicast Player by selecting Embed in the video sources, then in the Millicast platform, select Live Broadcast, click the + button to add a new Stream.  Do not use the secure viewer and click the OK button.

Click on the gear icon of the Stream that you are using, which is located to the right side.

The click on the API tab and then copy the Player Embed code and paste that information into Registrix.


### Setting up for Secure Feed

In the Millicast platform, select Live Broadcast, click the {+} button to add a new Stream, be sure to enable the Secure Viewer. Do not use the Advance Allowed Origins on the Live Broadcast.

Click on the Subscribe Tokens and then click the {+} button. Enter a alpha-numberic characters without spaces, in the Add Stream Names dropdown, select the live broadcast channel you just created.  Click on the Advance tab and enter your Registrix Instance URL. Click on the OK button.

Click back on the Live Broadcast.

Click on the gear icon of the Stream that you are using, which is located to the right side.

Be sure the Secure Viewer has "Token Required" and Token Status is "Enabled".

Click on the API tab.

You will need to copy the Account ID and the Stream Name.

![Docs Version Dropdown](/img/millicast/accountid-streamname.jpg)

Switch over the Registrix platform, Click on Events, Manage, and then the Event Title and open the Video Sources tab.

You must enter the information exactly AccountID Then a foward slash / then the Stream Name.  There are no spaces. Click on the Update button on the bottom of the page so save.

![Docs Version Dropdown](/img/millicast/enter-into-registrix.jpg)

To enter the Secure Token switch back to the Millicast platform and click on Subscribe Tokens. Now click on the gear for the token that you associated with the Live Broadcast. Now click on the copy of the Token.

![Docs Version Dropdown](/img/millicast/viewer-token.jpg)

Switch back over to Registrix and then click on the Account Drop down located on the upper right corner and click on Video Token/Secret.

Click on the Create Token/Secret button.

In the Video Service drop down, select Millicast, for the channel Name enter the AccountID Then a foward slash / then the Stream Name.

In the Token Secret, copy the Token from the Millicast Platform.

Click on the Create button to save your changes.


:::info Token Updates or Changes

If you need to change the Millicast token of an existing stream channel, simplily assign a new Subscribe Token and the copy that updated token into the Video Service Token in Registrix. You do not need to create a new record for the same channel.

:::
