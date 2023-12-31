var encryptionKey = '421c954c-a305-4f3e-8b44-f04372b1659f';
var stableDiffusionAPIkey = 'XaVI61HoG6UmkdCT5hrG9PgVczKrMcxQ2nMxgjCn8QbgQ1cDwrXLThYWFiD1';

function initUI() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap';
    document.head.appendChild(link);
    var parentElement = document.getElementById('ai-image-gen-f1b9d815-780f-4a64-875e-4f2b9284ced6');
    parentElement.style.backgroundColor = '#fafafa';
    parentElement.style.overflow = 'visible';
    parentElement.style.borderRadius = '25px';
    parentElement.style.opacity = '1';
    parentElement.style.placeSelf = 'center';
    parentElement.style.minWidth = '80%';
    parentElement.style.minHeight = '800px';
    parentElement.style.maxWidth = '80%';
    parentElement.style.width = '80%';
    parentElement.style.height = 'calc(100% - 0px)';
    parentElement.style.margin = 'auto';
    parentElement.style.zIndex = 2;

    // Container Element
    var container = document.createElement('div');

    container.style.justifyContent = 'flex-start';
    container.style.position = 'relative';
    container.style.zIndex = 0;
    container.style.maxWidth = '100%';
    container.style.flexGrow = 1;
    container.style.flexFlow = 'column';
    container.style.height = 'initial';
    container.style.overflow = 'inherit';
    container.style.display = 'flex';
    // Container Element

    // Title Element
    var titleElement = document.createElement('div');
    titleElement.style.whiteSpace = 'pre-wrap';
    titleElement.style.overflow = 'visibile';
    titleElement.style.fontFamily = 'Open Sans, sans-serif';
    titleElement.style.fontSize = '30px';
    titleElement.style.fontWeight = 'bold';
    titleElement.style.color = '#2d2d2d';
    titleElement.style.textAlign = 'center';
    titleElement.style.lineHeight = 1.4;
    titleElement.style.borderRadius = 0;
    titleElement.style.opacity = '1';
    titleElement.style.alignSelf = 'center';
    titleElement.style.minWidth = '285px';
    titleElement.style.maxWidth = '285px';
    titleElement.style.order = '1';
    titleElement.style.minHeight = '30px';
    titleElement.style.height = 'max-contnet';
    titleElement.style.flexGrow = 0;
    titleElement.style.flexShrink = 0;
    titleElement.style.width = '285px';
    titleElement.style.margin = '20px 0px 0px';
    titleElement.style.zIndex = 2;
    titleElement.innerHTML = 'ProAI';
    // Title Element

    // Subtitle Element
    var subtitleElement = document.createElement('div');
    subtitleElement.style.whiteSpace = 'pre-wrap';
    subtitleElement.style.overflow = 'visibile';
    subtitleElement.style.fontFamily = 'Open Sans, sans-serif';
    subtitleElement.style.fontSize = '14px';
    subtitleElement.style.fontWeight = '400';
    subtitleElement.style.color = '#141414';
    subtitleElement.style.textAlign = 'center';
    subtitleElement.style.lineHeight = 1.4;
    subtitleElement.style.borderRadius = 0;
    subtitleElement.style.opacity = '1';
    subtitleElement.style.alignSelf = 'center';
    subtitleElement.style.minWidth = '211px';
    subtitleElement.style.maxWidth = '211px';
    subtitleElement.style.order = '2';
    subtitleElement.style.minHeight = '20px';
    subtitleElement.style.height = 'max-contnet';
    subtitleElement.style.flexGrow = 0;
    subtitleElement.style.flexShrink = 0;
    subtitleElement.style.width = '211px';
    subtitleElement.style.margin = '-5px 0px 0px 0px';
    subtitleElement.style.zIndex = 3;
    subtitleElement.innerHTML = 'AI Image Generator';
    // Subtitle Element

    // Gradient Element
    var gradientElement = document.createElement('div');
    gradientElement.style.background = 'linear-gradient(135deg, #4aeadc, #9778d1, #cf2aba, #ee2c82, #fb6962, #fef84c)';
    // gradientElement.style.background = 'linear-gradient(90deg, rgb(112, 205, 245) 0%, rgb(177, 75, 241) 50%, rgb(246, 92, 34) 100%)';
    gradientElement.style.borderRadius = '15px';
    gradientElement.style.opacity = '1';
    gradientElement.style.alignSelf = 'center';
    gradientElement.style.minWidth = '80%';
    gradientElement.style.maxWidth = '80%';
    gradientElement.style.width = '80%';
    gradientElement.style.order = '4';
    gradientElement.style.minHeight = '65px';
    gradientElement.style.maxHeight = '65px';
    gradientElement.style.height = '65px';
    gradientElement.style.flexGrow = 1;
    gradientElement.style.margin = '15px 0px 0px 0px';
    gradientElement.style.zIndex = 10;
    // Gradient Element

    // Description Element
    var descriptionElement = document.createElement('div');
    descriptionElement.style.whiteSpace = 'pre-wrap';
    descriptionElement.style.overflow = 'visibile';
    // descriptionElement.style.fontFamily = 'Open Sans';
    descriptionElement.style.fontSize = '16px';
    descriptionElement.style.fontWeight = '400';
    descriptionElement.style.color = '#2c2c2d';
    descriptionElement.style.textAlign = 'center';
    descriptionElement.style.lineHeight = 1.4;
    descriptionElement.style.borderRadius = 0;
    descriptionElement.style.opacity = '1';
    descriptionElement.style.alignSelf = 'center';
    descriptionElement.style.minWidth = '80%';
    descriptionElement.style.maxWidth = '80%';
    descriptionElement.style.order = '5';
    descriptionElement.style.minHeight = '45px';
    descriptionElement.style.height = 'max-contnet';
    descriptionElement.style.flexGrow = 0;
    descriptionElement.style.flexShrink = 0;
    descriptionElement.style.width = '80%';
    descriptionElement.style.margin = '15px 0px 0px 0px';
    descriptionElement.style.zIndex = 11;
    descriptionElement.style.fontFamily = 'Open Sans, sans-serif';
    descriptionElement.innerHTML = `Welcome to TubePro's AI image generator ProAI. This is a free AI image generator you can use to generate creative art, whenever necessary.`;
    // Description Element

    // Description Element
    var promptLabel = document.createElement('div');
    var promptLabelContainer = document.createElement('div');
    promptLabelContainer.style.whiteSpace = 'pre-wrap';
    promptLabelContainer.style.overflow = 'visibile';
    promptLabelContainer.style.fontFamily = 'Open Sans, sans-serif';
    promptLabelContainer.style.fontSize = '14px';
    promptLabelContainer.style.fontWeight = '400';
    promptLabelContainer.style.color = '#1a1919';
    promptLabelContainer.style.textAlign = 'center';
    promptLabelContainer.style.lineHeight = 1.4;
    promptLabelContainer.style.borderRadius = 0;
    promptLabelContainer.style.opacity = '1';
    promptLabelContainer.style.alignSelf = 'center';
    promptLabelContainer.style.minWidth = '80%';
    promptLabelContainer.style.maxWidth = '80%';
    promptLabelContainer.style.order = '6';
    promptLabelContainer.style.minHeight = '45px';
    promptLabelContainer.style.height = 'max-contnet';
    promptLabelContainer.style.flexGrow = 0;
    promptLabelContainer.style.flexShrink = 0;
    promptLabelContainer.style.width = '80%';
    promptLabelContainer.style.margin = '20px 0px -55px 0px';
    promptLabelContainer.style.zIndex = 12;
    promptLabel.style.textAlign = 'left';
    promptLabel.innerHTML = `Start with a detailed description, be specific: *`;
    // Description Element

    // Textarea Element
    var textarea = document.createElement('textarea');
    textarea.style.alignSelf = 'center';
    textarea.style.background = 'white';
    textarea.style.minWidth = '80%';
    textarea.style.maxWidth = '80%';
    textarea.style.order = '7';
    textarea.style.width = '80%';
    textarea.style.margin = '35px 0px 0px';
    textarea.style.flexGrow = 0;
    textarea.style.flexShrink = 0;
    textarea.style.zIndex = 4;
    textarea.style.fontSize = '14px';
    textarea.style.fontWeight = '400';
    textarea.style.fontFamily = 'Open Sans, sans-serif';
    textarea.style.border = '1px solid rgba(104, 104, 104, 0.15)';
    textarea.style.overflow = 'hidden';
    textarea.style.overflowWrap = 'break-word';
    textarea.style.borderRadius = '5px';
    textarea.style.color = '#7f7f7e';
    textarea.style.lineHeight = 1.5;
    textarea.style.opacity = '1';
    textarea.style.height = '95px';
    textarea.style.padding = '6px';

    textarea.setAttribute("id", "prompt");
    textarea.setAttribute("placeholder", "A futuristic city....");
    // Textarea Element

    // Button Element
    var button = document.createElement('div');
    var buttonLabel = document.createElement('div');
    var buttonElement = document.createElement('div');
    buttonElement.style.display = 'flex';
    buttonElement.style.justifyContent = 'center';
    buttonElement.style.alignItems = 'center';
    button.style.whiteSpace = 'pre-wrap';
    button.style.background = 'rgb(75, 72, 255)';
    button.style.overflow = 'visible';
    button.style.fontFamily = 'var(--font_default)';
    button.style.fontSize = '18px';
    button.style.fontWeight = 'bold';
    button.style.color = 'rgba(255,255,255,1)';
    button.style.textAlign = 'center';
    button.style.lineHeight = '1.4';
    button.style.borderRadius = '5px';
    button.style.opacity = '1';
    button.style.cursor = 'pointer';
    button.style.alignSelf = 'center';
    button.style.minWidth = '80%';
    button.style.maxWidth = '80%';
    button.style.order = '29';
    button.style.minHeight = '40px';
    button.style.height = 'max-content';
    button.style.flexGrow = '0';
    button.style.flexShrink = '0';
    button.style.width = '80%';
    button.style.marginLeft = '0px';
    button.style.marginTop = '0px';
    button.style.marginRight = '0px';
    button.style.marginBottom = '0px';
    button.style.zIndex = '5';
    button.style.display = 'flex';
    button.style.flexDirection = 'column';
    button.style.justifyContent = 'center';
    buttonLabel.style.fontFamily = 'Open Sans, sans-serif';
    buttonLabel.innerHTML = 'Generate';
    button.setAttribute('id', 'btn-generate');
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('xmlns:xlink', "http://www.w3.org/1999/xlink");
    svg.setAttribute('style', "margin: 0; background: transparent; display: inline-block; shape-rendering: auto;");
    svg.setAttribute('width', "40px");
    svg.setAttribute('height', "40px");
    svg.setAttribute('viewBox', "0 0 100 100");
    svg.setAttribute('preserveAspectRatio', "xMidYMid");
    svg.setAttribute('id', "loading-icon");
    svg.style.display = 'none';

    // Set the content of the SVG element to the SVG markup for the loading spinner
    svg.innerHTML = `
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
        </g>`;
    buttonElement.appendChild(svg);
    buttonElement.appendChild(buttonLabel);
    button.appendChild(buttonElement);

    // Button Element

    // Image Label
    var imageLabel = document.createElement('div');
    imageLabel.style.whiteSpace = 'pre-wrap';
    imageLabel.style.overflow = 'visible';
    imageLabel.style.fontSize = '12px';
    imageLabel.style.fontWeight = '400';
    imageLabel.style.color = 'rgba(127,127,126,1)';
    imageLabel.style.textAlign = 'center';
    imageLabel.style.lineHeight = '1.4';
    imageLabel.style.borderRadius = '0px';
    imageLabel.style.opacity = '1';
    imageLabel.style.alignSelf = 'center';
    imageLabel.style.minWidth = '80%';
    imageLabel.style.maxWidth = '80%';
    imageLabel.style.order = '30';
    imageLabel.style.minHeight = '45px';
    imageLabel.style.height = 'max-content';
    imageLabel.style.flexGrow = '0';
    imageLabel.style.flexShrink = '0';
    imageLabel.style.width = '80%';
    imageLabel.style.marginLeft = '0px';
    imageLabel.style.marginTop = '20px';
    imageLabel.style.marginRight = '0px';
    imageLabel.style.marginBottom = '0px';
    imageLabel.style.zIndex = '14';
    imageLabel.style.fontFamily = 'Open Sans, sans-serif';
    imageLabel.innerHTML = 'Your image will appear below and may take a few seconds to generate.';
    // Image Label

    // Image Container
    var imageContainer = document.createElement('div');
    imageContainer.style.borderRadius = '0px';
    imageContainer.style.opacity = '1';
    imageContainer.style.alignSelf = 'center';
    imageContainer.style.minWidth = '250px';
    imageContainer.style.maxWidth = '250px';
    imageContainer.style.order = '31';
    imageContainer.style.height = 'max-content';
    imageContainer.style.flexGrow = '0';
    imageContainer.style.flexShrink = '0';
    imageContainer.style.width = '250px';
    imageContainer.style.margin = '0px';
    imageContainer.style.zIndex = '6';
    imageContainer.style.display = 'flex';
    imageContainer.style.position = 'relative';
    imageContainer.style.flexDirection = 'row';
    imageContainer.style.alignItems = 'stretch';
    imageContainer.style.paddingBottom = '40px';
    // Image Container
    var img = document.createElement('img');
    img.style.top = '0px';
    img.style.left = '0px';
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.position = 'relative';
    img.style.borderRadius = '0px';
    img.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    img.setAttribute('id', 'result_img');
    imageContainer.appendChild(img);

    // Description Element
    var limitationElement = document.createElement('div');
    limitationElement.style.whiteSpace = 'pre-wrap';
    limitationElement.style.overflow = 'visibile';
    // limitationElement.style.fontFamily = 'Open Sans';
    limitationElement.style.fontSize = '14px';
    limitationElement.style.fontWeight = '400';
    limitationElement.style.color = '#4b48ff';
    limitationElement.style.textAlign = 'center';
    limitationElement.style.lineHeight = 1.4;
    limitationElement.style.borderRadius = 0;
    limitationElement.style.opacity = '1';
    limitationElement.style.alignSelf = 'center';
    limitationElement.style.minWidth = '70%';
    limitationElement.style.maxWidth = '70%';
    limitationElement.style.order = '12';
    limitationElement.style.minHeight = '30px';
    limitationElement.style.height = 'max-contnet';
    limitationElement.style.flexGrow = 0;
    limitationElement.style.flexShrink = 0;
    limitationElement.style.width = '70%';
    limitationElement.style.margin = '15px 0px 0px 0px';
    limitationElement.style.zIndex = 11;
    limitationElement.setAttribute('id', 'leftcount-label');
    // Description Element

    var leftCount = 0;

    var decryptedObject = getDecryptObject();

    var currentDate = new Date();

    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    var dateString = year + "-" + (month < 10 ? "0" : "") + month + "-" + (date < 10 ? "0" : "") + date;

    if (decryptedObject != null && decryptedObject.date == dateString) {
        leftCount = parseInt(decryptedObject.value);
    } else {
        leftCount = 20;
        var leftObject = {
            date: dateString,
            value: leftCount.toString()
        }
        setEncryptObject(leftObject);
    }

    limitationElement.style.fontFamily = 'Open Sans, sans-serif';
    limitationElement.innerHTML = `You have ${leftCount} generations left`;

    container.appendChild(titleElement);
    container.appendChild(subtitleElement);
    container.appendChild(gradientElement);
    container.appendChild(descriptionElement);
    promptLabelContainer.appendChild(promptLabel);
    promptLabel.style.fontFamily = 'Open Sans, sans-serif';
    container.appendChild(promptLabelContainer);
    container.appendChild(textarea);
    container.appendChild(limitationElement);

    container.appendChild(button);
    container.appendChild(imageLabel);
    container.appendChild(imageContainer);

    parentElement.appendChild(container);
}

