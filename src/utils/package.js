/**
 * 检测包名是否是private的
 *
 * @param {any} packagename
 * @returns
 */
function checkPackageIsPrivate(packagename) {
  const special_rules = ['@lark', 'eslint-config'];
  let name_prefix = '';
  for (let i = 0, len = special_rules.length; name_prefix = special_rules[i], name_prefix; i++) {
    if (packagename.indexOf(name_prefix) === 0) {
      return true;
    }
  }
  return !!packagename && /^(@\w+\/)?byted-/.test(packagename);
}

module.exports.checkPackageIsPrivate = checkPackageIsPrivate;
