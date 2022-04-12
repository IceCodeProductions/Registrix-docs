---
sidebar_position: 1
id: tld-ns-godaddy
title: NS Record GoDaddy
---

# NS Records in Godaddy

This method is recommended for all newly purchased top level domain names or (TLD).  This will require the lest involvement on your part to configure the site.  After you are done using Registrix, you can reset the NS records back to your server.

## Before you begin

This process should be used only for new domain names or existing domain names that haven’t been used. Any existing DNS records will be deleted and not recoverable.

:::danger Take care

This action is dangerous on any currently used TLD. You will lose access to any existing configuration.

:::

## Procedure

Go to the DNS management part of Godaddy for the domain. Scroll down the page till you find the Nameservers section and click on the **Change** Button.

![Docs Version Dropdown](/img/tutorial/faq/setting-godaddy/godaddy-nameservers.png)

Click on the **Enter my own nameservers (advanced)**.

![Docs Version Dropdown](/img/tutorial/faq/setting-godaddy/godaddy-advance.png)

Copy and Paste the two nameservers that are provided to you in an email from Registrix and click **Save**. 

![Docs Version Dropdown](/img/tutorial/faq/setting-godaddy/godaddy-nameservers-entry.png)

## Validation

Within 4 hours or less the DNS configuration will start to replicate the domain name will be available.