function getDecryptObject() {
    var leftCountItem = localStorage.getItem('f6ebb0bb-c9a8-461b-8b68-336d56b4ca66');
    var decryptedObject = JSON.parse(leftCountItem);
    return decryptedObject;
}

function setEncryptObject(leftObject) {
    var jsonString = JSON.stringify(leftObject);
    localStorage.setItem("f6ebb0bb-c9a8-461b-8b68-336d56b4ca66", jsonString);
}

function fetchResult(fetchUrl, leftCount) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var raw = JSON.stringify({
        "key": stableDiffusionAPIkey
    });
       
    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: raw,
        redirect: 'follow'
    };
       
    fetch(fetchUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            var resultObj = JSON.parse(result);
            if (resultObj.status == 'success') {
                completeGeneration(resultObj, leftCount);
            } else if (resultObj.status = 'processing') {
                fetchResult(fetchUrl, leftCount);
            }
        })
        .catch(error => {
            loadingIcon.style.display = 'none';
            alert('Something went wrong! Please try again');
            console.log('error', error)
        });
}

function completeGeneration (resultObject, leftCount) {
    var currentDate = new Date();
    var imgObject = document.getElementById("result_img");
    var leftCountLabel = document.getElementById("leftcount-label");
    imgObject.setAttribute('src', resultObject.output[0]);
    var left = leftCount - 1;
    leftCountLabel.innerHTML = `You have ${left} generations left`;
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    var dateString = year + "-" + (month < 10 ? "0" : "") + month + "-" + (date < 10 ? "0" : "") + date;
    var leftObject = {
        date: dateString,
        value: left.toString()
    }
    setEncryptObject(leftObject);
}

