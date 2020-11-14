const sensor = require('ds18b20-raspi');

const tempC = sensor.readSimpleC();
console.log(`${tempC} degC`);

// round temperature reading to 1 digit
//const tempC = sensor.readSimpleC(1);
//console.log(`${tempC} degC`);


// async version
sensor.readSimpleC((err, temp) => {
	if (err) {
		console.log(err);
	} else {
	console.log(`${temp} degC`);
	}
});

setInterval( 
	() => {console.log(sensor.readSimpleC());} 
	, 1000
);
// round temperature reading to 1 digit
//sensor.readSimpleC(1, (err, temp) => {
//	if (err) {
//		console.log(err);
//	} else {
//	console.log(`${temp} degC`);
//	}
//});
