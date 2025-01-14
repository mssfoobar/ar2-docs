"use strict";(self.webpackChunk_mssfoobar_docs=self.webpackChunk_mssfoobar_docs||[]).push([[9986],{35494:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"modules/ims/reference/faq","title":"FAQ","description":"This section is meant to address and document common questions, mistakes, errors, and pitfalls that people might","source":"@site/docs/modules/ims/reference/faq.mdx","sourceDirName":"modules/ims/reference","slug":"/modules/ims/reference/faq","permalink":"/docs/docs/modules/ims/reference/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/mssfoobar/docs/tree/main/docs/modules/ims/reference/faq.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"FAQ"},"sidebar":"modulesSidebar","previous":{"title":"Configuration","permalink":"/docs/docs/modules/ims/configuration"},"next":{"title":"Known Issues","permalink":"/docs/docs/modules/ims/reference/known-issues"}}');var r=s(74848),i=s(28453),o=s(11470),a=s(19365);const l={sidebar_position:1,sidebar_label:"FAQ"},c="FAQ",d={},h=[{value:"Example: How do I directly access my local development database?",id:"example-how-do-i-directly-access-my-local-development-database",level:2},{value:"Example: How can I grow a bigger chest?",id:"example-how-can-i-grow-a-bigger-chest",level:2},{value:"Gists",id:"gists",level:2},{value:"Docusaurus Reference",id:"docusaurus-reference",level:2},{value:"Images",id:"images",level:3},{value:"Tabs",id:"tabs",level:3},{value:"Codeblocks",id:"codeblocks",level:3},{value:"Equations",id:"equations",level:3},{value:"Admonitions",id:"admonitions",level:3},{value:"Line Highlighting",id:"line-highlighting",level:3},{value:"Line Numbering",id:"line-numbering",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"})}),"\n",(0,r.jsxs)(n.p,{children:["This section is meant to address and document common ",(0,r.jsx)(n.code,{children:"questions"}),", ",(0,r.jsx)(n.code,{children:"mistakes"}),", ",(0,r.jsx)(n.code,{children:"errors"}),", and ",(0,r.jsx)(n.code,{children:"pitfalls"})," that people might\nrun into."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"example-how-do-i-directly-access-my-local-development-database",children:"Example: How do I directly access my local development database?"}),"\n",(0,r.jsxs)(n.p,{children:["When running the ",(0,r.jsx)(n.a,{href:"https://github.com/mssfoobar/dev-containers",children:(0,r.jsx)(n.code,{children:"dev-containers"})}),", add an ",(0,r.jsx)(n.code,{children:"override"})," file with port\nmappings to allow your database client to connect to the database running in the Docker network."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:'language-title="override.yml"',children:"name: aoh\n\nserivces:\n    my-module-db:\n        5500:5432\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Include the override file when you ",(0,r.jsx)(n.code,{children:"up"})," your compose file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:'language-title="Compose',metastring:'Command"',children:"docker compose --env-file .env -f iams/compose.yml -f override.yml up -d\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-how-can-i-grow-a-bigger-chest",children:"Example: How can I grow a bigger chest?"}),"\n",(0,r.jsx)(n.p,{children:"Do more chest exercises such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Bench Press"}),"\n",(0,r.jsx)(n.li,{children:"Dips"}),"\n",(0,r.jsx)(n.li,{children:"Seated Chest Press"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Gradually increase the number of sets you do each week."}),"\n",(0,r.jsx)(n.h2,{id:"gists",children:"Gists"}),"\n",(0,r.jsx)(n.p,{children:"If necessary and separate from the FAQ section, you can provide lists of commands, code recipes etc. here for users\nto copy-paste. These should be very short sections."}),"\n",(0,r.jsxs)(n.p,{children:["The gists below is a set of useful Docusaurus references to help you with writing your documentation for Docusaurus and\nis itself a good example of what ",(0,r.jsx)(n.code,{children:"gists"})," should be."]}),"\n",(0,r.jsx)(n.h2,{id:"docusaurus-reference",children:"Docusaurus Reference"}),"\n",(0,r.jsx)(n.p,{children:"The following is a list of useful examples for reference when editing the markdown files on Docusaurus."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Formatting is very important for MDX: ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/3890",children:"https://github.com/facebook/docusaurus/issues/3890"}),"\nYou must follow the formatting somewhat strictly (especially excluding spaces at the start of the sentence)."]})}),"\n",(0,r.jsx)(n.h3,{id:"images",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/assets",children:"Images"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Svelte Logo",src:s(95771).A+"",width:"275",height:"183"})}),"\n",(0,r.jsx)(n.p,{children:"Code to render above example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"![Svelte Logo](/img/sample.png)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"tabs",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/tabs",children:"Tabs"})}),"\n","\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(a.A,{value:"Windows",label:"Windows",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"shutdown -t 0 -s\n"})})}),(0,r.jsx)(a.A,{value:"macOS",label:"macOS",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo shutdown -h now\n"})})}),(0,r.jsx)(a.A,{value:"Linux",label:"Linux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo shutdown -h now\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Code to render above example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'\x3c!-- You must import the React components --\x3e\n\nimport Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n<TabItem value="Windows" label="Windows" default>\n\n```bash\nshutdown -t 0 -s\n```\n\n</TabItem>\n<TabItem value="macOS" label="macOS">\n\n```bash\nsudo shutdown -h now\n```\n\n</TabItem>\n<TabItem value="Linux" label="Linux">\n\n```bash\nsudo shutdown -h now\n```\n\n</TabItem>\n</Tabs>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"codeblocks",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/code-blocks",children:"Codeblocks"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',children:"function HelloCodeTitle(props) {\n\treturn <h1>Hello, {props.name}</h1>;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Code to render above example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n\treturn <h1>Hello, {props.name}</h1>;\n}\n```\n'})}),"\n",(0,r.jsx)(n.h3,{id:"equations",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/math-equations",children:"Equations"})}),"\n",(0,r.jsx)(n.p,{children:"$$\nI = \\int_0^{2\\pi} \\sin(x),dx\n$$"}),"\n",(0,r.jsx)(n.p,{children:"Code to render above example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"$$\nI = \\int_0^\\{2\\pi\\} \\sin(x)\\,dx\n$$\n"})}),"\n",(0,r.jsx)(n.h3,{id:"admonitions",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/admonitions",children:"Admonitions"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"Code to render above examples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n"})}),"\n",(0,r.jsx)(n.h3,{id:"line-highlighting",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-comments",children:"Line Highlighting"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'function HighlightSomeText(highlight) {\n\tif (highlight) {\n\t\t// highlight-next-line\n\t\treturn "This text is highlighted!";\n\t}\n\n\treturn "Nothing highlighted";\n}\n\nfunction HighlightMoreText(highlight) {\n\t// highlight-start\n\tif (highlight) {\n\t\treturn "This range is highlighted!";\n\t}\n\t// highlight-end\n\n\treturn "Nothing highlighted";\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Code to render above example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'```js\nfunction HighlightSomeText(highlight) {\n\tif (highlight) {\n\t\t// highlight-next-line\n\t\treturn "This text is highlighted!";\n\t}\n\n\treturn "Nothing highlighted";\n}\n\nfunction HighlightMoreText(highlight) {\n\t// highlight-start\n\tif (highlight) {\n\t\treturn "This range is highlighted!";\n\t}\n\t// highlight-end\n\n\treturn "Nothing highlighted";\n}\n```\n'})}),"\n",(0,r.jsx)(n.h3,{id:"line-numbering",children:(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-numbering",children:"Line Numbering"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"{1,4-6,11} showLineNumbers",children:'import React from "react";\n\nfunction MyComponent(props) {\n\tif (props.isBar) {\n\t\treturn <div>Bar</div>;\n\t}\n\n\treturn <div>Foo</div>;\n}\n\nexport default MyComponent;\n'})}),"\n",(0,r.jsx)(n.p,{children:"Code to render above example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:'```jsx {1,4-6,11} showLineNumbers\nimport React from "react";\n\nfunction MyComponent(props) {\n\tif (props.isBar) {\n\t\treturn <div>Bar</div>;\n\t}\n\n\treturn <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),r=s(34164),i=s(23104),o=s(56347),a=s(205),l=s(57485),c=s(31682),d=s(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=u(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,h]=p({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=c??x;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function j(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==t&&(c(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,b.jsx)(w,{...e,children:h(e.children)},String(n))}},95771:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/sample-379dc1fd85c5d0faf70a2393ffb26fdb.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);