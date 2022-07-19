---
sidebar_position: 1
---

# Encoder Settings for Registrix WebRTC

The URL information for the encoder using the Registrix WebRTC channels is found in the Registrix Vive.

After logging into Registrix Vive, click the Account menu option located to the upper right corner and select and then click on Broadcaster.

The next window that appears will contain the RTMPS or RTMP information and the Stream Key.  This information must be entered 100% exactly the same or the stream will fail.

## Video on Demand
Registrix WebRTC does not contain any saving of stream. You must capture the video at your source for any video on demand.

## Settings
Regisitrix WebRTC service requires that you use the following:

```md
Setting -> Value
---
Keyframe Interval -> 2
Encoder -> x264 or nvenc
Tune -> zerolatency
Profile -> baseline  Level-1
CPU Usage -> veryfast
Rate Control -> CBR
Bitrate ->	
	360p - upto 500 kbps
	480p - upto 1500 kbps
	720p 30fps - upto 3000 kbps
	720p 60fps - upto 4500 kps
	1080p 30 fps - upto 4500 kbps
	1080p 60 fps - upto 6000 kbps
	4K 30fps - between 13000 - 34000 kbps 
	4k 60fps - between 20000 - 51000 kpbs
FPS -> 30 or 60
BFrames -> 0
Audio -> AAC
Audio BitRate -> up to 320 kbps
Sample Rate -> 44.1 khz or 48 khz
```

## Adaptive Bitrate Streaming

Registrix WebRTC supports Adaptive Bitrate Streaming. At your source you must transcode between the different resolutions. That means you must create and stream 480p, 720p & 1080p from
your encoder. You must confirm that you have the bandwidth requirement at the source to transmit all the different streams.  If you only create a 4K stream, then all of your attendees must
have the bandwidth to receive the transmission or they will have buffering issues.

For most projects we recommend a 1080p, 720p and 480p stream or a 720p and 480p stream.

For Adaptive Bitrate Streaming you would use the RTSP/RTMP URL and the Stream Key and add the following:

For the feed that should be highest resolution stream add the following:  &sourceId=1&simulcastId

On the next lower stream the &sourceId must be incremented by 1 and &videoOnly at the end of the line: &sourceId=2&simulcastId&videoOnly

```md
RTMP KEY/STREAM for the first stream will look like using 1080p    

	{StreamName}?token={Token}&sourceId=1&simulcastId

RTMP KEY/STREAM  for the second stream will look like using 720p

	{StreamName}?token={Token}&sourceId=2&simulcastId&videoOnly

RTMP KEY/STREAM for the third stream will look like using 480p

	{StreamName}?token={Token}&sourceId=3&simulcastId&videoOnly


```