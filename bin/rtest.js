#!/usr/bin/env node

var Redis   = require('../lib/sources/redis');

var testip = '192.168.43.45';

rediscnf = {
    host: "127.0.0.1"
};

config = {
    redis: rediscnf
};


var redis = new Redis(rediscnf);
this.redis = redis;

this.redis.getCats(function(res){
    redis.getIpByCats(res, testip, function(match) {
        console.log(match);

    });
});











