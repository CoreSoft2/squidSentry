var redis = require('redis').createClient();
var name = 'rules';
var prefix = 'sentry';

var transaction = redis.multi();
var items = ['192.168.43.45','192.168.0.1','qwe34'];

//for (var i in items){
//    console.log(items[i]);
//    redis.sismember(prefix + ':ips:admins', items[i], function(err, reply) {//
//
//        console.log(reply);
//    });


//}

var tmp=[];

transaction.keys(prefix + ':ips*');

transaction.exec(function (err, replies) {
    //console.log(err);
    //console.log(replies);
    tmp.push(replies);
});

console.log(tmp);

for( var r in tmp){
    console.log(tmp);
}

//for (var i in items){
//    console.log(items[i]);
//    transaction.sismember(prefix + ':ips:admins', items[i]);
//}

transaction.exec(function (err, rep) {
    console.log(rep);
});


//for(var i in items){
//    for(var x in lists){
//        transaction.sismember(this.prefix + ':category:' + lists[x], items[i]);
//        tmp.push(lists[x]);
//    }
//}



//redis.sismember(prefix + ':ips:*', 0, -1, function(err, elements){
    //var transaction = redis.multi();

    //transaction.get(element);

    //console.log(transaction);
//    console.log(elements.length);

//});