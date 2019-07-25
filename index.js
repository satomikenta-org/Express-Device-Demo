const app = require('express')();
const device = require('express-device');

app.use(device.capture());
device.enableDeviceHelpers(app);

app.get('/', (req, res) => {
  if (res.locals.is_phone) {
    res.send('You are using Mobile Phone');
  } else if (res.locals.is_desktop){
    res.send('You are using PC')
  } else if (res.locals.is_modibe) {
    res.send('You are using Tablet')
  } else {
    res.send('You are using Bot or something');
  }
})

app.listen(3000);