(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(163);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},157:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),d=a(156),c=a.n(d);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return d.withPrefix}),a.d(t,"navigate",function(){return d.navigate}),a.d(t,"push",function(){return d.push}),a.d(t,"replace",function(){return d.replace}),a.d(t,"navigateTo",function(){return d.navigateTo});var l=a(158),s=a.n(l);a.d(t,"PageRenderer",function(){return s.a});var u=a(35);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},158:function(e,t,a){var n;e.exports=(n=a(160))&&n.default||n},160:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),o=a(0),i=a.n(o),d=a(4),c=a.n(d),l=a(50),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,r()({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Space"}}}}},162:function(e){e.exports={data:{allMdx:{edges:[{node:{id:"2dcab7f1-63ef-579e-97b2-37e50d28192b",frontmatter:{title:"",path:null}}},{node:{id:"a94b0472-a4cd-53ba-b352-0cf736218357",frontmatter:{title:"Accordion",path:"/components/accordion/"}}},{node:{id:"c55f9dba-3a13-521a-891a-5f6b8cee7980",frontmatter:{title:"Avatar",path:"/components/avatar/"}}},{node:{id:"0af53094-6277-59d9-a343-8f4904d3b453",frontmatter:{title:"Button",path:"/components/button/"}}},{node:{id:"e76a5c69-8b61-5e20-afff-0dc871728579",frontmatter:{title:"Breadcrumb",path:"/components/breadcrumb/"}}},{node:{id:"686d50b9-91e1-55cc-a0db-ffee7e5b44e9",frontmatter:{title:"Checkbox",path:"/components/checkbox/"}}},{node:{id:"42e54d04-82d6-53e6-9578-893797287290",frontmatter:{title:"Chips",path:"/components/chips/"}}},{node:{id:"92ef5dae-2339-576a-82f5-2123e5a921ef",frontmatter:{title:"Loader",path:"/components/loader/"}}},{node:{id:"86a3c187-95cc-5f2e-8804-a822e0cd3279",frontmatter:{title:"Form",path:"/components/form/"}}},{node:{id:"6111b2f8-d8fa-56a4-8a35-8d47cf2c9d05",frontmatter:{title:"Pagination",path:"/components/pagination/"}}},{node:{id:"48eb8f32-417a-53ce-8eba-524f013e7097",frontmatter:{title:"Progress",path:"/components/progress/"}}},{node:{id:"2b5e3478-97fe-535a-9a54-900c97228ace",frontmatter:{title:"Select",path:"/components/select/"}}},{node:{id:"91246a88-66c7-592a-818d-1265a105f6a2",frontmatter:{title:"Radio Button",path:"/components/radiobutton/"}}},{node:{id:"cb825d0e-a361-5c96-a72a-e44852243c01",frontmatter:{title:"Table",path:"/components/table/"}}},{node:{id:"e670ff63-3f1d-5be6-b356-076be798a470",frontmatter:{title:"Toasts",path:"/components/toasts/"}}}]}}}},163:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),i=a(4),d=a.n(i),c=a(169),l=a.n(c),s=a(157),u=a(155),p=(a(49),a(162)),f=u.a.div.withConfig({displayName:"sidebar__Logo",componentId:"sc-1hdltc8-0"})(["padding:20px 0px;> a{text-decoration:none;color:#000;font-size:2rem;}"]),m=u.a.ul.withConfig({displayName:"sidebar__SideItems",componentId:"sc-1hdltc8-1"})(["padding:20px 10px;list-style:none;margin-left:0px;> li{a{text-decoration:none;color:#5f27cd;}}"]),h=u.a.div.withConfig({displayName:"sidebar__SidebarStyle",componentId:"sc-1hdltc8-2"})(["background:#f1f2f6;position:fixed;top:0;height:100%;width:300px;padding:20px;"]),b=function(e){var t=e.siteTitle;return o.a.createElement(s.StaticQuery,{query:"522128430",render:function(e){return o.a.createElement(h,null,o.a.createElement(f,{style:{margin:0}},o.a.createElement(s.Link,{to:"/"},t)),o.a.createElement("div",null,"Components"),o.a.createElement(m,null,e.allMdx.edges.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{href:e.node.frontmatter.path,key:e.node.id},e.node.frontmatter.title))})))},data:p})},g=u.a.div.withConfig({displayName:"layout__App",componentId:"wwrb0b-0"})(["font-family:monospace;"]),y=u.a.div.withConfig({displayName:"layout__Container",componentId:"wwrb0b-1"})(["margin-left:300px;padding:50px;max-width:1000px;"]),x=function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(g,null,o.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Minimal react library"},{name:"keywords",content:"minimal, react, ui, design"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),o.a.createElement(y,null,t))},data:n})};x.propTypes={children:d.a.node.isRequired};t.a=x}}]);
//# sourceMappingURL=component---src-pages-404-js-f90805f142710aa9b38d.js.map