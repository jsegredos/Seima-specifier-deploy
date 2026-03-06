import{C as z,c as Se}from"./competitor-service-D5v4r7eu.js";import{Utils as S,getImageCacheSize as Je,preloadAllProductImages as ot,authService as ne,drawCoverPage as gt,calculateColumnLayout as ht,hasWelsData as ft,drawPDFHeader as yt,drawPDFFooter as wt,drawRoomHeader as vt,getCachedImage as bt,PDF_LAYOUT as Ye,drawProductLinks as St,drawProductDescription as xt,drawWelsRating as Et,drawProductPricing as Pt,authUI as V,browserCompatibility as ye}from"./index-CUCL1YMS.js";const x={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error",CRITICAL:"critical"},B={NETWORK:"network",DATA:"data",UI:"ui",PDF:"pdf",STORAGE:"storage",COMPATIBILITY:"compatibility",IMPORT:"import",VALIDATION:"validation"};class It{constructor(){this.logs=[],this.maxLogs=1e3,this.enableConsoleLogging=!0,this.enableUserNotifications=!0,this.errorStats=new Map,this.setupGlobalErrorHandlers()}setupGlobalErrorHandlers(){window.addEventListener("error",e=>{var t;e.message&&e.message.includes("ResizeObserver")||this.handleError({message:e.message,filename:e.filename,lineNumber:e.lineno,columnNumber:e.colno,error:e.error,category:B.UI,context:"global",showUser:!((t=e.message)!=null&&t.includes("ResizeObserver"))})}),window.addEventListener("unhandledrejection",e=>{String(e.reason||"").includes("ResizeObserver")||this.handleError({message:`Unhandled promise rejection: ${e.reason}`,error:e.reason,category:B.DATA,context:"promise"})})}handleError(e){const{message:t,error:o,category:r=B.UI,context:n="unknown",level:s=x.ERROR,showUser:i=!0}=e,a={id:this.generateErrorId(),timestamp:new Date().toISOString(),message:t,category:r,context:n,level:s,stack:(o==null?void 0:o.stack)||new Error().stack,userAgent:navigator.userAgent,url:window.location.href,additionalInfo:this.gatherAdditionalInfo(o)};return this.log(a),this.updateErrorStats(r),i&&this.enableUserNotifications&&s!==x.DEBUG&&this.showUserNotification(a),s===x.CRITICAL&&this.attemptRecovery(a),a.id}log(e,t=x.INFO){const o=typeof e=="string"?{message:e,level:t,timestamp:new Date().toISOString()}:e;this.logs.push(o),this.logs.length>this.maxLogs&&this.logs.shift(),this.enableConsoleLogging&&this.consoleLog(o),(t===x.ERROR||t===x.CRITICAL)&&this.persistCriticalLog(o)}consoleLog(e){const{level:t,message:o,category:r,context:n}=e,s=`[${t.toUpperCase()}]${r?` [${r}]`:""}${n?` [${n}]`:""}`;switch(t){case x.DEBUG:console.debug(s,o,e);break;case x.INFO:console.info(s,o);break;case x.WARN:console.warn(s,o,e);break;case x.ERROR:case x.CRITICAL:console.error(s,o,e);break;default:console.log(s,o)}}showUserNotification(e){const{message:t,category:o,level:r}=e,n=this.generateUserFriendlyMessage(t,o);r!==x.CRITICAL?this.showToast(n,r):this.showErrorModal(n,e)}showToast(e,t){const o=document.createElement("div");o.className=`error-toast error-toast--${t}`,o.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      max-width: 400px;
      padding: 16px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      font-family: inherit;
      font-size: 14px;
      line-height: 1.4;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      background: ${t===x.ERROR?"#fee":t===x.WARN?"#fef3c7":"#e0f2fe"};
      border-left: 4px solid ${t===x.ERROR?"#dc2626":t===x.WARN?"#f59e0b":"#0ea5e9"};
      color: ${t===x.ERROR?"#7f1d1d":t===x.WARN?"#92400e":"#0c4a6e"};
    `,o.innerHTML=`
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <span style="font-size: 16px;">${t===x.ERROR?"❌":t===x.WARN?"⚠️":"ℹ️"}</span>
        <div style="flex: 1;">${e}</div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none; border: none; font-size: 18px; cursor: pointer; 
          color: inherit; opacity: 0.7; padding: 0; margin-left: 8px;
        ">×</button>
      </div>
    `,document.body.appendChild(o),setTimeout(()=>o.style.transform="translateX(0)",100);const r=t===x.ERROR?8e3:5e3;setTimeout(()=>{o.parentElement&&(o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300))},r)}showErrorModal(e,t){const o=document.createElement("div");o.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.8); z-index: 10001; display: flex;
      align-items: center; justify-content: center; padding: 20px;
    `,o.innerHTML=`
      <div style="
        background: white; border-radius: 12px; padding: 24px; max-width: 500px;
        width: 100%; max-height: 80vh; overflow-y: auto;
      ">
        <h3 style="color: #dc2626; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
          <span>🚨</span> Critical Error
        </h3>
        <p style="margin: 0 0 20px 0; color: #374151; line-height: 1.5;">
          ${e}
        </p>
        <details style="margin: 16px 0; font-size: 12px; color: #6b7280;">
          <summary style="cursor: pointer; margin-bottom: 8px;">Technical Details</summary>
          <pre style="background: #f9fafb; padding: 8px; border-radius: 4px; overflow-x: auto; white-space: pre-wrap;">${JSON.stringify(t,null,2)}</pre>
        </details>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button onclick="location.reload()" style="
            padding: 8px 16px; border: 1px solid #d1d5db; background: white;
            border-radius: 6px; cursor: pointer;
          ">Reload Page</button>
          <button onclick="this.closest('[style*=\\"position: fixed\\"]').remove()" style="
            padding: 8px 16px; border: none; background: #dc2626; color: white;
            border-radius: 6px; cursor: pointer;
          ">Dismiss</button>
        </div>
      </div>
    `,document.body.appendChild(o)}generateUserFriendlyMessage(e,t){return{[B.NETWORK]:"Unable to connect to the server. Please check your internet connection and try again.",[B.DATA]:"There was an issue loading product data. The page will retry automatically.",[B.PDF]:"PDF generation failed. Please try again or contact support if the problem persists.",[B.STORAGE]:"Unable to save your data locally. Please ensure you have enough storage space.",[B.IMPORT]:"File import failed. Please check your file format and try again.",[B.VALIDATION]:"Please check your input and try again.",[B.COMPATIBILITY]:"Your browser may not support all features. Consider updating to a newer version.",[B.UI]:"A display issue occurred. This usually resolves automatically."}[t]||"An unexpected error occurred. Please try refreshing the page."}gatherAdditionalInfo(e){var t;return{timestamp:Date.now(),memoryUsage:performance.memory?{used:Math.round(performance.memory.usedJSHeapSize/1024/1024),total:Math.round(performance.memory.totalJSHeapSize/1024/1024),limit:Math.round(performance.memory.jsHeapSizeLimit/1024/1024)}:null,viewport:{width:window.innerWidth,height:window.innerHeight},localStorage:this.getStorageInfo(),errorType:(t=e==null?void 0:e.constructor)==null?void 0:t.name,hasNetworkConnection:navigator.onLine}}getStorageInfo(){try{const e=Object.keys(localStorage),t=e.reduce((o,r)=>o+localStorage.getItem(r).length,0);return{itemCount:e.length,totalSize:Math.round(t/1024),available:!0}}catch{return{available:!1}}}generateErrorId(){return`err_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}updateErrorStats(e){const t=this.errorStats.get(e)||0;this.errorStats.set(e,t+1)}attemptRecovery(e){const{category:t}=e;switch(this.log(`Attempting recovery for critical ${t} error`,x.INFO),t){case B.STORAGE:this.recoverStorage();break;case B.DATA:this.recoverData();break;default:this.log("No specific recovery strategy available",x.WARN)}}recoverStorage(){try{["logs","cache","temp"].forEach(t=>{localStorage.getItem(t)&&(localStorage.removeItem(t),this.log(`Cleared ${t} from storage for recovery`,x.INFO))})}catch{this.log("Storage recovery failed",x.ERROR)}}recoverData(){try{window.dataLayer&&typeof window.dataLayer.init=="function"&&(window.dataLayer.init(),this.log("Attempting data layer recovery",x.INFO))}catch{this.log("Data recovery failed",x.ERROR)}}persistCriticalLog(e){try{const t=JSON.parse(localStorage.getItem("criticalLogs")||"[]");t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem("criticalLogs",JSON.stringify(t))}catch{}}getErrorStats(){return{totalLogs:this.logs.length,categoryBreakdown:Object.fromEntries(this.errorStats),recentErrors:this.logs.filter(e=>e.level===x.ERROR||e.level===x.CRITICAL).slice(-10)}}exportLogs(){return JSON.stringify({logs:this.logs,stats:this.getErrorStats(),exportTime:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href},null,2)}clearLogs(){this.logs=[],this.errorStats.clear(),localStorage.removeItem("criticalLogs"),this.log("Logs cleared",x.INFO)}}const F=new It;window.errorHandler=F;const Z={DEVELOPMENT:"development",STAGING:"staging",PRODUCTION:"production"},be={app:{name:{type:"string",default:"Seima Product Presenter",required:!0},version:{type:"string",default:"1.9.2",required:!0},environment:{type:"string",default:Z.PRODUCTION,enum:Object.values(Z)},debug:{type:"boolean",default:!1},buildDate:{type:"string",default:()=>new Date().toISOString()}},api:{catalogUrl:{type:"string",default:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",required:!0},timeout:{type:"number",default:3e4,min:5e3,max:12e4},retryAttempts:{type:"number",default:3,min:1,max:10},retryDelay:{type:"number",default:1e3,min:500,max:1e4}},storage:{keys:{type:"object",default:{customRooms:"customRooms",selectedProducts:"selectedProducts",productCatalog:"productCatalog",userPreferences:"userPreferences",roomAssignments:"roomAssignments",criticalLogs:"criticalLogs"}},maxSize:{type:"number",default:5*1024*1024},compressionEnabled:{type:"boolean",default:!0}},ui:{theme:{type:"string",default:"light",enum:["light","dark","auto"]},language:{type:"string",default:"en-AU"},animationsEnabled:{type:"boolean",default:!0},annotationMaxLength:{type:"number",default:140,min:50,max:500},quantityOptions:{type:"array",default:[1,2,3,4,5,6,7,8,9,10]},autoSaveInterval:{type:"number",default:3e4,min:1e4,max:3e5},maxSearchResults:{type:"number",default:8,min:5,max:50}},rooms:{predefined:{type:"array",default:[{name:"Bath 1",icon:"🛁",category:"bathroom"},{name:"Bath 2",icon:"🛁",category:"bathroom"},{name:"Bath 3",icon:"🛁",category:"bathroom"},{name:"Ensuite",icon:"🚿",category:"bathroom"},{name:"Powder",icon:"🚽",category:"bathroom"},{name:"Kitchen",icon:"🍽️",category:"kitchen"},{name:"Butlers",icon:"👨‍🍳",category:"kitchen"},{name:"Laundry",icon:"🧺",category:"utility"},{name:"Alfresco",icon:"🍽️",category:"outdoor"},{name:"Standard",icon:"📦",category:"package"},{name:"Upgrade",icon:"⭐",category:"package"}]},maxCustomRooms:{type:"number",default:20,min:5,max:100}},import:{maxFileSize:{type:"number",default:10*1024*1024},acceptedTypes:{type:"array",default:[".csv",".xlsx",".xls",".json"]},requiredColumns:{type:"array",default:["OrderCode"]},optionalColumns:{type:"array",default:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},batchSize:{type:"number",default:100,min:10,max:1e3},allowDuplicates:{type:"boolean",default:!1},productCodeValidation:{type:"object",default:{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1}},columnPatterns:{type:"object",default:{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location","group"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}}},pdf:{format:{type:"string",default:"A4",enum:["A4","Letter","A3"]},orientation:{type:"string",default:"portrait",enum:["portrait","landscape"]},quality:{type:"number",default:1,min:.1,max:2},maxFileSize:{type:"number",default:50*1024*1024},includeImages:{type:"boolean",default:!0},imageCompression:{type:"number",default:.8,min:.1,max:1},watermark:{type:"boolean",default:!1},fonts:{type:"object",default:{primary:"SF Pro Display, Segoe UI, Arial, sans-serif",monospace:"Menlo, Monaco, Consolas, monospace"}}},email:{serviceId:{type:"string",default:"service_rblizfg",required:!0},templateId:{type:"string",default:"template_8st9fhk",required:!0},publicKey:{type:"string",default:"MHAEjvnc_xx8DIRCA",required:!0},maxAttachmentSize:{type:"number",default:15*1024*1024},retryAttempts:{type:"number",default:3,min:1,max:5},retryDelay:{type:"number",default:2e3,min:1e3,max:1e4},bccEmail:{type:"string",default:"jsegredos@gmail.com"}},compatibility:{minChromeVersion:{type:"number",default:80,min:60},minFirefoxVersion:{type:"number",default:75,min:60},minSafariVersion:{type:"number",default:13,min:10},requiredFeatures:{type:"array",default:["localStorage","fileReader","blob","createObjectURL","fetch"]},minCompatibilityScore:{type:"number",default:70,min:50,max:100},memoryWarningThreshold:{type:"number",default:.8,min:.5,max:1},enableSamsungOptimisations:{type:"boolean",default:!0},enableExtendedTimeouts:{type:"boolean",default:!0}},performance:{maxProductsPerSession:{type:"number",default:1e3,min:100,max:1e4},imageCacheSize:{type:"number",default:100,min:50,max:500},virtualScrollThreshold:{type:"number",default:100,min:50,max:1e3},debounceDelay:{type:"number",default:300,min:100,max:1e3},batchUpdateSize:{type:"number",default:50,min:10,max:200}},logging:{maxLogs:{type:"number",default:1e3,min:100,max:1e4},persistCriticalLogs:{type:"boolean",default:!0},enableConsoleLogging:{type:"boolean",default:!0},enableUserNotifications:{type:"boolean",default:!0},logLevel:{type:"string",default:"info",enum:["debug","info","warn","error","critical"]}}};class Ct{constructor(){this.config={},this.validators=new Map,this.listeners=new Map,this.environment=this.detectEnvironment(),this.initializeConfig(),this.setupValidators()}detectEnvironment(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.port!==""?Z.DEVELOPMENT:window.location.hostname.includes("staging")||window.location.hostname.includes("test")?Z.STAGING:Z.PRODUCTION}initializeConfig(){this.config=this.buildDefaultConfig(be),this.applyEnvironmentOverrides(),this.loadUserPreferences(),this.validateConfig(),F.log(`Configuration initialized for ${this.environment} environment`,x.INFO)}buildDefaultConfig(e){const t={};for(const[o,r]of Object.entries(e))r&&typeof r=="object"&&r.type==="object"&&!r.default?t[o]=this.buildDefaultConfig(r):r&&typeof r=="object"&&!r.type&&!r.default?t[o]=this.buildDefaultConfig(r):r&&r.default!==void 0&&(t[o]=typeof r.default=="function"?r.default():r.default);return t}applyEnvironmentOverrides(){switch(this.config.app||(this.config.app={}),this.config.logging||(this.config.logging={}),this.config.api||(this.config.api={}),this.config.pdf||(this.config.pdf={}),this.environment){case Z.DEVELOPMENT:this.config.app.debug=!0,this.config.logging.logLevel="debug",this.config.logging.enableConsoleLogging=!0,this.config.api.timeout=6e4;break;case Z.STAGING:this.config.app.debug=!0,this.config.logging.logLevel="info",this.config.pdf.watermark=!0;break;case Z.PRODUCTION:this.config.app.debug=!1,this.config.logging.logLevel="warn",this.config.logging.enableConsoleLogging=!1;break}}loadUserPreferences(){try{const e=JSON.parse(localStorage.getItem("configPreferences")||"{}");this.applyUserPreferences(e)}catch(e){F.handleError({message:"Failed to load user preferences",error:e,category:B.STORAGE,level:x.WARN})}}applyUserPreferences(e){for(const[t,o]of Object.entries(e))try{this.setConfigValue(t,o,!1)}catch(r){F.handleError({message:`Invalid user preference: ${t}`,error:r,category:B.VALIDATION,level:x.WARN})}}setupValidators(){this.validators.set("url",e=>{try{return new URL(e),!0}catch{return!1}}),this.validators.set("email",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),this.validators.set("positive",e=>typeof e=="number"&&e>0)}get(e,t=void 0){const o=e.split(".");let r=this.config;for(const n of o)if(r&&typeof r=="object"&&n in r)r=r[n];else return t;return r}set(e,t,o=!0){this.setConfigValue(e,t,o)}setConfigValue(e,t,o){if(!this.validateConfigPath(e,t))throw new Error(`Invalid configuration value for ${e}: ${t}`);const r=e.split(".");let n=this.config;for(let a=0;a<r.length-1;a++){const c=r[a];(!(c in n)||typeof n[c]!="object")&&(n[c]={}),n=n[c]}const s=r[r.length-1],i=n[s];n[s]=t,this.notifyListeners(e,t,i),o&&this.persistUserPreference(e,t),F.log(`Configuration updated: ${e} = ${JSON.stringify(t)}`,x.DEBUG)}validateConfigPath(e,t){const o=this.getSchemaForPath(e);return o?this.validateValue(t,o):!0}getSchemaForPath(e){const t=e.split(".");let o=be;for(const r of t)if(o&&typeof o=="object"&&r in o)o=o[r];else return null;return o}validateValue(e,t){return t.type&&(t.type==="array"&&!Array.isArray(e)||t.type!=="array"&&typeof e!==t.type)||t.enum&&!t.enum.includes(e)||typeof e=="number"&&(t.min!==void 0&&e<t.min||t.max!==void 0&&e>t.max)||typeof e=="string"&&(t.minLength&&e.length<t.minLength||t.maxLength&&e.length>t.maxLength)||Array.isArray(e)&&(t.minItems&&e.length<t.minItems||t.maxItems&&e.length>t.maxItems)?!1:t.validator&&this.validators.has(t.validator)?this.validators.get(t.validator)(e):!0}validateConfig(){const e=[];this.validateConfigSection(this.config,be,"",e),e.length>0&&F.handleError({message:`Configuration validation errors: ${e.join(", ")}`,category:B.VALIDATION,level:x.WARN})}validateConfigSection(e,t,o,r){for(const[n,s]of Object.entries(t)){const i=o?`${o}.${n}`:n,a=e[n];if(s.required&&a==null){r.push(`Missing required config: ${i}`);continue}a!==void 0&&(s.type==="object"&&!s.default?this.validateConfigSection(a,s,i,r):this.validateValue(a,s)||r.push(`Invalid config value: ${i}`))}}persistUserPreference(e,t){try{const o=JSON.parse(localStorage.getItem("configPreferences")||"{}");o[e]=t,localStorage.setItem("configPreferences",JSON.stringify(o))}catch(o){F.handleError({message:"Failed to persist user preference",error:o,category:B.STORAGE,level:x.WARN})}}addListener(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{const o=this.listeners.get(e);o&&(o.delete(t),o.size===0&&this.listeners.delete(e))}}notifyListeners(e,t,o){const r=this.listeners.get(e);r&&r.forEach(n=>{try{n(t,o,e)}catch(s){F.handleError({message:"Configuration listener error",error:s,category:B.UI,level:x.WARN})}});for(const[n,s]of this.listeners)if(n.endsWith("*")){const i=n.slice(0,-1);e.startsWith(i)&&s.forEach(a=>{try{a(t,o,e)}catch(c){F.handleError({message:"Configuration wildcard listener error",error:c,category:B.UI,level:x.WARN})}})}}reset(e){if(e){const t=this.getSchemaForPath(e);if(t&&t.default!==void 0){const o=typeof t.default=="function"?t.default():t.default;this.set(e,o)}}else this.config=this.buildDefaultConfig(be),this.applyEnvironmentOverrides(),localStorage.removeItem("configPreferences"),this.validateConfig();F.log(`Configuration reset: ${e||"all"}`,x.INFO)}getEnvironment(){return this.environment}isDevelopment(){return this.environment===Z.DEVELOPMENT}isProduction(){return this.environment===Z.PRODUCTION}export(){return{config:this.config,environment:this.environment,schema:be,exportTime:new Date().toISOString()}}getSummary(){return{environment:this.environment,version:this.get("app.version"),debug:this.get("app.debug"),totalSettings:this.countConfigSettings(this.config),customPreferences:Object.keys(JSON.parse(localStorage.getItem("configPreferences")||"{}")).length}}countConfigSettings(e){let t=0;for(const o of Object.values(e))typeof o=="object"&&o!==null&&!Array.isArray(o)?t+=this.countConfigSettings(o):t++;return t}}const I=new Ct,Rt=new Proxy({},{get(d,e){return I.get(e.toString())},set(d,e,t){return I.set(e.toString(),t),!0}});window.config=I;window.CONFIG=Rt;class v{static getCustomRooms(){return S.getStorageItem(I.get("storage.keys.customRooms"),[])}static setCustomRooms(e){return S.setStorageItem(I.get("storage.keys.customRooms"),e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=S.sanitizeInput(e,50);return!o||[...I.get("rooms.predefined",[]).map(s=>s.name),...t.map(s=>s.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return S.getStorageItem(I.get("storage.keys.selectedProducts"),[])}static setSelectedProducts(e){return S.setStorageItem(I.get("storage.keys.selectedProducts"),e)}static addProductToSelection(e,t,o,r){try{const n=this.getSelectedProducts(),s=I.get("ui.annotationMaxLength",140),i={id:S.generateId(),product:S.deepClone(e),notes:S.sanitizeInput(t,s),room:S.sanitizeInput(o,50),quantity:Math.max(1,parseInt(r)||1),timestamp:Date.now()};return n.push(i),this.setSelectedProducts(n)?(F.log(`Product added to selection: ${e.OrderCode}`,x.DEBUG),i.id):(F.handleError({message:"Failed to save product to selection",category:B.STORAGE,level:x.WARN}),!1)}catch(n){return F.handleError({message:"Error adding product to selection",error:n,category:B.STORAGE,level:x.ERROR}),!1}}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].quantity=Math.max(1,parseInt(t)||1),this.setSelectedProducts(o)):!1}static updateProductRoom(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].room=S.sanitizeInput(t,50),this.setSelectedProducts(o)):!1}static updateProductNotes(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].notes=S.sanitizeInput(t,I.get("ui.annotationMaxLength",140)),this.setSelectedProducts(o)):!1}static updateProductPrice(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r].product.UserEditedPrice=t,this.setSelectedProducts(o)):!1}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(r=>r.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getUserSettings(){return S.getStorageItem(I.get("storage.keys.userPreferences"),{})}static saveUserSettings(e){return S.setStorageItem(I.get("storage.keys.userPreferences"),e)}static clearUserSettings(){try{return localStorage.removeItem(I.get("storage.keys.userPreferences")),!0}catch(e){return console.error("Error clearing user settings:",e),!1}}}class kt{constructor(){this.products=[],this.isLoaded=!1,this.searchIndex=new Map}async init(){try{return await this.loadProductCatalog(),this.buildSearchIndex(),console.log("✅ Data Layer initialized"),!0}catch(e){return console.error("❌ Failed to initialize Data Layer:",e),!1}}async loadProductCatalog(){try{console.log("📦 Loading product catalog...");const e=localStorage.getItem("productCatalogCsv");let t=[];e&&(t=this.parseCSV(e),this.products=t,this.isLoaded=!0,console.log(`⚡ Loaded ${t.length} products from cache`));const o=I.get("api.catalogUrl"),r=`${o+(o.includes("?")?"&":"?")}t=${Date.now()}`,n=new AbortController,s=setTimeout(()=>n.abort(),15e3);return fetch(r,{signal:n.signal,mode:"cors",cache:"no-cache"}).then(i=>(clearTimeout(s),i.ok?i.text():Promise.reject(`Failed to fetch catalog: ${i.status}`))).then(i=>{if(!e||i!==e){localStorage.setItem("productCatalogCsv",i);const a=this.parseCSV(i);JSON.stringify(a)!==JSON.stringify(t)&&(this.products=a,this.isLoaded=!0,console.log("🔄 New catalog loaded, reloading app..."),window.location.reload())}}).catch(i=>{clearTimeout(s),i.name==="AbortError"?console.warn("🕐 Background catalog update timed out (using cached data)"):console.warn("⚠️ Background catalog update failed (using cached data):",i.message)}),t}catch(e){throw console.error("❌ Failed to load product catalog:",e),e}}parseCSV(e){const t=this.parseCSVRows(e);if(t.length===0)return[];const o=t[0].map(n=>n.replace(/[\r\n]+\s*/g," ").trim()),r=[];for(let n=1;n<t.length;n++){const s=t[n];if(!(s.length===0||s.length===1&&!s[0].trim()))try{if(s.length>=o.length){const i={};o.forEach((l,u)=>{i[l]=s[u]||""}),i.Group=i.Group||"",i["Product Name"]=i["Product Name"]||i.Description||"",i.Description=i.Description||i["Product Name"]||"",i["Long Description"]=i["Long Description"]||i.LongDescription||"",i.OrderCode=i["Order Code"]||i.OrderCode||"",i["RRP EX GST"]=i["RRP EX"]||i["RRP EX GST"]||i.RRP_EXGST||"",i.RRP_EX=i["RRP EX"]||i["RRP EX GST"]||i.RRP_EXGST||i.RRP_EX||"",i["RRP INC GST"]=i["RRP INC GST"]||i.RRP_INCGST||"",i.RRP_INCGST=i["RRP INC GST"]||i.RRP_INCGST||i.RRP_INCGST||"",i["Release Note"]=i["Release Note"]||"",i.Website_URL=i.Website_URL||"";const a=i.Image_URL||"";i.Image_URL=a&&a.length>10&&(a.startsWith("http://")||a.startsWith("https://"))?a:"";const c=i.Diagram_URL||"";i.Diagram_URL=c&&c.length>10&&(c.startsWith("http://")||c.startsWith("https://"))?c:"",i.Datasheet_URL=i.Datasheet_URL||"",i.BARCODE=i.BARCODE||"",i["X Dimension (mm)"]=i["X Dimension (mm)"]||"",i["Y Dimension (mm)"]=i["Y Dimension (mm)"]||"",i["Z Dimension (mm)"]=i["Z Dimension (mm)"]||"",i.WEIGHT=i.WEIGHT||"",i["WELS NO"]=i["WELS NO"]||"",i["WELS STAR"]=i["WELS STAR"]||"",i["WELS CONSUMPTION"]=i["WELS CONSUMPTION"]||"",i["WELS Expiry"]=i["WELS Expiry"]||"",i.WATERMARK=i.WATERMARK||"",i.OrderCode&&i.OrderCode.trim()&&r.push(i)}}catch(i){console.warn(`Skipping invalid CSV line ${n+1}:`,i)}}return r}parseCSVRows(e){const t=[];let o=[],r="",n=!1;for(let s=0;s<e.length;s++){const i=e[s],a=e[s+1];i==='"'?n&&a==='"'?(r+='"',s++):n=!n:i===","&&!n?(o.push(r),r=""):(i==="\r"||i===`
`)&&!n?(i==="\r"&&a===`
`&&s++,o.push(r),o.length>0&&o.some(c=>c.trim())&&t.push(o),o=[],r=""):r+=i}return(r||o.length>0)&&(o.push(r),o.some(s=>s.trim())&&t.push(o)),t}parseCSVLine(e){const t=[];let o="",r=!1;for(let n=0;n<e.length;n++){const s=e[n];s==='"'?r&&e[n+1]==='"'?(o+='"',n++):r=!r:s===","&&!r?(t.push(o),o=""):o+=s}return t.push(o),t}buildSearchIndex(){console.log("🔍 Building search index..."),this.searchIndex.clear(),this.products.forEach((t,o)=>{t.OrderCode&&(this.searchIndex.set(t.OrderCode.toLowerCase(),o),this.searchIndex.set(t.OrderCode.toLowerCase().replace(/[-\s]/g,""),o)),t.BARCODE&&t.BARCODE.trim()&&(this.searchIndex.set(t.BARCODE.toLowerCase(),o),this.searchIndex.set(t.BARCODE.toLowerCase().replace(/[-\s]/g,""),o)),t.Description&&t.Description.toLowerCase().split(/\s+/).forEach(n=>{if(n.length>2){this.searchIndex.has(n)||this.searchIndex.set(n,[]);const s=this.searchIndex.get(n);Array.isArray(s)&&s.push(o)}})});const e=this.products.filter(t=>t.BARCODE&&t.BARCODE.trim()).length;console.log(`✅ Search index built with ${this.searchIndex.size} entries (${e} barcodes indexed)`)}findProductByCode(e){if(!e)return null;const t=e.toLowerCase().trim(),o=this.searchIndex.get(t)||this.searchIndex.get(t.replace(/[-\s]/g,"")),r=typeof o=="number"?this.products[o]:null;return e.length>8&&console.log(`🔍 Barcode search for "${e}": ${r?"FOUND":"NOT FOUND"} ${r?`(${r.OrderCode} - ${r.Description})`:""}`),r}searchProducts(e,t=50){if(!e||e.length<2)return[];const o=e.toLowerCase().trim().split(/\s+/).filter(n=>n.length>=2);if(o.length===0)return[];const r=[];for(const n of this.products){const s=o.map(a=>this.calculateSearchScore(n,a));if(s.some(a=>a===0))continue;const i=s.reduce((a,c)=>a+c,0)/s.length;r.push({product:n,score:i})}return r.sort((n,s)=>s.score-n.score),r.slice(0,t).map(n=>n.product)}calculateSearchScore(e,t){let o=0;const r=(e.OrderCode||"").toString().toLowerCase().trim(),n=(e.BARCODE||e.Barcode||"").toString().toLowerCase().trim(),s=(e["Product Name"]||e.ProductName||"").toString().toLowerCase().trim(),i=(e.Description||"").toString().toLowerCase().trim(),a=(e["Long Description"]||e.LongDescription||"").toString().toLowerCase().trim(),c=/^\d+$/.test(t);return r===t||n===t?100:(r.includes(t)&&(o=Math.max(o,90)),!c&&n.includes(t)&&(o=Math.max(o,90)),s===t?o=Math.max(o,80):s.startsWith(t)?o=Math.max(o,70):s.includes(t)&&(o=Math.max(o,60)),i.includes(t)&&(o=Math.max(o,40)),a.includes(t)&&(o=Math.max(o,20)),o)}getAllProducts(){return[...this.products]}getProductsByCategory(e){return this.products.filter(t=>t.Category&&t.Category.toLowerCase().includes(e.toLowerCase()))}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(I.get("storage.keys.selectedProducts"))||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1,id:this.generateSelectionId()}))}addProductToSelection(e,t="",o="",r=1){const n=this.getSelectedProducts(),s={id:this.generateSelectionId(),product:{...e},room:t,notes:o,quantity:Math.max(1,parseInt(r)||1)};return n.push(s),this.saveSelectedProducts(n),console.log(`✅ Added ${e.OrderCode} to selection`),s}removeProductFromSelection(e){const o=this.getSelectedProducts().filter(r=>r.id!==e);return this.saveSelectedProducts(o),console.log("✅ Removed product from selection"),o}updateSelectionItem(e,t){const o=this.getSelectedProducts(),r=o.findIndex(n=>n.id===e);return r!==-1?(o[r]={...o[r],...t},this.saveSelectedProducts(o),console.log("✅ Updated selection item"),o[r]):null}clearSelection(){localStorage.removeItem("selection"),localStorage.removeItem(I.get("storage.keys.selectedProducts")),console.log("✅ Selection cleared")}saveSelectedProducts(e){localStorage.setItem(I.get("storage.keys.selectedProducts"),JSON.stringify(e));const t=e.map(o=>({...o.product,Room:o.room,Notes:o.notes,Quantity:o.quantity}));localStorage.setItem("selection",JSON.stringify(t))}generateSelectionId(){return`sel_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,o=new Set(e.map(s=>s.room).filter(Boolean)),r=o.size||1;let n=0;return e.forEach(s=>{var c;const i=parseFloat((((c=s.product)==null?void 0:c.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,a=s.quantity||1;n+=i*a}),{totalProducts:t,totalRooms:r,totalValue:n,hasProducts:t>0,rooms:Array.from(o)}}getProductsByRoom(){const e=this.getSelectedProducts(),t={};return e.forEach(o=>{const r=o.room||"Unassigned";t[r]||(t[r]=[]),t[r].push(o)}),t}validateProduct(e){return["OrderCode","Description"].every(o=>e[o]&&e[o].trim())}validateSelection(){const e=this.getSelectedProducts(),t=[];return e.forEach((o,r)=>{this.validateProduct(o.product)||t.push(`Product ${r+1}: Missing required fields`),(!o.quantity||o.quantity<1)&&t.push(`Product ${r+1}: Invalid quantity`)}),{isValid:t.length===0,issues:t}}exportSelectionData(){const e=this.getSelectedProducts(),t=this.getSelectionSummary();return{selection:e,summary:t,exportDate:new Date().toISOString(),version:"1.0"}}importSelectionData(e){try{if(e.selection&&Array.isArray(e.selection))return this.saveSelectedProducts(e.selection),console.log(`✅ Imported ${e.selection.length} products`),!0;throw new Error("Invalid selection data format")}catch(t){return console.error("❌ Failed to import selection data:",t),!1}}}const j=new kt;class Dt{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log("✅ PDF Core initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Core:",e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}createDocument(){return this.doc=new window.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){const t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,o,r={}){const{fontSize:n=10,fontStyle:s="normal",align:i="left",maxWidth:a=null}=r;if(this.doc.setFontSize(n),this.doc.setFont("helvetica",s),a){const c=this.doc.splitTextToSize(e,a);return this.doc.text(c,t,o,{align:i}),c.length*(n*.35)}else return this.doc.text(e,t,o,{align:i}),n*.35}addLine(e,t,o,r,n="#000000",s=.1){this.doc.setDrawColor(n),this.doc.setLineWidth(s),this.doc.line(e,t,o,r)}addRect(e,t,o,r,n="S",s="#000000"){this.doc.setDrawColor(s),this.doc.rect(e,t,o,r,n)}async addImage(e,t,o,r,n){return new Promise(s=>{if(!e||e==="N/A"){s({width:0,height:0});return}const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{try{const a=document.createElement("canvas"),c=a.getContext("2d"),l=i.width/i.height;let u=r,p=r/l;p>n&&(p=n,u=n*l),a.width=u,a.height=p,c.drawImage(i,0,0,u,p);const h=this.detectTechnicalImage(i),y=h?.8:.7,f=h?"PNG":"JPEG",w=a.toDataURL(`image/${f.toLowerCase()}`,y);this.doc.addImage(w,f,t,o,u,p,void 0,"FAST"),s({width:u,height:p})}catch(a){console.warn("Failed to add image:",a),s({width:0,height:0})}},i.onerror=()=>{console.warn("Failed to load image:",e),s({width:0,height:0})},i.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){const t=document.createElement("canvas"),o=t.getContext("2d"),r=Math.min(50,Math.min(e.width,e.height));t.width=r,t.height=r,o.drawImage(e,0,0,r,r);const s=o.getImageData(0,0,r,r).data,i=new Set;let a=0;for(let p=0;p<s.length;p+=4){const h=s[p],y=s[p+1],f=s[p+2];if(i.add(`${h},${y},${f}`),p>0&&p<s.length-4){const w=s[p-4],g=s[p-3],E=s[p-2];Math.abs(h-w)+Math.abs(y-g)+Math.abs(f-E)>50&&a++}}const c=i.size<500,l=a>r*r*.1,u=e.width<800&&e.height<800;return c||l||u}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!="string")return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e==="N/A")return"";const t=parseFloat(e.toString().replace(/[^0-9.]/g,""));return t>0?`$${t.toFixed(2)}`:""}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:""}async finalize(){if(!this.doc)throw new Error("No document created");return this.doc.output("blob")}getDocument(){return this.doc}}const Ge=new Dt;class Lt{constructor(e){this.core=e||Ge}async addHeader(e){this.core.getDocument();const t=this.core.pageWidth,o=this.core.margins;this.core.addText("SEIMA",o.left,25,{fontSize:20,fontStyle:"bold"}),this.core.addText("Product Selection Report",t/2,25,{fontSize:16,fontStyle:"bold",align:"center"});const r=new Date().toLocaleDateString("en-AU");this.core.addText(r,t-o.right,25,{fontSize:10,align:"right"}),this.core.addLine(o.left,30,t-o.right,30,"#cccccc"),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();const t=this.core.margins,o=this.core.getContentWidth();this.core.addText("Customer Information",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const r=t.left,n=t.left+o/2;let s=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,r,s,{fontSize:10}),s+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,r,s,{fontSize:10}),s+=5),s=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,n,s,{fontSize:10}),s+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,n,s,{fontSize:10}),s+=5),e.address&&e.address.trim()){this.core.setCurrentY(s+2);const i=this.core.addText(`Address: ${e.address.trim()}`,r,this.core.getCurrentY(),{fontSize:10,maxWidth:o-20});this.core.moveY(i)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(5)}async addSelectionSummary(e){const t=this.core.margins;this.core.addText("Selection Summary",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=e.length,n=new Set(e.map(i=>i.room).filter(Boolean)).size||1;let s=0;e.forEach(i=>{var l;const a=parseFloat((((l=i.product)==null?void 0:l.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=i.quantity||1;s+=a*c}),this.core.addText(`Total Products: ${o}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${n}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),s>0&&(this.core.addText(`Estimated Total Value: $${s.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:"bold"}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();const e=this.core.margins,t=this.core.getContentWidth();this.core.addText("Product Details",e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=this.core.getCurrentY(),r={image:25,code:35,description:70,price:25,qty:15,room:30};let n=e.left;return this.core.addRect(e.left,o-2,t,8,"F","#f5f5f5"),this.core.addText("Image",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.image,this.core.addText("Code",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.code,this.core.addText("Description",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.description,this.core.addText("Price",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.price,this.core.addText("Qty",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=r.qty,this.core.addText("Room",n+2,o+3,{fontSize:9,fontStyle:"bold"}),this.core.moveY(10),r}async addProductRow(e,t,o=!1,r=null){var y,f,w,g,E,m,b;this.core.getDocument();const n=this.core.margins,s=20;this.core.checkPageSpace(s+5);const i=this.core.getCurrentY();let a=n.left;if(o&&this.core.addRect(n.left,i-1,this.core.getContentWidth(),s+2,"F","#fafafa"),(y=e.product)!=null&&y.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,a+2,i,20,15)}catch(C){console.warn("Failed to add product image:",C)}a+=t.image;const c=this.core.formatText(((f=e.product)==null?void 0:f.OrderCode)||"",15);this.core.addText(c,a+2,i+5,{fontSize:8}),a+=t.code;const l=this.core.formatText(((w=e.product)==null?void 0:w.Description)||"",45);this.core.addText(l,a+2,i+5,{fontSize:8,maxWidth:t.description-4}),a+=t.description;let u=0;((g=e.product)==null?void 0:g.UserEditedPrice)!==void 0&&((E=e.product)==null?void 0:E.UserEditedPrice)!==null&&((m=e.product)==null?void 0:m.UserEditedPrice)!==""?u=parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,""))||0:u=parseFloat((((b=e.product)==null?void 0:b.RRP_EX)||"0").toString().replace(/,/g,""))||0,u>0&&(r!=null&&r.includeGst)&&(u=u*1.1);const p=u>=0?`$${u.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";this.core.addText(p,a+2,i+5,{fontSize:8}),a+=t.price,this.core.addText((e.quantity||1).toString(),a+2,i+5,{fontSize:8}),a+=t.qty;const h=this.core.formatText(e.room||"",15);if(this.core.addText(h,a+2,i+5,{fontSize:8}),e.notes){const C=i+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,n.left+2,C,{fontSize:7,fontStyle:"italic"})}this.core.moveY(s)}async addFooter(e){const t=this.core.getDocument(),o=this.core.margins,r=this.core.pageWidth,s=this.core.pageHeight-20;this.core.addLine(o.left,s,r-o.right,s,"#cccccc"),this.core.addText("Generated by Seima Product Scanner",o.left,s+5,{fontSize:8,fontStyle:"italic"}),this.core.addText("www.seima.com.au",r-o.right,s+5,{fontSize:8,fontStyle:"italic",align:"right"});const i=t.internal.getNumberOfPages();this.core.addText(`Page ${i}`,r/2,s+5,{fontSize:8,align:"center"})}async addQRSection(e){const t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText("Quick Access Links",t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:"bold"}),this.core.moveY(8);const o=e.filter(r=>{var n;return((n=r.product)==null?void 0:n.Website_URL)&&this.core.isValidUrl(r.product.Website_URL)}).slice(0,5);o.forEach((r,n)=>{const s=`${r.product.OrderCode}: ${r.product.Website_URL}`;this.core.addText(this.core.formatText(s,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),o.length===0&&(this.core.addText("Visit www.seima.com.au for more product information",t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:"italic"}),this.core.moveY(4))}}const rt=new Lt;class Tt{constructor(){this.core=Ge,this.layouts=rt,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log("✅ Unified PDF Generator initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Generator:",e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);const o=await this.layouts.addProductTableHeader();for(let n=0;n<t.length;n++){const s=t[n],i=n%2===0;await this.layouts.addProductRow(s,o,i,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);const r=await this.core.finalize();return console.log("✅ PDF generated successfully"),r}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async generateCSV(e){try{const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📊 Generating CSV for ${t.length} products...`);const o=[];o.push('"Code","Description","WELS Star","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL"'),t.forEach(s=>{var b,C,T,M,_,ae,ce,le,de,ge,he;const i=this.cleanForCSV(((b=s.product)==null?void 0:b.OrderCode)||""),a=this.cleanForCSV(((C=s.product)==null?void 0:C.Description)||""),c=((T=s.product)==null?void 0:T["WELS STAR"])||((M=s.product)==null?void 0:M.WELS_STAR)||((_=s.product)==null?void 0:_.WELS_STAR)||((ae=s.product)==null?void 0:ae.WelsStar)||"",l=this.cleanForCSV(c&&c.toString().trim()?c.toString().replace(/[^\d.]/g,"").trim():""),u=s.quantity||1,p=this.cleanForCSV(((ce=s.product)==null?void 0:ce.RRP_EX)||""),h=this.calculateTotalPrice(p,u),y=this.cleanForCSV(s.notes||""),f=this.cleanForCSV(s.room||""),w=this.cleanForCSV(((le=s.product)==null?void 0:le.Image_URL)||""),g=this.cleanForCSV(((de=s.product)==null?void 0:de.Diagram_URL)||""),E=this.cleanForCSV(((ge=s.product)==null?void 0:ge.Datasheet_URL)||""),m=this.cleanForCSV(((he=s.product)==null?void 0:he.Website_URL)||"");o.push(`"${i}","${a}","${l}","${u}","${p}","${h}","${y}","${f}","${w}","${g}","${E}","${m}"`)});const r=o.join(`
`),n=new Blob([r],{type:"text/csv;charset=utf-8"});return console.log("✅ CSV generated successfully"),n}catch(t){throw console.error("❌ CSV generation failed:",t),t}}async generateBothFiles(e){try{const[t,o]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:o}}catch(t){throw console.error("❌ File generation failed:",t),t}}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(z.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}calculateTotalPrice(e,t){const r=(parseFloat(e.toString().replace(/[^0-9.]/g,""))||0)*(t||1);return r>0?r.toFixed(2):""}cleanForCSV(e){return e?e.toString().replace(/"/g,'""').replace(/[\r\n]/g," "):""}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){const o=new Date,r=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),s=String(o.getFullYear()).slice(-2),i=String(o.getHours()).padStart(2,"0"),a=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${r}${n}${s}.${i}${a}.${t}`}downloadFile(e,t){const o=URL.createObjectURL(e),r=document.createElement("a");r.href=o,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,r=new Set(e.map(s=>s.room).filter(Boolean)).size||1;let n=0;return e.forEach(s=>{var c;const i=parseFloat((((c=s.product)==null?void 0:c.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,a=s.quantity||1;n+=i*a}),{totalProducts:t,totalRooms:r,totalValue:n,hasProducts:t>0}}}const Bt=new Tt,Nt={Utils:S},At=I;class Ft{constructor(){this.modules={dataLayer:j,pdfGenerator:Bt,pdfCore:Ge,pdfLayouts:rt,StorageManager:v,utils:Nt},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log("🚀 Initializing modular components...");const e=[this.initModule("dataLayer",this.modules.dataLayer),this.initModule("pdfGenerator",this.modules.pdfGenerator)];return(await Promise.allSettled(e)).forEach((o,r)=>{const n=["dataLayer","pdfGenerator"][r];o.status==="rejected"?(console.error(`❌ Failed to initialize ${n}:`,o.reason),this.initStatus[n]=!1):this.initStatus[n]=o.value}),this.isInitialized=!0,console.log("✅ Module initialization complete:",this.initStatus),this.initStatus}catch(e){return console.error("❌ Module coordinator initialization failed:",e),!1}}async initModule(e,t){try{if(t&&typeof t.init=="function"){const o=await t.init();return console.log(`✅ ${e} initialized:`,o),o}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(o){throw console.error(`❌ Failed to initialize ${e}:`,o),o}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,t="",o="",r=1){return this.modules.dataLayer.addProductToSelection(e,t,o,r)}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){const t=[];for(const{product:o,room:r,notes:n,quantity:s}of e)try{const i=await this.addProductToSelection(o,r,n,s);t.push({success:!0,result:i})}catch(i){t.push({success:!1,error:i.message,product:o})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:At,timestamp:new Date().toISOString()}}}const Ot=new Ft;Ot.init().catch(d=>{console.error("❌ Auto-initialization failed:",d)});class $t{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){try{await j.init()}catch(e){console.error("Failed to load product catalog:",e)}await this.loadVersion(),this.updateSelectionCount(),setTimeout(()=>this.loadVersion(),1e3)}async loadVersion(){try{const e=await fetch("./version.txt");if(e.ok){const t=await e.text(),o=document.getElementById("version-number");if(o){const r=t.trim().split(`
`).filter(i=>i.trim()!==""),n=r.length>0?r[r.length-1]:"Unknown",s=n.split(" - ")[0]||n;o.innerText=s,o.innerText.trim()||(o.innerText="v2.1.0")}}else throw new Error("Version file not found")}catch{const t=document.getElementById("version-number");if(t){const o=I.get("app.version")||"v2.1.0";t.innerText=o}else setTimeout(()=>{const o=document.getElementById("version-number");if(o&&!o.innerText.trim()){const r=I.get("app.version")||"v2.1.0";o.innerText=r}},1e3);console.info("Version loaded from config (GitHub Pages mode)")}}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(r=>r.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),r=document.getElementById("search-no-results");if(!e||!t)return;const n=[],s=S.debounce(i=>{this.performSplitProductSearch(i,t,n,o,r)},200);e.addEventListener("input",()=>{const i=e.value.trim();i?s(i):this.loadInitialSearchResults()}),t.addEventListener("click",i=>{const a=i.target.closest(".result-item");if(!a)return;const c=parseInt(a.getAttribute("data-idx"),10),l=n.length>0?n:this.currentSearchResults||[];!isNaN(c)&&l[c]&&this.showSplitProductDetails(l[c])})}performSplitProductSearch(e,t,o,r,n){if(!j.isLoaded){r.style.display="flex",n.style.display="none",t.innerHTML="";return}o.length=0,o.push(...j.searchProducts(e)),r.style.display="none",o.length===0?(n.style.display="flex",t.innerHTML=""):(n.style.display="none",t.innerHTML=o.map((s,i)=>`
          <div class="result-item" data-idx="${i}">
            <span class="result-code">${S.sanitizeInput(s.OrderCode||s.Code||"")}</span> - ${S.sanitizeInput(s.Description||s.ProductName||s["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!j.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",setTimeout(()=>this.loadInitialSearchResults(),500);return}const r=j.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=r.map((n,s)=>`
        <div class="result-item" data-idx="${s}">
          <span class="result-code">${S.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${S.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=r}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),r=document.getElementById("product-name"),n=document.getElementById("product-code"),s=document.getElementById("product-price"),i=document.getElementById("product-room"),a=document.getElementById("product-quantity"),c=document.getElementById("product-notes"),l=document.getElementById("add-product-btn"),u=document.getElementById("close-details");if(t){if(o){const p=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=p,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}if(r&&(r.textContent=e.Description||e.ProductName||e["Product Name"]||""),n&&(n.textContent=e.OrderCode||e.Code||""),s){const p=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"]||0;s.textContent=p?`$${parseFloat(p).toFixed(2)}`:"Price not available"}this.populateRoomSelect(i),a&&(a.value=1),c&&(c.value=""),u&&(u.onclick=()=>{t.style.display="none"}),l&&(l.onclick=()=>{const p=i?i.value:"Blank",h=a&&parseInt(a.value)||1,y=c?c.value.trim():"";this.addProductToSplitSelection(e,p,h,y),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const r=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=r,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";let r="",n=NaN;const s=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"];s&&(n=parseFloat(s.toString().replace(/,/g,""))),!isNaN(n)&&n>0?r=`$${n.toFixed(2)} ex GST`:r="Price unavailable",document.getElementById("product-price-inline").textContent=r,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const i=document.getElementById("diagram-link"),a=document.getElementById("datasheet-link"),c=document.getElementById("website-link");if([i,a,c].forEach(l=>{l&&(l.setAttribute("target","_blank"),l.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const l=document.getElementById("product-quantity");l&&(l.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',I.get("rooms.predefined",[]).forEach(s=>{const i=document.createElement("option");i.value=s.name,i.textContent=s.name,t.appendChild(i)}),v.getCustomRooms().forEach(s=>{const i=document.createElement("option");i.value=s.name,i.textContent=s.name,t.appendChild(i)});const n=document.createElement("option");n.value="__ADD_NEW_ROOM__",n.textContent="➕ Add new room...",n.style.fontWeight="bold",n.style.color="#2563eb",t.appendChild(n),t.value="Blank",t.removeEventListener("change",this.handleRoomSelectChange.bind(this)),t.addEventListener("change",this.handleRoomSelectChange.bind(this))}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",I.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const r=document.createElement("option");r.value=o,r.textContent=o.toString(),e.appendChild(r)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),r=document.getElementById("variant-select");if(o&&r){let n=e.ProductName||e["Product Name"]||"";typeof n=="string"&&(n=n.trim());let s=[];n&&(s=j.getAllProducts().filter(i=>{let a=i.ProductName||i["Product Name"]||"";return typeof a=="string"&&(a=a.trim()),a&&a===n})),s.length>1?(s.sort((i,a)=>(i.Description||"").localeCompare(a.Description||"")),o.style.display="",r.innerHTML=s.map(i=>`<option value="${i.OrderCode}"${i.OrderCode===e.OrderCode?" selected":""}>${i.Description}</option>`).join(""),r.onchange=()=>{var c;const i=r.value,a=s.find(l=>l.OrderCode===i);if(a&&a.OrderCode!==e.OrderCode){const l=((c=document.getElementById("product-annotation"))==null?void 0:c.value)||t.notes||"",u=document.getElementById("product-quantity");let p=1;u&&u.value?p=Math.max(1,parseInt(u.value,10)||1):t.quantity&&(p=t.quantity),this.showProductDetailsScreen(a,{notes:l,quantity:p})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",r=>{r.key==="Enter"&&r.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),r=document.getElementById("product-annotation"),n=t?t.value:"Blank",s=o?parseInt(o.value):1,i=r?r.value:"";v.addProductToSelection(e,i,n,s)?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,r){v.addProductToSelection(e,r,t,o)?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),r=document.getElementById("total-items"),n=document.getElementById("total-value");if(!e||!t||!o)return;const s=v.getSelectedProducts();if(s.length===0){e.style.display="none",t.style.display="flex",r&&(r.textContent="0 items"),n&&(n.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let i=0,a=0;s.forEach(c=>{i+=c.quantity;let l=0;c.product.UserEditedPrice!==void 0&&c.product.UserEditedPrice!==null&&c.product.UserEditedPrice!==""?l=parseFloat(c.product.UserEditedPrice.toString().replace(/,/g,""))||0:l=parseFloat((c.product.RRP_EX||c.product["RRP EX GST"]||c.product.RRP_EX||c.product.RRP_EXGST||0).toString().replace(/,/g,""))||0,l>0&&(a+=l*c.quantity)}),r&&(r.textContent=i),n&&(n.textContent=a>0?`$${a.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=s.map((c,l)=>{const u=c.product;let p=0;u.UserEditedPrice!==void 0&&u.UserEditedPrice!==null&&u.UserEditedPrice!==""?p=parseFloat(u.UserEditedPrice.toString().replace(/,/g,""))||0:p=parseFloat((u.RRP_EX||u["RRP EX GST"]||u.RRP_EX||u.RRP_EXGST||0).toString().replace(/,/g,""))||0;const h=p*c.quantity,y=u.Image||u.Image_URL||u.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${l}">
          <div class="col-image">
            <img class="table-product-image" src="${y}" alt="Product" onerror="this.src='assets/no-image.png';">
          </div>
          <div class="col-product">
            <div class="product-info">
              <div class="product-name">${S.sanitizeInput(u.Description||u.ProductName||u["Product Name"]||"")}</div>
              <div class="product-code">${S.sanitizeInput(u.OrderCode||u.Code||"")}</div>
              ${c.notes?`<div class="product-notes">${S.sanitizeInput(c.notes)}</div>`:""}
            </div>
          </div>
          <div class="col-room">
            <select class="room-select" data-index="${l}">
              ${this.getRoomOptions(c.room)}
            </select>
          </div>
          <div class="col-price-ea">
            <div class="price-display">${p?`$${p.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${l}" value="${c.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${p?`$${h.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${l}" title="Remove">×</button>
          </div>
        </div>
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return I.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),v.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),r=v.getSelectedProducts();r[t]&&(r[t].quantity=o,v.setSelectedProducts(r),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const s=n.trim();if(v.addCustomRoom(s)){o=s,console.log("✅ Added new room:",s),this.renderSelectionTable();return}else{alert("Room name already exists or is invalid");const i=v.getSelectedProducts();i[t]&&(e.value=i[t].room||"Blank");return}}else{const s=v.getSelectedProducts();s[t]&&(e.value=s[t].room||"Blank");return}}const r=v.getSelectedProducts();r[t]&&(r[t].room=o,v.setSelectedProducts(r),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=v.getSelectedProducts();o[t]&&(o.splice(t,1),v.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=v.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const r={};o.forEach(n=>{const s=n.room||"Unassigned";r[s]||(r[s]=[]),r[s].push(n)}),e.innerHTML=Object.entries(r).map(([n,s])=>`
      <div class="review-room-group">
        <div class="review-room-header">${n} <span class="room-count">(${s.length})</span></div>
        ${s.map((i,a)=>{const c=i.product,l=c.Description||c.description||c.productName||c["Product Name"]||"Product",u=c.OrderCode||c.orderCode||"",p=c.Image_URL||c.imageUrl||"assets/no-image.png",h=c.RRP_EX||c["RRP EX GST"]||c.RRP_EX||c.rrpExGst||c.RRP_EXGST||c.RRP_INCGST||c["RRP INC GST"]||"0";return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${p}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${n}" data-idx="${a}">
                  <button class="review-qty-btn${(i.quantity||1)===1?" delete":""}" data-action="decrement" title="${(i.quantity||1)===1?"Delete":"Decrease"}">
                    ${(i.quantity||1)===1?"<svg viewBox='0 0 64 64' width='64' height='64'><rect x='10' y='8' width='44' height='6' rx='3' fill='black'/><polygon points='7,18 57,18 52,58 12,58' fill='none' stroke='black' stroke-width='7'/></svg>":"–"}
                  </button>
                  <span class="review-qty-value">${i.quantity||1}</span>
                  <button class="review-qty-btn" data-action="increment" title="Increase">+</button>
                </div>
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${l}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${u?`Code: ${u}`:""}</span>
                  <span class="review-product-price">${`$${Number(h).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${i.notes?`Notes: ${i.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(r)}groupProductsByRoom(e){return e.reduce((t,o)=>{const r=o.room||"Unassigned";return t[r]||(t[r]=[]),t[r].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),r=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(n=>{n.onclick=()=>{const s=n.getAttribute("data-action"),i=v.getSelectedProducts();let a=-1;const c=i.findIndex(l=>(l.room===o&&a++,l.room===o&&a===r));if(c!==-1){const l=i[c],u=parseInt(l.quantity,10)||1;s==="increment"?v.updateProductQuantity(l.id,u+1):s==="decrement"&&(u===1?v.removeProductFromSelection(l.id):v.updateProductQuantity(l.id,u-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),r=document.getElementById("pdf-email-cancel"),n=document.getElementById("pdf-email-send");if(o){const i=S.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=i.name||""),o["user-project"]&&(o["user-project"].value=i.project||""),o["user-address"]&&(o["user-address"].value=i.address||""),o["user-email"]&&(o["user-email"].value=i.email||""),o["user-telephone"]&&(o["user-telephone"].value=i.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!i.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!i.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!i.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!i.includeGst)}const s=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;s&&(s.style.display="none"),n&&(n.textContent="Download"),r&&(r.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=i=>{i.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{v.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=v.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const r=prompt("Enter new room name:");if(r&&r.trim()){const n=r.trim();v.addCustomRoom(n)?(this.populateRoomSelect(t),t.value=n,console.log("✅ Added new room:",n)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function Me(d,e,t="file"){await nt(d,e,t)}function _e(d,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),Ke();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px;
      padding: 20px; max-width: 400px; min-width: 320px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      text-align: center;
    `;const r=d.emailCompatible;o.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${r?"📧":"📄"}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${r?"Creating text-only PDF without images for optimal email delivery.":"This may take a moment."}
      </p>
    `,document.body.appendChild(o),Ae("./assets/seima-logo.png",(n,s,i)=>{const a=JSON.parse(localStorage.getItem("selection")||"[]"),c=JSON.parse(localStorage.getItem(z.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let l=[];c.length>0?l=c.map(m=>({...m.product,Room:m.room,Notes:m.notes,Quantity:m.quantity,Timestamp:new Date(m.timestamp).toISOString()})):l=a;const u=document.getElementById("sort-by"),p=u?u.value:"room";switch(p){case"code":l.sort((m,b)=>{const C=m.OrderCode||m.Code||"",T=b.OrderCode||b.Code||"";return C.localeCompare(T)});break;case"product":l.sort((m,b)=>{const C=m.Description||m.ProductName||"",T=b.Description||b.ProductName||"";return C.localeCompare(T)});break;case"room":default:l.sort((m,b)=>{const C=m.Room||"Blank",T=b.Room||"Blank";return C.localeCompare(T)});break}if(!l.length){alert("No products selected."),t&&(t.style.display="none");return}if(Je()>0)console.log(`📷 Using ${Je()} pre-cached images (skipping duplicate preload)`);else{const m=document.getElementById("pdf-processing-notification");if(m){const b=document.createElement("span");b.id="preload-progress",b.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",b.textContent="Loading images: 0%",m.appendChild(b)}console.log("📷 Starting image preload for",l.length,"products"),ot(l).then(b=>{const C=document.getElementById("preload-progress");C&&(C.textContent=`✓ ${b} images ready`,C.style.color="#059669")}).catch(b=>{console.warn("Image preloading error:",b)})}const y={};p==="room"?l.forEach(m=>{const b=m.Room||"Blank";y[b]||(y[b]=[]),y[b].push(m)}):y.__all__=l;const{jsPDF:f}=window.jspdf,w=new f({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),g=w.internal.pageSize.getWidth(),E=w.internal.pageSize.getHeight();Ae("./assets/seima-logo.png",(m,b,C)=>{const T=ne.getCurrentUser(),M=v.getUserSettings(),_=T?{name:T.name,email:T.email,phone:T.phone,position:T.position}:M,ae=localStorage.getItem("customerLogo");gt(w,{pageWidth:g,pageHeight:E,seimaLogoDataUrl:m,seimaLogoNaturalW:b,seimaLogoNaturalH:C,customerLogoDataUrl:ae,userDetails:d,staffContact:_,footerHeight:Ye.footerHeight}),w.addPage(),Ae("./assets/seima-logo-white.png",(ce,le,de)=>{const lt=d.showRrp&&!d.excludePrice,je=!d.excludePrice,qe=!d.excludeQty,dt=ht(g,{leftMargin:32,rightMargin:32,showRrp:lt,showPrice:je,showQty:qe,showTotal:je&&qe}),{colX:ue,colW:we,headers:De}=dt,xe=Ye.footerHeight;Ke();const He=(R,P,U,J,A,O,L)=>{if(!P||typeof P!="string"||P.length<10||!P.startsWith("http://")&&!P.startsWith("https://")&&!P.startsWith("data:")){L&&L();return}if((k=>{if(!k||k.length<25||/\/images\/\d+$/.test(k)||k.endsWith("/0"))return!0;const D=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(k),N=k.startsWith("data:");return!D&&!N})(P)){console.warn("Skipping malformed image URL:",(P==null?void 0:P.substring(0,50))+"..."),L&&L();return}if(W.totalImages++,d.emailCompatible){W.failedImages++,L&&L();return}const Y=bt(P);if(Y&&Y.dataUrl)try{const k=Y.width/Y.height;let D=A,N=A/k;N>O&&(N=O,D=O*k),R.addImage(Y.dataUrl,Y.format,U,J,D,N,void 0,"FAST"),W.optimizedImages++,L&&L();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let ee=!1;const me=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let X=0;function Q(){if(ee)return;const k=new Image;k.crossOrigin="Anonymous";let D=null;k.onload=function(){if(!ee){ee=!0,D&&clearTimeout(D);try{const te=st(0),Ce=te.imageMaxWidth,fe=A,K=O;try{const $=document.createElement("canvas"),G=$.getContext("2d"),{width:H,height:Ve}=Ht(k.width,k.height,Ce);$.width=H,$.height=Ve,G.imageSmoothingEnabled=!0,G.imageSmoothingQuality="high",G.drawImage(k,0,0,H,Ve);let Be,Ne="JPEG";const ut=qt($,G),pt=jt(k);ut||pt?(Be=$.toDataURL("image/png",te.imageQuality),Ne="PNG"):(Be=$.toDataURL("image/jpeg",te.imageQuality),Ne="JPEG");const mt=`img_${Zt(P)}`;R.addImage(Be,Ne,U,J,fe,K,mt,"FAST"),W.optimizedImages++,L&&L()}catch($){console.warn(`Failed to optimize image: ${P}`,$),console.warn("Error details:",$.message,$.stack);try{R.addImage(k,"JPEG",U,J,fe,K),W.optimizedImages++,L&&L()}catch(G){console.error(`Fallback also failed for: ${P}`,G),W.failedImages++,L&&L()}}}catch(te){console.warn("Failed to add image to PDF:",te),W.failedImages++,L&&L()}}},k.onerror=function(){ee||(D&&clearTimeout(D),console.warn(`Failed to load image with proxy ${X}: ${P}`),console.warn(`Error details for: ${P} - Proxy: ${me[X]}`),X++,X<me.length?setTimeout(()=>{Q()},200):(ee=!0,console.warn("All proxies failed, skipping image"),W.failedImages++,L&&L()))},D=setTimeout(()=>{ee||(console.warn(`⏰ Timeout with proxy ${X}: ${P}`),k.src="",k.onload=null,k.onerror=null,X++,X<me.length?setTimeout(()=>{Q()},200):(ee=!0,console.warn("All proxies timed out, skipping image"),W.failedImages++,L&&L()))},3e3);let N=P;X<me.length&&(N=me[X]+encodeURIComponent(P)),k.src=N}Q()},q=[];Object.keys(y).forEach((R,P)=>{const U=y[R];if(!U||!Array.isArray(U)){console.warn("⚠️ Skipping invalid room items:",R,U);return}U.forEach((J,A)=>{if(!J){console.warn("⚠️ Skipping null item in room:",R,"at index:",A);return}q.push({item:J,room:R,rIdx:P,iIdx:A,isFirstInRoom:A===0,roomCount:U.length})})}),q.reduce((R,P)=>{if(!P||!P.item)return console.warn("⚠️ Skipping null row in data analysis:",P),R;const U=String(P.item.Description||""),J=String(P.item.LongDescription||""),A=String(P.item.Notes||""),O=String(P.item.OrderCode||"");return R+U.length+J.length+A.length+O.length},0);let ve=0,Ee=0;const Pe=4,Ie=8,Le=Math.floor((E-80)/Pe);let We=xe+8;function Te(){if(!q||!Array.isArray(q)){console.error("❌ Critical error: rowsToDraw is not a valid array:",q),Qe(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(ve>=q.length){const A=w.internal.getNumberOfPages()-1;for(let D=2;D<=A+1;D++){w.setPage(D);const te=(D-2)*Pe,Ce=Math.min(te+Pe,q.length);let fe=!1;for(let K=te;K<Ce;K++)if(q[K]&&q[K].item&&ft(q[K].item)){fe=!0;break}yt(w,{pageWidth:g,colX:ue,colW:we,leftMargin:32,footerHeight:xe,logoDataUrl:ce,logoNaturalW:le,logoNaturalH:de,headers:De,userDetails:d,skipWelsHeader:!fe}),wt(w,{pageWidth:g,pageHeight:E,leftMargin:32,footerHeight:xe,pageNumber:D-1,totalPages:A})}const O=new Date,L=String(O.getDate()).padStart(2,"0"),pe=String(O.getMonth()+1).padStart(2,"0"),Y=String(O.getFullYear()).slice(-2),ee=String(O.getHours()).padStart(2,"0"),me=String(O.getMinutes()).padStart(2,"0"),Q=`${d.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${L}${pe}${Y}.${ee}${me}.pdf`,k=document.getElementById("pdf-processing-notification");k&&k.remove(),eo(d.emailCompatible);try{const D=w.output("blob"),N=w.output("string"),te=N?N.match(/\/Type\s*\/XObject/g):null,Ce=N?N.match(/Tj\s/g):null,fe=N?N.match(/\/A\s*<</g):null;d.pdfSize=D.size;const K=Vt(D,Q);if(d.sendEmail&&D.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(D.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),to(d,Q);return}const $=Wt(D,K.settings);if(d.sendEmail&&d.email)if(d.exportCsv){const G=Q.replace(/\.pdf$/,".csv");Xe(d,G).then(H=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:d,pdfBlob:$,csvBlob:H}}))}).catch(H=>{console.error("Async CSV generation for email failed:",H),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:d,pdfBlob:$,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:d,pdfBlob:$,csvBlob:null}}));else if((async()=>{const G=await ro($);Me(G,Q,"PDF")})(),d.exportCsv){const G=Q.replace(/\.pdf$/,".csv");setTimeout(()=>{Xe(d,G).then(H=>{H&&Me(H,G,"CSV")}).catch(H=>{console.error("CSV generation failed:",H)})},1e3)}}catch(D){console.error("PDF generation failed:",D),Qe(D,"generating PDF",Q);const N=document.getElementById("pdf-processing-notification");N&&N.remove()}t&&(t.style.display="none");return}Ee>=Pe&&(w.addPage(),We=xe+8,Ee=0);const R=q[ve];if(!R||!R.item){console.warn(`⚠️  Skipping invalid row at index ${ve}:`,R),ve++,Te();return}const P=We+Le*Ee;R.isFirstInRoom&&p==="room"&&R.room!=="__all__"&&vt(w,R.room,R.roomCount,32,P);const U=ue[0],J=U+90+12;He(w,R.item.Image_URL||"",U,P+Ie+16,90,Le-Ie*2,()=>{He(w,R.item.Diagram_URL||"",J,P+Ie+16,90,Le-Ie*2,()=>{const A=P+28,O=ue[1]+we[1]/2;w.setFontSize(10),w.setTextColor("#222"),w.text(String(R.item.OrderCode||""),O,A+10,{align:"center"}),St(w,R.item,O,A+35);const L=we[2]-10;xt(w,R.item,ue[2],A+10,L,d.excludeLongDescription);const pe=De.indexOf("WELS")+1;if(pe>0&&ue[pe]){const Y=ue[pe]+we[pe]/2;Et(w,R.item,Y,A+10)}Pt(w,R.item,ue,we,De,A+10,{excludePrice:d.excludePrice,includeGst:d.includeGst}),ve++,Ee++,Te()})})}Te()})})})}function Ae(d,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),r=o.getContext("2d"),n=400,s=150;let i=t.width,a=t.height;if(i>n||a>s){const l=n/i,u=s/a,p=Math.min(l,u);i=Math.round(i*p),a=Math.round(a*p)}o.width=i,o.height=a,r.imageSmoothingEnabled=!0,r.imageSmoothingQuality="high",r.drawImage(t,0,0,i,a);const c=o.toDataURL("image/png",.9);e(c,i,a)},t.src=d}function Ut(){if(!document.getElementById("pdf-spinner")){const d=document.createElement("div");if(d.id="pdf-spinner",d.style.display="none",d.style.position="fixed",d.style.top="0",d.style.left="0",d.style.width="100vw",d.style.height="100vh",d.style.zIndex="9999",d.style.background="rgba(255,255,255,0.7)",d.style.alignItems="center",d.style.justifyContent="center",d.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(d),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function Xe(d,e){return new Promise(async t=>{if(!window.Papa)try{await S.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(s){console.error("Failed to load PapaParse:",s),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),r=JSON.parse(localStorage.getItem(z.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let n=[];if(r.length>0?n=r.map(s=>({...s.product,Room:s.room,Notes:s.notes,Quantity:s.quantity,Timestamp:new Date(s.timestamp).toISOString()})):n=o,!n.length){t(null);return}setTimeout(()=>{const s=n.map(i=>{let a,c,l,u;const p=d.excludePrice;let h=0;if(i.UserEditedPrice!==void 0&&i.UserEditedPrice!==null&&i.UserEditedPrice!=="")h=parseFloat(i.UserEditedPrice.toString().replace(/,/g,""));else{const g=i.RRP_EX||i["RRP EX GST"]||i.RRP_EX||i.RRP_EXGST||"";h=parseFloat((g||"0").toString().replace(/,/g,""))}a=h,l="Price ea ex GST",u="Price Total ex GST",c=!isNaN(a)&&a>=0?(a*(i.Quantity||1)).toFixed(2):"";const y=i["WELS STAR"]||i.WELS_STAR||i.WELS_STAR||i.WelsStar||"",f=y&&y.toString().trim()?y.toString().replace(/[^\d.]/g,"").trim():"",w={Code:oe(i.OrderCode||""),Description:oe(i.Description||""),"WELS Star":oe(f),Quantity:i.Quantity||1,Notes:oe(i.Notes||""),Room:oe(i.Room||""),"Image URL":oe(i.Image_URL||""),"Diagram URL":oe(i.Diagram_URL||""),"Datasheet URL":oe(i.Datasheet_URL||""),"Website URL":oe(i.Website_URL||"")};return w[l]=p?"0.00":a>=0?a.toFixed(2):"",w[u]=p?"0.00":c,w});setTimeout(()=>{const i=window.Papa.unparse(s,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(a,c){return typeof a=="string"?a.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):a}}});d.sendEmail?setTimeout(()=>{try{const a=btoa(unescape(encodeURIComponent(i)));t({name:e,data:a,contentType:"text/csv",originalSize:i.length,base64Size:a.length})}catch(a){console.error("CSV base64 encoding failed:",a),t(new Blob([i],{type:"text/csv"}))}},0):t(new Blob([i],{type:"text/csv"}))},0)},0)})}function oe(d){return typeof d!="string"&&(d=String(d)),d=d.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),d}async function zt(d,e,t="file"){try{if("showSaveFilePicker"in window){const r=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[d.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await r.write(d),await r.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function Mt(d,e,t="file"){try{if(d.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(r){try{const n=document.createElement("a");n.href=r.target.result,n.download=e,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(n){console.error("Data URI download failed:",n)}},o.readAsDataURL(d),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function _t(d,e,t="file"){const o=URL.createObjectURL(d),r=document.createElement("div");r.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 600px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #2563eb; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">💾</span>
      Manual Download Required
    </h3>
    <p style="margin: 0 0 16px 0; color: #374151;">
      Automatic download failed. Please use one of these manual methods to save your ${t}:
    </p>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Method 1: Right-click to save</h4>
      <p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px;">
        Right-click the button below and select "Save link as..." or "Download linked file":
      </p>
      <a href="${o}" download="${e}" style="
        display: inline-block; padding: 10px 20px; background: #2563eb; color: white; 
        text-decoration: none; border-radius: 4px; font-weight: bold;
      ">📄 ${e}</a>
    </div>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Method 2: Copy download link</h4>
      <p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px;">
        Copy this link and paste it into a new browser tab:
      </p>
      <div style="display: flex; gap: 8px; align-items: center;">
        <input type="text" id="manual-download-url" value="${o}" readonly style="
          flex: 1; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; 
          font-family: monospace; font-size: 12px; background: white;
        ">
        <button id="copy-url-btn" style="
          padding: 8px 12px; border: none; background: #059669; color: white; 
          border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: bold;
        ">Copy</button>
      </div>
    </div>
    
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button id="manual-download-close" style="
        padding: 10px 20px; border: 1px solid #d1d5db; background: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Close</button>
      <button id="manual-download-retry" style="
        padding: 10px 20px; border: none; background: #2563eb; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Try Auto Download Again</button>
    </div>
  `,r.appendChild(n),document.body.appendChild(r),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(r)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(r),setTimeout(()=>{nt(d,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const s=document.getElementById("manual-download-url");s.select(),s.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const i=document.getElementById("copy-url-btn");i.textContent="Copied!",i.style.background="#059669",setTimeout(()=>{i.textContent="Copy",i.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const i=document.getElementById("copy-url-btn");i.textContent="Copied!",setTimeout(()=>i.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},r.onclick=s=>{s.target===r&&(URL.revokeObjectURL(o),document.body.removeChild(r))},setTimeout(()=>{r.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(r))},5*60*1e3)}async function nt(d,e,t="file"){try{if(await Gt(d,e))return}catch(o){console.warn("Standard download failed:",o)}await zt(d,e,t)||Mt(d,e,t)||_t(d,e,t)}function Gt(d,e){return new Promise(t=>{try{const o=URL.createObjectURL(d),r=document.createElement("a");r.href=o,r.download=e,r.style.display="none",document.body.appendChild(r);const n=setTimeout(()=>{s(),t(!1)},3e3),s=()=>{clearTimeout(n),r.parentElement&&document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(o),1e3)};r.onclick=()=>{s(),t(!0)},r.click(),setTimeout(()=>{s(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function jt(d){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,d.width),e.height=Math.min(100,d.height),t.drawImage(d,0,0,e.width,e.height);const r=t.getImageData(0,0,e.width,e.height).data,n=new Set;for(let s=0;s<r.length;s+=4){const i=`${r[s]},${r[s+1]},${r[s+2]}`;n.add(i)}return n.size<1e3}function qt(d,e){const o=e.getImageData(0,0,d.width,d.height).data;for(let r=3;r<o.length;r+=4)if(o[r]<255)return!0;return!1}function Ht(d,e,t){if(d<=t)return{width:d,height:e};const o=e/d;return{width:t,height:Math.round(t*o)}}function st(d){return d>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:d>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:d>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:d>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function Wt(d,e){return d}function Vt(d,e){const t=(d.size/1048576).toFixed(2),o=st(d.size);if(d.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const r=document.createElement("div");r.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px;
      padding: 16px; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `,r.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">📁</span>
        <strong style="color: #92400e;">Large Technical PDF</strong>
      </div>
      <p style="margin: 0; color: #a16207; font-size: 14px;">
        PDF is ${t} MB with quality technical images. May exceed some email limits.
      </p>
      <button onclick="this.parentElement.remove()" style="
        margin-top: 8px; padding: 4px 8px; border: none; background: #f59e0b;
        color: white; border-radius: 3px; cursor: pointer; font-size: 12px;
      ">OK</button>
    `,document.body.appendChild(r),setTimeout(()=>{r.parentElement&&r.remove()},8e3)}else d.size>3*1024*1024;return{size:d.size,sizeInMB:parseFloat(t),settings:o}}function Qe(d,e="",t=""){console.error("Detailed error:",d);const o={type:Jt(d),message:d.message||"Unknown error",context:e,filename:t,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},r=document.createElement("div");r.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");return n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${Yt(o.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${Xt(o.type,e,t)}
      </p>
    </div>
    
    ${Qt(o.type)}
    
    <details style="margin: 20px 0; padding: 16px; background: #f9fafb; border-radius: 6px;">
      <summary style="cursor: pointer; font-weight: bold; color: #374151;">
        🔧 Technical Details (for support)
      </summary>
      <div style="margin-top: 12px; font-family: monospace; font-size: 12px; color: #6b7280;">
        <p><strong>Error Type:</strong> ${o.type}</p>
        <p><strong>Message:</strong> ${o.message}</p>
        <p><strong>Context:</strong> ${o.context}</p>
        <p><strong>File:</strong> ${o.filename}</p>
        <p><strong>Time:</strong> ${o.timestamp}</p>
        <p><strong>Browser:</strong> ${it()}</p>
      </div>
    </details>
    
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button id="error-close" style="
        padding: 10px 20px; border: 1px solid #d1d5db; background: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Close</button>
      <button id="error-retry" style="
        padding: 10px 20px; border: none; background: #2563eb; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Try Again</button>
      <button id="error-report" style="
        padding: 10px 20px; border: none; background: #059669; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Report Issue</button>
    </div>
  `,r.appendChild(n),document.body.appendChild(r),document.getElementById("error-close").onclick=()=>{document.body.removeChild(r)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(r),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{Kt(o),alert("Error details copied to clipboard. Please send this to support.")},r.onclick=s=>{s.target===r&&document.body.removeChild(r)},o}function Jt(d){var o,r;const e=((o=d.message)==null?void 0:o.toLowerCase())||"",t=((r=d.stack)==null?void 0:r.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function Yt(d){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[d]||"Error Occurred"}function Xt(d,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[d]||"An unknown error has occurred."}function Qt(d){const e={network:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🌐 Try These Steps:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Check your internet connection</li>
          <li>Refresh the page and try again</li>
          <li>Clear browser cache and cookies</li>
          <li>Try using a different browser</li>
        </ol>
      </div>`,permission:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🔐 Enable Downloads:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Click the download icon in your browser's address bar</li>
          <li>Select "Always allow downloads from this site"</li>
          <li>Check your browser's download settings</li>
          <li>Ensure sufficient storage space is available</li>
        </ol>
      </div>`,memory:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">💾 Free Up Memory:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Close other browser tabs and applications</li>
          <li>Reduce the number of products in your selection</li>
          <li>Try generating smaller sections at a time</li>
          <li>Restart your browser if problem persists</li>
        </ol>
      </div>`,download:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">📥 Download Troubleshooting:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Check your Downloads folder</li>
          <li>Allow pop-ups for this website</li>
          <li>Try right-clicking and "Save as..."</li>
          <li>Use a different browser if issues persist</li>
        </ol>
      </div>`,rendering:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🖼️ Image Display Issues:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Check your internet connection</li>
          <li>Refresh the page to reload images</li>
          <li>Images may take time to load on slow connections</li>
          <li>PDF will still generate with available content</li>
        </ol>
      </div>`,pdf:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">📄 PDF Generation Issues:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Try reducing the number of products</li>
          <li>Check if any product data is corrupted</li>
          <li>Clear browser cache and try again</li>
          <li>Use CSV export as an alternative</li>
        </ol>
      </div>`,unknown:`
      <div style="background: #f0f9ff; border-radius: 6px; padding: 16px; margin: 16px 0;">
        <h4 style="margin: 0 0 12px 0; color: #0369a1;">🔧 General Troubleshooting:</h4>
        <ol style="margin: 0; color: #0c4a6e;">
          <li>Refresh the page and try again</li>
          <li>Clear browser cache and cookies</li>
          <li>Try using a different browser</li>
          <li>Contact support with the technical details above</li>
        </ol>
      </div>`};return e[d]||e.unknown}function it(){const d=navigator.userAgent;return d.includes("Chrome")?"Chrome":d.includes("Firefox")?"Firefox":d.includes("Safari")?"Safari":d.includes("Edge")?"Edge":d.includes("SamsungBrowser")?"Samsung Internet":"Unknown"}function Kt(d){const e=`
Seima Scanner Error Report
========================
Time: ${d.timestamp}
Error Type: ${d.type}
Message: ${d.message}
Context: ${d.context}
File: ${d.filename}
Browser: ${it()}
User Agent: ${d.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy error report:",t)}}let W={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function Zt(d){let e=0;if(d.length===0)return e.toString();for(let t=0;t<d.length;t++){const o=d.charCodeAt(t);e=(e<<5)-e+o,e=e&e}return Math.abs(e).toString(36)}function Ke(){W={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function eo(d=!1){W.totalImages>0}function to(d,e){const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10001; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const o=document.createElement("div");o.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 500px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,o.innerHTML=`
    <h3 style="color: #2563eb; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">📧</span>
      Email-Compatible Version Available
    </h3>
    <p style="margin: 0 0 16px 0; color: #374151;">
      Your PDF is large (${(d.pdfSize/1024/1024).toFixed(1)} MB). 
      We can create a smaller, email-friendly version with optimized images.
    </p>
    
    <div style="background: #f3f4f6; padding: 16px; border-radius: 6px; margin: 16px 0;">
      <h4 style="margin: 0 0 12px 0; color: #1f2937;">Email-Compatible Features:</h4>
      <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px;">
        <li>Reduced image quality for smaller file size</li>
        <li>Optimized for email attachment limits</li>
        <li>Faster email delivery</li>
        <li>Better compatibility across email clients</li>
      </ul>
    </div>
    
    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 24px;">
      <button id="email-regular-version" style="
        padding: 10px 20px; border: 1px solid #d1d5db; background: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Send Current Version</button>
      <button id="email-optimized-version" style="
        padding: 10px 20px; border: none; background: #2563eb; color: white; 
        border-radius: 4px; cursor: pointer; font-weight: bold;
      ">Create Email Version</button>
    </div>
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const r=new CustomEvent("sendEmailRegular",{detail:{userDetails:d,originalFilename:e}});window.dispatchEvent(r)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),d.emailCompatible=!0,_e(d)}}const oo="tipTailSettings";async function ro(d){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(oo)||"{}")}catch(a){console.warn("Could not read tipTailSettings from localStorage:",a)}const{tipAsset:t,tipUpload:o,tailAsset:r,tailUpload:n}=e;if(!t&&!o&&!r&&!n)return d;async function s(a,c,l="file"){if(c&&a)try{const u=atob(a),p=new Uint8Array(u.length);for(let h=0;h<u.length;h++)p[h]=u.charCodeAt(h);return p.buffer}catch(u){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${l}:`,u),null}if(a)try{const u=await fetch(a);return u.ok?await u.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${l} file: ${a} (${u.status} ${u.statusText})`),null)}catch(u){return console.warn(`⚠️ Error fetching ${l} file: ${a}`,u),null}return null}async function i(a,c="file",l="unknown"){if(!a)return null;try{return await PDFLib.PDFDocument.load(a)}catch(u){return console.warn(`⚠️ Failed to parse ${c} PDF: ${l}`,u),null}}try{const a=await d.arrayBuffer(),c=await PDFLib.PDFDocument.load(a),l=await PDFLib.PDFDocument.create(),[u]=await l.copyPages(c,[0]);l.addPage(u);let p=null,h=null;if(o){const g=await s(o,!0,"tip");g?(p=await i(g,"tip","uploaded file"),p||(h="The uploaded tip file is not a valid PDF or could not be loaded.")):h="Failed to process the uploaded tip file."}else if(t){const g=await s(t,!1,"tip");g?(p=await i(g,"tip",t),p||(h=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):h=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(p){const g=Array.from({length:p.getPageCount()},(m,b)=>b);(await l.copyPages(p,g)).forEach(m=>l.addPage(m))}else h&&(console.warn(`⚠️ Tip file error: ${h}`),Fe("Tip File Issue",h));if(c.getPageCount()>1){const g=Array.from({length:c.getPageCount()-1},(m,b)=>b+1);(await l.copyPages(c,g)).forEach(m=>l.addPage(m))}let y=null,f=null;if(n){const g=await s(n,!0,"tail");g?(y=await i(g,"tail","uploaded file"),y||(f="The uploaded tail file is not a valid PDF or could not be loaded.")):f="Failed to process the uploaded tail file."}else if(r){const g=await s(r,!1,"tail");g?(y=await i(g,"tail",r),y||(f=`The tail file "${r.split("/").pop()}" is not a valid PDF or could not be loaded.`)):f=`The tail file "${r.split("/").pop()}" could not be found or accessed.`}if(y){const g=Array.from({length:y.getPageCount()},(m,b)=>b);(await l.copyPages(y,g)).forEach(m=>l.addPage(m))}else f&&(console.warn(`⚠️ Tail file error: ${f}`),Fe("Tail File Issue",f));const w=await l.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([w],{type:"application/pdf"})}catch(a){return console.error("❌ Error during PDF merging:",a),Fe("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),d}}function Fe(d,e){const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: 20px; right: 20px; z-index: 10002;
    background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;
    padding: 16px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,t.innerHTML=`
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="font-size: 20px;">⚠️</span>
      <div style="flex: 1;">
        <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">${d}</div>
        <div style="color: #78350f; font-size: 14px; line-height: 1.4;">${e}</div>
        <div style="margin-top: 8px; font-size: 12px; color: #92400e;">
          The PDF will be generated without this content.
        </div>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: none; border: none; color: #92400e; cursor: pointer;
        font-size: 18px; padding: 0; width: 20px; height: 20px;
      ">×</button>
    </div>
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}class no{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null}init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=l=>{l.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const u=l.dataTransfer.files;u.length>0&&this.handleFileSelection(u[0])},o.onchange=l=>{l.target.files.length>0&&this.handleFileSelection(l.target.files[0])});const r=document.getElementById("import-cancel-btn"),n=document.getElementById("import-next-btn"),s=document.getElementById("import-back-btn"),i=document.getElementById("import-process-btn"),a=document.getElementById("import-close-btn");r&&(r.onclick=()=>this.closeModal()),n&&(n.onclick=()=>this.showImportModeStep()),s&&(s.onclick=()=>this.showFileSelectionStep()),i&&(i.onclick=()=>this.processImport()),a&&(a.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(l=>{l.onchange=()=>{this.importMode=l.value;const u=document.getElementById("override-warning");u&&(u.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const r=document.querySelector('input[name="import-mode"][value="append"]');r&&(r.checked=!0);const n=document.getElementById("override-warning");n&&(n.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=I.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json"],r=e.name.toLowerCase(),n=t.some(l=>r.endsWith(l.toLowerCase())),s=I.get("import.maxFileSize",10*1024*1024);if(e.size>s){const l=Math.round(s/1048576);alert(`File is too large. Maximum size is ${l}MB.`);return}if(!o.includes(e.type)&&!n){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const i=document.getElementById("selected-file-info"),a=document.getElementById("selected-file-name"),c=document.getElementById("import-next-btn");i&&a&&c&&(a.textContent=e.name,i.style.display="block",c.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{let e;const t=this.selectedFile.name.toLowerCase();if(t.endsWith(".csv"))e=await this.parseCSV(this.selectedFile);else if(t.endsWith(".json"))e=await this.parseJSON(this.selectedFile);else if(t.endsWith(".xlsx")||t.endsWith(".xls"))e=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",e),this.importMode==="override"&&(v.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(e),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}async parseCSV(e){if(typeof Papa>"u")try{await S.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:r=>{console.log("CSV parsing complete:",r);const{data:n,metadata:s}=this.extractSeimaMetadata(r.data);s&&(console.log("Extracted Seima Scanner metadata from CSV:",s),this.importedMetadata=s,this.populateCustomerInfoFromMetadata(s)),t(n)},error:r=>{console.error("CSV parsing error:",r),o(r)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let n=e.length-1;n>=0;n--){const s=e[n];if(Object.values(s).some(a=>a&&a.toString().includes("---METADATA---"))){t=n;break}}if(t===-1)return{data:e.filter(n=>this.isValidProductRow(n)),metadata:null};const o=e.slice(0,t).filter(n=>this.isValidProductRow(n));let r=null;if(t+1<e.length){const n=e[t+1],s=Object.values(n).filter(i=>i!=null&&i!=="");for(const i of s)if(i&&typeof i=="string"&&i.startsWith("{"))try{r=JSON.parse(i),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!r&&s.length>0){let i=s.findIndex(a=>a&&typeof a=="string"&&(a.startsWith("{")||a.startsWith('"{')));if(i!==-1){let a=s.slice(i).join(",");a=a.replace(/^"|"$/g,"");try{r=JSON.parse(a),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(c){console.warn("Failed to parse reconstructed metadata JSON:",c),console.log("Reconstructed string was:",a);const l=a.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(l)try{r=JSON.parse(l[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(u){console.warn("Regex extraction also failed:",u)}}}}}return{data:o,metadata:r}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var r,n,s,i,a,c;if(!e)return;const t=S.getStorageItem("pdfFormSettings",{}),o={...t,name:((r=e.customer)==null?void 0:r.name)||t.name||"",email:((n=e.customer)==null?void 0:n.email)||t.email||"",telephone:((s=e.customer)==null?void 0:s.phone)||t.telephone||"",project:((i=e.project)==null?void 0:i.name)||t.project||"",address:((a=e.project)==null?void 0:a.address)||t.address||"",projectNotes:((c=e.project)==null?void 0:c.notes)||t.projectNotes||""};e.staff&&S.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),S.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await S.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const r=new FileReader;r.onload=n=>{try{const s=new Uint8Array(n.target.result),i=XLSX.read(s,{type:"array"}),a=i.SheetNames[0],c=i.Sheets[a],l=XLSX.utils.sheet_to_json(c,{header:1,defval:""});if(l.length===0){o(new Error("Excel file is empty"));return}const u=l[0],h=l.slice(1).map(w=>{const g={};return u.forEach((E,m)=>{g[E]=w[m]||""}),g});console.log("Excel parsing complete:",h);const{data:y,metadata:f}=this.extractSeimaMetadata(h);f&&(console.log("Extracted Seima Scanner metadata from Excel:",f),this.importedMetadata=f,this.populateCustomerInfoFromMetadata(f)),t(y)}catch(s){console.error("Excel parsing error:",s),o(s)}},r.onerror=()=>{o(new Error("Failed to read Excel file"))},r.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const r=new FileReader;r.onload=n=>{try{let s=JSON.parse(n.target.result);console.log("JSON parsing complete, raw data:",s);let i=[];if(Array.isArray(s))if(s.length>0&&s[0].productsJson)for(const c of s){const l=this.extractProductsFromRecord(c);i.push(...l)}else i=s;else s&&typeof s=="object"&&(i=this.extractProductsFromRecord(s));if(i.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const a=i.map(c=>({Code:c.orderCode||c.OrderCode||c.code||c.Code||"",Description:c.description||c.Description||c.productName||c["Product Name"]||"",Quantity:c.quantity||c.Quantity||1,Room:c.room||c.Room||"Blank",Notes:c.notes||c.Notes||"","Price ea inc GST":c.priceIncGst||c.PriceIncGst||c.price||c.Price||"",_originalItem:c}));console.log("Normalized JSON data:",a),t(a)}catch(s){console.error("JSON parsing error:",s),o(new Error("Invalid JSON format: "+s.message))}},r.onerror=()=>{o(new Error("Failed to read JSON file"))},r.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let r=0;r<e.length;r+=o){const n=e.slice(r,r+o);await this.processChunk(n,t),await new Promise(s=>setTimeout(s,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const r=o[t.productsJson];if(!r){console.log("Skipping row - no Products JSON data");continue}let n=[];try{typeof r=="string"?n=JSON.parse(r):Array.isArray(r)&&(n=r)}catch(s){console.warn("Failed to parse Products JSON:",s,r);continue}if(!Array.isArray(n)||n.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${n.length} products from selection record`);for(const s of n)await this.processSeimaProduct(s)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",r=parseInt(e.quantity||e.Quantity)||1,n=String(e.room||e.Room||"Blank").trim(),s=String(e.notes||e.Notes||"").trim(),i=e.priceIncGst||e.PriceIncGst||e.price||"";n&&n!=="Blank"&&this.ensureRoomExists(n);const a=this.validateProductCode(t);if(!a.isValid){console.log("Excluding product:",t,"-",a.reason);return}let c=0,l=0;if(i){const h=String(i).replace(/[^\d.-]/g,"");c=parseFloat(h)||0,l=c/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:r,priceIncGst:c,room:n,notes:s});const u=await this.findProductInCatalog(t,o),p=this.createProductObject({productCode:t,productName:o,priceExGst:l,priceIncGst:c,catalogProduct:u});u||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:r,price:c>0?c.toFixed(2):"N/A"}),v.addProductToSelection(p,s,n,r),this.processedData.push({...p,quantity:r,notes:s,room:n})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=I.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),r=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(r)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:r,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const n=t.some(c=>c.toLowerCase()==="code")&&!t.some(c=>c.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",n);const s=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),i=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]),a=this.findColumnByPatterns(t,["adjusted amount","adjustedamount"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:s||i,adjustedAmount:a,room:this.findColumnByPatterns(t,o.room||["room","location"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:n||!!s||t.some(c=>c.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const r=e.find(n=>n.toLowerCase().includes(o.toLowerCase()));if(r)return r}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",r=t.productName?e[t.productName]:"",n=t.quantity?e[t.quantity]:"1",s=t.price?e[t.price]:"",i=t.room?String(e[t.room]||"").trim():"",a=t.notes?String(e[t.notes]||"").trim():"",c=String(o).trim(),l=this.validateProductCode(c);if(!l.isValid){console.log("Excluding row:",c,"-",l.reason);return}const u=Math.max(1,parseInt(n)||1);let p=0,h=0;if(t.adjustedAmount&&u>0){const g=e[t.adjustedAmount];h=(parseFloat(String(g).replace(/[^\d.-]/g,""))||0)/u,p=h*1.1}else if(s){const g=String(s).replace(/[^\d.-]/g,""),E=parseFloat(g)||0;E>0&&(t.priceIncludesGst?(p=E,h=E/1.1):(h=E,p=E*1.1))}const y=i||"Blank";y!=="Blank"&&this.ensureRoomExists(y),console.log("Processing product:",{productCode:c,productName:r,quantity:u,priceIncGst:p,room:y,notes:a});const f=await this.findProductInCatalog(c,r),w=this.createProductObject({productCode:c,productName:r,priceExGst:h,priceIncGst:p,catalogProduct:f});f?console.log("Found product in catalog:",c):(console.log("Product not found in catalog:",c),this.notFoundProducts.push({orderCode:c,productName:r||"Unknown Product",quantity:u,price:p>0?p.toFixed(2):"N/A"})),v.addProductToSelection(w,a,y,u),this.processedData.push({...w,quantity:u,notes:a,room:y})}async findProductInCatalog(e,t){var r;const o=j.getAllProducts();if(e){const n=String(e).trim(),s=o.find(i=>[i.OrderCode,i.orderCode,i["Order Code"],i.order_code].some(c=>c&&String(c).trim().toLowerCase()===n.toLowerCase()));if(s)return console.log("Found product in catalog by code:",n,s),s}if(t){const n=String(t).trim().toLowerCase(),s=o.find(i=>[i.productName,i["Product Name"],i.description,i.Description,i.LongDescription].some(c=>c&&String(c).trim().toLowerCase()===n));if(s)return console.log("Found product in catalog by name:",t,s),s}if(e&&Se.isEnabled())try{const n=await Se.findSeimaMatches(e);if(((r=n==null?void 0:n.matches)==null?void 0:r.length)>0){const s=n.matches[0],i=o.find(a=>String(a.OrderCode||"").trim()===String(s.SeimaSKU).trim());if(i)return console.log(`Crosshair: mapped ${e} (${n.competitor}) -> ${s.SeimaSKU}`),i}}catch(n){console.warn("Crosshair lookup failed for",e,n)}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const n=t.querySelector("h5");n&&(n.textContent="Products added with placeholder information:",n.style.color="#2563eb");const s=this.notFoundProducts.map(i=>`<li><strong>${i.orderCode}</strong> - ${i.productName} (Qty: ${i.quantity}, Price: ${i.price})</li>`).join("");o.innerHTML=`<ul>${s}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const r=document.getElementById("import-close-btn");r&&this.processedData.length>0&&(r.textContent="View Products",r.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=S.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};S.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=I.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(r){console.warn("Invalid product code regex pattern:",o.regex,r)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:r,catalogProduct:n}){return{OrderCode:e,orderCode:e,productName:t||(n?n.productName:"Unknown Product"),"Product Name":t||(n?n["Product Name"]:"Unknown Product"),Description:t||(n?n.Description:"Unknown Product"),description:t||(n?n.description:"Unknown Product"),LongDescription:n?n.LongDescription||n["Long Description"]:"","Long Description":n?n.LongDescription||n["Long Description"]:"",price:o>0?o.toFixed(2):n?n.price:"0.00",Image_URL:n?n.Image_URL||n.imageUrl:"assets/no-image.png",imageUrl:n?n.Image_URL||n.imageUrl:"assets/no-image.png",Website_URL:n?n.Website_URL||n.websiteUrl:"",websiteUrl:n?n.Website_URL||n.websiteUrl:"",Diagram_URL:n?n.Diagram_URL||n.diagramUrl:"",diagramUrl:n?n.Diagram_URL||n.diagramUrl:"",Datasheet_URL:n?n.Datasheet_URL||n.datasheetUrl:"",datasheetUrl:n?n.Datasheet_URL||n.datasheetUrl:"",RRP_EXGST:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",rrpExGst:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",RRP_INCGST:r>0?r.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00",rrpIncGst:r>0?r.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00"}}ensureRoomExists(e){!e||e==="Blank"||I.get("rooms.predefined",[]).some(s=>s.name===e)||v.getCustomRooms().some(s=>s.name===e)||(console.log("Adding imported room as custom room:",e),v.addCustomRoom(e))}}class so{constructor(){var e,t,o,r;this.isEnabled=(e=z.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=z.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=z.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(r=z.PRESENTATION_RECORDING)==null?void 0:r.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=ne.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const r=await this.sendToGoogleSheets(o);if(r.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(r.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),r=e.gridRows||v.getSelectedProducts()||[],n=r.filter(u=>u.product).length,s=r.reduce((u,p)=>u+(parseInt(p.quantity)||1),0),i=[...new Set(r.map(u=>u.room).filter(Boolean))],a=this.calculateEstimatedValue(r);let c=[];try{const u=localStorage.getItem("customRoomOrder");u&&(c=JSON.parse(u))}catch(u){console.warn("Could not load room order:",u)}const l=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:z.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(r.map(u=>{var p;return{id:u.id,product:u.product?{OrderCode:u.product.OrderCode||"",Description:u.product.Description||"",RRP_INCGST:u.product.RRP_INCGST||"0.00",RRP_EX:u.product.RRP_EX||"0.00",Image_URL:u.product.Image_URL||"",Diagram_URL:u.product.Diagram_URL||"",Website_URL:u.product.Website_URL||"",BARCODE:u.product.BARCODE||""}:null,quantity:u.quantity||1,room:u.room||"",notes:u.notes||"",price:u.price||((p=u.product)==null?void 0:p.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(c),pdfSettingsJson:JSON.stringify(l),totalProducts:n,totalQuantity:s,totalRooms:i.length,roomsList:i.join(", "),estimatedValue:a}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var i,a;if(!o.product)return;const r=parseInt(o.quantity)||1,n=o.price||((i=o.product)==null?void 0:i.RRP_INCGST)||((a=o.product)==null?void 0:a.RRP_EX)||"0",s=parseFloat(n.toString().replace(/[^0-9.]/g,""))||0;t+=s*r}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const r=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",r.status,r.statusText),!r.ok)throw new Error(`HTTP ${r.status}: ${r.statusText}`);const n=await r.text();console.log("📊 Raw response:",n);try{return JSON.parse(n)}catch(s){return console.error("📊 Failed to parse JSON response:",s),{success:!1,error:"Invalid JSON response",raw:n}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(r=>setTimeout(r,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const ie=new so;class io{constructor(){var e;this.googleSheetsUrl=(e=z.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=ne.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const r=new URL(this.googleSheetsUrl);r.searchParams.append("action","getPresenterSelections"),r.searchParams.append("staffEmail",o),e&&r.searchParams.append("deletedOnly","true");const n=await fetch(r.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const s=await n.json();if(s.success&&s.selections)return console.log(`✅ Fetched ${s.selections.length} selections`),e||(this.cachedSelections=s.selections,this.cacheTimestamp=Date.now()),s.selections;throw new Error(s.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(r=>{const n=(r.customerName||"").toLowerCase(),s=(r.customerProject||"").toLowerCase(),i=(r.documentName||"").toLowerCase(),a=(r.date||"").toLowerCase();return n.includes(o)||s.includes(o)||i.includes(o)||a.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const r=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-r}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const r=parseInt(o[0]),n=parseInt(o[1])-1,s=parseInt(o[2]);if(t){const i=t.replace(/[AP]M/i,"").trim().split(":"),a=parseInt(i[0])||0,c=parseInt(i[1])||0,l=t.toUpperCase().includes("PM");return new Date(s,n,r,l&&a!==12?a+12:a,c)}return new Date(s,n,r)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(i){return console.error("Failed to parse products JSON:",i),{success:!1,error:"Invalid products data"}}let r=[];try{r=JSON.parse(e.roomOrderJson||"[]")}catch(i){console.warn("Could not parse room order:",i)}let n={};try{n=JSON.parse(e.pdfSettingsJson||"{}")}catch(i){console.warn("Could not parse PDF settings:",i)}const s=await this.enrichProductsWithCatalog(o);if(t==="replace"){v.clearAllSelections();const i={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(i));const a={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(a)),r.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(r)),Object.keys(n).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(n)),s.forEach(c=>{c.product&&v.addProductToSelection(c.product,c.room||"",c.quantity||1,c.notes||"",c.price||null)})}else t==="merge"&&s.forEach(i=>{i.product&&(v.getSelectedProducts().some(l=>{var u;return((u=l.product)==null?void 0:u.OrderCode)===i.product.OrderCode&&l.room===i.room})||v.addProductToSelection(i.product,i.room||"",i.quantity||1,i.notes||"",i.price||null))});return ie.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${s.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:s.length,roomOrder:r,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const r=o.product.OrderCode||o.product.orderCode;if(r){const n=j.findProductByCode(r);n?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:n,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||n.RRP_EX||"0.00"}):(console.warn(`Product ${r} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:r,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const r=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return r.success&&this.clearCache(),r}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const r=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return r.success&&this.clearCache(),r}catch(t){return{success:!1,error:t.message}}}}const se=new io;class ao{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await se.fetchSelections(this.showDeletedMode,!0),this.allSelections=se.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
      <div id="presentation-picker-modal" class="presentation-picker-overlay">
        <div class="presentation-picker-container">
          <div class="presentation-picker-header">
            <h2>Load Saved Selection</h2>
            <button class="presentation-picker-close" id="picker-close-btn">&times;</button>
          </div>
          
          <div class="presentation-picker-controls">
            <div class="picker-search-box">
              <input type="text" id="picker-search" placeholder="Search by customer, project, or date..." autocomplete="off">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            
            <label class="picker-deleted-toggle">
              <input type="checkbox" id="picker-show-deleted" ${this.showDeletedMode?"checked":""}>
              <span>Show deleted</span>
            </label>
            
            <button class="picker-refresh-btn" id="picker-refresh" title="Refresh">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
              </svg>
            </button>
          </div>
          
          <div class="presentation-picker-content">
            <div class="picker-loading" id="picker-loading">
              <div class="picker-spinner"></div>
              <p>Loading selections...</p>
            </div>
            
            <div class="picker-error" id="picker-error" style="display: none;">
              <p id="picker-error-message"></p>
              <button id="picker-retry-btn">Retry</button>
            </div>
            
            <div class="picker-empty" id="picker-empty" style="display: none;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"></path>
                <polyline points="17,21 17,13 7,13 7,21"></polyline>
                <polyline points="7,3 7,8 12,8"></polyline>
              </svg>
              <p>No saved selections found</p>
              <span>Save a selection from the Create Presentation page to see it here</span>
            </div>
            
            <table class="picker-table" id="picker-table" style="display: none;">
              <thead>
                <tr>
                  <th class="col-date">Date</th>
                  <th class="col-customer">Customer</th>
                  <th class="col-project">Project / Document</th>
                  <th class="col-products">Products</th>
                  <th class="col-value">Value</th>
                  <th class="col-actions">Actions</th>
                </tr>
              </thead>
              <tbody id="picker-table-body">
              </tbody>
            </table>
          </div>
          
          <div class="presentation-picker-footer" id="picker-footer" style="display: none;">
            <span class="picker-selection-count" id="picker-selection-count">0 selections</span>
            <div class="picker-footer-actions">
              <button class="btn-secondary" id="picker-delete-selected" style="display: none;">Delete Selected</button>
              <button class="btn-secondary" id="picker-restore-selected" style="display: none;">Restore Selected</button>
            </div>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",t),this.injectStyles()}injectStyles(){if(document.getElementById("presentation-picker-styles"))return;document.head.insertAdjacentHTML("beforeend",`
      <style id="presentation-picker-styles">
        .presentation-picker-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }
        
        .presentation-picker-container {
          background: var(--bg-primary, #fff);
          border-radius: 12px;
          width: 100%;
          max-width: 900px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .presentation-picker-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid var(--border-color, #e5e7eb);
        }
        
        .presentation-picker-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary, #1f2937);
        }
        
        .presentation-picker-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-secondary, #6b7280);
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        .presentation-picker-close:hover {
          background: var(--bg-hover, #f3f4f6);
          color: var(--text-primary, #1f2937);
        }
        
        .presentation-picker-controls {
          display: flex;
          gap: 12px;
          padding: 16px 24px;
          border-bottom: 1px solid var(--border-color, #e5e7eb);
          align-items: center;
          flex-wrap: wrap;
        }
        
        .picker-search-box {
          flex: 1;
          min-width: 200px;
          position: relative;
        }
        
        .picker-search-box input {
          width: 100%;
          padding: 10px 12px 10px 40px;
          border: 1px solid var(--border-color, #e5e7eb);
          border-radius: 8px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        
        .picker-search-box input:focus {
          border-color: var(--accent-copper, #b87333);
        }
        
        .picker-search-box .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-deleted-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary, #6b7280);
          cursor: pointer;
        }
        
        .picker-deleted-toggle input {
          cursor: pointer;
        }
        
        .picker-refresh-btn {
          background: none;
          border: 1px solid var(--border-color, #e5e7eb);
          border-radius: 8px;
          padding: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .picker-refresh-btn:hover {
          background: var(--bg-hover, #f3f4f6);
        }
        
        .picker-refresh-btn svg {
          width: 20px;
          height: 20px;
          color: var(--text-secondary, #6b7280);
        }
        
        .presentation-picker-content {
          flex: 1;
          overflow: auto;
          padding: 0;
          min-height: 300px;
        }
        
        .picker-loading, .picker-error, .picker-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid var(--border-color, #e5e7eb);
          border-top-color: var(--accent-copper, #b87333);
          border-radius: 50%;
          animation: picker-spin 0.8s linear infinite;
        }
        
        @keyframes picker-spin {
          to { transform: rotate(360deg); }
        }
        
        .picker-loading p, .picker-empty p {
          margin: 16px 0 0;
          font-size: 0.95rem;
        }
        
        .picker-empty svg {
          width: 64px;
          height: 64px;
          color: var(--text-tertiary, #9ca3af);
          margin-bottom: 8px;
        }
        
        .picker-empty span {
          font-size: 0.85rem;
          color: var(--text-tertiary, #9ca3af);
        }
        
        .picker-error {
          color: #dc2626;
        }
        
        .picker-error button {
          margin-top: 12px;
          padding: 8px 16px;
          background: var(--accent-copper, #b87333);
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        
        .picker-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .picker-table thead {
          background: var(--bg-secondary, #f9fafb);
          position: sticky;
          top: 0;
          z-index: 1;
        }
        
        .picker-table th {
          padding: 12px 16px;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary, #6b7280);
          border-bottom: 1px solid var(--border-color, #e5e7eb);
        }
        
        .picker-table td {
          padding: 12px 16px;
          font-size: 0.9rem;
          border-bottom: 1px solid var(--border-color, #e5e7eb);
          vertical-align: middle;
        }
        
        .picker-table tbody tr {
          cursor: pointer;
          transition: background 0.15s;
        }
        
        .picker-table tbody tr:hover {
          background: var(--bg-hover, #f9fafb);
        }
        
        .picker-table .col-date {
          width: 90px;
          white-space: nowrap;
        }
        
        .picker-table .col-customer {
          min-width: 150px;
        }
        
        .picker-table .col-project {
          min-width: 180px;
        }
        
        .picker-table .col-products, .picker-table .col-value {
          width: 80px;
          text-align: right;
        }
        
        .picker-table .col-actions {
          width: 120px;
          text-align: center;
        }
        
        .picker-customer-name {
          font-weight: 500;
          color: var(--text-primary, #1f2937);
        }
        
        .picker-customer-email {
          font-size: 0.8rem;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-project-name {
          font-weight: 500;
          color: var(--text-primary, #1f2937);
        }
        
        .picker-document-name {
          font-size: 0.8rem;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-load-btn {
          padding: 6px 12px;
          background: var(--accent-copper, #b87333);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .picker-load-btn:hover {
          background: var(--accent-copper-dark, #a06329);
        }
        
        .picker-delete-btn {
          padding: 6px 12px;
          background: none;
          color: #dc2626;
          border: 1px solid #dc2626;
          border-radius: 6px;
          font-size: 0.8rem;
          cursor: pointer;
          margin-left: 6px;
          transition: all 0.2s;
        }
        
        .picker-delete-btn:hover {
          background: #dc2626;
          color: white;
        }
        
        .presentation-picker-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-top: 1px solid var(--border-color, #e5e7eb);
          background: var(--bg-secondary, #f9fafb);
          border-radius: 0 0 12px 12px;
        }
        
        .picker-selection-count {
          font-size: 0.85rem;
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-footer-actions {
          display: flex;
          gap: 8px;
        }
        
        .btn-secondary {
          padding: 8px 16px;
          background: white;
          border: 1px solid var(--border-color, #e5e7eb);
          border-radius: 6px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: var(--bg-hover, #f3f4f6);
        }
        
        /* Load confirmation dialog */
        .picker-confirm-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100001;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .picker-confirm-dialog {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .picker-confirm-dialog h3 {
          margin: 0 0 12px;
          font-size: 1.1rem;
          color: var(--text-primary, #1f2937);
        }
        
        .picker-confirm-dialog p {
          margin: 0 0 20px;
          color: var(--text-secondary, #6b7280);
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .picker-confirm-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        
        .picker-confirm-actions button {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .picker-confirm-cancel {
          background: white;
          border: 1px solid var(--border-color, #e5e7eb);
          color: var(--text-secondary, #6b7280);
        }
        
        .picker-confirm-cancel:hover {
          background: var(--bg-hover, #f3f4f6);
        }
        
        .picker-confirm-replace {
          background: var(--accent-copper, #b87333);
          border: none;
          color: white;
        }
        
        .picker-confirm-replace:hover {
          background: var(--accent-copper-dark, #a06329);
        }
        
        .picker-confirm-merge {
          background: white;
          border: 1px solid var(--accent-copper, #b87333);
          color: var(--accent-copper, #b87333);
        }
        
        .picker-confirm-merge:hover {
          background: var(--accent-copper, #b87333);
          color: white;
        }
      </style>
    `)}attachEventListeners(){var t,o,r,n,s;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",i=>{i.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",i=>{this.currentSearchQuery=i.target.value,this.filterAndRender()}),(r=document.getElementById("picker-show-deleted"))==null||r.addEventListener("change",i=>{this.showDeletedMode=i.target.checked,this.fetchAndRenderSelections()}),(n=document.getElementById("picker-refresh"))==null||n.addEventListener("click",()=>{se.clearCache(),this.fetchAndRenderSelections()}),(s=document.getElementById("picker-retry-btn"))==null||s.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),r=document.getElementById("picker-empty"),n=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),r&&(r.style.display="none"),n&&(n.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),r=document.getElementById("picker-table"),n=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),r&&(r.style.display="none"),n&&(n.style.display="none")}filterAndRender(){this.filteredSelections=se.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),r=document.getElementById("picker-table-body");if(!r)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),r.innerHTML=this.filteredSelections.map((s,i)=>`
      <tr data-index="${i}" data-id="${s.id}">
        <td class="col-date">
          <div>${this.formatDate(s.date)}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary, #9ca3af);">${this.formatTime(s.time)}</div>
        </td>
        <td class="col-customer">
          <div class="picker-customer-name">${this.escapeHtml(s.customerName||"Unknown")}</div>
          <div class="picker-customer-email">${this.escapeHtml(s.customerEmail||"")}</div>
        </td>
        <td class="col-project">
          <div class="picker-project-name">${this.escapeHtml(s.customerProject||"-")}</div>
          <div class="picker-document-name">${this.escapeHtml(s.documentName||"")}</div>
        </td>
        <td class="col-products" style="text-align: right;">
          ${s.totalProducts||0}
        </td>
        <td class="col-value" style="text-align: right;">
          $${this.formatValue(s.estimatedValue)}
        </td>
        <td class="col-actions">
          <button class="picker-load-btn" data-action="load" data-index="${i}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${i}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${i}">Delete</button>`}
        </td>
      </tr>
    `).join("");const n=document.getElementById("picker-selection-count");n&&(n.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const r=t.dataset.action,n=parseInt(t.dataset.index),s=this.filteredSelections[n];r==="load"?this.showLoadConfirmation(s):r==="delete"?this.confirmDelete(s):r==="restore"&&this.restoreSelection(s)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const r=parseInt(t.dataset.index),n=this.filteredSelections[r];this.showLoadConfirmation(n)})}))}showLoadConfirmation(e){const t=v.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const r=`
      <div class="picker-confirm-overlay" id="picker-confirm-dialog">
        <div class="picker-confirm-dialog">
          <h3>Load Selection</h3>
          <p>
            You have <strong>${t.length}</strong> products in your current selection.
            How would you like to load "<strong>${this.escapeHtml(e.documentName||e.customerName)}</strong>"?
          </p>
          <div class="picker-confirm-actions">
            <button class="picker-confirm-cancel" data-action="cancel">Cancel</button>
            <button class="picker-confirm-merge" data-action="merge">Merge</button>
            <button class="picker-confirm-replace" data-action="replace">Replace</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",r);const n=document.getElementById("picker-confirm-dialog");n.querySelectorAll("button[data-action]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.action;n.remove(),i==="replace"?this.loadSelection(e,"replace"):i==="merge"&&this.loadSelection(e,"merge")})}),n.addEventListener("click",s=>{s.target===n&&n.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await se.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

This can be restored later.`))try{const t=await se.deleteSelections([e.id]);t.success?(this.showToast("Selection deleted"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to delete")}catch(t){this.showError(t.message)}}async restoreSelection(e){try{const t=await se.restoreSelections([e.id]);t.success?(this.showToast("Selection restored"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to restore")}catch(t){this.showError(t.message)}}showToast(e){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #1f2937;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 0.9rem;
      z-index: 100002;
      animation: toast-in 0.3s ease;
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const r=t[2],n=(t[3]||"").toUpperCase();return n==="PM"&&o!==12?o+=12:n==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${r}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const at=new ao,Ze="pdfWizardSettings",et="tipTailSettings",Oe="customerLogo";class co{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),r=document.createElement("div");if(r.id="pdf-wizard-container",r.innerHTML=o,document.body.appendChild(r),!document.querySelector('link[href*="design-system.css"]')){const n=document.createElement("link");n.rel="stylesheet",n.href="./css/design-system.css",document.head.appendChild(n)}this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=v.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var r,n,s;return{...o.product,Image_URL:((r=o.product)==null?void 0:r.Image_URL)||((n=o.product)==null?void 0:n.imageUrl)||"",Diagram_URL:((s=o.product)==null?void 0:s.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),ot(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}loadSavedSettings(){const e=S.getStorageItem(Ze,null);if(e){const n=this.getDefaultData();this.wizardData={...n,...e,customer:{...n.customer,...e.customer||{}},options:{...n.options,...e.options||{}},customise:{...n.customise,...e.customise||{}}}}const t=S.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);const o=localStorage.getItem(Oe);o&&(this.wizardData.customer.logo=o);const r=S.getStorageItem(et,{});r.tipAsset&&(this.wizardData.customise.tipPdf=r.tipAsset),r.tailAsset&&(this.wizardData.customise.tailPdf=r.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",r=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${r?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${r?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(s=>{const i=s.replace("tip-","").replace(".pdf",""),a=o===`./assets/${s}`;n+=`
          <label class="option-card${a?" selected":""}" data-tip="${s}">
            <input type="radio" name="tipPdf" value="./assets/${s}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${i}</span>
          </label>
        `}),e.innerHTML=n,e.querySelectorAll(".option-card").forEach(s=>{s.addEventListener("click",()=>{var a;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),s.classList.add("selected");const i=s.querySelector("input");i&&(i.checked=!0),this.wizardData.customise.tipPdf=((a=s.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",r=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${r?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${r?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(s=>{const i=s.replace("tail-","").replace(".pdf",""),a=o===`./assets/${s}`;n+=`
          <label class="option-card${a?" selected":""}" data-tail="${s}">
            <input type="radio" name="tailPdf" value="./assets/${s}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${i}</span>
          </label>
        `}),t.innerHTML=n,t.querySelectorAll(".option-card").forEach(s=>{s.addEventListener("click",()=>{var a;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),s.classList.add("selected");const i=s.querySelector("input");i&&(i.checked=!0),this.wizardData.customise.tailPdf=((a=s.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}}setupEventHandlers(){var e,t,o;(e=document.getElementById("wizard-close"))==null||e.addEventListener("click",()=>this.close()),(t=document.getElementById("wizard-cancel"))==null||t.addEventListener("click",()=>this.close()),(o=document.getElementById("wizard-generate"))==null||o.addEventListener("click",r=>{r.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll("#pdf-wizard .form-checkbox").forEach(o=>{const r=o.querySelector('input[type="checkbox"]');r&&(o.addEventListener("click",n=>{n.target.tagName==="SPAN"&&(r.checked=!r.checked,r.dispatchEvent(new Event("change",{bubbles:!0})))}),r.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){const e=document.getElementById("show-rrp"),t=document.getElementById("include-gst"),o=document.getElementById("no-pricing"),r=document.getElementById("no-qty");o&&o.addEventListener("change",()=>{const n=o.checked;this.wizardData.options.noPricing=n,n?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity="0.5",this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity="0.5",this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity="1"),t&&(t.disabled=!1,t.parentElement.style.opacity="1")),this.saveSettings()}),e&&e.addEventListener("change",()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener("change",()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),r&&r.addEventListener("change",()=>{this.wizardData.options.noQty=r.checked,this.saveSettings()})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),r=document.getElementById("logo-preview-img"),n=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=s=>{s.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=s=>{s.preventDefault(),e.style.borderColor="",s.dataTransfer.files.length>0&&this.handleLogoFile(s.dataTransfer.files[0])},t.onchange=s=>{s.target.files.length>0&&this.handleLogoFile(s.target.files[0])}),n&&(n.onclick=()=>{this.wizardData.customer.logo=null,localStorage.removeItem(Oe),o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&r&&o&&(r.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=o=>{this.wizardData.customer.logo=o.target.result,localStorage.setItem(Oe,o.target.result);const r=document.getElementById("logo-preview-container"),n=document.getElementById("logo-preview-img"),s=document.getElementById("logo-upload-zone");n&&(n.src=o.target.result),r&&(r.style.display="block"),s&&(s.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),r=document.getElementById("tip-custom-name"),n=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=u=>{u.preventDefault(),t.click()},t.onchange=u=>{u.target.files.length>0&&(this.customTipPdf=u.target.files[0],r&&(r.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),n&&(n.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const u=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(u){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),u.classList.add("selected");const p=u.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tipPdf=""});const s=document.getElementById("tail-upload-link"),i=document.getElementById("tail-pdf-input"),a=document.getElementById("tail-custom-preview"),c=document.getElementById("tail-custom-name"),l=document.getElementById("remove-tail-btn");s&&i&&(s.onclick=u=>{u.preventDefault(),i.click()},i.onchange=u=>{u.target.files.length>0&&(this.customTailPdf=u.target.files[0],c&&(c.textContent=this.customTailPdf.name),a&&(a.style.display="flex"),s&&(s.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),l&&(l.onclick=()=>{this.customTailPdf=null,a&&(a.style.display="none"),i&&(i.value=""),s&&(s.style.display="");const u=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(u){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),u.classList.add("selected");const p=u.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((n,s)=>{const i=document.getElementById(n);i&&(this.wizardData.customer[t[s]]=i.value)}),Object.entries({"show-rrp":"showRrp","include-gst":"includeGst","no-pricing":"noPricing","no-qty":"noQty"}).forEach(([n,s])=>{const i=document.getElementById(n);i&&(this.wizardData.options[s]=i.checked)}),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes"}).forEach(([n,s])=>{const i=document.getElementById(n);i&&(this.wizardData.options[s]=i.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([r,n])=>{const s=document.getElementById(r);s&&(s.value=n||"")});const t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([r,n])=>{const s=document.getElementById(r);s&&(s.checked=!!n,this.wizardData.options.noPricing&&(r==="show-rrp"||r==="include-gst")&&(s.disabled=!0,s.parentElement.style.opacity="0.5"))});const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(o).forEach(([r,n])=>{const s=document.getElementById(r);s&&(s.checked=n)})}saveSettings(){try{S.setStorageItem(Ze,this.wizardData),S.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),S.setStorageItem(et,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const r=await this.fileToBase64(this.customTipPdf);t.tipUpload=r.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(r){console.error("Failed to convert tip PDF:",r)}if(this.customTailPdf)try{const r=await this.fileToBase64(this.customTailPdf);t.tailUpload=r.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(r){console.error("Failed to convert tail PDF:",r)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(r){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",r.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const r=new FileReader;r.onload=()=>t(r.result),r.onerror=o,r.readAsDataURL(e)})}showSaveDialog(){V.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=ie.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,r=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(o)}" maxlength="100"
                   placeholder="Enter a name for this selection">
            
            <label class="form-label" for="save-notes" style="margin-top: 12px;">Notes (optional)</label>
            <textarea class="form-input" id="save-notes" rows="2" maxlength="500"
                      placeholder="Add any notes about this selection"></textarea>
          </div>
          
          <div class="save-dialog-actions">
            <button class="btn btn-secondary" data-action="cancel">Cancel</button>
            ${t?`
              <button class="btn btn-outline" data-action="save-new">Save as New</button>
              <button class="btn btn-accent" data-action="save-update">Update</button>
            `:`
              <button class="btn btn-accent" data-action="save-new">Save</button>
            `}
          </div>
        </div>
      </div>
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",r);const n=document.getElementById("save-dialog"),s=document.getElementById("save-doc-name"),i=document.getElementById("save-notes");s==null||s.focus(),s==null||s.select(),n.querySelectorAll("button[data-action]").forEach(c=>{c.addEventListener("click",async()=>{const l=c.dataset.action;if(l==="cancel"){n.remove();return}const u=(s==null?void 0:s.value.trim())||"Untitled Selection",p=(i==null?void 0:i.value.trim())||"",h={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:u,notes:p,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:v.getSelectedProducts()};n.querySelectorAll("button").forEach(y=>y.disabled=!0),c.textContent="Saving...";try{let y;if(l==="save-update"){const f=ie.getCurrentSelectionId();y=await ie.updateSelection(f,h)}else y=await ie.saveSelection(h);n.remove(),y.success?this.showToast(l==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(y.error||"Unknown error"),"error")}catch(y){n.remove(),this.showToast("Failed to save: "+y.message,"error")}})}),n.addEventListener("click",c=>{c.target===n&&n.remove()});const a=c=>{c.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
      <style id="save-dialog-styles">
        .save-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .save-dialog {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .save-dialog h3 {
          margin: 0 0 8px;
          font-size: 1.25rem;
          color: var(--text-primary, #1f2937);
        }
        
        .save-dialog > p {
          margin: 0 0 20px;
          color: var(--text-secondary, #6b7280);
          font-size: 0.9rem;
        }
        
        .save-dialog-form {
          margin-bottom: 20px;
        }
        
        .save-dialog-form .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-primary, #1f2937);
          margin-bottom: 6px;
        }
        
        .save-dialog-form .form-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--border-light, #e5e5e5);
          border-radius: 6px;
          font-size: 0.875rem;
        }
        
        .save-dialog-form .form-input:focus {
          outline: none;
          border-color: var(--color-copper, #b87333);
        }
        
        .save-dialog-form textarea {
          resize: vertical;
          min-height: 60px;
        }
        
        .save-dialog-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        
        .save-dialog-actions button {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .save-dialog-actions button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .save-dialog-actions .btn-secondary {
          background: white;
          border: 1px solid var(--border-light, #e5e5e5);
          color: var(--text-secondary, #6b7280);
        }
        
        .save-dialog-actions .btn-outline {
          background: white;
          border: 1px solid var(--color-copper, #b87333);
          color: var(--color-copper, #b87333);
        }
        
        .save-dialog-actions .btn-accent {
          background: var(--color-copper, #b87333);
          border: none;
          color: white;
        }
      </style>
    `)}showLoadPicker(){V.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{at.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const r=JSON.parse(localStorage.getItem("pdfSettings")||"{}");r.showRrp!==void 0&&(this.wizardData.options.showRrp=r.showRrp),r.includeGst!==void 0&&(this.wizardData.options.includeGst=r.includeGst),r.noPricing!==void 0&&(this.wizardData.options.noPricing=r.noPricing),r.noQty!==void 0&&(this.wizardData.options.noQty=r.noQty),r.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=r.includeDescriptions),r.includeNotes!==void 0&&(this.wizardData.options.includeNotes=r.includeNotes),r.tipPdf&&(this.wizardData.customise.tipPdf=r.tipPdf),r.tailPdf&&(this.wizardData.customise.tailPdf=r.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: ${t==="error"?"#dc2626":"#1f2937"};
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 0.9rem;
      z-index: 100002;
      animation: toast-in 0.3s ease;
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const lo=new co;class uo{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:r=null}){const n=this.nextId++,s=document.createElement("div");s.className=`toast toast-${t}`,s.setAttribute("role","alert"),s.setAttribute("aria-live","polite");const i={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};s.innerHTML=`
      <div class="toast-icon">${i[t]||i.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${r?`<button class="toast-action" type="button">${r.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const a=s.querySelector(".toast-close");if(a.onclick=()=>this.dismiss(n),r&&r.callback){const c=s.querySelector(".toast-action");c.onclick=()=>{r.callback(),this.dismiss(n)}}return this.container.appendChild(s),this.toasts.set(n,s),requestAnimationFrame(()=>{s.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(n),o),n}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const re=new uo;window.toast=re;class po{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,r=!1){this.hideDropdown();const n=document.createElement("ul");n.className="global-search-dropdown";const s=300,i=e.getBoundingClientRect(),a=window.innerWidth,c=window.innerHeight,l=i.width,u=c-i.bottom,p=i.top;let h=!1;u<s&&p>u&&(h=!0);let y;h?y=Math.max(8,i.top-s-8):y=Math.min(c-s-8,i.bottom+8);let f=i.left;f+l>a-8&&(f=a-l-8),f<8&&(f=8);const w={position:"fixed",top:`${y}px`,left:`${f}px`,width:`${l}px`,minWidth:`${l}px`,maxWidth:`${l}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${s}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate"};Object.keys(w).forEach(g=>{n.style.setProperty(g,w[g],"important")}),n.dropdownHeight=s,t.length===0?n.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':n.innerHTML=t.map(g=>{const E=g.OrderCode||g.Code||"",m=g.Description||g.ProductName||g["Product Name"]||"",b=g._crosshairMatch,C=b?`<span style="display: inline-block; background: #e3f2fd; color: #1565c0; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 8px; margin-left: 8px;">Seima alternative for ${S.sanitizeInput(b.competitor)}</span>`:"",T=b?Object.fromEntries(Object.entries(g).filter(([M])=>M!=="_crosshairMatch")):g;return`<li data-product='${JSON.stringify(T).replace(/'/g,"&apos;")}'
                     style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: block; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: ${b?"#f0f7ff":"#fff"} !important;">
          <span style="font-weight: 600; color: #2563eb;">${S.sanitizeInput(E)}</span>
          <span style="color: #6b7280; margin: 0 8px;">—</span>
          <span style="color: #374151;">${S.sanitizeInput(m)}</span>
          ${C}
        </li>`}).join(""),n.querySelectorAll("li[data-product]").forEach((g,E)=>{g.addEventListener("mouseenter",()=>{n.querySelectorAll("li.active").forEach(m=>m.classList.remove("active")),g.classList.add("hover")}),g.addEventListener("mouseleave",()=>{g.classList.remove("hover")}),g.onclick=()=>{try{const m=JSON.parse(g.getAttribute("data-product"));o(m),this.hideDropdown()}catch(m){console.error("Failed to parse product data:",m)}},r&&E===0&&(g.classList.add("active"),g.style.setProperty("background","#b87333","important"),g.querySelectorAll("span").forEach(m=>{m.style.setProperty("color","#ffffff","important")}))}),document.body.appendChild(n),this.activeDropdown=n,this.updatePositionHandler=()=>{const g=e.getBoundingClientRect(),E=window.innerHeight,m=n.dropdownHeight||300,b=E-g.bottom,C=g.top;let T=!1;b<m&&C>b&&(T=!0);let M;T?M=Math.max(8,g.top-m-8):M=Math.min(E-m-8,g.bottom+8);let _=g.left;_+g.width>a-8&&(_=a-g.width-8),_<8&&(_=8),n.style.setProperty("top",`${M}px`,"important"),n.style.setProperty("left",`${_}px`,"important"),n.style.setProperty("width",`${g.width}px`,"important"),n.style.setProperty("min-width",`${g.width}px`,"important"),n.style.setProperty("max-width",`${g.width}px`,"important")},window.addEventListener("scroll",this.updatePositionHandler),window.addEventListener("resize",this.updatePositionHandler)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const $e="tipTailSettings",Ue="customerLogo";class mo{constructor(){this.gridRows=[],this.nextRowId=1,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new po,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection()}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),r=document.getElementById("entry-load"),n=document.getElementById("entry-new"),s=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),r&&r.addEventListener("click",()=>this.showLoadPicker()),n&&n.addEventListener("click",()=>this.addEmptyRow()),s&&s.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await ie.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),re.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=v.getUserSettings();if(!((e==null?void 0:e.staffEmail)||""))return;const o=await se.fetchSelections();if(o.length>0){const r=o[0],n=document.getElementById("entry-continue"),s=document.getElementById("recent-selection-name");n&&s&&(n.style.display="flex",s.textContent=`${r.documentName||r.customerName} • ${r.date}`,n.dataset.selectionId=r.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){re.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=S.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:S.getStorageItem("pdfWizardSettings",{}),gridRows:v.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),r=document.getElementById("clear-all-btn"),n=document.getElementById("settings-btn"),s=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),r&&(r.onclick=()=>this.showClearAllModal()),n&&(n.onclick=()=>this.showSettingsModal()),s&&(s.onclick=()=>this.addEmptyRow());const i=document.getElementById("clear-all-cancel"),a=document.getElementById("clear-all-confirm");i&&(i.onclick=()=>this.hideClearAllModal()),a&&(a.onclick=()=>{var C;const b=((C=document.getElementById("clear-customer-details"))==null?void 0:C.checked)??!0;this.clearAll(b),this.hideClearAllModal()});const c=document.getElementById("settings-cancel"),l=document.getElementById("settings-save");c&&(c.onclick=()=>this.hideSettingsModal()),l&&(l.onclick=()=>this.saveSettings());const u=document.getElementById("clear-all-modal"),p=document.getElementById("settings-modal");u&&(u.onclick=b=>{b.target===u&&this.hideClearAllModal()}),p&&(p.onclick=b=>{b.target===p&&this.hideSettingsModal()});const h=document.getElementById("sort-by");h&&(h.onchange=()=>this.handleSortChange());const y=document.getElementById("sort-refresh-btn");y&&(y.onclick=()=>this.handleSortChange());const f=document.getElementById("grid-body");f&&(f.addEventListener("input",this.handleGridInput.bind(this)),f.addEventListener("change",this.handleGridChange.bind(this)),f.addEventListener("click",this.handleGridClick.bind(this)),f.addEventListener("keydown",this.handleGridKeydown.bind(this)),f.addEventListener("focusin",this.handleGridFocusIn.bind(this)),f.addEventListener("focusout",this.handleGridFocusOut.bind(this)),f.addEventListener("dragstart",this.handleDragStart.bind(this)),f.addEventListener("dragover",this.handleDragOver.bind(this)),f.addEventListener("dragleave",this.handleDragLeave.bind(this)),f.addEventListener("drop",this.handleDrop.bind(this)),f.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",b=>{!b.target.closest(".grid-product-cell")&&!b.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const w=document.getElementById("pdf-email-modal"),g=document.getElementById("pdf-email-cancel");g&&w&&(g.onclick=()=>{w.style.display="none"});const E="pdfFormSettings",m=document.getElementById("pdf-email-form");w&&w.addEventListener("show",()=>{const b=S.getStorageItem(E,{});m&&(m["user-name"].value=b.name||"",m["user-project"].value=b.project||"",m["user-address"].value=b.address||"",m["user-email"].value=b.email||"",m["user-telephone"].value=b.telephone||"",m["exclude-prices"].checked=!!b.excludePrices,m["exclude-qty"].checked=!!b.excludeQty,m["exclude-long-description"].checked=!!b.excludeLongDescription,m["include-gst"].checked=!!b.includeGst)}),m&&(m.addEventListener("input",()=>{S.setStorageItem(E,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked})}),m.addEventListener("change",()=>{S.setStorageItem(E,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked})}),m.onsubmit=b=>{var T,M,_,ae,ce,le,de,ge,he,Re,ke;b.preventDefault(),S.setStorageItem(E,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked});const C={name:((T=m["user-name"])==null?void 0:T.value)||"",project:((M=m["user-project"])==null?void 0:M.value)||"",address:((_=m["user-address"])==null?void 0:_.value)||"",email:((ae=m["user-email"])==null?void 0:ae.value)||"",telephone:((ce=m["user-telephone"])==null?void 0:ce.value)||"",excludePrice:(le=m["exclude-qty"])!=null&&le.checked?!0:((de=m["exclude-price"])==null?void 0:de.checked)||((ge=m["exclude-prices"])==null?void 0:ge.checked)||!1,excludeQty:((he=m["exclude-qty"])==null?void 0:he.checked)||!1,excludeLongDescription:((Re=m["exclude-long-description"])==null?void 0:Re.checked)||!1,includeGst:((ke=m["include-gst"])==null?void 0:ke.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",C),window.showPdfFormScreen?window.showPdfFormScreen(C):typeof showPdfFormScreen=="function"&&showPdfFormScreen(C),w&&(w.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const r=o.querySelector(".grid-search-input");r&&r.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],r={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&v.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),r.product){const n=r.product.Description||r.product.ProductName||r.product.OrderCode||"Product",s=n.length>30?n.substring(0,30)+"...":n;re.withUndo(`Removed "${s}"`,()=>{this.restoreRow(r)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=v.addProductToSelection({...t.product,qty:t.qty,notes:t.notes,room:t.room,customPrice:t.price}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),re.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(s=>s.id===e);if(o===-1)return;let r;if(t==="up"?r=Math.max(0,o-1):t==="down"&&(r=Math.min(this.gridRows.length-1,o+1)),r===o)return;const n=this.gridRows.splice(o,1)[0];this.gridRows.splice(r,0,n),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const s=document.querySelector(`[data-row-id="${e}"]`);s&&(s.style.backgroundColor="#dbeafe",setTimeout(()=>{s.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const r=await this.searchProducts(t);this.searchCache.set(o,r),this.showSearchResults(e,r,t)}catch(r){console.error("Product search failed:",r),this.hideSearchDropdown(e)}},300)}async searchProducts(e){var o;j.isLoaded||await new Promise(r=>{const n=()=>{j.isLoaded?r():setTimeout(n,100)};n()});const t=j.searchProducts(e,50);if(t.length<3&&Se.isEnabled())try{const r=await Se.findSeimaMatches(e);if(((o=r==null?void 0:r.matches)==null?void 0:o.length)>0){const n=[];for(const s of r.matches){const i=j.findProductByCode(s.SeimaSKU);i&&(i._crosshairMatch={competitor:r.competitor,competitorProduct:r.competitorProduct,confidence:s.Confidence,reason:s.MatchReason},n.push(i))}if(n.length>0){const s=new Set(t.map(a=>a.OrderCode));return[...n.filter(a=>!s.has(a.OrderCode)),...t]}}}catch(r){console.warn("Crosshair competitor lookup failed:",r)}return t}showSearchResults(e,t,o){let r=!1;if(t.length>0&&o){const n=o.toUpperCase().trim(),s=t[0],i=(s.OrderCode||"").toString().toUpperCase().trim(),a=(s.BARCODE||s.Barcode||"").toString().toUpperCase().trim();(i===n||a===n)&&(r=!0)}this.dropdownManager.showDropdown(e,t,n=>this.selectProduct(e,n),r)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){const o=e.closest(".grid-row"),r=o.dataset.rowId,n=this.gridRows.find(a=>a.id===r);if(!n)return;n.product=t;const s=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t.RRP_INCGST||t.RRP_INCGST||t["RRP INC GST"]||t.rrpIncGst||"";n.price=s;const i=o.querySelector('input[name="price"]');i&&(i.value=s),e.value="",this.renderGrid(),this.saveRowToStorage(n),this.focusNextRowOrCreate(r)}saveRowToStorage(e){if(!e.product)return;const t={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||"0",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"0",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"},o=v.addProductToSelection(t,e.notes,e.room,e.quantity);o&&(e.storageId=o,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const r=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);r&&!r.classList.contains("populated")&&r.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){const t=e.target;if(t.classList.contains("grid-remove-btn")){const r=t.closest(".grid-row").dataset.rowId;this.removeRow(r)}else if(t.classList.contains("grid-move-btn")){const r=t.closest(".grid-row").dataset.rowId,n=t.dataset.direction;this.moveRow(r,n)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(o=>{o.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const r=o.querySelectorAll("li[data-product]"),n=o.querySelector("li.active");let s=null;const i=(a,c)=>{if(c)a.classList.add("active"),a.style.setProperty("background","#b87333","important"),a.querySelectorAll("span").forEach(l=>{l.style.setProperty("color","#ffffff","important")});else{a.classList.remove("active"),a.style.setProperty("background","#fff","important");const l=a.querySelectorAll("span");l[0]&&l[0].style.setProperty("color","#2563eb","important"),l[1]&&l[1].style.setProperty("color","#6b7280","important"),l[2]&&l[2].style.setProperty("color","#374151","important")}};switch(e.key){case"ArrowDown":if(e.preventDefault(),!n)s=r[0];else{i(n,!1);const c=(Array.from(r).indexOf(n)+1)%r.length;s=r[c]}s&&(i(s,!0),s.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!n)s=r[r.length-1];else{i(n,!1);const a=Array.from(r).indexOf(n),c=a===0?r.length-1:a-1;s=r[c]}s&&(i(s,!0),s.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),n&&n.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const r=document.createElement("div");r.textContent=`📁 ${o}`,r.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(r),e.dataTransfer.setDragImage(r,0,15),setTimeout(()=>r.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(n=>{n.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const n=t.getBoundingClientRect(),s=n.top+n.height/2;e.clientY<s?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),r=o.top+o.height/2;e.clientY<r?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(h=>{h.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const h=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const y=o.dataset.roomName;if(y==="Blank"||h===y)return;const f=o.getBoundingClientRect(),w=e.clientY<f.top+f.height/2;this.moveRoomInOrder(h,y,w),this.renderGrid();return}const r=t;if(o.classList.contains("room-header-row"))return;const n=o.dataset.rowId;if(r===n)return;const s=o.getBoundingClientRect(),i=e.clientY<s.top+s.height/2,a=this.gridRows.findIndex(h=>h.id===r),c=this.gridRows.findIndex(h=>h.id===n);if(a===-1||c===-1)return;const l=this.gridRows[a],u=this.gridRows[c];l.room!==u.room&&(l.room=u.room,this.lastUsedRoom=u.room,l.product&&l.storageId&&v.updateProductRoom(l.storageId,l.room)),this.gridRows.splice(a,1);let p=this.gridRows.findIndex(h=>h.id===n);p!==-1&&(i||p++,this.gridRows.splice(p,0,l),this.renderGrid(),setTimeout(()=>{const h=document.querySelector(`[data-row-id="${r}"]`);h&&(h.style.backgroundColor="#dbeafe",h.style.transition="background-color 0.3s ease",setTimeout(()=>{h.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=v.getUserSettings(),o=ne.getCurrentUser(),r=document.getElementById("staff-name"),n=document.getElementById("staff-position"),s=document.getElementById("staff-email"),i=document.getElementById("staff-telephone"),a=document.getElementById("logged-in-profile-section"),c=document.getElementById("profile-avatar"),l=document.getElementById("profile-display-name"),u=document.getElementById("profile-display-email"),p=document.getElementById("edit-profile-btn");if(t&&(t.staffName||t.staffEmail)?(r&&(r.value=t.staffName||""),n&&(n.value=t.staffPosition||""),s&&(s.value=t.staffEmail||""),i&&(i.value=t.staffPhone||"")):o&&(r&&o.name&&(r.value=o.name),n&&o.position&&(n.value=o.position),s&&o.email&&(s.value=o.email),i&&o.phone&&(i.value=o.phone)),o){a&&(a.style.display="block"),l&&(l.textContent=o.name||""),u&&(u.textContent=o.email||""),c&&(c.textContent=this.getInitials(o.name)),p&&(p.onclick=()=>{V.showEditProfile(E=>{console.log("📱 Profile updated:",E),v.clearUserSettings(),this.showSettingsModal()})});const g=document.getElementById("change-password-btn");g&&(g.onclick=()=>{V.showChangePassword(()=>{console.log("📱 Password changed")})})}else a&&(a.style.display="none");const y=document.getElementById("settings-version-info");if(y)try{let E=(await(await fetch("./version.txt")).text()).trim();E=E.split(/\r?\n/)[0].replace(/[^0-9.v]/g,""),y.innerText=E?`v${E}`:"",y.title="App Version"}catch{y.innerText=""}const f=document.getElementById("refresh-catalog-btn");f&&(f.onclick=()=>{localStorage.removeItem("productCatalogCsv"),window.location.reload()});const w=document.getElementById("refresh-pdf-files-btn");w&&(w.onclick=async()=>{await this.refreshPdfFileList();const g=w.textContent;w.textContent="✅ Refreshed!",w.style.background="#dcfce7",w.style.color="#059669",setTimeout(()=>{w.textContent=g,w.style.background="#f3f4f6",w.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview"),t=localStorage.getItem(Ue);e&&(e.innerHTML=t?`<img src="${t}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=r=>{const n=r.target.files[0];if(n){const s=new FileReader;s.onload=i=>{localStorage.setItem(Ue,i.target.result),o&&(o.innerHTML=`<img src="${i.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},s.readAsDataURL(n)}},t.onclick=()=>{localStorage.removeItem(Ue),o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(n=>`./assets/${n}`),o=document.getElementById("tip-pdf-select"),r=document.getElementById("tail-pdf-select");o&&r&&(o.innerHTML='<option value="">(None)</option>',r.innerHTML='<option value="">(None)</option>',t.forEach(n=>{const s=n.split("/").pop();o.innerHTML+=`<option value="${n}">${s}</option>`,r.innerHTML+=`<option value="${n}">${s}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const r=await o.json();return console.log("✅ Server provided files:",r),r}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const r=await o.json();return console.log("✅ assets-list.json provided files:",r),r}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const r=await fetch(`./assets/${o}`,{method:"HEAD"});r.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${r.status})`)}catch(r){console.log(`❌ Error checking ${o}:`,r.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem($e)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),r=document.getElementById("tip-pdf-upload"),n=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",r&&(r.style.fontWeight="bold",r.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",n&&(n.style.fontWeight="bold",n.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),r=document.getElementById("tail-pdf-upload"),n=document.getElementById("tip-pdf-clear"),s=document.getElementById("tail-pdf-clear"),i=document.getElementById("tip-pdf-selected"),a=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),i&&(i.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),a&&(a.textContent="")},o.onchange=c=>{const l=c.target.files[0];if(l){const u=new FileReader;u.onload=p=>{const h=p.target.result,y=new Uint8Array(h);let f="";for(let g=0;g<y.length;g++)f+=String.fromCharCode(y[g]);const w=btoa(f);this.saveTipTailSettings({tipAsset:"",tipUpload:w,tipUploadName:l.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},u.readAsArrayBuffer(l)}},r.onchange=c=>{const l=c.target.files[0];if(l){const u=new FileReader;u.onload=p=>{const h=p.target.result,y=new Uint8Array(h);let f="";for(let g=0;g<y.length;g++)f+=String.fromCharCode(y[g]);const w=btoa(f);this.saveTipTailSettings({tailAsset:"",tailUpload:w,tailUploadName:l.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),r&&(r.style.fontWeight="bold",r.style.color="#2563eb")},u.readAsArrayBuffer(l)}},n.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{e.innerHTML+=`<option value="assets/${l}">${l}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},s.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{t.innerHTML+=`<option value="assets/${l}">${l}</option>`})),r&&(r.value="",r.style.fontWeight="normal",r.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem($e)||"{}"),...e};localStorage.setItem($e,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var s,i,a,c;const e=((s=document.getElementById("staff-name"))==null?void 0:s.value)||"",t=((i=document.getElementById("staff-position"))==null?void 0:i.value)||"",o=((a=document.getElementById("staff-email"))==null?void 0:a.value)||"",r=((c=document.getElementById("staff-telephone"))==null?void 0:c.value)||"",n={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:r.trim()};v.saveUserSettings(n),this.hideSettingsModal(),console.log("Settings saved successfully:",n)}loadSettings(){const e=v.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),r=document.getElementById("staff-email"),n=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),r&&(r.value=e.staffEmail||""),n&&(n.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,r=this.gridRows.find(s=>s.id===o);if(!r)return;let n=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const s=prompt("Enter new room name:");if(s&&s.trim()){const i=s.trim();if(v.addCustomRoom(i))r.room=i,this.lastUsedRoom=i,console.log("✅ Added new room:",i),this.updateAllRoomDropdowns(),e.value=i;else{alert("Room name already exists or is invalid"),e.value=r.room||"Blank";return}}else{e.value=r.room||"Blank";return}}else r.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(r.quantity=Math.max(1,parseInt(e.value)||1),e.value=r.quantity,n=!0):e.classList.contains("grid-input")&&e.name==="price"?(r.price=e.value,n=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(r.notes=e.value);n&&this.updateRowTotal(t,r),r.product&&r.storageId&&(v.updateProductQuantity(r.storageId,r.quantity),v.updateProductRoom(r.storageId,r.room),v.updateProductNotes(r.storageId,r.notes),n&&e.name==="price"&&v.updateProductPrice(r.storageId,r.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const r=parseFloat((t.price||"").toString().replace(/,/g,""))||0,n=parseInt(t.quantity)||1,s=r*n;o.textContent=s>0?s.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=v.getSelectedProducts();this.gridRows=[],this.nextRowId=1,e.forEach(t=>{var s,i,a,c,l,u,p,h,y,f;const o=`row_${this.nextRowId++}`;let r="";((s=t.product)==null?void 0:s.UserEditedPrice)!==void 0&&((i=t.product)==null?void 0:i.UserEditedPrice)!==null&&((a=t.product)==null?void 0:a.UserEditedPrice)!==""?r=t.product.UserEditedPrice:r=((c=t.product)==null?void 0:c.RRP_EX)||((l=t.product)==null?void 0:l["RRP EX GST"])||((u=t.product)==null?void 0:u.RRP_EX)||((p=t.product)==null?void 0:p.rrpExGst)||((h=t.product)==null?void 0:h.RRP_EXGST)||((y=t.product)==null?void 0:y.RRP_INCGST)||((f=t.product)==null?void 0:f["RRP INC GST"])||"";const n={id:o,product:t.product,room:t.room||"Blank",quantity:t.quantity||1,price:r,notes:t.notes||"",storageId:t.id};this.gridRows.push(n)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const r=this.groupRowsByRoom(),n=[];Object.entries(r).forEach(([s,i])=>{const a=this.getRoomClass(s),l=!(s==="Blank"),u=`
        <div class="grid-row room-header-row ${a}" 
             data-room-name="${s}"
             ${l?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${l?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${s}</span>
              <span class="room-count">(${i.length})</span>
            </div>
          </div>
          <div class="col-image"></div>
          <div class="col-product"></div>
          <div class="col-room"></div>
          <div class="col-qty"></div>
          <div class="col-price"></div>
          <div class="col-notes"></div>
          <div class="col-actions"></div>
        </div>
      `;n.push(u),i.forEach(p=>{n.push(this.renderRowHtml(p))})}),e.innerHTML=n.join("")}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",r=t&&(t.Description||t.ProductName||t["Product Name"])||"",n=t&&(t.OrderCode||t.Code)||"",s=n?String(parseInt(n,10)):"",i=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t.RRP_INCGST||t["RRP INC GST"])||"",a=parseFloat((i||"").toString().replace(/,/g,""))||0,c=parseInt(e.quantity)||1,l=a*c,u=l>0?l.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t?"has-product":"empty-product"}">
          ${t?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <strong>${S.sanitizeInput(s)}</strong> ${S.sanitizeInput(r)}
              </div>
            </div>
          `:`
            <input type="text" 
                   class="grid-search-input" 
                   placeholder="Search for a product..." 
                   value="">
          `}
        </div>
        <div class="col-room">
          <select class="grid-select" name="room">
            ${this.getRoomOptions(e.room)}
          </select>
        </div>
        <div class="col-qty">
          <input type="number" class="grid-input" name="quantity" value="${e.quantity}" min="1" step="1">
        </div>
        <div class="col-price">
          <input type="text" class="grid-input" name="price" value="${i}" placeholder="0.00">
        </div>
        <div class="col-total">
          <div class="grid-total-display">${u}</div>
        </div>
        <div class="col-notes">
          <textarea class="grid-textarea" name="notes" placeholder="Notes..." rows="1" maxlength="140">${S.sanitizeInput(e.notes)}</textarea>
        </div>
        <div class="col-actions grid-actions-cell">
          <div class="grid-actions-group">
            <button class="grid-move-btn grid-move-up" title="Move up" data-direction="up">↑</button>
            <button class="grid-move-btn grid-move-down" title="Move down" data-direction="down">↓</button>
            <div class="grid-drag-handle" title="Drag to reorder" draggable="true">⋮⋮</div>
            <button class="grid-remove-btn" title="Remove row">×</button>
          </div>
        </div>
      </div>
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const r=t.room||"Blank",n=o.room||"Blank";return r.localeCompare(n)});break;case"product":this.gridRows.sort((t,o)=>{const r=t.product&&(t.product.Description||t.product.ProductName)||"",n=o.product&&(o.product.Description||o.product.ProductName)||"";return r.localeCompare(n)});break;case"code":this.gridRows.sort((t,o)=>{const r=t.product&&(t.product.OrderCode||t.product.Code)||"",n=o.product&&(o.product.OrderCode||o.product.Code)||"";return r.localeCompare(n)});break;default:this.gridRows.sort((t,o)=>{const r=t.room||"Blank",n=o.room||"Blank";return r.localeCompare(n)});break}}groupRowsByRoom(){const e=document.getElementById("sort-by");if((e?e.value:"room")!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(i=>{const a=i.room||"Blank";o[a]||(o[a]=[]),o[a].push(i)});const r=Object.keys(o).filter(i=>i!=="Blank"),n=this.getSortedRoomNames(r),s={};return n.forEach(i=>{o[i]&&(s[i]=o[i])}),o.Blank&&(s.Blank=o.Blank),s}getSortedRoomNames(e){const t=this.customRoomOrder.filter(r=>e.includes(r)),o=e.filter(r=>!this.customRoomOrder.includes(r)).sort((r,n)=>r.localeCompare(n));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const r={};this.gridRows.forEach(c=>{const l=c.room||"Blank";r[l]||(r[l]=[])});const n=Object.keys(r).filter(c=>c!=="Blank"),i=this.getSortedRoomNames(n).filter(c=>c!==e);let a=i.indexOf(t);a===-1&&(a=i.length),o||a++,i.splice(a,0,e),this.customRoomOrder=i,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return I.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),v.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const r=this.gridRows.find(n=>n.id===o.closest(".grid-row").dataset.rowId);r&&(o.innerHTML=this.getRoomOptions(r.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let r=0,n=0;const s=new Set;this.gridRows.forEach(i=>{if(i.product){r+=i.quantity;const a=parseFloat(i.price)||0;n+=a*i.quantity,i.room&&i.room!=="Blank"&&i.room.trim()!==""&&s.add(i.room)}}),e&&(e.textContent=r),t&&(t.textContent=s.size),o&&(o.textContent=n>0?`$${n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){v.clearAllSelections(),localStorage.removeItem("pdfWizardSettings"),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}syncGridToStorage(){for(const e of this.gridRows)!e.product||!e.storageId||typeof e.storageId!="string"||(v.updateProductPrice(e.storageId,e.price),v.updateProductQuantity(e.storageId,e.quantity),v.updateProductRoom(e.storageId,e.room),v.updateProductNotes(e.storageId,e.notes))}async showDownloadModal(){this.syncGridToStorage(),V.requireAuth(async()=>{try{await lo.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF"),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}},"create PDF")}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=S.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){V.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=S.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,r=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,n=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(r)}" maxlength="100"
                   placeholder="Enter a name for this selection">
            
            <label class="form-label" for="save-notes" style="margin-top: 12px;">Notes (optional)</label>
            <textarea class="form-input" id="save-notes" rows="2" maxlength="500"
                      placeholder="Add any notes about this selection"></textarea>
          </div>
          
          <div class="save-dialog-actions">
            <button class="btn btn-secondary" data-action="cancel">Cancel</button>
            ${o?`
              <button class="btn btn-outline" data-action="save-new">Save as New</button>
              <button class="btn btn-accent" data-action="save-update">Update</button>
            `:`
              <button class="btn btn-accent" data-action="save-new">Save</button>
            `}
          </div>
        </div>
      </div>
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",n);const s=document.getElementById("save-dialog"),i=document.getElementById("save-doc-name"),a=document.getElementById("save-notes");i==null||i.focus(),i==null||i.select(),s.querySelectorAll("button[data-action]").forEach(l=>{l.addEventListener("click",async()=>{const u=l.dataset.action;if(u==="cancel"){s.remove();return}const p=(i==null?void 0:i.value.trim())||"Untitled Selection",h=(a==null?void 0:a.value.trim())||"";this.currentSelectionName=p;const y={...this.prepareSelectionData(),documentName:p,notes:h};s.querySelectorAll("button").forEach(f=>f.disabled=!0),l.textContent="Saving...";try{let f;u==="save-update"?f=await ie.updateSelection(this.currentSelectionId,y):(f=await ie.saveSelection(y),f.success&&f.id&&(this.currentSelectionId=f.id)),s.remove(),f.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),re.success(u==="save-update"?"Selection updated!":"Selection saved!")):re.error("Failed to save: "+(f.error||"Unknown error"))}catch(f){s.remove(),re.error("Failed to save: "+f.message)}})}),s.addEventListener("click",l=>{l.target===s&&s.remove()});const c=l=>{l.key==="Escape"&&(s.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
      <style id="save-dialog-styles">
        .save-dialog-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 100001;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        
        .save-dialog {
          background: white;
          border-radius: 12px;
          padding: 24px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .save-dialog h3 {
          margin: 0 0 8px;
          font-size: 1.25rem;
          color: var(--text-primary, #1f2937);
        }
        
        .save-dialog > p {
          margin: 0 0 20px;
          color: var(--text-secondary, #6b7280);
          font-size: 0.9rem;
        }
        
        .save-dialog-form {
          margin-bottom: 20px;
        }
        
        .save-dialog-form .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--text-primary, #1f2937);
          margin-bottom: 6px;
        }
        
        .save-dialog-form .form-input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--border-light, #e5e5e5);
          border-radius: 6px;
          font-size: 0.875rem;
        }
        
        .save-dialog-form .form-input:focus {
          outline: none;
          border-color: var(--color-copper, #b87333);
        }
        
        .save-dialog-form textarea {
          resize: vertical;
          min-height: 60px;
        }
        
        .save-dialog-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
        
        .save-dialog-actions button {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
        }
        
        .save-dialog-actions button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .save-dialog-actions .btn-secondary {
          background: white;
          border: 1px solid var(--border-light, #e5e5e5);
          color: var(--text-secondary, #6b7280);
        }
        
        .save-dialog-actions .btn-outline {
          background: white;
          border: 1px solid var(--color-copper, #b87333);
          color: var(--color-copper, #b87333);
        }
        
        .save-dialog-actions .btn-accent {
          background: var(--color-copper, #b87333);
          border: none;
          color: white;
        }
      </style>
    `)}showLoadPicker(){V.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){at.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),re.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const ze="onboardingCompleted",tt=2;class go{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(ze);if(!e)return!0;try{return JSON.parse(e).version<tt}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
      <div class="onboarding-container">
        <div class="onboarding-content" id="onboarding-content"></div>
        <div class="onboarding-footer">
          <div class="onboarding-dots" id="onboarding-dots"></div>
          <div class="onboarding-actions">
            <button class="onboarding-skip" id="onboarding-skip">Skip</button>
            <button class="onboarding-next" id="onboarding-next">Next</button>
          </div>
        </div>
        <div class="onboarding-brand">
          <span>Seima Product Presenter</span>
        </div>
      </div>
    `,this.injectStyles(),document.body.appendChild(this.overlay),(e=document.getElementById("onboarding-skip"))==null||e.addEventListener("click",()=>this.complete()),(t=document.getElementById("onboarding-next"))==null||t.addEventListener("click",()=>this.nextStep())}injectStyles(){if(document.getElementById("onboarding-styles"))return;const e=document.createElement("style");e.id="onboarding-styles",e.textContent=`
      #onboarding-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 26, 0.9);
        backdrop-filter: blur(8px);
        z-index: 200000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
      }
      
      .onboarding-container {
        background: #fff;
        border-radius: 20px;
        max-width: 560px;
        width: 90%;
        max-height: 85vh;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        border-top: 4px solid var(--color-copper, #b87333);
      }
      
      .onboarding-content {
        padding: 48px 40px 32px;
        text-align: center;
        flex: 1;
        overflow-y: auto;
      }
      
      .onboarding-logo {
        height: 48px;
        width: auto;
        margin-bottom: 32px;
        opacity: 0.9;
      }
      
      .onboarding-icon {
        font-size: 3.5rem;
        margin-bottom: 24px;
      }
      
      .onboarding-title {
        font-family: var(--font-display, 'Fraunces', serif);
        font-size: 1.75rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 16px 0;
      }
      
      .onboarding-text {
        font-size: 1.0625rem;
        color: #6b7280;
        line-height: 1.7;
        margin: 0;
      }
      
      .onboarding-feature {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        text-align: left;
        padding: 16px;
        background: #f9fafb;
        border-radius: 12px;
        margin-top: 24px;
      }
      
      .onboarding-feature-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
      }
      
      .onboarding-feature-content {
        flex: 1;
      }
      
      .onboarding-feature-title {
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 4px;
      }
      
      .onboarding-feature-desc {
        font-size: 0.875rem;
        color: #6b7280;
      }
      
      .onboarding-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 40px;
        background: #f9fafb;
        border-top: 1px solid #e5e5e5;
      }
      
      .onboarding-dots {
        display: flex;
        gap: 8px;
      }
      
      .onboarding-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d1d5db;
        transition: all 0.2s ease;
      }
      
      .onboarding-dot.active {
        width: 24px;
        border-radius: 4px;
        background: var(--color-copper, #b87333);
      }
      
      .onboarding-actions {
        display: flex;
        gap: 12px;
      }
      
      .onboarding-skip {
        padding: 10px 20px;
        background: transparent;
        border: none;
        color: #6b7280;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: color 0.15s;
      }
      
      .onboarding-skip:hover {
        color: #1a1a1a;
      }
      
      .onboarding-next {
        padding: 10px 24px;
        background: var(--color-charcoal, #1a1a1a);
        border: none;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s;
      }
      
      .onboarding-next:hover {
        background: #2d2d2d;
        transform: translateY(-1px);
      }
      
      .onboarding-brand {
        text-align: center;
        padding: 12px 20px;
        font-size: 0.6875rem;
        color: #9ca3af;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-top: 1px solid #f0f0f0;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"📊",title:"Sort Options",desc:"Sort by Room/Group, Product Code, or Product Name"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show RRP, add GST, or hide pricing entirely"},{icon:"📝",title:"Content Control",desc:"Include descriptions and custom notes"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),r=document.getElementById("onboarding-dots"),n=document.getElementById("onboarding-next");if(!o||!r)return;let s="";t.features.length>0&&(s=t.features.map(a=>`
        <div class="onboarding-feature">
          <span class="onboarding-feature-icon">${a.icon}</span>
          <div class="onboarding-feature-content">
            <div class="onboarding-feature-title">${a.title}</div>
            <div class="onboarding-feature-desc">${a.desc}</div>
          </div>
        </div>
      `).join(""));const i=t.icon==="logo"?'<img src="assets/seima-logo.png" alt="Seima" class="onboarding-logo">':`<div class="onboarding-icon">${t.icon}</div>`;o.innerHTML=`
      ${i}
      <h2 class="onboarding-title">${t.title}</h2>
      <p class="onboarding-text">${t.text}</p>
      ${s}
    `,r.innerHTML=e.map((a,c)=>`<div class="onboarding-dot ${c===this.currentStep?"active":""}"></div>`).join(""),n&&(n.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(ze,JSON.stringify({version:tt,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(ze)}}const ct=new go;class ho{constructor(){this.navigationManager=null,this.fileImportManager=new no,this.productGridManager=new mo,this.isInitialized=!1,F.log("SeimaScanner application starting",x.INFO)}async init(){var e,t;try{if(F.log("Initializing application modules",x.INFO),ne.configure({googleSheetsUrl:(e=z.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:z.EMAIL}),V.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Presenter"}),(t=z.CROSSHAIR)!=null&&t.ENABLED){const n=ne.getCurrentUser();Se.configure(z.CROSSHAIR,(n==null?void 0:n.email)||"")}const o=ye.getCompatibilityReport();F.log(`Browser compatibility: ${o.score}% (${o.browserName})`,x.INFO),ye.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),this.navigationManager=new $t,await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=ye,window.downloadWithFallback=Me,window.showPdfFormScreen=_e,this.isInitialized=!0,F.log("Seima Scanner initialized successfully",x.INFO);const r=document.querySelector(".grid-container");return r&&r.classList.add("ready"),setTimeout(()=>{ct.show()},500),!0}catch(o){return F.handleError({message:"Failed to initialize application",error:o,category:B.UI,level:x.CRITICAL,context:"app-init"}),!1}}showCompatibilityWarning(){const e=ye.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(s=>s.type==="critical"),r=e.score<I.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!r)return;const n=document.createElement("div");n.style.cssText=`
      position: fixed; top: 0; left: 0; right: 0; z-index: 9998;
      background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
      border-bottom: 2px solid #f59e0b; padding: 12px 16px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      font-size: 14px; line-height: 1.4;
    `,n.innerHTML=`
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 18px; margin-right: 8px;">⚠️</span>
          <div>
            <strong style="color: #92400e;">Browser Compatibility Notice</strong>
            <div style="color: #a16207; font-size: 13px; margin-top: 2px;">
              ${o.length>0?o[0].message:"Some features may not work optimally"}
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <button onclick="window.browserCompatibility.logCompatibilityInfo()" style="
            padding: 4px 8px; border: 1px solid #d97706; background: transparent;
            color: #d97706; border-radius: 3px; cursor: pointer; font-size: 12px;
          ">Details</button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
            padding: 4px 8px; border: none; background: #f59e0b;
            color: white; border-radius: 3px; cursor: pointer; font-size: 12px;
          ">Dismiss</button>
        </div>
      </div>
    `,document.body.insertBefore(n,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;Ut(),_e(o,t||null)}),window.addEventListener("beforeunload",()=>{}),ye.features.memoryAPI&&setInterval(()=>{const e=ye.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return v.getSelectedProducts()}clearSelection(){return v.clearAllSelections()}addProduct(e,t,o,r){return v.addProductToSelection(e,t,o,r)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",()=>{window.seimaScanner=new ho,window.seimaScanner.init()});window.addEventListener("DOMContentLoaded",()=>{fetch("./version.txt").then(d=>d.text()).then(d=>{const e=d.trim().split(`
`);if(e.length>0){const o=e[0].split(" - ")[0].trim(),r=document.getElementById("app-version");r&&(r.textContent=`Ver: ${o}`,r.style.cursor="pointer",r.addEventListener("click",bo))}}),fo(),yo()});function fo(){const d=document.getElementById("help-btn");d&&d.addEventListener("click",()=>{wo()});const e=document.getElementById("crosshair-btn");e&&e.addEventListener("click",()=>{window.location.href="screens/validator.html"});const t=document.getElementById("quick-start-btn");t&&t.addEventListener("click",()=>{ct.showForced()})}function yo(){const d=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),r=document.getElementById("user-avatar"),n=document.getElementById("user-name-display");function s(c){var l,u,p,h,y;if(c){d&&(d.style.display="block"),o&&(o.style.display="none");const f=document.getElementById("crosshair-btn");f&&((l=z.CROSSHAIR)!=null&&l.ENABLED)&&(f.style.display="");const w=i(c.name);r&&(r.textContent=w),n&&(n.textContent=((u=c.name)==null?void 0:u.split(" ")[0])||"User"),t&&(t.innerHTML=`
          <div class="user-menu-header">
            <div class="user-menu-name">${a(c.name||"User")}</div>
            <div class="user-menu-email">${a(c.email||"")}</div>
          </div>
          <div class="user-menu-items">
            <button class="user-menu-item" id="menu-profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Edit Profile
            </button>
            <button class="user-menu-item" id="menu-password">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              Change Password
            </button>
            <button class="user-menu-item danger" id="menu-logout">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Sign Out
            </button>
          </div>
        `,(p=document.getElementById("menu-profile"))==null||p.addEventListener("click",()=>{t.style.display="none",V.showEditProfile(g=>{v.clearUserSettings(),s(g)})}),(h=document.getElementById("menu-password"))==null||h.addEventListener("click",()=>{t.style.display="none",V.showChangePassword()}),(y=document.getElementById("menu-logout"))==null||y.addEventListener("click",()=>{t.style.display="none",v.clearUserSettings(),ne.logout(),s(null)}))}else d&&(d.style.display="none"),o&&(o.style.display="block")}function i(c){if(!c)return"?";const l=c.trim().split(" ");return l.length>=2?(l[0][0]+l[l.length-1][0]).toUpperCase():c.substring(0,2).toUpperCase()}function a(c){const l=document.createElement("div");return l.textContent=c||"",l.innerHTML}e&&t&&(e.addEventListener("click",c=>{c.stopPropagation();const l=t.style.display!=="none";t.style.display=l?"none":"block"}),document.addEventListener("click",c=>{d!=null&&d.contains(c.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{V.showLogin(c=>{s(c)})}),ne.onAuthChange=s,s(ne.getCurrentUser())}function wo(){const d=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!d||!e)return;e.innerHTML=vo(),d.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{d.style.display="none"}),d.onclick=r=>{r.target===d&&(d.style.display="none")};const o=r=>{r.key==="Escape"&&(d.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function vo(){return`
    <div class="guide-header">
      <img src="assets/seima-logo.png" alt="Seima" class="guide-logo">
      <div class="guide-header-text">
        <h2 class="guide-header-title">Product Presenter</h2>
        <p class="guide-header-subtitle">User Guide</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Welcome</h3>
      <p>Create professional PDF presentations of Seima products for your clients. Whether you're a showroom consultant, builder, or architect, this tool streamlines the process of curating and presenting product selections.</p>
    </div>
    
    <div class="guide-section">
      <h3>Understanding the Interface</h3>
      
      <h4>The Context Bar</h4>
      <p>At the top of the screen, you'll see the context bar showing:</p>
      <ul>
        <li><strong>"Working on:"</strong> Shows the name of your current selection (e.g., "New Selection" or a customer name)</li>
        <li><strong>Previous Selections:</strong> Opens a list of your previously saved work</li>
        <li><strong>Save:</strong> Saves your current selection for later use</li>
      </ul>
      
      <div class="guide-tip">
        <strong>💡 Tip:</strong>
        <p>Your work is automatically saved to your browser. For permanent cloud storage, log in and click "Save" to store selections securely.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Getting Started</h3>
      
      <h4><span class="step-number">1</span>Choose Your Starting Point</h4>
      <p>When you first open the app (or after clearing), you have three options:</p>
      <ul>
        <li><strong>Import File:</strong> Upload a CSV, Excel, or JSON file with product codes</li>
        <li><strong>Previous Selections:</strong> Continue from a previously saved selection</li>
        <li><strong>Start Fresh:</strong> Add products manually one by one</li>
      </ul>
      <p>If you have recent work, you may also see a "Continue Recent Work" option to quickly resume.</p>
      
      <h4><span class="step-number">2</span>Organise Your Products</h4>
      <p>Use the Room/Group column to categorise products by location or project area. This grouping will be reflected in your PDF presentation.</p>
      <ul>
        <li>Select a predefined room from the dropdown, or</li>
        <li>Choose "Add new room..." to create a custom category</li>
        <li>Drag room headers to reorder entire groups</li>
      </ul>
      
      <h4><span class="step-number">3</span>Adjust Details</h4>
      <p>For each product row, you can:</p>
      <ul>
        <li>Edit the quantity using the Qty field</li>
        <li>Add notes specific to that product selection</li>
        <li>Override the price if needed (click on the price field)</li>
        <li>Drag products to reorder them within or between rooms</li>
      </ul>
    </div>
    
    <div class="guide-section">
      <h3>Sign In</h3>
      <p>You can browse products and create selections without signing in. However, you must sign in to <strong>generate PDFs</strong>, <strong>export CSVs</strong>, or <strong>save/load selections</strong> from the cloud.</p>
      <ul>
        <li>Click <strong>Sign In</strong> in the navigation bar to sign in or create an account</li>
        <li>Your saved selections are private—only you can see them</li>
        <li>Use <strong>Forgot Password</strong> if you need to reset your password</li>
      </ul>
      <div class="guide-tip">
        <strong>🔐 Privacy:</strong>
        <p>Each user only sees their own saved selections. Your password is securely hashed and never stored in plain text.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Saving & Loading Selections</h3>
      
      <h4>Saving Your Work</h4>
      <p>Click the <strong>Save</strong> button in the context bar to save your current selection. You'll be prompted to sign in if you haven't already. Saved selections include:</p>
      <ul>
        <li>All products with quantities, prices, and notes</li>
        <li>Customer details (name, project, address)</li>
        <li>Room organisation and custom room ordering</li>
        <li>PDF settings (pricing options, cover pages)</li>
      </ul>
      
      <h4>Loading Previous Selections</h4>
      <p>Click <strong>Previous Selections</strong> to browse your saved work. The list is always fetched fresh from the cloud. You can:</p>
      <ul>
        <li>Search by customer name or document name</li>
        <li>Choose to <strong>Replace</strong> your current work or <strong>Merge</strong> with existing products</li>
        <li>Use saved selections as templates for new projects</li>
      </ul>
      
      <h4>Starting Fresh</h4>
      <p>Click <strong>Clear All</strong> in the toolbar to start over. You'll be asked if you also want to clear customer details. Check this option for a completely fresh start.</p>
    </div>
    
    <div class="guide-section">
      <h3>Creating Your PDF</h3>
      <p>Click the <strong>Create PDF</strong> button to open the PDF creation screen:</p>
      
      <h4>Customer Details</h4>
      <p>Enter your client's information including name, project name, address, email and phone. These details appear on the title page. You can also upload a customer logo.</p>
      
      <h4>Output Options</h4>
      <ul>
        <li><strong>Full Pricing:</strong> Show all prices (ex GST)</li>
        <li><strong>+ GST:</strong> Show prices with GST included</li>
        <li><strong>Hide Prices:</strong> Create a presentation without pricing</li>
        <li><strong>Products Only:</strong> Show just the product list without quantities or prices</li>
      </ul>
      
      <h4>Advanced Options</h4>
      <p>Click "Advanced Options" to access:</p>
      <ul>
        <li><strong>Cover Pages:</strong> Add pre-designed covers (A&D, Builder, Merchant) or upload your own</li>
        <li><strong>Appendix:</strong> Add warranty/installation information at the end</li>
      </ul>
      
      <h4>Generate</h4>
      <p>Click "Generate PDF" to create and download your presentation.</p>
    </div>
    
    <div class="guide-section">
      <h3>Managing Products</h3>
      
      <h4>Sorting</h4>
      <p>Use the Sort dropdown to reorder your products by:</p>
      <ul>
        <li><strong>Room/Group:</strong> Groups products by their assigned room (default)</li>
        <li><strong>Product Code:</strong> Alphabetical by order code</li>
        <li><strong>Product Name:</strong> Alphabetical by product description</li>
      </ul>
      
      <h4>Product Actions</h4>
      <table class="shortcut-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>How To</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Move product up/down</td>
            <td>Click the ↑ or ↓ arrows, or drag using the ⋮⋮ handle</td>
          </tr>
          <tr>
            <td>Move between rooms</td>
            <td>Drag a product and drop it in a different room section</td>
          </tr>
          <tr>
            <td>Reorder room groups</td>
            <td>Drag a room header to change the group order</td>
          </tr>
          <tr>
            <td>Delete a product</td>
            <td>Click the × button in the Actions column</td>
          </tr>
          <tr>
            <td>Undo delete</td>
            <td>Click "Undo" in the notification that appears</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="guide-section">
      <h3>Keyboard Shortcuts</h3>
      <table class="shortcut-table">
        <thead>
          <tr>
            <th>Key</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><kbd>↵</kbd> Enter</td>
            <td>Select highlighted product in search results</td>
          </tr>
          <tr>
            <td><kbd>↑</kbd> <kbd>↓</kbd> Arrow Keys</td>
            <td>Navigate through search results</td>
          </tr>
          <tr>
            <td><kbd>Esc</kbd></td>
            <td>Close search dropdown / Cancel action</td>
          </tr>
          <tr>
            <td><kbd>Tab</kbd></td>
            <td>Move to next field</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="guide-section">
      <h3>Settings</h3>
      <p>Click the ⚙️ settings icon to configure:</p>
      <ul>
        <li><strong>Staff Contact Details:</strong> Your name, position, email and phone. These appear on the presentation title page and are used to filter your saved selections.</li>
        <li><strong>Refresh Product Catalogue:</strong> Update the local product database with the latest Seima products and pricing.</li>
      </ul>
      
      <div class="guide-tip">
        <strong>💡 Important:</strong>
        <p>Make sure to set your email in Settings. This is how the app knows which saved selections belong to you.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Supported File Formats</h3>
      <h4>Import Formats</h4>
      <ul>
        <li><strong>.csv</strong> - Comma-separated values with product codes</li>
        <li><strong>.xlsx / .xls</strong> - Microsoft Excel spreadsheets</li>
        <li><strong>.json</strong> - Seima Scanner export format</li>
      </ul>
      
      <div class="guide-tip">
        <strong>📋 Required Columns:</strong>
        <p>Import files should contain at minimum an "Order Code" or "Product Code" column. Optional columns include: Description, Quantity, Room, Notes, and Price.</p>
      </div>
    </div>
    
    <div class="guide-section">
      <h3>Troubleshooting</h3>
      
      <h4>Products not found during import?</h4>
      <p>If a product code cannot be matched to the Seima catalogue, it will still be added to your selection with placeholder information. You can manually update the details or remove the row.</p>
      
      <h4>PDF not downloading?</h4>
      <p>Some browsers (particularly on Samsung devices) may require additional permissions. Try using Chrome browser for the best experience.</p>
      
      <h4>Previous Selections not showing?</h4>
      <p>Make sure you have set your email address in Settings. Selections are filtered by the staff member who created them.</p>
      
      <h4>Data not saving?</h4>
      <p>Your work is automatically saved to your browser's local storage. For permanent cloud storage, use the "Save" button to store selections in Google Sheets.</p>
    </div>
    
    <div class="guide-section">
      <h3>Need Help?</h3>
      <p>For additional assistance or to report issues, please contact your Seima representative or email support.</p>
    </div>
    
    <div class="guide-footer">
      <div class="guide-footer-brand">
        <img src="assets/seima-logo.png" alt="Seima" class="guide-footer-logo">
        <span class="guide-footer-tagline">Build with Confidence</span>
      </div>
      <p class="guide-footer-copyright">© ${new Date().getFullYear()} Seima. All rights reserved.</p>
    </div>
  `}async function bo(){try{const d=document.getElementById("changelog-modal"),e=document.getElementById("changelog-content"),r=(await(await fetch("./version.txt")).text()).trim().split(`
`);if(r.length===0){e.innerHTML="<p>No changelog available.</p>",d.style.display="flex";return}let n="";r.forEach(s=>{if(s.trim()){const i=s.indexOf(" - ");if(i>0){const a=s.substring(0,i).trim(),c=s.substring(i+3).trim();n+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${a}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${c}</p>
            </div>
          `}}}),e.innerHTML=n||"<p>No changelog available.</p>",d.style.display="flex"}catch(d){console.error("Error loading changelog:",d),document.getElementById("changelog-content").innerHTML='<p style="color: #999;">Error loading changelog.</p>',document.getElementById("changelog-modal").style.display="flex"}}document.addEventListener("DOMContentLoaded",()=>{const d=document.getElementById("changelog-close");d&&d.addEventListener("click",()=>{document.getElementById("changelog-modal").style.display="none"})});document.addEventListener("click",d=>{const e=document.getElementById("changelog-modal");d.target===e&&(e.style.display="none")});
