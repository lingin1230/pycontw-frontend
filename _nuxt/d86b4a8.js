(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{403:function(e,t,r){var content=r(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("11af660a",content,!0,{sourceMap:!1})},507:function(e,t,r){"use strict";r(403)},508:function(e,t,r){var d=r(17)((function(i){return i[1]}));d.push([e.i,".tabs__headers[data-v-19180d74]{margin-left:0.75rem;font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-19180d74]{margin-left:0.25rem;display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:600;cursor:pointer;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-width:1px;background-color:transparent;color:#e6ba17;border-color:#c2a53a;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-19180d74]{min-width:110px}}.tabs__headers>.header.-selected[data-v-19180d74]{background:#e6ba17;color:#121023}.tab[data-v-19180d74]{display:inline-block;width:100%;border-radius:1rem;border-width:2px;--tw-bg-opacity:0;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.tab[data-v-19180d74]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-19180d74]{line-height:29px;color:#c7c7c7;border-color:#c2a53a;box-shadow:6px 6px 0 #c2a53a;padding:20px}",""]),d.locals={},e.exports=d},525:function(e,t,r){"use strict";r.r(t);r(27);var d={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){this.selectTab(0)},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(e,t){e.isActive=t===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},n=(r(507),r(5)),component=Object(n.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"tabs__headers"},e._l(e.tabs,(function(t,d){return r("li",{key:t.title,class:{header:!0,"-selected":e.isSelectedIndex(d)},on:{click:function(t){return e.selectTab(d)}}},[e._v("\n            "+e._s(t.title)+"\n        ")])})),0),e._v(" "),e._t("default")],2)}),[],!1,null,"19180d74",null);t.default=component.exports}}]);