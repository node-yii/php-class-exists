var class_exists = function(identifier) {
   return eval("typeof " + identifier) === "function";
}

module.exports = class_exists;
