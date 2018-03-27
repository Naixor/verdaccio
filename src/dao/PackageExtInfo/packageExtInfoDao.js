/**
 * @file src/dao/PackageExtInfo/packageExtInfoDao.js
 * @author @Naixor (qihongye@bytedance.com) $(date)
 */

import { PackageExtInfoModel } from './packageExtInfoModel';

export function getPackageAllVersionExtInfo(packageName) {
  return PackageExtInfoModel.find({
    name: packageName
  }).exec()
}

export function getPackageExtInfoWithVersion(packageName, version) {
  return PackageExtInfoModel.findOne({
    name: packageName,
    version
  }).exec()
}

export function increasePackageDownloadByVersion(packageName, version) {
  return PackageExtInfoModel.findOneAndUpdate({
    name: packageName,
    version
  }, {
    $inc: { download_times: 1 }
  }, {
    new: true,
    upsert: true
  })
}
