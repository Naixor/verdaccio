/**
 * @file src/models/packageExtInfoSchema.js
 * @author @Naixor (qihongye@bytedance.com) $(date)
 */

 import mongoose from 'mongoose';

 const PackageExtInfoSchema = new mongoose.Schema({
   name: { type: String, index: true },
   version: { type: String },
   download_times: { type: String }
 }, {
   _id: false
 })

PackageExtInfoSchema.index({
  'name': 1,
  'version': 1
})

const PackageExtInfoModel = mongoose.model('PackageExtInfo', PackageExtInfoSchema, 'PackageExtInfo');

export {
  PackageExtInfoSchema,
  PackageExtInfoModel
}
