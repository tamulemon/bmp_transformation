Run interface: >> node transform_bmp.js -- written by Meng Chen, Shawn Fiske and David Schneider
this will write 2 bmp images into the current working dir: 'testimg_greyscale.bmp', and 'testimg_brightness.bmp'

current version only works on non-palette image file

> read_bmp_async_export.js-- written by Meng Chen and Shawn Fiske
takes a bmp format image and return a js object with some important properties, such as size/imageHeight/whether contains palette data. This module also export the returned object async.

> transformation.js -- written by Shawn Fiske and David Schneider
takes the pixel array from the returned object and manipulate it. Currently contains to function. 
- brightness: change the brightness of the image
- greyScale: change the image to black-n-white

> convert_buffer_to_bmp.js -- written by Shawn Fiske
takes an object with the format that is the same as the object returned by read_bmp_async_export.js and write it back to a bmp file

> test.js -- written by Meng Chen
contains the test for the two main module: read_bmp_async_export and convert_buffer_to_bmp. Run the test will create a new img in the current working dir 'testimg.bmp'
