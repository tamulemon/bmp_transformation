var fileDir = './non-palette-bitmap.bmp';
var fs = require('fs');

var callback = function(err, data){
	var imageSpecs = {};
	imageSpecs.type = data.toString('ascii', 0, 2);
	imageSpecs.size = data.readUInt32LE(2); 
	imageSpecs.imageStart = data.readUInt32LE(10); 
	imageSpecs.imageWidth = data.readUInt32LE(18); 
	imageSpecs.imageHeight = data.readUInt32LE(22); 
	imageSpecs.colorDepth = data.readUInt32LE(28); // 24 bits per pixel or 3 bytes (no alpha value?) RGB24
	imageSpecs.numColorInPalette = data.readUInt32LE(46);
	imageSpecs.bufferSize = data.length;
	imageSpecs.dataBuffer = data;

	var pixelArrayBuffer = Array.prototype.slice.call(data, (data.readUInt32LE(10)));
	var pixelArray = [];

	for ( var i = 0; i < pixelArrayBuffer.length; i += 3 ) {
			pixelArray.push([data.readUInt8(pixelArrayBuffer[i]), data.readUInt8(pixelArrayBuffer[i+1]), data.readUInt8(pixelArrayBuffer[i+2])]);
		}
	imageSpecs.pixels = pixelArray;
	return imageSpecs;
};


exports.readBMP = function (callback) {
  fs.readFile(fileDir, function (err, data) {
    callback(err, data);
  });
};

exports.callback = callback;