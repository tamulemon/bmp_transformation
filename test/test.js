var readBMP = require('../read_bmp_asyn_export.js').readBMP,
		callback = require('../read_bmp_asyn_export.js').callback
		buildImage = require('../convert_buffer_to_bmp.js'),
		expect = require('chai').expect,
		dest = './testimg.bmp',
		fs = require('fs');

describe('updated test', function() {
	
	// run read file before testing cases
	var imgObj = {};
	before(function(done) {
		readBMP(function(err, data) {
			imgObj = callback(err, data);
			done();
		});
	});
	
	describe('read_bmp_asyn_export.js', function() {
		it('will read the bmp file, convert to an object and export it', function() {
			expect(imgObj.type).equal('BM');
		});
	});
	
	describe('convert_buffer_to_bmp', function() {
		it('will write a js object back to the bmp file', function() {
			buildImage(dest, imgObj);
			fs.exists('/Users/mengchen/CF_Homework/bim_transformation_meng/testimg.bmp', function (exist) {
				console.log(exist);
				expect(exist).to.be.true;
				});
		});
	});
});
