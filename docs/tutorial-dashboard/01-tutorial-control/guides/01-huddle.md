---
sidebar_position: 1
id: huddleroom
title: Huddle Room Moderator
---

# Huddle Room Moderator

The Huddle Room moderator features of Registrix are performed by one person.

## Operational Design

The huddle room service is a WebRTC service that allows the attendees to join rooms and share their webcam and microphone and have a discussion.  The huddle room does not have a primary speaker and there are no controls about any type of video switching.  The Huddle Room service is similiar to an open room of 15 people and everyone just talking together.

Huddle Rooms have a maximum number of attendees that you can set.  This configuration is found in the Manage Event settings **[Huddle Room Services](/tutorial-events/Features/huddle-room)**.

If the attendee created a room that room will be active for 4 hours.  After 4 hours the room will be removed by the system automatically.  The Moderator can create a room and it will remain active until the moderator disables the room.

Huddle rooms can be setup by the administrator to allow the attendees to setup rooms or the Moderator can setup all the rooms that the attendees can select.

A Huddle room can be setup with a Lock Code.  This lock code is a 4 digit number that can be shared with the attendees to allow for a private room. The attendee cannot enter the room if they don't know the lock code.


## Procedures

As the administrator there is a moderator ability for every room.  Every Room has a different URL in order to log into that room and moderate what is occuring in the room.

### Create a Room

To create a room, type a name for the room in the "Search For Room" text box.  The click on the **Create** button.  This will then display a drop down where you can create an open room or a locked room.  If you create a locked room you must set a 4 number code. You cannot change this number once it is set.

The order of the rooms are based on when they are created, not based on the name.  So if you wanted Room 1 on the top, then start with Room 99, then Room 98, till you have Room 1 as the last room created.

### Clear Counts in Rooms

The attendees will see counts as of how many people have joined a room. You can reset this back to zero at any time by clicking the **RESET COUNTS** button.  This is sometimes needed because the moderator transfered everyone to a different event while the attendee was in the room.  Therefore the browser reloaded to the new room and the attendee exit code never occured.

### Disable Room

At any time the moderator can disable a room. Once the room is disabled the attendees will not see that room.  Attendees are not kicked out of that room unless the moderator joins the room and kicks the attendees. The room will still appear on the Moderator view in case you have to access the room.

### Join a Room

Each room that is created has a different URL that is used to join the room as a Moderator.  The Moderator can then kick the attendees out of the room.  To join the room click on the ***JOIN AS MODERATOR** button.  A new tab will open that you can then give yourself a name, such as "Moderator" and the click on the **SUBMIT** button.

If you want to allow someone else to join this room as a moderator, copy the URL and you can then email/text/IM this link to the other Moderator.

### View Attendees

Clicking on the **VIEW ATTENDEES** link will display a list of the accounts that have currently access this room. This information does not reflect who is currently logged in but a listing of accounts that have accessed the room.


## Limitations

The Registrix system has no way to auto-assign attendees to rooms.  Huddle rooms have no permission settings in terms of group management.  If you want to have group management duplicate the event and use the Group Permissions to the event to allow only certain attendees access.

While attendees are in the huddle room the interactivity tabs are not accessable via mobile devices due to screen size.
