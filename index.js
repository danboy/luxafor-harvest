var Luxafor = require("luxafor-api")
Harvest = require("harvest"),
config = require("./config"),
harvest = new Harvest({
  subdomain: config.harvest.subdomain,
  email: config.harvest.email,
  password: config.harvest.password
});

device = new Luxafor();

harvest.TimeTracking.daily({of_user: config.harvest.user}, function(err, entries){
  var busy = false;
  entries.day_entries.forEach(function(entry, i){
    if(entry.timer_started_at){
      busy = true;  
    }
    if(i+1 === entries.day_entries.length){
      color = (busy) ? "#990000" : "#004400"; 
      device.setColor(color);
    }
  });
});
