var encryptionKey="421c954c-a305-4f3e-8b44-f04372b1659f",stableDiffusionAPIkey="XaVI61HoG6UmkdCT5hrG9PgVczKrMcxQ2nMxgjCn8QbgQ1cDwrXLThYWFiD1",loadingSvg=`
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
    </g>`;const modelList=[{name:"MidJourney V4",id:"midjourney",src:"./models-pictures/midjourneyv4.png"},{name:"Realistic Vision V1.3",id:"realistic-vision-v13",src:"./models-pictures/realistic-vision-v13.png"},{name:"GTA5 Artwork Diffusion",id:"gta5-artwork-diffusi",src:"./models-pictures/gta5.png"},{name:"Dream Shaper",id:"dream-shaper-8797",src:"./models-pictures/dream-shaper.png"},{name:"SynthwavePunk",id:"synthwave-diffusion",src:"./models-pictures/synthwave-punk.png"},{name:"drood_lyriel_v15",id:"droodlyrielv15",src:"./models-pictures/drood-lyriel.jpeg"},{name:"Redshift Diffusion",id:"redshift-diffusion",src:"./models-pictures/redshift-diffusion.png"},{name:"Disco Diffusion",id:"disco-diffusion",src:"./models-pictures/disco-diffusion.jpeg"},{name:"Low Poly World",id:"lowpoly-diffusion",src:"./models-pictures/lowpoly-diffusion.png"},{name:"Midjourney-v4-PaintArt",id:"midjourney-v4-painta",src:"./models-pictures/midjourney-v4-painta.png"},];function initUI(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",document.head.appendChild(e);var e=document.createElement("link");e.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",e.rel="stylesheet",e.type="text/css",document.head.appendChild(e);var t=document.getElementById("ai-image-gen-f1b9d815-780f-4a64-875e-4f2b9284ced6");t.style.backgroundColor="#fafafa",t.style.overflow="visible",t.style.borderRadius="25px",t.style.opacity="1",t.style.placeSelf="center",t.style.minWidth="80%",t.style.minHeight="800px",t.style.maxWidth="80%",t.style.width="80%",t.style.height="calc(100% - 0px)",t.style.margin="auto",t.style.zIndex=2;var l=document.createElement("div");l.style.justifyContent="flex-start",l.style.position="relative",l.style.zIndex=0,l.style.maxWidth="100%",l.style.flexGrow=1,l.style.flexFlow="column",l.style.height="initial",l.style.overflow="inherit",l.style.display="flex",l.setAttribute("id","generation_container");var i=document.createElement("div");i.style.whiteSpace="pre-wrap",i.style.overflow="visibile",i.style.fontFamily="Open Sans, sans-serif",i.style.fontSize="30px",i.style.fontWeight="bold",i.style.color="#2d2d2d",i.style.textAlign="center",i.style.lineHeight=1.4,i.style.borderRadius=0,i.style.opacity="1",i.style.alignSelf="center",i.style.minWidth="285px",i.style.maxWidth="285px",i.style.order="1",i.style.minHeight="30px",i.style.height="max-contnet",i.style.flexGrow=0,i.style.flexShrink=0,i.style.width="285px",i.style.margin="20px 0px 0px",i.style.zIndex=2,i.innerHTML="ProAI";var s=document.createElement("div");s.style.whiteSpace="pre-wrap",s.style.overflow="visibile",s.style.fontFamily="Open Sans, sans-serif",s.style.fontSize="14px",s.style.fontWeight="400",s.style.color="#141414",s.style.textAlign="center",s.style.lineHeight=1.4,s.style.borderRadius=0,s.style.opacity="1",s.style.alignSelf="center",s.style.minWidth="211px",s.style.maxWidth="211px",s.style.order="2",s.style.minHeight="20px",s.style.height="max-contnet",s.style.flexGrow=0,s.style.flexShrink=0,s.style.width="211px",s.style.margin="-5px 0px 0px 0px",s.style.zIndex=3,s.innerHTML="AI Image Generator";var n=document.createElement("div");n.style.background="linear-gradient(135deg, #4aeadc, #9778d1, #cf2aba, #ee2c82, #fb6962, #fef84c)",n.style.borderRadius="15px",n.style.opacity="1",n.style.alignSelf="center",n.style.minWidth="80%",n.style.maxWidth="80%",n.style.width="80%",n.style.order="4",n.style.minHeight="65px",n.style.maxHeight="65px",n.style.height="65px",n.style.flexGrow=1,n.style.margin="15px 0px 0px 0px",n.style.zIndex=10;var a=document.createElement("div");a.style.whiteSpace="pre-wrap",a.style.overflow="visibile",a.style.fontSize="16px",a.style.fontWeight="400",a.style.color="#2c2c2d",a.style.textAlign="center",a.style.lineHeight=1.4,a.style.borderRadius=0,a.style.opacity="1",a.style.alignSelf="center",a.style.minWidth="70%",a.style.maxWidth="70%",a.style.order="5",a.style.minHeight="45px",a.style.height="max-contnet",a.style.flexGrow=0,a.style.flexShrink=0,a.style.width="70%",a.style.margin="15px 0px 0px 0px",a.style.zIndex=11,a.style.fontFamily="Open Sans, sans-serif",a.innerHTML="Welcome to TubePro's AI image generator ProAI. This is a free AI image generator you can use to generate creative art, whenever necessary.";var r=document.createElement("div"),o=document.createElement("div");o.style.whiteSpace="pre-wrap",o.style.overflow="visibile",o.style.fontFamily="Open Sans, sans-serif",o.style.fontSize="14px",o.style.fontWeight="400",o.style.color="#1a1919",o.style.textAlign="center",o.style.lineHeight=1.4,o.style.borderRadius=0,o.style.opacity="1",o.style.alignSelf="center",o.style.minWidth="80%",o.style.maxWidth="80%",o.style.order="6",o.style.minHeight="45px",o.style.height="max-contnet",o.style.flexGrow=0,o.style.flexShrink=0,o.style.width="80%",o.style.margin="20px 0px -55px 0px",o.style.zIndex=12,r.style.textAlign="left",r.innerHTML="Start with a detailed description, be specific: *";var y=document.createElement("textarea");y.style.alignSelf="center",y.style.background="white",y.style.minWidth="80%",y.style.maxWidth="80%",y.style.order="7",y.style.width="80%",y.style.margin="35px 0px 0px",y.style.flexGrow=0,y.style.flexShrink=0,y.style.zIndex=4,y.style.fontSize="14px",y.style.fontWeight="400",y.style.fontFamily="Open Sans, sans-serif",y.style.border="1px solid rgba(104, 104, 104, 0.15)",y.style.overflow="hidden",y.style.overflowWrap="break-word",y.style.borderRadius="5px",y.style.color="#1b1b1b",y.style.lineHeight=1.5,y.style.opacity="1",y.style.height="95px",y.style.padding="6px",y.setAttribute("id","prompt"),y.setAttribute("placeholder","A futuristic city....");var d=document.createElement("div"),p=document.createElement("div"),c=document.createElement("div");c.innerHTML="Width (pixels): ";var m=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div");f.innerHTML="Height (pixels): ";var h=document.createElement("div");d.style.justifyContent="flex-start",d.style.borderRadius="0px",d.style.opacity="1",d.style.alignSelf="center",d.style.minWidth="80%",d.style.maxWidth="80%",d.style.order="11",d.style.minHeight="30px",d.style.height="max-content",d.style.flexGrow="0",d.style.flexShrink="0",d.style.width="80%",d.style.margin="10px 0px 0px 0px",d.style.zIndex="9",d.style.flexDirection="row",d.style.flexWrap="wrap",d.style.display="flex",d.style.alignContent="stretch",p.style.whiteSpace="pre-wrap",p.style.overflow="visible",p.style.fontFamily="Open Sans, sans-serif",p.style.fontSize="14px",p.style.fontWeight="bold",p.style.color="rgba(77,79,79,1)",p.style.lineHeight="1.4",p.style.borderRadius="0px",p.style.opacity="1",p.style.alignSelf="flex-start",p.style.minWidth="60px",p.style.order="3",p.style.minHeight="27px",p.style.width="max-content",p.style.flexGrow="0",p.style.height="max-content",p.style.margin="0px",p.style.zIndex="8",p.style.display="flex",p.style.flexDirection="column",p.style.justifyContent="center",p.appendChild(c),m.style.alignSelf="flex-start",m.style.minWidth="50px",m.style.order="7",m.style.minHeight="75px",m.style.width="max-content",m.style.flexGrow="0",m.style.height="max-content",m.style.margin="0px 0px 0px",m.style.zIndex="10",m.style.gridTemplateColumns="repeat(1, 1fr)",m.style.fontFamily="Open Sans, sans-serif",m.style.fontSize="14px",m.style.fontWeight="400",m.style.color="rgb(79, 76, 247)",m.style.opacity="1",m.style.position="relative",m.style.paddingTop="0px",m.style.paddingBottom="0px",m.style.display="grid",m.style.gridAutoRows="max-content",m.style.paddingLeft="20px",m.style.gap="0px 20px",m.classList.add("size-radio-container");let x=[512,768,1024];x.map((e,t)=>{var l=document.createElement("input"),i=document.createElement("label"),s=document.createElement("div");l.setAttribute("type","radio"),l.setAttribute("name","ai_image_width"),l.setAttribute("id",`ai_image_width_option_${t}`),l.setAttribute("value",`${e}`),i.style.display="inline-block",i.style.verticalAlign="middle",i.style.position="relative",i.style.paddingLeft="6px",i.style.paddingRight="6px",i.style.cursor="pointer",i.style.width="100%",i.style.minWidth="80px",i.style.marginTop="3px",i.style.fontFamily="Open Sans, sans-serif",i.setAttribute("for",`ai_image_width_option_${t}`),i.innerHTML=e,s.style.display="flex",s.style.alignItems="center",s.style.height="25px",s.style.height="25px",s.style.paddingTop="4px",s.style.paddingBottom="4px",s.appendChild(l),s.appendChild(i),m.appendChild(s)}),g.style.whiteSpace="pre-wrap",g.style.overflow="visible",g.style.fontFamily="Open Sans, sans-serif",g.style.fontSize="14px",g.style.fontWeight="bold",g.style.color="rgba(77,79,79,1)",g.style.lineHeight="1.4",g.style.borderRadius="0px",g.style.opacity="1",g.style.alignSelf="flex-start",g.style.minWidth="60px",g.style.order="8",g.style.minHeight="27px",g.style.width="max-content",g.style.flexGrow="0",g.style.height="max-content",g.style.margin="0px",g.style.zIndex="8",g.style.display="flex",g.style.flexDirection="column",g.style.justifyContent="center",g.appendChild(f),h.style.alignSelf="flex-start",h.style.minWidth="50px",h.style.order="9",h.style.minHeight="75px",h.style.width="max-content",h.style.flexGrow="0",h.style.height="max-content",h.style.margin="0px 0px 0px",h.style.zIndex="10",h.style.gridTemplateColumns="repeat(1, 1fr)",h.style.fontFamily="Open Sans, sans-serif",h.style.fontSize="14px",h.style.fontWeight="400",h.style.color="rgb(79, 76, 247)",h.style.opacity="1",h.style.position="relative",h.style.paddingTop="0px",h.style.paddingBottom="0px",h.style.display="grid",h.style.gridAutoRows="max-content",h.style.paddingLeft="20px",h.style.gap="0px 20px",h.classList.add("size-radio-container"),x.map((e,t)=>{var l=document.createElement("input"),i=document.createElement("label"),s=document.createElement("div");l.setAttribute("type","radio"),l.setAttribute("name","ai_image_height"),l.setAttribute("id",`ai_image_height_option_${t}`),l.setAttribute("value",`${e}`),i.style.display="inline-block",i.style.verticalAlign="middle",i.style.fontFamily="Open Sans, sans-serif",i.style.position="relative",i.style.paddingLeft="6px",i.style.paddingRight="6px",i.style.cursor="pointer",i.style.width="100%",i.style.minWidth="80px",i.style.marginTop="3px",i.setAttribute("for",`ai_image_height_option_${t}`),i.innerHTML=e,s.style.display="flex",s.style.alignItems="center",s.style.height="25px",s.style.paddingTop="4px",s.style.paddingBottom="4px",s.appendChild(l),s.appendChild(i),h.appendChild(s)}),d.appendChild(p),d.appendChild(m),d.appendChild(g),d.appendChild(h);var $=document.createElement("div"),u=document.createElement("div"),_=document.createElement("div");_.innerHTML="Sample Number: ";var b=document.createElement("div");$.style.justifyContent="flex-start",$.style.borderRadius="0px",$.style.opacity="1",$.style.alignSelf="center",$.style.minWidth="80%",$.style.maxWidth="80%",$.style.order="12",$.style.minHeight="30px",$.style.height="max-content",$.style.flexGrow="0",$.style.flexShrink="0",$.style.width="80%",$.style.margin="10px 0px 0px 0px",$.style.zIndex="9",$.style.flexDirection="row",$.style.flexWrap="wrap",$.style.display="flex",$.style.alignContent="stretch",u.style.whiteSpace="pre-wrap",u.style.overflow="visible",u.style.fontFamily="Open Sans, sans-serif",u.style.fontSize="14px",u.style.fontWeight="bold",u.style.color="rgba(77,79,79,1)",u.style.lineHeight="1.4",u.style.borderRadius="0px",u.style.opacity="1",u.style.alignSelf="flex-start",u.style.minWidth="60px",u.style.order="3",u.style.minHeight="27px",u.style.width="max-content",u.style.flexGrow="0",u.style.height="max-content",u.style.margin="0px",u.style.zIndex="8",u.style.display="flex",u.style.flexDirection="column",u.style.justifyContent="center",u.appendChild(_),b.style.alignSelf="flex-start",b.style.minWidth="50px",b.style.order="7",b.style.width="max-content",b.style.flexGrow="0",b.style.height="max-content",b.style.margin="0px 0px 0px",b.style.zIndex="10",b.style.gridTemplateColumns="repeat(1, 1fr)",b.style.fontFamily="Open Sans, sans-serif",b.style.fontSize="14px",b.style.fontWeight="400",b.style.color="rgb(79, 76, 247)",b.style.opacity="1",b.style.position="relative",b.style.paddingTop="0px",b.style.paddingBottom="0px",b.style.display="flex",b.style.gridAutoRows="max-content",b.style.paddingLeft="20px",b.style.gap="0px 20px",b.classList.add("size-radio-container"),[1,2,3,4].map((e,t)=>{var l=document.createElement("input"),i=document.createElement("label"),s=document.createElement("div");l.setAttribute("type","radio"),l.setAttribute("name","ai_sample_count"),l.setAttribute("id",`ai_sample_count_option_${t}`),l.setAttribute("value",`${e}`),i.style.display="inline-block",i.style.verticalAlign="middle",i.style.position="relative",i.style.paddingLeft="6px",i.style.paddingRight="6px",i.style.cursor="pointer",i.style.width="100%",i.style.minWidth="5px",i.style.marginTop="3px",i.style.fontFamily="Open Sans, sans-serif",i.setAttribute("for",`ai_sample_count_option_${t}`),i.innerHTML=e,s.style.display="flex",s.style.alignItems="center",s.style.height="25px",s.style.height="25px",s.style.paddingTop="4px",s.style.paddingBottom="4px",s.appendChild(l),s.appendChild(i),b.appendChild(s)}),$.appendChild(u),$.appendChild(b);var v=document.createElement("div"),w=document.createElement("div"),A=document.createElement("div");A.style.display="flex",A.style.justifyContent="center",A.style.alignItems="center",v.style.whiteSpace="pre-wrap",v.style.background="rgb(75, 72, 255)",v.style.overflow="visible",v.style.fontFamily="var(--font_default)",v.style.fontSize="18px",v.style.fontWeight="bold",v.style.color="rgba(255,255,255,1)",v.style.textAlign="center",v.style.lineHeight="1.4",v.style.borderRadius="5px",v.style.opacity="1",v.style.cursor="pointer",v.style.alignSelf="center",v.style.minWidth="80%",v.style.maxWidth="80%",v.style.order="29",v.style.minHeight="40px",v.style.height="max-content",v.style.flexGrow="0",v.style.flexShrink="0",v.style.width="80%",v.style.marginLeft="0px",v.style.marginTop="10px",v.style.marginRight="0px",v.style.marginBottom="0px",v.style.zIndex="5",v.style.display="flex",v.style.flexDirection="column",v.style.justifyContent="center",w.style.fontFamily="Open Sans, sans-serif",w.innerHTML="Generate",v.setAttribute("id","btn-generate");var S=document.createElementNS("http://www.w3.org/2000/svg","svg");S.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),S.setAttribute("style","margin: 0; background: transparent; display: inline-block; shape-rendering: auto;"),S.setAttribute("width","40px"),S.setAttribute("height","40px"),S.setAttribute("viewBox","0 0 100 100"),S.setAttribute("preserveAspectRatio","xMidYMid"),S.setAttribute("id","loading-icon"),S.classList.add("loading-icon"),S.style.display="none",S.innerHTML=loadingSvg,A.appendChild(S),A.appendChild(w),v.appendChild(A);var C=document.createElement("div");C.style.whiteSpace="pre-wrap",C.style.overflow="visible",C.style.fontSize="15px",C.style.fontWeight="400",C.style.color="rgba(127,127,126,1)",C.style.textAlign="center",C.style.lineHeight="1.4",C.style.borderRadius="0px",C.style.opacity="1",C.style.alignSelf="center",C.style.minWidth="65%",C.style.maxWidth="65%",C.style.order="30",C.style.minHeight="45px",C.style.height="max-content",C.style.flexGrow="0",C.style.flexShrink="0",C.style.width="65%",C.style.marginLeft="0px",C.style.marginTop="20px",C.style.marginRight="0px",C.style.marginBottom="0px",C.style.zIndex="14",C.style.fontFamily="Open Sans, sans-serif",C.innerHTML="Your image will appear below and may take a few seconds to generate.";var k=document.createElement("div");k.style.borderRadius="0px",k.style.opacity="1",k.style.alignSelf="center",k.style.minWidth="50%",k.style.maxWidth="50%",k.style.order="11",k.style.height="max-content",k.style.flexGrow="0",k.style.flexShrink="0",k.style.width="50%",k.style.margin="0px",k.style.zIndex="6",k.style.display="block",k.style.position="relative",k.style.paddingBottom="0px",k.style.textAlign="center";for(var E=0;E<modelList.length;E++){var T=document.createElement("div");T.style.margin="5px",T.style.textAlign="center",T.style.width="fit-content",T.style.maxWidth="120px",T.style.minHeight="130px",T.style.height="130px",T.style.display="inline-block",T.style.flexDirection="column";var L=document.createElement("img"),W=document.createElement("div");W.innerHTML=modelList[E].name,W.style.fontWeight="600",W.style.marginTop="5px",W.style.fontSize="10px",W.style.fontFamily="Open Sans, sans-serif",L.style.top="0px",L.style.left="0px",L.style.display="block",L.style.margin="auto",L.style.width="110px",L.style.height="110px",L.style.borderRadius="10px",L.style.objectFit="cover",L.style.position="relative",L.style.cursor="pointer",L.style.border="4px solid black",L.setAttribute("src",modelList[E].src),L.setAttribute("id",`${modelList[E].id}`),L.setAttribute("data-id",`${modelList[E].id}`),L.classList.add("model-option-img"),W.classList.add("model-option-label"),W.setAttribute("data-id",`${modelList[E].id}`),T.appendChild(L),T.appendChild(W),k.appendChild(T)}var I=document.createElement("div");I.style.borderRadius="0px",I.style.opacity="1",I.style.alignSelf="center",I.style.minWidth="80%",I.style.maxWidth="80%",I.style.order="11",I.style.height="max-content",I.style.flexGrow="0",I.style.flexShrink="0",I.style.width="80%",I.style.margin="0px",I.style.zIndex="6",I.style.display="block",I.style.position="relative",I.style.paddingBottom="0px",I.style.textAlign="center";for(var E=5;E<modelList.length;E++){var T=document.createElement("div");T.style.margin="5px",T.style.textAlign="center",T.style.width="fit-content",T.style.maxWidth="120px",T.style.minHeight="130px",T.style.height="130px",T.style.display="inline-block",T.style.flexDirection="column";var L=document.createElement("img"),W=document.createElement("div");W.innerHTML=modelList[E].name,W.style.fontWeight="600",W.style.marginTop="5px",W.style.fontSize="10px",W.style.fontFamily="Open Sans, sans-serif",L.style.top="0px",L.style.left="0px",L.style.display="block",L.style.margin="auto",L.style.width="110px",L.style.height="110px",L.style.borderRadius="10px",L.style.objectFit="cover",L.style.position="relative",L.style.cursor="pointer",L.style.border="4px solid black",L.setAttribute("src",modelList[E].src),L.setAttribute("id",`${modelList[E].id}`),L.setAttribute("data-id",`${modelList[E].id}`),L.classList.add("model-option-img"),W.classList.add("model-option-label"),W.setAttribute("data-id",`${modelList[E].id}`),T.appendChild(L),T.appendChild(W),I.appendChild(T)}var H=document.createElement("div");H.style.display="flex",H.style.justifyContent="center",H.style.alignItems="center",H.style.order="32",H.style.maxWidth="80%",H.style.minWidth="80%",H.style.width="80%",H.style.whiteSpace="pre-wrap",H.style.height="max-content",H.style.flexGrow="0",H.style.flexShrink="0",H.style.marginLeft="0px",H.style.marginTop="10px",H.style.marginRight="0px",H.style.marginBottom="0px",H.style.zIndex="5",H.style.display="flex",H.style.flexDirection="row",H.style.justifyContent="center",H.style.alignSelf="center";var R=document.createElement("div"),z=document.createElement("div"),B=document.createElement("div");B.style.display="flex",B.style.justifyContent="center",B.style.alignItems="center",R.style.whiteSpace="pre-wrap",R.style.background="rgb(75, 72, 255)",R.style.overflow="visible",R.style.fontFamily="var(--font_default)",R.style.fontSize="18px",R.style.fontWeight="bold",R.style.color="rgba(255,255,255,1)",R.style.textAlign="center",R.style.lineHeight="1.4",R.style.borderRadius="5px",R.style.opacity="1",R.style.cursor="pointer",R.style.alignSelf="center",R.style.minHeight="40px",R.style.height="max-content",R.style.flexGrow="0",R.style.flexShrink="0",R.style.marginLeft="5px",R.style.marginTop="10px",R.style.marginRight="5px",R.style.marginBottom="0px",R.style.paddingLeft="20px",R.style.paddingRight="20px",R.style.zIndex="5",R.style.display="flex",R.style.flexDirection="column",R.style.justifyContent="center",z.style.fontFamily="Open Sans, sans-serif",z.innerHTML="Upscale 2x",R.setAttribute("id","btn-upscale2"),R.classList.add("btn-upscale"),R.setAttribute("data-value",2);var S=document.createElementNS("http://www.w3.org/2000/svg","svg");S.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),S.setAttribute("style","margin: 0; background: transparent; display: inline-block; shape-rendering: auto;"),S.setAttribute("width","40px"),S.setAttribute("height","40px"),S.setAttribute("viewBox","0 0 100 100"),S.setAttribute("preserveAspectRatio","xMidYMid"),S.setAttribute("id","loading-icon2"),S.classList.add("loading-icon"),S.style.display="none",S.innerHTML=loadingSvg,B.appendChild(S),B.appendChild(z),R.appendChild(B);var j=document.createElement("div"),G=document.createElement("div"),N=document.createElement("div");N.style.display="flex",N.style.justifyContent="center",N.style.alignItems="center",j.style.whiteSpace="pre-wrap",j.style.background="rgb(75, 72, 255)",j.style.overflow="visible",j.style.fontFamily="var(--font_default)",j.style.fontSize="18px",j.style.fontWeight="bold",j.style.color="rgba(255,255,255,1)",j.style.textAlign="center",j.style.lineHeight="1.4",j.style.borderRadius="5px",j.style.opacity="1",j.style.cursor="pointer",j.style.alignSelf="center",j.style.minHeight="40px",j.style.height="max-content",j.style.flexGrow="0",j.style.flexShrink="0",j.style.marginLeft="5px",j.style.marginTop="10px",j.style.marginRight="5px",j.style.marginBottom="0px",j.style.paddingLeft="20px",j.style.paddingRight="20px",j.style.zIndex="5",j.style.display="flex",j.style.flexDirection="column",j.style.justifyContent="center",G.style.fontFamily="Open Sans, sans-serif",G.innerHTML="Upscale 3x",j.setAttribute("id","btn-upscale3"),j.classList.add("btn-upscale"),j.setAttribute("data-value",3);var S=document.createElementNS("http://www.w3.org/2000/svg","svg");S.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),S.setAttribute("style","margin: 0; background: transparent; display: inline-block; shape-rendering: auto;"),S.setAttribute("width","40px"),S.setAttribute("height","40px"),S.setAttribute("viewBox","0 0 100 100"),S.setAttribute("preserveAspectRatio","xMidYMid"),S.setAttribute("id","loading-icon3"),S.classList.add("loading-icon"),S.style.display="none",S.innerHTML=loadingSvg,N.appendChild(S),N.appendChild(G),j.appendChild(N),H.appendChild(R),H.appendChild(j);var P=document.createElement("div");P.style.borderRadius="0px",P.style.opacity="1",P.style.alignSelf="center",P.style.minWidth="80%",P.style.maxWidth="80%",P.style.order="33",P.style.marginTop="20px",P.style.marginBottom="20px",P.style.height="max-content",P.style.flexGrow="0",P.style.flexShrink="0",P.style.width="80%",P.style.zIndex="6",P.style.display="none",P.style.position="relative",P.style.flexDirection="row",P.style.alignItems="stretch",P.style.justifyContent="center",P.setAttribute("id","upscale_img_container");var M=document.createElement("img"),O=document.createElement("div"),F=document.createElement("a"),D=document.createElement("i");F.classList.add("btn-download"),D.setAttribute("class","fa fa-download"),F.style.position="absolute",F.style.right="10px",F.style.bottom="10px",F.style.cursor="pointer",F.style.display="none",D.style.color="white",D.style.fontSize="20px",O.style.top="0px",O.style.left="0px",O.style.display="block",O.style.margin="0 10px",O.style.height="100%",O.style.position="relative",O.style.borderRadius="0px",O.style.width="30%",M.setAttribute("src","data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),M.setAttribute("id","result_upscale_img"),M.style.cursor="pointer",M.classList.add("result_upscale_img_item"),M.style.width="100%",O.appendChild(M),F.appendChild(D),O.appendChild(F),P.appendChild(O),l.appendChild(i),l.appendChild(s),l.appendChild(n),o.appendChild(r),r.style.fontFamily="Open Sans, sans-serif",l.appendChild(o),l.appendChild(y),l.appendChild(d),l.appendChild($),l.appendChild(k),l.appendChild(v),l.appendChild(H),l.appendChild(C),l.appendChild(P),t.appendChild(l)}function completeGeneration(e){document.getElementById("loading-icon").style.display="none";var t=document.createElement("div");t.style.borderRadius="0px",t.style.opacity="1",t.style.alignSelf="center",t.style.minWidth="80%",t.style.maxWidth="80%",t.style.order="31",t.style.height="max-content",t.style.flexGrow="0",t.style.flexShrink="0",t.style.width="80%",t.style.margin="0px",t.style.zIndex="6",t.style.display="flex",t.style.position="relative",t.style.flexDirection="row",t.style.alignItems="stretch",t.style.justifyContent="center",t.style.paddingBottom="0";for(var l=0;l<e.output.length;l++){var i=document.createElement("img"),s=document.createElement("div"),n=document.createElement("a"),a=document.createElement("i");n.classList.add("btn-download"),a.setAttribute("class","fa fa-download"),n.style.position="absolute",n.style.right="10px",n.style.bottom="10px",n.style.cursor="pointer",n.style.display="block",a.style.color="white",a.style.fontSize="20px",s.style.top="0px",s.style.left="0px",s.style.display="block",s.style.width="20%",s.style.margin="0 10px",s.style.height="100%",s.style.position="relative",s.style.borderRadius="0px",s.style.width="20%",i.setAttribute("src",e.output[l]),i.setAttribute("id",`result_img_${l}`),i.classList.add("result_img_item"),i.style.width="100%",s.appendChild(i),n.appendChild(a),s.appendChild(n),t.appendChild(s)}document.getElementById("generation_container").appendChild(t);for(var r=document.getElementsByClassName("result_img_item"),l=0;l<r.length;l++)r[l].addEventListener("click",function(){for(var e=0;e<r.length;e++)r[e].classList.remove("selected");this.classList.add("selected")})}function completeUpscale(e){for(var t=document.getElementsByClassName("loading-icon"),l=0;l<t.length;l++)t[l].style.display="none";var i=document.getElementById("result_upscale_img");i.setAttribute("src",e.output),i.parentElement.getElementsByTagName("a")[0].style.display="block",document.getElementById("upscale_img_container").style.display="flex"}function fetchResult(e){var t,l=new Headers;l.append("Content-Type","application/json"),fetch(e,{method:"POST",headers:l,body:JSON.stringify({key:stableDiffusionAPIkey}),redirect:"follow"}).then(e=>e.text()).then(t=>{var l=JSON.parse(t);"success"==l.status?completeGeneration(l):(l.status="processing",fetchResult(e))}).catch(e=>{loadingIcon.style.display="none",alert("Something went wrong! Please try again"),console.log("error",e)})}function downloadImage(e,t){fetch(e).then(e=>e.blob()).then(l=>{console.log(e);let i=window.URL.createObjectURL(l),s=document.createElement("a");s.style.display="none",s.href=i,s.download=t,document.body.appendChild(s),s.click(),window.URL.revokeObjectURL(i)}).catch(e=>console.log(e))}function addEvents(){for(var e=document.getElementsByClassName("model-option-img"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){for(var t=0;t<e.length;t++)e[t].classList.remove("selected");this.classList.add("selected")});for(var l=document.getElementsByClassName("result_img_item"),t=0;t<l.length;t++)l[t].addEventListener("click",function(){for(var e=0;e<l.length;e++)l[e].classList.remove("selected");this.classList.add("selected")});for(var i=document.getElementsByClassName("btn-download"),t=0;t<i.length;t++)i[t].addEventListener("click",async function(){downloadImage(this.parentElement.getElementsByTagName("img")[0].src,"image.png")});document.getElementById("btn-generate").addEventListener("click",function(){var e=document.getElementById("prompt"),t="",l="",i="",s="",n=document.querySelector(".model-option-img.selected");n&&(s=n.getAttribute("data-id"));for(var a=document.getElementsByName("ai_image_width"),r=0;r<a.length;r++)if(a[r].checked){l=a[r].value;break}for(var o=document.getElementsByName("ai_image_height"),r=0;r<o.length;r++)if(o[r].checked){t=o[r].value;break}for(var y=document.getElementsByName("ai_sample_count"),r=0;r<y.length;r++)if(y[r].checked){i=y[r].value;break}if(""!=e.value&&""!=t&&""!=l&&""!=s&&""!=i){var d=document.getElementById("loading-icon");d.style.display="block";var p=`{
    "key": "${stableDiffusionAPIkey}",
    "prompt": "${e.value}",
    "negative_prompt": "",
    "width": "${l}",
    "height": "${t}",
    "samples": "${i}",
   "upscale": "no",
   "model": "midjourney",
    "num_inference_steps": "30",
    "seed": null,
    "guidance_scale": 7.5,
    "webhook": null,
    "track_id": null
}`,c=new Headers;c.append("Content-Type","application/json"),fetch("https://stablediffusionapi.com/api/v3/text2img",{method:"POST",body:p,headers:c,redirect:"follow"}).then(e=>e.text()).then(e=>{var t=JSON.parse(e);d.style.display="none","success"==t.status?completeGeneration(t):"processing"==t.status?(d.style.display="block",setTimeout(function(){fetchResult(t.fetch_result)},t.eta)):(alert("Something went wrong! Please try again"),console.log(t.message))}).catch(e=>{d.style.display="none",alert("Something went wrong! Please try again"),console.log("error",e)})}else{var m="";""==e.value&&(m+="Please input prompt"),""==l&&(m+=""!=m?"\nPlease select width":"Please select width"),""==t&&(m+=""!=m?"\nPlease select height":"Please select height"),""==s&&(m+=""!=m?"\nPlease select model":"Please select model"),""==i&&(m+=""!=m?"\nPlease select sample number":"Please select sample number"),""!=m&&alert(m)}});for(var s=document.getElementsByClassName("btn-upscale"),t=0;t<s.length;t++)s[t].addEventListener("click",async function(){var e=parseInt(this.getAttribute("data-value")),t="",l=document.querySelector(".result_img_item.selected");if(l&&(t=l.getAttribute("src")),""!=t){var i=this.querySelector(".loading-icon");i.style.display="block",console.log(t);var s=`{
    "key": "${stableDiffusionAPIkey}",
    "url": "${t}",
    "scale": "${e}",
   "webhook": null,
    "face_enhance": false
}`,n=new Headers;n.append("Content-Type","application/json"),fetch("https://stablediffusionapi.com/api/v3/super_resolution",{method:"POST",body:s,headers:n,redirect:"follow"}).then(e=>e.text()).then(e=>{var t=JSON.parse(e);i.style.display="none","success"==t.status?completeUpscale(t):"processing"==t.status?(i.style.display="block",setTimeout(function(){fetchResult(t.fetch_result)},t.eta)):(alert("Something went wrong! Please try again"),console.log(t.message))}).catch(e=>{i.style.display="none",alert("Something went wrong! Please try again"),console.log("error",e)})}else alert("Please selecte image")})}function addStyle(){for(var e=document.querySelectorAll('.size-radio-container input[type="radio"]'),t=0;t<e.length;t++)e[t].addEventListener("change",function(){for(var e=document.querySelectorAll("label"),t=0;t<e.length;t++)e[t].classList.remove("selected");for(var l=this.nextSibling;1!=l.nodeType;)l=l.nextSibling;l.classList.add("selected")});var l=document.createElement("style");l.innerHTML=`
        .size-radio-container input[type=radio] {
            appearance: none;
            padding: 5px;
            background-color: white;
            border: 2px solid grey;
            width: 15px;
            height: 15px;
            border-radius: 50%;
        }
        .size-radio-container input[type=radio]:checked {
            background-color: black;
        }
        .model-option-img.selected {
            border: 4px solid #4b48ff !important;
        }

        .result_img_item.selected {
            border: 4px solid #4b48ff !important;
        }

        .result_img_item {
            border: 4px solid transparent;
        }
    `,document.head.appendChild(l)}initUI(),addStyle(),addEvents();
