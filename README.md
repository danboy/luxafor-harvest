# Luxafor-Harvest

A simple script to change Luxafor based on an active harvest timer.

## Installation

### Clone repo

```
$ git clone git@github.com:onedesign/luxafor-harvest.git
```

### Install dependencies

```
$ npm install
```

### Create config.json

```
$ cp config.json.sample config.json
```

### Edit config.json with your info.

```
{
  "harvest": {
    "subdomain": "yourharvestsubdomain",
      "email": "harvestemail@example.com",
      "password": "harvestpassword",
      "user": 123456  // this can be found at the end of your harvest time tracking url eg: https://yourharvestsubdomain.harvestapp.com/time/day/2016/08/15/123456
  }
}
```

### Setup a cron to run the script periodically

```
$ crontab -e
```

Here's an example crontab to check for a timer every minute.

```
* * * * * /usr/local/bin/node /Users/username/Projects/luxafor/harvest/index.js
```

Once that's up you should be all set. Plug in you luxafor and watch it change.
