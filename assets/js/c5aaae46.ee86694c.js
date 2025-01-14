"use strict";(self.webpackChunk_mssfoobar_docs=self.webpackChunk_mssfoobar_docs||[]).push([[8701],{96793:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"modules/iams/deployment/deploy-iams-keycloak","title":"Deploy IAMS-Keycloak","description":"1.  Navigate to the \u201ciams-keycloak\u201d directory.","source":"@site/docs/modules/iams/deployment/deploy-iams-keycloak.md","sourceDirName":"modules/iams/deployment","slug":"/modules/iams/deployment/deploy-iams-keycloak","permalink":"/docs/docs/modules/iams/deployment/deploy-iams-keycloak","draft":false,"unlisted":false,"editUrl":"https://github.com/mssfoobar/docs/tree/main/docs/modules/iams/deployment/deploy-iams-keycloak.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"modulesSidebar","previous":{"title":"Limit the number of queued requests","permalink":"/docs/docs/modules/iams/deployment/configuring-for-production/limit-the-number-of-queued-requests"},"next":{"title":"Deploy IAMS-AAS","permalink":"/docs/docs/modules/iams/deployment/deploy-iams-aas"}}');var l=t(74848),i=t(28453);const r={sidebar_position:8},a="Deploy IAMS-Keycloak",d={},c=[];function o(e){const s={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"deploy-iams-keycloak",children:"Deploy IAMS-Keycloak"})}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Navigate to the \u201ciams-keycloak\u201d directory."}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Edit ",(0,l.jsx)(s.code,{children:"00-ghcr-key.yaml"})," and replace ",(0,l.jsx)(s.code,{children:"{ghrc personal access key}"})," with the actual base64 encoded ",(0,l.jsx)(s.code,{children:"dockerconfigjson"}),"\nstring generated in step 3 of ",(0,l.jsx)(s.a,{href:"/docs/docs/modules/prerequisites/access",children:"Prepare Personal Access Token"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Create the GHRC secret"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f 00-ghcr-key.yaml\n"})}),"\n",(0,l.jsxs)(s.ol,{start:"4",children:["\n",(0,l.jsxs)(s.li,{children:["Change the access permission of ",(0,l.jsx)(s.code,{children:"01-create-configmap.sh"})]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"chmod 755 01-create-configmap.sh\n"})}),"\n",(0,l.jsxs)(s.ol,{start:"5",children:["\n",(0,l.jsx)(s.li,{children:"Create the Configmap"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"./01-create-configmap.sh\n"})}),"\n",(0,l.jsxs)(s.p,{children:["This step will create a config map that contains the content of ",(0,l.jsx)(s.code,{children:"realm-import.json"})," file.\n",(0,l.jsx)(s.code,{children:"realm-import.json"})," file contains the default realm settings required for IAMS to work."]}),"\n",(0,l.jsxs)(s.ol,{start:"6",children:["\n",(0,l.jsx)(s.li,{children:"Create Service"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f 02-service.yaml\n"})}),"\n",(0,l.jsx)(s.p,{children:"This manifests file creates a ClusterIP services for accessing IAMS-Keycloak pod."}),"\n",(0,l.jsxs)(s.ol,{start:"7",children:["\n",(0,l.jsxs)(s.li,{children:["Edit ",(0,l.jsx)(s.code,{children:"03-deployment.yaml"})," and change the value of the ",(0,l.jsx)(s.code,{children:"KC_HOSTNAME"})," environment variable to the actual FQDN of your Kubernetes Cluster."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["The example value in the ",(0,l.jsx)(s.code,{children:"03-deployment.yaml"})," is using ",(0,l.jsx)(s.code,{children:"nip.io"})," to create a FQDN to point to the Kubernetes Cluster.\nTo use ",(0,l.jsx)(s.code,{children:"nip.io"}),", simply replace ",(0,l.jsx)(s.code,{children:"10.10.10.100"})," in the example value with the Ipv4 address of your Kubernetes Cluster."]}),"\n",(0,l.jsxs)(s.ol,{start:"8",children:["\n",(0,l.jsx)(s.li,{children:"Create the Deployment"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f 03-deployment.yaml\n"})}),"\n",(0,l.jsx)(s.p,{children:"This manifests file will instruct Kubernetes to deploy a Pod using iams-keycloak image from AGIL Ops Hub container registry.\nThis manifests defines the following environment variables which instructs how iams-keycloak should be initialized:"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Environment Variable"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"DEFAULT_REALM"}),(0,l.jsx)(s.td,{children:"The name of the realm to be created."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_DB"}),(0,l.jsx)(s.td,{children:"The database type to be used to store the data. Default value is \u201cpostgres\u201d. Change this value if you wish to use other database type."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_DB_URL_DATABASE"}),(0,l.jsx)(s.td,{children:"The name of the database to use. The default value match the POSTGRES_DB value."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_DB_USERNAME"}),(0,l.jsx)(s.td,{children:"The username of the database user. The default value match the POSTGRES_USER value."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_DB_PASSWORD"}),(0,l.jsx)(s.td,{children:"The password of the database user. The default value match the POSTGRES_PASSWORD value"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_DB_URL_HOST"}),(0,l.jsx)(s.td,{children:"The host URL of the database. The default value match the name field in 05-service.yaml in the postgres directory."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_DB_URL_PORT"}),(0,l.jsx)(s.td,{children:"The port number to access the database. The default value match the port field in 05-service.yaml in the postgres directory."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_HTTP_ENABLED"}),(0,l.jsx)(s.td,{children:"Enable HTTP. The default value allow iams-keycloak to be access via HTTP."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KEYCLOAK_ADMIN"}),(0,l.jsx)(s.td,{children:"The username of the default administrator. You will use to setup the realm."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KEYCLOAK_ADMIN_PASSWORD"}),(0,l.jsx)(s.td,{children:"The password of the default administrator."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_HOSTNAME"}),(0,l.jsx)(s.td,{children:"The URL to access the iams-keycloak. This value should match the Host value in 04-ingress.yaml."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_HOSTNAME_BACKCHANNEL_DYNAMIC"}),(0,l.jsx)(s.td,{children:"Whether to allow the backchannel URL to be the same as the frontchannel URL (URL specified in KC_HOSTNAME). The backchannel is used by IAMS-AAS to communicate with IAMS-Keycloak. This value should set to true."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_HTTP_PORT"}),(0,l.jsx)(s.td,{children:"The HTTP port number to use. The default value match the port field value in 04-ingress.yaml."})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"KC_HEALTH_ENABLED"}),(0,l.jsx)(s.td,{children:"Whether to enable the liveness and readiness probe endpoints. This value should set to true."})]})]})]}),"\n",(0,l.jsxs)(s.ol,{start:"9",children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["Edit ",(0,l.jsx)(s.code,{children:"04-ingress.yaml"})," and change the value of the ",(0,l.jsx)(s.code,{children:"Host"})," field to the same value as ",(0,l.jsx)(s.code,{children:"KC_HOSTNAME"})," in step 7."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"Create the ingress"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f 04-ingress.yaml\n"})}),"\n",(0,l.jsxs)(s.p,{children:["This manifests defines an ingress allowing IAMS-Keycloak using the URL defined in ",(0,l.jsx)(s.code,{children:"KC_HOSTNAME"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(96540);const l={},i=n.createContext(l);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);