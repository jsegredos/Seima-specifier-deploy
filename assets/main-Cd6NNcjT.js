import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{U as x,a as J,b as X,c as be}from"./auth-ui-CY54VKXI.js";import{g as lt,l as Et}from"./product-synonyms-iJFplttQ.js";import{C as U}from"./config-DMvT82bZ.js";import{g as et,p as ut,d as Pt,P as tt,c as Ct,h as It,a as Rt,b as kt,e as Lt,f as Dt,i as Tt,j as Bt,k as At,l as Nt}from"./pdf-layouts-8nByhigc.js";import{c as $}from"./competitor-service-DxbWbt1L.js";const P={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error",CRITICAL:"critical"},B={NETWORK:"network",DATA:"data",UI:"ui",PDF:"pdf",STORAGE:"storage",COMPATIBILITY:"compatibility",IMPORT:"import",VALIDATION:"validation"};class $t{constructor(){this.logs=[],this.maxLogs=1e3,this.enableConsoleLogging=!0,this.enableUserNotifications=!0,this.errorStats=new Map,this.setupGlobalErrorHandlers()}setupGlobalErrorHandlers(){window.addEventListener("error",e=>{var t;e.message&&e.message.includes("ResizeObserver")||this.handleError({message:e.message,filename:e.filename,lineNumber:e.lineno,columnNumber:e.colno,error:e.error,category:B.UI,context:"global",showUser:!((t=e.message)!=null&&t.includes("ResizeObserver"))})}),window.addEventListener("unhandledrejection",e=>{String(e.reason||"").includes("ResizeObserver")||this.handleError({message:`Unhandled promise rejection: ${e.reason}`,error:e.reason,category:B.DATA,context:"promise"})})}handleError(e){const{message:t,error:o,category:s=B.UI,context:n="unknown",level:r=P.ERROR,showUser:i=!0}=e,a={id:this.generateErrorId(),timestamp:new Date().toISOString(),message:t,category:s,context:n,level:r,stack:(o==null?void 0:o.stack)||new Error().stack,userAgent:navigator.userAgent,url:window.location.href,additionalInfo:this.gatherAdditionalInfo(o)};return this.log(a),this.updateErrorStats(s),i&&this.enableUserNotifications&&r!==P.DEBUG&&this.showUserNotification(a),r===P.CRITICAL&&this.attemptRecovery(a),a.id}log(e,t=P.INFO){const o=typeof e=="string"?{message:e,level:t,timestamp:new Date().toISOString()}:e;this.logs.push(o),this.logs.length>this.maxLogs&&this.logs.shift(),this.enableConsoleLogging&&this.consoleLog(o),(t===P.ERROR||t===P.CRITICAL)&&this.persistCriticalLog(o)}consoleLog(e){const{level:t,message:o,category:s,context:n}=e,r=`[${t.toUpperCase()}]${s?` [${s}]`:""}${n?` [${n}]`:""}`;switch(t){case P.DEBUG:console.debug(r,o,e);break;case P.INFO:console.info(r,o);break;case P.WARN:console.warn(r,o,e);break;case P.ERROR:case P.CRITICAL:console.error(r,o,e);break;default:console.log(r,o)}}showUserNotification(e){const{message:t,category:o,level:s}=e,n=this.generateUserFriendlyMessage(t,o);s!==P.CRITICAL?this.showToast(n,s):this.showErrorModal(n,e)}showToast(e,t){const o=document.createElement("div");o.className=`error-toast error-toast--${t}`,o.style.cssText=`
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
      background: ${t===P.ERROR?"#fee":t===P.WARN?"#fef3c7":"#e0f2fe"};
      border-left: 4px solid ${t===P.ERROR?"#dc2626":t===P.WARN?"#f59e0b":"#0ea5e9"};
      color: ${t===P.ERROR?"#7f1d1d":t===P.WARN?"#92400e":"#0c4a6e"};
    `,o.innerHTML=`
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <span style="font-size: 16px;">${t===P.ERROR?"❌":t===P.WARN?"⚠️":"ℹ️"}</span>
        <div style="flex: 1;">${e}</div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none; border: none; font-size: 18px; cursor: pointer; 
          color: inherit; opacity: 0.7; padding: 0; margin-left: 8px;
        ">×</button>
      </div>
    `,document.body.appendChild(o),setTimeout(()=>o.style.transform="translateX(0)",100);const s=t===P.ERROR?8e3:5e3;setTimeout(()=>{o.parentElement&&(o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300))},s)}showErrorModal(e,t){const o=document.createElement("div");o.style.cssText=`
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
    `,document.body.appendChild(o)}generateUserFriendlyMessage(e,t){return{[B.NETWORK]:"Unable to connect to the server. Please check your internet connection and try again.",[B.DATA]:"There was an issue loading product data. The page will retry automatically.",[B.PDF]:"PDF generation failed. Please try again or contact support if the problem persists.",[B.STORAGE]:"Unable to save your data locally. Please ensure you have enough storage space.",[B.IMPORT]:"File import failed. Please check your file format and try again.",[B.VALIDATION]:"Please check your input and try again.",[B.COMPATIBILITY]:"Your browser may not support all features. Consider updating to a newer version.",[B.UI]:"A display issue occurred. This usually resolves automatically."}[t]||"An unexpected error occurred. Please try refreshing the page."}gatherAdditionalInfo(e){var t;return{timestamp:Date.now(),memoryUsage:performance.memory?{used:Math.round(performance.memory.usedJSHeapSize/1024/1024),total:Math.round(performance.memory.totalJSHeapSize/1024/1024),limit:Math.round(performance.memory.jsHeapSizeLimit/1024/1024)}:null,viewport:{width:window.innerWidth,height:window.innerHeight},localStorage:this.getStorageInfo(),errorType:(t=e==null?void 0:e.constructor)==null?void 0:t.name,hasNetworkConnection:navigator.onLine}}getStorageInfo(){try{const e=Object.keys(localStorage),t=e.reduce((o,s)=>o+localStorage.getItem(s).length,0);return{itemCount:e.length,totalSize:Math.round(t/1024),available:!0}}catch{return{available:!1}}}generateErrorId(){return`err_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}updateErrorStats(e){const t=this.errorStats.get(e)||0;this.errorStats.set(e,t+1)}attemptRecovery(e){const{category:t}=e;switch(this.log(`Attempting recovery for critical ${t} error`,P.INFO),t){case B.STORAGE:this.recoverStorage();break;case B.DATA:this.recoverData();break;default:this.log("No specific recovery strategy available",P.WARN)}}recoverStorage(){try{["logs","cache","temp"].forEach(t=>{localStorage.getItem(t)&&(localStorage.removeItem(t),this.log(`Cleared ${t} from storage for recovery`,P.INFO))})}catch{this.log("Storage recovery failed",P.ERROR)}}recoverData(){try{window.dataLayer&&typeof window.dataLayer.init=="function"&&(window.dataLayer.init(),this.log("Attempting data layer recovery",P.INFO))}catch{this.log("Data recovery failed",P.ERROR)}}persistCriticalLog(e){try{const t=JSON.parse(localStorage.getItem("criticalLogs")||"[]");t.push(e),t.length>50&&t.splice(0,t.length-50),localStorage.setItem("criticalLogs",JSON.stringify(t))}catch{}}getErrorStats(){return{totalLogs:this.logs.length,categoryBreakdown:Object.fromEntries(this.errorStats),recentErrors:this.logs.filter(e=>e.level===P.ERROR||e.level===P.CRITICAL).slice(-10)}}exportLogs(){return JSON.stringify({logs:this.logs,stats:this.getErrorStats(),exportTime:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href},null,2)}clearLogs(){this.logs=[],this.errorStats.clear(),localStorage.removeItem("criticalLogs"),this.log("Logs cleared",P.INFO)}}const _=new $t;window.errorHandler=_;const oe={DEVELOPMENT:"development",STAGING:"staging",PRODUCTION:"production"},Ee={app:{name:{type:"string",default:"Seima Product Presenter",required:!0},version:{type:"string",default:"1.9.2",required:!0},environment:{type:"string",default:oe.PRODUCTION,enum:Object.values(oe)},debug:{type:"boolean",default:!1},buildDate:{type:"string",default:()=>new Date().toISOString()}},api:{catalogUrl:{type:"string",default:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRnMqBCqB9L52W6YNgreLHJKvxOanS76CJN8ZUorBl8Iccha6MzUpDkGa0N8GSYFPP2zyql1Tq6aBn8/pub?gid=0&single=true&output=csv",required:!0},timeout:{type:"number",default:3e4,min:5e3,max:12e4},retryAttempts:{type:"number",default:3,min:1,max:10},retryDelay:{type:"number",default:1e3,min:500,max:1e4}},storage:{keys:{type:"object",default:{customRooms:"customRooms",selectedProducts:"selectedProducts",productCatalog:"productCatalog",userPreferences:"userPreferences",roomAssignments:"roomAssignments",criticalLogs:"criticalLogs"}},maxSize:{type:"number",default:5*1024*1024},compressionEnabled:{type:"boolean",default:!0}},ui:{theme:{type:"string",default:"light",enum:["light","dark","auto"]},language:{type:"string",default:"en-AU"},animationsEnabled:{type:"boolean",default:!0},annotationMaxLength:{type:"number",default:140,min:50,max:500},quantityOptions:{type:"array",default:[1,2,3,4,5,6,7,8,9,10]},autoSaveInterval:{type:"number",default:3e4,min:1e4,max:3e5},maxSearchResults:{type:"number",default:8,min:5,max:50}},rooms:{predefined:{type:"array",default:[{name:"Bath 1",icon:"🛁",category:"bathroom"},{name:"Bath 2",icon:"🛁",category:"bathroom"},{name:"Bath 3",icon:"🛁",category:"bathroom"},{name:"Ensuite",icon:"🚿",category:"bathroom"},{name:"Powder",icon:"🚽",category:"bathroom"},{name:"Kitchen",icon:"🍽️",category:"kitchen"},{name:"Butlers",icon:"👨‍🍳",category:"kitchen"},{name:"Laundry",icon:"🧺",category:"utility"},{name:"Alfresco",icon:"🍽️",category:"outdoor"},{name:"Standard",icon:"📦",category:"package"},{name:"Upgrade",icon:"⭐",category:"package"}]},maxCustomRooms:{type:"number",default:20,min:5,max:100}},import:{maxFileSize:{type:"number",default:10*1024*1024},acceptedTypes:{type:"array",default:[".csv",".xlsx",".xls",".json"]},requiredColumns:{type:"array",default:["OrderCode"]},optionalColumns:{type:"array",default:["Description","RRP_INCGST","Image_URL","Room","Quantity","Notes"]},batchSize:{type:"number",default:100,min:10,max:1e3},allowDuplicates:{type:"boolean",default:!1},productCodeValidation:{type:"object",default:{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1}},columnPatterns:{type:"object",default:{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location","group"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}}},pdf:{format:{type:"string",default:"A4",enum:["A4","Letter","A3"]},orientation:{type:"string",default:"portrait",enum:["portrait","landscape"]},quality:{type:"number",default:1,min:.1,max:2},maxFileSize:{type:"number",default:50*1024*1024},includeImages:{type:"boolean",default:!0},imageCompression:{type:"number",default:.8,min:.1,max:1},watermark:{type:"boolean",default:!1},fonts:{type:"object",default:{primary:"SF Pro Display, Segoe UI, Arial, sans-serif",monospace:"Menlo, Monaco, Consolas, monospace"}}},email:{serviceId:{type:"string",default:"service_rblizfg",required:!0},templateId:{type:"string",default:"template_8st9fhk",required:!0},publicKey:{type:"string",default:"MHAEjvnc_xx8DIRCA",required:!0},maxAttachmentSize:{type:"number",default:15*1024*1024},retryAttempts:{type:"number",default:3,min:1,max:5},retryDelay:{type:"number",default:2e3,min:1e3,max:1e4},bccEmail:{type:"string",default:"jsegredos@gmail.com"}},compatibility:{minChromeVersion:{type:"number",default:80,min:60},minFirefoxVersion:{type:"number",default:75,min:60},minSafariVersion:{type:"number",default:13,min:10},requiredFeatures:{type:"array",default:["localStorage","fileReader","blob","createObjectURL","fetch"]},minCompatibilityScore:{type:"number",default:70,min:50,max:100},memoryWarningThreshold:{type:"number",default:.8,min:.5,max:1},enableSamsungOptimisations:{type:"boolean",default:!0},enableExtendedTimeouts:{type:"boolean",default:!0}},performance:{maxProductsPerSession:{type:"number",default:1e3,min:100,max:1e4},imageCacheSize:{type:"number",default:100,min:50,max:500},virtualScrollThreshold:{type:"number",default:100,min:50,max:1e3},debounceDelay:{type:"number",default:300,min:100,max:1e3},batchUpdateSize:{type:"number",default:50,min:10,max:200}},logging:{maxLogs:{type:"number",default:1e3,min:100,max:1e4},persistCriticalLogs:{type:"boolean",default:!0},enableConsoleLogging:{type:"boolean",default:!0},enableUserNotifications:{type:"boolean",default:!0},logLevel:{type:"string",default:"info",enum:["debug","info","warn","error","critical"]}}};class Ft{constructor(){this.config={},this.validators=new Map,this.listeners=new Map,this.environment=this.detectEnvironment(),this.initializeConfig(),this.setupValidators()}detectEnvironment(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.port!==""?oe.DEVELOPMENT:window.location.hostname.includes("staging")||window.location.hostname.includes("test")?oe.STAGING:oe.PRODUCTION}initializeConfig(){this.config=this.buildDefaultConfig(Ee),this.applyEnvironmentOverrides(),this.loadUserPreferences(),this.validateConfig(),_.log(`Configuration initialized for ${this.environment} environment`,P.INFO)}buildDefaultConfig(e){const t={};for(const[o,s]of Object.entries(e))s&&typeof s=="object"&&s.type==="object"&&!s.default?t[o]=this.buildDefaultConfig(s):s&&typeof s=="object"&&!s.type&&!s.default?t[o]=this.buildDefaultConfig(s):s&&s.default!==void 0&&(t[o]=typeof s.default=="function"?s.default():s.default);return t}applyEnvironmentOverrides(){switch(this.config.app||(this.config.app={}),this.config.logging||(this.config.logging={}),this.config.api||(this.config.api={}),this.config.pdf||(this.config.pdf={}),this.environment){case oe.DEVELOPMENT:this.config.app.debug=!0,this.config.logging.logLevel="debug",this.config.logging.enableConsoleLogging=!0,this.config.api.timeout=6e4;break;case oe.STAGING:this.config.app.debug=!0,this.config.logging.logLevel="info",this.config.pdf.watermark=!0;break;case oe.PRODUCTION:this.config.app.debug=!1,this.config.logging.logLevel="warn",this.config.logging.enableConsoleLogging=!1;break}}loadUserPreferences(){try{const e=JSON.parse(localStorage.getItem("configPreferences")||"{}");this.applyUserPreferences(e)}catch(e){_.handleError({message:"Failed to load user preferences",error:e,category:B.STORAGE,level:P.WARN})}}applyUserPreferences(e){for(const[t,o]of Object.entries(e))try{this.setConfigValue(t,o,!1)}catch(s){_.handleError({message:`Invalid user preference: ${t}`,error:s,category:B.VALIDATION,level:P.WARN})}}setupValidators(){this.validators.set("url",e=>{try{return new URL(e),!0}catch{return!1}}),this.validators.set("email",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)),this.validators.set("positive",e=>typeof e=="number"&&e>0)}get(e,t=void 0){const o=e.split(".");let s=this.config;for(const n of o)if(s&&typeof s=="object"&&n in s)s=s[n];else return t;return s}set(e,t,o=!0){this.setConfigValue(e,t,o)}setConfigValue(e,t,o){if(!this.validateConfigPath(e,t))throw new Error(`Invalid configuration value for ${e}: ${t}`);const s=e.split(".");let n=this.config;for(let a=0;a<s.length-1;a++){const c=s[a];(!(c in n)||typeof n[c]!="object")&&(n[c]={}),n=n[c]}const r=s[s.length-1],i=n[r];n[r]=t,this.notifyListeners(e,t,i),o&&this.persistUserPreference(e,t),_.log(`Configuration updated: ${e} = ${JSON.stringify(t)}`,P.DEBUG)}validateConfigPath(e,t){const o=this.getSchemaForPath(e);return o?this.validateValue(t,o):!0}getSchemaForPath(e){const t=e.split(".");let o=Ee;for(const s of t)if(o&&typeof o=="object"&&s in o)o=o[s];else return null;return o}validateValue(e,t){return t.type&&(t.type==="array"&&!Array.isArray(e)||t.type!=="array"&&typeof e!==t.type)||t.enum&&!t.enum.includes(e)||typeof e=="number"&&(t.min!==void 0&&e<t.min||t.max!==void 0&&e>t.max)||typeof e=="string"&&(t.minLength&&e.length<t.minLength||t.maxLength&&e.length>t.maxLength)||Array.isArray(e)&&(t.minItems&&e.length<t.minItems||t.maxItems&&e.length>t.maxItems)?!1:t.validator&&this.validators.has(t.validator)?this.validators.get(t.validator)(e):!0}validateConfig(){const e=[];this.validateConfigSection(this.config,Ee,"",e),e.length>0&&_.handleError({message:`Configuration validation errors: ${e.join(", ")}`,category:B.VALIDATION,level:P.WARN})}validateConfigSection(e,t,o,s){for(const[n,r]of Object.entries(t)){const i=o?`${o}.${n}`:n,a=e[n];if(r.required&&a==null){s.push(`Missing required config: ${i}`);continue}a!==void 0&&(r.type==="object"&&!r.default?this.validateConfigSection(a,r,i,s):this.validateValue(a,r)||s.push(`Invalid config value: ${i}`))}}persistUserPreference(e,t){try{const o=JSON.parse(localStorage.getItem("configPreferences")||"{}");o[e]=t,localStorage.setItem("configPreferences",JSON.stringify(o))}catch(o){_.handleError({message:"Failed to persist user preference",error:o,category:B.STORAGE,level:P.WARN})}}addListener(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{const o=this.listeners.get(e);o&&(o.delete(t),o.size===0&&this.listeners.delete(e))}}notifyListeners(e,t,o){const s=this.listeners.get(e);s&&s.forEach(n=>{try{n(t,o,e)}catch(r){_.handleError({message:"Configuration listener error",error:r,category:B.UI,level:P.WARN})}});for(const[n,r]of this.listeners)if(n.endsWith("*")){const i=n.slice(0,-1);e.startsWith(i)&&r.forEach(a=>{try{a(t,o,e)}catch(c){_.handleError({message:"Configuration wildcard listener error",error:c,category:B.UI,level:P.WARN})}})}}reset(e){if(e){const t=this.getSchemaForPath(e);if(t&&t.default!==void 0){const o=typeof t.default=="function"?t.default():t.default;this.set(e,o)}}else this.config=this.buildDefaultConfig(Ee),this.applyEnvironmentOverrides(),localStorage.removeItem("configPreferences"),this.validateConfig();_.log(`Configuration reset: ${e||"all"}`,P.INFO)}getEnvironment(){return this.environment}isDevelopment(){return this.environment===oe.DEVELOPMENT}isProduction(){return this.environment===oe.PRODUCTION}export(){return{config:this.config,environment:this.environment,schema:Ee,exportTime:new Date().toISOString()}}getSummary(){return{environment:this.environment,version:this.get("app.version"),debug:this.get("app.debug"),totalSettings:this.countConfigSettings(this.config),customPreferences:Object.keys(JSON.parse(localStorage.getItem("configPreferences")||"{}")).length}}countConfigSettings(e){let t=0;for(const o of Object.values(e))typeof o=="object"&&o!==null&&!Array.isArray(o)?t+=this.countConfigSettings(o):t++;return t}}const R=new Ft,Ot=new Proxy({},{get(u,e){return R.get(e.toString())},set(u,e,t){return R.set(e.toString(),t),!0}});window.config=R;window.CONFIG=Ot;class b{static getCustomRooms(){return x.getStorageItem(R.get("storage.keys.customRooms"),[])}static setCustomRooms(e){return x.setStorageItem(R.get("storage.keys.customRooms"),e)}static addCustomRoom(e){const t=this.getCustomRooms(),o=x.sanitizeInput(e,50);return!o||[...R.get("rooms.predefined",[]).map(r=>r.name),...t.map(r=>r.name)].includes(o)?!1:(t.push({name:o}),this.setCustomRooms(t))}static removeCustomRoom(e){const t=this.getCustomRooms();return e>=0&&e<t.length?(t.splice(e,1),this.setCustomRooms(t)):!1}static getSelectedProducts(){return x.getStorageItem(R.get("storage.keys.selectedProducts"),[])}static setSelectedProducts(e){return x.setStorageItem(R.get("storage.keys.selectedProducts"),e)}static addProductToSelection(e,t,o,s){try{const n=this.getSelectedProducts(),r=R.get("ui.annotationMaxLength",140),i={id:x.generateId(),product:x.deepClone(e),notes:x.sanitizeInput(t,r),room:x.sanitizeInput(o,50),quantity:Math.max(1,parseInt(s)||1),timestamp:Date.now()};return n.push(i),this.setSelectedProducts(n)?(_.log(`Product added to selection: ${e.OrderCode}`,P.DEBUG),i.id):(_.handleError({message:"Failed to save product to selection",category:B.STORAGE,level:P.WARN}),!1)}catch(n){return _.handleError({message:"Error adding product to selection",error:n,category:B.STORAGE,level:P.ERROR}),!1}}static updateProductQuantity(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].quantity=Math.max(1,parseInt(t)||1),this.setSelectedProducts(o)):!1}static updateProductRoom(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].room=x.sanitizeInput(t,50),this.setSelectedProducts(o)):!1}static updateProductNotes(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].notes=x.sanitizeInput(t,R.get("ui.annotationMaxLength",140)),this.setSelectedProducts(o)):!1}static updateProductPrice(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s].product.UserEditedPrice=t,this.setSelectedProducts(o)):!1}static removeProductFromSelection(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this.setSelectedProducts(o)}static clearAllSelections(){return this.setSelectedProducts([])&&this.setCustomRooms([])}static getSelectionCount(){return this.getSelectedProducts().length}static getUserSettings(){return x.getStorageItem(R.get("storage.keys.userPreferences"),{})}static saveUserSettings(e){return x.setStorageItem(R.get("storage.keys.userPreferences"),e)}static clearUserSettings(){try{return localStorage.removeItem(R.get("storage.keys.userPreferences")),!0}catch(e){return console.error("Error clearing user settings:",e),!1}}}class _t{constructor(){this.products=[],this.isLoaded=!1,this.searchIndex=new Map}async init(){try{return await this.loadProductCatalog(),this.buildSearchIndex(),console.log("✅ Data Layer initialized"),!0}catch(e){return console.error("❌ Failed to initialize Data Layer:",e),!1}}async loadProductCatalog(){try{console.log("📦 Loading product catalog...");const e=localStorage.getItem("productCatalogCsv");let t=[];e&&(t=this.parseCSV(e),this.products=t,this.isLoaded=!0,console.log(`⚡ Loaded ${t.length} products from cache`));const o=R.get("api.catalogUrl"),s=`${o+(o.includes("?")?"&":"?")}t=${Date.now()}`,n=new AbortController,r=setTimeout(()=>n.abort(),15e3);return fetch(s,{signal:n.signal,mode:"cors",cache:"no-cache"}).then(i=>(clearTimeout(r),i.ok?i.text():Promise.reject(`Failed to fetch catalog: ${i.status}`))).then(i=>{if(!e||i!==e){localStorage.setItem("productCatalogCsv",i);const a=this.parseCSV(i);JSON.stringify(a)!==JSON.stringify(t)&&(this.products=a,this.isLoaded=!0,console.log("🔄 New catalog loaded, reloading app..."),window.location.reload())}}).catch(i=>{clearTimeout(r),i.name==="AbortError"?console.warn("🕐 Background catalog update timed out (using cached data)"):console.warn("⚠️ Background catalog update failed (using cached data):",i.message)}),t}catch(e){throw console.error("❌ Failed to load product catalog:",e),e}}parseCSV(e){const t=this.parseCSVRows(e);if(t.length===0)return[];const o=t[0].map(n=>n.replace(/[\r\n]+\s*/g," ").trim()),s=[];for(let n=1;n<t.length;n++){const r=t[n];if(!(r.length===0||r.length===1&&!r[0].trim()))try{if(r.length>=o.length){const i={};o.forEach((d,l)=>{i[d]=r[l]||""}),i.Group=i.Group||"",i["Product Name"]=i["Product Name"]||i.Description||"",i.Description=i.Description||i["Product Name"]||"",i["Long Description"]=i["Long Description"]||i.LongDescription||"",i.OrderCode=i["Order Code"]||i.OrderCode||"",i["RRP EX GST"]=i["RRP EX"]||i["RRP EX GST"]||i.RRP_EXGST||"",i.RRP_EX=i["RRP EX"]||i["RRP EX GST"]||i.RRP_EXGST||i.RRP_EX||"",i["RRP INC GST"]=i["RRP INC GST"]||i.RRP_INCGST||"",i.RRP_INCGST=i["RRP INC GST"]||i.RRP_INCGST||i.RRP_INCGST||"",i["Release Note"]=i["Release Note"]||"",i.Website_URL=i.Website_URL||"";const a=i.Image_URL||"";i.Image_URL=a&&a.length>10&&(a.startsWith("http://")||a.startsWith("https://"))?a:"";const c=i.Diagram_URL||"";i.Diagram_URL=c&&c.length>10&&(c.startsWith("http://")||c.startsWith("https://"))?c:"",i.Datasheet_URL=i.Datasheet_URL||"",i.BARCODE=i.BARCODE||"",i["X Dimension (mm)"]=i["X Dimension (mm)"]||"",i["Y Dimension (mm)"]=i["Y Dimension (mm)"]||"",i["Z Dimension (mm)"]=i["Z Dimension (mm)"]||"",i.WEIGHT=i.WEIGHT||"",i["WELS NO"]=i["WELS NO"]||"",i["WELS STAR"]=i["WELS STAR"]||"",i["WELS CONSUMPTION"]=i["WELS CONSUMPTION"]||"",i["WELS Expiry"]=i["WELS Expiry"]||"",i.WATERMARK=i.WATERMARK||"",i.OrderCode&&i.OrderCode.trim()&&s.push(i)}}catch(i){console.warn(`Skipping invalid CSV line ${n+1}:`,i)}}return s}parseCSVRows(e){const t=[];let o=[],s="",n=!1;for(let r=0;r<e.length;r++){const i=e[r],a=e[r+1];i==='"'?n&&a==='"'?(s+='"',r++):n=!n:i===","&&!n?(o.push(s),s=""):(i==="\r"||i===`
`)&&!n?(i==="\r"&&a===`
`&&r++,o.push(s),o.length>0&&o.some(c=>c.trim())&&t.push(o),o=[],s=""):s+=i}return(s||o.length>0)&&(o.push(s),o.some(r=>r.trim())&&t.push(o)),t}parseCSVLine(e){const t=[];let o="",s=!1;for(let n=0;n<e.length;n++){const r=e[n];r==='"'?s&&e[n+1]==='"'?(o+='"',n++):s=!s:r===","&&!s?(t.push(o),o=""):o+=r}return t.push(o),t}buildSearchIndex(){console.log("🔍 Building search index..."),this.searchIndex.clear(),this.products.forEach((t,o)=>{t.OrderCode&&(this.searchIndex.set(t.OrderCode.toLowerCase(),o),this.searchIndex.set(t.OrderCode.toLowerCase().replace(/[-\s]/g,""),o)),t.BARCODE&&t.BARCODE.trim()&&(this.searchIndex.set(t.BARCODE.toLowerCase(),o),this.searchIndex.set(t.BARCODE.toLowerCase().replace(/[-\s]/g,""),o)),t.Description&&t.Description.toLowerCase().split(/\s+/).forEach(n=>{if(n.length>2){this.searchIndex.has(n)||this.searchIndex.set(n,[]);const r=this.searchIndex.get(n);Array.isArray(r)&&r.push(o)}})});const e=this.products.filter(t=>t.BARCODE&&t.BARCODE.trim()).length;console.log(`✅ Search index built with ${this.searchIndex.size} entries (${e} barcodes indexed)`)}findProductByCode(e){if(!e)return null;const t=e.toLowerCase().trim(),o=this.searchIndex.get(t)||this.searchIndex.get(t.replace(/[-\s]/g,"")),s=typeof o=="number"?this.products[o]:null;return e.length>8&&console.log(`🔍 Barcode search for "${e}": ${s?"FOUND":"NOT FOUND"} ${s?`(${s.OrderCode} - ${s.Description})`:""}`),s}searchProducts(e,t=50){if(!e||e.length<2)return[];const o=e.toLowerCase().trim().split(/\s+/).filter(n=>n.length>=2);if(o.length===0)return[];const s=[];for(const n of this.products){const r=o.map(a=>this.calculateSearchScore(n,a));if(r.some(a=>a===0))continue;const i=r.reduce((a,c)=>a+c,0)/r.length;s.push({product:n,score:i})}return s.sort((n,r)=>r.score-n.score),s.slice(0,t).map(n=>n.product)}calculateSearchScore(e,t){let o=0;const s=(e.OrderCode||"").toString().toLowerCase().trim(),n=(e.BARCODE||e.Barcode||"").toString().toLowerCase().trim(),r=(e["Product Name"]||e.ProductName||"").toString().toLowerCase().trim(),i=(e.Description||"").toString().toLowerCase().trim(),a=(e["Long Description"]||e.LongDescription||"").toString().toLowerCase().trim(),c=(e.Range||"").toString().toLowerCase().trim(),d=(e.Group||"").toString().toLowerCase().trim(),l=(e.SubGroup||e.Subgroup||"").toString().toLowerCase().trim(),p=(e.Finish||"").toString().toLowerCase().trim(),h=(e.Colour||e.Color||"").toString().toLowerCase().trim(),f=/^\d+$/.test(t),y=lt(t);if(y.some(g=>g!==t)){const g=[r,i,d,l,c,a].join(" ");for(const S of y)if(g.includes(S)){o=Math.max(o,45);break}}return s===t||n===t?100:(s.includes(t)&&(o=Math.max(o,90)),!f&&n.includes(t)&&(o=Math.max(o,90)),r===t?o=Math.max(o,80):r.startsWith(t)?o=Math.max(o,70):r.includes(t)&&(o=Math.max(o,60)),(c.includes(t)||d.includes(t)||l.includes(t))&&(o=Math.max(o,50)),i.includes(t)&&(o=Math.max(o,40)),(p.includes(t)||h.includes(t))&&(o=Math.max(o,30)),a.includes(t)&&(o=Math.max(o,20)),o)}getAllProducts(){return[...this.products]}getProductsByCategory(e){return this.products.filter(t=>t.Category&&t.Category.toLowerCase().includes(e.toLowerCase()))}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(R.get("storage.keys.selectedProducts"))||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1,id:this.generateSelectionId()}))}addProductToSelection(e,t="",o="",s=1){const n=this.getSelectedProducts(),r={id:this.generateSelectionId(),product:{...e},room:t,notes:o,quantity:Math.max(1,parseInt(s)||1)};return n.push(r),this.saveSelectedProducts(n),console.log(`✅ Added ${e.OrderCode} to selection`),r}removeProductFromSelection(e){const o=this.getSelectedProducts().filter(s=>s.id!==e);return this.saveSelectedProducts(o),console.log("✅ Removed product from selection"),o}updateSelectionItem(e,t){const o=this.getSelectedProducts(),s=o.findIndex(n=>n.id===e);return s!==-1?(o[s]={...o[s],...t},this.saveSelectedProducts(o),console.log("✅ Updated selection item"),o[s]):null}clearSelection(){localStorage.removeItem("selection"),localStorage.removeItem(R.get("storage.keys.selectedProducts")),console.log("✅ Selection cleared")}saveSelectedProducts(e){localStorage.setItem(R.get("storage.keys.selectedProducts"),JSON.stringify(e));const t=e.map(o=>({...o.product,Room:o.room,Notes:o.notes,Quantity:o.quantity}));localStorage.setItem("selection",JSON.stringify(t))}generateSelectionId(){return`sel_${Date.now()}_${Math.random().toString(36).substr(2,9)}`}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,o=new Set(e.map(r=>r.room).filter(Boolean)),s=o.size||1;let n=0;return e.forEach(r=>{var c;const i=parseFloat((((c=r.product)==null?void 0:c.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,a=r.quantity||1;n+=i*a}),{totalProducts:t,totalRooms:s,totalValue:n,hasProducts:t>0,rooms:Array.from(o)}}getProductsByRoom(){const e=this.getSelectedProducts(),t={};return e.forEach(o=>{const s=o.room||"Unassigned";t[s]||(t[s]=[]),t[s].push(o)}),t}validateProduct(e){return["OrderCode","Description"].every(o=>e[o]&&e[o].trim())}validateSelection(){const e=this.getSelectedProducts(),t=[];return e.forEach((o,s)=>{this.validateProduct(o.product)||t.push(`Product ${s+1}: Missing required fields`),(!o.quantity||o.quantity<1)&&t.push(`Product ${s+1}: Invalid quantity`)}),{isValid:t.length===0,issues:t}}exportSelectionData(){const e=this.getSelectedProducts(),t=this.getSelectionSummary();return{selection:e,summary:t,exportDate:new Date().toISOString(),version:"1.0"}}importSelectionData(e){try{if(e.selection&&Array.isArray(e.selection))return this.saveSelectedProducts(e.selection),console.log(`✅ Imported ${e.selection.length} products`),!0;throw new Error("Invalid selection data format")}catch(t){return console.error("❌ Failed to import selection data:",t),!1}}}const A=new _t;class Ut{constructor(){this.doc=null,this.pageWidth=210,this.pageHeight=297,this.margins={left:10,right:10,top:15,bottom:15},this.currentY=this.margins.top}async init(){try{return window.jsPDF||await this.loadJsPDF(),console.log("✅ PDF Core initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Core:",e),!1}}async loadJsPDF(){return new Promise((e,t)=>{if(window.jsPDF){e();return}const o=document.createElement("script");o.src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js",o.onload=e,o.onerror=t,document.head.appendChild(o)})}createDocument(){return this.doc=new window.jsPDF({orientation:"portrait",unit:"mm",format:"a4"}),this.currentY=this.margins.top,this.doc}addNewPage(){this.doc.addPage(),this.currentY=this.margins.top}checkPageSpace(e){const t=this.pageHeight-this.margins.bottom;return this.currentY+e>t?(this.addNewPage(),!0):!1}addText(e,t,o,s={}){const{fontSize:n=10,fontStyle:r="normal",align:i="left",maxWidth:a=null}=s;if(this.doc.setFontSize(n),this.doc.setFont("helvetica",r),a){const c=this.doc.splitTextToSize(e,a);return this.doc.text(c,t,o,{align:i}),c.length*(n*.35)}else return this.doc.text(e,t,o,{align:i}),n*.35}addLine(e,t,o,s,n="#000000",r=.1){this.doc.setDrawColor(n),this.doc.setLineWidth(r),this.doc.line(e,t,o,s)}addRect(e,t,o,s,n="S",r="#000000"){this.doc.setDrawColor(r),this.doc.rect(e,t,o,s,n)}async addImage(e,t,o,s,n){return new Promise(r=>{if(!e||e==="N/A"){r({width:0,height:0});return}const i=new Image;i.crossOrigin="anonymous",i.onload=()=>{try{const a=document.createElement("canvas"),c=a.getContext("2d"),d=i.width/i.height;let l=s,p=s/d;p>n&&(p=n,l=n*d),a.width=l,a.height=p,c.drawImage(i,0,0,l,p);const h=this.detectTechnicalImage(i),f=h?.8:.7,y=h?"PNG":"JPEG",w=a.toDataURL(`image/${y.toLowerCase()}`,f);this.doc.addImage(w,y,t,o,l,p,void 0,"FAST"),r({width:l,height:p})}catch(a){console.warn("Failed to add image:",a),r({width:0,height:0})}},i.onerror=()=>{console.warn("Failed to load image:",e),r({width:0,height:0})},i.src=e})}getContentWidth(){return this.pageWidth-this.margins.left-this.margins.right}getContentHeight(){return this.pageHeight-this.margins.top-this.margins.bottom}detectTechnicalImage(e){const t=document.createElement("canvas"),o=t.getContext("2d"),s=Math.min(50,Math.min(e.width,e.height));t.width=s,t.height=s,o.drawImage(e,0,0,s,s);const r=o.getImageData(0,0,s,s).data,i=new Set;let a=0;for(let p=0;p<r.length;p+=4){const h=r[p],f=r[p+1],y=r[p+2];if(i.add(`${h},${f},${y}`),p>0&&p<r.length-4){const w=r[p-4],g=r[p-3],S=r[p-2];Math.abs(h-w)+Math.abs(f-g)+Math.abs(y-S)>50&&a++}}const c=i.size<500,d=a>s*s*.1,l=e.width<800&&e.height<800;return c||d||l}moveY(e){this.currentY+=e}getCurrentY(){return this.currentY}setCurrentY(e){this.currentY=e}getRemainingPageHeight(){return this.pageHeight-this.margins.bottom-this.currentY}isValidUrl(e){if(!e||typeof e!="string")return!1;try{return new URL(e),!0}catch{return!1}}formatPrice(e){if(!e||e==="N/A")return"";const t=parseFloat(e.toString().replace(/[^0-9.]/g,""));return t>0?`$${t.toFixed(2)}`:""}formatText(e,t=50){return e?e.length>t?`${e.substring(0,t-3)}...`:e:""}async finalize(){if(!this.doc)throw new Error("No document created");return this.doc.output("blob")}getDocument(){return this.doc}}const Ye=new Ut;class Mt{constructor(e){this.core=e||Ye}async addHeader(e){this.core.getDocument();const t=this.core.pageWidth,o=this.core.margins;this.core.addText("SEIMA",o.left,25,{fontSize:20,fontStyle:"bold"}),this.core.addText("Product Selection Report",t/2,25,{fontSize:16,fontStyle:"bold",align:"center"});const s=new Date().toLocaleDateString("en-AU");this.core.addText(s,t-o.right,25,{fontSize:10,align:"right"}),this.core.addLine(o.left,30,t-o.right,30,"#cccccc"),this.core.setCurrentY(35)}async addCustomerInfo(e){this.core.getDocument();const t=this.core.margins,o=this.core.getContentWidth();this.core.addText("Customer Information",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const s=t.left,n=t.left+o/2;let r=this.core.getCurrentY();if(e.name&&e.name.trim()&&(this.core.addText(`Customer: ${e.name.trim()}`,s,r,{fontSize:10}),r+=5),e.project&&e.project.trim()&&(this.core.addText(`Project: ${e.project.trim()}`,s,r,{fontSize:10}),r+=5),r=this.core.getCurrentY(),e.email&&e.email.trim()&&(this.core.addText(`Email: ${e.email.trim()}`,n,r,{fontSize:10}),r+=5),e.phone&&e.phone.trim()&&(this.core.addText(`Phone: ${e.phone.trim()}`,n,r,{fontSize:10}),r+=5),e.address&&e.address.trim()){this.core.setCurrentY(r+2);const i=this.core.addText(`Address: ${e.address.trim()}`,s,this.core.getCurrentY(),{fontSize:10,maxWidth:o-20});this.core.moveY(i)}this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(5)}async addSelectionSummary(e){const t=this.core.margins;this.core.addText("Selection Summary",t.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=e.length,n=new Set(e.map(i=>i.room).filter(Boolean)).size||1;let r=0;e.forEach(i=>{var d;const a=parseFloat((((d=i.product)==null?void 0:d.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,c=i.quantity||1;r+=a*c}),this.core.addText(`Total Products: ${o}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),this.core.addText(`Total Rooms: ${n}`,t.left,this.core.getCurrentY(),{fontSize:10}),this.core.moveY(5),r>0&&(this.core.addText(`Estimated Total Value: $${r.toFixed(2)} (inc GST)`,t.left,this.core.getCurrentY(),{fontSize:10,fontStyle:"bold"}),this.core.moveY(5)),this.core.moveY(10),this.core.addLine(t.left,this.core.getCurrentY(),this.core.pageWidth-t.right,this.core.getCurrentY(),"#eeeeee"),this.core.moveY(10)}async addProductTableHeader(){this.core.getDocument();const e=this.core.margins,t=this.core.getContentWidth();this.core.addText("Product Details",e.left,this.core.getCurrentY(),{fontSize:14,fontStyle:"bold"}),this.core.moveY(8);const o=this.core.getCurrentY(),s={image:25,code:35,description:70,price:25,qty:15,room:30};let n=e.left;return this.core.addRect(e.left,o-2,t,8,"F","#f5f5f5"),this.core.addText("Image",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.image,this.core.addText("Code",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.code,this.core.addText("Description",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.description,this.core.addText("Price",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.price,this.core.addText("Qty",n+2,o+3,{fontSize:9,fontStyle:"bold"}),n+=s.qty,this.core.addText("Room",n+2,o+3,{fontSize:9,fontStyle:"bold"}),this.core.moveY(10),s}async addProductRow(e,t,o=!1,s=null){var f,y,w,g,S,m,v;this.core.getDocument();const n=this.core.margins,r=20;this.core.checkPageSpace(r+5);const i=this.core.getCurrentY();let a=n.left;if(o&&this.core.addRect(n.left,i-1,this.core.getContentWidth(),r+2,"F","#fafafa"),(f=e.product)!=null&&f.Image_URL&&this.core.isValidUrl(e.product.Image_URL))try{await this.core.addImage(e.product.Image_URL,a+2,i,20,15)}catch(E){console.warn("Failed to add product image:",E)}a+=t.image;const c=this.core.formatText(((y=e.product)==null?void 0:y.OrderCode)||"",15);this.core.addText(c,a+2,i+5,{fontSize:8}),a+=t.code;const d=this.core.formatText(((w=e.product)==null?void 0:w.Description)||"",45);this.core.addText(d,a+2,i+5,{fontSize:8,maxWidth:t.description-4}),a+=t.description;let l=0;((g=e.product)==null?void 0:g.UserEditedPrice)!==void 0&&((S=e.product)==null?void 0:S.UserEditedPrice)!==null&&((m=e.product)==null?void 0:m.UserEditedPrice)!==""?l=parseFloat(e.product.UserEditedPrice.toString().replace(/,/g,""))||0:l=parseFloat((((v=e.product)==null?void 0:v.RRP_EX)||"0").toString().replace(/,/g,""))||0,l>0&&(s!=null&&s.includeGst)&&(l=l*1.1);const p=l>=0?`$${l.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"";this.core.addText(p,a+2,i+5,{fontSize:8}),a+=t.price,this.core.addText((e.quantity||1).toString(),a+2,i+5,{fontSize:8}),a+=t.qty;const h=this.core.formatText(e.room||"",15);if(this.core.addText(h,a+2,i+5,{fontSize:8}),e.notes){const E=i+10;this.core.addText(`Notes: ${this.core.formatText(e.notes,60)}`,n.left+2,E,{fontSize:7,fontStyle:"italic"})}this.core.moveY(r)}async addFooter(e){const t=this.core.getDocument(),o=this.core.margins,s=this.core.pageWidth,r=this.core.pageHeight-20;this.core.addLine(o.left,r,s-o.right,r,"#cccccc"),this.core.addText("Generated by Seima Product Scanner",o.left,r+5,{fontSize:8,fontStyle:"italic"}),this.core.addText("www.seima.com.au",s-o.right,r+5,{fontSize:8,fontStyle:"italic",align:"right"});const i=t.internal.getNumberOfPages();this.core.addText(`Page ${i}`,s/2,r+5,{fontSize:8,align:"center"})}async addQRSection(e){const t=this.core.margins;this.core.checkPageSpace(40),this.core.moveY(10),this.core.addText("Quick Access Links",t.left,this.core.getCurrentY(),{fontSize:12,fontStyle:"bold"}),this.core.moveY(8);const o=e.filter(s=>{var n;return((n=s.product)==null?void 0:n.Website_URL)&&this.core.isValidUrl(s.product.Website_URL)}).slice(0,5);o.forEach((s,n)=>{const r=`${s.product.OrderCode}: ${s.product.Website_URL}`;this.core.addText(this.core.formatText(r,80),t.left+5,this.core.getCurrentY(),{fontSize:8}),this.core.moveY(4)}),o.length===0&&(this.core.addText("Visit www.seima.com.au for more product information",t.left+5,this.core.getCurrentY(),{fontSize:8,fontStyle:"italic"}),this.core.moveY(4))}}const pt=new Mt;class zt{constructor(){this.core=Ye,this.layouts=pt,this.isInitialized=!1}async init(){try{return await this.core.init(),this.isInitialized=!0,console.log("✅ Unified PDF Generator initialized"),!0}catch(e){return console.error("❌ Failed to initialize PDF Generator:",e),!1}}async generatePDF(e){try{this.isInitialized||await this.init();const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📄 Generating PDF for ${t.length} products...`),this.core.createDocument(),await this.layouts.addHeader(e),await this.layouts.addCustomerInfo(e),await this.layouts.addSelectionSummary(t);const o=await this.layouts.addProductTableHeader();for(let n=0;n<t.length;n++){const r=t[n],i=n%2===0;await this.layouts.addProductRow(r,o,i,e)}await this.layouts.addQRSection(t),await this.layouts.addFooter(e);const s=await this.core.finalize();return console.log("✅ PDF generated successfully"),s}catch(t){throw console.error("❌ PDF generation failed:",t),t}}async generateCSV(e){try{const t=this.getSelectedProducts();if(!t.length)throw new Error("No products selected");console.log(`📊 Generating CSV for ${t.length} products...`);const o=[];o.push('"Code","Description","WELS Star","Quantity","Price ea ex GST","Price Total ex GST","Notes","Room","Image URL","Diagram URL","Datasheet URL","Website URL"'),t.forEach(r=>{var v,E,I,M,z,N,se,ue,pe,ye,we;const i=this.cleanForCSV(((v=r.product)==null?void 0:v.OrderCode)||""),a=this.cleanForCSV(((E=r.product)==null?void 0:E.Description)||""),c=((I=r.product)==null?void 0:I["WELS STAR"])||((M=r.product)==null?void 0:M.WELS_STAR)||((z=r.product)==null?void 0:z.WELS_STAR)||((N=r.product)==null?void 0:N.WelsStar)||"",d=this.cleanForCSV(c&&c.toString().trim()?c.toString().replace(/[^\d.]/g,"").trim():""),l=r.quantity||1,p=this.cleanForCSV(((se=r.product)==null?void 0:se.RRP_EX)||""),h=this.calculateTotalPrice(p,l),f=this.cleanForCSV(r.notes||""),y=this.cleanForCSV(r.room||""),w=this.cleanForCSV(((ue=r.product)==null?void 0:ue.Image_URL)||""),g=this.cleanForCSV(((pe=r.product)==null?void 0:pe.Diagram_URL)||""),S=this.cleanForCSV(((ye=r.product)==null?void 0:ye.Datasheet_URL)||""),m=this.cleanForCSV(((we=r.product)==null?void 0:we.Website_URL)||"");o.push(`"${i}","${a}","${d}","${l}","${p}","${h}","${f}","${y}","${w}","${g}","${S}","${m}"`)});const s=o.join(`
`),n=new Blob([s],{type:"text/csv;charset=utf-8"});return console.log("✅ CSV generated successfully"),n}catch(t){throw console.error("❌ CSV generation failed:",t),t}}async generateBothFiles(e){try{const[t,o]=await Promise.all([this.generatePDF(e),this.generateCSV(e)]);return{pdfBlob:t,csvBlob:o}}catch(t){throw console.error("❌ File generation failed:",t),t}}getSelectedProducts(){const e=JSON.parse(localStorage.getItem("selection")||"[]"),t=JSON.parse(localStorage.getItem(U.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");return t.length>0?t:e.map(o=>({product:o,room:o.Room||"",notes:o.Notes||"",quantity:o.Quantity||1}))}calculateTotalPrice(e,t){const s=(parseFloat(e.toString().replace(/[^0-9.]/g,""))||0)*(t||1);return s>0?s.toFixed(2):""}cleanForCSV(e){return e?e.toString().replace(/"/g,'""').replace(/[\r\n]/g," "):""}async generateQuotePDF(e){return await this.generatePDF(e)}async generateReportPDF(e){return await this.generatePDF(e)}generateFileName(e,t){const o=new Date,s=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),r=String(o.getFullYear()).slice(-2),i=String(o.getHours()).padStart(2,"0"),a=String(o.getMinutes()).padStart(2,"0");return`${(e.project||"seima-selection").replace(/[^a-zA-Z0-9\s]/g,"")}-${s}${n}${r}.${i}${a}.${t}`}downloadFile(e,t){const o=URL.createObjectURL(e),s=document.createElement("a");s.href=o,s.download=t,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(o)}getSelectionSummary(){const e=this.getSelectedProducts(),t=e.length,s=new Set(e.map(r=>r.room).filter(Boolean)).size||1;let n=0;return e.forEach(r=>{var c;const i=parseFloat((((c=r.product)==null?void 0:c.RRP_EX)||"0").toString().replace(/[^0-9.]/g,""))||0,a=r.quantity||1;n+=i*a}),{totalProducts:t,totalRooms:s,totalValue:n,hasProducts:t>0}}}const jt=new zt,Gt={Utils:x},Ht=R;class qt{constructor(){this.modules={dataLayer:A,pdfGenerator:jt,pdfCore:Ye,pdfLayouts:pt,StorageManager:b,utils:Gt},this.isInitialized=!1,this.initStatus={}}async init(){try{console.log("🚀 Initializing modular components...");const e=[this.initModule("dataLayer",this.modules.dataLayer),this.initModule("pdfGenerator",this.modules.pdfGenerator)];return(await Promise.allSettled(e)).forEach((o,s)=>{const n=["dataLayer","pdfGenerator"][s];o.status==="rejected"?(console.error(`❌ Failed to initialize ${n}:`,o.reason),this.initStatus[n]=!1):this.initStatus[n]=o.value}),this.isInitialized=!0,console.log("✅ Module initialization complete:",this.initStatus),this.initStatus}catch(e){return console.error("❌ Module coordinator initialization failed:",e),!1}}async initModule(e,t){try{if(t&&typeof t.init=="function"){const o=await t.init();return console.log(`✅ ${e} initialized:`,o),o}else return console.log(`ℹ️ ${e} does not require initialization`),!0}catch(o){throw console.error(`❌ Failed to initialize ${e}:`,o),o}}async searchProducts(e,t=10){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.searchProducts(e,t)}async findProductByCode(e){return this.modules.dataLayer.isLoaded||await this.modules.dataLayer.init(),this.modules.dataLayer.findProductByCode(e)}async addProductToSelection(e,t="",o="",s=1){return this.modules.dataLayer.addProductToSelection(e,t,o,s)}getSelectedProducts(){return this.modules.dataLayer.getSelectedProducts()}getSelectionSummary(){return this.modules.dataLayer.getSelectionSummary()}async generatePDF(e){return await this.modules.pdfGenerator.generatePDF(e)}async generateCSV(e){return await this.modules.pdfGenerator.generateCSV(e)}async generateBothFiles(e){return await this.modules.pdfGenerator.generateBothFiles(e)}async sendEmail(e,t){return await this.modules.emailService.sendEmailWithPDF(e,t)}clearSelection(){return this.modules.dataLayer.clearSelection()}getModuleStatus(){return{initialized:this.isInitialized,moduleStatus:this.initStatus,dataLayer:{loaded:this.modules.dataLayer.isLoaded,productCount:this.modules.dataLayer.products.length},selection:{count:this.getSelectedProducts().length,summary:this.getSelectionSummary()}}}async reinitializeModule(e){if(this.modules[e])try{return this.initStatus[e]=await this.initModule(e,this.modules[e]),this.initStatus[e]}catch(t){return console.error(`❌ Failed to reinitialize ${e}:`,t),!1}return!1}async batchAddProducts(e){const t=[];for(const{product:o,room:s,notes:n,quantity:r}of e)try{const i=await this.addProductToSelection(o,s,n,r);t.push({success:!0,result:i})}catch(i){t.push({success:!1,error:i.message,product:o})}return t}exportState(){return{moduleStatus:this.getModuleStatus(),config:Ht,timestamp:new Date().toISOString()}}}const Wt=new qt;Wt.init().catch(u=>{console.error("❌ Auto-initialization failed:",u)});class Vt{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){try{await A.init()}catch(e){console.error("Failed to load product catalog:",e)}await this.loadVersion(),this.updateSelectionCount(),setTimeout(()=>this.loadVersion(),1e3)}async loadVersion(){try{const e=await fetch("./version.txt");if(e.ok){const t=await e.text(),o=document.getElementById("version-number");if(o){const s=t.trim().split(`
`).filter(i=>i.trim()!==""),n=s.length>0?s[s.length-1]:"Unknown",r=n.split(" - ")[0]||n;o.innerText=r,o.innerText.trim()||(o.innerText="v2.1.0")}}else throw new Error("Version file not found")}catch{const t=document.getElementById("version-number");if(t){const o=R.get("app.version")||"v2.1.0";t.innerText=o}else setTimeout(()=>{const o=document.getElementById("version-number");if(o&&!o.innerText.trim()){const s=R.get("app.version")||"v2.1.0";o.innerText=s}},1e3);console.info("Version loaded from config (GitHub Pages mode)")}}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(s=>s.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),s=document.getElementById("search-no-results");if(!e||!t)return;const n=[],r=x.debounce(i=>{this.performSplitProductSearch(i,t,n,o,s)},200);e.addEventListener("input",()=>{const i=e.value.trim();i?r(i):this.loadInitialSearchResults()}),t.addEventListener("click",i=>{const a=i.target.closest(".result-item");if(!a)return;const c=parseInt(a.getAttribute("data-idx"),10),d=n.length>0?n:this.currentSearchResults||[];!isNaN(c)&&d[c]&&this.showSplitProductDetails(d[c])})}performSplitProductSearch(e,t,o,s,n){if(!A.isLoaded){s.style.display="flex",n.style.display="none",t.innerHTML="";return}o.length=0,o.push(...A.searchProducts(e)),s.style.display="none",o.length===0?(n.style.display="flex",t.innerHTML=""):(n.style.display="none",t.innerHTML=o.map((r,i)=>`
          <div class="result-item" data-idx="${i}">
            <span class="result-code">${x.sanitizeInput(r.OrderCode||r.Code||"")}</span> - ${x.sanitizeInput(r.Description||r.ProductName||r["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!A.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",setTimeout(()=>this.loadInitialSearchResults(),500);return}const s=A.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=s.map((n,r)=>`
        <div class="result-item" data-idx="${r}">
          <span class="result-code">${x.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${x.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=s}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),s=document.getElementById("product-name"),n=document.getElementById("product-code"),r=document.getElementById("product-price"),i=document.getElementById("product-room"),a=document.getElementById("product-quantity"),c=document.getElementById("product-notes"),d=document.getElementById("add-product-btn"),l=document.getElementById("close-details");if(t){if(o){const p=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=p,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}if(s&&(s.textContent=e.Description||e.ProductName||e["Product Name"]||""),n&&(n.textContent=e.OrderCode||e.Code||""),r){const p=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"]||0;r.textContent=p?`$${parseFloat(p).toFixed(2)}`:"Price not available"}this.populateRoomSelect(i),a&&(a.value=1),c&&(c.value=""),l&&(l.onclick=()=>{t.style.display="none"}),d&&(d.onclick=()=>{const p=i?i.value:"Blank",h=a&&parseInt(a.value)||1,f=c?c.value.trim():"";this.addProductToSplitSelection(e,p,h,f),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const s=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=s,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";let s="",n=NaN;const r=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"];r&&(n=parseFloat(r.toString().replace(/,/g,""))),!isNaN(n)&&n>0?s=`$${n.toFixed(2)} ex GST`:s="Price unavailable",document.getElementById("product-price-inline").textContent=s,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const i=document.getElementById("diagram-link"),a=document.getElementById("datasheet-link"),c=document.getElementById("website-link");if([i,a,c].forEach(d=>{d&&(d.setAttribute("target","_blank"),d.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const d=document.getElementById("product-quantity");d&&(d.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',R.get("rooms.predefined",[]).forEach(r=>{const i=document.createElement("option");i.value=r.name,i.textContent=r.name,t.appendChild(i)}),b.getCustomRooms().forEach(r=>{const i=document.createElement("option");i.value=r.name,i.textContent=r.name,t.appendChild(i)});const n=document.createElement("option");n.value="__ADD_NEW_ROOM__",n.textContent="➕ Add new room...",n.style.fontWeight="bold",n.style.color="#2563eb",t.appendChild(n),t.value="Blank",t.removeEventListener("change",this.handleRoomSelectChange.bind(this)),t.addEventListener("change",this.handleRoomSelectChange.bind(this))}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",R.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.toString(),e.appendChild(s)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),s=document.getElementById("variant-select");if(o&&s){let n=e.ProductName||e["Product Name"]||"";typeof n=="string"&&(n=n.trim());let r=[];n&&(r=A.getAllProducts().filter(i=>{let a=i.ProductName||i["Product Name"]||"";return typeof a=="string"&&(a=a.trim()),a&&a===n})),r.length>1?(r.sort((i,a)=>(i.Description||"").localeCompare(a.Description||"")),o.style.display="",s.innerHTML=r.map(i=>`<option value="${i.OrderCode}"${i.OrderCode===e.OrderCode?" selected":""}>${i.Description}</option>`).join(""),s.onchange=()=>{var c;const i=s.value,a=r.find(d=>d.OrderCode===i);if(a&&a.OrderCode!==e.OrderCode){const d=((c=document.getElementById("product-annotation"))==null?void 0:c.value)||t.notes||"",l=document.getElementById("product-quantity");let p=1;l&&l.value?p=Math.max(1,parseInt(l.value,10)||1):t.quantity&&(p=t.quantity),this.showProductDetailsScreen(a,{notes:d,quantity:p})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",s=>{s.key==="Enter"&&s.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),s=document.getElementById("product-annotation"),n=t?t.value:"Blank",r=o?parseInt(o.value):1,i=s?s.value:"";b.addProductToSelection(e,i,n,r)?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,s){b.addProductToSelection(e,s,t,o)?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),s=document.getElementById("total-items"),n=document.getElementById("total-value");if(!e||!t||!o)return;const r=b.getSelectedProducts();if(r.length===0){e.style.display="none",t.style.display="flex",s&&(s.textContent="0 items"),n&&(n.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let i=0,a=0;r.forEach(c=>{i+=c.quantity;let d=0;c.product.UserEditedPrice!==void 0&&c.product.UserEditedPrice!==null&&c.product.UserEditedPrice!==""?d=parseFloat(c.product.UserEditedPrice.toString().replace(/,/g,""))||0:d=parseFloat((c.product.RRP_EX||c.product["RRP EX GST"]||c.product.RRP_EX||c.product.RRP_EXGST||0).toString().replace(/,/g,""))||0,d>0&&(a+=d*c.quantity)}),s&&(s.textContent=i),n&&(n.textContent=a>0?`$${a.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=r.map((c,d)=>{const l=c.product;let p=0;l.UserEditedPrice!==void 0&&l.UserEditedPrice!==null&&l.UserEditedPrice!==""?p=parseFloat(l.UserEditedPrice.toString().replace(/,/g,""))||0:p=parseFloat((l.RRP_EX||l["RRP EX GST"]||l.RRP_EX||l.RRP_EXGST||0).toString().replace(/,/g,""))||0;const h=p*c.quantity,f=l.Image||l.Image_URL||l.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${d}">
          <div class="col-image">
            <img class="table-product-image" src="${f}" alt="Product" onerror="this.src='assets/no-image.png';">
          </div>
          <div class="col-product">
            <div class="product-info">
              <div class="product-name">${x.sanitizeInput(l.Description||l.ProductName||l["Product Name"]||"")}</div>
              <div class="product-code">${x.sanitizeInput(l.OrderCode||l.Code||"")}</div>
              ${c.notes?`<div class="product-notes">${x.sanitizeInput(c.notes)}</div>`:""}
            </div>
          </div>
          <div class="col-room">
            <select class="room-select" data-index="${d}">
              ${this.getRoomOptions(c.room)}
            </select>
          </div>
          <div class="col-price-ea">
            <div class="price-display">${p?`$${p.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${d}" value="${c.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${p?`$${h.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${d}" title="Remove">×</button>
          </div>
        </div>
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return R.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),b.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),s=b.getSelectedProducts();s[t]&&(s[t].quantity=o,b.setSelectedProducts(s),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const r=n.trim();if(b.addCustomRoom(r)){o=r,console.log("✅ Added new room:",r),this.renderSelectionTable();return}else{alert("Room name already exists or is invalid");const i=b.getSelectedProducts();i[t]&&(e.value=i[t].room||"Blank");return}}else{const r=b.getSelectedProducts();r[t]&&(e.value=r[t].room||"Blank");return}}const s=b.getSelectedProducts();s[t]&&(s[t].room=o,b.setSelectedProducts(s),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=b.getSelectedProducts();o[t]&&(o.splice(t,1),b.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=b.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const s={};o.forEach(n=>{const r=n.room||"Unassigned";s[r]||(s[r]=[]),s[r].push(n)}),e.innerHTML=Object.entries(s).map(([n,r])=>`
      <div class="review-room-group">
        <div class="review-room-header">${n} <span class="room-count">(${r.length})</span></div>
        ${r.map((i,a)=>{const c=i.product,d=c.Description||c.description||c.productName||c["Product Name"]||"Product",l=c.OrderCode||c.orderCode||"",p=c.Image_URL||c.imageUrl||"assets/no-image.png",h=c.RRP_EX||c["RRP EX GST"]||c.RRP_EX||c.rrpExGst||c.RRP_EXGST||c.RRP_INCGST||c["RRP INC GST"]||"0";return`
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
                <div class="review-product-title">${d}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${l?`Code: ${l}`:""}</span>
                  <span class="review-product-price">${`$${Number(h).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${i.notes?`Notes: ${i.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(s)}groupProductsByRoom(e){return e.reduce((t,o)=>{const s=o.room||"Unassigned";return t[s]||(t[s]=[]),t[s].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),s=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(n=>{n.onclick=()=>{const r=n.getAttribute("data-action"),i=b.getSelectedProducts();let a=-1;const c=i.findIndex(d=>(d.room===o&&a++,d.room===o&&a===s));if(c!==-1){const d=i[c],l=parseInt(d.quantity,10)||1;r==="increment"?b.updateProductQuantity(d.id,l+1):r==="decrement"&&(l===1?b.removeProductFromSelection(d.id):b.updateProductQuantity(d.id,l-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),s=document.getElementById("pdf-email-cancel"),n=document.getElementById("pdf-email-send");if(o){const i=x.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=i.name||""),o["user-project"]&&(o["user-project"].value=i.project||""),o["user-address"]&&(o["user-address"].value=i.address||""),o["user-email"]&&(o["user-email"].value=i.email||""),o["user-telephone"]&&(o["user-telephone"].value=i.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!i.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!i.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!i.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!i.includeGst)}const r=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;r&&(r.style.display="none"),n&&(n.textContent="Download"),s&&(s.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=i=>{i.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{b.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=b.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const s=prompt("Enter new room name:");if(s&&s.trim()){const n=s.trim();b.addCustomRoom(n)?(this.populateRoomSelect(t),t.value=n,console.log("✅ Added new room:",n)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function qe(u,e,t="file"){await mt(u,e,t)}function We(u,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),nt();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10001;
      background: #dbeafe; border: 1px solid #3b82f6; border-radius: 8px;
      padding: 20px; max-width: 400px; min-width: 320px; box-shadow: 0 8px 25px rgba(0,0,0,0.2);
      text-align: center;
    `;const s=u.emailCompatible;o.innerHTML=`
      <div style="display: flex; align-items: center; margin-bottom: 8px;">
        <span style="font-size: 18px; margin-right: 8px;">${s?"📧":"📄"}</span>
        <strong style="color: #1e40af;">Creating your product selection files</strong>
      </div>
      <p style="margin: 0; color: #1e40af; font-size: 14px;">
        ${s?"Creating text-only PDF without images for optimal email delivery.":"This may take a moment."}
      </p>
    `,document.body.appendChild(o),_e("./assets/seima-logo.png",(n,r,i)=>{const a=JSON.parse(localStorage.getItem("selection")||"[]"),c=JSON.parse(localStorage.getItem(U.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let d=[];c.length>0?d=c.map(m=>({...m.product,Room:m.room,Notes:m.notes,Quantity:m.quantity,Timestamp:new Date(m.timestamp).toISOString()})):d=a;const l=document.getElementById("sort-by"),p=l?l.value:"room";switch(p){case"code":d.sort((m,v)=>{const E=m.OrderCode||m.Code||"",I=v.OrderCode||v.Code||"";return E.localeCompare(I)});break;case"product":d.sort((m,v)=>{const E=m.Description||m.ProductName||"",I=v.Description||v.ProductName||"";return E.localeCompare(I)});break;case"room":default:d.sort((m,v)=>{const E=m.Room||"Blank",I=v.Room||"Blank";return E.localeCompare(I)});break}if(!d.length){alert("No products selected."),t&&(t.style.display="none");return}if(et()>0)console.log(`📷 Using ${et()} pre-cached images (skipping duplicate preload)`);else{const m=document.getElementById("pdf-processing-notification");if(m){const v=document.createElement("span");v.id="preload-progress",v.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",v.textContent="Loading images: 0%",m.appendChild(v)}console.log("📷 Starting image preload for",d.length,"products"),ut(d).then(v=>{const E=document.getElementById("preload-progress");E&&(E.textContent=`✓ ${v} images ready`,E.style.color="#059669")}).catch(v=>{console.warn("Image preloading error:",v)})}const f={};p==="room"?d.forEach(m=>{const v=m.Room||"Blank";f[v]||(f[v]=[]),f[v].push(m)}):f.__all__=d;const{jsPDF:y}=window.jspdf,w=new y({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),g=w.internal.pageSize.getWidth(),S=w.internal.pageSize.getHeight();_e("./assets/seima-logo.png",(m,v,E)=>{const I=J.getCurrentUser(),M=b.getUserSettings(),z=I?{name:I.name,email:I.email,phone:I.phone,position:I.position}:M,N=localStorage.getItem("customerLogo");Pt(w,{pageWidth:g,pageHeight:S,seimaLogoDataUrl:m,seimaLogoNaturalW:v,seimaLogoNaturalH:E,customerLogoDataUrl:N,userDetails:u,staffContact:z,footerHeight:tt.footerHeight}),w.addPage(),_e("./assets/seima-logo-white.png",(se,ue,pe)=>{const wt=u.showRrp&&!u.excludePrice,Je=!u.excludePrice,Xe=!u.excludeQty,vt=Ct(g,{leftMargin:32,rightMargin:32,showRrp:wt,showPrice:Je,showQty:Xe,showTotal:Je&&Xe}),{colX:me,colW:Se,headers:Ae}=vt,Ce=tt.footerHeight;nt();const Qe=(k,C,H,Q,O,j,T)=>{if(!C||typeof C!="string"||C.length<10||!C.startsWith("http://")&&!C.startsWith("https://")&&!C.startsWith("data:")){T&&T();return}if((L=>{if(!L||L.length<25||/\/images\/\d+$/.test(L)||L.endsWith("/0"))return!0;const D=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(L),F=L.startsWith("data:");return!D&&!F})(C)){console.warn("Skipping malformed image URL:",(C==null?void 0:C.substring(0,50))+"..."),T&&T();return}if(Y.totalImages++,u.emailCompatible){Y.failedImages++,T&&T();return}const K=Dt(C);if(K&&K.dataUrl)try{const L=K.width/K.height;let D=O,F=O/L;F>j&&(F=j,D=j*L),k.addImage(K.dataUrl,K.format,H,Q,D,F,void 0,"FAST"),Y.optimizedImages++,T&&T();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let ne=!1;const ge=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let Z=0;function ee(){if(ne)return;const L=new Image;L.crossOrigin="Anonymous";let D=null;L.onload=function(){if(!ne){ne=!0,D&&clearTimeout(D);try{const re=ht(0),Le=re.imageMaxWidth,ve=O,te=j;try{const G=document.createElement("canvas"),q=G.getContext("2d"),{width:V,height:Ze}=to(L.width,L.height,Le);G.width=V,G.height=Ze,q.imageSmoothingEnabled=!0,q.imageSmoothingQuality="high",q.drawImage(L,0,0,V,Ze);let Fe,Oe="JPEG";const bt=eo(G,q),St=Zt(L);bt||St?(Fe=G.toDataURL("image/png",re.imageQuality),Oe="PNG"):(Fe=G.toDataURL("image/jpeg",re.imageQuality),Oe="JPEG");const xt=`img_${lo(C)}`;k.addImage(Fe,Oe,H,Q,ve,te,xt,"FAST"),Y.optimizedImages++,T&&T()}catch(G){console.warn(`Failed to optimize image: ${C}`,G),console.warn("Error details:",G.message,G.stack);try{k.addImage(L,"JPEG",H,Q,ve,te),Y.optimizedImages++,T&&T()}catch(q){console.error(`Fallback also failed for: ${C}`,q),Y.failedImages++,T&&T()}}}catch(re){console.warn("Failed to add image to PDF:",re),Y.failedImages++,T&&T()}}},L.onerror=function(){ne||(D&&clearTimeout(D),console.warn(`Failed to load image with proxy ${Z}: ${C}`),console.warn(`Error details for: ${C} - Proxy: ${ge[Z]}`),Z++,Z<ge.length?setTimeout(()=>{ee()},200):(ne=!0,console.warn("All proxies failed, skipping image"),Y.failedImages++,T&&T()))},D=setTimeout(()=>{ne||(console.warn(`⏰ Timeout with proxy ${Z}: ${C}`),L.src="",L.onload=null,L.onerror=null,Z++,Z<ge.length?setTimeout(()=>{ee()},200):(ne=!0,console.warn("All proxies timed out, skipping image"),Y.failedImages++,T&&T()))},3e3);let F=C;Z<ge.length&&(F=ge[Z]+encodeURIComponent(C)),L.src=F}ee()},W=[];Object.keys(f).forEach((k,C)=>{const H=f[k];if(!H||!Array.isArray(H)){console.warn("⚠️ Skipping invalid room items:",k,H);return}H.forEach((Q,O)=>{if(!Q){console.warn("⚠️ Skipping null item in room:",k,"at index:",O);return}W.push({item:Q,room:k,rIdx:C,iIdx:O,isFirstInRoom:O===0,roomCount:H.length})})}),W.reduce((k,C)=>{if(!C||!C.item)return console.warn("⚠️ Skipping null row in data analysis:",C),k;const H=String(C.item.Description||""),Q=String(C.item.LongDescription||""),O=String(C.item.Notes||""),j=String(C.item.OrderCode||"");return k+H.length+Q.length+O.length+j.length},0);let xe=0,Ie=0;const Re=4,ke=8,Ne=Math.floor((S-80)/Re);let Ke=Ce+8;function $e(){if(!W||!Array.isArray(W)){console.error("❌ Critical error: rowsToDraw is not a valid array:",W),st(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(xe>=W.length){const O=w.internal.getNumberOfPages()-1;for(let D=2;D<=O+1;D++){w.setPage(D);const re=(D-2)*Re,Le=Math.min(re+Re,W.length);let ve=!1;for(let te=re;te<Le;te++)if(W[te]&&W[te].item&&It(W[te].item)){ve=!0;break}Rt(w,{pageWidth:g,colX:me,colW:Se,leftMargin:32,footerHeight:Ce,logoDataUrl:se,logoNaturalW:ue,logoNaturalH:pe,headers:Ae,userDetails:u,skipWelsHeader:!ve}),kt(w,{pageWidth:g,pageHeight:S,leftMargin:32,footerHeight:Ce,pageNumber:D-1,totalPages:O})}const j=new Date,T=String(j.getDate()).padStart(2,"0"),he=String(j.getMonth()+1).padStart(2,"0"),K=String(j.getFullYear()).slice(-2),ne=String(j.getHours()).padStart(2,"0"),ge=String(j.getMinutes()).padStart(2,"0"),ee=`${u.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${T}${he}${K}.${ne}${ge}.pdf`,L=document.getElementById("pdf-processing-notification");L&&L.remove(),uo(u.emailCompatible);try{const D=w.output("blob"),F=w.output("string"),re=F?F.match(/\/Type\s*\/XObject/g):null,Le=F?F.match(/Tj\s/g):null,ve=F?F.match(/\/A\s*<</g):null;u.pdfSize=D.size;const te=so(D,ee);if(u.sendEmail&&D.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(D.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),po(u,ee);return}const G=oo(D,te.settings);if(u.sendEmail&&u.email)if(u.exportCsv){const q=ee.replace(/\.pdf$/,".csv");ot(u,q).then(V=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:u,pdfBlob:G,csvBlob:V}}))}).catch(V=>{console.error("Async CSV generation for email failed:",V),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:u,pdfBlob:G,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:u,pdfBlob:G,csvBlob:null}}));else if((async()=>{const q=await ho(G);qe(q,ee,"PDF")})(),u.exportCsv){const q=ee.replace(/\.pdf$/,".csv");setTimeout(()=>{ot(u,q).then(V=>{V&&qe(V,q,"CSV")}).catch(V=>{console.error("CSV generation failed:",V)})},1e3)}}catch(D){console.error("PDF generation failed:",D),st(D,"generating PDF",ee);const F=document.getElementById("pdf-processing-notification");F&&F.remove()}t&&(t.style.display="none");return}Ie>=Re&&(w.addPage(),Ke=Ce+8,Ie=0);const k=W[xe];if(!k||!k.item){console.warn(`⚠️  Skipping invalid row at index ${xe}:`,k),xe++,$e();return}const C=Ke+Ne*Ie;k.isFirstInRoom&&p==="room"&&k.room!=="__all__"&&Lt(w,k.room,k.roomCount,32,C);const H=me[0],Q=H+90+12;Qe(w,k.item.Image_URL||"",H,C+ke+16,90,Ne-ke*2,()=>{Qe(w,k.item.Diagram_URL||"",Q,C+ke+16,90,Ne-ke*2,()=>{const O=C+28,j=me[1]+Se[1]/2;w.setFontSize(10),w.setTextColor("#222"),w.text(String(k.item.OrderCode||""),j,O+10,{align:"center"}),Tt(w,k.item,j,O+35);const T=Se[2]-10;Bt(w,k.item,me[2],O+10,T,u.excludeLongDescription);const he=Ae.indexOf("WELS")+1;if(he>0&&me[he]){const K=me[he]+Se[he]/2;At(w,k.item,K,O+10)}Nt(w,k.item,me,Se,Ae,O+10,{excludePrice:u.excludePrice,includeGst:u.includeGst}),xe++,Ie++,$e()})})}$e()})})})}function _e(u,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),s=o.getContext("2d"),n=400,r=150;let i=t.width,a=t.height;if(i>n||a>r){const d=n/i,l=r/a,p=Math.min(d,l);i=Math.round(i*p),a=Math.round(a*p)}o.width=i,o.height=a,s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(t,0,0,i,a);const c=o.toDataURL("image/png",.9);e(c,i,a)},t.src=u}function Yt(){if(!document.getElementById("pdf-spinner")){const u=document.createElement("div");if(u.id="pdf-spinner",u.style.display="none",u.style.position="fixed",u.style.top="0",u.style.left="0",u.style.width="100vw",u.style.height="100vh",u.style.zIndex="9999",u.style.background="rgba(255,255,255,0.7)",u.style.alignItems="center",u.style.justifyContent="center",u.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(u),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function ot(u,e){return new Promise(async t=>{if(!window.Papa)try{await x.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(r){console.error("Failed to load PapaParse:",r),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),s=JSON.parse(localStorage.getItem(U.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let n=[];if(s.length>0?n=s.map(r=>({...r.product,Room:r.room,Notes:r.notes,Quantity:r.quantity,Timestamp:new Date(r.timestamp).toISOString()})):n=o,!n.length){t(null);return}setTimeout(()=>{const r=n.map(i=>{let a,c,d,l;const p=u.excludePrice;let h=0;if(i.UserEditedPrice!==void 0&&i.UserEditedPrice!==null&&i.UserEditedPrice!=="")h=parseFloat(i.UserEditedPrice.toString().replace(/,/g,""));else{const g=i.RRP_EX||i["RRP EX GST"]||i.RRP_EX||i.RRP_EXGST||"";h=parseFloat((g||"0").toString().replace(/,/g,""))}a=h,d="Price ea ex GST",l="Price Total ex GST",c=!isNaN(a)&&a>=0?(a*(i.Quantity||1)).toFixed(2):"";const f=i["WELS STAR"]||i.WELS_STAR||i.WELS_STAR||i.WelsStar||"",y=f&&f.toString().trim()?f.toString().replace(/[^\d.]/g,"").trim():"",w={Code:ie(i.OrderCode||""),Description:ie(i.Description||""),"WELS Star":ie(y),Quantity:i.Quantity||1,Notes:ie(i.Notes||""),Room:ie(i.Room||""),"Image URL":ie(i.Image_URL||""),"Diagram URL":ie(i.Diagram_URL||""),"Datasheet URL":ie(i.Datasheet_URL||""),"Website URL":ie(i.Website_URL||"")};return w[d]=p?"0.00":a>=0?a.toFixed(2):"",w[l]=p?"0.00":c,w});setTimeout(()=>{const i=window.Papa.unparse(r,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(a,c){return typeof a=="string"?a.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):a}}});u.sendEmail?setTimeout(()=>{try{const a=btoa(unescape(encodeURIComponent(i)));t({name:e,data:a,contentType:"text/csv",originalSize:i.length,base64Size:a.length})}catch(a){console.error("CSV base64 encoding failed:",a),t(new Blob([i],{type:"text/csv"}))}},0):t(new Blob([i],{type:"text/csv"}))},0)},0)})}function ie(u){return typeof u!="string"&&(u=String(u)),u=u.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),u}async function Jt(u,e,t="file"){try{if("showSaveFilePicker"in window){const s=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[u.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await s.write(u),await s.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function Xt(u,e,t="file"){try{if(u.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(s){try{const n=document.createElement("a");n.href=s.target.result,n.download=e,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(n){console.error("Data URI download failed:",n)}},o.readAsDataURL(u),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function Qt(u,e,t="file"){const o=URL.createObjectURL(u),s=document.createElement("div");s.style.cssText=`
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
  `,s.appendChild(n),document.body.appendChild(s),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s),setTimeout(()=>{mt(u,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const r=document.getElementById("manual-download-url");r.select(),r.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const i=document.getElementById("copy-url-btn");i.textContent="Copied!",i.style.background="#059669",setTimeout(()=>{i.textContent="Copy",i.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const i=document.getElementById("copy-url-btn");i.textContent="Copied!",setTimeout(()=>i.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},s.onclick=r=>{r.target===s&&(URL.revokeObjectURL(o),document.body.removeChild(s))},setTimeout(()=>{s.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(s))},5*60*1e3)}async function mt(u,e,t="file"){try{if(await Kt(u,e))return}catch(o){console.warn("Standard download failed:",o)}await Jt(u,e,t)||Xt(u,e,t)||Qt(u,e,t)}function Kt(u,e){return new Promise(t=>{try{const o=URL.createObjectURL(u),s=document.createElement("a");s.href=o,s.download=e,s.style.display="none",document.body.appendChild(s);const n=setTimeout(()=>{r(),t(!1)},3e3),r=()=>{clearTimeout(n),s.parentElement&&document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(o),1e3)};s.onclick=()=>{r(),t(!0)},s.click(),setTimeout(()=>{r(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function Zt(u){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,u.width),e.height=Math.min(100,u.height),t.drawImage(u,0,0,e.width,e.height);const s=t.getImageData(0,0,e.width,e.height).data,n=new Set;for(let r=0;r<s.length;r+=4){const i=`${s[r]},${s[r+1]},${s[r+2]}`;n.add(i)}return n.size<1e3}function eo(u,e){const o=e.getImageData(0,0,u.width,u.height).data;for(let s=3;s<o.length;s+=4)if(o[s]<255)return!0;return!1}function to(u,e,t){if(u<=t)return{width:u,height:e};const o=e/u;return{width:t,height:Math.round(t*o)}}function ht(u){return u>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:u>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:u>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:u>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function oo(u,e){return u}function so(u,e){const t=(u.size/1048576).toFixed(2),o=ht(u.size);if(u.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const s=document.createElement("div");s.style.cssText=`
      position: fixed; top: 20px; right: 20px; z-index: 10001;
      background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px;
      padding: 16px; max-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `,s.innerHTML=`
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
    `,document.body.appendChild(s),setTimeout(()=>{s.parentElement&&s.remove()},8e3)}else u.size>3*1024*1024;return{size:u.size,sizeInMB:parseFloat(t),settings:o}}function st(u,e="",t=""){console.error("Detailed error:",u);const o={type:no(u),message:u.message||"Unknown error",context:e,filename:t,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},s=document.createElement("div");s.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");return n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${ro(o.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${io(o.type,e,t)}
      </p>
    </div>
    
    ${ao(o.type)}
    
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
        <p><strong>Browser:</strong> ${gt()}</p>
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
  `,s.appendChild(n),document.body.appendChild(s),document.getElementById("error-close").onclick=()=>{document.body.removeChild(s)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(s),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{co(o),alert("Error details copied to clipboard. Please send this to support.")},s.onclick=r=>{r.target===s&&document.body.removeChild(s)},o}function no(u){var o,s;const e=((o=u.message)==null?void 0:o.toLowerCase())||"",t=((s=u.stack)==null?void 0:s.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function ro(u){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[u]||"Error Occurred"}function io(u,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[u]||"An unknown error has occurred."}function ao(u){const e={network:`
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
      </div>`};return e[u]||e.unknown}function gt(){const u=navigator.userAgent;return u.includes("Chrome")?"Chrome":u.includes("Firefox")?"Firefox":u.includes("Safari")?"Safari":u.includes("Edge")?"Edge":u.includes("SamsungBrowser")?"Samsung Internet":"Unknown"}function co(u){const e=`
Seima Scanner Error Report
========================
Time: ${u.timestamp}
Error Type: ${u.type}
Message: ${u.message}
Context: ${u.context}
File: ${u.filename}
Browser: ${gt()}
User Agent: ${u.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy error report:",t)}}let Y={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function lo(u){let e=0;if(u.length===0)return e.toString();for(let t=0;t<u.length;t++){const o=u.charCodeAt(t);e=(e<<5)-e+o,e=e&e}return Math.abs(e).toString(36)}function nt(){Y={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function uo(u=!1){Y.totalImages>0}function po(u,e){const t=document.createElement("div");t.style.cssText=`
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
      Your PDF is large (${(u.pdfSize/1024/1024).toFixed(1)} MB). 
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
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const s=new CustomEvent("sendEmailRegular",{detail:{userDetails:u,originalFilename:e}});window.dispatchEvent(s)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),u.emailCompatible=!0,We(u)}}const mo="tipTailSettings";async function ho(u){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(mo)||"{}")}catch(a){console.warn("Could not read tipTailSettings from localStorage:",a)}const{tipAsset:t,tipUpload:o,tailAsset:s,tailUpload:n}=e;if(!t&&!o&&!s&&!n)return u;async function r(a,c,d="file"){if(c&&a)try{const l=atob(a),p=new Uint8Array(l.length);for(let h=0;h<l.length;h++)p[h]=l.charCodeAt(h);return p.buffer}catch(l){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${d}:`,l),null}if(a)try{const l=await fetch(a);return l.ok?await l.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${d} file: ${a} (${l.status} ${l.statusText})`),null)}catch(l){return console.warn(`⚠️ Error fetching ${d} file: ${a}`,l),null}return null}async function i(a,c="file",d="unknown"){if(!a)return null;try{return await PDFLib.PDFDocument.load(a)}catch(l){return console.warn(`⚠️ Failed to parse ${c} PDF: ${d}`,l),null}}try{const a=await u.arrayBuffer(),c=await PDFLib.PDFDocument.load(a),d=await PDFLib.PDFDocument.create(),[l]=await d.copyPages(c,[0]);d.addPage(l);let p=null,h=null;if(o){const g=await r(o,!0,"tip");g?(p=await i(g,"tip","uploaded file"),p||(h="The uploaded tip file is not a valid PDF or could not be loaded.")):h="Failed to process the uploaded tip file."}else if(t){const g=await r(t,!1,"tip");g?(p=await i(g,"tip",t),p||(h=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):h=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(p){const g=Array.from({length:p.getPageCount()},(m,v)=>v);(await d.copyPages(p,g)).forEach(m=>d.addPage(m))}else h&&(console.warn(`⚠️ Tip file error: ${h}`),Ue("Tip File Issue",h));if(c.getPageCount()>1){const g=Array.from({length:c.getPageCount()-1},(m,v)=>v+1);(await d.copyPages(c,g)).forEach(m=>d.addPage(m))}let f=null,y=null;if(n){const g=await r(n,!0,"tail");g?(f=await i(g,"tail","uploaded file"),f||(y="The uploaded tail file is not a valid PDF or could not be loaded.")):y="Failed to process the uploaded tail file."}else if(s){const g=await r(s,!1,"tail");g?(f=await i(g,"tail",s),f||(y=`The tail file "${s.split("/").pop()}" is not a valid PDF or could not be loaded.`)):y=`The tail file "${s.split("/").pop()}" could not be found or accessed.`}if(f){const g=Array.from({length:f.getPageCount()},(m,v)=>v);(await d.copyPages(f,g)).forEach(m=>d.addPage(m))}else y&&(console.warn(`⚠️ Tail file error: ${y}`),Ue("Tail File Issue",y));const w=await d.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([w],{type:"application/pdf"})}catch(a){return console.error("❌ Error during PDF merging:",a),Ue("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),u}}function Ue(u,e){const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: 20px; right: 20px; z-index: 10002;
    background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;
    padding: 16px; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `,t.innerHTML=`
    <div style="display: flex; align-items: flex-start; gap: 12px;">
      <span style="font-size: 20px;">⚠️</span>
      <div style="flex: 1;">
        <div style="font-weight: 600; color: #92400e; margin-bottom: 4px;">${u}</div>
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
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}const rt="fredChatHistory",Ve="fredChatMessages",De="fredFeedback",Pe="fredQuestionLog",Me=16,ce={PROXY_URL:"https://seima-ai-proxy.seima.workers.dev",APP_SECRET:"sk-proj-KRCnI_ABkeaV18bpU1dTOpXWxpKtucw",MODEL:"gpt-4o",MAX_TOKENS:2e3,TEMPERATURE:.2,MAX_CATALOG_RESULTS:60},go=`You are Fred, a product assistant for Seima — an Australian bathroom and kitchen products company.

You help users find products in the Seima catalog. You receive SEIMA PRODUCT DATA with each message.

CRITICAL RULES:
1. ONLY reference products that appear in the provided data. NEVER invent products, codes, or specifications.
2. ONLY state attributes explicitly present in the data. If a field is missing, say "not specified" — NEVER guess or assume.
3. Always include the real OrderCode for every product you mention.
4. Match product types carefully: "basin mixer" is tapware (not a basin), "shower mixer" is tapware (not a shower).
5. Use the "Type" and "Group" fields to determine mounting style, installation type, etc. If these fields don't indicate what the user asked for, DO NOT claim the product matches.
6. If you cannot find products matching the user's criteria, say so honestly. Suggest what IS available instead.

DATA FIELDS: Each product line contains OrderCode, ProductName, Description, Detail (long description), Range, Group, Type (SubGroup), Dimensions, Price, Finish, Colour, WELS rating — when available.

FORMAT: List each product as its own bullet point. Start each bullet with the 6-digit OrderCode, then the product name and key specs. Keep one product per bullet — the UI will auto-render product cards from the OrderCode. Add a brief intro sentence before the list.`,fo=`You are a product specification parser for building/construction projects. Extract ALL product references from the provided text.

For each product, extract:
- code: the product code, SKU, part number or model number (e.g. RR012100.SN, 878015W, 14683)
- name: the product name or description (e.g. "Bench Mounted Basin Mixer", "Care 800 Cleanflush")
- brand: the manufacturer (e.g. Arcisan, Caroma, Streamline, Greens, ABI Interiors, Argent, Franke, Seima, Clark, Billi, Linsol)
- category: product type (e.g. basin mixer, shower mixer, basin, toilet/WC, bath, kitchen sink, laundry tub, shower arm, robe hook, floor waste)
- quantity: quantity if specified (default 1)
- finish: colour/finish (e.g. brushed nickel, brushed brass, chrome, matte black, gun metal grey, white)
- section: the document section or area this product belongs to (e.g. "Market Apartments - Cool Scheme", "Serviced Apartments", "Base Building")
- specCode: the specification reference code if present (e.g. TW01M, SW02B)
- style: the product style/collection if mentioned (e.g. "Arcisan Vierra", "Galiano", "Aliro")

RULES:
- Extract EVERY product, even sub-items like mounting brackets, wastes, cisterns, mixer bodies
- The same product appearing in different colour schemes (e.g. Cool vs Warm) should be separate entries
- Capture the section/area heading each product falls under
- If a brand says "Streamline / Harvey Norman Commercial", the brand is "Streamline" (Harvey Norman is the distributor)
- If the brand is "Siema" or "Seima", use "Seima"
- Return ONLY valid JSON — no prose, no markdown fences
- Return an array of objects

Return format: [{"code":"...","name":"...","brand":"...","category":"...","quantity":1,"finish":"...","section":"...","specCode":"...","style":"..."}]`;class yo{constructor(){this.conversationHistory=this._loadHistory(),this.isProcessing=!1}async chat(e,t,o=null){var s,n,r;if(this.isProcessing)throw new Error("A request is already in progress");this.isProcessing=!0;try{const i=[{role:"system",content:go}],a=this._findRelevantProducts(e,t);if(a&&i.push({role:"system",content:`SEIMA PRODUCT DATA (${a.count} products):
${a.text}`}),(o==null?void 0:o.length)>0){const l=o.map(p=>[p.OrderCode,p.ProductName||p.Description,p.room?`Room: ${p.room}`:null].filter(Boolean).join(" | ")).join(`
`);i.push({role:"system",content:`USER'S CURRENT SELECTION (${o.length} products):
${l}`})}i.push(...this.conversationHistory),i.push({role:"user",content:e});const c=await this._callProxy("/v1/chat/completions",{messages:i,model:ce.MODEL,max_tokens:ce.MAX_TOKENS,temperature:ce.TEMPERATURE}),d=(r=(n=(s=c.choices)==null?void 0:s[0])==null?void 0:n.message)==null?void 0:r.content;if(!d)throw new Error("No response from AI");return this.conversationHistory.push({role:"user",content:e},{role:"assistant",content:d}),this.conversationHistory.length>Me&&(this.conversationHistory=this.conversationHistory.slice(-Me)),this._saveHistory(),{content:d,usage:c.usage}}finally{this.isProcessing=!1}}async extractFromSpecText(e){var n,r,i;const t=await this._callProxy("/v1/chat/completions",{model:"gpt-4o-mini",messages:[{role:"system",content:fo},{role:"user",content:`Extract all product references from this specification document:

${e}`}],max_tokens:16e3,temperature:.1},18e4),o=((i=(r=(n=t.choices)==null?void 0:n[0])==null?void 0:r.message)==null?void 0:i.content)||"[]";let s;try{const a=o.replace(/^```json?\n?/i,"").replace(/\n?```$/i,"").trim();s=JSON.parse(a)}catch{console.warn("Failed to parse extraction result:",o),s=[]}return{products:s,usage:t.usage}}async extractFromSpec(e,t){const o=await this._callProxy("/v1/extract-products",{content:e,mimeType:t},18e4);return{products:o.products||[],usage:o.usage}}async crossReferenceProducts(e,t){if(!$.isEnabled())try{await $.preload()}catch{}const o=[];for(const s of e){const n={...s,status:"unmatched",seimaMatches:[],seimaProduct:null},r=(s.brand||"").toLowerCase();if((r==="seima"||r==="siema")&&s.code&&t){const i=t.findProductByCode(s.code);if(i){n.status="seima-own",n.seimaProduct=i,o.push(n);continue}}if(s.code&&$.isEnabled())try{const i=await $.findSeimaMatches(s.code);if(i){const a=i.matches.map(c=>c.SeimaSKU);n.status="verified",n.seimaMatches=i.matches,t&&a.length>0&&(n.seimaProduct=t.findProductByCode(a[0])),o.push(n);continue}}catch{}if($.isEnabled()){const i=[s.code,s.name,s.brand].filter(Boolean).join(" ");if(i.length>=2)try{const a=await $.findAlternatives(i,3);if(a.length>0){n.status="alternative",n.seimaMatches=a.map(c=>c.match),t&&(n.seimaProduct=t.findProductByCode(a[0].seimaSKU)),o.push(n);continue}}catch{}}if(t&&s.category){const i=[s.category,s.finish].filter(Boolean).join(" "),a=t.searchProducts(i,3);a.length>0&&(n.status="catalog-suggestion",n.seimaProduct=a[0],n.catalogSuggestions=a)}o.push(n)}return o}async _callProxy(e,t,o=12e4){const s=new AbortController,n=setTimeout(()=>s.abort(),o);try{const r=await fetch(`${ce.PROXY_URL}${e}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ce.APP_SECRET}`},body:JSON.stringify(t),signal:s.signal});if(!r.ok){const i=await r.json().catch(()=>({}));throw new Error(i.details||i.error||`Request failed (${r.status})`)}return r.json()}catch(r){throw r.name==="AbortError"?new Error("Request timed out. The file may be too large — try a shorter document or individual pages."):r}finally{clearTimeout(n)}}_findRelevantProducts(e,t){if(!t||!t.products||t.products.length===0)return null;const o=new Map,s=this._extractTerms(e.toLowerCase()),n=this._buildQueryVariations(s);for(const i of n){const a=t.searchProducts(i,20);for(const c of a)c.OrderCode&&o.set(c.OrderCode,c)}for(const i of s){const a=t.searchProducts(i,15);for(const c of a)c.OrderCode&&o.set(c.OrderCode,c)}if(o.size<10){const i=s.map(a=>this._synonyms(a)).flat();for(const a of t.products){if(!a.OrderCode)continue;const c=[a["Product Name"],a.ProductName,a.Description,a["Long Description"],a.LongDescription,a.Group,a.SubGroup,a.Range,a.Finish,a.Colour].filter(Boolean).join(" ").toLowerCase();i.some(d=>c.includes(d))&&o.set(a.OrderCode,a)}}const r=[...o.values()].slice(0,ce.MAX_CATALOG_RESULTS);return r.length===0?null:{text:this._formatProducts(r),count:r.length}}_synonyms(e){return lt(e)}_buildQueryVariations(e){const t=e.map(s=>this._synonyms(s)),o=new Set;if(o.add(e.join(" ")),t.length<=4){const s=(n,r)=>{if(n===t.length){o.add(r.join(" "));return}for(const i of t[n])s(n+1,[...r,i])};s(0,[])}else for(let s=0;s<t.length;s++)for(const n of t[s]){const r=e.map((i,a)=>a===s?n:i);o.add(r.join(" "))}return[...o]}_extractTerms(e){const t=new Set(["a","an","the","is","are","for","and","or","in","on","at","to","of","with","from","me","i","my","do","you","can","find","show","get","what","which","please","thanks","seima"]);return e.replace(/[^a-z0-9\s-]/g," ").split(/\s+/).filter(o=>o.length>=2&&!t.has(o))}_formatProducts(e){return e.map(t=>{const o=[t.OrderCode];t.ProductName&&o.push(t.ProductName),t.Description&&o.push(t.Description);const s=t["Long Description"]||t.LongDescription;s&&o.push(`Detail: ${s}`),t.Range&&o.push(`Range: ${t.Range}`),t.Group&&o.push(`Group: ${t.Group}`),t.SubGroup&&o.push(`Type: ${t.SubGroup}`);const n=t.DimX||t["X Dimension (mm)"],r=t.DimY||t["Y Dimension (mm)"],i=t.DimZ||t["Z Dimension (mm)"];n&&n!=="0"&&o.push(`Dims: ${n}x${r||0}x${i||0}mm`);const a=t["RRP INC GST"]||t.RRP_INCGST||t["RRP EX GST"]||t.RRP_EXGST||t.RRP_EX;a&&o.push(`$${a}`),t.Finish&&o.push(`Finish: ${t.Finish}`),t.Colour&&o.push(`Colour: ${t.Colour}`);const c=t.WELS_STAR||t["WELS Star"];return c&&o.push(`WELS: ${c} star`),o.filter(Boolean).join(" | ")}).join(`
`)}clearHistory(){this.conversationHistory=[],this._saveHistory();try{localStorage.removeItem(Ve)}catch{}}_saveHistory(){try{localStorage.setItem(rt,JSON.stringify(this.conversationHistory))}catch{}}_loadHistory(){try{const e=localStorage.getItem(rt);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t.slice(-Me):[]}catch{return[]}}get processing(){return this.isProcessing}}const fe=new yo;class wo{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null,this._specResults=null}init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=d=>{d.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=d=>{d.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const l=d.dataTransfer.files;l.length>0&&this.handleFileSelection(l[0])},o.onchange=d=>{d.target.files.length>0&&this.handleFileSelection(d.target.files[0])});const s=document.getElementById("import-cancel-btn"),n=document.getElementById("import-next-btn"),r=document.getElementById("import-back-btn"),i=document.getElementById("import-process-btn"),a=document.getElementById("import-close-btn");s&&(s.onclick=()=>this.closeModal()),n&&(n.onclick=()=>this.showImportModeStep()),r&&(r.onclick=()=>this.showFileSelectionStep()),i&&(i.onclick=()=>this.processImport()),a&&(a.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(d=>{d.onchange=()=>{this.importMode=d.value;const l=document.getElementById("override-warning");l&&(l.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this._specResults=null,this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const s=document.querySelector('input[name="import-mode"][value="append"]');s&&(s.checked=!0);const n=document.getElementById("override-warning");n&&(n.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}showSpecResultsStep(){this.hideAllSteps();const e=document.getElementById("import-spec-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step","import-spec-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=R.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json",".pdf",".jpg",".jpeg",".png"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json","application/pdf","image/jpeg","image/png"],s=e.name.toLowerCase(),n=t.some(d=>s.endsWith(d.toLowerCase())),r=R.get("import.maxFileSize",15*1024*1024);if(e.size>r){const d=Math.round(r/1048576);alert(`File is too large. Maximum size is ${d}MB.`);return}if(!o.includes(e.type)&&!n){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const i=document.getElementById("selected-file-info"),a=document.getElementById("selected-file-name"),c=document.getElementById("import-next-btn");i&&a&&c&&(a.textContent=e.name,i.style.display="block",c.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{const e=this.selectedFile.name.toLowerCase();if(this._isSpecFile(e)){await this._processSpecFile();return}let t;if(e.endsWith(".csv"))t=await this.parseCSV(this.selectedFile);else if(e.endsWith(".json"))t=await this.parseJSON(this.selectedFile);else if(e.endsWith(".xlsx")||e.endsWith(".xls"))t=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",t),this.importMode==="override"&&(b.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(t),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}_isSpecFile(e){return/\.(pdf|jpg|jpeg|png)$/.test(e)}async _processSpecFile(){const e=document.querySelector("#import-processing-step p"),t=Math.round(this.selectedFile.size/1024);try{let o;if(this.selectedFile.type==="application/pdf"||this.selectedFile.name.toLowerCase().endsWith(".pdf")){e&&(e.innerHTML=`Reading PDF...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const r=await this._extractPdfText(this.selectedFile);if(r&&r.length>100)e&&(e.innerHTML=`Analysing specification text...<br><small style="color:#888">Extracted ${r.length.toLocaleString()} characters from PDF</small>`),o=await fe.extractFromSpecText(r);else{e&&(e.innerHTML='Analysing PDF with vision AI...<br><small style="color:#888">Image-based PDF — this may take 1-2 minutes</small>');const i=await this._fileToBase64(this.selectedFile);o=await fe.extractFromSpec(i,"application/pdf")}}else{e&&(e.innerHTML=`Analysing image...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const r=await this._fileToBase64(this.selectedFile),i=this.selectedFile.type||"image/jpeg";o=await fe.extractFromSpec(r,i)}if(!o.products||o.products.length===0){alert("No products were found in this file. Try a clearer image or a different page."),this.showFileSelectionStep();return}e&&(e.textContent=`Found ${o.products.length} products. Cross-referencing with Seima catalog...`);const n=await fe.crossReferenceProducts(o.products,A);this._specResults=n,this._showSpecResults(n)}catch(o){console.error("Spec processing failed:",o),alert(`Spec processing failed: ${o.message}`),this.showFileSelectionStep()}}async _extractPdfText(e){try{if(!window.pdfjsLib){const r=document.createElement("script");r.src="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs",r.type="module";const i=document.createElement("script");i.type="module",i.textContent=`
          import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs';
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';
          window.pdfjsLib = pdfjsLib;
          window.dispatchEvent(new Event('pdfjsReady'));
        `,document.head.appendChild(i),await new Promise((a,c)=>{const d=setTimeout(()=>c(new Error("PDF.js load timeout")),15e3);window.addEventListener("pdfjsReady",()=>{clearTimeout(d),a()},{once:!0})})}const t=await e.arrayBuffer(),o=await window.pdfjsLib.getDocument({data:t}).promise,s=[];for(let r=1;r<=o.numPages;r++){const c=(await(await o.getPage(r)).getTextContent()).items.map(d=>d.str).join(" ");c.trim()&&s.push(c.trim())}const n=s.join(`

--- Page Break ---

`);return console.log(`PDF text extraction: ${o.numPages} pages, ${n.length} chars`),n}catch(t){return console.warn("PDF text extraction failed, will use vision API:",t),null}}_fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result.split(",")[1]),s.onerror=()=>o(new Error("Failed to read file")),s.readAsDataURL(e)})}_showSpecResults(e){const t=e.filter(c=>["verified","seima-own","alternative","catalog-suggestion"].includes(c.status)),o=e.filter(c=>c.status==="unmatched"||c.status==="ai-suggested"),s=[...new Set(e.map(c=>c.section).filter(Boolean))],n=document.getElementById("spec-results-content");if(!n)return;n.innerHTML=`
      <h4 style="margin:0 0 12px">Specification Analysis — ${this._escapeHtml(this.selectedFile.name)}</h4>
      <div class="spec-summary-bar">
        <span class="spec-stat spec-stat-verified"><strong>${e.length}</strong> Products found</span>
        <span class="spec-stat spec-stat-alt"><strong>${t.length}</strong> Matched</span>
        <span class="spec-stat spec-stat-none"><strong>${o.length}</strong> Unmatched</span>
        ${s.length>1?`<span class="spec-stat"><strong>${s.length}</strong> Sections</span>`:""}
      </div>
      <div class="spec-table-wrap">
        <table class="spec-table">
          <thead>
            <tr>
              <th style="width:40px"><input type="checkbox" id="spec-select-all" checked></th>
              <th>Specified Product</th>
              <th>Status</th>
              <th>Seima Alternative</th>
            </tr>
          </thead>
          <tbody>
            ${this._renderSpecRows(e)}
          </tbody>
        </table>
      </div>
    `;const r=document.getElementById("spec-add-all-btn");r&&(r.style.display="",r.textContent=`Import Selected to Grid (${e.length})`,r.onclick=()=>this._importSelectedToGrid());const i=document.getElementById("spec-done-btn");i&&(i.onclick=()=>{this.closeModal(),window.location.reload()});const a=n.querySelector("#spec-select-all");a&&a.addEventListener("change",()=>{n.querySelectorAll(".spec-row-check").forEach(c=>{c.checked=a.checked}),this._updateImportCount()}),n.addEventListener("change",c=>{c.target.classList.contains("spec-row-check")&&this._updateImportCount()}),this.showSpecResultsStep()}_renderSpecRows(e){let t="",o=null;for(let s=0;s<e.length;s++){const n=e[s];n.section&&n.section!==o&&(o=n.section,t+=`<tr class="spec-section-header"><td colspan="4">${this._escapeHtml(n.section)}</td></tr>`),t+=this._renderSpecRow(n,s)}return t}_renderSpecRow(e,t){var h,f,y;const o=e.specCode?`<strong>${this._escapeHtml(e.specCode)}</strong> `:"",s=e.name||e.category||"",n=e.brand||"",r=e.code||"",i=e.style||"",a=e.finish||"",c={"seima-own":'<span class="spec-badge spec-badge-seima">Seima Product</span>',verified:'<span class="spec-badge spec-badge-verified">Verified Match</span>',alternative:'<span class="spec-badge spec-badge-alt">Alternative</span>',"catalog-suggestion":'<span class="spec-badge spec-badge-suggest">Suggestion</span>',"ai-suggested":'<span class="spec-badge spec-badge-ai">AI Suggested</span>',unmatched:'<span class="spec-badge spec-badge-none">No Match</span>'};let d="";if(e.status==="seima-own"&&e.seimaProduct){const w=e.seimaProduct;d=`<strong>${this._escapeHtml(w.OrderCode||w["Order Code"]||"")}</strong>
        <br><small>${this._escapeHtml(w.Description||w.ProductName||"")}</small>`}else if(["verified","alternative"].includes(e.status)&&((h=e.seimaMatches)==null?void 0:h.length)>0){const w=e.seimaMatches[0].SeimaSKU||"",g=((f=e.seimaProduct)==null?void 0:f.Description)||((y=e.seimaProduct)==null?void 0:y.ProductName)||"";d=`<strong>${this._escapeHtml(w)}</strong>`,g&&(d+=`<br><small>${this._escapeHtml(g)}</small>`)}else if(e.status==="catalog-suggestion"&&e.seimaProduct){const w=e.seimaProduct;d=`<em>${this._escapeHtml(w.OrderCode||w["Order Code"]||"")}</em>
        <br><small style="color:#737373">${this._escapeHtml(w.Description||w.ProductName||"")}</small>`}else d='<span style="color:#aaa">—</span>';const l=[n,i,r,a].filter(Boolean).map(w=>this._escapeHtml(w));return`
      <tr class="${`spec-row spec-row-${e.status}`}" data-index="${t}">
        <td><input type="checkbox" class="spec-row-check" data-index="${t}" checked></td>
        <td>
          <div>${o}${this._escapeHtml(s)}</div>
          <small style="color:#737373">${l.join(" · ")}</small>
        </td>
        <td>${c[e.status]||""}</td>
        <td>${d}</td>
      </tr>
    `}_updateImportCount(){const e=document.querySelectorAll(".spec-row-check:checked").length,t=document.getElementById("spec-add-all-btn");t&&(t.textContent=`Import Selected to Grid (${e})`,t.disabled=e===0)}_importSelectedToGrid(){if(!this._specResults)return;const e=document.querySelectorAll(".spec-row-check:checked");let t=0;const o=new Set;e.forEach(n=>{const r=parseInt(n.dataset.index),i=this._specResults[r];i!=null&&i.section&&o.add(i.section)}),o.forEach(n=>b.addCustomRoom(n)),e.forEach(n=>{var d,l;const r=parseInt(n.dataset.index),i=this._specResults[r];if(!i)return;const a=this._buildSpecNote(i),c=i.section||"Imported";if((i.status==="seima-own"||i.status==="verified"||i.status==="alternative")&&i.seimaProduct){const p=i.seimaProduct.OrderCode||i.seimaProduct["Order Code"]||((l=(d=i.seimaMatches)==null?void 0:d[0])==null?void 0:l.SeimaSKU),h=A.findProductByCode(p);if(h){b.addProductToSelection(h,a,c,i.quantity||1),t++;return}}b.addProductToSelection({OrderCode:"",Description:a,_placeholder:!0},a,c,i.quantity||1),t++});const s=document.getElementById("spec-add-all-btn");s&&(s.textContent=`Imported ${t} item${t!==1?"s":""}`,s.disabled=!0),e.forEach(n=>{n.disabled=!0})}_buildSpecNote(e){const t=[];return e.specCode&&t.push(e.specCode),e.name&&t.push(e.name),e.brand&&t.push(e.brand),e.style&&t.push(e.style),e.code&&t.push(`Code: ${e.code}`),e.finish&&t.push(e.finish),t.join(" | ")}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}async parseCSV(e){if(typeof Papa>"u")try{await x.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:s=>{console.log("CSV parsing complete:",s);const{data:n,metadata:r}=this.extractSeimaMetadata(s.data);r&&(console.log("Extracted Seima Scanner metadata from CSV:",r),this.importedMetadata=r,this.populateCustomerInfoFromMetadata(r)),t(n)},error:s=>{console.error("CSV parsing error:",s),o(s)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let n=e.length-1;n>=0;n--){const r=e[n];if(Object.values(r).some(a=>a&&a.toString().includes("---METADATA---"))){t=n;break}}if(t===-1)return{data:e.filter(n=>this.isValidProductRow(n)),metadata:null};const o=e.slice(0,t).filter(n=>this.isValidProductRow(n));let s=null;if(t+1<e.length){const n=e[t+1],r=Object.values(n).filter(i=>i!=null&&i!=="");for(const i of r)if(i&&typeof i=="string"&&i.startsWith("{"))try{s=JSON.parse(i),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!s&&r.length>0){let i=r.findIndex(a=>a&&typeof a=="string"&&(a.startsWith("{")||a.startsWith('"{')));if(i!==-1){let a=r.slice(i).join(",");a=a.replace(/^"|"$/g,"");try{s=JSON.parse(a),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(c){console.warn("Failed to parse reconstructed metadata JSON:",c),console.log("Reconstructed string was:",a);const d=a.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(d)try{s=JSON.parse(d[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(l){console.warn("Regex extraction also failed:",l)}}}}}return{data:o,metadata:s}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var s,n,r,i,a,c;if(!e)return;const t=x.getStorageItem("pdfFormSettings",{}),o={...t,name:((s=e.customer)==null?void 0:s.name)||t.name||"",email:((n=e.customer)==null?void 0:n.email)||t.email||"",telephone:((r=e.customer)==null?void 0:r.phone)||t.telephone||"",project:((i=e.project)==null?void 0:i.name)||t.project||"",address:((a=e.project)==null?void 0:a.address)||t.address||"",projectNotes:((c=e.project)==null?void 0:c.notes)||t.projectNotes||""};e.staff&&x.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),x.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await x.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const s=new FileReader;s.onload=n=>{try{const r=new Uint8Array(n.target.result),i=XLSX.read(r,{type:"array"}),a=i.SheetNames[0],c=i.Sheets[a],d=XLSX.utils.sheet_to_json(c,{header:1,defval:""});if(d.length===0){o(new Error("Excel file is empty"));return}const l=d[0],h=d.slice(1).map(w=>{const g={};return l.forEach((S,m)=>{g[S]=w[m]||""}),g});console.log("Excel parsing complete:",h);const{data:f,metadata:y}=this.extractSeimaMetadata(h);y&&(console.log("Extracted Seima Scanner metadata from Excel:",y),this.importedMetadata=y,this.populateCustomerInfoFromMetadata(y)),t(f)}catch(r){console.error("Excel parsing error:",r),o(r)}},s.onerror=()=>{o(new Error("Failed to read Excel file"))},s.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=n=>{try{let r=JSON.parse(n.target.result);console.log("JSON parsing complete, raw data:",r);let i=[];if(Array.isArray(r))if(r.length>0&&r[0].productsJson)for(const c of r){const d=this.extractProductsFromRecord(c);i.push(...d)}else i=r;else r&&typeof r=="object"&&(i=this.extractProductsFromRecord(r));if(i.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const a=i.map(c=>({Code:c.orderCode||c.OrderCode||c.code||c.Code||"",Description:c.description||c.Description||c.productName||c["Product Name"]||"",Quantity:c.quantity||c.Quantity||1,Room:c.room||c.Room||"Blank",Notes:c.notes||c.Notes||"","Price ea inc GST":c.priceIncGst||c.PriceIncGst||c.price||c.Price||"",_originalItem:c}));console.log("Normalized JSON data:",a),t(a)}catch(r){console.error("JSON parsing error:",r),o(new Error("Invalid JSON format: "+r.message))}},s.onerror=()=>{o(new Error("Failed to read JSON file"))},s.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let s=0;s<e.length;s+=o){const n=e.slice(s,s+o);await this.processChunk(n,t),await new Promise(r=>setTimeout(r,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const s=o[t.productsJson];if(!s){console.log("Skipping row - no Products JSON data");continue}let n=[];try{typeof s=="string"?n=JSON.parse(s):Array.isArray(s)&&(n=s)}catch(r){console.warn("Failed to parse Products JSON:",r,s);continue}if(!Array.isArray(n)||n.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${n.length} products from selection record`);for(const r of n)await this.processSeimaProduct(r)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",s=parseInt(e.quantity||e.Quantity)||1,n=String(e.room||e.Room||"Blank").trim(),r=String(e.notes||e.Notes||"").trim(),i=e.priceIncGst||e.PriceIncGst||e.price||"";n&&n!=="Blank"&&this.ensureRoomExists(n);const a=this.validateProductCode(t);if(!a.isValid){console.log("Excluding product:",t,"-",a.reason);return}let c=0,d=0;if(i){const h=String(i).replace(/[^\d.-]/g,"");c=parseFloat(h)||0,d=c/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:s,priceIncGst:c,room:n,notes:r});const l=await this.findProductInCatalog(t,o),p=this.createProductObject({productCode:t,productName:o,priceExGst:d,priceIncGst:c,catalogProduct:l});l||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:s,price:c>0?c.toFixed(2):"N/A"}),b.addProductToSelection(p,r,n,s),this.processedData.push({...p,quantity:s,notes:r,room:n})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=R.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),s=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(s)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:s,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const n=t.some(c=>c.toLowerCase()==="code")&&!t.some(c=>c.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",n);const r=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),i=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]),a=this.findColumnByPatterns(t,["adjusted amount","adjustedamount"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:r||i,adjustedAmount:a,room:this.findColumnByPatterns(t,o.room||["room","location"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:n||!!r||t.some(c=>c.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const s=e.find(n=>n.toLowerCase().includes(o.toLowerCase()));if(s)return s}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",s=t.productName?e[t.productName]:"",n=t.quantity?e[t.quantity]:"1",r=t.price?e[t.price]:"",i=t.room?String(e[t.room]||"").trim():"",a=t.notes?String(e[t.notes]||"").trim():"",c=String(o).trim(),d=this.validateProductCode(c);if(!d.isValid){console.log("Excluding row:",c,"-",d.reason);return}const l=Math.max(1,parseInt(n)||1);let p=0,h=0;if(t.adjustedAmount&&l>0){const g=e[t.adjustedAmount];h=(parseFloat(String(g).replace(/[^\d.-]/g,""))||0)/l,p=h*1.1}else if(r){const g=String(r).replace(/[^\d.-]/g,""),S=parseFloat(g)||0;S>0&&(t.priceIncludesGst?(p=S,h=S/1.1):(h=S,p=S*1.1))}const f=i||"Blank";f!=="Blank"&&this.ensureRoomExists(f),console.log("Processing product:",{productCode:c,productName:s,quantity:l,priceIncGst:p,room:f,notes:a});const y=await this.findProductInCatalog(c,s),w=this.createProductObject({productCode:c,productName:s,priceExGst:h,priceIncGst:p,catalogProduct:y});y?console.log("Found product in catalog:",c):(console.log("Product not found in catalog:",c),this.notFoundProducts.push({orderCode:c,productName:s||"Unknown Product",quantity:l,price:p>0?p.toFixed(2):"N/A"})),b.addProductToSelection(w,a,f,l),this.processedData.push({...w,quantity:l,notes:a,room:f})}async findProductInCatalog(e,t){var s;const o=A.getAllProducts();if(e){const n=String(e).trim(),r=o.find(i=>[i.OrderCode,i.orderCode,i["Order Code"],i.order_code].some(c=>c&&String(c).trim().toLowerCase()===n.toLowerCase()));if(r)return console.log("Found product in catalog by code:",n,r),r}if(t){const n=String(t).trim().toLowerCase(),r=o.find(i=>[i.productName,i["Product Name"],i.description,i.Description,i.LongDescription].some(c=>c&&String(c).trim().toLowerCase()===n));if(r)return console.log("Found product in catalog by name:",t,r),r}if(e&&$.isEnabled())try{const n=await $.findSeimaMatches(e);if(((s=n==null?void 0:n.matches)==null?void 0:s.length)>0){const r=n.matches[0],i=o.find(a=>String(a.OrderCode||"").trim()===String(r.SeimaSKU).trim());if(i)return console.log(`Crosshair: mapped ${e} (${n.competitor}) -> ${r.SeimaSKU}`),i}}catch(n){console.warn("Crosshair lookup failed for",e,n)}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const n=t.querySelector("h5");n&&(n.textContent="Products added with placeholder information:",n.style.color="#2563eb");const r=this.notFoundProducts.map(i=>`<li><strong>${i.orderCode}</strong> - ${i.productName} (Qty: ${i.quantity}, Price: ${i.price})</li>`).join("");o.innerHTML=`<ul>${r}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const s=document.getElementById("import-close-btn");s&&this.processedData.length>0&&(s.textContent="View Products",s.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=x.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};x.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=R.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(s){console.warn("Invalid product code regex pattern:",o.regex,s)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:s,catalogProduct:n}){return{OrderCode:e,orderCode:e,productName:t||(n?n.productName:"Unknown Product"),"Product Name":t||(n?n["Product Name"]:"Unknown Product"),Description:t||(n?n.Description:"Unknown Product"),description:t||(n?n.description:"Unknown Product"),LongDescription:n?n.LongDescription||n["Long Description"]:"","Long Description":n?n.LongDescription||n["Long Description"]:"",price:o>0?o.toFixed(2):n?n.price:"0.00",Image_URL:n?n.Image_URL||n.imageUrl:"assets/no-image.png",imageUrl:n?n.Image_URL||n.imageUrl:"assets/no-image.png",Website_URL:n?n.Website_URL||n.websiteUrl:"",websiteUrl:n?n.Website_URL||n.websiteUrl:"",Diagram_URL:n?n.Diagram_URL||n.diagramUrl:"",diagramUrl:n?n.Diagram_URL||n.diagramUrl:"",Datasheet_URL:n?n.Datasheet_URL||n.datasheetUrl:"",datasheetUrl:n?n.Datasheet_URL||n.datasheetUrl:"",RRP_EXGST:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",rrpExGst:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",RRP_INCGST:s>0?s.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00",rrpIncGst:s>0?s.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00"}}ensureRoomExists(e){!e||e==="Blank"||R.get("rooms.predefined",[]).some(r=>r.name===e)||b.getCustomRooms().some(r=>r.name===e)||(console.log("Adding imported room as custom room:",e),b.addCustomRoom(e))}}class vo{constructor(){var e,t,o,s;this.isEnabled=(e=U.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=U.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=U.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(s=U.PRESENTATION_RECORDING)==null?void 0:s.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=J.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const s=await this.sendToGoogleSheets(o);if(s.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(s.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),s=e.gridRows||b.getSelectedProducts()||[],n=s.filter(l=>l.product).length,r=s.reduce((l,p)=>l+(parseInt(p.quantity)||1),0),i=[...new Set(s.map(l=>l.room).filter(Boolean))],a=this.calculateEstimatedValue(s);let c=[];try{const l=localStorage.getItem("customRoomOrder");l&&(c=JSON.parse(l))}catch(l){console.warn("Could not load room order:",l)}const d=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:U.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(s.map(l=>{var p;return{id:l.id,product:l.product?{OrderCode:l.product.OrderCode||"",Description:l.product.Description||"",RRP_INCGST:l.product.RRP_INCGST||"0.00",RRP_EX:l.product.RRP_EX||"0.00",Image_URL:l.product.Image_URL||"",Diagram_URL:l.product.Diagram_URL||"",Website_URL:l.product.Website_URL||"",BARCODE:l.product.BARCODE||""}:null,quantity:l.quantity||1,room:l.room||"",notes:l.notes||"",price:l.price||((p=l.product)==null?void 0:p.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(c),pdfSettingsJson:JSON.stringify(d),totalProducts:n,totalQuantity:r,totalRooms:i.length,roomsList:i.join(", "),estimatedValue:a}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var i,a;if(!o.product)return;const s=parseInt(o.quantity)||1,n=o.price||((i=o.product)==null?void 0:i.RRP_INCGST)||((a=o.product)==null?void 0:a.RRP_EX)||"0",r=parseFloat(n.toString().replace(/[^0-9.]/g,""))||0;t+=r*s}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const s=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",s.status,s.statusText),!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const n=await s.text();console.log("📊 Raw response:",n);try{return JSON.parse(n)}catch(r){return console.error("📊 Failed to parse JSON response:",r),{success:!1,error:"Invalid JSON response",raw:n}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(s=>setTimeout(s,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const le=new vo;class bo{constructor(){var e;this.googleSheetsUrl=(e=U.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=J.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const s=new URL(this.googleSheetsUrl);s.searchParams.append("action","getPresenterSelections"),s.searchParams.append("staffEmail",o),e&&s.searchParams.append("deletedOnly","true");const n=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const r=await n.json();if(r.success&&r.selections)return console.log(`✅ Fetched ${r.selections.length} selections`),e||(this.cachedSelections=r.selections,this.cacheTimestamp=Date.now()),r.selections;throw new Error(r.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const n=(s.customerName||"").toLowerCase(),r=(s.customerProject||"").toLowerCase(),i=(s.documentName||"").toLowerCase(),a=(s.date||"").toLowerCase();return n.includes(o)||r.includes(o)||i.includes(o)||a.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const s=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-s}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const s=parseInt(o[0]),n=parseInt(o[1])-1,r=parseInt(o[2]);if(t){const i=t.replace(/[AP]M/i,"").trim().split(":"),a=parseInt(i[0])||0,c=parseInt(i[1])||0,d=t.toUpperCase().includes("PM");return new Date(r,n,s,d&&a!==12?a+12:a,c)}return new Date(r,n,s)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(i){return console.error("Failed to parse products JSON:",i),{success:!1,error:"Invalid products data"}}let s=[];try{s=JSON.parse(e.roomOrderJson||"[]")}catch(i){console.warn("Could not parse room order:",i)}let n={};try{n=JSON.parse(e.pdfSettingsJson||"{}")}catch(i){console.warn("Could not parse PDF settings:",i)}const r=await this.enrichProductsWithCatalog(o);if(t==="replace"){b.clearAllSelections();const i={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(i));const a={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(a)),s.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(s)),Object.keys(n).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(n)),r.forEach(c=>{c.product&&b.addProductToSelection(c.product,c.room||"",c.quantity||1,c.notes||"",c.price||null)})}else t==="merge"&&r.forEach(i=>{i.product&&(b.getSelectedProducts().some(d=>{var l;return((l=d.product)==null?void 0:l.OrderCode)===i.product.OrderCode&&d.room===i.room})||b.addProductToSelection(i.product,i.room||"",i.quantity||1,i.notes||"",i.price||null))});return le.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${r.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:r.length,roomOrder:s,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const s=o.product.OrderCode||o.product.orderCode;if(s){const n=A.findProductByCode(s);n?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:n,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||n.RRP_EX||"0.00"}):(console.warn(`Product ${s} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:s,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}}const de=new bo;class So{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await de.fetchSelections(this.showDeletedMode,!0),this.allSelections=de.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
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
    `)}attachEventListeners(){var t,o,s,n,r;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",i=>{i.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",i=>{this.currentSearchQuery=i.target.value,this.filterAndRender()}),(s=document.getElementById("picker-show-deleted"))==null||s.addEventListener("change",i=>{this.showDeletedMode=i.target.checked,this.fetchAndRenderSelections()}),(n=document.getElementById("picker-refresh"))==null||n.addEventListener("click",()=>{de.clearCache(),this.fetchAndRenderSelections()}),(r=document.getElementById("picker-retry-btn"))==null||r.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),s=document.getElementById("picker-empty"),n=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),n&&(n.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),s=document.getElementById("picker-table"),n=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),s&&(s.style.display="none"),n&&(n.style.display="none")}filterAndRender(){this.filteredSelections=de.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),s=document.getElementById("picker-table-body");if(!s)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),s.innerHTML=this.filteredSelections.map((r,i)=>`
      <tr data-index="${i}" data-id="${r.id}">
        <td class="col-date">
          <div>${this.formatDate(r.date)}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary, #9ca3af);">${this.formatTime(r.time)}</div>
        </td>
        <td class="col-customer">
          <div class="picker-customer-name">${this.escapeHtml(r.customerName||"Unknown")}</div>
          <div class="picker-customer-email">${this.escapeHtml(r.customerEmail||"")}</div>
        </td>
        <td class="col-project">
          <div class="picker-project-name">${this.escapeHtml(r.customerProject||"-")}</div>
          <div class="picker-document-name">${this.escapeHtml(r.documentName||"")}</div>
        </td>
        <td class="col-products" style="text-align: right;">
          ${r.totalProducts||0}
        </td>
        <td class="col-value" style="text-align: right;">
          $${this.formatValue(r.estimatedValue)}
        </td>
        <td class="col-actions">
          <button class="picker-load-btn" data-action="load" data-index="${i}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${i}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${i}">Delete</button>`}
        </td>
      </tr>
    `).join("");const n=document.getElementById("picker-selection-count");n&&(n.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const s=t.dataset.action,n=parseInt(t.dataset.index),r=this.filteredSelections[n];s==="load"?this.showLoadConfirmation(r):s==="delete"?this.confirmDelete(r):s==="restore"&&this.restoreSelection(r)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const s=parseInt(t.dataset.index),n=this.filteredSelections[s];this.showLoadConfirmation(n)})}))}showLoadConfirmation(e){const t=b.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("picker-confirm-dialog");n.querySelectorAll("button[data-action]").forEach(r=>{r.addEventListener("click",()=>{const i=r.dataset.action;n.remove(),i==="replace"?this.loadSelection(e,"replace"):i==="merge"&&this.loadSelection(e,"merge")})}),n.addEventListener("click",r=>{r.target===n&&n.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await de.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

This can be restored later.`))try{const t=await de.deleteSelections([e.id]);t.success?(this.showToast("Selection deleted"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to delete")}catch(t){this.showError(t.message)}}async restoreSelection(e){try{const t=await de.restoreSelections([e.id]);t.success?(this.showToast("Selection restored"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to restore")}catch(t){this.showError(t.message)}}showToast(e){const t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const s=t[2],n=(t[3]||"").toUpperCase();return n==="PM"&&o!==12?o+=12:n==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${s}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const ft=new So,it="pdfWizardSettings",at="tipTailSettings",ze="customerLogo";class xo{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),s=document.createElement("div");if(s.id="pdf-wizard-container",s.innerHTML=o,document.body.appendChild(s),!document.querySelector('link[href*="design-system.css"]')){const n=document.createElement("link");n.rel="stylesheet",n.href="./css/design-system.css",document.head.appendChild(n)}this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=b.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var s,n,r;return{...o.product,Image_URL:((s=o.product)==null?void 0:s.Image_URL)||((n=o.product)==null?void 0:n.imageUrl)||"",Diagram_URL:((r=o.product)==null?void 0:r.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),ut(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}loadSavedSettings(){const e=x.getStorageItem(it,null);if(e){const n=this.getDefaultData();this.wizardData={...n,...e,customer:{...n.customer,...e.customer||{}},options:{...n.options,...e.options||{}},customise:{...n.customise,...e.customise||{}}}}const t=x.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);const o=localStorage.getItem(ze);o&&(this.wizardData.customer.logo=o);const s=x.getStorageItem(at,{});s.tipAsset&&(this.wizardData.customise.tipPdf=s.tipAsset),s.tailAsset&&(this.wizardData.customise.tailPdf=s.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",s=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${s?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(r=>{const i=r.replace("tip-","").replace(".pdf",""),a=o===`./assets/${r}`;n+=`
          <label class="option-card${a?" selected":""}" data-tip="${r}">
            <input type="radio" name="tipPdf" value="./assets/${r}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${i}</span>
          </label>
        `}),e.innerHTML=n,e.querySelectorAll(".option-card").forEach(r=>{r.addEventListener("click",()=>{var a;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),r.classList.add("selected");const i=r.querySelector("input");i&&(i.checked=!0),this.wizardData.customise.tipPdf=((a=r.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",s=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${s?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(r=>{const i=r.replace("tail-","").replace(".pdf",""),a=o===`./assets/${r}`;n+=`
          <label class="option-card${a?" selected":""}" data-tail="${r}">
            <input type="radio" name="tailPdf" value="./assets/${r}" ${a?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${i}</span>
          </label>
        `}),t.innerHTML=n,t.querySelectorAll(".option-card").forEach(r=>{r.addEventListener("click",()=>{var a;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(c=>c.classList.remove("selected")),r.classList.add("selected");const i=r.querySelector("input");i&&(i.checked=!0),this.wizardData.customise.tailPdf=((a=r.querySelector("input"))==null?void 0:a.value)||"",this.saveSettings()})})}}setupEventHandlers(){var e,t,o;(e=document.getElementById("wizard-close"))==null||e.addEventListener("click",()=>this.close()),(t=document.getElementById("wizard-cancel"))==null||t.addEventListener("click",()=>this.close()),(o=document.getElementById("wizard-generate"))==null||o.addEventListener("click",s=>{s.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll("#pdf-wizard .form-checkbox").forEach(o=>{const s=o.querySelector('input[type="checkbox"]');s&&(o.addEventListener("click",n=>{n.target.tagName==="SPAN"&&(s.checked=!s.checked,s.dispatchEvent(new Event("change",{bubbles:!0})))}),s.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){const e=document.getElementById("show-rrp"),t=document.getElementById("include-gst"),o=document.getElementById("no-pricing"),s=document.getElementById("no-qty");o&&o.addEventListener("change",()=>{const n=o.checked;this.wizardData.options.noPricing=n,n?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity="0.5",this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity="0.5",this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity="1"),t&&(t.disabled=!1,t.parentElement.style.opacity="1")),this.saveSettings()}),e&&e.addEventListener("change",()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener("change",()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),s&&s.addEventListener("change",()=>{this.wizardData.options.noQty=s.checked,this.saveSettings()})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),s=document.getElementById("logo-preview-img"),n=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=r=>{r.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=r=>{r.preventDefault(),e.style.borderColor="",r.dataTransfer.files.length>0&&this.handleLogoFile(r.dataTransfer.files[0])},t.onchange=r=>{r.target.files.length>0&&this.handleLogoFile(r.target.files[0])}),n&&(n.onclick=()=>{this.wizardData.customer.logo=null,localStorage.removeItem(ze),o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&s&&o&&(s.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=o=>{this.wizardData.customer.logo=o.target.result,localStorage.setItem(ze,o.target.result);const s=document.getElementById("logo-preview-container"),n=document.getElementById("logo-preview-img"),r=document.getElementById("logo-upload-zone");n&&(n.src=o.target.result),s&&(s.style.display="block"),r&&(r.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),s=document.getElementById("tip-custom-name"),n=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=l=>{l.preventDefault(),t.click()},t.onchange=l=>{l.target.files.length>0&&(this.customTipPdf=l.target.files[0],s&&(s.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),n&&(n.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const l=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(l){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),l.classList.add("selected");const p=l.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tipPdf=""});const r=document.getElementById("tail-upload-link"),i=document.getElementById("tail-pdf-input"),a=document.getElementById("tail-custom-preview"),c=document.getElementById("tail-custom-name"),d=document.getElementById("remove-tail-btn");r&&i&&(r.onclick=l=>{l.preventDefault(),i.click()},i.onchange=l=>{l.target.files.length>0&&(this.customTailPdf=l.target.files[0],c&&(c.textContent=this.customTailPdf.name),a&&(a.style.display="flex"),r&&(r.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),d&&(d.onclick=()=>{this.customTailPdf=null,a&&(a.style.display="none"),i&&(i.value=""),r&&(r.style.display="");const l=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(l){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),l.classList.add("selected");const p=l.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((n,r)=>{const i=document.getElementById(n);i&&(this.wizardData.customer[t[r]]=i.value)}),Object.entries({"show-rrp":"showRrp","include-gst":"includeGst","no-pricing":"noPricing","no-qty":"noQty"}).forEach(([n,r])=>{const i=document.getElementById(n);i&&(this.wizardData.options[r]=i.checked)}),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes"}).forEach(([n,r])=>{const i=document.getElementById(n);i&&(this.wizardData.options[r]=i.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([s,n])=>{const r=document.getElementById(s);r&&(r.value=n||"")});const t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([s,n])=>{const r=document.getElementById(s);r&&(r.checked=!!n,this.wizardData.options.noPricing&&(s==="show-rrp"||s==="include-gst")&&(r.disabled=!0,r.parentElement.style.opacity="0.5"))});const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(o).forEach(([s,n])=>{const r=document.getElementById(s);r&&(r.checked=n)})}saveSettings(){try{x.setStorageItem(it,this.wizardData),x.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),x.setStorageItem(at,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const s=await this.fileToBase64(this.customTipPdf);t.tipUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(s){console.error("Failed to convert tip PDF:",s)}if(this.customTailPdf)try{const s=await this.fileToBase64(this.customTailPdf);t.tailUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(s){console.error("Failed to convert tail PDF:",s)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(s){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",s.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=o,s.readAsDataURL(e)})}showSaveDialog(){X.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=le.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,s=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("save-dialog"),r=document.getElementById("save-doc-name"),i=document.getElementById("save-notes");r==null||r.focus(),r==null||r.select(),n.querySelectorAll("button[data-action]").forEach(c=>{c.addEventListener("click",async()=>{const d=c.dataset.action;if(d==="cancel"){n.remove();return}const l=(r==null?void 0:r.value.trim())||"Untitled Selection",p=(i==null?void 0:i.value.trim())||"",h={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:l,notes:p,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:b.getSelectedProducts()};n.querySelectorAll("button").forEach(f=>f.disabled=!0),c.textContent="Saving...";try{let f;if(d==="save-update"){const y=le.getCurrentSelectionId();f=await le.updateSelection(y,h)}else f=await le.saveSelection(h);n.remove(),f.success?this.showToast(d==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(f.error||"Unknown error"),"error")}catch(f){n.remove(),this.showToast("Failed to save: "+f.message,"error")}})}),n.addEventListener("click",c=>{c.target===n&&n.remove()});const a=c=>{c.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){X.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{ft.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const s=JSON.parse(localStorage.getItem("pdfSettings")||"{}");s.showRrp!==void 0&&(this.wizardData.options.showRrp=s.showRrp),s.includeGst!==void 0&&(this.wizardData.options.includeGst=s.includeGst),s.noPricing!==void 0&&(this.wizardData.options.noPricing=s.noPricing),s.noQty!==void 0&&(this.wizardData.options.noQty=s.noQty),s.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=s.includeDescriptions),s.includeNotes!==void 0&&(this.wizardData.options.includeNotes=s.includeNotes),s.tipPdf&&(this.wizardData.customise.tipPdf=s.tipPdf),s.tailPdf&&(this.wizardData.customise.tailPdf=s.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
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
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const Eo=new xo;class Po{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:s=null}){const n=this.nextId++,r=document.createElement("div");r.className=`toast toast-${t}`,r.setAttribute("role","alert"),r.setAttribute("aria-live","polite");const i={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};r.innerHTML=`
      <div class="toast-icon">${i[t]||i.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${s?`<button class="toast-action" type="button">${s.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const a=r.querySelector(".toast-close");if(a.onclick=()=>this.dismiss(n),s&&s.callback){const c=r.querySelector(".toast-action");c.onclick=()=>{s.callback(),this.dismiss(n)}}return this.container.appendChild(r),this.toasts.set(n,r),requestAnimationFrame(()=>{r.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(n),o),n}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const ae=new Po;window.toast=ae;class Co{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,s=!1){this.hideDropdown();const n=document.createElement("ul");n.className="global-search-dropdown";const r=300,i=e.getBoundingClientRect(),a=window.innerWidth,c=window.innerHeight,d=i.width,l=c-i.bottom,p=i.top;let h=!1;l<r&&p>l&&(h=!0);let f;h?f=Math.max(8,i.top-r-8):f=Math.min(c-r-8,i.bottom+8);let y=i.left;y+d>a-8&&(y=a-d-8),y<8&&(y=8);const w={position:"fixed",top:`${f}px`,left:`${y}px`,width:`${d}px`,minWidth:`${d}px`,maxWidth:`${d}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${r}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate"};Object.keys(w).forEach(g=>{n.style.setProperty(g,w[g],"important")}),n.dropdownHeight=r,t.length===0?n.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':n.innerHTML=t.map(g=>{if(g._crosshairValidate){const N=g._crosshairValidate,se=N.imageUrl?`<img src="${x.sanitizeInput(N.imageUrl)}" alt="" style="width:32px; height:32px; object-fit:contain; border-radius:4px; margin-right:10px; vertical-align:middle; flex-shrink:0;">`:"";return`<li data-validate-competitor="${x.sanitizeInput(N.competitor)}" data-validate-code="${x.sanitizeInput(N.productCode)}"
                       style="padding: 10px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6;
                              font-size: 13px; line-height: 1.4; display: flex; align-items: center;
                              background: #fffbeb !important; border-left: 3px solid #f59e0b;">
            ${se}
            <div style="flex:1; min-width:0;">
              <div style="font-weight: 600; color: #92400e;">${x.sanitizeInput(N.productName)}</div>
              <div style="color: #78716c; font-size: 11px;">${x.sanitizeInput(N.competitor)} · #${x.sanitizeInput(N.productCode)}${N.finish?" · "+x.sanitizeInput(N.finish):""} · ${N.matchCount} suggested match${N.matchCount!==1?"es":""}</div>
            </div>
            <span style="color: #d97706; font-size: 11px; font-weight: 600; white-space: nowrap; margin-left: 8px;">Review →</span>
          </li>`}const S=g.OrderCode||g.Code||"",m=g.Description||g.ProductName||g["Product Name"]||"",v=g.Image_URL||g.image_url||"",E=g._crosshairMatch,I=E?`<span style="display: inline-block; background: ${E.status==="Verified"?"#e8f5e9":"#e3f2fd"}; color: ${E.status==="Verified"?"#2e7d32":"#1565c0"}; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 8px; margin-left: 8px;">↔ ${x.sanitizeInput(E.competitorLabel||E.competitor)}</span>`:"",M=v?`<img src="${x.sanitizeInput(v)}" alt="" style="width:36px; height:36px; object-fit:contain; border-radius:4px; margin-right:10px; flex-shrink:0;" onerror="this.style.display='none'">`:"",z=E?Object.fromEntries(Object.entries(g).filter(([N])=>N!=="_crosshairMatch")):g;return`<li data-product='${JSON.stringify(z).replace(/'/g,"&apos;")}'
                     style="padding: 8px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: flex; align-items: center; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: ${E?"#f0f7ff":"#fff"} !important;">
          ${M}
          <div style="flex:1; min-width:0;">
            <span style="font-weight: 600; color: #2563eb;">${x.sanitizeInput(S)}</span>
            <span style="color: #6b7280; margin: 0 8px;">—</span>
            <span style="color: #374151;">${x.sanitizeInput(m)}</span>
            ${I}
          </div>
        </li>`}).join(""),n.querySelectorAll("li[data-validate-competitor]").forEach(g=>{g.addEventListener("mouseenter",()=>g.style.background="#fef3c7"),g.addEventListener("mouseleave",()=>g.style.background="#fffbeb"),g.onclick=()=>{const S=g.dataset.validateCompetitor,m=g.dataset.validateCode;window.location.href=`screens/validator.html?competitor=${encodeURIComponent(S)}&search=${encodeURIComponent(m)}`}}),n.querySelectorAll("li[data-product]").forEach((g,S)=>{g.addEventListener("mouseenter",()=>{n.querySelectorAll("li.active").forEach(m=>m.classList.remove("active")),g.classList.add("hover")}),g.addEventListener("mouseleave",()=>{g.classList.remove("hover")}),g.onclick=()=>{try{const m=JSON.parse(g.getAttribute("data-product"));o(m),this.hideDropdown()}catch(m){console.error("Failed to parse product data:",m)}},s&&S===0&&(g.classList.add("active"),g.style.setProperty("background","#b87333","important"),g.querySelectorAll("span").forEach(m=>{m.style.setProperty("color","#ffffff","important")}))}),document.body.appendChild(n),this.activeDropdown=n,this.updatePositionHandler=()=>{const g=e.getBoundingClientRect(),S=window.innerHeight,m=n.dropdownHeight||300,v=S-g.bottom,E=g.top;let I=!1;v<m&&E>v&&(I=!0);let M;I?M=Math.max(8,g.top-m-8):M=Math.min(S-m-8,g.bottom+8);let z=g.left;z+g.width>a-8&&(z=a-g.width-8),z<8&&(z=8),n.style.setProperty("top",`${M}px`,"important"),n.style.setProperty("left",`${z}px`,"important"),n.style.setProperty("width",`${g.width}px`,"important"),n.style.setProperty("min-width",`${g.width}px`,"important"),n.style.setProperty("max-width",`${g.width}px`,"important")},window.addEventListener("scroll",this.updatePositionHandler),window.addEventListener("resize",this.updatePositionHandler)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const je="tipTailSettings",Ge="customerLogo";class Io{constructor(){this.gridRows=[],this.nextRowId=1,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new Co,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection()}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),s=document.getElementById("entry-load"),n=document.getElementById("entry-new"),r=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),s&&s.addEventListener("click",()=>this.showLoadPicker()),n&&n.addEventListener("click",()=>this.addEmptyRow()),r&&r.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await le.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),ae.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=b.getUserSettings();if(!((e==null?void 0:e.staffEmail)||""))return;const o=await de.fetchSelections();if(o.length>0){const s=o[0],n=document.getElementById("entry-continue"),r=document.getElementById("recent-selection-name");n&&r&&(n.style.display="flex",r.textContent=`${s.documentName||s.customerName} • ${s.date}`,n.dataset.selectionId=s.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){ae.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=x.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:x.getStorageItem("pdfWizardSettings",{}),gridRows:b.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),s=document.getElementById("clear-all-btn"),n=document.getElementById("settings-btn"),r=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),s&&(s.onclick=()=>this.showClearAllModal()),n&&(n.onclick=()=>this.showSettingsModal()),r&&(r.onclick=()=>this.addEmptyRow());const i=document.getElementById("clear-all-cancel"),a=document.getElementById("clear-all-confirm");i&&(i.onclick=()=>this.hideClearAllModal()),a&&(a.onclick=()=>{var E;const v=((E=document.getElementById("clear-customer-details"))==null?void 0:E.checked)??!0;this.clearAll(v),this.hideClearAllModal()});const c=document.getElementById("settings-cancel"),d=document.getElementById("settings-save");c&&(c.onclick=()=>this.hideSettingsModal()),d&&(d.onclick=()=>this.saveSettings());const l=document.getElementById("clear-all-modal"),p=document.getElementById("settings-modal");l&&(l.onclick=v=>{v.target===l&&this.hideClearAllModal()}),p&&(p.onclick=v=>{v.target===p&&this.hideSettingsModal()});const h=document.getElementById("sort-by");h&&(h.onchange=()=>this.handleSortChange());const f=document.getElementById("sort-refresh-btn");f&&(f.onclick=()=>this.handleSortChange());const y=document.getElementById("grid-body");y&&(y.addEventListener("input",this.handleGridInput.bind(this)),y.addEventListener("change",this.handleGridChange.bind(this)),y.addEventListener("click",this.handleGridClick.bind(this)),y.addEventListener("keydown",this.handleGridKeydown.bind(this)),y.addEventListener("focusin",this.handleGridFocusIn.bind(this)),y.addEventListener("focusout",this.handleGridFocusOut.bind(this)),y.addEventListener("dragstart",this.handleDragStart.bind(this)),y.addEventListener("dragover",this.handleDragOver.bind(this)),y.addEventListener("dragleave",this.handleDragLeave.bind(this)),y.addEventListener("drop",this.handleDrop.bind(this)),y.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",v=>{!v.target.closest(".grid-product-cell")&&!v.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const w=document.getElementById("pdf-email-modal"),g=document.getElementById("pdf-email-cancel");g&&w&&(g.onclick=()=>{w.style.display="none"});const S="pdfFormSettings",m=document.getElementById("pdf-email-form");w&&w.addEventListener("show",()=>{const v=x.getStorageItem(S,{});m&&(m["user-name"].value=v.name||"",m["user-project"].value=v.project||"",m["user-address"].value=v.address||"",m["user-email"].value=v.email||"",m["user-telephone"].value=v.telephone||"",m["exclude-prices"].checked=!!v.excludePrices,m["exclude-qty"].checked=!!v.excludeQty,m["exclude-long-description"].checked=!!v.excludeLongDescription,m["include-gst"].checked=!!v.includeGst)}),m&&(m.addEventListener("input",()=>{x.setStorageItem(S,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked})}),m.addEventListener("change",()=>{x.setStorageItem(S,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked})}),m.onsubmit=v=>{var I,M,z,N,se,ue,pe,ye,we,Te,Be;v.preventDefault(),x.setStorageItem(S,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked});const E={name:((I=m["user-name"])==null?void 0:I.value)||"",project:((M=m["user-project"])==null?void 0:M.value)||"",address:((z=m["user-address"])==null?void 0:z.value)||"",email:((N=m["user-email"])==null?void 0:N.value)||"",telephone:((se=m["user-telephone"])==null?void 0:se.value)||"",excludePrice:(ue=m["exclude-qty"])!=null&&ue.checked?!0:((pe=m["exclude-price"])==null?void 0:pe.checked)||((ye=m["exclude-prices"])==null?void 0:ye.checked)||!1,excludeQty:((we=m["exclude-qty"])==null?void 0:we.checked)||!1,excludeLongDescription:((Te=m["exclude-long-description"])==null?void 0:Te.checked)||!1,includeGst:((Be=m["include-gst"])==null?void 0:Be.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",E),window.showPdfFormScreen?window.showPdfFormScreen(E):typeof showPdfFormScreen=="function"&&showPdfFormScreen(E),w&&(w.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const s=o.querySelector(".grid-search-input");s&&s.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],s={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&b.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),s.product){const n=s.product.Description||s.product.ProductName||s.product.OrderCode||"Product",r=n.length>30?n.substring(0,30)+"...":n;ae.withUndo(`Removed "${r}"`,()=>{this.restoreRow(s)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=b.addProductToSelection({...t.product,qty:t.qty,notes:t.notes,room:t.room,customPrice:t.price}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),ae.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(r=>r.id===e);if(o===-1)return;let s;if(t==="up"?s=Math.max(0,o-1):t==="down"&&(s=Math.min(this.gridRows.length-1,o+1)),s===o)return;const n=this.gridRows.splice(o,1)[0];this.gridRows.splice(s,0,n),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const r=document.querySelector(`[data-row-id="${e}"]`);r&&(r.style.backgroundColor="#dbeafe",setTimeout(()=>{r.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const s=await this.searchProducts(t);this.searchCache.set(o,s),this.showSearchResults(e,s,t)}catch(s){console.error("Product search failed:",s),this.hideSearchDropdown(e)}},300)}async searchProducts(e){var c;A.isLoaded||await new Promise(d=>{const l=()=>{A.isLoaded?d():setTimeout(l,100)};l()});const t=$.isEnabled(),o=$.isWriteEnabled();let s=null;if(t&&e.trim().length>=2&&!e.includes(" "))try{s=await $.findSeimaMatches(e.trim())}catch{}const[n,r,i]=await Promise.all([Promise.resolve(A.searchProducts(e,50)),t?$.findAlternatives(e).catch(d=>(console.warn("Crosshair competitor lookup failed:",d),[])):Promise.resolve([]),o?$.findUnvalidatedProducts(e).catch(d=>(console.warn("Crosshair unvalidated lookup failed:",d),[])):Promise.resolve([])]),a=[...n];if(s&&((c=s.matches)==null?void 0:c.length)>0){const d=String(s.matches[0].SeimaSKU),l=A.findProductByCode(d);if(l&&!a.some(p=>(p.OrderCode||p.Code)===d)){const p=s.competitorProduct,h=String((p==null?void 0:p.product_code)||s.matches[0].CompetitorSKU||""),f=(p==null?void 0:p.product_name)||"",y=(p==null?void 0:p.finish)||"",w=[s.competitor+":",h,f?"- "+f:"",y?"- "+y:""].filter(Boolean).join(" ");a.unshift({...l,_crosshairMatch:{competitor:s.competitor,competitorProduct:p,competitorLabel:w,confidence:s.matches[0].Confidence,reason:s.matches[0].MatchReason,status:s.matches[0].Status}})}}if(r.length>0){const d=new Set(a.map(l=>l.OrderCode));for(const l of r){const p=A.findProductByCode(l.seimaSKU);if(!p||d.has(p.OrderCode))continue;d.add(p.OrderCode);const h=l.competitorProduct,f=String((h==null?void 0:h.product_code)||l.match.CompetitorSKU||""),y=(h==null?void 0:h.product_name)||"",w=(h==null?void 0:h.finish)||"",g=[l.competitor+":",f,y?"- "+y:"",w?"- "+w:""].filter(Boolean).join(" ");a.unshift({...p,_crosshairMatch:{competitor:l.competitor,competitorProduct:h,competitorLabel:g,confidence:l.match.Confidence,reason:l.match.MatchReason,status:l.match.Status}})}}if(i.length>0)for(const d of i){const l=d.product,p=String(l.product_code||"");a.push({_crosshairValidate:{competitor:d.competitor,productCode:p,productName:l.product_name||l.collection||p,matchCount:d.matchCount,imageUrl:l.image_url,finish:l.finish||""}})}return a}showSearchResults(e,t,o){let s=!1;if(t.length>0&&o){const n=o.toUpperCase().trim(),r=t[0],i=(r.OrderCode||"").toString().toUpperCase().trim(),a=(r.BARCODE||r.Barcode||"").toString().toUpperCase().trim();(i===n||a===n)&&(s=!0)}this.dropdownManager.showDropdown(e,t,n=>this.selectProduct(e,n),s)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){var a;const o=e.closest(".grid-row"),s=o.dataset.rowId,n=this.gridRows.find(c=>c.id===s);if(!n)return;n.storageId&&((a=n.product)!=null&&a._placeholder)&&(b.removeProductFromSelection(n.storageId),n.storageId=null),n.product=t;const r=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t.RRP_INCGST||t.RRP_INCGST||t["RRP INC GST"]||t.rrpIncGst||"";n.price=r;const i=o.querySelector('input[name="price"]');i&&(i.value=r),e.value="",this.renderGrid(),this.saveRowToStorage(n),this.focusNextRowOrCreate(s)}saveRowToStorage(e){if(!e.product)return;const t={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||"0",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"0",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"},o=b.addProductToSelection(t,e.notes,e.room,e.quantity);o&&(e.storageId=o,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const s=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);s&&!s.classList.contains("populated")&&s.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){const t=e.target;if(t.classList.contains("grid-remove-btn")){const s=t.closest(".grid-row").dataset.rowId;this.removeRow(s)}else if(t.classList.contains("grid-move-btn")){const s=t.closest(".grid-row").dataset.rowId,n=t.dataset.direction;this.moveRow(s,n)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(o=>{o.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const s=o.querySelectorAll("li[data-product]"),n=o.querySelector("li.active");let r=null;const i=(a,c)=>{if(c)a.classList.add("active"),a.style.setProperty("background","#b87333","important"),a.querySelectorAll("span").forEach(d=>{d.style.setProperty("color","#ffffff","important")});else{a.classList.remove("active"),a.style.setProperty("background","#fff","important");const d=a.querySelectorAll("span");d[0]&&d[0].style.setProperty("color","#2563eb","important"),d[1]&&d[1].style.setProperty("color","#6b7280","important"),d[2]&&d[2].style.setProperty("color","#374151","important")}};switch(e.key){case"ArrowDown":if(e.preventDefault(),!n)r=s[0];else{i(n,!1);const c=(Array.from(s).indexOf(n)+1)%s.length;r=s[c]}r&&(i(r,!0),r.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!n)r=s[s.length-1];else{i(n,!1);const a=Array.from(s).indexOf(n),c=a===0?s.length-1:a-1;r=s[c]}r&&(i(r,!0),r.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),n&&n.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const s=document.createElement("div");s.textContent=`📁 ${o}`,s.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(s),e.dataTransfer.setDragImage(s,0,15),setTimeout(()=>s.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(n=>{n.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const n=t.getBoundingClientRect(),r=n.top+n.height/2;e.clientY<r?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),s=o.top+o.height/2;e.clientY<s?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(h=>{h.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const h=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const f=o.dataset.roomName;if(f==="Blank"||h===f)return;const y=o.getBoundingClientRect(),w=e.clientY<y.top+y.height/2;this.moveRoomInOrder(h,f,w),this.renderGrid();return}const s=t;if(o.classList.contains("room-header-row"))return;const n=o.dataset.rowId;if(s===n)return;const r=o.getBoundingClientRect(),i=e.clientY<r.top+r.height/2,a=this.gridRows.findIndex(h=>h.id===s),c=this.gridRows.findIndex(h=>h.id===n);if(a===-1||c===-1)return;const d=this.gridRows[a],l=this.gridRows[c];d.room!==l.room&&(d.room=l.room,this.lastUsedRoom=l.room,d.product&&d.storageId&&b.updateProductRoom(d.storageId,d.room)),this.gridRows.splice(a,1);let p=this.gridRows.findIndex(h=>h.id===n);p!==-1&&(i||p++,this.gridRows.splice(p,0,d),this.renderGrid(),setTimeout(()=>{const h=document.querySelector(`[data-row-id="${s}"]`);h&&(h.style.backgroundColor="#dbeafe",h.style.transition="background-color 0.3s ease",setTimeout(()=>{h.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=b.getUserSettings(),o=J.getCurrentUser(),s=document.getElementById("staff-name"),n=document.getElementById("staff-position"),r=document.getElementById("staff-email"),i=document.getElementById("staff-telephone"),a=document.getElementById("logged-in-profile-section"),c=document.getElementById("profile-avatar"),d=document.getElementById("profile-display-name"),l=document.getElementById("profile-display-email"),p=document.getElementById("edit-profile-btn");if(t&&(t.staffName||t.staffEmail)?(s&&(s.value=t.staffName||""),n&&(n.value=t.staffPosition||""),r&&(r.value=t.staffEmail||""),i&&(i.value=t.staffPhone||"")):o&&(s&&o.name&&(s.value=o.name),n&&o.position&&(n.value=o.position),r&&o.email&&(r.value=o.email),i&&o.phone&&(i.value=o.phone)),o){a&&(a.style.display="block"),d&&(d.textContent=o.name||""),l&&(l.textContent=o.email||""),c&&(c.textContent=this.getInitials(o.name)),p&&(p.onclick=()=>{X.showEditProfile(S=>{console.log("📱 Profile updated:",S),b.clearUserSettings(),this.showSettingsModal()})});const g=document.getElementById("change-password-btn");g&&(g.onclick=()=>{X.showChangePassword(()=>{console.log("📱 Password changed")})})}else a&&(a.style.display="none");const f=document.getElementById("settings-version-info");if(f)try{let S=(await(await fetch("./version.txt")).text()).trim();S=S.split(/\r?\n/)[0].replace(/[^0-9.v]/g,""),f.innerText=S?`v${S}`:"",f.title="App Version"}catch{f.innerText=""}const y=document.getElementById("refresh-catalog-btn");y&&(y.onclick=()=>{localStorage.removeItem("productCatalogCsv"),window.location.reload()});const w=document.getElementById("refresh-pdf-files-btn");w&&(w.onclick=async()=>{await this.refreshPdfFileList();const g=w.textContent;w.textContent="✅ Refreshed!",w.style.background="#dcfce7",w.style.color="#059669",setTimeout(()=>{w.textContent=g,w.style.background="#f3f4f6",w.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview"),t=localStorage.getItem(Ge);e&&(e.innerHTML=t?`<img src="${t}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=s=>{const n=s.target.files[0];if(n){const r=new FileReader;r.onload=i=>{localStorage.setItem(Ge,i.target.result),o&&(o.innerHTML=`<img src="${i.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},r.readAsDataURL(n)}},t.onclick=()=>{localStorage.removeItem(Ge),o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(n=>`./assets/${n}`),o=document.getElementById("tip-pdf-select"),s=document.getElementById("tail-pdf-select");o&&s&&(o.innerHTML='<option value="">(None)</option>',s.innerHTML='<option value="">(None)</option>',t.forEach(n=>{const r=n.split("/").pop();o.innerHTML+=`<option value="${n}">${r}</option>`,s.innerHTML+=`<option value="${n}">${r}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const s=await o.json();return console.log("✅ Server provided files:",s),s}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const s=await o.json();return console.log("✅ assets-list.json provided files:",s),s}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const s=await fetch(`./assets/${o}`,{method:"HEAD"});s.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${s.status})`)}catch(s){console.log(`❌ Error checking ${o}:`,s.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem(je)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),s=document.getElementById("tip-pdf-upload"),n=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",s&&(s.style.fontWeight="bold",s.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",n&&(n.style.fontWeight="bold",n.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),s=document.getElementById("tail-pdf-upload"),n=document.getElementById("tip-pdf-clear"),r=document.getElementById("tail-pdf-clear"),i=document.getElementById("tip-pdf-selected"),a=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),i&&(i.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),a&&(a.textContent="")},o.onchange=c=>{const d=c.target.files[0];if(d){const l=new FileReader;l.onload=p=>{const h=p.target.result,f=new Uint8Array(h);let y="";for(let g=0;g<f.length;g++)y+=String.fromCharCode(f[g]);const w=btoa(y);this.saveTipTailSettings({tipAsset:"",tipUpload:w,tipUploadName:d.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},l.readAsArrayBuffer(d)}},s.onchange=c=>{const d=c.target.files[0];if(d){const l=new FileReader;l.onload=p=>{const h=p.target.result,f=new Uint8Array(h);let y="";for(let g=0;g<f.length;g++)y+=String.fromCharCode(f[g]);const w=btoa(y);this.saveTipTailSettings({tailAsset:"",tailUpload:w,tailUploadName:d.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),s&&(s.style.fontWeight="bold",s.style.color="#2563eb")},l.readAsArrayBuffer(d)}},n.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(d=>{e.innerHTML+=`<option value="assets/${d}">${d}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},r.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(d=>{t.innerHTML+=`<option value="assets/${d}">${d}</option>`})),s&&(s.value="",s.style.fontWeight="normal",s.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem(je)||"{}"),...e};localStorage.setItem(je,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var r,i,a,c;const e=((r=document.getElementById("staff-name"))==null?void 0:r.value)||"",t=((i=document.getElementById("staff-position"))==null?void 0:i.value)||"",o=((a=document.getElementById("staff-email"))==null?void 0:a.value)||"",s=((c=document.getElementById("staff-telephone"))==null?void 0:c.value)||"",n={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:s.trim()};b.saveUserSettings(n),this.hideSettingsModal(),console.log("Settings saved successfully:",n)}loadSettings(){const e=b.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),s=document.getElementById("staff-email"),n=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),s&&(s.value=e.staffEmail||""),n&&(n.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,s=this.gridRows.find(r=>r.id===o);if(!s)return;let n=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const r=prompt("Enter new room name:");if(r&&r.trim()){const i=r.trim();if(b.addCustomRoom(i))s.room=i,this.lastUsedRoom=i,console.log("✅ Added new room:",i),this.updateAllRoomDropdowns(),e.value=i;else{alert("Room name already exists or is invalid"),e.value=s.room||"Blank";return}}else{e.value=s.room||"Blank";return}}else s.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(s.quantity=Math.max(1,parseInt(e.value)||1),e.value=s.quantity,n=!0):e.classList.contains("grid-input")&&e.name==="price"?(s.price=e.value,n=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(s.notes=e.value);n&&this.updateRowTotal(t,s),s.product&&s.storageId&&(b.updateProductQuantity(s.storageId,s.quantity),b.updateProductRoom(s.storageId,s.room),b.updateProductNotes(s.storageId,s.notes),n&&e.name==="price"&&b.updateProductPrice(s.storageId,s.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const s=parseFloat((t.price||"").toString().replace(/,/g,""))||0,n=parseInt(t.quantity)||1,r=s*n;o.textContent=r>0?r.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=b.getSelectedProducts();this.gridRows=[],this.nextRowId=1,e.forEach(t=>{var r,i,a,c,d,l,p,h,f,y;const o=`row_${this.nextRowId++}`;let s="";((r=t.product)==null?void 0:r.UserEditedPrice)!==void 0&&((i=t.product)==null?void 0:i.UserEditedPrice)!==null&&((a=t.product)==null?void 0:a.UserEditedPrice)!==""?s=t.product.UserEditedPrice:s=((c=t.product)==null?void 0:c.RRP_EX)||((d=t.product)==null?void 0:d["RRP EX GST"])||((l=t.product)==null?void 0:l.RRP_EX)||((p=t.product)==null?void 0:p.rrpExGst)||((h=t.product)==null?void 0:h.RRP_EXGST)||((f=t.product)==null?void 0:f.RRP_INCGST)||((y=t.product)==null?void 0:y["RRP INC GST"])||"";const n={id:o,product:t.product,room:t.room||"Blank",quantity:t.quantity||1,price:s,notes:t.notes||"",storageId:t.id};this.gridRows.push(n)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const s=this.groupRowsByRoom(),n=[];Object.entries(s).forEach(([r,i])=>{const a=this.getRoomClass(r),d=!(r==="Blank"),l=`
        <div class="grid-row room-header-row ${a}" 
             data-room-name="${r}"
             ${d?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${d?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${r}</span>
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
      `;n.push(l),i.forEach(p=>{n.push(this.renderRowHtml(p))})}),e.innerHTML=n.join(""),this.attachSeimaMatchSuggestions()}extractCandidateCodes(e){if(!e||typeof e!="string")return[];const t=new Set,o=[],s=/(?:Code|Part\s*(?:No\.?|Number)|P\/N|Order\s*Code|SKU|Item\s*(?:No\.?|Number)?|#)\s*:?\s*([A-Za-z0-9]{4,14}(?:[.\-][A-Za-z0-9]{2,5})?)/gi;let n;for(;(n=s.exec(e))!==null;){const d=n[1].trim();d&&!t.has(d)&&(t.add(d),o.push(d))}const r=e.split(/\|/).map(d=>d.trim()),i=/^[A-Za-z0-9]{5,14}([.\-][A-Za-z0-9]{2,5})?$/,a=/\d/,c=new Set(["white","stainless","steel","black","grey","gray","chrome","brushed","matte","polished"]);for(const d of r){if(!i.test(d)||!a.test(d))continue;const l=d.toLowerCase();c.has(l)||t.has(d)||(t.add(d),o.push(d))}return o}escapeRegex(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}buildPlaceholderHintHtml(e,t){if(!e)return"";let o=x.sanitizeInput(e);if(t.length===0)return o;for(const{code:s,competitor:n,searchCode:r}of t){const i=this.escapeRegex(s),a="(?:(?:Code|Part\\s*(?:No\\.?|Number)|P\\/N|Order\\s*Code|SKU|Item\\s*(?:No\\.?|Number)?|#)\\s*:?\\s*)?",c=new RegExp("("+a+i+")","gi"),d="screens/validator.html",l=r??s,p=`${d}?competitor=${encodeURIComponent(n)}&search=${encodeURIComponent(l)}`,h=`<a href="${x.sanitizeInput(p)}" target="_blank" rel="noopener" class="grid-competitor-code-link" title="Open in Validator to link to Seima product">$1</a>`;o=o.replace(c,h)}return o}async attachSeimaMatchSuggestions(){var t,o,s;if(!$.isEnabled())return;const e=document.querySelectorAll(".grid-seima-match-wrap");for(const n of e){const r=n.dataset.rowId,i=this.gridRows.find(S=>S.id===r);if(!((t=i==null?void 0:i.product)!=null&&t._placeholder))continue;const a=i.product.Description||"",c=this.extractCandidateCodes(a);if(c.length===0)continue;const d=n.closest(".grid-product-cell"),l=d==null?void 0:d.querySelector(".grid-placeholder-hint"),p=[];for(const S of c)try{const m=await $.findCompetitorEntryByCode(S);if(m){const v=m.matchedCode??((o=m.competitorProduct)==null?void 0:o.product_code)??S;p.push({code:S,competitor:m.competitor,searchCode:v})}else console.log(`Crosshair: no competitor match for code "${S}" (row ${r})`)}catch{}if(l&&p.length>0&&(l.innerHTML=this.buildPlaceholderHintHtml(a,p)),!A.isLoaded)continue;let h=null,f="";for(const S of c)try{const m=await $.findSeimaMatches(S);if(((s=m==null?void 0:m.matches)==null?void 0:s.length)>0){const v=String(m.matches[0].SeimaSKU).trim(),E=A.findProductByCode(v);if(E){h=E;const M=(m.competitorProduct||{}).product_name||E.Description||"";f=`${m.competitor}: ${S} → ${v}${M?" – "+M:""}`;break}}}catch{}if(!h)continue;const y=document.createElement("button");y.type="button",y.className="grid-seima-match-btn";const w=(h.Description||"").trim(),g=w.length>45?w.slice(0,45)+"…":w;y.textContent=`Use Seima match: ${h.OrderCode||""} – ${g}`,y.title=f,y.addEventListener("click",()=>{const S=n.closest(".grid-row"),m=S==null?void 0:S.querySelector(".grid-search-input");m&&this.selectProduct(m,h)}),n.appendChild(y)}}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",s=t&&(t.Description||t.ProductName||t["Product Name"])||"",n=t&&(t.OrderCode||t.Code)||"",r=n?String(parseInt(n,10)):"",i=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t.RRP_INCGST||t["RRP INC GST"])||"",a=parseFloat((i||"").toString().replace(/,/g,""))||0,c=parseInt(e.quantity)||1,d=a*c,l=d>0?d.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t&&!t._placeholder?"has-product":"empty-product"}">
          ${t&&!t._placeholder?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <strong>${x.sanitizeInput(r)}</strong> ${x.sanitizeInput(s)}
              </div>
            </div>
          `:`
            ${t!=null&&t._placeholder?`<div class="grid-placeholder-hint">${x.sanitizeInput(t.Description||"")}</div>`:""}
            <input type="text" 
                   class="grid-search-input" 
                   placeholder="${t!=null&&t._placeholder?"Search for Seima alternative...":"Search for a product..."}" 
                   value="">
            ${t!=null&&t._placeholder?`<div class="grid-seima-match-wrap" data-row-id="${e.id}"></div>`:""}
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
          <div class="grid-total-display">${l}</div>
        </div>
        <div class="col-notes">
          <textarea class="grid-textarea" name="notes" placeholder="Notes..." rows="1" maxlength="140">${x.sanitizeInput(e.notes)}</textarea>
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
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const s=t.room||"Blank",n=o.room||"Blank";return s.localeCompare(n)});break;case"product":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.Description||t.product.ProductName)||"",n=o.product&&(o.product.Description||o.product.ProductName)||"";return s.localeCompare(n)});break;case"code":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.OrderCode||t.product.Code)||"",n=o.product&&(o.product.OrderCode||o.product.Code)||"";return s.localeCompare(n)});break;default:this.gridRows.sort((t,o)=>{const s=t.room||"Blank",n=o.room||"Blank";return s.localeCompare(n)});break}}groupRowsByRoom(){const e=document.getElementById("sort-by");if((e?e.value:"room")!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(i=>{const a=i.room||"Blank";o[a]||(o[a]=[]),o[a].push(i)});const s=Object.keys(o).filter(i=>i!=="Blank"),n=this.getSortedRoomNames(s),r={};return n.forEach(i=>{o[i]&&(r[i]=o[i])}),o.Blank&&(r.Blank=o.Blank),r}getSortedRoomNames(e){const t=this.customRoomOrder.filter(s=>e.includes(s)),o=e.filter(s=>!this.customRoomOrder.includes(s)).sort((s,n)=>s.localeCompare(n));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const s={};this.gridRows.forEach(c=>{const d=c.room||"Blank";s[d]||(s[d]=[])});const n=Object.keys(s).filter(c=>c!=="Blank"),i=this.getSortedRoomNames(n).filter(c=>c!==e);let a=i.indexOf(t);a===-1&&(a=i.length),o||a++,i.splice(a,0,e),this.customRoomOrder=i,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return R.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),b.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const s=this.gridRows.find(n=>n.id===o.closest(".grid-row").dataset.rowId);s&&(o.innerHTML=this.getRoomOptions(s.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let s=0,n=0;const r=new Set;this.gridRows.forEach(i=>{if(i.product&&!i.product._placeholder){s+=i.quantity;const a=parseFloat(i.price)||0;n+=a*i.quantity,i.room&&i.room!=="Blank"&&i.room.trim()!==""&&r.add(i.room)}}),e&&(e.textContent=s),t&&(t.textContent=r.size),o&&(o.textContent=n>0?`$${n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){b.clearAllSelections(),localStorage.removeItem("pdfWizardSettings"),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}syncGridToStorage(){for(const e of this.gridRows)!e.product||!e.storageId||typeof e.storageId!="string"||(b.updateProductPrice(e.storageId,e.price),b.updateProductQuantity(e.storageId,e.quantity),b.updateProductRoom(e.storageId,e.room),b.updateProductNotes(e.storageId,e.notes))}async showDownloadModal(){this.syncGridToStorage(),X.requireAuth(async()=>{try{await Eo.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF"),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}},"create PDF")}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=x.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){X.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=x.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,s=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,n=`
      <div class="save-dialog-overlay" id="save-dialog">
        <div class="save-dialog">
          <h3>Save Selection</h3>
          <p>Save your current product selection for later use.</p>
          
          <div class="save-dialog-form">
            <label class="form-label" for="save-doc-name">Document Name</label>
            <input type="text" class="form-input" id="save-doc-name" 
                   value="${this.escapeHtml(s)}" maxlength="100"
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",n);const r=document.getElementById("save-dialog"),i=document.getElementById("save-doc-name"),a=document.getElementById("save-notes");i==null||i.focus(),i==null||i.select(),r.querySelectorAll("button[data-action]").forEach(d=>{d.addEventListener("click",async()=>{const l=d.dataset.action;if(l==="cancel"){r.remove();return}const p=(i==null?void 0:i.value.trim())||"Untitled Selection",h=(a==null?void 0:a.value.trim())||"";this.currentSelectionName=p;const f={...this.prepareSelectionData(),documentName:p,notes:h};r.querySelectorAll("button").forEach(y=>y.disabled=!0),d.textContent="Saving...";try{let y;l==="save-update"?y=await le.updateSelection(this.currentSelectionId,f):(y=await le.saveSelection(f),y.success&&y.id&&(this.currentSelectionId=y.id)),r.remove(),y.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),ae.success(l==="save-update"?"Selection updated!":"Selection saved!")):ae.error("Failed to save: "+(y.error||"Unknown error"))}catch(y){r.remove(),ae.error("Failed to save: "+y.message)}})}),r.addEventListener("click",d=>{d.target===r&&r.remove()});const c=d=>{d.key==="Escape"&&(r.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){X.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){ft.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),ae.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const He="onboardingCompleted",ct=2;class Ro{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(He);if(!e)return!0;try{return JSON.parse(e).version<ct}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
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
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"📊",title:"Sort Options",desc:"Sort by Room/Group, Product Code, or Product Name"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show RRP, add GST, or hide pricing entirely"},{icon:"📝",title:"Content Control",desc:"Include descriptions and custom notes"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),s=document.getElementById("onboarding-dots"),n=document.getElementById("onboarding-next");if(!o||!s)return;let r="";t.features.length>0&&(r=t.features.map(a=>`
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
      ${r}
    `,s.innerHTML=e.map((a,c)=>`<div class="onboarding-dot ${c===this.currentStep?"active":""}"></div>`).join(""),n&&(n.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(He,JSON.stringify({version:ct,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(He)}}const yt=new Ro;class ko{constructor(){this.panel=null,this.messagesContainer=null,this.input=null,this.sendBtn=null,this.isOpen=!1,this._lastUserMessage=null}init(){this._createPanel(),this._bindEvents(),this._restoreMessages()}_createPanel(){const e=document.createElement("div");e.id="ai-chat-panel",e.className="ai-chat-panel",e.innerHTML=`
      <div class="ai-chat-header">
        <div class="ai-chat-header-left">
          <div class="ai-chat-avatar">AI</div>
          <div>
            <div class="ai-chat-title">Fred</div>
            <div class="ai-chat-subtitle">Product Assistant</div>
          </div>
        </div>
        <div class="ai-chat-header-actions">
          <button class="ai-chat-clear-btn" title="Clear conversation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
          <button class="ai-chat-close-btn" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div class="ai-chat-messages" id="ai-chat-messages"></div>
      <div class="ai-chat-input-area">
        <div class="ai-chat-input-wrapper">
          <textarea
            id="ai-chat-input"
            class="ai-chat-input"
            placeholder="Ask Fred about Seima products..."
            rows="1"
          ></textarea>
          <button id="ai-chat-send" class="ai-chat-send-btn" disabled title="Send message">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
        <div class="ai-chat-footer">Powered by Fred &amp; Jim - who often stuff things up, so dont trust anything!</div>
      </div>
    `,document.body.appendChild(e),this.panel=e,this.messagesContainer=e.querySelector("#ai-chat-messages"),this.input=e.querySelector("#ai-chat-input"),this.sendBtn=e.querySelector("#ai-chat-send"),this._showWelcome()}_bindEvents(){this.panel.querySelector(".ai-chat-close-btn").addEventListener("click",()=>this.close()),this.panel.querySelector(".ai-chat-clear-btn").addEventListener("click",()=>this._clearChat()),this.input.addEventListener("input",()=>{this.sendBtn.disabled=!this.input.value.trim(),this._autoResizeInput()}),this.input.addEventListener("keydown",e=>{e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this._send())}),this.sendBtn.addEventListener("click",()=>this._send()),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()})}_showWelcome(){const e=[{prompt:"What matte black basin mixers do you have under $300?",label:"Matte black mixers"},{prompt:"Show me Seima wall-mounted basins",label:"Wall-mounted basins"},{prompt:"What tapware is available in brushed gold?",label:"Brushed gold tapware"},{prompt:"Summarise the products in my current selection",label:"Analyse my selection"}],t=document.createElement("div");t.className="ai-chat-welcome",t.innerHTML=`
      <div class="ai-chat-welcome-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h3>Hi, I'm Fred!</h3>
      <p>Search the Seima product catalog using natural language.</p>
      <div class="ai-chat-suggestions"></div>
    `,this.messagesContainer.innerHTML="",this.messagesContainer.appendChild(t);const o=t.querySelector(".ai-chat-suggestions");this._renderSuggestions(o,e),this._fetchTopQuestions().then(s=>{if(s&&s.length>0){const n=s.slice(0,3);n.push(e[e.length-1]),o.innerHTML="",this._renderSuggestions(o,n)}})}_renderSuggestions(e,t){for(const o of t){const s=document.createElement("button");s.className="ai-suggestion-btn",s.dataset.prompt=o.prompt,s.textContent=o.label,s.addEventListener("click",()=>{this.input.value=o.prompt,this.sendBtn.disabled=!1,this._send()}),e.appendChild(s)}}async _fetchTopQuestions(){try{const e=sessionStorage.getItem("fredTopQuestions");if(e)return JSON.parse(e);const t=await fetch(`${ce.PROXY_URL}/v1/top-questions`);if(!t.ok)return null;const s=((await t.json()).questions||[]).map(n=>({prompt:n.prompt,label:n.label||n.prompt}));return sessionStorage.setItem("fredTopQuestions",JSON.stringify(s)),s}catch{return null}}_autoResizeInput(){this.input.style.height="auto",this.input.style.height=Math.min(this.input.scrollHeight,120)+"px"}async _send(){const e=this.input.value.trim();if(!e||fe.processing)return;const t=this.messagesContainer.querySelector(".ai-chat-welcome");t&&t.remove(),this._addMessage("user",e),this._trackQuestion(e),this.input.value="",this.input.style.height="auto",this.sendBtn.disabled=!0;const o=this._addThinking();try{const s=b.getSelectedProducts(),n=await fe.chat(e,A,s);o.remove(),this._addMessage("assistant",n.content)}catch(s){o.remove(),this._addMessage("error",s.message||"Something went wrong. Please try again.")}this._scrollToBottom(),this.input.focus()}_addMessage(e,t,{skipPersist:o=!1,feedbackId:s=null}={}){const n=document.createElement("div");n.className=`ai-msg ai-msg-${e}`;const r=document.createElement("div");if(r.className="ai-msg-bubble",e==="user")r.textContent=t,this._lastUserMessage=t;else if(e==="assistant"){r.dataset.rawContent=t,r.innerHTML=this._formatMarkdown(t),this._injectProductCards(r),this._collapseProductCards(r),this._attachProductButtons(r);const i=s||this._generateId();n.dataset.feedbackId=i,n.appendChild(r),this._appendFeedbackRow(n,i,t)}else e==="error"&&(r.innerHTML=`<span class="ai-msg-error">${this._escapeHtml(t)}</span>`);return n.contains(r)||n.appendChild(r),this.messagesContainer.appendChild(n),this._scrollToBottom(),!o&&e!=="error"&&this._persistMessages(),n}_addThinking(){const e=document.createElement("div");return e.className="ai-msg ai-msg-assistant",e.innerHTML=`
      <div class="ai-msg-bubble ai-msg-thinking">
        <span class="ai-thinking-dot"></span>
        <span class="ai-thinking-dot"></span>
        <span class="ai-thinking-dot"></span>
      </div>
    `,this.messagesContainer.appendChild(e),this._scrollToBottom(),e}_formatMarkdown(e){let t=this._escapeHtml(e);return t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/^### (.+)$/gm,"<h4>$1</h4>"),t=t.replace(/^## (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/(<li>.*<\/li>\n?)+/g,o=>`<ul>${o}</ul>`),t=t.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),t=t.replace(/\n\n/g,"</p><p>"),t=`<p>${t}</p>`,t=t.replace(/<p><\/p>/g,""),t=t.replace(/<p>(<h[34]>)/g,"$1"),t=t.replace(/(<\/h[34]>)<\/p>/g,"$1"),t=t.replace(/<p>(<ul>)/g,"$1"),t=t.replace(/(<\/ul>)<\/p>/g,"$1"),t=t.replace(/\b(\d{6})\b/g,'<button class="ai-add-product-btn" data-code="$1" title="Add $1 to selection">$1 <span class="ai-add-icon">+</span></button>'),t}_getBasePath(){var e;return(((e=document.querySelector("base"))==null?void 0:e.href)||window.location.origin+"/").replace(/\/$/,"")}_getProductImage(e){return e.Image_URL||e.imageUrl||e.Image||`${this._getBasePath()}/assets/no-image.png`}_getProductName(e){return e.Description||e.ProductName||e["Product Name"]||""}_getProductMeta(e){const t=e.Finish||e.Colour||"",o=e.DimX||e["X Dimension (mm)"]||"",s=e.DimY||e["Y Dimension (mm)"]||"",n=e.DimZ||e["Z Dimension (mm)"]||"",r=o&&o!=="0"?`${o} × ${s||0} × ${n||0}mm`:"";return[t,r].filter(Boolean).join("  ·  ")}_getProductPrice(e){const t=e["RRP INC GST"]||e.RRP_INCGST||e["RRP EX GST"]||e.RRP_EXGST||"";return t?`$${parseFloat(t).toLocaleString("en-AU",{minimumFractionDigits:2})}`:""}_injectProductCards(e){const t=e.querySelectorAll(".ai-add-product-btn");if(!t.length)return;const o=this._getBasePath();t.forEach(s=>{const n=s.dataset.code,r=A.findProductByCode(n);if(!r)return;const i=s.closest("li");if(!(i||s.parentElement))return;const c=this._getProductImage(r),d=this._getProductName(r),l=this._getProductMeta(r),p=this._getProductPrice(r),h=document.createElement("div");h.className="ai-product-card",h.dataset.code=n,h.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(c)}" alt="" onerror="this.src='${o}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-product-card-name">${this._escapeHtml(d)}</div>
          ${l?`<div class="ai-product-card-meta">${this._escapeHtml(l)}</div>`:""}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${p}</span>
            <button class="ai-card-add-btn" data-code="${n}" title="Add to selection">+ Add</button>
          </div>
        </div>
      `,h.addEventListener("click",f=>{f.target.closest(".ai-card-add-btn")||this._showProductModal(n)}),h.querySelector(".ai-card-add-btn").addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this._addProductToGrid(n,f.currentTarget)}),i?i.replaceWith(h):s.replaceWith(h)})}_collapseProductCards(e,t=5){const o=e.querySelectorAll(".ai-product-card");if(o.length<=t)return;const s=[];o.forEach((i,a)=>{a>=t&&(i.style.display="none",s.push(i))});const n=document.createElement("button");n.className="ai-show-more-btn",n.textContent=`Show ${s.length} more product${s.length>1?"s":""}`,n.addEventListener("click",()=>{s.forEach(i=>{i.style.display=""}),n.remove(),this._scrollToBottom()});const r=o[t-1];r.parentNode.insertBefore(n,r.nextSibling)}_attachProductButtons(e){e.querySelectorAll(".ai-add-product-btn").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),this._addProductToGrid(t.dataset.code,t)})})}_addProductToGrid(e,t){const o=A.findProductByCode(e);if(!o){t&&(t.classList.add("ai-add-error"),t.title="Product not found");return}b.addProductToSelection(o,"","",1),window.productGridManager&&(window.productGridManager.loadExistingProducts(),window.productGridManager.updateTotals(),window.productGridManager.ensureAtLeastOneEmptyRow()),t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added ✓"),this._markCardAdded(e)}_markCardAdded(e){document.querySelectorAll(`.ai-card-add-btn[data-code="${e}"]`).forEach(o=>{o.classList.add("added"),o.disabled=!0,o.textContent="Added ✓"});const t=document.querySelector('.ai-product-modal-add[data-code="'+e+'"]');t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added to Selection ✓")}_showProductModal(e){const t=A.findProductByCode(e);if(!t)return;const o=document.querySelector(".ai-product-modal-overlay");o&&o.remove();const s=this._getBasePath(),n=this._getProductImage(t),r=this._getProductName(t),i=this._getProductPrice(t),a=t["Long Description"]||t.LongDescription||"",c=t.Range||"",d=t.Group||"",l=t.SubGroup||t.Subgroup||"",p=t.Finish||"",h=t.Colour||"",f=t.DimX||t["X Dimension (mm)"]||"",y=t.DimY||t["Y Dimension (mm)"]||"",w=t.DimZ||t["Z Dimension (mm)"]||"",g=f&&f!=="0"?`${f} × ${y||0} × ${w||0}mm`:"",S=t["WELS STAR"]||t.WELS_STAR||"",m=[];c&&m.push(["Range",c]),d&&m.push(["Group",d]),l&&m.push(["Type",l]),p&&m.push(["Finish",p]),h&&h!==p&&m.push(["Colour",h]),g&&m.push(["Dimensions",g]),S&&m.push(["WELS",`${S} star`]);const v=document.createElement("div");v.className="ai-product-modal-overlay",v.innerHTML=`
      <div class="ai-product-modal">
        <div class="ai-product-modal-header">
          <button class="ai-product-modal-close" title="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="ai-product-modal-body">
          <img class="ai-product-modal-img" src="${this._escapeHtml(n)}" alt="" onerror="this.src='${s}/assets/no-image.png';">
          <h3 class="ai-product-modal-title">${this._escapeHtml(r)}</h3>
          ${m.length?`<dl class="ai-product-modal-specs">${m.map(([E,I])=>`<dt>${this._escapeHtml(E)}</dt><dd>${this._escapeHtml(I)}</dd>`).join("")}</dl>`:""}
          ${a?`<div class="ai-product-modal-desc">${this._escapeHtml(a)}</div>`:""}
          ${i?`<div class="ai-product-modal-price">${i}</div>`:""}
          <button class="ai-product-modal-add" data-code="${e}">Add to Selection</button>
        </div>
      </div>
    `,v.addEventListener("click",E=>{E.target===v&&v.remove()}),v.querySelector(".ai-product-modal-close").addEventListener("click",()=>v.remove()),v.querySelector(".ai-product-modal-add").addEventListener("click",E=>{this._addProductToGrid(e,null);const I=E.currentTarget;I.classList.add("added"),I.disabled=!0,I.textContent="Added to Selection ✓"}),document.addEventListener("keydown",function E(I){I.key==="Escape"&&(v.remove(),document.removeEventListener("keydown",E))}),document.body.appendChild(v)}_appendFeedbackRow(e,t,o){const s=document.createElement("div");s.className="ai-feedback-row";const n=this._getFeedbackEntry(t),r=(n==null?void 0:n.rating)||null;s.innerHTML=`
      <button class="ai-feedback-btn ai-feedback-up${r==="up"?" active":""}"
              data-rating="up" title="Helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      </button>
      <button class="ai-feedback-btn ai-feedback-down${r==="down"?" active":""}"
              data-rating="down" title="Not helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"></path>
          <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
        </svg>
      </button>
    `,s.querySelectorAll(".ai-feedback-btn").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.rating;s.querySelectorAll(".ai-feedback-btn").forEach(d=>d.classList.remove("active")),a.classList.add("active"),this._saveFeedback(t,o,c)})});const i=e.querySelector(".ai-msg-bubble");i?e.insertBefore(s,i.nextSibling):e.appendChild(s)}_saveFeedback(e,t,o){try{const s=this._loadFeedback(),n=s.findIndex(i=>i.id===e),r={id:e,question:this._lastUserMessage||"",answer:(t||"").slice(0,500),rating:o,timestamp:Date.now(),synced:!1};n>=0?s[n]={...s[n],...r}:s.push(r),localStorage.setItem(De,JSON.stringify(s))}catch{}}_getFeedbackEntry(e){return this._loadFeedback().find(t=>t.id===e)||null}_loadFeedback(){try{const e=localStorage.getItem(De);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}_persistMessages(){try{const e=[];this.messagesContainer.querySelectorAll(".ai-msg").forEach(t=>{var o,s;t.classList.contains("ai-msg-user")?e.push({role:"user",content:((o=t.querySelector(".ai-msg-bubble"))==null?void 0:o.textContent)||""}):t.classList.contains("ai-msg-assistant")&&!t.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((s=t.querySelector(".ai-msg-bubble"))==null?void 0:s.dataset.rawContent)||"",feedbackId:t.dataset.feedbackId||null})}),localStorage.setItem(Ve,JSON.stringify(e))}catch{}}_restoreMessages(){try{const e=localStorage.getItem(Ve);if(!e)return;const t=JSON.parse(e);if(!Array.isArray(t)||t.length===0)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();for(const n of t)n.role==="user"&&(this._lastUserMessage=n.content),this._addMessage(n.role,n.content,{skipPersist:!0,feedbackId:n.feedbackId||null});const s=document.createElement("div");s.className="ai-chat-restored",s.textContent="Previous conversation restored",this.messagesContainer.prepend(s)}catch{}}_generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}_trackQuestion(e){try{const t=localStorage.getItem(Pe),o=t?JSON.parse(t):{},s=e.trim();if(s.length<5)return;o[s]=(o[s]||0)+1,localStorage.setItem(Pe,JSON.stringify(o))}catch{}}async _syncFeedback(){try{const e=this._loadFeedback(),t=e.filter(r=>!r.synced),o=localStorage.getItem(Pe),s=o?JSON.parse(o):null;if(t.length===0&&!s)return;if((await fetch(`${ce.PROXY_URL}/v1/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ce.APP_SECRET}`},body:JSON.stringify({entries:t,questionLog:s})})).ok){for(const r of t)r.synced=!0;this._pruneFeedback(e),localStorage.setItem(De,JSON.stringify(e)),localStorage.removeItem(Pe)}}catch{}}_pruneFeedback(e){const t=Date.now()-6048e5;for(let o=e.length-1;o>=0;o--)e[o].synced&&e[o].timestamp<t&&e.splice(o,1)}_clearChat(){fe.clearHistory();try{localStorage.removeItem(De),localStorage.removeItem(Pe)}catch{}this._showWelcome()}open(){this.panel.classList.add("open"),this.isOpen=!0,setTimeout(()=>this.input.focus(),300),this._syncFeedback()}close(){this.panel.classList.remove("open"),this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}}const dt=new ko;class Lo{constructor(){this.navigationManager=null,this.fileImportManager=new wo,this.productGridManager=new Io,this.isInitialized=!1,_.log("SeimaScanner application starting",P.INFO)}async init(){var e,t,o;try{_.log("Initializing application modules",P.INFO),J.configure({googleSheetsUrl:(e=U.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:U.EMAIL}),X.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Presenter"});const s=(t=U.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL;if(s&&Et(s).catch(a=>{console.warn("Synonyms preload failed:",(a==null?void 0:a.message)||a)}),(o=U.CROSSHAIR)!=null&&o.ENABLED){const a=J.getCurrentUser();$.configure(U.CROSSHAIR,(a==null?void 0:a.email)||"");try{await $.preload()}catch(c){console.warn("Crosshair preload at init failed (user may not be logged in):",c.message)}}const n=be.getCompatibilityReport();_.log(`Browser compatibility: ${n.score}% (${n.browserName})`,P.INFO),be.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),this.navigationManager=new Vt,await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),dt.init();const r=document.getElementById("ai-chat-trigger");r&&r.addEventListener("click",()=>dt.toggle()),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=be,window.downloadWithFallback=qe,window.showPdfFormScreen=We,this.isInitialized=!0,_.log("Seima Scanner initialized successfully",P.INFO);const i=document.querySelector(".grid-container");return i&&i.classList.add("ready"),setTimeout(()=>{yt.show()},500),!0}catch(s){return _.handleError({message:"Failed to initialize application",error:s,category:B.UI,level:P.CRITICAL,context:"app-init"}),!1}}showCompatibilityWarning(){const e=be.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(r=>r.type==="critical"),s=e.score<R.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!s)return;const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.insertBefore(n,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;Yt(),We(o,t||null)}),window.addEventListener("beforeunload",()=>{}),be.features.memoryAPI&&setInterval(()=>{const e=be.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return b.getSelectedProducts()}clearSelection(){return b.clearAllSelections()}addProduct(e,t,o,s){return b.addProductToSelection(e,t,o,s)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",()=>{window.seimaScanner=new Lo,window.seimaScanner.init()});window.addEventListener("DOMContentLoaded",()=>{fetch("./version.txt").then(u=>u.text()).then(u=>{const e=u.trim().split(`
`);if(e.length>0){const o=e[0].split(" - ")[0].trim(),s=document.getElementById("app-version");s&&(s.textContent=`Ver: ${o}`,s.style.cursor="pointer",s.addEventListener("click",No))}}),Do(),To()});function Do(){const u=document.getElementById("help-btn");u&&u.addEventListener("click",()=>{Bo()});const e=document.getElementById("crosshair-btn");e&&e.addEventListener("click",()=>{window.location.href="screens/validator.html"});const t=document.getElementById("admin-btn");t&&t.addEventListener("click",()=>{window.location.href="screens/admin.html"});const o=document.getElementById("quick-start-btn");o&&o.addEventListener("click",()=>{yt.showForced()})}function To(){const u=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),s=document.getElementById("user-avatar"),n=document.getElementById("user-name-display");function r(c){var d,l,p,h,f,y;if(c){(d=U.CROSSHAIR)!=null&&d.ENABLED&&($.configure(U.CROSSHAIR,c.email||""),$.preload().catch(m=>{console.warn("Crosshair preload after login failed:",m)})),u&&(u.style.display="block"),o&&(o.style.display="none");const w=document.getElementById("crosshair-btn");w&&(w.style.display=(l=U.CROSSHAIR)!=null&&l.ENABLED&&J.isStaffMode()?"":"none");const g=document.getElementById("admin-btn");g&&(g.style.display=J.isAdmin()?"":"none");const S=i(c.name);s&&(s.textContent=S),n&&(n.textContent=((p=c.name)==null?void 0:p.split(" ")[0])||"User"),t&&(t.innerHTML=`
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
        `,(h=document.getElementById("menu-profile"))==null||h.addEventListener("click",()=>{t.style.display="none",X.showEditProfile(m=>{b.clearUserSettings(),r(m)})}),(f=document.getElementById("menu-password"))==null||f.addEventListener("click",()=>{t.style.display="none",X.showChangePassword()}),(y=document.getElementById("menu-logout"))==null||y.addEventListener("click",()=>{t.style.display="none",b.clearUserSettings(),J.logout(),r(null)}))}else u&&(u.style.display="none"),o&&(o.style.display="block")}function i(c){if(!c)return"?";const d=c.trim().split(" ");return d.length>=2?(d[0][0]+d[d.length-1][0]).toUpperCase():c.substring(0,2).toUpperCase()}function a(c){const d=document.createElement("div");return d.textContent=c||"",d.innerHTML}e&&t&&(e.addEventListener("click",c=>{c.stopPropagation();const d=t.style.display!=="none";t.style.display=d?"none":"block"}),document.addEventListener("click",c=>{u!=null&&u.contains(c.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{X.showLogin(c=>{r(c)})}),J.onAuthChange=r,r(J.getCurrentUser())}function Bo(){const u=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!u||!e)return;e.innerHTML=Ao(),u.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{u.style.display="none"}),u.onclick=s=>{s.target===u&&(u.style.display="none")};const o=s=>{s.key==="Escape"&&(u.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function Ao(){return`
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
  `}async function No(){try{const u=document.getElementById("changelog-modal"),e=document.getElementById("changelog-content"),s=(await(await fetch("./version.txt")).text()).trim().split(`
`);if(s.length===0){e.innerHTML="<p>No changelog available.</p>",u.style.display="flex";return}let n="";s.forEach(r=>{if(r.trim()){const i=r.indexOf(" - ");if(i>0){const a=r.substring(0,i).trim(),c=r.substring(i+3).trim();n+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${a}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${c}</p>
            </div>
          `}}}),e.innerHTML=n||"<p>No changelog available.</p>",u.style.display="flex"}catch(u){console.error("Error loading changelog:",u),document.getElementById("changelog-content").innerHTML='<p style="color: #999;">Error loading changelog.</p>',document.getElementById("changelog-modal").style.display="flex"}}document.addEventListener("DOMContentLoaded",()=>{const u=document.getElementById("changelog-close");u&&u.addEventListener("click",()=>{document.getElementById("changelog-modal").style.display="none"})});document.addEventListener("click",u=>{const e=document.getElementById("changelog-modal");u.target===e&&(e.style.display="none")});
