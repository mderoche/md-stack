/**
  *  md-stack - v1.0.0
  *  Copyright (c) 2015 Mike Deroche
  *  Licensed MIT
  */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Stack = factory();
  }
})(this, function () {
  var err  = {
    full: new Error('STACK FULL')
  };

  var Stack = function (opts) {
    this.stack = [];
    for (var k in opts) {
      this[k] = opts[k];
    }
  };

  Stack.prototype.capacity = function (cap) {
    if (cap) {
      this.cap = cap;

      var over = this.size() - this.cap;
      while (over--) {
        this.pop();
      }

      return this;
    }
    return this.cap;
  };

  Stack.prototype.push = function (o) {
    if (this.full()) {
      if (this.yell) {
        throw err.full;
      }
      return this;
    }

    this.stack.push(o);
    return this;
  };

  Stack.prototype.pop = function () {
    return this.stack.pop();
  };

  Stack.prototype.peek = function () {
    return this.stack[this.stack.length - 1];
  };

  Stack.prototype.indexOf = function (o) {
    return this.stack.indexOf(o);
  };

  Stack.prototype.clear = function () {
    this.stack = [];
    return this;
  };

  Stack.prototype.empty = function () {
    return (this.size() === 0);
  };

  Stack.prototype.full = function () {
    return (this.size() >= this.capacity());
  };

  Stack.prototype.size = function () {
    return this.stack.length;
  };

  return Stack;
});
