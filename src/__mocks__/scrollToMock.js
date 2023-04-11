// scrollToMock.js
const scrollToMock = () => {
  global.scrollTo = jest.fn();
};

module.exports = scrollToMock;
