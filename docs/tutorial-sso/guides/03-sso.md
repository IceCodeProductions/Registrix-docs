---
sidebar_position: 1
id: sso-config
title: SSO Configuration
---

# Technical Information

For most organizations the Identity Management or Single Sign On team is responsible for this portion.

This step only needs to occur once and normally done by your IT department.  If there are any changes to the SSL certificates or URL's, be sure that your Registrix Account Manager has been informed.

## Menu Location

From the left side menu, click on **Customization**, then click **SSO Settings**.

## Procedure

From the **Provider** drop down menu select the companies SSO provider and then select the **Protocol**.

To allow the Attendee app to initial a login request set the **Allow SP to initiate Login** to Yes.  Otherwise all logins must start with the Identity Provider.

Depending on the provider, the information that Registrix will need is the IDP Sign-on URL, the Identify Provider Issuer as URLs.

If you have the IDP Metadata, you can paste it into the IDP Metadata workspace, otherwise the IDP Metadata URL is required.

The information that the Identify provider will need can be copied from the **Clipboard** icon located to the right side of the screen.


### SSO & Participant List Mode additional steps

The **Display Text on Login Page** allows you to enter text explaining that a group of Attendees that use the SSO platform should click on the button below.  This button will then allow the Registrix platform to initiate a login request.

The **Button Text** is the text that will be display in the button for the SSO Attendees to click.

You can set the colors of the button in the color picker

When finished be sure to click on the **Save** button.
