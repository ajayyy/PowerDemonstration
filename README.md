# Power Usage Demonstration

Cool online demo to show how load balancing is necessary in our power grids. An alternative to a kahoot.

Presenter shows this website, the people watching can visit the website shown on screen and simulate turning on and off appliances to change the energy usage.

![](https://dl.dropboxusercontent.com/s/xcjxi3b2734pluu/screenshot.png)

# Setup

Make sure node.js is installed.

Clone this repo.

Install dependencies:
`npm install`

Run with:
`npm start`

Server will be available on `localhost` and the viewer will be on `localhost/viewer`. Port forward and setup a domain as needed.

### SSL

SSL support is built in, just add your keys to a new folder called `certificates` as `certificate.crt` and `private.key`.

If you do not want SSL (https), comment out that line in `index.js`.

### Custom domain

The viewer shows what domain to visit to participate. If you are setting this up yourself, you can go into `viewer.html` and edit that line.

# License

MIT, by Ajay Ramachandran 2019

Charts created with `Chart.js`.
Built with `Node.js`.
