/**
 * Created by wufan on 15/12/4.
 */
//引用：var getGtoken=require('../lib/getGtoken.js');
//使用：getGtoken();
var http = require('../lib/restful');
var wechat=require('../lib/wechat.js');
var gtoken={timestamp:undefined,value:undefined};
module.exports=function(){

    var gtoken_oldtime=gtoken.timestamp;
    var gtoken_oldvalue=gtoken.value;
    //console.log(gtoken_oldtime);
    //console.log(gtoken_oldvalue);
    gtoken.timestamp=new Date().getTime();
    console.log(gtoken.timestamp);
    if(gtoken_oldtime!=undefined&&((gtoken.timestamp-gtoken_oldtime)<=7200000)){
        gtoken.value=gtoken_oldvalue;
        //console.log("gtoken between 2H:" + gtoken.value);
    }else{
        http.httpget(wechat.host, wechat.gtokenApi, null, function (result, status) {
            var temp_token = JSON.parse(result.toString());
            gtoken.value= temp_token.access_token;
            console.log("gtoken:" + gtoken.value);
        });
    }
    return gtoken.value;
};
