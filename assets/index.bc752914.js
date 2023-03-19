import{d as p,c as a,a as d,u as m,s as y,w as f,R as g,F as v,o as l,T as w,b,r as k,e as o,f as _,g as S,h as $,i as C,j as I,P as x}from"./vendor.feb783f4.js";const V=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};V();const N=p({setup(n){const i=[{label:"Home",to:"/"},{label:"Skills",to:"/skills"},{label:"Education",to:"/education"},{label:"Contact",to:"/contact"}];return(r,s)=>(l(),a(v,null,[d(m(y),{model:i}),d(m(g),null,{default:f(({Component:e,route:t})=>[d(w,{name:"slide-fade",mode:"out-in"},{default:f(()=>[(l(),b(k(e),{key:t.path}))]),_:2},1024)]),_:1})],64))}});var c=(n,i)=>{const r=n.__vccOpts||n;for(const[s,e]of i)r[s]=e;return r};const L={},A=o("h2",null,"Welcome!",-1),H=o("p",null," I intend for this site to serve as a reference for anyone who wants to know more about me, my resume, or my hobbies. ",-1),P=o("p",null," As this site is a work-in-progress, please check back from time-to-time if you are looking for a section which does not yet exist, or for new visual changes. ",-1),T=o("p",null,[_(" If you're interested in following along with the code for this site, you can do so by viewing "),o("a",{href:"https://github.com/HarleyShugart/harleyshugartvue",target:"_blank"},"this repository on GitHub"),_(". ")],-1),B=[A,H,P,T];function E(n,i){return l(),a("div",null,B)}var M=c(L,[["render",E]]);const O={},R=o("p",null," I received my B.A. from Wittenberg University in the fall of 2015. I graduated with a major in Computer Science and a minor in German. ",-1),G=o("p",null," I had previously attended Muskingum University in New Concord, Ohio for my freshman year of undergraduate study. ",-1),j=[R,G];function Q(n,i){return l(),a("div",null,j)}var F=c(O,[["render",Q]]);const U={},W=S("<h3>This serves to document some of the skills, tools, languages, etc which I&#39;ve utilized during my career.</h3><br><h4>I use the following on a daily basis as part of my current position:</h4><ul><li>Vue.js</li><li>TypeScript</li><li>VueRouter</li><li>Cypress</li><li>Storybook</li><li>Visual Studio Code</li><li>Git &amp; GitHub (including GitHub Actions)</li><li>npm</li></ul><h4>As part of my employment I am also well-versed with the following:</h4><ul><li>C#</li><li>PostgreSQL</li><li>DBeaver</li><li>Microsoft SQL Server</li><li>Microsoft SQL Server Management Studio</li><li>ASP.NET</li><li>MVC</li><li>Razor</li><li>ReSharper</li><li>Visual Studio</li><li>TeamCity</li><li>NUnit</li><li>jQuery</li></ul><h4>I also have limited experience with the following from my collegiate studies:</h4><ul><li>Java</li><li>Eclipse</li><li>C++</li><li>Python</li></ul>",8),z=[W];function D(n,i){return l(),a("div",null,z)}var q=c(U,[["render",D]]);const J={},K=o("p",null,"If you would like to contact me, please feel free to:",-1),X=o("div",{class:"list-container"},[o("ul",null,[o("li",null,[o("a",{href:"https://www.linkedin.com/in/harleyshugart/",target:"_blank"},"connect with me on LinkedIn")]),o("li",null," send me an email at shugart.development@gmail.com ")])],-1),Y=[K,X];function Z(n,i){return l(),a("div",null,Y)}var ee=c(J,[["render",Z]]);const te=[{path:"/",component:M},{path:"/education",component:F},{path:"/skills",component:q},{path:"/contact",component:ee}],oe=$({history:C(),routes:te});const h=I(N);h.use(x);h.use(oe);h.mount("#app");
