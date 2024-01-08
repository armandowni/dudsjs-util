const slicedData = (data, start, end) => data.slice(start, end);
const popData = (data) => data.pop();
const pushData = (data, value) => data.push(value);

module.exports = { slicedData, popData, pushData };
