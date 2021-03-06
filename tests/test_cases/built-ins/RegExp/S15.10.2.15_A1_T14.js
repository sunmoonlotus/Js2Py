// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The internal helper function CharacterRange takes two CharSet parameters A and B and performs the
    following:
    If A does not contain exactly one character or B does not contain exactly one character then throw
    a SyntaxError exception
es5id: 15.10.2.15_A1_T14
description: >
    Checking if execution of "/[\nd-G]/.exec("a")" leads to throwing
    the correct exception
---*/

//CHECK#1
try {
  $ERROR('#1.1: /[\\nd-G]/.exec("a") throw SyntaxError. Actual: ' + (new RegExp("[\\nd-G]").exec("a")));
} catch (e) {
  if((e instanceof SyntaxError) !== true){
    $ERROR('#1.2: /[\\nd-G]/.exec("a") throw SyntaxError. Actual: ' + (e));
  }
}
