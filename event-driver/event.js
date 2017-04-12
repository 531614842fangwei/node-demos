/**
 * Created by weifang on 4/11/2017.
 */
var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter;
life.setMaxListeners(11);
//add Listener
life.on('customer',function(arg){
    console.log(arg);
});
life.on('customer',function(arg){
    console.log(arg+"1");
});
life.on('customer',function(arg){
    console.log(arg+"2");
});
life.on('customer',function(arg){
    console.log(arg+"3");
});
life.on('customer',function(arg){
    console.log(arg+"4");
});
life.on('customer',function(arg){
    console.log(arg+"5");
});
life.on('customer',function(arg){
    console.log(arg+"6");
});
life.on('customer',function(arg){
    console.log(arg+"7");
});
life.on('customer',function(arg){
    console.log(arg+"8");
});
life.on('customer',function(arg){
    console.log(arg+"9");
});
life.on('customer',function(arg){
    console.log(arg+"10");
});
life.emit('customer','This is a customer event');