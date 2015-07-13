var numColorChannels = 3;
// change image to greyscale

exports.greyScale = function(pixels) {
  for ( var i = 0; i < pixels.length; i++) {
    var blue = pixels[i][0];
    var green = pixels[i][1];
    var red = pixels[i][2];

    var calGreyValue = Math.floor((blue + green + red)/ pixels[i].length);


    pixels[i][0] = calGreyValue;
    pixels[i][1] = calGreyValue;
    pixels[i][2] = calGreyValue;
  }
  return pixels;
};

// change image's brightness
exports.brightness = function(pixels) {
  var newPixels = [];
  for (var i = 0; i < pixels.length; i++) {
    newPixels[i] = [];
    for (var ch = 0; ch < numColorChannels; ch++) {
      newPixels[i][ch] = Math.floor(scale(pixels[i][ch], 0.3, 200));
    }
  }
  return newPixels;
};

function scale(value, scale_factor, max) {
  return Math.min(value * scale_factor, max || 255);
};