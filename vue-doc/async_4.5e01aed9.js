(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(t,n,e){var i=e(134);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(13)(i,o);i.locals&&(t.exports=i.locals)},134:function(t,n,e){(t.exports=e(14)(!1)).push([t.i,"\n.align {\r\n  color: #1e035c;\n}\r\n",""])},135:function(t,n,e){"use strict";var i=e(128);e.n(i).a},136:function(t,n,e){(t.exports=e(14)(!1)).push([t.i,".xm-basic-title {\n  box-sizing: border-box;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n  .xm-basic-title.align-left {\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n            justify-content: flex-start; }\n  .xm-basic-title.align-center {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center; }\n  .xm-basic-title.align-right {\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n            justify-content: flex-end; }\n",""])},137:function(t,n,e){var i=e(136);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(13)(i,o);i.locals&&(t.exports=i.locals)},138:function(t,n){t.exports={title:"标题",align:"left",fontSize:14,fontColor:"",padding:{left:10,right:10,top:15,bottom:15}}},142:function(t,n,e){"use strict";e.r(n);var i=e(59),o=(e(67),e(138)),l=e.n(o),s={props:{title:{type:String,default:"标题"},align:{type:String,default:"left"},fontSize:{type:Number,default:14},fontColor:{type:String,default:""},padding:{type:Object,default:function(){return l.a.padding}}},computed:{titleStyle:function(){var t=this.fontSize,n=this.fontColor,e=this.padding,i={fontSize:"".concat(t,"px"),padding:"".concat(e.top,"px ").concat(e.right,"px ").concat(e.bottom,"px ").concat(e.left,"px")};return n&&(i.color=n),i},titleClass:function(){var t=this.align;return Object(i.a)({},"align-".concat(t),!0)}}},a=e(0),c=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"xm-basic-title",class:this.titleClass,style:this.titleStyle},[this._v("\n  "+this._s(this.title)+"\n")])},[],!1,null,null,null).exports,r=(e(137),{components:{BasicTitle:c}}),f=(e(135),Object(a.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础标题"}},[n("BasicTitle")],1),n("demo-block",{attrs:{title:"居中"}},[n("BasicTitle",{attrs:{align:"center"}})],1),n("demo-block",{attrs:{title:"样式"}},[n("BasicTitle",{attrs:{"font-size":24,padding:{left:20,right:20,top:10,bottom:10},align:"right","font-color":"#1e035c"}})],1)],1)},[],!1,null,null,null));n.default=f.exports}}]);