function addEvents() {
    var generateButton = document.getElementById("btn-generate");

    generateButton.addEventListener("click", function () {
        var prompt = document.getElementById("prompt");

        console.log(prompt.value);
        var selectedHeight = '1024', selectedWidth = '1024';
        var decryptedObject = getDecryptObject();
        var leftCount = 0;
        var currentDate = new Date();

        var year = currentDate.getFullYear();
        var month = currentDate.getMonth() + 1;
        var date = currentDate.getDate();
        var dateString = year + "-" + (month < 10 ? "0" : "") + month + "-" + (date < 10 ? "0" : "") + date;

        if (dateString == decryptedObject.date) {
            leftCount = parseInt(decryptedObject.value);
            if (leftCount > 0 && prompt.value != '' && selectedHeight != '' && selectedWidth != '') {
                var loadingIcon = document.getElementById("loading-icon");
                loadingIcon.style.display = 'block';

                var raw = `{\n    \"key\": \"${stableDiffusionAPIkey}\",\n    \"prompt\": \"${prompt.value}\",\n    \"negative_prompt\": \"\",\n    \"width\": \"${selectedWidth}\",\n    \"height\": \"${selectedHeight}\",\n    \"samples\": \"1\",\n    \"model\": \"midjourney\",\n    \"num_inference_steps\": \"30\",\n    \"seed\": null,\n    \"guidance_scale\": 7.5,\n    \"webhook\": null,\n    \"track_id\": null\n}`;

                var headers = new Headers();
                headers.append('Content-Type', 'application/json');

                var requestOptions = {
                    method: 'POST',
                    body: raw,
                    headers: headers,
                    redirect: 'follow'
                };

                fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        var resultObject = JSON.parse(result);
                        loadingIcon.style.display = 'none';
                        if (resultObject.status == 'success') {
                            completeGeneration(resultObject, leftCount);
                        } else if (resultObject.status == 'processing') {
                            loadingIcon.style.display = 'block';
                            setTimeout(function() {
                                fetchResult(resultObject.fetch_result, leftCount);
                            }, resultObject.eta);
                        } else {
                            alert('Something went wrong! Please try again');
                            console.log(resultObject.message);
                        }
                    })
                    .catch(error => {
                        loadingIcon.style.display = 'none';
                        alert('Something went wrong! Please try again');
                        console.log('error', error)
                    });
            } else {
                var message = '';
                if (leftCount == 0) {
                    alert('Your generations count is 0, please try again tomorrow');
                } else {
                    if (prompt.value == '') {
                        message += 'Please input prompt';
                    }
                    if (selectedWidth == '') {
                        message += message != '' ? '\nPlease select width' : 'Please select width';
                    }
                    if (selectedHeight == '') {
                        message += message != '' ? '\nPlease select height' : 'Please select height';
                    }
    
                    if (message != '') {
                        alert(message);
                    }
                }
            }

        }

    });
}

initUI();
addEvents();