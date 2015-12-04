/**
 * Created by wufan on 15/12/3.
 */
var http = require('../lib/restful');
var wechat=require('../lib/wechat.js');

module.exports=function(code){
    http.httpget(wechat.host, wechat.oauth2Api+"&code="+code+"&grant_type=authorization_code", null, function (result) {
        var temp = JSON.parse(result.toString());
        var access_token = temp.access_token;
        return access_token;
    });
};