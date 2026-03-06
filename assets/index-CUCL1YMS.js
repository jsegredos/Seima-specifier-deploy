const CONFIG_BASE={EMAIL:{PUBLIC_KEY:"MHAEjvnc_xx8DIRCA",SERVICE_ID:"service_rblizfg",TEMPLATE_ID:"template_8st9fhk",PASSWORD_RESET_TEMPLATE_ID:"template_u15l8di",FROM_EMAIL:"noreply@seima.com.au",FROM_NAME:"Seima Team",MAX_ATTACHMENT_SIZE:15728640,RETRY_ATTEMPTS:3,RETRY_DELAY:2e3,BCC_EMAIL:"jsegredos@gmail.com"}};class Utils{static loadScript(e){return new Promise((i,s)=>{if(document.querySelector(`script[src="${e}"]`)){i();return}const o=document.createElement("script");o.src=e,o.onload=i,o.onerror=()=>s(new Error(`Failed to load script: ${e}`)),document.head.appendChild(o)})}static loadImage(e){return new Promise((i,s)=>{const o=new Image;o.onload=()=>i(o),o.onerror=()=>s(new Error(`Failed to load image: ${e}`)),o.src=e})}static loadImageAsDataURL(e,i){const s=new Image;s.crossOrigin="anonymous",s.onload=function(){const o=document.createElement("canvas"),r=o.getContext("2d");o.width=s.width,o.height=s.height,r.drawImage(s,0,0);try{const n=o.toDataURL("image/png");i(n,s.width,s.height)}catch{i(null,0,0)}},s.onerror=()=>i(null,0,0),s.src=e}static formatPrice(e){if(!e||e==="")return"";const i=parseFloat(e.toString().replace(/[^\d.-]/g,""));return isNaN(i)?"":`$${i.toFixed(2)}`}static formatPriceLocale(e,i=!0){if(!e||e==="")return"";const s=parseFloat(e.toString().replace(/[^\d.-]/g,""));if(isNaN(s))return"";const o=s.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2});return i?`$${o}`:o}static sanitizeInput(e,i=null){if(typeof e!="string")return"";let s=e.trim();return i&&s.length>i&&(s=s.substring(0,i)),s}static escapeHtml(e){return typeof e!="string"?"":e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}static debounce(e,i){let s;return function(...o){clearTimeout(s),s=setTimeout(()=>e.apply(this,o),i)}}static throttle(e,i){let s;return function(...o){s||(e.apply(this,o),s=!0,setTimeout(()=>s=!1,i))}}static generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}static deepClone(e){return JSON.parse(JSON.stringify(e))}static getStorageItem(e,i=null){try{const s=localStorage.getItem(e);return s?JSON.parse(s):i}catch(s){return console.warn(`Failed to parse localStorage item: ${e}`,s),i}}static setStorageItem(e,i){try{return localStorage.setItem(e,JSON.stringify(i)),!0}catch(s){return console.warn(`Failed to set localStorage item: ${e}`,s),!1}}static removeStorageItem(e){try{return localStorage.removeItem(e),!0}catch(i){return console.warn(`Failed to remove localStorage item: ${e}`,i),!1}}static isMobileDevice(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}static isIOSDevice(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isSafari(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}static formatDate(e,i=!1){const s=new Date(e);if(isNaN(s.getTime()))return"";const o=String(s.getDate()).padStart(2,"0"),r=String(s.getMonth()+1).padStart(2,"0"),n=s.getFullYear();if(!i)return`${o}/${r}/${n}`;const d=String(s.getHours()).padStart(2,"0"),a=String(s.getMinutes()).padStart(2,"0");return`${o}/${r}/${n} ${d}:${a}`}static generateFilename(e,i){const s=new Date,o=String(s.getDate()).padStart(2,"0"),r=String(s.getMonth()+1).padStart(2,"0"),n=String(s.getFullYear()).slice(-2),d=String(s.getHours()).padStart(2,"0"),a=String(s.getMinutes()).padStart(2,"0");return`${(e||"file").replace(/[^a-zA-Z0-9\s]/g,"")}-${o}${r}${n}.${d}${a}.${i}`}static sleep(e){return new Promise(i=>setTimeout(i,e))}}class BrowserCompatibilityManager{constructor(){this.features={},this.deviceInfo={},this.networkStatus={},this.memoryInfo={},this.compatibilityScore=0,this.init()}init(){this.detectDevice(),this.detectBrowser(),this.checkFeatureSupport(),this.checkMemoryLimitations(),this.setupNetworkMonitoring(),this.calculateCompatibilityScore(),this.setupPerformanceMonitoring()}detectDevice(){const t=navigator.userAgent;this.deviceInfo={isMobile:/Mobi|Android/i.test(t),isTablet:/iPad|Android(?=.*Tablet)|(?=.*Mobile)(?=.*Safari)/i.test(t),isDesktop:!/Mobi|Android|iPad/i.test(t),isIOS:/iPad|iPhone|iPod/.test(t),isAndroid:/Android/i.test(t),isWindows:/Windows/i.test(t),isMacOS:/Macintosh|Mac OS X/i.test(t),isIPhone:/iPhone/i.test(t),isIPad:/iPad/i.test(t),isWebView:this.detectWebView(t),isStandalone:window.navigator.standalone===!0,screenWidth:window.screen.width,screenHeight:window.screen.height,devicePixelRatio:window.devicePixelRatio||1,orientation:this.getOrientation(),userAgent:t}}detectBrowser(){const t=navigator.userAgent;this.deviceInfo.browser={name:this.getBrowserName(t),version:this.getBrowserVersion(t),engine:this.getBrowserEngine(t),isChrome:/Chrome/i.test(t)&&!/Edge|Edg/i.test(t),isFirefox:/Firefox/i.test(t),isSafari:/Safari/i.test(t)&&!/Chrome|Chromium/i.test(t),isEdge:/Edge|Edg/i.test(t),isOpera:/Opera|OPR/i.test(t),chromeVersion:this.getChromeVersion(t),safariVersion:this.getSafariVersion(t),firefoxVersion:this.getFirefoxVersion(t)}}checkFeatureSupport(){this.features={localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fileAPI:"File"in window,fileReader:"FileReader"in window,fileSystemAccess:"showSaveFilePicker"in window,downloadAttribute:this.checkDownloadAttribute(),getUserMedia:"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices,webRTC:"RTCPeerConnection"in window,canvas:"HTMLCanvasElement"in window,webGL:this.checkWebGL(),fetch:"fetch"in window,xhr:"XMLHttpRequest"in window,serviceWorker:"serviceWorker"in navigator,modules:this.checkESModules(),asyncAwait:this.checkAsyncAwait(),webAssembly:"WebAssembly"in window,createObjectURL:"URL"in window&&"createObjectURL"in URL,revokeObjectURL:"URL"in window&&"revokeObjectURL"in URL,blob:"Blob"in window,touchEvents:"ontouchstart"in window,deviceMotion:"DeviceMotionEvent"in window,deviceOrientation:"DeviceOrientationEvent"in window,clipboard:"clipboard"in navigator,onlineStatus:"onLine"in navigator,connection:"connection"in navigator||"mozConnection"in navigator||"webkitConnection"in navigator}}checkMemoryLimitations(){var t,e,i;this.memoryInfo={jsHeapSizeLimit:((t=performance.memory)==null?void 0:t.jsHeapSizeLimit)||null,totalJSHeapSize:((e=performance.memory)==null?void 0:e.totalJSHeapSize)||null,usedJSHeapSize:((i=performance.memory)==null?void 0:i.usedJSHeapSize)||null,estimatedMaxFileSize:this.estimateMaxFileSize(),memoryPressure:this.estimateMemoryPressure(),maxBlobSize:this.estimateMaxBlobSize(),maxDataURISize:this.estimateMaxDataURISize()}}setupNetworkMonitoring(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()},window.addEventListener("online",()=>{this.networkStatus.isOnline=!0,this.onNetworkChange("online")}),window.addEventListener("offline",()=>{this.networkStatus.isOnline=!1,this.onNetworkChange("offline")}),navigator.connection&&navigator.connection.addEventListener("change",()=>{this.updateNetworkStatus(),this.onNetworkChange("connection")})}calculateCompatibilityScore(){let t=100;const e=[];this.features.localStorage||(t-=20,e.push("Local storage not supported")),this.features.fileReader||(t-=15,e.push("File reading not supported")),this.features.blob||(t-=15,e.push("Blob creation not supported")),this.features.createObjectURL||(t-=15,e.push("Object URL creation not supported")),this.features.fetch||(t-=10,e.push("Modern fetch API not available")),this.features.modules||(t-=10,e.push("ES6 modules not supported")),this.features.getUserMedia||(t-=8,e.push("Camera access limited")),this.deviceInfo.isWebView&&(t-=5,e.push("WebView compatibility concerns")),this.memoryInfo.memoryPressure==="high"&&(t-=8,e.push("High memory pressure detected")),this.networkStatus.isOnline||(t-=5,e.push("Currently offline")),this.compatibilityScore=Math.max(0,t),this.compatibilityIssues=e}setupPerformanceMonitoring(){if(performance.memory&&setInterval(()=>{this.updateMemoryInfo()},3e4),"PerformanceObserver"in window)try{new PerformanceObserver(e=>{for(const i of e.getEntries())i.entryType==="measure"&&this.onPerformanceMeasure(i)}).observe({entryTypes:["measure"]})}catch(t){console.warn("Performance observer not fully supported:",t)}}detectWebView(t){return/wv|WebView|Version\/[\d.]+.*Mobile.*Safari/i.test(t)||/Android/i.test(t)&&/Version\/\d\.\d/i.test(t)&&!/ Chrome\//.test(t)||/FB_IAB|FBAN|FBAV/i.test(t)}getOrientation(){return window.screen&&window.screen.orientation?window.screen.orientation.type:window.innerHeight>window.innerWidth?"portrait":"landscape"}getBrowserName(t){return/SamsungBrowser/i.test(t)?"Samsung Internet":/Chrome/i.test(t)&&!/Edge|Edg/i.test(t)?"Chrome":/Firefox/i.test(t)?"Firefox":/Safari/i.test(t)&&!/Chrome|Chromium/i.test(t)?"Safari":/Edge|Edg/i.test(t)?"Edge":/Opera|OPR/i.test(t)?"Opera":"Unknown"}getBrowserVersion(t){const e=t.match(/(Chrome|Firefox|Safari|Edge|Edg|SamsungBrowser|Opera|OPR)\/([0-9.]+)/i);return e?e[2]:"Unknown"}getBrowserEngine(t){return/WebKit/i.test(t)?"WebKit":/Gecko/i.test(t)?"Gecko":/Trident/i.test(t)?"Trident":/EdgeHTML/i.test(t)?"EdgeHTML":"Unknown"}getChromeVersion(t){const e=t.match(/Chrome\/([0-9.]+)/i);return e?parseInt(e[1]):null}getSafariVersion(t){const e=t.match(/Version\/([0-9.]+).*Safari/i);return e?parseFloat(e[1]):null}getFirefoxVersion(t){const e=t.match(/Firefox\/([0-9.]+)/i);return e?parseInt(e[1]):null}checkLocalStorage(){try{const t="compatibilityTest";return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch{return!1}}checkSessionStorage(){try{const t="compatibilityTest";return sessionStorage.setItem(t,t),sessionStorage.removeItem(t),!0}catch{return!1}}checkDownloadAttribute(){return"download"in document.createElement("a")}checkWebGL(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl")||t.getContext("experimental-webgl"))}catch{return!1}}checkESModules(){try{return typeof Symbol<"u"&&typeof Promise<"u"&&typeof Map<"u"}catch{return!1}}checkAsyncAwait(){try{return eval("(async function() {})").constructor===(async function(){}).constructor}catch(t){return!1}}estimateMaxFileSize(){return this.deviceInfo.isDesktop?100*1024*1024:this.deviceInfo.isTablet?50*1024*1024:this.deviceInfo.isMobile?20*1024*1024:10*1024*1024}estimateMemoryPressure(){if(!performance.memory)return"unknown";const t=performance.memory.usedJSHeapSize,e=performance.memory.jsHeapSizeLimit,i=t/e;return i>.8?"high":i>.6?"medium":"low"}estimateMaxBlobSize(){var t,e,i;return(t=this.deviceInfo.browser)!=null&&t.isChrome?500*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?200*1024*1024:(i=this.deviceInfo.browser)!=null&&i.isSafari?100*1024*1024:50*1024*1024}estimateMaxDataURISize(){var t,e,i;return(t=this.deviceInfo.browser)!=null&&t.isChrome?2*1024*1024:(e=this.deviceInfo.browser)!=null&&e.isFirefox?1*1024*1024:((i=this.deviceInfo.browser)!=null&&i.isSafari,512*1024)}getConnectionType(){return navigator.connection?navigator.connection.type||navigator.connection.effectiveType:"unknown"}getEffectiveConnectionType(){var t;return((t=navigator.connection)==null?void 0:t.effectiveType)||"unknown"}getDownlink(){var t;return((t=navigator.connection)==null?void 0:t.downlink)||null}getRTT(){var t;return((t=navigator.connection)==null?void 0:t.rtt)||null}updateNetworkStatus(){this.networkStatus={isOnline:navigator.onLine,connectionType:this.getConnectionType(),effectiveType:this.getEffectiveConnectionType(),downlink:this.getDownlink(),rtt:this.getRTT()}}updateMemoryInfo(){performance.memory&&(this.memoryInfo.totalJSHeapSize=performance.memory.totalJSHeapSize,this.memoryInfo.usedJSHeapSize=performance.memory.usedJSHeapSize,this.memoryInfo.memoryPressure=this.estimateMemoryPressure())}onNetworkChange(t){console.log(`Network status changed: ${t}`,this.networkStatus)}onPerformanceMeasure(t){t.duration>1e3&&console.warn(`Performance concern: ${t.name} took ${t.duration}ms`)}getCompatibilityReport(){return{score:this.compatibilityScore,issues:this.compatibilityIssues,device:this.deviceInfo,features:this.features,memory:this.memoryInfo,network:this.networkStatus,recommendations:this.getRecommendations()}}getRecommendations(){const t=[];return this.compatibilityScore<70&&t.push({type:"critical",message:"Browser compatibility issues detected. Consider updating your browser.",action:"update_browser"}),this.memoryInfo.memoryPressure==="high"&&t.push({type:"warning",message:"High memory usage detected. Close other browser tabs for better performance.",action:"reduce_memory"}),!this.features.fileSystemAccess&&this.deviceInfo.isDesktop&&t.push({type:"info",message:"Modern file saving features available in newer browsers.",action:"update_browser"}),this.networkStatus.isOnline||t.push({type:"error",message:"Internet connection required for full functionality.",action:"check_connection"}),t}isFeatureSupported(t){return this.features[t]||!1}isCompatible(){return this.compatibilityScore>=70}getOptimalDownloadMethod(){return this.features.fileSystemAccess&&this.deviceInfo.isDesktop?"fileSystemAPI":this.features.downloadAttribute?"downloadAttribute":this.features.createObjectURL?"objectURL":"manual"}shouldShowCompatibilityWarning(){return this.compatibilityScore<80||this.compatibilityIssues.length>0}logCompatibilityInfo(){console.group("Browser Compatibility Report"),console.log("Score:",this.compatibilityScore),console.log("Device:",this.deviceInfo),console.log("Features:",this.features),console.log("Issues:",this.compatibilityIssues),console.log("Recommendations:",this.getRecommendations()),console.groupEnd()}}const browserCompatibility=new BrowserCompatibilityManager;class EmailService{constructor(e=CONFIG_BASE.EMAIL){this.config=e,this.isInitialized=!1,this.emailJsLoaded=!1}async init(){if(this.isInitialized)return!0;try{return await this._loadEmailJS(),window.emailjs&&this.config.PUBLIC_KEY&&(window.emailjs.init(this.config.PUBLIC_KEY),this.emailJsLoaded=!0),this.isInitialized=!0,console.log("✅ Email service initialized"),!0}catch(e){return console.error("❌ Failed to initialize email service:",e),!1}}async _loadEmailJS(){if(!window.emailjs)return Utils.loadScript("https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js")}async send(e){if(this.isInitialized||await this.init(),!this.emailJsLoaded)throw new Error("EmailJS not loaded");const i={to_email:e.to_email,to_name:e.to_name||e.customer_name||"Customer",from_name:this.config.FROM_NAME||"Seima Team",subject:e.subject||"Your Seima Product Selection",message:e.message||"",customer_name:e.customer_name||"",customer_project:e.customer_project||"",customer_address:e.customer_address||"",customer_telephone:e.customer_telephone||"",total_products:e.total_products||"",total_rooms:e.total_rooms||"",file_info:e.file_info||"",...this._sanitizeAttachment(e)};this.config.BCC_EMAIL&&(i.bcc_email=this.config.BCC_EMAIL);const s=this.config.RETRY_ATTEMPTS||3,o=this.config.RETRY_DELAY||2e3;for(let r=1;r<=s;r++)try{const n=await window.emailjs.send(this.config.SERVICE_ID,this.config.TEMPLATE_ID,i);return console.log(`✅ Email sent successfully (attempt ${r})`),{success:!0,result:n}}catch(n){if(console.warn(`❌ Email attempt ${r} failed:`,n),r<s)await Utils.sleep(o);else throw n}}_sanitizeAttachment(e){if(!e.attachment)return{};let i=e.attachment;return i.startsWith("data:")&&(i=i.split(",")[1]||i),{attachment:i,attachment_name:e.attachment_name||"attachment.pdf"}}async sendWithAttachments(e,i,s,o){const r=await this._blobToBase64(i),n=(e.project||"Selection").replace(/[^a-zA-Z0-9\s]/g,""),d=Utils.generateFilename(n,"pdf"),a=this._buildEmailMessage(e,o),l={to_email:e.email,to_name:e.name,customer_name:e.name,customer_project:e.project,customer_address:e.address,customer_telephone:e.telephone||e.phone,total_products:o.totalProducts.toString(),total_rooms:o.roomCount.toString(),message:a,attachment:r,attachment_name:d,file_info:`PDF: ${d} (${(i.size/1024).toFixed(1)} KB)`};return this.send(l)}_blobToBase64(e){return new Promise((i,s)=>{const o=new FileReader;o.onloadend=()=>{const r=o.result.split(",")[1];i(r)},o.onerror=s,o.readAsDataURL(e)})}_buildEmailMessage(e,i){const s=["Thank you for your Seima product selection.","","Your selection summary:",`• Total products: ${i.totalProducts}`,`• Rooms: ${i.roomCount}`];return i.totalValue>0&&!e.excludePrice&&s.push(`• Estimated value: ${Utils.formatPriceLocale(i.totalValue)}`),s.push("","Please find your product selection attached as a PDF document.","","If you have any questions, please contact your Seima representative.","","Kind regards,","The Seima Team","www.seima.com.au"),s.join(`
`)}isAvailable(){return this.emailJsLoaded&&!!this.config.SERVICE_ID&&!!this.config.TEMPLATE_ID}static validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}}new EmailService;const SESSION_KEY="authSession",SESSION_DURATION_DEFAULT=7*24*60*60*1e3,SESSION_DURATION_REMEMBER=30*24*60*60*1e3;class AuthService{constructor(){this.baseUrl="",this.emailConfig=null,this.session=null,this.onAuthChange=null,this.loadSession()}configure(e){e.googleSheetsUrl&&(this.baseUrl=e.googleSheetsUrl),e.email&&(this.emailConfig=e.email),console.log("🔐 Auth service configured")}loadSession(){var e;try{const i=localStorage.getItem(SESSION_KEY);if(i){const s=JSON.parse(i);s.expiry&&Date.now()<s.expiry?(this.session=s,console.log("✅ Session restored for:",(e=s.user)==null?void 0:e.email)):(console.log("⏰ Session expired, clearing..."),this.clearSession())}}catch(i){console.warn("Failed to load session:",i),this.clearSession()}}saveSession(e){try{localStorage.setItem(SESSION_KEY,JSON.stringify(e)),this.session=e}catch(i){console.error("Failed to save session:",i)}}clearSession(){localStorage.removeItem(SESSION_KEY),this.session=null,this.onAuthChange&&this.onAuthChange(null)}isLoggedIn(){return this.session!==null&&this.session.user!==null}getCurrentUser(){var e;return((e=this.session)==null?void 0:e.user)||null}isStaffMode(){const e=this.getCurrentUser();return e!=null&&e.email?e.email.toLowerCase().endsWith("@seima.com.au"):!1}getSession(){return this.session}async apiRequest(e,i){if(!this.baseUrl)throw new Error("Google Sheets URL not configured. Call authService.configure() first.");const s=new URLSearchParams;s.append("action",e);for(const[r,n]of Object.entries(i))n!=null&&s.append(r,typeof n=="object"?JSON.stringify(n):n);const o=await fetch(this.baseUrl,{method:"POST",body:s});if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);return await o.json()}validatePassword(e){return!e||e.length<8?{valid:!1,error:"Password must be at least 8 characters"}:/\d/.test(e)?{valid:!0}:{valid:!1,error:"Password must contain at least one number"}}validateEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async register(e,i,s,o="",r=""){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};const n=this.validatePassword(i);if(!n.valid)return{success:!1,error:n.error};if(!s||s.trim().length<2)return{success:!1,error:"Please enter your name"};try{return await this.apiRequest("userRegister",{email:e.trim().toLowerCase(),password:i,name:s.trim(),position:o.trim(),phone:r.trim()})}catch(d){return console.error("Registration error:",d),{success:!1,error:"Registration failed. Please try again."}}}async login(e,i,s=!1){if(!e||!i)return{success:!1,error:"Please enter email and password"};try{const o=await this.apiRequest("userLogin",{email:e.trim().toLowerCase(),password:i});if(o.success){const r=Date.now()+(s?SESSION_DURATION_REMEMBER:SESSION_DURATION_DEFAULT),n={user:o.user,token:o.sessionToken,expiry:r,rememberMe:s};this.saveSession(n),this.onAuthChange&&this.onAuthChange(o.user),console.log("✅ Logged in as:",o.user.email)}return o}catch(o){return console.error("Login error:",o),{success:!1,error:"Login failed. Please try again."}}}logout(){this.clearSession(),console.log("👋 Logged out")}async requestPasswordReset(e){if(!e||!this.validateEmail(e))return{success:!1,error:"Please enter a valid email address"};try{const i=await this.apiRequest("userRequestPasswordReset",{email:e.trim().toLowerCase()});return i.success&&i.resetToken&&await this.sendPasswordResetEmail(i.userEmail,i.userName,i.resetToken),{success:!0,message:"If this email exists, a reset code has been sent"}}catch(i){return console.error("Password reset request error:",i),{success:!1,error:"Failed to request password reset. Please try again."}}}async sendPasswordResetEmail(e,i,s){if(!this.emailConfig){console.warn("Email config not set, cannot send password reset email");return}try{window.emailjs||await this.loadEmailJS(),window.emailjs.init({publicKey:this.emailConfig.PUBLIC_KEY});const o={email:e,user_name:i||"User",reset_code:s,current_year:new Date().getFullYear().toString()},r=this.emailConfig.PASSWORD_RESET_TEMPLATE_ID||this.emailConfig.TEMPLATE_ID;console.log("📧 Sending password reset email to:",e);const n=await window.emailjs.send(this.emailConfig.SERVICE_ID,r,o,this.emailConfig.PUBLIC_KEY);console.log("✅ Password reset email sent to:",e,n)}catch(o){console.error("Failed to send password reset email:",o)}}async loadEmailJS(){return new Promise((e,i)=>{if(window.emailjs){e();return}const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js",s.onload=()=>{e()},s.onerror=i,document.head.appendChild(s)})}async resetPassword(e,i,s){if(!e||!i||!s)return{success:!1,error:"All fields are required"};const o=this.validatePassword(s);if(!o.valid)return{success:!1,error:o.error};try{return await this.apiRequest("userResetPassword",{email:e.trim().toLowerCase(),token:i.trim().toUpperCase(),newPassword:s})}catch(r){return console.error("Password reset error:",r),{success:!1,error:"Failed to reset password. Please try again."}}}async changePassword(e,i){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};const s=this.validatePassword(i);if(!s.valid)return{success:!1,error:s.error};try{return await this.apiRequest("userChangePassword",{email:this.session.user.email,currentPassword:e,newPassword:i})}catch(o){return console.error("Change password error:",o),{success:!1,error:"Failed to change password. Please try again."}}}async updateProfile(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const i=await this.apiRequest("userUpdateProfile",{email:this.session.user.email,updates:JSON.stringify(e)});return i.success&&i.user&&(this.session.user=i.user,this.saveSession(this.session),this.onAuthChange&&this.onAuthChange(i.user)),i}catch(i){return console.error("Update profile error:",i),{success:!1,error:"Failed to update profile. Please try again."}}}async deleteAccount(e){if(!this.isLoggedIn())return{success:!1,error:"Please log in first"};try{const i=await this.apiRequest("userDeleteAccount",{email:this.session.user.email,password:e});return i.success&&this.clearSession(),i}catch(i){return console.error("Delete account error:",i),{success:!1,error:"Failed to delete account. Please try again."}}}}const authService=new AuthService;class AuthUI{constructor(){this.currentModal=null,this.pendingAction=null,this.escHandler=null,this.config={logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product App"},this.injectStyles()}configure(e){e.logoSrc&&(this.config.logoSrc=e.logoSrc),e.brandName&&(this.config.brandName=e.brandName),e.appName&&(this.config.appName=e.appName)}injectStyles(){if(document.getElementById("auth-ui-styles"))return;const e=document.createElement("style");e.id="auth-ui-styles",e.textContent=`
      /* Auth Modal Overlay */
      .auth-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 26, 0.85);
        backdrop-filter: blur(8px);
        z-index: 200000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: authFadeIn 0.2s ease;
      }
      
      @keyframes authFadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      /* Auth Modal Container */
      .auth-modal {
        background: #fff;
        border-radius: 16px;
        max-width: 420px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        animation: authSlideUp 0.3s ease;
      }
      
      @keyframes authSlideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Auth Header */
      .auth-header {
        padding: 32px 32px 0;
        text-align: center;
      }
      
      .auth-logo {
        height: 36px;
        margin-bottom: 8px;
      }
      
      .auth-brand {
        font-size: 11px;
        color: #9ca3af;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 24px;
      }
      
      .auth-title {
        font-family: var(--font-display, 'Fraunces', serif);
        font-size: 1.5rem;
        font-weight: 600;
        color: #1a1a1a;
        margin: 0 0 8px 0;
      }
      
      .auth-subtitle {
        font-size: 0.9375rem;
        color: #6b7280;
        margin: 0;
      }
      
      /* Auth Form */
      .auth-form {
        padding: 32px;
      }
      
      .auth-field {
        margin-bottom: 20px;
      }
      
      .auth-field label {
        display: block;
        font-size: 0.8125rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 6px;
      }
      
      .auth-field input {
        width: 100%;
        padding: 12px 14px;
        font-size: 0.9375rem;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        background: #fff;
        color: #1a1a1a;
        transition: all 0.15s ease;
        box-sizing: border-box;
      }
      
      .auth-field input:focus {
        outline: none;
        border-color: var(--color-copper, #b87333);
        box-shadow: 0 0 0 3px rgba(184, 115, 51, 0.15);
      }
      
      .auth-field input.error {
        border-color: #ef4444;
      }
      
      .auth-field .field-hint {
        font-size: 0.75rem;
        color: #9ca3af;
        margin-top: 4px;
      }
      
      .auth-field .field-error {
        font-size: 0.75rem;
        color: #ef4444;
        margin-top: 4px;
      }
      
      /* Remember Me / Forgot Password Row */
      .auth-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
      }
      
      .auth-remember {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
      
      .auth-remember input[type="checkbox"] {
        width: 16px;
        height: 16px;
        accent-color: var(--color-copper, #b87333);
      }
      
      .auth-remember span {
        font-size: 0.875rem;
        color: #4b5563;
      }
      
      .auth-forgot {
        font-size: 0.875rem;
        color: var(--color-copper, #b87333);
        text-decoration: none;
        cursor: pointer;
      }
      
      .auth-forgot:hover {
        text-decoration: underline;
      }
      
      /* Auth Buttons */
      .auth-btn {
        width: 100%;
        padding: 14px;
        font-size: 0.9375rem;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .auth-btn-primary {
        background: var(--color-charcoal, #1a1a1a);
        color: #fff;
      }
      
      .auth-btn-primary:hover {
        background: #2d2d2d;
        transform: translateY(-1px);
      }
      
      .auth-btn-primary:disabled {
        background: #9ca3af;
        cursor: not-allowed;
        transform: none;
      }
      
      .auth-btn-secondary {
        background: transparent;
        color: #4b5563;
        border: 1px solid #d1d5db;
        margin-top: 12px;
      }
      
      .auth-btn-secondary:hover {
        background: #f3f4f6;
      }
      
      /* Auth Footer Links */
      .auth-footer {
        padding: 0 32px 32px;
        text-align: center;
      }
      
      .auth-footer-text {
        font-size: 0.875rem;
        color: #6b7280;
      }
      
      .auth-footer-link {
        color: var(--color-copper, #b87333);
        font-weight: 600;
        cursor: pointer;
      }
      
      .auth-footer-link:hover {
        text-decoration: underline;
      }
      
      /* Auth Divider */
      .auth-divider {
        display: flex;
        align-items: center;
        margin: 24px 0;
        color: #9ca3af;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      
      .auth-divider::before,
      .auth-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #e5e7eb;
      }
      
      .auth-divider span {
        padding: 0 16px;
      }
      
      /* Auth Message */
      .auth-message {
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 0.875rem;
      }
      
      .auth-message.error {
        background: #fef2f2;
        color: #b91c1c;
        border: 1px solid #fecaca;
      }
      
      .auth-message.success {
        background: #f0fdf4;
        color: #166534;
        border: 1px solid #bbf7d0;
      }
      
      /* Auth Close Button */
      .auth-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 32px;
        height: 32px;
        border: none;
        background: transparent;
        color: #9ca3af;
        cursor: pointer;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
      }
      
      .auth-close:hover {
        background: #f3f4f6;
        color: #4b5563;
      }
      
      /* User Menu (logged in state) */
      .user-menu-trigger {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        background: rgba(255,255,255,0.1);
        border: none;
        border-radius: 6px;
        color: rgba(255,255,255,0.9);
        font-size: 0.8125rem;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      .user-menu-trigger:hover {
        background: rgba(255,255,255,0.15);
      }
      
      .user-avatar {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: var(--color-copper, #b87333);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.6875rem;
        font-weight: 600;
      }
      
      .user-menu-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 8px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        min-width: 220px;
        overflow: hidden;
        z-index: 100;
        animation: dropdownFadeIn 0.15s ease;
      }
      
      @keyframes dropdownFadeIn {
        from { opacity: 0; transform: translateY(-8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .user-menu-header {
        padding: 16px;
        border-bottom: 1px solid #e5e7eb;
      }
      
      .user-menu-name {
        font-weight: 600;
        color: #1a1a1a;
        font-size: 0.9375rem;
      }
      
      .user-menu-email {
        font-size: 0.75rem;
        color: #6b7280;
        margin-top: 2px;
      }
      
      .user-menu-items {
        padding: 8px;
      }
      
      .user-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 10px 12px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #374151;
        font-size: 0.875rem;
        cursor: pointer;
        transition: background 0.15s ease;
        text-align: left;
      }
      
      .user-menu-item:hover {
        background: #f3f4f6;
      }
      
      .user-menu-item.danger {
        color: #b91c1c;
      }
      
      .user-menu-item.danger:hover {
        background: #fef2f2;
      }
      
      /* Loading Spinner */
      .auth-spinner {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: authSpin 0.8s linear infinite;
        display: inline-block;
        margin-right: 8px;
      }
      
      @keyframes authSpin {
        to { transform: rotate(360deg); }
      }
      
      /* Reset Code Input */
      .reset-code-input {
        font-family: 'SF Mono', 'Consolas', monospace;
        font-size: 1.5rem !important;
        text-align: center;
        letter-spacing: 0.3em;
        text-transform: uppercase;
      }
      
      /* User Menu (Mobile-friendly) */
      .auth-user-menu {
        position: fixed;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        min-width: 260px;
        max-width: 320px;
        z-index: 200001;
        overflow: hidden;
        animation: authSlideUp 0.2s ease;
      }
      
      .auth-user-menu-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%);
        color: #fff;
      }
      
      .auth-user-menu-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(255,255,255,0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
      }
      
      .auth-user-menu-info {
        flex: 1;
        min-width: 0;
      }
      
      .auth-user-menu-name {
        font-weight: 600;
        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .auth-user-menu-email {
        font-size: 0.8rem;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .auth-user-menu-items {
        padding: 8px;
      }
      
      .auth-user-menu-item {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 14px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #374151;
        font-size: 0.9375rem;
        cursor: pointer;
        transition: background 0.15s ease;
        text-align: left;
      }
      
      .auth-user-menu-item:hover {
        background: #f3f4f6;
      }
      
      .auth-user-menu-item svg {
        flex-shrink: 0;
        color: #6b7280;
      }
      
      .auth-user-menu-item-danger {
        color: #b91c1c;
      }
      
      .auth-user-menu-item-danger:hover {
        background: #fef2f2;
      }
      
      .auth-user-menu-item-danger svg {
        color: #b91c1c;
      }
      
      .auth-user-menu-divider {
        height: 1px;
        background: #e5e7eb;
        margin: 8px 0;
      }
      
      /* Mobile adjustments */
      @media (max-width: 480px) {
        .auth-user-menu {
          left: 16px !important;
          right: 16px !important;
          max-width: none;
        }
      }
    `,document.head.appendChild(e)}showLogin(e=null){this.pendingAction=e?{callback:e}:null;const i=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Login</h2>
            <p class="auth-subtitle">Sign in to create PDF and other features</p>
          </div>
          
          <form class="auth-form" id="login-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="login-email">Email</label>
              <input type="email" id="login-email" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="login-password">Password</label>
              <input type="password" id="login-password" placeholder="Enter your password" required>
            </div>
            
            <div class="auth-options">
              <label class="auth-remember">
                <input type="checkbox" id="login-remember">
                <span>Remember me</span>
              </label>
              <a class="auth-forgot" id="show-forgot">Forgot password?</a>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="login-submit">
              Sign In
            </button>
          </form>
          
          <div class="auth-footer">
            <p class="auth-footer-text">
              Don't have an account? 
              <span class="auth-footer-link" id="show-register">Create one</span>
            </p>
          </div>
        </div>
      </div>
    `;this.showModal(i),this.setupLoginHandlers(e)}showRegister(){const e=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Create Account</h2>
            <p class="auth-subtitle">Register for staff access</p>
          </div>
          
          <form class="auth-form" id="register-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="register-name">Full Name *</label>
              <input type="text" id="register-name" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="register-email">Email *</label>
              <input type="email" id="register-email" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="register-password">Password *</label>
              <input type="password" id="register-password" placeholder="Create a password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <div class="auth-field">
              <label for="register-position">Position</label>
              <input type="text" id="register-position" placeholder="e.g. Sales Consultant">
            </div>
            
            <div class="auth-field">
              <label for="register-phone">Phone</label>
              <input type="tel" id="register-phone" placeholder="Your phone number">
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="register-submit">
              Create Account
            </button>
          </form>
          
          <div class="auth-footer">
            <p class="auth-footer-text">
              Already have an account? 
              <span class="auth-footer-link" id="show-login">Sign in</span>
            </p>
          </div>
        </div>
      </div>
    `;this.showModal(e),this.setupRegisterHandlers()}showForgotPassword(){const e=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Reset Password</h2>
            <p class="auth-subtitle">Enter your email to receive a reset code</p>
          </div>
          
          <form class="auth-form" id="forgot-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="forgot-email">Email</label>
              <input type="email" id="forgot-email" placeholder="you@example.com" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="forgot-submit">
              Send Reset Code
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="show-login-back">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(e),this.setupForgotHandlers()}showResetPassword(e=""){const i=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Enter Reset Code</h2>
            <p class="auth-subtitle">Check your email for the 6-character code</p>
          </div>
          
          <form class="auth-form" id="reset-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="reset-email">Email</label>
              <input type="email" id="reset-email" value="${e}" placeholder="you@example.com" required>
            </div>
            
            <div class="auth-field">
              <label for="reset-code">Reset Code</label>
              <input type="text" id="reset-code" class="reset-code-input" placeholder="ABC123" maxlength="6" required>
            </div>
            
            <div class="auth-field">
              <label for="reset-new-password">New Password</label>
              <input type="password" id="reset-new-password" placeholder="Create a new password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="reset-submit">
              Reset Password
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="show-login-back">
              Back to Sign In
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(i),this.setupResetHandlers()}showEditProfile(e=null){const i=authService.getCurrentUser();if(!i){console.warn("Cannot edit profile: not logged in");return}const s=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Edit Profile</h2>
            <p class="auth-subtitle">Update your contact information</p>
          </div>
          
          <form class="auth-form" id="edit-profile-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="profile-email">Email</label>
              <input type="email" id="profile-email" value="${i.email||""}" disabled style="background: #f3f4f6; cursor: not-allowed;">
              <div class="field-hint">Email cannot be changed</div>
            </div>
            
            <div class="auth-field">
              <label for="profile-name">Full Name *</label>
              <input type="text" id="profile-name" value="${i.name||""}" placeholder="Your name" required>
            </div>
            
            <div class="auth-field">
              <label for="profile-position">Position</label>
              <input type="text" id="profile-position" value="${i.position||""}" placeholder="e.g. Sales Representative">
            </div>
            
            <div class="auth-field">
              <label for="profile-phone">Phone</label>
              <input type="tel" id="profile-phone" value="${i.phone||""}" placeholder="Your phone number">
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="profile-submit">
              Save Changes
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="profile-cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(s),this.setupEditProfileHandlers(e)}setupEditProfileHandlers(e){var s;const i=document.getElementById("edit-profile-form");i==null||i.addEventListener("submit",async o=>{var l,u,c,h,p,g;o.preventDefault();const r=(u=(l=document.getElementById("profile-name"))==null?void 0:l.value)==null?void 0:u.trim(),n=((h=(c=document.getElementById("profile-position"))==null?void 0:c.value)==null?void 0:h.trim())||"",d=((g=(p=document.getElementById("profile-phone"))==null?void 0:p.value)==null?void 0:g.trim())||"";if(!r){this.showMessage("Name is required");return}this.setLoading("profile-submit",!0);const a=await authService.updateProfile({name:r,position:n,phone:d});this.setLoading("profile-submit",!1),a.success?(this.showMessage("Profile updated successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e(a.user)},1e3)):this.showMessage(a.error)}),(s=document.getElementById("profile-cancel"))==null||s.addEventListener("click",()=>this.closeModal())}showChangePassword(e=null){if(!authService.isLoggedIn()){console.warn("Cannot change password: not logged in");return}const i=`
      <div class="auth-modal-overlay" id="auth-modal">
        <div class="auth-modal" style="position: relative;">
          <button class="auth-close" id="auth-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="auth-header">
            <img src="${this.config.logoSrc}" alt="${this.config.brandName}" class="auth-logo">
            <div class="auth-brand">${this.config.appName}</div>
            <h2 class="auth-title">Change Password</h2>
            <p class="auth-subtitle">Enter your current and new password</p>
          </div>
          
          <form class="auth-form" id="change-password-form">
            <div id="auth-message"></div>
            
            <div class="auth-field">
              <label for="current-password">Current Password</label>
              <input type="password" id="current-password" placeholder="Enter current password" required>
            </div>
            
            <div class="auth-field">
              <label for="new-password">New Password</label>
              <input type="password" id="new-password" placeholder="Enter new password" required>
              <div class="field-hint">At least 8 characters with 1 number</div>
            </div>
            
            <div class="auth-field">
              <label for="confirm-password">Confirm New Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm new password" required>
            </div>
            
            <button type="submit" class="auth-btn auth-btn-primary" id="password-submit">
              Change Password
            </button>
            
            <button type="button" class="auth-btn auth-btn-secondary" id="password-cancel">
              Cancel
            </button>
          </form>
        </div>
      </div>
    `;this.showModal(i),this.setupChangePasswordHandlers(e)}setupChangePasswordHandlers(e){var s;const i=document.getElementById("change-password-form");i==null||i.addEventListener("submit",async o=>{var l,u,c;o.preventDefault();const r=(l=document.getElementById("current-password"))==null?void 0:l.value,n=(u=document.getElementById("new-password"))==null?void 0:u.value,d=(c=document.getElementById("confirm-password"))==null?void 0:c.value;if(n!==d){this.showMessage("New passwords do not match");return}if(n.length<8){this.showMessage("New password must be at least 8 characters");return}if(!/\d/.test(n)){this.showMessage("New password must contain at least one number");return}this.setLoading("password-submit",!0);const a=await authService.changePassword(r,n);this.setLoading("password-submit",!1),a.success?(this.showMessage("Password changed successfully!","success"),setTimeout(()=>{this.closeModal(),e&&e()},1500)):this.showMessage(a.error)}),(s=document.getElementById("password-cancel"))==null||s.addEventListener("click",()=>this.closeModal())}showUserMenu(e,i={}){var a,l,u;const s=authService.getCurrentUser();if(!s)return;const o=document.getElementById("auth-user-menu");if(o){o.remove();return}const n=`
      <div id="auth-user-menu" class="auth-user-menu">
        <div class="auth-user-menu-header">
          <div class="auth-user-menu-avatar">${this.getInitials(s.name)}</div>
          <div class="auth-user-menu-info">
            <div class="auth-user-menu-name">${s.name||"User"}</div>
            <div class="auth-user-menu-email">${s.email||""}</div>
          </div>
        </div>
        <div class="auth-user-menu-items">
          <button class="auth-user-menu-item" id="user-menu-profile">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Edit Profile
          </button>
          <button class="auth-user-menu-item" id="user-menu-password">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Change Password
          </button>
          <div class="auth-user-menu-divider"></div>
          <button class="auth-user-menu-item auth-user-menu-item-danger" id="user-menu-logout">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",n);const d=document.getElementById("auth-user-menu");if(e){const c=e.getBoundingClientRect();d.style.position="fixed",d.style.top=c.bottom+8+"px",d.style.right=window.innerWidth-c.right+"px"}(a=document.getElementById("user-menu-profile"))==null||a.addEventListener("click",()=>{d.remove(),this.showEditProfile()}),(l=document.getElementById("user-menu-password"))==null||l.addEventListener("click",()=>{d.remove(),this.showChangePassword()}),(u=document.getElementById("user-menu-logout"))==null||u.addEventListener("click",()=>{d.remove(),authService.logout(),i.onLogout&&i.onLogout()}),setTimeout(()=>{const c=h=>{!d.contains(h.target)&&h.target!==e&&(d.remove(),document.removeEventListener("click",c))};document.addEventListener("click",c)},10)}showModal(e){var s;this.closeModal();const i=document.createElement("div");i.innerHTML=e,document.body.appendChild(i.firstElementChild),this.currentModal=document.getElementById("auth-modal"),(s=document.getElementById("auth-close"))==null||s.addEventListener("click",()=>this.closeModal()),document.addEventListener("keydown",this.escHandler=o=>{o.key==="Escape"&&this.closeModal()})}closeModal(){this.currentModal&&(this.currentModal.remove(),this.currentModal=null),this.escHandler&&document.removeEventListener("keydown",this.escHandler)}showMessage(e,i="error"){const s=document.getElementById("auth-message");s&&(s.innerHTML=`<div class="auth-message ${i}">${e}</div>`)}setLoading(e,i){const s=document.getElementById(e);s&&(i?(s.disabled=!0,s.dataset.originalText=s.textContent,s.innerHTML='<span class="auth-spinner"></span>Please wait...'):(s.disabled=!1,s.textContent=s.dataset.originalText||"Submit"))}setupLoginHandlers(e){var s,o;const i=document.getElementById("login-form");i==null||i.addEventListener("submit",async r=>{var u,c,h,p;r.preventDefault();const n=(u=document.getElementById("login-email"))==null?void 0:u.value,d=(c=document.getElementById("login-password"))==null?void 0:c.value,a=((h=document.getElementById("login-remember"))==null?void 0:h.checked)||!1;this.setLoading("login-submit",!0);const l=await authService.login(n,d,a);this.setLoading("login-submit",!1),l.success?(this.closeModal(),e&&e(l.user),(p=this.pendingAction)!=null&&p.callback&&(this.pendingAction.callback(l.user),this.pendingAction=null)):this.showMessage(l.error)}),(s=document.getElementById("show-register"))==null||s.addEventListener("click",()=>this.showRegister()),(o=document.getElementById("show-forgot"))==null||o.addEventListener("click",()=>this.showForgotPassword())}setupRegisterHandlers(){var i;const e=document.getElementById("register-form");e==null||e.addEventListener("submit",async s=>{var u,c,h,p,g;s.preventDefault();const o=(u=document.getElementById("register-name"))==null?void 0:u.value,r=(c=document.getElementById("register-email"))==null?void 0:c.value,n=(h=document.getElementById("register-password"))==null?void 0:h.value,d=((p=document.getElementById("register-position"))==null?void 0:p.value)||"",a=((g=document.getElementById("register-phone"))==null?void 0:g.value)||"";this.setLoading("register-submit",!0);const l=await authService.register(r,n,o,d,a);this.setLoading("register-submit",!1),l.success?(this.showMessage("Account created! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(l.error)}),(i=document.getElementById("show-login"))==null||i.addEventListener("click",()=>this.showLogin())}setupForgotHandlers(){var i;const e=document.getElementById("forgot-form");e==null||e.addEventListener("submit",async s=>{var n;s.preventDefault();const o=(n=document.getElementById("forgot-email"))==null?void 0:n.value;this.setLoading("forgot-submit",!0);const r=await authService.requestPasswordReset(o);this.setLoading("forgot-submit",!1),r.success?(this.showMessage("If this email exists, a reset code has been sent.","success"),setTimeout(()=>this.showResetPassword(o),2e3)):this.showMessage(r.error)}),(i=document.getElementById("show-login-back"))==null||i.addEventListener("click",()=>this.showLogin())}setupResetHandlers(){var i;const e=document.getElementById("reset-form");e==null||e.addEventListener("submit",async s=>{var a,l,u;s.preventDefault();const o=(a=document.getElementById("reset-email"))==null?void 0:a.value,r=(l=document.getElementById("reset-code"))==null?void 0:l.value,n=(u=document.getElementById("reset-new-password"))==null?void 0:u.value;this.setLoading("reset-submit",!0);const d=await authService.resetPassword(o,r,n);this.setLoading("reset-submit",!1),d.success?(this.showMessage("Password reset successfully! You can now sign in.","success"),setTimeout(()=>this.showLogin(),1500)):this.showMessage(d.error)}),(i=document.getElementById("show-login-back"))==null||i.addEventListener("click",()=>this.showLogin())}getInitials(e){if(!e)return"?";const i=e.split(" ");return i.length>=2?(i[0][0]+i[i.length-1][0]).toUpperCase():e.substring(0,2).toUpperCase()}requireAuth(e,i="continue"){authService.isLoggedIn()?e(authService.getCurrentUser()):this.showLogin(e)}}const authUI=new AuthUI;function isTechnicalDiagram(t,e){try{const i=Math.min(100,t.width),s=Math.min(100,t.height),r=e.getImageData(0,0,i,s).data,n=new Set;for(let d=0;d<r.length;d+=4){const a=`${r[d]},${r[d+1]},${r[d+2]}`;if(n.add(a),n.size>1e3)return!1}return n.size<1e3}catch(i){return console.warn("Could not analyze image for diagram detection:",i),!1}}function detectTransparency(t,e){try{const s=e.getImageData(0,0,t.width,t.height).data;for(let o=3;o<s.length;o+=4)if(s[o]<255)return!0;return!1}catch(i){return console.warn("Could not detect transparency:",i),!1}}const PDF_COLORS={headerBackground:"#8B6C2B",footerBackground:"#9B9184",textPrimary:"#222",textSecondary:"#444",textSubtle:"#666",linkColor:[0,102,204],white:"#fff",headerText:"#f4f4f4"},PDF_LAYOUT={margins:{left:32,right:32},footerHeight:28,imageWidth:90,imagePadding:12,welsColumnWidth:50,codeColumnOffset:85,coverLogoWidth:250},preloadedImageCache=new Map;async function preloadAllProductImages(t,e={}){const{batchSize:i=10,maxWidth:s=400,quality:o=.8}=e;preloadedImageCache.clear();const r=new Set;t.forEach(c=>{c.Image_URL&&c.Image_URL.length>10&&r.add(c.Image_URL),c.Diagram_URL&&c.Diagram_URL.length>10&&r.add(c.Diagram_URL)});const n=Array.from(r);if(n.length===0)return console.log("📷 No images to preload"),0;console.log(`📷 Preloading ${n.length} images in parallel...`);const d=Date.now();let a=0,l=0;for(let c=0;c<n.length;c+=i){const h=n.slice(c,c+i);(await Promise.allSettled(h.map(f=>preloadSingleImage(f,s,o)))).forEach((f,m)=>{const w=h[m];f.status==="fulfilled"&&f.value?(preloadedImageCache.set(w,f.value),a++):l++});const g=document.getElementById("preload-progress");if(g){const f=Math.min(100,Math.round((c+h.length)/n.length*100));g.textContent=`Loading images: ${f}%`}}const u=((Date.now()-d)/1e3).toFixed(1);return console.log(`✅ Preloaded ${a}/${n.length} images in ${u}s (${l} failed)`),a}async function preloadSingleImage(t,e=400,i=.8){if(preloadedImageCache.has(t))return preloadedImageCache.get(t);if((r=>{if(!r||r.length<25||/\/images\/\d+$/.test(r)||r.endsWith("/0"))return!0;const n=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(r),d=r.startsWith("data:");return!n&&!d})(t))return console.warn("Skipping malformed image URL:",(t==null?void 0:t.substring(0,50))+"..."),null;const o=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];for(let r=0;r<o.length;r++){const n=await tryLoadWithProxy(t,o[r],e,i);if(n)return n}return console.warn("All proxies failed for image:",t.substring(0,60)),null}function tryLoadWithProxy(t,e,i,s){return new Promise(o=>{const r=new Image;r.crossOrigin="anonymous";const n=setTimeout(()=>{r.src="",o(null)},3e3);r.onload=function(){clearTimeout(n);try{const a=document.createElement("canvas"),l=a.getContext("2d");let u=r.width,c=r.height;u>i&&(c=c*i/u,u=i),a.width=u,a.height=c,l.imageSmoothingEnabled=!0,l.imageSmoothingQuality="high",l.drawImage(r,0,0,u,c);const h=detectTransparency(a,l),p=isTechnicalDiagram(a,l),g=h||p?"PNG":"JPEG",f=p?.9:s,m=a.toDataURL(`image/${g.toLowerCase()}`,f);o({dataUrl:m,width:u,height:c,format:g})}catch{console.warn("Failed to optimize image:",t.substring(0,50)),o(null)}},r.onerror=()=>{clearTimeout(n),o(null)};const d=e?e+encodeURIComponent(t):t;r.src=d})}function getCachedImage(t){return preloadedImageCache.get(t)}function getImageCacheSize(){return preloadedImageCache.size}function hasWelsData(t){const e=t["WELS STAR"]||t.WELS_STAR||t.WELS_STAR||t.WelsStar||"";return e&&e.toString().trim()!==""}function calculateColumnLayout(t,e={}){const{leftMargin:i=PDF_LAYOUT.margins.left,rightMargin:s=PDF_LAYOUT.margins.right,showRrp:o=!1,showPrice:r=!0,showQty:n=!0,showTotal:d=!0}=e,a=PDF_LAYOUT.imageWidth,l=PDF_LAYOUT.imagePadding,u=PDF_LAYOUT.welsColumnWidth,c=i+a*2+l*2,h=c+PDF_LAYOUT.codeColumnOffset;let p,g,f;if(o&&r&&n&&d){const m=t-280,w=m-u,b=t-200,v=t-120,S=t-60;p=[i,c,h,w,m,b,v,S],g=[a,a,w-h-10,u,b-m,v-b,S-v,60],f=["Code","Description","WELS","RRP","Price","Qty","Total"]}else if(r&&n&&d){const m=t-200,w=m-u,b=t-120,v=t-60;p=[i,c,h,w,m,b,v],g=[a,a,w-h-10,u,b-m,v-b,60],f=["Code","Description","WELS","Price","Qty","Total"]}else if(r&&!n)if(o){const m=t-180,w=m-u,b=t-90;p=[i,c,h,w,m,b],g=[a,a,w-h-10,u,b-m,90],f=["Code","Description","WELS","RRP","Price"]}else{const m=t-90,w=m-u;p=[i,c,h,w,m],g=[a,a,w-h-10,u,90],f=["Code","Description","WELS","Price"]}else if(!r&&n){const m=t-80,w=m-u;p=[i,c,h,w,m],g=[a,a,w-h-10,u,80],f=["Code","Description","WELS","Qty"]}else{const m=t-s-u;p=[i,c,h,m],g=[a,a,m-h-10,u],f=["Code","Description","WELS"]}return{colX:p,colW:g,headers:f,imgW:a,imgPad:l}}function drawPDFHeader(t,e={}){const{pageWidth:i,colX:s,colW:o,leftMargin:r=PDF_LAYOUT.margins.left,footerHeight:n=PDF_LAYOUT.footerHeight,logoDataUrl:d,logoNaturalW:a,logoNaturalH:l,headers:u=[],userDetails:c={},skipWelsHeader:h=!1,headerColor:p=PDF_COLORS.headerBackground}=e,g=n+5.7;if(t.setFillColor(p),t.rect(0,0,i,g,"F"),d&&a&&l){const m=a/l,w=80,b=g*.6;let v=b*m,S=b;v>w&&(v=w,S=v/m);const L=(g-S)/2;t.addImage(d,"PNG",r,L,v,S)}t.setFontSize(10),t.setTextColor(PDF_COLORS.headerText),t.setFont("helvetica","normal");const f=g-8;u.forEach((m,w)=>{if(m==="WELS"&&h)return;const b=w+1;if(b<s.length){const v=s[b]+o[b]/2;if(m==="Price"&&!c.excludePrice){t.setFont("helvetica","normal");const S=c.includeGst?"INC GST":"EX GST",L=`Price ${S}`,T=t.getTextWidth("Price "),k=v-t.getTextWidth(L)/2;t.text("Price ",k,f),t.setFont("helvetica","bold"),t.text(S,k+T,f),t.setFont("helvetica","normal")}else if(m==="RRP"){const S=c.includeGst?"INC":"EX";t.text(`RRP ${S}`,v,f,{align:"center"})}else t.text(m,v,f,{align:"center"})}})}function drawPDFFooter(t,e={}){const{pageWidth:i,pageHeight:s,leftMargin:o=PDF_LAYOUT.margins.left,footerHeight:r=PDF_LAYOUT.footerHeight,pageNumber:n,totalPages:d,footerColor:a=PDF_COLORS.footerBackground}=e;t.setFillColor(a),t.rect(0,s-r,i,r,"F"),t.setTextColor(PDF_COLORS.white),t.setFontSize(11);const l=s-r/2+3;t.text("www.seima.com.au",i-140,l),n!==void 0&&d!==void 0&&t.text(`Page ${n} of ${d}`,o,l)}function drawCoverPage(t,e={}){const{pageWidth:i,pageHeight:s,seimaLogoDataUrl:o,seimaLogoNaturalW:r,seimaLogoNaturalH:n,customerLogoDataUrl:d,userDetails:a={},staffContact:l,footerHeight:u=PDF_LAYOUT.footerHeight}=e,c=i/2,h=320,p=90,g=(i-h)/2,f=70;if(d){t.setFillColor(255,255,255),t.rect(g,f,h,p,"F");try{const y=new Image;y.src=d;const M=h-20,D=p-20,z=y.width/y.height||2;let O=M,_=M/z;_>D&&(_=D,O=D*z);const H=g+(h-O)/2,Y=f+(p-_)/2;t.addImage(d,"PNG",H,Y,O,_,void 0,"FAST")}catch(y){console.warn("Failed to draw customer logo:",y)}}const m=PDF_LAYOUT.coverLogoWidth,w=n&&r?m*n/r:65,b=(i-m)/2,v=f+p+80;o&&t.addImage(o,"PNG",b,v,m,w,void 0,"FAST");const S="Build with Confidence",L=v+w+28;t.setFont("helvetica","normal"),t.setFontSize(18),t.setTextColor("#333");const T=S.split(""),k=t.getTextWidth(S),W=(m-k)/(T.length-1);let B=b;T.forEach(y=>{t.text(y,B,L),B+=t.getTextWidth(y)+W}),t.setFontSize(15),t.setTextColor(PDF_COLORS.textSecondary);const N=c;let C=L+50;const E=[];a!=null&&a.name&&a.name.trim()&&E.push({label:"Name:",value:a.name.trim(),bold:!0}),a!=null&&a.project&&a.project.trim()&&E.push({label:"Project:",value:a.project.trim(),bold:!0}),a!=null&&a.address&&a.address.trim()&&E.push({label:"Address:",value:a.address.trim(),bold:!0}),a!=null&&a.email&&a.email.trim()&&E.push({label:"Email:",value:a.email.trim(),bold:!0});const A=(a==null?void 0:a.telephone)||(a==null?void 0:a.phone)||"";A&&A.trim()&&E.push({label:"Telephone:",value:A.trim(),bold:!0});const U=E.length*26,$=s-u-40-C;U<$&&(C=C+($-U)/3),E.forEach(y=>{t.setFont("helvetica","normal"),t.setFontSize(15),t.setTextColor(PDF_COLORS.textSecondary);const M=t.getTextWidth(y.label+" ");t.text(y.label,N-80,C),y.bold&&t.setFont("helvetica","bold"),t.text(y.value,N-80+M,C),C+=26});let P="";const x=(l==null?void 0:l.name)||(l==null?void 0:l.staffName)||"",F=(l==null?void 0:l.phone)||(l==null?void 0:l.mobile)||(l==null?void 0:l.staffPhone)||"",I=(l==null?void 0:l.email)||(l==null?void 0:l.staffEmail)||"",R=(l==null?void 0:l.position)||(l==null?void 0:l.staffPosition)||"";x&&F&&I?P=`For more information, please contact ${R?`${x}, ${R}`:x} on ${F} or email ${I}`:x&&I?P=`For more information, please contact ${R?`${x}, ${R}`:x} at ${I}`:x?P=`For more information, please contact ${R?`${x}, ${R}`:x}`:F?P=`For more information, please call ${F}`:I&&(P=`For more information, please email ${I}`),P||(P="For more information, please contact your Seima representative or email info@seima.com.au"),t.setFont("helvetica","normal"),t.setFontSize(14),t.setTextColor("#111"),t.text(P,c,s-u-18,{align:"center"}),drawPDFFooter(t,{pageWidth:i,pageHeight:s,footerHeight:u})}function drawRoomHeader(t,e,i,s,o){t.setFontSize(12),t.setFont("helvetica","bold"),t.setTextColor("#333"),t.text(`${e} (${i})`,s,o+10),t.setFont("helvetica","normal")}function drawProductLinks(t,e,i,s){let o=s;if(e.Datasheet_URL&&e.Datasheet_URL!=="#"&&e.Datasheet_URL.startsWith("http")){t.setFontSize(9),t.setTextColor(...PDF_COLORS.linkColor),t.textWithLink("Datasheet",i,o,{url:e.Datasheet_URL,align:"center"});const r=t.getTextWidth("Datasheet");t.setDrawColor(...PDF_COLORS.linkColor),t.setLineWidth(.3),t.line(i-r/2,o+1.5,i+r/2,o+1.5),o+=16}if(e.Website_URL&&e.Website_URL!=="#"&&e.Website_URL.startsWith("http")){t.setFontSize(9),t.setTextColor(...PDF_COLORS.linkColor),t.textWithLink("Website",i,o,{url:e.Website_URL,align:"center"});const r=t.getTextWidth("Website");t.setDrawColor(...PDF_COLORS.linkColor),t.setLineWidth(.3),t.line(i-r/2,o+1.5,i+r/2,o+1.5),o+=16}return o}function drawProductDescription(t,e,i,s,o,r=!1){let n=s;t.setFontSize(10),t.setTextColor(PDF_COLORS.textPrimary);const d=t.splitTextToSize(String(e.Description||""),o);t.text(d,i+5,n),n+=d.length*12;const a=e.LongDescription||e["Long Description"]||e.longDescription||"";if(!r&&a){t.setFontSize(9),t.setTextColor(PDF_COLORS.textSecondary);const l=t.splitTextToSize(String(a),o);t.text(l,i+5,n),n+=l.length*11}if(e.Notes){t.setFont("helvetica","italic"),t.setFontSize(9),t.setTextColor(PDF_COLORS.textSecondary);const l=t.splitTextToSize("Notes: "+String(e.Notes),o);t.text(l,i+5,n),t.setFont("helvetica","normal"),n+=l.length*11}return n}function drawWelsRating(t,e,i,s){const o=e["WELS STAR"]||e.WELS_STAR||e.WELS_STAR||e.WelsStar||"";if(o&&o.toString().trim()){const r=o.toString().replace(/[^\d.]/g,"").trim();r&&(t.setFontSize(9),t.setTextColor(PDF_COLORS.textSubtle),t.text(`${r} star`,i,s,{align:"center"}))}}function formatPrice(t){return!t||isNaN(t)||t<=0?"":"$"+t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")}function drawProductPricing(t,e,i,s,o,r,n={}){const{excludePrice:d=!1,includeGst:a=!1}=n;t.setFontSize(10),t.setTextColor(PDF_COLORS.textPrimary);const l=o.indexOf("RRP")+1;if(l>0&&i[l]){let g=NaN;const f=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST;f&&(g=parseFloat(f.toString().replace(/,/g,"")),a&&!isNaN(g)&&(g*=1.1));const m=formatPrice(g);if(m){const w=i[l]+s[l]/2;t.text(m,w,r,{align:"center"})}}const u=o.indexOf("Price")+1;let c=NaN;if(u>0&&i[u]){if(e.UserEditedPrice!==void 0&&e.UserEditedPrice!==null&&e.UserEditedPrice!=="")c=parseFloat(e.UserEditedPrice.toString().replace(/,/g,""));else{const f=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST;f&&(c=parseFloat(f.toString().replace(/,/g,"")))}a&&!isNaN(c)&&(c*=1.1);const g=formatPrice(c);if(g){const f=i[u]+s[u]/2;t.text(g,f,r,{align:"center"})}}const h=o.indexOf("Qty")+1;if(h>0&&i[h]){const g=i[h]+s[h]/2;t.text(String(e.Quantity||1),g,r,{align:"center"})}const p=o.indexOf("Total")+1;if(p>0&&i[p]){const g=(isNaN(c)?0:c)*(e.Quantity||1),f=formatPrice(g);if(f){const m=i[p]+s[p]/2;t.text(f,m,r,{align:"center"})}}}export{AuthService,AuthUI,BrowserCompatibilityManager,CONFIG_BASE,EmailService,PDF_COLORS,PDF_LAYOUT,Utils,authService,authUI,browserCompatibility,calculateColumnLayout,detectTransparency,drawCoverPage,drawPDFFooter,drawPDFHeader,drawProductDescription,drawProductLinks,drawProductPricing,drawRoomHeader,drawWelsRating,formatPrice,getCachedImage,getImageCacheSize,hasWelsData,isTechnicalDiagram,preloadAllProductImages,preloadSingleImage};
