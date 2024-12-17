(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2341:function(e,t,r){Promise.resolve().then(r.t.bind(r,7960,23)),Promise.resolve().then(r.bind(r,1426)),Promise.resolve().then(r.bind(r,7576)),Promise.resolve().then(r.bind(r,4937)),Promise.resolve().then(r.bind(r,3431)),Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.t.bind(r,4742,23))},1426:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var n=r(7437);r(2265);var a=r(5922);function s(e){let{children:t,...r}=e;return(0,n.jsx)(a.f,{...r,children:t})}var i=function(e){let{children:t}=e;return(0,n.jsx)(s,{attribute:"class",defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:t})}},7576:function(e,t,r){"use strict";var n=r(7437),a=r(3145);t.default=function(){return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center gap-5 py-10",children:[(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"\xa9 2024"}),(0,n.jsxs)("div",{className:"relative w-[150px] aspect-[5/1]",children:[(0,n.jsx)(a.default,{src:"/images/diametric-dark.png",alt:"Diametric Dark",fill:!0,className:"object-contain transition-opacity duration-300 theme-image-dark"}),(0,n.jsx)(a.default,{src:"/images/diametric-light.png",alt:"Diametric Light",fill:!0,className:"object-contain transition-opacity duration-300 theme-image-light"})]})]})}},4937:function(e,t,r){"use strict";var n=r(7437),a=r(7648),s=r(3145);t.default=function(){return(0,n.jsx)(a.default,{href:"/",children:(0,n.jsxs)("div",{className:"relative w-[150px] aspect-[5/1]",children:[(0,n.jsx)(s.default,{src:"/images/diametric-dark.png",alt:"Diametric Dark",fill:!0,className:"object-contain transition-opacity duration-300 theme-image-dark"}),(0,n.jsx)(s.default,{src:"/images/diametric-light.png",alt:"Diametric Light",fill:!0,className:"object-contain transition-opacity duration-300 theme-image-light"})]})})}},3431:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var n=r(7437),a=r(2265),s=r(653),i=r(520),o=r(5922);function l(){let{theme:e,setTheme:t}=function(){let{theme:e,setTheme:t}=(0,o.F)(),[r,n]=(0,a.useState)(!1),[s,i]=(0,a.useState)("light");return(0,a.useEffect)(()=>{n(!0),i(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")},[]),{theme:r?e:s,setTheme:t,mounted:r}}();return(0,n.jsxs)(i.z,{variant:"outline",size:"icon",onClick:()=>{t("dark"===e?"light":"dark")},children:[(0,n.jsx)(s.NWY,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,n.jsx)(s.kLh,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,n.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},520:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var n=r(7437),a=r(2265),s=r(5293),i=r(535),o=r(1994),l=r(3335);let c=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:d=!1,...u}=e,m=d?s.g7:"button";return(0,n.jsx)(m,{className:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,o.W)(t))}(c({variant:a,size:i,className:r})),ref:t,...u})});d.displayName="Button"},7960:function(){},4742:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}},5922:function(e,t,r){"use strict";r.d(t,{F:function(){return d},f:function(){return u}});var n=r(2265),a=(e,t,r,n,a,s,i,o)=>{let l=document.documentElement,c=["light","dark"];function d(t){(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,n=r&&s?a.map(e=>s[e]||e):a;r?(l.classList.remove(...n),l.classList.add(t)):l.setAttribute(e,t)}),o&&c.includes(t)&&(l.style.colorScheme=t)}if(n)d(n);else try{let e=localStorage.getItem(t)||r,n=i&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(n)}catch(e){}},s=["light","dark"],i="(prefers-color-scheme: dark)",o="undefined"==typeof window,l=n.createContext(void 0),c={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=n.useContext(l))?e:c},u=e=>n.useContext(l)?n.createElement(n.Fragment,null,e.children):n.createElement(h,{...e}),m=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:a=!0,enableColorScheme:o=!0,storageKey:c="theme",themes:d=m,defaultTheme:u=a?"system":"light",attribute:h="data-theme",value:y,children:b,nonce:x,scriptProps:k}=e,[w,j]=n.useState(()=>g(c,u)),[N,S]=n.useState(()=>g(c)),_=y?Object.values(y):d,E=n.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=p());let n=y?y[t]:t,i=r?v(x):null,l=document.documentElement,c=e=>{"class"===e?(l.classList.remove(..._),n&&l.classList.add(n)):e.startsWith("data-")&&(n?l.setAttribute(e,n):l.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),o){let e=s.includes(u)?u:null,r=s.includes(t)?t:e;l.style.colorScheme=r}null==i||i()},[x]),C=n.useCallback(e=>{let t="function"==typeof e?e(w):e;j(t);try{localStorage.setItem(c,t)}catch(e){}},[w]),T=n.useCallback(e=>{S(p(e)),"system"===w&&a&&!t&&E("system")},[w,t]);n.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),n.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?j(e.newValue):C(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),n.useEffect(()=>{E(null!=t?t:w)},[t,w]);let L=n.useMemo(()=>({theme:w,setTheme:C,forcedTheme:t,resolvedTheme:"system"===w?N:w,themes:a?[...d,"system"]:d,systemTheme:a?N:void 0}),[w,C,t,N,a,d]);return n.createElement(l.Provider,{value:L},n.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:a,enableColorScheme:o,defaultTheme:u,value:y,themes:d,nonce:x,scriptProps:k}),b)},f=n.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:s,enableSystem:i,enableColorScheme:o,defaultTheme:l,value:c,themes:d,nonce:u,scriptProps:m}=e,h=JSON.stringify([s,r,l,t,d,c,i,o]).slice(1,-1);return n.createElement("script",{...m,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),g=(e,t)=>{let r;if(!o){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},v=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}},function(e){e.O(0,[540,310,685,971,117,744],function(){return e(e.s=2341)}),_N_E=e.O()}]);