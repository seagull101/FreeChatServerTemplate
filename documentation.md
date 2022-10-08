# Server Documentation
### Server:
The server which holds everything.
 Property         | Description    | Type |
|--------------|-----------|------------|
| ServerName | Name of the server.      | String      |
| ServerDesc | Describes the server and it's purpose.      | String      |
| ServerWarning | A disclaimer/warning for the server. Will not display a warning if null.      | String      |
| MediaIcon | Media URL for the server icon.      | String      |
| TextChannels | See "TextChannel".      | JSON Object Array     |
| Chatrooms | See "Chatroom".      | JSON Object Array     |
<br />
<br />
<br />
<br />

### TextChannel:
A group of channesl for communication via text only.
 Property         | Description    | Type |
|--------------|-----------|------------|
| Name | Name of the channel.      | String      |
| ID | Unique Numerical Identifier for the channel      | Integer     |
| Description| Describes the channel.   | String      |
| Blacklist | See "Blacklist".      | JSON Object Array      |
| Messages | See "Message".      | JSON Object Array     |
| KillDate| Date until channel deletes itself, if null the channel is permanent.| String(Date)      |
### Blacklist:
An object which determines who is banned from using that channel/server for how long.
 Property         | Description    | Type |
|--------------|-----------|------------|
| UserID | ID of the user who is banned from this channel.     | Integer     |
| Reason| Reason displayed to the user why they are forbidden from entering this channel.   | String      |
| BanDate| Date until the user can join again, if null the ban is permanent.| String(Date)      |
| Viewable| Determines if the user can still view the channel, but not post. If false, the user will not see messages in the channel.| Boolean     |

### Message:
An object which stores a message and it's data.
 Property         | Description    | Type |
|--------------|-----------|------------|
| Content| The text of the message.  | String      |
| UserID | ID of the author who sent this message.     | Integer     |
| ID | Unique Numerical Identifier for this message.     | Integer     |
| Flagged| Makes image invisible, except for permission level higher than 5.| Boolean     |
| Passcode | Passcode set by author to view this message.    | Integer     |
| MarkedImportant| This message must be read before sending messages in the channel/server. A button must be pressed for them to have "read" the message.| Boolean     |
| ServerAD| Adds an AD sticker. | Boolean     |
| Media| Media to load in the message.  | String      |
| TimeStamp| Date the message was sent.| String(Date)      |
| ViewList| Array of UserIDs who viewed the message. | Integer Array     |
| KillDate| Date until channel deletes itself, if null the message is permanent.| String(Date)      |

<br />
<br />
<br />
<br />

### Chatroom:
A group of voice chatroom where people can talk.
 Property         | Description    | Type |
|--------------|-----------|------------|
| Name | Name of the chatroom.      | String      |
| ID | Unique Numerical Identifier for the chatroom      | Integer     |
| Description| Describes the channel.   | String      |
| Blacklist | See "Blacklist".      | JSON Object Array      |
| KillDate| Date until chatroom deletes itself, if null the channel is permanent.| String(Date)      |
| MediaImage | Image of the chatroom      | String      |
| ChatLevel | Level required to chat      | Int      |
| JoinLevel | Level required to join      | Int      |
| KickTime | Time before the user is automatically kicked. The user is never kicked if null.      | Int      |
|Locked|Gets if the room is locked to everyone.| Boolean|
| ChatroomUsers | Array representing who used the chatroom. See "ChatroomUser" | JSON Object Array.|
### ChatroomUser:
 Property         | Description    | Type |
|--------------|-----------|------------|
| Online | Gets if they are in the chatroom.      | Boolean     |
| UserID | The User's ID.      | Integer     |
| UsageTime | Time user has spent on this room in total.      | Integer     |
| ChatroomReport | Reports against the user. See "ChatroomReport" | JSON Object Array.|
### ChatroomReport:
 Property         | Description    | Type |
|--------------|-----------|------------|
| Reason | Why this report was filed      | String     |
| Severity | Severity reported from admins who have reviewed it. -1: Useless, 0: Not-Severe, 1: Warning, 2: Severe, NULL: Unviewed       | Integer     |
| IssuerID | The ID from who sent the report    | Integer     |
| ReportMedia |Media URL which is for the report| String |
| AdminResponse | Response from admin which will display to the issuer and the user.      | String     |

---
<br />


# User Documentation
Each user of a server is assigned their own userid on joining. It also adds to the servers user database which stores:
User 0 defaults to anyone who isn't in the user database.
 Property         | Description    | Type |
|--------------|-----------|------------|
| Name | Their Server Username.       | String     |
| Email | Their Email which can be used to prove their identity.     | String     |
|PermissionLevel|The permission level of the user, which allows them to do more stuff, the higher the number.|Integer|
