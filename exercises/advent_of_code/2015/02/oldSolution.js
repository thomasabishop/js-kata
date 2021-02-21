export default function (input) {
  const dimensions = new Array();
  const totalRibbon = new Array();
  const ints = (str) => str.split('x');
  const sumInts = (x, y) => x + y;

  const calculateRibbonLength = function (w, h, l) {
    w = parseInt(w);
    h = parseInt(h);
    l = parseInt(l);
    let wrap = 2 * (w + h);

    return (wrap += w * h * l);
  };

  for (const inp of input) {
    dimensions.push(calculateArea(...ints(inp)));
    totalRibbon.push(calculateRibbonLength(...ints(inp)));
  }
  return `${dimensions.reduce(sumInts)}, ${totalRibbon.reduce(sumInts)}`;
}
