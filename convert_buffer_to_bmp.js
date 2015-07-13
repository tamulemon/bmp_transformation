var fs = require('fs');

exports = module.exports = function buildImage(filename, imgObj){

  var buffer = imgObj.dataBuffer; 
  var start = imgObj.imageStart;
  var bufferSize = imgObj.bufferSize;
  var pixelArray = imgObj.pixels; 


  var pixelCount = 0;
  for (var i = 0; i < pixelArray.length; i++ ) {
    for(var j = 0; j < 3; j++){

      if(pixelCount > bufferSize - (start + 2) ){
        break;
      }
 
      buffer.writeInt16LE(pixelArray[i][j], +(start + pixelCount));
      pixelCount++;
    }
  }
	
  writeBmpFile(filename, buffer);

}

writeBmpFile = function(filename, buffer){
    fs.writeFile(filename, buffer, 'binary', function(err){
      if (err) throw err
      console.log('File saved.')
    });
 }


 

