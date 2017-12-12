webpackJsonp([1],{"3Jfp":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("lGM5"),i={data:function(){return{form1:{username:"",password:"",remember:!1},form2:{phone:"",code:"",remember:!1},rules1:{username:{required:!0,message:"请输入用户名"},password:{required:!0,message:"请输入密码"}},rules2:{phone:[{required:!0,message:"请输入手机号"},{pattern:a.a,message:"请输入正确的手机号码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码"},{pattern:/^[0-9]{4}$/,message:"请输入正确的验证码",trigger:"blur"}]}}},methods:{submit1:function(){this.$refs.form1.validate(function(e){e&&console.log("login 1")})},submit2:function(){this.$refs.form2.validate(function(e){e&&console.log("login 2")})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-auth px-4 py-4 mt-4 bg-white"},[r("i-tabs",{attrs:{animated:!1}},[r("i-tab-pane",{attrs:{label:"账号密码登录"}},[r("i-form",{ref:"form1",attrs:{rules:e.rules1,model:e.form1},nativeOn:{submit:function(t){t.preventDefault(),e.submit1(t)}}},[r("i-form-item",{attrs:{prop:"username"}},[r("i-input",{attrs:{autofocus:"",placeholder:"请输入用户名",icon:"android-person"},model:{value:e.form1.username,callback:function(t){e.$set(e.form1,"username",t)},expression:"form1.username"}})],1),e._v(" "),r("i-form-item",{attrs:{prop:"password"}},[r("i-input",{attrs:{type:"password",placeholder:"请输入密码",icon:"android-lock"},model:{value:e.form1.password,callback:function(t){e.$set(e.form1,"password",t)},expression:"form1.password"}})],1),e._v(" "),r("i-form-item",[r("div",{staticClass:"flex flex-jc-between"},[r("i-checkbox",{model:{value:e.form1.remember,callback:function(t){e.$set(e.form1,"remember",t)},expression:"form1.remember"}},[e._v("自动登录")]),e._v(" "),r("router-link",{attrs:{to:"/auth/register"}},[e._v("忘记密码")])],1)]),e._v(" "),r("i-form-item",[r("i-button",{attrs:{type:"primary",long:"","html-type":"submit"}},[e._v("登录")])],1)],1)],1),e._v(" "),r("i-tab-pane",{attrs:{label:"手机号登录"}},[r("i-form",{ref:"form2",attrs:{rules:e.rules2,model:e.form2},nativeOn:{submit:function(t){t.preventDefault(),e.submit2(t)}}},[r("i-form-item",{attrs:{prop:"phone"}},[r("i-input",{attrs:{placeholder:"请输入手机号",icon:"android-phone-portrait"},model:{value:e.form2.phone,callback:function(t){e.$set(e.form2,"phone",t)},expression:"form2.phone"}})],1),e._v(" "),r("i-form-item",{attrs:{prop:"code"}},[r("i-row",{attrs:{type:"flex"}},[r("i-col",{attrs:{span:"15"}},[r("i-input",{attrs:{type:"password",placeholder:"验证码",icon:"android-hangout"},model:{value:e.form2.code,callback:function(t){e.$set(e.form2,"code",t)},expression:"form2.code"}})],1),e._v(" "),r("i-col",{attrs:{span:"8",push:"1"}},[r("i-button",[e._v("获取验证码")])],1)],1)],1),e._v(" "),r("i-form-item",[r("div",{staticClass:"flex flex-jc-between"},[r("i-checkbox",{model:{value:e.form2.remember,callback:function(t){e.$set(e.form2,"remember",t)},expression:"form2.remember"}},[e._v("自动登录")]),e._v(" "),r("router-link",{attrs:{to:"/auth/register"}},[e._v("忘记密码")])],1)]),e._v(" "),r("i-form-item",[r("i-button",{attrs:{type:"primary",long:"","html-type":"submit"}},[e._v("登录")])],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"flex flex-row flex-ai-center flex-jc-between"},[r("div",{staticClass:"flex flex-row flex-ai-center text-secondary"},[e._v("\n      其它登录方式\n      "),r("a",{staticClass:"ml-2 text-secondary",attrs:{href:"/"}},[r("i-icon",{attrs:{size:"22",type:"social-github"}})],1),e._v(" "),r("a",{staticClass:"ml-2 text-secondary",attrs:{href:"/"}},[r("i-icon",{attrs:{size:"22",type:"social-google"}})],1),e._v(" "),r("a",{staticClass:"ml-2 text-secondary",attrs:{href:"/"}},[r("i-icon",{attrs:{size:"22",type:"social-twitter"}})],1)]),e._v(" "),r("router-link",{attrs:{to:"/auth/register"}},[e._v("注册账户")])],1)],1)},staticRenderFns:[]},s=r("VU/8")(i,o,!1,function(e){r("r5FE")},null,null);t.default=s.exports},CXNN:function(e,t,r){(e.exports=r("FZ+f")(!0)).push([e.i,".page-auth{border-radius:4px}.page-auth .ivu-tabs-nav:after{display:none}.page-auth .ivu-tabs-tab{padding-left:24px;padding-right:24px}.page-auth .ivu-form-item-content .ivu-input-icon{left:0;right:auto}.page-auth .ivu-input{padding-left:32px;padding-right:7px}","",{version:3,sources:["/home/travis/build/erguotou520/vue-ant-design-pro/src/views/auth/auth.styl"],names:[],mappings:"AACA,WACE,iBAAmB,CACpB,AACD,+BACE,YAAc,CACf,AACD,yBACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,kDACE,OAAQ,AACR,UAAY,CACb,AACD,sBACE,kBAAmB,AACnB,iBAAmB,CACpB",file:"auth.styl",sourcesContent:["\n.page-auth {\n  border-radius: 4px;\n}\n.page-auth .ivu-tabs-nav::after {\n  display: none;\n}\n.page-auth .ivu-tabs-tab {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.page-auth .ivu-form-item-content .ivu-input-icon {\n  left: 0;\n  right: auto;\n}\n.page-auth .ivu-input {\n  padding-left: 32px;\n  padding-right: 7px;\n}"],sourceRoot:""}])},lGM5:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=/^1[0-9]{10}$/},r5FE:function(e,t,r){var a=r("CXNN");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("72cb1853",a,!0)}});
//# sourceMappingURL=1.880f9ec40d1ba15fe81a.js.map