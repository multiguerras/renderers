import{L as c}from"./LastRenderedImage.70bb32d8.js";import{N as i,U as _}from"./UpdateListener.8db9cd8c.js";import{_ as l,q as t,a as p,c as m,e as o,f as a,F as f}from"./index.ef21516a.js";const u={name:"LastRenderedView",components:{LastRenderedImage:c,NotificationBar:i,UpdateListener:_},data:()=>({}),methods:{onSioLastRenderedUpdate(e){this.$refs.lastRenderedImage.refreshLastRenderedImage(e)},onSIOReconnected(){},onSIODisconnected(e){}}},R={class:"global-last-rendered"},L={class:"app-footer"};function S(e,g,I,h,v,n){const d=t("last-rendered-image"),s=t("notification-bar"),r=t("update-listener");return p(),m(f,null,[o("div",R,[a(d,{ref:"lastRenderedImage",jobID:!1,thumbnailSuffix:"last-rendered.jpg"},null,512)]),o("footer",L,[a(s)]),a(r,{ref:"updateListener",mainSubscription:"allLastRendered",onLastRenderedUpdate:n.onSioLastRenderedUpdate,onSioReconnected:n.onSIOReconnected,onSioDisconnected:n.onSIODisconnected},null,8,["onLastRenderedUpdate","onSioReconnected","onSioDisconnected"])],64)}var D=l(u,[["render",S],["__scopeId","data-v-97677aea"]]);export{D as default};
