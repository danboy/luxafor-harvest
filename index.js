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
  console.log('ERROR', err, "\n\nENTRIES", entries);
  if(!entries.day_entries) return;
  var color = config.colors.available;
  entries.day_entries.forEach(function(entry, i){
    if(entry.timer_started_at){
      color = config.colors.working; 
    }
    for(var key in config.colors){
      if(entry.notes.indexOf("("+key+")") > -1){
	color = config.colors[key];
      }
    }
    if(i+1 === entries.day_entries.length){
      device.setColor(color);
    }
  });
});
