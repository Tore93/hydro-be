var cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('running a task every two minutes');
});