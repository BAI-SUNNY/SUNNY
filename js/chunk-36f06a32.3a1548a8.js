(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36f06a32"],{"2c46":function(n,t,e){"use strict";e.r(t);var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"component-markdown"},[n.markedHTML?n._e():e("div",{staticClass:"spin-group"},[e("div",[n._v("正在加载")])]),e("div",{staticClass:"markdown-body",domProps:{innerHTML:n._s(n.markedHTML)}})])},a=[],i=e("5530"),c=e("1da1"),o=(e("96cf"),e("0e54")),u=e.n(o),s=e("1487"),d=e.n(s),l=(e("498a"),e("ac1f"),e("5319"),e("99af"),e("466d"),function(n,t){var e=n.replace(/<[^<>]+>/g,"").trim(),r=/^https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+$/i,a=/^链接: https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+ 密码: [a-z0-9]{4}$/i;if(r.test(e))return'<div class="baidupan">\n      <a href="'.concat(e,'" class="container">\n        <div class="icon">\n          <img src="').concat(t,'image/baidu-pan-logo.png" style="background-color: transparent;">\n        </div>\n        <div class="url">').concat(e,"</div>\n      </a>\n    </div>");if(a.test(e)){var i=e.match(/https:\/\/pan\.baidu\.com\/s\/[a-z0-9]+/i),c=e.match(/[a-z0-9]{4}$/i);return'<div class="baidupan">\n      <div class="container">\n        <a href="'.concat(i[0],'">\n          <div class="icon">\n            <img src="').concat(t,'image/baidu-pan-logo.png" style="background-color: transparent;">\n          </div>\n          <div class="url">').concat(i[0],'</div>\n        </a>\n        <div class="line"></div>\n        <div class="pwd">\n          密码\n          <span>').concat(c[0],"</span>\n        </div>\n      </div>\n    </div>")}return!1}),p=(e("e4cb"),e("c98b"));function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(p["b"])({baseURL:"/d2-admin/",url:n,method:"get"})}var h={name:"d2-markdown",props:{url:{type:String,required:!1,default:""},source:{type:String,required:!1,default:""},highlight:{type:Boolean,required:!1,default:!1},baidupan:{type:Boolean,required:!1,default:!0}},data:function(){return{getReadmePublicPath:"",markedHTML:""}},mounted:function(){this.url?this.initWithUrl():this.source?this.initWithMd():console.log("not mounted init")},methods:{initWithMd:function(){this.markedHTML=this.marked(this.source)},initWithUrl:function(){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.getReadme(n.url);case 2:n.markedHTML=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getReadme:function(n){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:return r=e.sent,e.abrupt("return",t.marked(r));case 4:case"end":return e.stop()}}),e)})))()},marked:function(n){var t=this,e=new u.a.Renderer;return e.blockquote=function(n){return t.baidupan&&l(n,t.$baseUrl)||"<blockquote>".concat(n,"</blockquote>")},u()(n,Object(i["a"])(Object(i["a"])({},this.highlight?{highlight:function(n){return d.a.highlightAuto(n).value}}:{}),{},{renderer:e}))}}},m=h,v=(e("3153"),e("2877")),g=function(n){n.options.__source="src/components/d2-markdown/index.vue"},b=g,k=Object(v["a"])(m,r,a,!1,null,null,null);"function"===typeof b&&b(k);t["default"]=k.exports},3153:function(n,t,e){"use strict";e("4270")},4270:function(n,t,e){},"498a":function(n,t,e){"use strict";var r=e("23e7"),a=e("58a8").trim,i=e("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return a(this)}})},5899:function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(n,t,e){var r=e("1d80"),a=e("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(n){return function(t){var e=String(r(t));return 1&n&&(e=e.replace(c,"")),2&n&&(e=e.replace(o,"")),e}};n.exports={start:u(1),end:u(2),trim:u(3)}},c8d2:function(n,t,e){var r=e("d039"),a=e("5899"),i="​᠎";n.exports=function(n){return r((function(){return!!a[n]()||i[n]()!=i||a[n].name!==n}))}},e4cb:function(n,t,e){}}]);