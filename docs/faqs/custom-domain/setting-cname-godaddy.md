---
sidebar_position: 1
id: tld-cname
title: CNAME with GoDaddy
---

# Add / update CNAME record Godaddy

The easiest way to get a SSL certificate for Registrix is to add a CNAME record to the DNS service.  You are then in control as when you want to revoke the SSL layer, you can delete the CNAME record.  Registrix SSL certificate issue process will occur and issue its certificate as long as the CNAME record exists.

In your email contains the data to add into the a new CNAME record information. 

# Procedure

Go to the DNS management part of Godaddy, click on the **Add** Button.

In the Type drop down, select **CNAME**

In the Host field add the **NAME** information from the Registrix email, and in the **POINTS TO** paste the information in the Value from the email.   

Do not have any spaces or (dots) at the start or end of the entries in order for this to work.

Then click **Save**.
