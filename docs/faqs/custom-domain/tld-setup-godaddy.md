---
sidebar_position: 1
id: tld-setup
title: TLD with GoDaddy
---

# Add / update A record in Godaddy

If you are looking to use a Top Level Domain (TLD) name to point to the Registrix Attendee App there are several steps to perform in your DNS setup.

If you are using the TLD called  ProtectedStreams.com and your DNS provider is requiring an A record (IP Address) and you want to this in the promotion of the website, you must update the A record and create or update a CNAME record for the Sub-Domain of (www) or (live).

This method will then always force a viewer to www.ProtectedStreams.com or live.ProtectedStreams.com,  even if the viewer types in  protectedstreams.com into their browser window.

# Procedure

Go to the DNS management part of Godaddy.   Locate the current (A) record with a name of (@) click on the Pencil tool and change the IP number to the number that has been assigned in from your Registrix email.

Locate or add the subdomain of www and point it to your Registrix installation which is found at the top of your vive login page.

Locate or add the subdomain of www and point it to your Registrix installation which is found at the top of your vive login page

Click the Add button on the Godaddy page

Enter the host information from the Registrix Email