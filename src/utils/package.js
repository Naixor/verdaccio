/**
 * 检测包名是否是private的
 *
 * @param {any} packagename
 * @returns
 */
function checkPackageIsPrivate(packagename) {
  return !!packagename && /^(@\w+\/)?byted-/.test(packagename);
}

module.exports.checkPackageIsPrivate = checkPackageIsPrivate;
