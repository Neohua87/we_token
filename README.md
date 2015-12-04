### introduction
'wx_token'
A simple and easy node for getting wechat token including gloabal token and oauth one with no extra dependencies.


### usage

    1)copy the requires in index.js to your own js file

    2)choose the functions below to get token you need

```
** fn1:get global token ( with cache:7200seconds)
```javascript
   var gtoken=getGtoken();
```javascript

** fn2:get oauth token(got by code)
```javascript
   var token=oauth_token();
```javascript



