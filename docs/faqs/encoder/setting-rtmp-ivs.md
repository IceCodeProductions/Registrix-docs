---
sidebar_position: 1
---

# Encoder Settings for Registrix IVS

The URL information for the encoder using the Registrix IVS channels is found in the RegistrixVive.

After logging into Registrix Vive, click on your Profile located to the upper right corner and select from the drop down menu **Broadcast**.

The next window that appears will contain the RTMPS or RTMP information and the Stream Key.  This information must be entered 100% exactly the same or the stream will fail.

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