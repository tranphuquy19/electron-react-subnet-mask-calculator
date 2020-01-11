const Netmark = require('netmask').Netmask;

function convertOctetsToBinary(octets) {
  let octetsBinary = octets.map(item => Number(item).toString(2));
  return octetsBinary.join('.');
}

function calculateSubnetMask(ip, preFixSize) {
  const temp = new Netmark(`${ip}/${preFixSize}`);
  return {
    ...temp,
    baseBinary: convertOctetsToBinary(temp.base.split('.')),
    maskBinary: convertOctetsToBinary(temp.mask.split('.')),
    broadcastBinary: convertOctetsToBinary(temp.broadcast.split('.')),
    firstBinary: convertOctetsToBinary(temp.first.split('.')),
    lastBinary: convertOctetsToBinary(temp.last.split('.')),
    availableHost: temp.size - 2
  };
}

function calculate(state) {
  const ip = `${state.octet1}.${state.octet2}.${state.octet3}.${state.octet4}`;
  const preFixSize = state.preNumber;
  return calculateSubnetMask(ip, preFixSize);
}

export { convertOctetsToBinary, calculateSubnetMask, calculate };
