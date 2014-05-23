var Redis= require('../lib/sources/redis');

this.redis = Redis(redis);

redis.getCats(function(res){
    console.log('lastres: ' + res)
});

