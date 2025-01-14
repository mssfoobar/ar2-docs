"use strict";(self.webpackChunk_mssfoobar_docs=self.webpackChunk_mssfoobar_docs||[]).push([[4163],{32580:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"modules/ucs/development/testing","title":"\ud83d\udd27 Testing","description":"SFU load testing tool","source":"@site/docs/modules/ucs/development/testing.md","sourceDirName":"modules/ucs/development","slug":"/modules/ucs/development/testing","permalink":"/docs/docs/modules/ucs/development/testing","draft":false,"unlisted":false,"editUrl":"https://github.com/mssfoobar/docs/tree/main/docs/modules/ucs/development/testing.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Testing"},"sidebar":"modulesSidebar","previous":{"title":"Development","permalink":"/docs/docs/modules/ucs/development/"},"next":{"title":"Nats","permalink":"/docs/docs/modules/ucs/development/nats"}}');var o=s(74848),i=s(28453);const d={sidebar_position:3,sidebar_label:"Testing"},l="\ud83d\udd27 Testing",r={},c=[{value:"SFU load testing tool",id:"sfu-load-testing-tool",level:2},{value:"Test File",id:"test-file",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Run tool in another Linux server",id:"run-tool-in-another-linux-server",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-testing",children:"\ud83d\udd27 Testing"})}),"\n",(0,o.jsx)(n.h2,{id:"sfu-load-testing-tool",children:"SFU load testing tool"}),"\n",(0,o.jsx)(n.p,{children:"Clone the vidconf-loadtest repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/mssfoobar/vidconf-loadtest.git\n"})}),"\n",(0,o.jsx)(n.h3,{id:"test-file",children:"Test File"}),"\n",(0,o.jsx)(n.p,{children:"Publishing of files in the following formats are supported."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Container"}),(0,o.jsx)(n.th,{children:"Video Codecs"}),(0,o.jsx)(n.th,{children:"Audio"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"WEBM"}),(0,o.jsx)(n.td,{children:"VP8"}),(0,o.jsx)(n.td,{children:"OPUS"})]})})]}),"\n",(0,o.jsx)(n.p,{children:"If your data is not webm, you can use ffmpeg to make one\nThis show how to make a 0.5Mbps webm:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"ffmpeg -i djrm480p.mp4 -strict -2 -b:v 0.4M -vcodec libvpx -acodec opus djrm480p.webm\n"})}),"\n",(0,o.jsxs)(n.p,{children:["See the ffmpeg docs on ",(0,o.jsx)(n.a,{href:"https://trac.ffmpeg.org/wiki/Encode/VP8",children:"VP8"})," for encoding options"]}),"\n",(0,o.jsx)(n.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,o.jsx)(n.p,{children:"Change necessary Makefile variables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# number of client publishing the video stream\npubClient = 1\n# number of client subscribing the video stream\nsubClient = 10\n# signal address\nsignalAddr = 127.0.0.1:5551\n# session id\nsessionId = ion\n# duration the load testing tool will run\nduration = 600\n"})}),"\n",(0,o.jsx)(n.p,{children:"Use makefile commands to start the tool in docker"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Command",metastring:"Line",children:"make build\nmake start\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-tool-in-another-linux-server",children:"Run tool in another Linux server"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# build a linux version, we test on linux because mac fd limit\nenv GOOS=linux go build -o sfu-loadtest ./sfu-loadtest/main.go\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# pub.sh\n#./sfu-loadtest -file ./djrm480p.webm -clients 1 -role pubsub -gaddr \"yoursfuip:5551\" -session 'ion' -log debug -cycle 1000 -a -v\n\n# sub.sh\n#../sfu-loadtest -file /Volumes/vm/media/djrm480p.webm  -clients 10 -role sub -gaddr \"127.0.0.1:5551\" -session 'ion'\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var t=s(96540);const o={},i=t.createContext(o);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);