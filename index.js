/**
 * @param {String} swaggerPath
 */
const swagger2path = (swaggerPath) => {
  const re = new RegExp('{(.*?)}', 'g');
  return swaggerPath.replace(re, ':$1');
};


module.exports = swagger2path;