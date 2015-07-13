var readBMP = require('./read_bmp_asyn_export.js').readBMP;
var callback = require('./read_bmp_asyn_export.js').callback;
var writeImg = require('./convert_buffer_to_bmp.js');
var filename1 = './testimg_greyscale.bmp';
var filename2 = './testimg_brightness.bmp';
var fs = require('fs');

var greyScale = require('./transformation.js').greyScale;
var brightness = require('./transformation.js').brightness;

//function clone(obj) {
//    if (null == obj || "object" != typeof obj) return obj;
//    var copy = obj.constructor();
//    for (var attr in obj) {
//        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
//    }
//    return copy;
//}

readBMP(function(err, data) {
	var imgObj = callback(err, data);

	var pixelArrayOriginal = [];
	for (var i = 0; i < imgObj.pixels.length; i++) {
		pixelArrayOriginal.push(imgObj.pixels[i]);
	}
	
	// brightness transformation and write
	brightness(imgObj.pixels);
	writeImg(filename2, imgObj);
	
	imgObj.pixels = pixelArrayOriginal;
	
	//greyScale tranformation and write
	greyScale(imgObj.pixels);
	writeImg(filename1, imgObj);
});
