export default function (key, block) {
  var accum = '';
  var context = block.contexts[0];
  var total = typeof key === 'number' ? key : context.get(key);

  for (var i = 1; i <= total; i++) {
    accum += block.fn(i);
  }

  return accum;
}
