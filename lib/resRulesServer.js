/**
 * Created by lianghongpeng on 2016/9/29.
 * ✓
 */

var debug = require('debug')('ngnono:whistle:plugin:lib:res');

/**
 * whistle会通过请求的头部，把配置的值及是否为https或wss请求传递给插件
 */
var RULE_VALUE_HEADER, SSL_FLAG_HEADER;

function onRequst(req){
  "use strict";

  debug("on req");
  debug(JSON.stringify(req));
}

function onResponse(data) {

  debug("on res");

  debug(JSON.stringify(data));

}

module.exports = function(server, options) {
  /*
   * options包含一些自定义的头部字段名称及配置信息，后面单独统一讲
   * server是whistle传给插件的http.Server对象，
   * 开发者通过监听server的request事件获取响应信息，
   * 并返回新的处理响应的规则
   */
  debug('run.....');

  RULE_VALUE_HEADER = options.RULE_VALUE_HEADER;
  SSL_FLAG_HEADER = options.SSL_FLAG_HEADER;

  server.on('request', onRequst);
  server.on('response', onResponse);

  //response  //
};
