# SocketChat - simple chat app using node.js, socket.io and AngularJS

### Backend Stack
<ul>
  <li>node.js</li>
  <li>socket.io</li>
  <li>Express</li>
  <li>underscore</li>
  <li>ejs</li>
</ul>

### Frontend Stack
<ul>
  <li>AngularJS</li>
  <li>AngularUI</li>
  <li>Bootstrap (Superhero theme)</li>
</ul>

# Functionality

<ul>
  <li>Users can join the chat server after picking a username (usernames have to be unique per user, alternative usernames are generated as well)</li>
  <li>Once connected, you can create a room (roomnames again have to be unique)</li>
  <li>User agent and geolocation are both automatically detected (geo location has to be approved in the browser first of course)</li>
  <li>People can start chatting with each other once they are ina a room</li>
  <li>Chat history is also displayed, by default the last 10 messages are shown (this setting can be changed)</li>
  <li>'who is typing' feature is also enabled</li>
</ul>

# Setup and configuration for Deploying to RH Openshift (will vary for Heroku and others...)

Make sure that you update <strong>app.js</strong> at the backend with your own IP address or hostname:
<pre>app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
</pre>

Then specify port to listen for socket.io by updating <strong>public/js/services.js</strong> to:

<pre>var socket = io.connect();</pre>
(the IP address or host name can be blank or equal to what you set consistent with the line above.)

To install the application execute <code>npm install</code>. This will also automatically install all frontend dependencies using bower.

# Features in Progress

Working on the following for next version:

<ul>
  <li>Adding WebRTC Video Chat Support</li>
  <li>Making UI Improvements</li>
  <li>Ability for User's to Specify Settings</li>
  <li>Private Chatrooms/Messages</li>
  <li>Connect to MongoDB for Long-Term Storage</li>
</ul>
