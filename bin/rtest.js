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

redis.getCats(function(res){
   redis.getIpByCats(res, testip, function(match) {

       if(match != false){
           var ipGroup = match;
       }
       else{
           ipGroup = 'default';
       }

       redis.searchRulebyCat(ipGroup, function(ruleGroup) {
           //console.log(ruleGroup[0]);
           if(ruleGroup[0] === 1){
               redis.GetRulebyCat(ipGroup, function(res) {
                   console.log(ipGroup + ' : '+ res);

               });
           }
           else{
               console.log('err');
           }




       });


    });
});











