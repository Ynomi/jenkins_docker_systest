'use strict';
const chai = require('chai');
const assert = chai.assert;
const request = require('request');
const cheerio = require('cheerio');

// テスト本体
describe('Web システムテスト', async function() {
    it('Access with GET Method return 200', async function() {
        request.get({url:'http://localhost:3000'}, function(err,response,body){
            assert.equal(response.statusCode, 200); 
        });
    });

    it('Access with POST Method return 200', async function() {
        request.post({url:'http://localhost:3000'}, function(err,response,body){
            assert.equal(response.statusCode, 200); 
        });
    });

    it('Testing input num1:2 num2:3', async function() {
        request.post({url:'http://localhost:3000', form: {num1:2, num2:3} }, function(err,response,body){
            const $ = cheerio.load(body);
            const result = $('#result').text();
            assert.equal(result,6);
        });       
    });

    it('Testing the output of a formula input num1:2 num2:3', async function() {
        request.post({url:'http://localhost:3000', form: {num1:2, num2:3} }, function(err,response,body){
            const $ = cheerio.load(body);
            const outStr = $('#calc').text();
            assert.equal(outStr,'2 X 3 = ')
        });
    });
});
