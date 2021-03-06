// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-11
description: >
    Object.defineProperties - 'P' is inherited accessor property
    without a get function (8.12.9 step 1 )
includes: [runTestCase.js]
---*/

function testcase() {
        var proto = {};
        Object.defineProperty(proto, "prop", {
            set: function () { },
            configurable: false
        });
        var Con = function () { };
        Con.prototype = proto;

        var obj = new Con();

        Object.defineProperties(obj, {
            prop: {
                get: function () {
                    return 12;
                },
                configurable: true
            }
        });
        return obj.hasOwnProperty("prop") && obj.prop === 12;

    }
runTestCase(testcase);
