---
sidebar_position: 1
id: ibm-api
title: IBM API Setup
---

## Setting up API with IBM Watson

This is the first step of linking the Registrix platform to the video IBM Watson services.  By performing these steps Registrix is able to create channels, set security rules and more that achieves a more efficient workflow

You must have a Registrix Vive Account and the Username and Password to the video.IBM.com service before beginning.


## Getting Started

To get started Log into the Registrix platform, then select Customization, then Vendor Access Keys and click the Add button

![Docs Version Dropdown](/img/ibm/001-ibm-auth.png)

Select the IBM service plan that you have and then click on the Open IBM API/SDK Page

![Docs Version Dropdown](/img/ibm/002-ibm-auth.png)

Log into the IBM Service with your IBM username and password.

![Docs Version Dropdown](/img/ibm/003-ibm-auth.png)

Select the organization that you are going to connect Registrix into.  Only one organization per Registrix install can be used at this time

![Docs Version Dropdown](/img/ibm/004-ibm-auth.png)

Select your IBM Account

![Docs Version Dropdown](/img/ibm/005-ibm-auth.png)

On the left side menu, click on Integrations & apps, then click on API/SDK Access and then in the center of the window, click on the Create credentials button

![Docs Version Dropdown](/img/ibm/006-ibm-auth.png)

In the application name enter Registrix, to get the information for the Redirect URL, click back over to the Registrix Tab, and copy the Redirect URI and paste that back into the IBM Tab under the Redirect URL.  Leave the Radio button for Web Application and then click the save button

![Docs Version Dropdown](/img/ibm/007-ibm-auth.png)

In a few moments the screen will refresh, and you will be presented with the Application information.  Copy the sequence after the words Client ID: and paste that into the Registrix Tab under the AppID/AccessKey field.  Then go back to the IBM tab and copy the Client Secret: information and paste that into the Registrix tab under the Secret field.

![Docs Version Dropdown](/img/ibm/008-ibm-auth.png)

Now click on the Get Auth Token button after pasting the AccessKey and Secret

![Docs Version Dropdown](/img/ibm/009-ibm-auth.png)

A popup window will now open.  Scroll to the bottom of the window and click on the Authorize button

![Docs Version Dropdown](/img/ibm/010-ibm-auth.png)

Now copy the Auth Token in the next window and paste that information back in the Registrix Tab under the Auth Token. Now click Save in the Registrix Tab

![Docs Version Dropdown](/img/ibm/011-ibm-auth.png)

Now click on the Eye icon to Authorize the service

![Docs Version Dropdown](/img/ibm/012-ibm-auth.png)

If everything worked correctly, the eye will then have a slash

![Docs Version Dropdown](/img/ibm/013-ibm-auth.png)

Congratulations, Registrix is now ready to work with video IBM Watson.