
QUnit.test('Testing calculate function with several sets of inputs', function (assert) {
  assert.equal(calculate(100, 10), 90, 'Tested with two integers');
  assert.equal(calculate(1005.87, 25), 754.4025, 'Tested with one decimal number');
  assert.equal(calculate(1005.87, 25.5), 749.37315, 'Tested with two decimal numbers');
  assert.equal(calculate(0 , 0), 0, 'Tested with zeros');
  assert.equal(isNaN(calculate("sdfs" , "sdfsd")), true, 'Tested with strings');
});

