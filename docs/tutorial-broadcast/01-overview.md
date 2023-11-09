---
sidebar_position: 1
id: overview
title: Overview
---

## How Broadcasting works

The Registrix Broadcasting service has several different solutions to get your message out. Each method type will perform a specific function.

## Methods

Currently there are 2 well defined methods relating to video.

### Webcasting

Webcasts are designed to be a live linear video feed that is designed to go from one ingestion (broadcast source) and allow 1,000's of viewers to watch. Webcasting does not allow viewers to be engaged in the video feed. There is no requirement from the viewers end to share a microphone or webcam. Depending on the browser that the viewer is using, they may have to click on the Play button as some browsers do not allow autoplay. 

On the technical side, webcasts normally use a CDN (content delivery network) in order to stream the video. From the point of the ingestion to the viewers player there is a latency that can be as long as 45 seconds, or as low as 3 to 5 seconds which is then called Low Latency.

Ingestion methods for webcasting include RTMP, SRT and WebRTC. The player on the viewers system will receive HLS which works in all browsers.

For large campuses that have everyone on their network to watch a webcast must use an ECDN in order to handle the incoming traffic. Otherwise with every viewer watching the main internet pipe will be maxed out and then nobody can watch.

Viewers can interact with the show only using external functions that are not part of the video player. This can include a chat, Question & Answers, Polling. Each of these features are displayed someplace else on a website or app.

Firewalls can block video services.

### Webinar

Webinars allow the ability to have multiple people all share their webcam and microphone and have a dialog without any noticable delay. Because of the nature of everyone talking this service is best to have 24 attendees or less. Webinars normally work over a browser and uses a protocol called webRTC.

The interactive nature of a webinar allows a moderator the ability to mute guests, to share a screen and kick guest out of a room.

Ingestion methods are only WebRTC.

Firewalls are configured to sometimes block WebRTC ports, so this doesn't work 100% of the time at every company location.




