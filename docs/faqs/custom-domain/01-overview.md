---
sidebar_position: 1
id: overview
title: Overview
---

# Methods for Setting up Custom URL into Registrix

Pointing a domain name to your Registrix instance has several different methods depending on the use case and current usage of the Domain name.

Registrix requires all communicate to be over SSL certificate.  Each method listed on the following plans will state your involvement or effort into obtaining the SSL.

If your company has a wildcard SSL, we should be able to import this.

We must know the method you want to use in order to setup records to completed the custom Domain Name.

A TLD is the top level domain, which is something like:   Registrix.io

A sub-domain is a word before the top level domain like:    Live.Registrix.io

## Considerations

The A, CNAME, and ALIAS records cause a name to resolve to an IP. Conversely, the URL record redirects the name to a destination. The URL record is a simple and effective way to apply a redirect for one name to another name, for example redirecting www.registrix.io to registrix.io.
The A name must resolve to an IP. The CNAME and ALIAS records must point to a name
The TLD does not automatically mean www
Not every DNS provider will allow a CNAME or ALIAS on the TLD, many will only allow an A record
If you are deciding to use a TLD for the domain name to publish to your viewers, the concept of the www in front of the TLD may need to be considered.

The types of records at the TLD level is depending on your DNS Provider. 

Some TLD DNS Providers only allows an (A) record which points to an IP number which will not work in our current Registrix configuration.  

If you are working with a DNS system that allows an ALIAS, which maps to another name, then this can be pointed to your Registrix instance.

A URL record redirects the name to the target name using the HTTP 301 status code, which may result in the lost of any QUERY string tracking information.

 
## METHOD A

If the domain name is available (has not been purchased by any other domain purchasing service), Registrix can purchase it on your behalf and set it up to support all the Registrix Instances.  Our domain purchasing is thru Amazon AWS Services.

SSL:
There is no involvement by the domain owner regarding the SSL or creating Sub-Domains.

Sub-domains:
Registrix’s NS server will create and host the sub-domain name records.  We will only create sub-domains for this domain name related to Registrix.  Any other condition, we will work on a case-by-case basis.

 

## METHOD B

Point the Name Servers (NS) Records to Registrix

This the easiest to setup by the domain owner.  This method should only be used on a newly registered domain name and that it will be used exclusively for Registrix.

If you have any websites or services currently being used, DO NOT USE THIS METHOD B.

To perform this method, log into your Domain Registrars website, and locate about where to setup the NS records.  Then update the records with the information that will be provided in our email to you.

SSL:
There is no involvement by the domain owner regarding the SSL or creating Sub-Domains.

Sub-domains:
Registrix’s NS server will create and host the sub-domain name records.  We will only create sub-domains for this domain name related to Registrix.  Any other condition, we will work on a case-by-case basis.

Registrix tech team must be notified about the NS site records being hosted so that the records can be ready to go.

 

## METHOD C

Set a CNAME Record to your Registrix instance

This method allows your companies DNS provider to host the record and to create a CNAME to point to the instance of Registrix.  You have complete control over the DNS records.

Set the CNAME to point to

Your instance of Registrix, such as:      domain.registrix.io

You can see this information looking at the top right-hand site


SSL:
In order to create the SSL certificate we will provide you a unique TXT DNS entries that will allow Registrix to issue the SSL Certificate, otherwise the email receiver of the Admin’s email record of the DNS will be sent a unique code to enter into Amazon in order for the SSL certificate to be approved.  Without this being performed, a SSL certificate will not be approved and the Registrix service will not function. 

You have 72 hours to complete this entry otherwise we will have to reissue a new cname authorization.

Sub-domains:
You have complete control of all sub-domains.

“Registrix does not support an (A) record setup.  Registrix IP address can and will change as we use Load-Balancers, Auto-Scaling Servers, and other technologies.  Do not create an (A) record and point to an IP address.”

Here is an article from **[Amazon](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-validate-dns.html)** about the DNS entry.

