import{c as w,r as i,N as k,Y as x,Q as e,a1 as a,a7 as h,S as p,al as _,ag as f,af as y,F as m,_ as C}from"./framework-4112b4b4.js";const T=y('<h1 id="_115-cloud" tabindex="-1"><a class="header-anchor" href="#_115-cloud" aria-hidden="true">#</a> 115 Cloud</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Due to the limitation of 115 Cloud, the download must carry cookies, so only the proxy function in this program can be used for transfer. (You can use other machines to transfer)</p></div><h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id" aria-hidden="true">#</a> Root folder ID</h2>',3),I={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"249163533602609229",-1),Q=e("h2",{id:"login-by-qrcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-qrcode","aria-hidden":"true"},"#"),a(" Login by QRCode")],-1),U=["disabled"],D={style:{margin:"4px"}},S=["src"],M={class:"hint-container info"},W={class:"hint-container-title"},j=e("h2",{id:"login-by-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-cookie","aria-hidden":"true"},"#"),a(" Login by Cookie")],-1),E=e("p",null,[a("The "),e("code",null,"cookie"),a(" is obtained from the request.")],-1),q=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),a(" The default download method used")],-1),V=w({__name:"115.html",setup(z){const n=i("Get QRCode"),t=i(0),d=i(""),r=i(""),s=i(""),v=async()=>{n.value="等待...",t.value=1;const o=await(await fetch("https://api.nn.ci/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token")).json();console.log(o),n.value="Use 115 Cloud APP To Scan Then Click",t.value=2,s.value={uid:o.data.uid,time:o.data.time.toString(),sign:o.data.sign,_:(new Date().getTime()/1e3).toString()},d.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(o.data.qrcode)}`},g=async()=>{t.value=3,n.value="Waiting...";const o=await(await fetch(`https://api.nn.ci/proxy/qrcodeapi.115.com/get/status/?uid=${s.value.uid}&time=${s.value.time}&sign=${s.value.sign}&_=${s.value._}`)).json(),{data:{version:u,status:c,msg:H}}=o;if(c!==2){t.value=2,n.value="Use 115 Cloud APP To Scan Then Click",alert("Status:"+c);return}r.value=s.value.uid,n.value="Get Token Success",t.value=4,console.log(o)},b=async()=>{t.value===0&&v(),t.value===2&&g()};return(l,o)=>{const u=m("ExternalLinkIcon"),c=m("Mermaid");return k(),x("div",null,[T,e("p",null,[a("Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set, such as "),e("a",I,[a("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),h(u)]),a(", which is "),N]),Q,e("p",null,[e("button",{disabled:t.value===3||t.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:b},p(n.value),9,U)]),_(e("div",D,[e("img",{src:d.value},null,8,S)],512),[[f,d.value]]),_(e("div",null,[e("div",M,[e("p",W,"Token: "+p(r.value),1)])],512),[[f,r.value]]),j,E,q,h(c,{id:"mermaid-35",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLntg6j6U6wO9WNxXWYZKdcweUcIUuf3zcjYEyzQ+Xro0vwMfba0ESZgK6mgV9woT8b9f8GBUwT5KVcDHr/IrbqrJ1okJlFh2Wgp1IY2NwmN8wsdV3Mj8+TZ6Z"})])}}}),L=C(V,[["__file","115.html.vue"]]);export{L as default};