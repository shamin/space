(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l});var a=n(164),r=n.n(a),o=n(0),i=n.n(o),d=n(160),c=n(161),p=n(162);t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(d.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(d.MDXTag,{name:"h2",components:t},"Loader"),i.a.createElement(p.f,null),i.a.createElement(d.MDXTag,{name:"pre",components:t},i.a.createElement(d.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metastring:""}},"<Loader />\n")))};var l={}},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),d=n(152),c=n.n(d);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return d.withPrefix}),n.d(t,"navigate",function(){return d.navigate}),n.d(t,"push",function(){return d.push}),n.d(t,"replace",function(){return d.replace}),n.d(t,"navigateTo",function(){return d.navigateTo});var p=n(154),l=n.n(p);n.d(t,"PageRenderer",function(){return l.a});var s=n(35);n.d(t,"parsePath",function(){return s.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,n){var a;e.exports=(a=n(156))&&a.default||a},155:function(e,t,n){"use strict";var a=n(151),r=a.a.button.withConfig({displayName:"button__Button",componentId:"oz2z1s-0"})(["background:",";color:",";font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"],function(e){return e.primary?"palevioletred":"white"},function(e){return e.primary?"white":"palevioletred"}),o=Object(a.a)(r).withConfig({displayName:"button__TomatoButton",componentId:"oz2z1s-1"})(["color:tomato;border-color:tomato;"]);n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},156:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n.n(a),o=n(0),i=n.n(o),d=n(4),c=n.n(d),p=n(50),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(p.a,r()({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},158:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"c55f9dba-3a13-521a-891a-5f6b8cee7980",frontmatter:{title:"Avatar",path:"/components/avatar/"}}},{node:{id:"e76a5c69-8b61-5e20-afff-0dc871728579",frontmatter:{title:"Breadcrumb",path:"/components/breadcrumb/"}}},{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"42e54d04-82d6-53e6-9578-893797287290",frontmatter:{title:"Chips",path:"/components/chips/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"92ef5dae-2339-576a-82f5-2123e5a921ef",frontmatter:{title:"Loader",path:"/components/loader/"}}},{node:{id:"48eb8f32-417a-53ce-8eba-524f013e7097",frontmatter:{title:"Progress",path:"/components/progress/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}},{node:{id:"cb825d0e-a361-5c96-a72a-e44852243c01",frontmatter:{title:"Table",path:"/components/table/"}}}]}}}},159:function(e,t,n){"use strict";var a=n(157),r=n(0),o=n.n(r),i=n(4),d=n.n(i),c=n(163),p=n.n(c),l=n(153),s=n(151),u=(n(49),n(158)),m=s.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),f=s.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;list-style:none;margin-left:0px;> li{a{text-decoration:none;color:#5f27cd;}}"]),h=s.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),b=function(e){var t=e.siteTitle;return o.a.createElement(l.StaticQuery,{query:"522128430",render:function(e){return o.a.createElement(h,null,o.a.createElement(m,{style:{margin:0}},o.a.createElement(l.Link,{to:"/"},t)),o.a.createElement("div",null,"Components"),o.a.createElement(f,null,e.allMdx.edges.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:u})},g=s.a.div.withConfig({displayName:"layout__App",componentId:"wwrb0b-0"})(["font-family:monospace;"]),y=s.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-1"})(["margin-left:300px;padding:50px;max-width:1000px;"]),x=function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(g,null,o.a.createElement(p.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(y,null,t))},data:a})};x.propTypes={children:d.a.node.isRequired};t.a=x},161:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),d=n(159),c=n(4),p=n.n(c),l=n(160),s=(n(75),n(49),n(165),n(167)),u=n(166),m=n.n(u),f=n(151).a.pre.withConfig({displayName:"syntaxHighligther__Pre",componentId:"va3h5c-0"})(["padding:30px;border-radius:3px;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(s.a,Object.assign({},s.b,{code:this.props.children.trim(),language:"jsx",theme:m.a}),function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,o=e.getTokenProps;return i.a.createElement(f,{className:t+" syntax-highlight",style:n},a.map(function(e,t){return i.a.createElement("div",r({line:e,key:t}),e.map(function(e,t){return i.a.createElement("span",o({token:e,key:t}))}))}))})},t}(i.a.PureComponent);h.propTypes={children:p.a.string};var b={};b.code=h;var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(l.MDXProvider,{components:b},this.props.children)},t}(i.a.PureComponent);g.propTypes={children:p.a.node},n.d(t,"a",function(){return y});var y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,null,i.a.createElement(g,null,this.props.children))},t}(o.Component)},162:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),d=n(151),c=d.a.div.withConfig({displayName:"select__SelectElement",componentId:"t1bebx-0"})(['position:relative;max-width:370px;height:50px;&:after{content:"";width:10px;height:10px;border-bottom:1px solid #000;border-right:1px solid #000;transform:rotate(45deg);top:10px;right:10px;position:absolute;display:inline-block;}']),p=d.a.select.withConfig({displayName:"select__SelectOption",componentId:"t1bebx-1"})(['left:0;position:absolute;width:100%;border-radius:2px;border:none;background-color:"red";-webkit-appearance:none;outline:none;font-size:1rem;padding:10px 25px;padding-right:35px;color:#000;']),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c,null,i.a.createElement(p,{defaultValue:this.props.defaultValue},this.props.children))},t}(o.Component),s=d.a.div.withConfig({displayName:"checkbox__CheckboxElement",componentId:"wmubq4-0"})(["display:inline-block;> input{opacity:0;}> input + label{position:relative;padding-left:25px;cursor:pointer;&:before{content:'';position:absolute;left:0;top:1px;width:17px;height:17px;border:1px solid #aaa;background:#f8f8f8;border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.3)}&:after{content:'✔';position:absolute;top:-1px;left:2px;font-size:16px;color:#09ad7e;transition:all .2s;}}> input:not(:checked) + label{&:after{opacity:0;transform:scale(0);}}> input:disabled:not(:checked) + label{&:before{box-shadow:none;border-color:#bbb;background-color:#ddd;}}> input:checked + label{&:after{opacity:1;transform:scale(1);}}> input:disabled:checked + label{&:after{color:#999;}}> input:disabled + label{color:#aaa;}> input:checked:focus + label,input:not(:checked):focus + label{&:before{border:1px dotted blue;}}"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(s,{onClick:function(){return e.props.onChange(!e.props.checked)}},i.a.createElement("input",{type:"checkbox",checked:this.props.checked,disabled:this.props.disabled}),i.a.createElement("label",null,this.props.label))},t}(o.Component),m=n(155),f=d.a.div.withConfig({displayName:"chips__Chips",componentId:"n1epbm-0"})(["background:#5f27cd;display:inline-block;color:#ffffff;padding:10px 15px;border-radius:20px;margin-left:10px;"]),h=d.a.table.withConfig({displayName:"table__Table",componentId:"gu31ym-0"})(['margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;td,th{text-align:left;border-bottom:1px solid hsla(0,0%,0%,0.12);font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";-ms-font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";padding-left:0.96667rem;padding-right:0.96667rem;padding-top:0.725rem;padding-bottom:calc(0.725rem - 1px);}']),b=d.a.div.withConfig({displayName:"avatar__AvatarContainer",componentId:"xnskd3-0"})(["background:#6d6d6d;border-radius:100%;width:100px;height:100px;"]),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(b,null,i.a.createElement("img",{src:""}))},t}(o.Component),y=d.a.ul.withConfig({displayName:"breadcrumb__Breadcrumb",componentId:"lp04vq-0"})([""]),x=d.a.div.withConfig({displayName:"loaders__Loader",componentId:"sc-15b72tr-0"})(["background:#6d6d6d;border-radius:100%;width:100px;height:100px;"]),w=d.a.div.withConfig({displayName:"progress__Progress",componentId:"sc-1ywdo2w-0"})(["background:#6d6d6d;border-radius:100%;width:100px;height:100px;"]);n.d(t,"h",function(){return l}),n.d(t,"d",function(){return u}),n.d(t,"c",function(){return m.a}),n.d(t,"e",function(){return f}),n.d(t,"i",function(){return h}),n.d(t,"a",function(){return g}),n.d(t,"b",function(){return y}),n.d(t,"f",function(){return x}),n.d(t,"g",function(){return w})}}]);
//# sourceMappingURL=component---src-pages-components-loader-mdx-a6da777971ecaea07cba.js.map