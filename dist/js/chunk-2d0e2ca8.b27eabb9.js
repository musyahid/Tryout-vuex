(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2ca8"],{"7fcf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Index")],1)},r=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Register")]),e.alert.length>0?a("div",{staticClass:"mb-4",attrs:{role:"alert"}},[a("div",{staticClass:"bg-red-500 text-white font-bold rounded-t px-4 py-2"},[e._v("Danger")]),a("div",{staticClass:"border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"},[a("p",[e._v(e._s(e.alert.join(",\r\n")))])])]):e._e(),a("form",{staticClass:"w-full max-w-sm",on:{submit:e.checkForm}},[a("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(0),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(1),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(2),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(3),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),a("div",{staticClass:"md:flex md:items-center mb-6"},[e._m(4),a("div",{staticClass:"md:w-2/3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone_number,expression:"phone_number"}],staticClass:"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",attrs:{id:"",type:"text"},domProps:{value:e.phone_number},on:{input:function(t){t.target.composing||(e.phone_number=t.target.value)}}})])]),e._m(5)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("Full Name")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("User Name")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("Password")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("Email")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:w-1/3"},[a("label",{staticClass:"block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",attrs:{for:""}},[e._v("Phone Number")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:flex md:items-center"},[a("div",{staticClass:"md:w-1/3"}),a("div",{staticClass:"md:w-2/3"},[a("button",{staticClass:"shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"submit"}},[e._v("Sign Up")])])])}],l=a("5530"),o=a("2f62"),d={name:"Register",data:function(){return{full_name:"musyahid",username:"ilham",password:"123456",email:"musyahid21@gmail.com",phone_number:"087733934282",alert:[]}},methods:Object(l["a"])({checkForm:function(e){var t=[];if(""===this.full_name&&t.push("Full name Required"),""===this.username&&t.push("Username Required"),""===this.password&&t.push("Password name Required"),""===this.email&&t.push("email name Required"),""===this.phone_number&&t.push("Phone number Required"),console.log({error:t}),t.length>0)this.alert=t;else{var a={full_name:this.full_name,username:this.username,password:this.password,email:this.email,phone_number:this.phone_number};this.registerAction(a)}return e.preventDefault(),!1}},Object(o["b"])(["registerAction"])),computed:{}},m=d,u=a("2877"),c=Object(u["a"])(m,n,i,!1,null,null,null),p=c.exports,b={name:"Registrasi",components:{Index:p}},f=b,g=Object(u["a"])(f,s,r,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0e2ca8.b27eabb9.js.map