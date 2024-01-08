const fromHexString = (hexString) =>
  new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

const toHexString = (bytes) =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");

const padWithLeadingZeros = (num, totalLength) => {
  if (num > 0 || num < 9) return String(num).padStart(totalLength, "0");
  return num;
};

const upperCaseString = (value) => value.toUpperCase();
const lowerCaseString = (value) => value.toLowerCase();

module.exports = {
  fromHexString,
  toHexString,
  padWithLeadingZeros,
  upperCaseString,
  lowerCaseString,
};
