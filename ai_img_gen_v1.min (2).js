var encryptionKey="421c954c-a305-4f3e-8b44-f04372b1659f",stableDiffusionAPIkey="XaVI61HoG6UmkdCT5hrG9PgVczKrMcxQ2nMxgjCn8QbgQ1cDwrXLThYWFiD1";function initUI(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",document.head.appendChild(e);var e=document.createElement("link");e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",e.rel="stylesheet",e.type="text/css",document.head.appendChild(e);var t=document.getElementById("ai-image-gen-f1b9d815-780f-4a64-875e-4f2b9284ced6");t.style.backgroundColor="#fafafa",t.style.overflow="visible",t.style.borderRadius="25px",t.style.opacity="1",t.style.placeSelf="center",t.style.minWidth="80%",t.style.minHeight="800px",t.style.maxWidth="80%",t.style.width="80%",t.style.height="calc(100% - 0px)",t.style.margin="auto",t.style.zIndex=2;var l=document.createElement("div");l.style.justifyContent="flex-start",l.style.position="relative",l.style.zIndex=0,l.style.maxWidth="100%",l.style.flexGrow=1,l.style.flexFlow="column",l.style.height="initial",l.style.overflow="inherit",l.style.display="flex";var i=document.createElement("div");i.style.whiteSpace="pre-wrap",i.style.overflow="visibile",i.style.fontFamily="Open Sans, sans-serif",i.style.fontSize="30px",i.style.fontWeight="bold",i.style.color="#2d2d2d",i.style.textAlign="center",i.style.lineHeight=1.4,i.style.borderRadius=0,i.style.opacity="1",i.style.alignSelf="center",i.style.minWidth="285px",i.style.maxWidth="285px",i.style.order="1",i.style.minHeight="30px",i.style.height="max-contnet",i.style.flexGrow=0,i.style.flexShrink=0,i.style.width="285px",i.style.margin="20px 0px 0px",i.style.zIndex=2,i.innerHTML="ProAI";var a=document.createElement("div");a.style.whiteSpace="pre-wrap",a.style.overflow="visibile",a.style.fontFamily="Open Sans, sans-serif",a.style.fontSize="14px",a.style.fontWeight="400",a.style.color="#141414",a.style.textAlign="center",a.style.lineHeight=1.4,a.style.borderRadius=0,a.style.opacity="1",a.style.alignSelf="center",a.style.minWidth="211px",a.style.maxWidth="211px",a.style.order="2",a.style.minHeight="20px",a.style.height="max-contnet",a.style.flexGrow=0,a.style.flexShrink=0,a.style.width="211px",a.style.margin="-5px 0px 0px 0px",a.style.zIndex=3,a.innerHTML="AI Image Generator";var s=document.createElement("div");s.style.background="linear-gradient(135deg, #4aeadc, #9778d1, #cf2aba, #ee2c82, #fb6962, #fef84c)",s.style.borderRadius="15px",s.style.opacity="1",s.style.alignSelf="center",s.style.minWidth="80%",s.style.maxWidth="80%",s.style.width="80%",s.style.order="4",s.style.minHeight="65px",s.style.maxHeight="65px",s.style.height="65px",s.style.flexGrow=1,s.style.margin="15px 0px 0px 0px",s.style.zIndex=10;var n=document.createElement("div");n.style.whiteSpace="pre-wrap",n.style.overflow="visibile",n.style.fontSize="16px",n.style.fontWeight="400",n.style.color="#2c2c2d",n.style.textAlign="center",n.style.lineHeight=1.4,n.style.borderRadius=0,n.style.opacity="1",n.style.alignSelf="center",n.style.minWidth="70%",n.style.maxWidth="70%",n.style.order="5",n.style.minHeight="45px",n.style.height="max-contnet",n.style.flexGrow=0,n.style.flexShrink=0,n.style.width="70%",n.style.margin="15px 0px 0px 0px",n.style.zIndex=11,n.style.fontFamily="Open Sans, sans-serif",n.innerHTML="Welcome to TubePro's AI image generator ProAI. This is a free AI image generator you can use to generate creative art, whenever necessary.";var r=document.createElement("div"),y=document.createElement("div");y.style.whiteSpace="pre-wrap",y.style.overflow="visibile",y.style.fontFamily="Open Sans, sans-serif",y.style.fontSize="14px",y.style.fontWeight="400",y.style.color="#1a1919",y.style.textAlign="center",y.style.lineHeight=1.4,y.style.borderRadius=0,y.style.opacity="1",y.style.alignSelf="center",y.style.minWidth="80%",y.style.maxWidth="80%",y.style.order="6",y.style.minHeight="45px",y.style.height="max-contnet",y.style.flexGrow=0,y.style.flexShrink=0,y.style.width="80%",y.style.margin="20px 0px -55px 0px",y.style.zIndex=12,r.style.textAlign="left",r.innerHTML="Start with a detailed description, be specific: *";var o=document.createElement("textarea");o.style.alignSelf="center",o.style.background="white",o.style.minWidth="80%",o.style.maxWidth="80%",o.style.order="7",o.style.width="80%",o.style.margin="35px 0px 0px",o.style.flexGrow=0,o.style.flexShrink=0,o.style.zIndex=4,o.style.fontSize="14px",o.style.fontWeight="400",o.style.fontFamily="Open Sans, sans-serif",o.style.border="1px solid rgba(104, 104, 104, 0.15)",o.style.overflow="hidden",o.style.overflowWrap="break-word",o.style.borderRadius="5px",o.style.color="#1b1b1b",o.style.lineHeight=1.5,o.style.opacity="1",o.style.height="95px",o.style.padding="6px",o.setAttribute("id","prompt"),o.setAttribute("placeholder","A futuristic city....");var p=document.createElement("div"),d=document.createElement("div"),f=document.createElement("div");f.style.display="flex",f.style.justifyContent="center",f.style.alignItems="center",p.style.whiteSpace="pre-wrap",p.style.background="rgb(75, 72, 255)",p.style.overflow="visible",p.style.fontFamily="var(--font_default)",p.style.fontSize="18px",p.style.fontWeight="bold",p.style.color="rgba(255,255,255,1)",p.style.textAlign="center",p.style.lineHeight="1.4",p.style.borderRadius="5px",p.style.opacity="1",p.style.cursor="pointer",p.style.alignSelf="center",p.style.minWidth="50%",p.style.maxWidth="50%",p.style.order="29",p.style.minHeight="40px",p.style.height="max-content",p.style.flexGrow="0",p.style.flexShrink="0",p.style.width="50%",p.style.marginLeft="0px",p.style.marginTop="0px",p.style.marginRight="0px",p.style.marginBottom="0px",p.style.zIndex="5",p.style.display="flex",p.style.flexDirection="column",p.style.justifyContent="center",d.style.fontFamily="Open Sans, sans-serif",d.innerHTML="Generate",p.setAttribute("id","btn-generate");var c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),c.setAttribute("style","margin: 0; background: transparent; display: inline-block; shape-rendering: auto;"),c.setAttribute("width","40px"),c.setAttribute("height","40px"),c.setAttribute("viewBox","0 0 100 100"),c.setAttribute("preserveAspectRatio","xMidYMid"),c.setAttribute("id","loading-icon"),c.style.display="none",c.innerHTML=`
        <g transform="translate(80,50)">
        <g transform="rotate(0)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="1">
            <animateTransform attributeName="transform" type="scale" begin="-0.875s"
                values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.875s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(71.21320343559643,71.21320343559643)">
        <g transform="rotate(45)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.875">
            <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1"
                keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.75s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(50,80)">
        <g transform="rotate(90)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.75">
            <animateTransform attributeName="transform" type="scale" begin="-0.625s"
                values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.625s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(28.786796564403577,71.21320343559643)">
        <g transform="rotate(135)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.625">
            <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1"
                keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.5s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(20,50.00000000000001)">
        <g transform="rotate(180)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.5">
            <animateTransform attributeName="transform" type="scale" begin="-0.375s"
                values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.375s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(28.78679656440357,28.786796564403577)">
        <g transform="rotate(225)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.375">
            <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1"
                keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.25s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(49.99999999999999,20)">
        <g transform="rotate(270)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.25">
            <animateTransform attributeName="transform" type="scale" begin="-0.125s"
                values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="-0.125s"></animate>
            </circle>
        </g>
        </g>
        <g transform="translate(71.21320343559643,28.78679656440357)">
        <g transform="rotate(315)">
            <circle cx="0" cy="0" r="6" fill="#ffffff" fill-opacity="0.125">
            <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1"
                keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fill-opacity" keyTimes="0;1" dur="1s" repeatCount="indefinite"
                values="1;0" begin="0s"></animate>
            </circle>
        </g>
        </g>`,f.appendChild(c),f.appendChild(d),p.appendChild(f);var m=document.createElement("div");m.style.whiteSpace="pre-wrap",m.style.overflow="visible",m.style.fontSize="15px",m.style.fontWeight="400",m.style.color="rgba(127,127,126,1)",m.style.textAlign="center",m.style.lineHeight="1.4",m.style.borderRadius="0px",m.style.opacity="1",m.style.alignSelf="center",m.style.minWidth="65%",m.style.maxWidth="65%",m.style.order="30",m.style.minHeight="45px",m.style.height="max-content",m.style.flexGrow="0",m.style.flexShrink="0",m.style.width="65%",m.style.marginLeft="0px",m.style.marginTop="20px",m.style.marginRight="0px",m.style.marginBottom="0px",m.style.zIndex="14",m.style.fontFamily="Open Sans, sans-serif",m.innerHTML="Your image will appear below and may take a few seconds to generate.";var $=document.createElement("div");$.style.borderRadius="0px",$.style.opacity="1",$.style.alignSelf="center",$.style.minWidth="250px",$.style.maxWidth="250px",$.style.order="31",$.style.height="max-content",$.style.flexGrow="0",$.style.flexShrink="0",$.style.width="250px",$.style.margin="0px",$.style.zIndex="6",$.style.display="flex",$.style.position="relative",$.style.flexDirection="row",$.style.alignItems="stretch",$.style.paddingBottom="40px";var g=document.createElement("img"),h=document.createElement("div"),_=document.createElement("a"),x=document.createElement("i");_.classList.add("btn-download"),x.setAttribute("class","fa fa-download"),_.style.position="absolute",_.style.right="10px",_.style.bottom="10px",_.style.cursor="pointer",_.style.display="none",x.style.color="white",x.style.fontSize="20px",h.style.top="0px",h.style.left="0px",h.style.display="block",h.style.width="100%",h.style.margin="0 10px",h.style.height="100%",h.style.position="relative",h.style.borderRadius="0px",g.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),g.setAttribute("id","result_img"),g.style.width="100%",h.appendChild(g),_.appendChild(x),h.appendChild(_),$.appendChild(h);var u=document.createElement("div");u.style.whiteSpace="pre-wrap",u.style.overflow="visibile",u.style.fontSize="17px",u.style.fontWeight="400",u.style.color="#2c2c2d",u.style.textAlign="center",u.style.lineHeight=1.4,u.style.borderRadius=0,u.style.opacity="1",u.style.alignSelf="center",u.style.minWidth="70%",u.style.maxWidth="70%",u.style.order="12",u.style.minHeight="30px",u.style.height="max-contnet",u.style.flexGrow=0,u.style.flexShrink=0,u.style.width="70%",u.style.margin="15px 0px 0px 0px",u.style.zIndex=11,u.setAttribute("id","leftcount-label");var b=0,v=getDecryptObject(),w=new Date,A=w.getFullYear(),S=w.getMonth()+1,k=w.getDate(),T=A+"-"+(S<10?"0":"")+S+"-"+(k<10?"0":"")+k;null!=v&&v.date==T?b=parseInt(v.value):setEncryptObject({date:T,value:(b=20).toString()}),u.style.fontFamily="Open Sans, sans-serif",u.innerHTML=`You have ${b} generations left`,l.appendChild(i),l.appendChild(a),l.appendChild(s),l.appendChild(n),y.appendChild(r),r.style.fontFamily="Open Sans, sans-serif",l.appendChild(y),l.appendChild(o),l.appendChild(u),l.appendChild(p),l.appendChild(m),l.appendChild($),t.appendChild(l)}function getDecryptObject(){return JSON.parse(localStorage.getItem("f6ebb0bb-c9a8-461b-8b68-336d56b4ca66"))}function setEncryptObject(e){var t=JSON.stringify(e);localStorage.setItem("f6ebb0bb-c9a8-461b-8b68-336d56b4ca66",t)}function fetchResult(e,t){var l,i=new Headers;i.append("Content-Type","application/json"),fetch(e,{method:"POST",headers:i,body:JSON.stringify({key:stableDiffusionAPIkey}),redirect:"follow"}).then(e=>e.text()).then(l=>{var i=JSON.parse(l);"success"==i.status?completeGeneration(i,t):(i.status="processing",fetchResult(e,t))}).catch(e=>{loadingIcon.style.display="none",alert("Something went wrong! Please try again"),console.log("error",e)})}function completeGeneration(e,t){var l=new Date,i=document.getElementById("result_img"),a=document.getElementById("leftcount-label");i.setAttribute("src",e.output[0]),i.parentElement.getElementsByTagName("a")[0].style.display="block";var s=t-1;a.innerHTML=`You have ${s} generations left`;var n=l.getFullYear(),r=l.getMonth()+1,y=l.getDate();setEncryptObject({date:n+"-"+(r<10?"0":"")+r+"-"+(y<10?"0":"")+y,value:s.toString()})}function downloadImage(e,t){fetch("https://cors-anywhere.herokuapp.com/"+e).then(e=>e.blob()).then(e=>{let l=window.URL.createObjectURL(e),i=document.createElement("a");i.style.display="none",i.href=l,i.download=t,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(l)}).catch(e=>console.log(e))}function addEvents(){document.getElementById("btn-generate").addEventListener("click",function(){var e=document.getElementById("prompt"),t=getDecryptObject(),l=0,i=new Date,a=i.getFullYear(),s=i.getMonth()+1,n=i.getDate();if(a+"-"+(s<10?"0":"")+s+"-"+(n<10?"0":"")+n==t.date){if((l=parseInt(t.value))>0&&""!=e.value){var r=document.getElementById("loading-icon");r.style.display="block";var y=`{
    "key": "${stableDiffusionAPIkey}",
    "prompt": "${e.value}",
    "negative_prompt": "",
    "width": "512",
    "height": "512",
    "samples": "1",
    "model": "midjourney",
    "num_inference_steps": "30",
    "seed": null,
    "guidance_scale": 7.5,
    "webhook": null,
    "track_id": null
}`,o=new Headers;o.append("Content-Type","application/json"),fetch("https://stablediffusionapi.com/api/v3/text2img",{method:"POST",body:y,headers:o,redirect:"follow"}).then(e=>e.text()).then(e=>{var t=JSON.parse(e);r.style.display="none","success"==t.status?completeGeneration(t,l):"processing"==t.status?(r.style.display="block",setTimeout(function(){fetchResult(t.fetch_result,l)},t.eta)):(alert("Something went wrong! Please try again"),console.log(t.message))}).catch(e=>{r.style.display="none",alert("Something went wrong! Please try again"),console.log("error",e)})}else{var p="";0==l?alert("Your generations count is 0, please try again tomorrow"):(""==e.value&&(p+="Please input prompt"),""!=p&&alert(p))}}});for(var e=document.getElementsByClassName("btn-download"),t=0;t<e.length;t++)e[t].addEventListener("click",async function(){downloadImage(this.parentElement.getElementsByTagName("img")[0].src,"image.png")})}initUI(),addEvents();