---
sidebar_position: 1
---

# Encoder Settings for Registrix IVS

The URL information for the encoder using the Registrix IVS channels is found in the Registrix Vive.  The Registrix IVS live streaming service with the correct settings will allow a 2 to 7 second latency from the source to the player.

After logging into Registrix Vive, click the Account menu option located to the upper right corner and select and then click on Broadcaster.

The next window that appears will contain the RTMPS or RTMP information and the Stream Key.  This information must be entered 100% exactly the same or the stream will fail.

## Video On Demand
Registrix IVS does not contain any saving of stream. You must capture the video at your source for any video on demand.


## Settings
You only need to provide the highest possible resolution 1080p or 720p and Registrix IVS service will automatically transcode for lower resolutions.

Regisitrix IVS service requires that you use the following:

```md
Setting -> Value
---
Keyframe Interval -> 2
Encoder -> x264
Tune -> zerolatency
Profile -> main
CPU Usage -> veryfast
Rate Control -> CBR
Bitrate ->	720p - upto 4500 kbps
 	        1080p - upto 8500 kbps
FPS -> 30 or 60
Audio -> AAC
Audio BitRate -> up to 320 kbps
Sample Rate -> 44.1 khz or 48 khz
```

You only need to provide ONE Stream