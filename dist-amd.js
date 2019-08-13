define(function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Greeter =
  /*#__PURE__*/
  function () {
    function Greeter() {
      _classCallCheck(this, Greeter);
    }

    _createClass(Greeter, [{
      key: "greet",
      value: function greet(name) {
        console.log("Hello ".concat(name, "!"));
      }
    }]);

    return Greeter;
  }();

  var a = [1, 2, 3].map(function (n) {
    return n + 1;
  });
  console.log(a);
  var greeter = new Greeter();
  greeter.greet('Gyozo');

});
//# sourceMappingURL=dist.js.map
