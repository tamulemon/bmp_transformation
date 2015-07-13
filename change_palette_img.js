// change the palette color of imag with palette version. swap blue and red channel. Work directly off of buffer.
var fs = require('fs'),
		buffer = require('buffer');
		
fs.readFile('./palette-bitmap.bmp', function(err, data) {
	var imageSpecs = {};
	imageSpecs.type = data.toString('ascii', 0, 2);
	imageSpecs.size = data.readUInt32LE(2); 
	imageSpecs.imageStart = data.readUInt32LE(10); 
	imageSpecs.imageWidth = data.readUInt32LE(18); 
	imageSpecs.imageHeight = data.readUInt32LE(22); 
	imageSpecs.colorDepth = data.readUInt32LE(28); 
	imageSpecs.numColorInPalette = data.readUInt32LE(46);
	imageSpecs.paletteColor1 = [data.readUInt8(54), data.readUInt8(55),data.readUInt8(56),data.readUInt8(57)];
	imageSpecs.paletteColor28 = [data.readUInt8(54+27*4), data.readUInt8(54+27*4+1), data.readUInt8(54+27*4+2), data.readUInt8(54+27*4+3)];
	imageSpecs.paletteColor256 = [data.readUInt8(54+255*4), data.readUInt8(54+255*4+1), data.readUInt8(54+255*4+2), data.readUInt8(54+255*4+3)];
	imageSpecs.bufferSize = data.length;
	imageSpecs.pixel1 = data.readInt8(imageSpecs.imageStart);
	console.log(imageSpecs);
	
	// swap color changes for all the colors stored in palette
	for ( var i = 54; i < imageSpecs.imageStart; i += 4 ) {
		// swapping the blue and red channels
		var temp3 = data[i];
		data[i] = data[i+2];
		data[i+2] = temp3;
	}
	
	//change the pointer of each pixel
	
	 // call the write buffer function
	writeBuff(data);
	
});

// write buffer back to the bmp file
function writeBuff(buff) {
	fs.writeFile('image_palette_transform.bmp', buff, 'binary', function(err){
  	if (err) throw err;
  	console.log('File saved.');
	})
}

