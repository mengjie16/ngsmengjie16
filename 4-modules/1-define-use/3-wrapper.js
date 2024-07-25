//function(exports,module,require,__filename,__dirname){
console.log(arguments);
exports.a= 42;
module.exports.b=37;

exports=()=>{}//not ok
module.exports =()=>{}//ok
//return module.exports
//}(module.exports,)
// exports is an alias to module.exports