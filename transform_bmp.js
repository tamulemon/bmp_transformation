var readBMP = require('./read_bmp_asyn_export.js').readBMP;
var callback = require('./read_bmp_asyn_export.js').callback;
var writeImg = require('./convert_buffer_to_bmp.js');
var filename1 = './testimg_greyscale.bmp';
var filename2 = './testimg_brightness.bmp';
var fs = require('fs');

var greyScale = require('./transformation.js').greyScale;
var brightness = require('./transformation.js').brightness;

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

readBMP(function(err, data) {
	var imgObj = callback(err, data);
	
	// create a copy of the imageobj
	var imgObj2 = clone(imgObj);
	
	console.log(imgObj.pixels[100]);
//	greyScale(imgObj.pixels);
//	console.log(imgObj.pixels[20]);
//	writeImg(filename1, imgObj);
//	
	console.log(imgObj2.pixels[100]);
	brightness(imgObj2.pixels);
	console.log(imgObj2.pixels[100]);
	writeImg(filename2, imgObj2);
});
