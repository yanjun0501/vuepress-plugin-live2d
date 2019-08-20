/*
 * @Descripttion: 
 * @version: 
 * @Author: yanjun
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: yanjun
 * @LastEditTime: 2019-08-19 09:42:02
 */
const { resolve } = require("path");

module.exports = (options = {}, context) => ({
  define() {
    const MODEL_NAME = options.modelName;
    return {MODEL_NAME}
  },

  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  globalUIComponents: "Container"
});
