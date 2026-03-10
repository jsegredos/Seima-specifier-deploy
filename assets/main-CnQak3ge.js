const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-ChJN2C3c.js","assets/auth-ui-BChQ8TGM.js","assets/product-search-BkgNvEEc.js","assets/pdf-layouts-B-j0uTYK.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as v,a as ae,A as ne,b as Ie,c as Ve,d as we}from"./ai-service-C6xusKps.js";/* empty css                      */import{d as D,c as G,e as be,L as Se,E as mt}from"./data-layer-u45J67p6.js";import{U as E,a as O,b as H,c as fe}from"./auth-ui-BChQ8TGM.js";import{C as F}from"./config-VMpw2Fyh.js";import{l as ht,g as We,p as ot,d as gt,P as Je,c as ft,h as yt,a as vt,b as wt,e as bt,f as St,i as xt,j as Et,k as kt,m as Ct}from"./pdf-layouts-B-j0uTYK.js";import{c as B}from"./competitor-service-CvmwPB8A.js";import{_ as Pt}from"./preload-helper-CD4qFiWW.js";import{l as It}from"./product-synonyms-B8Oy5E4e.js";import"./product-search-BkgNvEEc.js";class Rt{constructor(){this.currentScreen="welcome",this.currentSearchResults=[]}async init(){if(!D.isLoaded)try{await D.init()}catch(e){console.error("Failed to load product catalog:",e)}this.updateSelectionCount(),this.loadVersion().catch(()=>{}),setTimeout(()=>this.loadVersion(),1e3)}async loadVersion(){try{const e=await fetch("./version.txt");if(e.ok){const t=await e.text(),o=document.getElementById("version-number");if(o){const s=t.trim().split(`
`).filter(r=>r.trim()!==""),n=s.length>0?s[s.length-1]:"Unknown",i=n.split(" - ")[0]||n;o.innerText=i,o.innerText.trim()||(o.innerText="v2.1.0")}}else throw new Error("Version file not found")}catch{const t=document.getElementById("version-number");if(t){const o=G.get("app.version")||"v2.1.0";t.innerText=o}else setTimeout(()=>{const o=document.getElementById("version-number");if(o&&!o.innerText.trim()){const s=G.get("app.version")||"v2.1.0";o.innerText=s}},1e3);console.info("Version loaded from config (GitHub Pages mode)")}}async showProductLookupScreen(){try{const t=await(await fetch("./screens/product-grid.html")).text();document.body.innerHTML=t,this.currentScreen="product-grid";const o=document.createElement("script");o.type="module",o.src="js/app.js",document.body.appendChild(o),setTimeout(()=>{document.querySelectorAll(".back-btn").forEach(s=>s.remove())},100),window.productGridManager&&window.productGridManager.init(),await this.loadVersion(),setTimeout(()=>this.loadVersion(),1e3)}catch(e){console.error("Failed to load product grid screen:",e)}}setupSplitInterface(){const e=document.getElementById("back-to-home");e&&(e.onclick=()=>location.reload());const t=document.getElementById("download-btn"),o=document.getElementById("clear-all-btn");t&&(t.onclick=()=>this.showDownloadFormModal()),o&&(o.onclick=()=>this.showClearConfirmModal()),this.setupSplitProductSearch(),this.setupReviewTable(),this.renderReviewTable(),this.loadInitialSearchResults()}setupSplitProductSearch(){const e=document.getElementById("product-search-input"),t=document.getElementById("search-results-list"),o=document.getElementById("search-loading"),s=document.getElementById("search-no-results");if(!e||!t)return;const n=[],i=E.debounce(r=>{this.performSplitProductSearch(r,t,n,o,s)},200);e.addEventListener("input",()=>{const r=e.value.trim();r?i(r):this.loadInitialSearchResults()}),t.addEventListener("click",r=>{const c=r.target.closest(".result-item");if(!c)return;const a=parseInt(c.getAttribute("data-idx"),10),l=n.length>0?n:this.currentSearchResults||[];!isNaN(a)&&l[a]&&this.showSplitProductDetails(l[a])})}performSplitProductSearch(e,t,o,s,n){if(!D.isLoaded){s.style.display="flex",n.style.display="none",t.innerHTML="";return}o.length=0,o.push(...D.searchProducts(e)),s.style.display="none",o.length===0?(n.style.display="flex",t.innerHTML=""):(n.style.display="none",t.innerHTML=o.map((i,r)=>`
          <div class="result-item" data-idx="${r}">
            <span class="result-code">${E.sanitizeInput(i.OrderCode||i.Code||"")}</span> - ${E.sanitizeInput(i.Description||i.ProductName||i["Product Name"]||"")}
          </div>
        `).join(""))}async loadInitialSearchResults(){const e=document.getElementById("search-results-list"),t=document.getElementById("search-loading"),o=document.getElementById("search-no-results");if(!e)return;if(!D.isLoaded){t.style.display="flex",o.style.display="none",e.innerHTML="",setTimeout(()=>this.loadInitialSearchResults(),500);return}const s=D.getAllProducts().slice(0,50);t.style.display="none",o.style.display="none",e.innerHTML=s.map((n,i)=>`
        <div class="result-item" data-idx="${i}">
          <span class="result-code">${E.sanitizeInput(n.OrderCode||n.Code||"")}</span> - ${E.sanitizeInput(n.Description||n.ProductName||n["Product Name"]||"")}
        </div>
      `).join(""),this.currentSearchResults=s}showSplitProductDetails(e){const t=document.getElementById("product-details"),o=document.getElementById("product-image"),s=document.getElementById("product-name"),n=document.getElementById("product-code"),i=document.getElementById("product-price"),r=document.getElementById("product-room"),c=document.getElementById("product-quantity"),a=document.getElementById("product-notes"),l=document.getElementById("add-product-btn"),d=document.getElementById("close-details");if(t){if(o){const p=e.Image||e.Image_URL||e.imageUrl||"assets/no-image.png";o.src=p,o.alt=e.Description||e.ProductName||e["Product Name"]||"Product Image"}if(s&&(s.textContent=e.Description||e.ProductName||e["Product Name"]||""),n&&(n.textContent=e.OrderCode||e.Code||""),i){const p=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"]||0;i.textContent=p?`$${parseFloat(p).toFixed(2)}`:"Price not available"}this.populateRoomSelect(r),c&&(c.value=1),a&&(a.value=""),d&&(d.onclick=()=>{t.style.display="none"}),l&&(l.onclick=()=>{const p=r?r.value:"Blank",h=c&&parseInt(c.value)||1,f=a?a.value.trim():"";this.addProductToSplitSelection(e,p,h,f),t.style.display="none"}),t.style.display="block"}}async showProductDetailsScreen(e,t={}){try{const s=await(await fetch("./screens/product-details.html")).text();document.body.innerHTML=s,this.currentScreen="product-details",this.populateProductDetails(e,t),this.setupProductDetailsHandlers(e)}catch(o){console.error("Failed to load product details screen:",o)}}populateProductDetails(e,t){const o=document.getElementById("product-image");o&&(o.src=e.Image_URL||"assets/no-image.png",o.onerror=function(){this.src="assets/no-image.png"}),document.getElementById("product-name").textContent=e.Description||"",document.getElementById("product-code").textContent=e.OrderCode?`Code: ${e.OrderCode}`:"";let s="",n=NaN;const i=e.RRP_EX||e["RRP EX GST"]||e.RRP_EX||e.RRP_EXGST||e.rrpExGst||e.RRP_INCGST||e["RRP INC GST"];i&&(n=parseFloat(i.toString().replace(/,/g,""))),!isNaN(n)&&n>0?s=`$${n.toFixed(2)} ex GST`:s="Price unavailable",document.getElementById("product-price-inline").textContent=s,document.getElementById("product-description").textContent=e.LongDescription||"",this.setLink("datasheet-link",e.Datasheet_URL),this.setLink("diagram-link",e.Diagram_URL),this.setLink("website-link",e.Website_URL);const r=document.getElementById("diagram-link"),c=document.getElementById("datasheet-link"),a=document.getElementById("website-link");if([r,c,a].forEach(l=>{l&&(l.setAttribute("target","_blank"),l.setAttribute("rel","noopener noreferrer"))}),this.setupVariantDropdown(e,t),this.populateRoomSelect(),this.setupQuantitySelect(),this.setupAnnotationField(),this.setupAnnotationCharacterCount(t),t.quantity){const l=document.getElementById("product-quantity");l&&(l.value=t.quantity)}t.scannedCode&&this.showScanFeedback(`Successfully scanned: ${t.scannedCode}`)}populateRoomSelect(e=null){const t=e||document.getElementById("room-select");if(!t)return;t.innerHTML='<option value="Blank">Blank</option>',G.get("rooms.predefined",[]).forEach(i=>{const r=document.createElement("option");r.value=i.name,r.textContent=i.name,t.appendChild(r)}),v.getCustomRooms().forEach(i=>{const r=document.createElement("option");r.value=i.name,r.textContent=i.name,t.appendChild(r)});const n=document.createElement("option");n.value="__ADD_NEW_ROOM__",n.textContent="➕ Add new room...",n.style.fontWeight="bold",n.style.color="#2563eb",t.appendChild(n),t.value="Blank",t.removeEventListener("change",this.handleRoomSelectChange.bind(this)),t.addEventListener("change",this.handleRoomSelectChange.bind(this))}setupQuantitySelect(){const e=document.getElementById("product-quantity");if(!e)return;e.innerHTML="",G.get("ui.quantityOptions",[1,2,3,4,5,6,7,8,9,10]).forEach(o=>{const s=document.createElement("option");s.value=o,s.textContent=o.toString(),e.appendChild(s)})}setLink(e,t){const o=document.getElementById(e);t&&t!=="#"?(o.href=t,o.style.display=""):o.style.display="none"}setupVariantDropdown(e,t){const o=document.getElementById("variant-select-row"),s=document.getElementById("variant-select");if(o&&s){let n=e.ProductName||e["Product Name"]||"";typeof n=="string"&&(n=n.trim());let i=[];n&&(i=D.getAllProducts().filter(r=>{let c=r.ProductName||r["Product Name"]||"";return typeof c=="string"&&(c=c.trim()),c&&c===n})),i.length>1?(i.sort((r,c)=>(r.Description||"").localeCompare(c.Description||"")),o.style.display="",s.innerHTML=i.map(r=>`<option value="${r.OrderCode}"${r.OrderCode===e.OrderCode?" selected":""}>${r.Description}</option>`).join(""),s.onchange=()=>{var a;const r=s.value,c=i.find(l=>l.OrderCode===r);if(c&&c.OrderCode!==e.OrderCode){const l=((a=document.getElementById("product-annotation"))==null?void 0:a.value)||t.notes||"",d=document.getElementById("product-quantity");let p=1;d&&d.value?p=Math.max(1,parseInt(d.value,10)||1):t.quantity&&(p=t.quantity),this.showProductDetailsScreen(c,{notes:l,quantity:p})}}):o.style.display="none"}}setupAnnotationCharacterCount(e){const t=document.getElementById("product-annotation"),o=document.getElementById("annotation-char-count");t&&o&&(t.addEventListener("input",()=>{t.value=t.value.replace(/\r?\n|\r/g," "),o.textContent=`${t.value.length}/140`}),t.addEventListener("keydown",s=>{s.key==="Enter"&&s.preventDefault()}),o.textContent=`${t.value.length}/140`,e.notes&&(t.value=e.notes))}setupAnnotationField(){}setupProductDetailsHandlers(e){const t=document.getElementById("back-to-grid"),o=document.getElementById("add-to-room-btn");t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.addProductToSelection(e))}addProductToSelection(e){const t=document.getElementById("room-select"),o=document.getElementById("product-quantity"),s=document.getElementById("product-annotation"),n=t?t.value:"Blank",i=o?parseInt(o.value):1,r=s?s.value:"";v.addProductToSelection(e,r,n,i)?this.showProductLookupScreen():alert("Failed to add product to selection")}addProductToSplitSelection(e,t,o,s){v.addProductToSelection(e,s,t,o)?(this.renderReviewTable(),this.updateSelectionCount()):alert("Failed to add product to selection")}setupReviewTable(){const e=document.getElementById("review-table-body");e&&(e.addEventListener("change",t=>{t.target.classList.contains("quantity-input")?this.handleQuantityChange(t.target):t.target.classList.contains("room-select")&&this.handleRoomChange(t.target)}),e.addEventListener("click",t=>{t.target.classList.contains("remove-btn")&&this.handleRemoveProduct(t.target)}))}renderReviewTable(){const e=document.getElementById("review-table"),t=document.getElementById("review-table-empty"),o=document.getElementById("review-table-body"),s=document.getElementById("total-items"),n=document.getElementById("total-value");if(!e||!t||!o)return;const i=v.getSelectedProducts();if(i.length===0){e.style.display="none",t.style.display="flex",s&&(s.textContent="0 items"),n&&(n.textContent="$0.00");return}t.style.display="none",e.style.display="flex";let r=0,c=0;i.forEach(a=>{r+=a.quantity;let l=0;a.product.UserEditedPrice!==void 0&&a.product.UserEditedPrice!==null&&a.product.UserEditedPrice!==""?l=parseFloat(a.product.UserEditedPrice.toString().replace(/,/g,""))||0:l=parseFloat((a.product.RRP_EX||a.product["RRP EX GST"]||a.product.RRP_EX||a.product.RRP_EXGST||0).toString().replace(/,/g,""))||0,l>0&&(c+=l*a.quantity)}),s&&(s.textContent=r),n&&(n.textContent=c>0?`$${c.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00"),o.innerHTML=i.map((a,l)=>{const d=a.product;let p=0;d.UserEditedPrice!==void 0&&d.UserEditedPrice!==null&&d.UserEditedPrice!==""?p=parseFloat(d.UserEditedPrice.toString().replace(/,/g,""))||0:p=parseFloat((d.RRP_EX||d["RRP EX GST"]||d.RRP_EX||d.RRP_EXGST||0).toString().replace(/,/g,""))||0;const h=p*a.quantity,f=d.Image||d.Image_URL||d.imageUrl||"assets/no-image.png";return`
        <div class="table-row" data-index="${l}">
          <div class="col-image">
            <img class="table-product-image" src="${f}" alt="Product" onerror="this.src='assets/no-image.png';">
          </div>
          <div class="col-product">
            <div class="product-info">
              <div class="product-name">${E.sanitizeInput(d.Description||d.ProductName||d["Product Name"]||"")}</div>
              <div class="product-code">${E.sanitizeInput(d.OrderCode||d.Code||"")}</div>
              ${a.notes?`<div class="product-notes">${E.sanitizeInput(a.notes)}</div>`:""}
            </div>
          </div>
          <div class="col-room">
            <select class="room-select" data-index="${l}">
              ${this.getRoomOptions(a.room)}
            </select>
          </div>
          <div class="col-price-ea">
            <div class="price-display">${p?`$${p.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-qty">
            <input type="number" class="quantity-input" data-index="${l}" value="${a.quantity}" min="1" step="1">
          </div>
          <div class="col-total">
            <div class="price-display">${p?`$${h.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"N/A"}</div>
          </div>
          <div class="col-actions">
            <button class="remove-btn" data-index="${l}" title="Remove">×</button>
          </div>
        </div>
      `}).join("")}getRoomOptions(e){let t=`<option value="Blank"${e==="Blank"?" selected":""}>Blank</option>`;return G.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),v.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}"${e===n.name?" selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}handleQuantityChange(e){const t=parseInt(e.getAttribute("data-index")),o=Math.max(1,parseInt(e.value)||1),s=v.getSelectedProducts();s[t]&&(s[t].quantity=o,v.setSelectedProducts(s),this.renderReviewTable(),this.updateSelectionCount())}handleRoomChange(e){const t=parseInt(e.getAttribute("data-index"));let o=e.value;if(o==="__ADD_NEW_ROOM__"){const n=prompt("Enter new room name:");if(n&&n.trim()){const i=n.trim();if(v.addCustomRoom(i)){o=i,console.log("✅ Added new room:",i),this.renderSelectionTable();return}else{alert("Room name already exists or is invalid");const r=v.getSelectedProducts();r[t]&&(e.value=r[t].room||"Blank");return}}else{const i=v.getSelectedProducts();i[t]&&(e.value=i[t].room||"Blank");return}}const s=v.getSelectedProducts();s[t]&&(s[t].room=o,v.setSelectedProducts(s),this.updateSelectionCount())}handleRemoveProduct(e){const t=parseInt(e.getAttribute("data-index")),o=v.getSelectedProducts();o[t]&&(o.splice(t,1),v.setSelectedProducts(o),this.renderReviewTable(),this.updateSelectionCount())}async showReviewScreen(){try{const t=await(await fetch("./screens/review.html")).text();document.body.innerHTML=t,this.currentScreen="review",this.setupReviewScreenHandlers(),this.renderReviewList()}catch(e){console.error("Failed to load review screen:",e)}}setupReviewScreenHandlers(){const e=document.getElementById("back-to-grid"),t=document.getElementById("add-more-btn"),o=document.getElementById("quick-pdf-btn");e&&(e.onclick=()=>this.showProductLookupScreen()),t&&(t.onclick=()=>this.showProductLookupScreen()),o&&(o.onclick=()=>this.showDownloadFormModal())}renderReviewList(){const e=document.getElementById("review-list"),t=document.getElementById("review-empty");if(!e)return;const o=v.getSelectedProducts();if(o.length===0){e.innerHTML="",t&&(t.style.display="block");return}t&&(t.style.display="none");const s={};o.forEach(n=>{const i=n.room||"Unassigned";s[i]||(s[i]=[]),s[i].push(n)}),e.innerHTML=Object.entries(s).map(([n,i])=>`
      <div class="review-room-group">
        <div class="review-room-header">${n} <span class="room-count">(${i.length})</span></div>
        ${i.map((r,c)=>{const a=r.product,l=a.Description||a.description||a.productName||a["Product Name"]||"Product",d=a.OrderCode||a.orderCode||"",p=a.Image_URL||a.imageUrl||"assets/no-image.png",h=a.RRP_EX||a["RRP EX GST"]||a.RRP_EX||a.rrpExGst||a.RRP_EXGST||a.RRP_INCGST||a["RRP INC GST"]||"0";return`
          <div class="review-product-card" style="display: flex; flex-direction: column; align-items: stretch;">
            <div style="display: flex; flex-direction: row; align-items: flex-start;">
              <div class="review-product-thumb-wrap">
                <img class="review-product-thumb" src="${p}" alt="Product" onerror="this.src='assets/no-image.png';" onload="">
                <div class="review-qty-pill" data-room="${n}" data-idx="${c}">
                  <button class="review-qty-btn${(r.quantity||1)===1?" delete":""}" data-action="decrement" title="${(r.quantity||1)===1?"Delete":"Decrease"}">
                    ${(r.quantity||1)===1?"<svg viewBox='0 0 64 64' width='64' height='64'><rect x='10' y='8' width='44' height='6' rx='3' fill='black'/><polygon points='7,18 57,18 52,58 12,58' fill='none' stroke='black' stroke-width='7'/></svg>":"–"}
                  </button>
                  <span class="review-qty-value">${r.quantity||1}</span>
                  <button class="review-qty-btn" data-action="increment" title="Increase">+</button>
                </div>
              </div>
              <div class="review-product-info">
                <div class="review-product-title">${l}</div>
                <div class="review-product-meta">
                  <span class="review-product-code">${d?`Code: ${d}`:""}</span>
                  <span class="review-product-price">${`$${Number(h).toFixed(2)} ea (EX GST)`}</span>
                </div>
                <div class="review-product-notes">${r.notes?`Notes: ${r.notes}`:""}</div>
              </div>
            </div>
          </div>
          `}).join("")}
      </div>
    `).join(""),this.setupOriginalQuantityControls(s)}groupProductsByRoom(e){return e.reduce((t,o)=>{const s=o.room||"Unassigned";return t[s]||(t[s]=[]),t[s].push(o),t},{})}setupOriginalQuantityControls(e){document.querySelectorAll(".review-qty-pill").forEach(t=>{const o=t.getAttribute("data-room"),s=parseInt(t.getAttribute("data-idx"),10);t.querySelectorAll(".review-qty-btn").forEach(n=>{n.onclick=()=>{const i=n.getAttribute("data-action"),r=v.getSelectedProducts();let c=-1;const a=r.findIndex(l=>(l.room===o&&c++,l.room===o&&c===s));if(a!==-1){const l=r[a],d=parseInt(l.quantity,10)||1;i==="increment"?v.updateProductQuantity(l.id,d+1):i==="decrement"&&(d===1?v.removeProductFromSelection(l.id):v.updateProductQuantity(l.id,d-1)),this.renderReviewList(),this.updateSelectionCount()}}})})}showDownloadFormModal(){var t;const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const o=document.getElementById("pdf-email-form"),s=document.getElementById("pdf-email-cancel"),n=document.getElementById("pdf-email-send");if(o){const r=E.getStorageItem("pdfFormSettings",{});o["user-name"]&&(o["user-name"].value=r.name||""),o["user-project"]&&(o["user-project"].value=r.project||""),o["user-address"]&&(o["user-address"].value=r.address||""),o["user-email"]&&(o["user-email"].value=r.email||""),o["user-telephone"]&&(o["user-telephone"].value=r.telephone||""),o["exclude-prices"]&&(o["exclude-prices"].checked=!!r.excludePrices),o["exclude-qty"]&&(o["exclude-qty"].checked=!!r.excludeQty),o["exclude-long-description"]&&(o["exclude-long-description"].checked=!!r.excludeLongDescription),o["include-gst"]&&(o["include-gst"].checked=!!r.includeGst)}const i=(t=o.querySelector('label[for="export-csv"]'))==null?void 0:t.parentElement;i&&(i.style.display="none"),n&&(n.textContent="Download"),s&&(s.onclick=()=>{e.style.display="none"}),o&&(o.onsubmit=r=>{r.preventDefault(),this.handleDownloadFormSubmit(),e.style.display="none"})}}handleDownloadFormSubmit(){console.log("🎯 handleDownloadFormSubmit called");const e=document.getElementById("pdf-email-form");if(!e){console.error("❌ Form not found!");return}const t=new FormData(e),o={name:t.get("user-name"),project:t.get("user-project"),address:t.get("user-address"),email:t.get("user-email"),telephone:t.get("user-telephone"),excludePrice:t.get("exclude-price")==="on"||t.get("exclude-prices")==="on",excludeQty:t.get("exclude-qty")==="on",excludeLongDescription:t.get("exclude-long-description")==="on",includeGst:t.get("include-gst")==="on",exportCsv:!0};console.log("📝 Navigation userDetails created:",o),window.dispatchEvent(new CustomEvent("generatePdf",{detail:o}))}showClearConfirmModal(){const e=document.getElementById("clear-selection-modal");if(e){e.style.display="flex";const t=document.getElementById("modal-cancel-btn"),o=document.getElementById("modal-confirm-btn");t&&(t.onclick=()=>{e.style.display="none"}),o&&(o.onclick=()=>{v.clearAllSelections(),e.style.display="none",this.updateSelectionCount(),this.currentScreen==="product-grid"&&window.productGridManager&&window.productGridManager.clearAll()})}}updateSelectionCount(){const e=document.getElementById("selection-count");e&&(e.textContent=v.getSelectionCount().toString())}handleRoomSelectChange(e){const t=e.target;if(t.value==="__ADD_NEW_ROOM__"){const s=prompt("Enter new room name:");if(s&&s.trim()){const n=s.trim();v.addCustomRoom(n)?(this.populateRoomSelect(t),t.value=n,console.log("✅ Added new room:",n)):(alert("Room name already exists or is invalid"),t.value="Blank")}else t.value="Blank"}}}async function Oe(u,e,t="file"){await st(u,e,t)}function ze(u,e=null){const t=document.getElementById("pdf-spinner");t&&(t.style.display="flex"),e&&(window._currentTipTailSettings=e),Ye();const o=document.createElement("div");o.id="pdf-processing-notification",o.style.cssText=`
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
    `,document.body.appendChild(o);const n=ht();$e("./assets/seima-logo.png",async(i,r,c)=>{const a=JSON.parse(localStorage.getItem("selection")||"[]"),l=JSON.parse(localStorage.getItem(F.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let d=[];l.length>0?d=l.map(b=>({...b.product,Room:b.room,Notes:b.notes,Quantity:b.quantity,Timestamp:new Date(b.timestamp).toISOString()})):d=a;const p=document.getElementById("sort-by"),h=p?p.value:"room";switch(h){case"code":d.sort((b,x)=>{const k=b.OrderCode||b.Code||"",P=x.OrderCode||x.Code||"";return k.localeCompare(P)});break;case"product":d.sort((b,x)=>{const k=b.Description||b.ProductName||"",P=x.Description||x.ProductName||"";return k.localeCompare(P)});break;case"room":default:d.sort((b,x)=>{const k=b.Room||"Blank",P=x.Room||"Blank";return k.localeCompare(P)});break}if(!d.length){alert("No products selected."),t&&(t.style.display="none");return}if(We()>0)console.log(`📷 Using ${We()} pre-cached images (skipping duplicate preload)`);else{const b=document.getElementById("pdf-processing-notification");if(b){const x=document.createElement("span");x.id="preload-progress",x.style.cssText="display: block; font-size: 12px; margin-top: 8px; color: #1e40af;",x.textContent="Loading images: 0%",b.appendChild(x)}console.log("📷 Starting image preload for",d.length,"products"),ot(d).then(x=>{const k=document.getElementById("preload-progress");k&&(k.textContent=`✓ ${x} images ready`,k.style.color="#059669")}).catch(x=>{console.warn("Image preloading error:",x)})}const m={};h==="room"?d.forEach(b=>{const x=b.Room||"Blank";m[x]||(m[x]=[]),m[x].push(b)}):m.__all__=d,await n;const{jsPDF:y}=window.jspdf,g=new y({orientation:"landscape",unit:"pt",format:"a4",compress:!0,putOnlyUsedFonts:!0,precision:16,userUnit:1,floatPrecision:16}),S=g.internal.pageSize.getWidth(),w=g.internal.pageSize.getHeight();$e("./assets/seima-logo.png",(b,x,k)=>{const P=O.getCurrentUser(),z=v.getUserSettings(),_=P?{name:P.name,email:P.email,phone:P.phone,position:P.position}:z,Z=localStorage.getItem("customerLogo");gt(g,{pageWidth:S,pageHeight:w,seimaLogoDataUrl:b,seimaLogoNaturalW:x,seimaLogoNaturalH:k,customerLogoDataUrl:Z,userDetails:u,staffContact:_,footerHeight:Je.footerHeight}),g.addPage(),$e("./assets/seima-logo-white.png",(N,ce,Re)=>{const ct=u.showRrp&&!u.excludePrice,je=!u.excludePrice,He=!u.excludeQty,lt=ft(S,{leftMargin:32,rightMargin:32,showRrp:ct,showPrice:je,showQty:He,showTotal:je&&He}),{colX:ue,colW:ye,headers:Le}=lt,xe=Je.footerHeight;Ye();const Ge=(I,C,j,W,A,M,T)=>{if(!C||typeof C!="string"||C.length<10||!C.startsWith("http://")&&!C.startsWith("https://")&&!C.startsWith("data:")){T&&T();return}if((R=>{if(!R||R.length<25||/\/images\/\d+$/.test(R)||R.endsWith("/0"))return!0;const L=/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(R),$=R.startsWith("data:");return!L&&!$})(C)){console.warn("Skipping malformed image URL:",(C==null?void 0:C.substring(0,50))+"..."),T&&T();return}if(V.totalImages++,u.emailCompatible){V.failedImages++,T&&T();return}const J=St(C);if(J&&J.dataUrl)try{const R=J.width/J.height;let L=A,$=A/R;$>M&&($=M,L=M*R),I.addImage(J.dataUrl,J.format,j,W,L,$,void 0,"FAST"),V.optimizedImages++,T&&T();return}catch{console.warn("Failed to use cached image, falling back to direct load")}let te=!1;const me=["https://wsrv.nl/?url=","https://images.weserv.nl/?url=","https://api.codetabs.com/v1/proxy?quest="];let X=0;function Q(){if(te)return;const R=new Image;R.crossOrigin="Anonymous";let L=null;R.onload=function(){if(!te){te=!0,L&&clearTimeout(L);try{const oe=nt(0),Pe=oe.imageMaxWidth,ge=A,Y=M;try{const U=document.createElement("canvas"),K=U.getContext("2d"),{width:se,height:he}=At(R.width,R.height,Pe);U.width=se,U.height=he,K.imageSmoothingEnabled=!0,K.imageSmoothingQuality="high",K.drawImage(R,0,0,se,he);let Be,_e="JPEG";const dt=Nt(U,K),ut=$t(R);dt||ut?(Be=U.toDataURL("image/png",oe.imageQuality),_e="PNG"):(Be=U.toDataURL("image/jpeg",oe.imageQuality),_e="JPEG");const pt=`img_${Gt(C)}`;I.addImage(Be,_e,j,W,ge,Y,pt,"FAST"),V.optimizedImages++,T&&T()}catch(U){console.warn(`Failed to optimize image: ${C}`,U),console.warn("Error details:",U.message,U.stack);try{I.addImage(R,"JPEG",j,W,ge,Y),V.optimizedImages++,T&&T()}catch(K){console.error(`Fallback also failed for: ${C}`,K),V.failedImages++,T&&T()}}}catch(oe){console.warn("Failed to add image to PDF:",oe),V.failedImages++,T&&T()}}},R.onerror=function(){te||(L&&clearTimeout(L),console.warn(`Failed to load image with proxy ${X}: ${C}`),console.warn(`Error details for: ${C} - Proxy: ${me[X]}`),X++,X<me.length?setTimeout(()=>{Q()},200):(te=!0,console.warn("All proxies failed, skipping image"),V.failedImages++,T&&T()))},L=setTimeout(()=>{te||(console.warn(`⏰ Timeout with proxy ${X}: ${C}`),R.src="",R.onload=null,R.onerror=null,X++,X<me.length?setTimeout(()=>{Q()},200):(te=!0,console.warn("All proxies timed out, skipping image"),V.failedImages++,T&&T()))},3e3);let $=C;X<me.length&&($=me[X]+encodeURIComponent(C)),R.src=$}Q()},q=[];Object.keys(m).forEach((I,C)=>{const j=m[I];if(!j||!Array.isArray(j)){console.warn("⚠️ Skipping invalid room items:",I,j);return}j.forEach((W,A)=>{if(!W){console.warn("⚠️ Skipping null item in room:",I,"at index:",A);return}q.push({item:W,room:I,rIdx:C,iIdx:A,isFirstInRoom:A===0,roomCount:j.length})})}),q.reduce((I,C)=>{if(!C||!C.item)return console.warn("⚠️ Skipping null row in data analysis:",C),I;const j=String(C.item.Description||""),W=String(C.item.LongDescription||""),A=String(C.item.Notes||""),M=String(C.item.OrderCode||"");return I+j.length+W.length+A.length+M.length},0);let ve=0,Ee=0;const ke=4,Ce=8,De=Math.floor((w-80)/ke);let qe=xe+8;function Te(){if(!q||!Array.isArray(q)){console.error("❌ Critical error: rowsToDraw is not a valid array:",q),Qe(new Error("Invalid product data structure"),"generating PDF","unknown.pdf");return}if(ve>=q.length){const A=g.internal.getNumberOfPages()-1;for(let L=2;L<=A+1;L++){g.setPage(L);const oe=(L-2)*ke,Pe=Math.min(oe+ke,q.length);let ge=!1;for(let Y=oe;Y<Pe;Y++)if(q[Y]&&q[Y].item&&yt(q[Y].item)){ge=!0;break}vt(g,{pageWidth:S,colX:ue,colW:ye,leftMargin:32,footerHeight:xe,logoDataUrl:N,logoNaturalW:ce,logoNaturalH:Re,headers:Le,userDetails:u,skipWelsHeader:!ge}),wt(g,{pageWidth:S,pageHeight:w,leftMargin:32,footerHeight:xe,pageNumber:L-1,totalPages:A})}const M=new Date,T=String(M.getDate()).padStart(2,"0"),pe=String(M.getMonth()+1).padStart(2,"0"),J=String(M.getFullYear()).slice(-2),te=String(M.getHours()).padStart(2,"0"),me=String(M.getMinutes()).padStart(2,"0"),Q=`${u.project.replace(/[^a-zA-Z0-9\s]/g,"")}-${T}${pe}${J}.${te}${me}.pdf`,R=document.getElementById("pdf-processing-notification");R&&R.remove(),qt(u.emailCompatible);try{const L=g.output("blob"),$=g.output("string"),oe=$?$.match(/\/Type\s*\/XObject/g):null,Pe=$?$.match(/Tj\s/g):null,ge=$?$.match(/\/A\s*<</g):null;u.pdfSize=L.size;const Y=Mt(L,Q);if(u.sendEmail&&L.size>15*1024*1024){console.warn(`❌ PDF too large for email (${(L.size/1024/1024).toFixed(1)}MB), offering email-compatible version`),Vt(u,Q);return}const U=Ft(L,Y.settings);if(u.sendEmail&&u.email)if(u.exportCsv){const K=Q.replace(/\.pdf$/,".csv");Xe(u,K).then(se=>{window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:u,pdfBlob:U,csvBlob:se}}))}).catch(se=>{console.error("Async CSV generation for email failed:",se),window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:u,pdfBlob:U,csvBlob:null}}))})}else window.dispatchEvent(new CustomEvent("sendEmail",{detail:{userDetails:u,pdfBlob:U,csvBlob:null}}));else(async()=>{const K=await Jt(U);if(await Oe(K,Q,"PDF"),u.exportCsv){const se=Q.replace(/\.pdf$/,".csv");try{const he=await Xe(u,se);he&&await Oe(he,se,"CSV")}catch(he){console.error("CSV generation failed:",he)}}})()}catch(L){console.error("PDF generation failed:",L),Qe(L,"generating PDF",Q);const $=document.getElementById("pdf-processing-notification");$&&$.remove()}t&&(t.style.display="none");return}Ee>=ke&&(g.addPage(),qe=xe+8,Ee=0);const I=q[ve];if(!I||!I.item){console.warn(`⚠️  Skipping invalid row at index ${ve}:`,I),ve++,Te();return}const C=qe+De*Ee;I.isFirstInRoom&&h==="room"&&I.room!=="__all__"&&bt(g,I.room,I.roomCount,32,C);const j=ue[0],W=j+90+12;Ge(g,I.item.Image_URL||"",j,C+Ce+16,90,De-Ce*2,()=>{Ge(g,I.item.Diagram_URL||"",W,C+Ce+16,90,De-Ce*2,()=>{const A=C+28,M=ue[1]+ye[1]/2;g.setFontSize(10),g.setTextColor("#222"),g.text(String(I.item.OrderCode||""),M,A+10,{align:"center"}),xt(g,I.item,M,A+35);const T=ye[2]-10;Et(g,I.item,ue[2],A+10,T,u.excludeLongDescription);const pe=Le.indexOf("WELS")+1;if(pe>0&&ue[pe]){const J=ue[pe]+ye[pe]/2;kt(g,I.item,J,A+10)}Ct(g,I.item,ue,ye,Le,A+10,{excludePrice:u.excludePrice,includeGst:u.includeGst}),ve++,Ee++,Te()})})}Te()})})})}function $e(u,e){const t=new window.Image;t.crossOrigin="Anonymous",t.onload=function(){const o=document.createElement("canvas"),s=o.getContext("2d"),n=400,i=150;let r=t.width,c=t.height;if(r>n||c>i){const l=n/r,d=i/c,p=Math.min(l,d);r=Math.round(r*p),c=Math.round(c*p)}o.width=r,o.height=c,s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(t,0,0,r,c);const a=o.toDataURL("image/png",.9);e(a,r,c)},t.src=u}function Lt(){if(!document.getElementById("pdf-spinner")){const u=document.createElement("div");if(u.id="pdf-spinner",u.style.display="none",u.style.position="fixed",u.style.top="0",u.style.left="0",u.style.width="100vw",u.style.height="100vh",u.style.zIndex="9999",u.style.background="rgba(255,255,255,0.7)",u.style.alignItems="center",u.style.justifyContent="center",u.innerHTML='<div style="border:6px solid #e0e0e0;border-top:6px solid #2563eb;border-radius:50%;width:54px;height:54px;animation:spin 1s linear infinite;"></div>',document.body.appendChild(u),!document.getElementById("pdf-spinner-style")){const e=document.createElement("style");e.id="pdf-spinner-style",e.innerHTML="@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }",document.head.appendChild(e)}}}async function Xe(u,e){return new Promise(async t=>{if(!window.Papa)try{await E.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch(i){console.error("Failed to load PapaParse:",i),t(null);return}const o=JSON.parse(localStorage.getItem("selection")||"[]"),s=JSON.parse(localStorage.getItem(F.STORAGE_KEYS.SELECTED_PRODUCTS)||"[]");let n=[];if(s.length>0?n=s.map(i=>({...i.product,Room:i.room,Notes:i.notes,Quantity:i.quantity,Timestamp:new Date(i.timestamp).toISOString()})):n=o,!n.length){t(null);return}setTimeout(()=>{const i=n.map(r=>{let c,a,l,d;const p=u.excludePrice;let h=0;if(r.UserEditedPrice!==void 0&&r.UserEditedPrice!==null&&r.UserEditedPrice!=="")h=parseFloat(r.UserEditedPrice.toString().replace(/,/g,""));else{const g=r.RRP_EX||r["RRP EX GST"]||r.RRP_EX||r.RRP_EXGST||"";h=parseFloat((g||"0").toString().replace(/,/g,""))}c=h,l="Price ea ex GST",d="Price Total ex GST",a=!isNaN(c)&&c>=0?(c*(r.Quantity||1)).toFixed(2):"";const f=r["WELS STAR"]||r.WELS_STAR||r.WELS_STAR||r.WelsStar||"",m=f&&f.toString().trim()?f.toString().replace(/[^\d.]/g,"").trim():"",y={Code:ie(r.OrderCode||""),Description:ie(r.Description||""),"WELS Star":ie(m),Quantity:r.Quantity||1,Notes:ie(r.Notes||""),Room:ie(r.Room||""),"Image URL":ie(r.Image_URL||""),"Diagram URL":ie(r.Diagram_URL||""),"Datasheet URL":ie(r.Datasheet_URL||""),"Website URL":ie(r.Website_URL||"")};return y[l]=p?"0.00":c>=0?c.toFixed(2):"",y[d]=p?"0.00":a,y});setTimeout(()=>{const r=window.Papa.unparse(i,{quotes:!0,quoteChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,escapeChar:'"',transform:{value(c,a){return typeof c=="string"?c.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,""):c}}});u.sendEmail?setTimeout(()=>{try{const c=btoa(unescape(encodeURIComponent(r)));t({name:e,data:c,contentType:"text/csv",originalSize:r.length,base64Size:c.length})}catch(c){console.error("CSV base64 encoding failed:",c),t(new Blob([r],{type:"text/csv"}))}},0):t(new Blob([r],{type:"text/csv"}))},0)},0)})}function ie(u){return typeof u!="string"&&(u=String(u)),u=u.replace(/\0/g,"").replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g,"").replace(/\r?\n|\r/g," ").trim(),u}async function Dt(u,e,t="file"){try{if("showSaveFilePicker"in window){const s=await(await window.showSaveFilePicker({suggestedName:e,types:[{description:`${t} files`,accept:{[u.type]:[`.${e.split(".").pop()}`]}}]})).createWritable();return await s.write(u),await s.close(),!0}}catch(o){console.warn("File System Access API failed:",o)}return!1}function Tt(u,e,t="file"){try{if(u.size>2*1024*1024)return console.warn("File too large for data URI method"),!1;const o=new FileReader;return o.onload=function(s){try{const n=document.createElement("a");n.href=s.target.result,n.download=e,n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(n){console.error("Data URI download failed:",n)}},o.readAsDataURL(u),!0}catch(o){return console.warn("Data URI method failed:",o),!1}}function Bt(u,e,t="file"){const o=URL.createObjectURL(u),s=document.createElement("div");s.style.cssText=`
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
  `,s.appendChild(n),document.body.appendChild(s),document.getElementById("manual-download-close").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s)},document.getElementById("manual-download-retry").onclick=()=>{URL.revokeObjectURL(o),document.body.removeChild(s),setTimeout(()=>{st(u,e,t)},1e3)},document.getElementById("copy-url-btn").onclick=()=>{const i=document.getElementById("manual-download-url");i.select(),i.setSelectionRange(0,99999);try{navigator.clipboard.writeText(o).then(()=>{const r=document.getElementById("copy-url-btn");r.textContent="Copied!",r.style.background="#059669",setTimeout(()=>{r.textContent="Copy",r.style.background="#059669"},2e3)}).catch(()=>{document.execCommand("copy");const r=document.getElementById("copy-url-btn");r.textContent="Copied!",setTimeout(()=>r.textContent="Copy",2e3)})}catch{alert("Copy failed. Please select the URL manually and copy it.")}},s.onclick=i=>{i.target===s&&(URL.revokeObjectURL(o),document.body.removeChild(s))},setTimeout(()=>{s.parentElement&&(URL.revokeObjectURL(o),document.body.removeChild(s))},5*60*1e3)}async function st(u,e,t="file"){try{if(await _t(u,e))return}catch(o){console.warn("Standard download failed:",o)}await Dt(u,e,t)||Tt(u,e,t)||Bt(u,e,t)}function _t(u,e){return new Promise(t=>{try{const o=URL.createObjectURL(u),s=document.createElement("a");s.href=o,s.download=e,s.style.display="none",document.body.appendChild(s);const n=setTimeout(()=>{i(),t(!1)},3e3),i=()=>{clearTimeout(n),s.parentElement&&document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(o),1e3)};s.onclick=()=>{i(),t(!0)},s.click(),setTimeout(()=>{i(),t(!0)},500)}catch(o){console.error("Standard download error:",o),t(!1)}})}function $t(u){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Math.min(100,u.width),e.height=Math.min(100,u.height),t.drawImage(u,0,0,e.width,e.height);const s=t.getImageData(0,0,e.width,e.height).data,n=new Set;for(let i=0;i<s.length;i+=4){const r=`${s[i]},${s[i+1]},${s[i+2]}`;n.add(r)}return n.size<1e3}function Nt(u,e){const o=e.getImageData(0,0,u.width,u.height).data;for(let s=3;s<o.length;s+=4)if(o[s]<255)return!0;return!1}function At(u,e,t){if(u<=t)return{width:u,height:e};const o=e/u;return{width:t,height:Math.round(t*o)}}function nt(u){return u>25*1024*1024?{compressionLevel:"aggressive",imageQuality:.6,imageMaxWidth:300,removeImages:!1,usePNG:!0,message:"Aggressive compression - maintaining technical diagram clarity"}:u>20*1024*1024?{compressionLevel:"high",imageQuality:.65,imageMaxWidth:350,removeImages:!1,usePNG:!0,message:"High compression - preserving technical diagram details"}:u>15*1024*1024?{compressionLevel:"medium",imageQuality:.7,imageMaxWidth:400,removeImages:!1,usePNG:!0,message:"Medium compression - optimal for technical documentation"}:u>10*1024*1024?{compressionLevel:"light",imageQuality:.75,imageMaxWidth:450,removeImages:!1,usePNG:!0,message:"Light compression - excellent technical diagram quality"}:{compressionLevel:"minimal",imageQuality:.8,imageMaxWidth:500,removeImages:!1,usePNG:!0,message:"Minimal compression - maximum technical diagram quality"}}function Ft(u,e){return u}function Mt(u,e){const t=(u.size/1048576).toFixed(2),o=nt(u.size);if(u.size>15*1024*1024){console.warn(`Large file detected (${t} MB) - exceeds typical email limit, may need email-compatible version`);const s=document.createElement("div");s.style.cssText=`
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
    `,document.body.appendChild(s),setTimeout(()=>{s.parentElement&&s.remove()},8e3)}else u.size>3*1024*1024;return{size:u.size,sizeInMB:parseFloat(t),settings:o}}function Qe(u,e="",t=""){console.error("Detailed error:",u);const o={type:Ut(u),message:u.message||"Unknown error",context:e,filename:t,timestamp:new Date().toISOString(),userAgent:navigator.userAgent},s=document.createElement("div");s.style.cssText=`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.8); z-index: 10002; display: flex; 
    align-items: center; justify-content: center; padding: 20px;
  `;const n=document.createElement("div");return n.style.cssText=`
    background: white; border-radius: 8px; padding: 30px; max-width: 700px; 
    width: 100%; max-height: 80vh; overflow-y: auto;
  `,n.innerHTML=`
    <h3 style="color: #dc2626; margin: 0 0 20px 0; display: flex; align-items: center;">
      <span style="margin-right: 8px;">⚠️</span>
      ${Ot(o.type)}
    </h3>
    
    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 6px; padding: 16px; margin: 16px 0;">
      <p style="margin: 0; color: #b91c1c; font-weight: bold;">
        ${zt(o.type,e,t)}
      </p>
    </div>
    
    ${jt(o.type)}
    
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
  `,s.appendChild(n),document.body.appendChild(s),document.getElementById("error-close").onclick=()=>{document.body.removeChild(s)},document.getElementById("error-retry").onclick=()=>{document.body.removeChild(s),console.log("Retry requested for:",e)},document.getElementById("error-report").onclick=()=>{Ht(o),alert("Error details copied to clipboard. Please send this to support.")},s.onclick=i=>{i.target===s&&document.body.removeChild(s)},o}function Ut(u){var o,s;const e=((o=u.message)==null?void 0:o.toLowerCase())||"",t=((s=u.stack)==null?void 0:s.toLowerCase())||"";return e.includes("network")||e.includes("fetch")?"network":e.includes("permission")||e.includes("denied")?"permission":e.includes("memory")||e.includes("quota")?"memory":e.includes("blob")||e.includes("url")?"download":e.includes("canvas")||e.includes("image")?"rendering":t.includes("jspdf")||e.includes("pdf")?"pdf":"unknown"}function Ot(u){return{network:"Network Connection Error",permission:"Permission Required",memory:"Insufficient Memory",download:"Download Failed",rendering:"Display Error",pdf:"PDF Generation Error",unknown:"Unexpected Error"}[u]||"Error Occurred"}function zt(u,e,t){return{network:"Unable to load required resources. Please check your internet connection and try again.",permission:`Browser permission required to save ${t}. Please allow downloads and try again.`,memory:"Not enough memory to process this large file. Try closing other browser tabs or use fewer products.",download:`Failed to download ${t}. This may be due to browser security settings or storage limitations.`,rendering:"Unable to display product images properly. Some images may be missing from the final output.",pdf:`PDF generation failed while ${e}. The file may be too large or contain problematic data.`,unknown:`An unexpected error occurred while ${e}. Please try again or contact support.`}[u]||"An unknown error has occurred."}function jt(u){const e={network:`
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
      </div>`};return e[u]||e.unknown}function it(){const u=navigator.userAgent;return u.includes("Chrome")?"Chrome":u.includes("Firefox")?"Firefox":u.includes("Safari")?"Safari":u.includes("Edge")?"Edge":u.includes("SamsungBrowser")?"Samsung Internet":"Unknown"}function Ht(u){const e=`
Seima Scanner Error Report
========================
Time: ${u.timestamp}
Error Type: ${u.type}
Message: ${u.message}
Context: ${u.context}
File: ${u.filename}
Browser: ${it()}
User Agent: ${u.userAgent}
========================
  `.trim();try{navigator.clipboard.writeText(e)}catch(t){console.error("Failed to copy error report:",t)}}let V={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0};function Gt(u){let e=0;if(u.length===0)return e.toString();for(let t=0;t<u.length;t++){const o=u.charCodeAt(t);e=(e<<5)-e+o,e=e&e}return Math.abs(e).toString(36)}function Ye(){V={totalImages:0,optimizedImages:0,failedImages:0,totalSavings:0}}function qt(u=!1){V.totalImages>0}function Vt(u,e){const t=document.createElement("div");t.style.cssText=`
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
  `,t.appendChild(o),document.body.appendChild(t),document.getElementById("email-regular-version").onclick=()=>{t.remove();const s=new CustomEvent("sendEmailRegular",{detail:{userDetails:u,originalFilename:e}});window.dispatchEvent(s)},document.getElementById("email-optimized-version").onclick=()=>{t.remove(),u.emailCompatible=!0,ze(u)}}const Wt="tipTailSettings";async function Jt(u){let e={};if(window._currentTipTailSettings)e=window._currentTipTailSettings,window._currentTipTailSettings=null;else try{e=JSON.parse(localStorage.getItem(Wt)||"{}")}catch(c){console.warn("Could not read tipTailSettings from localStorage:",c)}const{tipAsset:t,tipUpload:o,tailAsset:s,tailUpload:n}=e;if(!t&&!o&&!s&&!n)return u;async function i(c,a,l="file"){if(a&&c)try{const d=atob(c),p=new Uint8Array(d.length);for(let h=0;h<d.length;h++)p[h]=d.charCodeAt(h);return p.buffer}catch(d){return console.warn(`⚠️ Error converting base64 to ArrayBuffer for ${l}:`,d),null}if(c)try{const d=await fetch(c);return d.ok?await d.arrayBuffer():(console.warn(`⚠️ Failed to fetch ${l} file: ${c} (${d.status} ${d.statusText})`),null)}catch(d){return console.warn(`⚠️ Error fetching ${l} file: ${c}`,d),null}return null}async function r(c,a="file",l="unknown"){if(!c)return null;try{return await PDFLib.PDFDocument.load(c)}catch(d){return console.warn(`⚠️ Failed to parse ${a} PDF: ${l}`,d),null}}try{const c=await u.arrayBuffer(),a=await PDFLib.PDFDocument.load(c),l=await PDFLib.PDFDocument.create(),[d]=await l.copyPages(a,[0]);l.addPage(d);let p=null,h=null;if(o){const g=await i(o,!0,"tip");g?(p=await r(g,"tip","uploaded file"),p||(h="The uploaded tip file is not a valid PDF or could not be loaded.")):h="Failed to process the uploaded tip file."}else if(t){const g=await i(t,!1,"tip");g?(p=await r(g,"tip",t),p||(h=`The tip file "${t.split("/").pop()}" is not a valid PDF or could not be loaded.`)):h=`The tip file "${t.split("/").pop()}" could not be found or accessed.`}if(p){const g=Array.from({length:p.getPageCount()},(w,b)=>b);(await l.copyPages(p,g)).forEach(w=>l.addPage(w))}else h&&(console.warn(`⚠️ Tip file error: ${h}`),Ne("Tip File Issue",h));if(a.getPageCount()>1){const g=Array.from({length:a.getPageCount()-1},(w,b)=>b+1);(await l.copyPages(a,g)).forEach(w=>l.addPage(w))}let f=null,m=null;if(n){const g=await i(n,!0,"tail");g?(f=await r(g,"tail","uploaded file"),f||(m="The uploaded tail file is not a valid PDF or could not be loaded.")):m="Failed to process the uploaded tail file."}else if(s){const g=await i(s,!1,"tail");g?(f=await r(g,"tail",s),f||(m=`The tail file "${s.split("/").pop()}" is not a valid PDF or could not be loaded.`)):m=`The tail file "${s.split("/").pop()}" could not be found or accessed.`}if(f){const g=Array.from({length:f.getPageCount()},(w,b)=>b);(await l.copyPages(f,g)).forEach(w=>l.addPage(w))}else m&&(console.warn(`⚠️ Tail file error: ${m}`),Ne("Tail File Issue",m));const y=await l.save({useObjectStreams:!0,addDefaultPage:!1,objectsPerTick:20});return new Blob([y],{type:"application/pdf"})}catch(c){return console.error("❌ Error during PDF merging:",c),Ne("PDF Merging Error","An error occurred while merging the PDF files. The main PDF will be generated without tip/tail content."),u}}function Ne(u,e){const t=document.createElement("div");t.style.cssText=`
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
  `,document.body.appendChild(t),setTimeout(()=>{t.parentElement&&t.remove()},8e3)}class Xt{constructor(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null,this._specResults=null}init(){this.setupEventHandlers(),console.log("FileImportManager initialized")}setupEventHandlers(){const e=document.getElementById("import-file-btn");e&&(e.onclick=()=>this.showImportModal());const t=document.getElementById("file-drop-zone"),o=document.getElementById("file-input");t&&o&&(t.onclick=()=>o.click(),t.ondragover=l=>{l.preventDefault(),t.style.borderColor="#059669",t.style.background="#f0fdf4"},t.ondragleave=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa"},t.ondrop=l=>{l.preventDefault(),t.style.borderColor="#ccc",t.style.background="#fafafa";const d=l.dataTransfer.files;d.length>0&&this.handleFileSelection(d[0])},o.onchange=l=>{l.target.files.length>0&&this.handleFileSelection(l.target.files[0])});const s=document.getElementById("import-cancel-btn"),n=document.getElementById("import-next-btn"),i=document.getElementById("import-back-btn"),r=document.getElementById("import-process-btn"),c=document.getElementById("import-close-btn");s&&(s.onclick=()=>this.closeModal()),n&&(n.onclick=()=>this.showImportModeStep()),i&&(i.onclick=()=>this.showFileSelectionStep()),r&&(r.onclick=()=>this.processImport()),c&&(c.onclick=()=>this.closeModal()),document.querySelectorAll('input[name="import-mode"]').forEach(l=>{l.onchange=()=>{this.importMode=l.value;const d=document.getElementById("override-warning");d&&(d.style.display=this.importMode==="override"?"block":"none")}})}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex",this.resetModal())}closeModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="none",this.resetModal())}resetModal(){this.selectedFile=null,this.importMode="append",this.processedData=[],this.notFoundProducts=[],this._specResults=null,this.showFileSelectionStep();const e=document.getElementById("file-input");e&&(e.value="");const t=document.getElementById("selected-file-info");t&&(t.style.display="none");const o=document.getElementById("import-next-btn");o&&(o.disabled=!0);const s=document.querySelector('input[name="import-mode"][value="append"]');s&&(s.checked=!0);const n=document.getElementById("override-warning");n&&(n.style.display="none")}showFileSelectionStep(){this.hideAllSteps();const e=document.getElementById("file-selection-step");e&&(e.style.display="block")}showImportModeStep(){this.hideAllSteps();const e=document.getElementById("import-mode-step");e&&(e.style.display="block")}showProcessingStep(){this.hideAllSteps();const e=document.getElementById("import-processing-step");e&&(e.style.display="block")}showResultsStep(){this.hideAllSteps();const e=document.getElementById("import-results-step");e&&(e.style.display="block")}showSpecResultsStep(){this.hideAllSteps();const e=document.getElementById("import-spec-results-step");e&&(e.style.display="block")}hideAllSteps(){["file-selection-step","import-mode-step","import-processing-step","import-results-step","import-spec-results-step"].forEach(t=>{const o=document.getElementById(t);o&&(o.style.display="none")})}handleFileSelection(e){console.log("File selected:",e.name,e.type,e.size);const t=G.get("import.acceptedTypes",[".csv",".xlsx",".xls",".json",".pdf",".jpg",".jpeg",".png"]),o=["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/json","application/pdf","image/jpeg","image/png"],s=e.name.toLowerCase(),n=t.some(l=>s.endsWith(l.toLowerCase())),i=G.get("import.maxFileSize",15*1024*1024);if(e.size>i){const l=Math.round(i/1048576);alert(`File is too large. Maximum size is ${l}MB.`);return}if(!o.includes(e.type)&&!n){alert(`Please select a valid file. Accepted formats: ${t.join(", ")}`);return}this.selectedFile=e;const r=document.getElementById("selected-file-info"),c=document.getElementById("selected-file-name"),a=document.getElementById("import-next-btn");r&&c&&a&&(c.textContent=e.name,r.style.display="block",a.disabled=!1)}async processImport(){if(!this.selectedFile){alert("No file selected");return}console.log("Starting import process with mode:",this.importMode),this.showProcessingStep();try{const e=this.selectedFile.name.toLowerCase();if(this._isSpecFile(e)){await this._processSpecFile();return}let t;if(e.endsWith(".csv"))t=await this.parseCSV(this.selectedFile);else if(e.endsWith(".json"))t=await this.parseJSON(this.selectedFile);else if(e.endsWith(".xlsx")||e.endsWith(".xls"))t=await this.parseExcel(this.selectedFile);else throw new Error("Unsupported file format");console.log("Parsed data:",t),this.importMode==="override"&&(v.clearAllSelections(),console.log("Cleared all existing data for override mode")),await this.processDataChunked(t),this.showImportResults()}catch(e){console.error("Import failed:",e),alert(`Import failed: ${e.message}`),this.showFileSelectionStep()}}_isSpecFile(e){return/\.(pdf|jpg|jpeg|png)$/.test(e)}async _processSpecFile(){const e=document.querySelector("#import-processing-step p"),t=Math.round(this.selectedFile.size/1024);try{let o;if(this.selectedFile.type==="application/pdf"||this.selectedFile.name.toLowerCase().endsWith(".pdf")){e&&(e.innerHTML=`Reading PDF...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const i=await this._extractPdfText(this.selectedFile);if(i&&i.length>100)e&&(e.innerHTML=`Analysing specification text...<br><small style="color:#888">Extracted ${i.length.toLocaleString()} characters from PDF</small>`),o=await ae.extractFromSpecText(i,(r,c)=>{e&&c>1&&(e.innerHTML=`Analysing specification text (part ${r+1} of ${c})...<br><small style="color:#888">Extracted ${i.length.toLocaleString()} characters from PDF</small>`)});else{e&&(e.innerHTML='Analysing PDF with vision AI...<br><small style="color:#888">Image-based PDF — this may take 1-2 minutes</small>');const r=await this._fileToBase64(this.selectedFile);o=await ae.extractFromSpec(r,"application/pdf")}}else{e&&(e.innerHTML=`Analysing image...<br><small style="color:#888">${this._escapeHtml(this.selectedFile.name)} (${t}KB)</small>`);const i=await this._fileToBase64(this.selectedFile),r=this.selectedFile.type||"image/jpeg";o=await ae.extractFromSpec(i,r)}if(!o.products||o.products.length===0){alert("No products were found in this file. Try a clearer image or a different page."),this.showFileSelectionStep();return}e&&(e.textContent=`Found ${o.products.length} products. Cross-referencing with Seima catalog...`);const n=await ae.crossReferenceProducts(o.products,D);this._specResults=n,this._showSpecResults(n)}catch(o){console.error("Spec processing failed:",o),alert(`Spec processing failed: ${o.message}`),this.showFileSelectionStep()}}async _extractPdfText(e){try{if(!window.pdfjsLib){const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs",i.type="module";const r=document.createElement("script");r.type="module",r.textContent=`
          import * as pdfjsLib from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.min.mjs';
          pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.9.155/build/pdf.worker.min.mjs';
          window.pdfjsLib = pdfjsLib;
          window.dispatchEvent(new Event('pdfjsReady'));
        `,document.head.appendChild(r),await new Promise((c,a)=>{const l=setTimeout(()=>a(new Error("PDF.js load timeout")),15e3);window.addEventListener("pdfjsReady",()=>{clearTimeout(l),c()},{once:!0})})}const t=await e.arrayBuffer(),o=await window.pdfjsLib.getDocument({data:t}).promise,s=[];for(let i=1;i<=o.numPages;i++){const a=(await(await o.getPage(i)).getTextContent()).items.map(l=>l.str).join(" ");console.log(`  Page ${i}/${o.numPages}: ${a.trim().length} chars${a.trim().length===0?" (EMPTY — may be image-only)":""}`),a.trim()&&s.push(a.trim())}s.length<o.numPages&&console.warn(`⚠️ ${o.numPages-s.length} page(s) had no extractable text (image-only pages)`);const n=s.join(`

--- Page Break ---

`);return console.log(`PDF text extraction: ${o.numPages} pages, ${s.length} with text, ${n.length} chars total`),n}catch(t){return console.warn("PDF text extraction failed, will use vision API:",t),null}}_fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result.split(",")[1]),s.onerror=()=>o(new Error("Failed to read file")),s.readAsDataURL(e)})}_showSpecResults(e){const t=e.filter(a=>["verified","seima-own","alternative","catalog-suggestion"].includes(a.status)),o=e.filter(a=>a.status==="unmatched"||a.status==="ai-suggested"),s=[...new Set(e.map(a=>a.section).filter(Boolean))],n=document.getElementById("spec-results-content");if(!n)return;n.innerHTML=`
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
    `;const i=document.getElementById("spec-add-all-btn");i&&(i.style.display="",i.textContent=`Import Selected to Grid (${e.length})`,i.onclick=()=>this._importSelectedToGrid());const r=document.getElementById("spec-done-btn");r&&(r.onclick=()=>{this.closeModal(),window.location.reload()});const c=n.querySelector("#spec-select-all");c&&c.addEventListener("change",()=>{n.querySelectorAll(".spec-row-check").forEach(a=>{a.checked=c.checked}),this._updateImportCount()}),n.addEventListener("change",a=>{a.target.classList.contains("spec-row-check")&&this._updateImportCount()}),this.showSpecResultsStep()}_renderSpecRows(e){let t="",o=null;for(let s=0;s<e.length;s++){const n=e[s];n.section&&n.section!==o&&(o=n.section,t+=`<tr class="spec-section-header"><td colspan="4">${this._escapeHtml(n.section)}</td></tr>`),t+=this._renderSpecRow(n,s)}return t}_renderSpecRow(e,t){var h,f,m;const o=e.specCode?`<strong>${this._escapeHtml(e.specCode)}</strong> `:"",s=e.name||e.category||"",n=e.brand||"",i=e.code||"",r=e.style||"",c=e.finish||"",a={"seima-own":'<span class="spec-badge spec-badge-seima">Seima Product</span>',verified:'<span class="spec-badge spec-badge-verified">Verified Match</span>',alternative:'<span class="spec-badge spec-badge-alt">Alternative</span>',"catalog-suggestion":'<span class="spec-badge spec-badge-suggest">Suggestion</span>',"ai-suggested":'<span class="spec-badge spec-badge-ai">AI Suggested</span>',unmatched:'<span class="spec-badge spec-badge-none">No Match</span>'};let l="";if(e.status==="seima-own"&&e.seimaProduct){const y=e.seimaProduct;l=`<strong>${this._escapeHtml(y.OrderCode||y["Order Code"]||"")}</strong>
        <br><small>${this._escapeHtml(y.Description||y.ProductName||"")}</small>`}else if(["verified","alternative"].includes(e.status)&&((h=e.seimaMatches)==null?void 0:h.length)>0){const y=e.seimaMatches[0].SeimaSKU||"",g=((f=e.seimaProduct)==null?void 0:f.Description)||((m=e.seimaProduct)==null?void 0:m.ProductName)||"";l=`<strong>${this._escapeHtml(y)}</strong>`,g&&(l+=`<br><small>${this._escapeHtml(g)}</small>`)}else if(e.status==="catalog-suggestion"&&e.seimaProduct){const y=e.seimaProduct;l=`<em>${this._escapeHtml(y.OrderCode||y["Order Code"]||"")}</em>
        <br><small style="color:#737373">${this._escapeHtml(y.Description||y.ProductName||"")}</small>`}else l='<span style="color:#aaa">—</span>';const d=[n,r,i,c].filter(Boolean).map(y=>this._escapeHtml(y));return`
      <tr class="${`spec-row spec-row-${e.status}`}" data-index="${t}">
        <td><input type="checkbox" class="spec-row-check" data-index="${t}" checked></td>
        <td>
          <div>${o}${this._escapeHtml(s)}</div>
          <small style="color:#737373">${d.join(" · ")}</small>
        </td>
        <td>${a[e.status]||""}</td>
        <td>${l}</td>
      </tr>
    `}_updateImportCount(){const e=document.querySelectorAll(".spec-row-check:checked").length,t=document.getElementById("spec-add-all-btn");t&&(t.textContent=`Import Selected to Grid (${e})`,t.disabled=e===0)}_importSelectedToGrid(){if(!this._specResults)return;const e=document.querySelectorAll(".spec-row-check:checked");let t=0;this.importMode==="override"&&(v.clearAllSelections(),console.log("Cleared all existing data for override mode (spec import)"));const o=new Set;e.forEach(n=>{const i=parseInt(n.dataset.index),r=this._specResults[i];r!=null&&r.section&&o.add(r.section)}),o.forEach(n=>v.addCustomRoom(n)),e.forEach(n=>{var l,d;const i=parseInt(n.dataset.index),r=this._specResults[i];if(!r)return;const c=this._buildSpecNote(r),a=r.section||"Imported";if((r.status==="seima-own"||r.status==="verified"||r.status==="alternative")&&r.seimaProduct){const p=r.seimaProduct.OrderCode||r.seimaProduct["Order Code"]||((d=(l=r.seimaMatches)==null?void 0:l[0])==null?void 0:d.SeimaSKU),h=D.findProductByCode(p);if(h){v.addProductToSelection(h,c,a,r.quantity||1),t++;return}}v.addProductToSelection({OrderCode:"",Description:c,_placeholder:!0},c,a,r.quantity||1),t++});const s=document.getElementById("spec-add-all-btn");s&&(s.textContent=`Imported ${t} item${t!==1?"s":""}`,s.disabled=!0),e.forEach(n=>{n.disabled=!0})}_buildSpecNote(e){const t=[];return e.specCode&&t.push(e.specCode),e.name&&t.push(e.name),e.brand&&t.push(e.brand),e.style&&t.push(e.style),e.code&&t.push(`Code: ${e.code}`),e.finish&&t.push(e.finish),t.join(" | ")}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}async parseCSV(e){if(typeof Papa>"u")try{await E.loadScript("https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js")}catch{throw new Error("Failed to load Papa Parse library")}return new Promise((t,o)=>{if(typeof Papa>"u"){o(new Error("Papa Parse library not loaded"));return}this.doPapaParseCSV(e,t,o)})}doPapaParseCSV(e,t,o){Papa.parse(e,{header:!0,skipEmptyLines:!1,complete:s=>{console.log("CSV parsing complete:",s);const{data:n,metadata:i}=this.extractSeimaMetadata(s.data);i&&(console.log("Extracted Seima Scanner metadata from CSV:",i),this.importedMetadata=i,this.populateCustomerInfoFromMetadata(i)),t(n)},error:s=>{console.error("CSV parsing error:",s),o(s)}})}extractSeimaMetadata(e){if(!Array.isArray(e)||e.length===0)return{data:e,metadata:null};let t=-1;for(let n=e.length-1;n>=0;n--){const i=e[n];if(Object.values(i).some(c=>c&&c.toString().includes("---METADATA---"))){t=n;break}}if(t===-1)return{data:e.filter(n=>this.isValidProductRow(n)),metadata:null};const o=e.slice(0,t).filter(n=>this.isValidProductRow(n));let s=null;if(t+1<e.length){const n=e[t+1],i=Object.values(n).filter(r=>r!=null&&r!=="");for(const r of i)if(r&&typeof r=="string"&&r.startsWith("{"))try{s=JSON.parse(r),console.log("Successfully parsed Seima metadata JSON from single cell");break}catch{console.log("Single cell JSON parse failed, trying to reconstruct from split cells...")}if(!s&&i.length>0){let r=i.findIndex(c=>c&&typeof c=="string"&&(c.startsWith("{")||c.startsWith('"{')));if(r!==-1){let c=i.slice(r).join(",");c=c.replace(/^"|"$/g,"");try{s=JSON.parse(c),console.log("Successfully parsed Seima metadata JSON from reconstructed cells")}catch(a){console.warn("Failed to parse reconstructed metadata JSON:",a),console.log("Reconstructed string was:",c);const l=c.match(/\{[^{}]*("_metadata"|"customer"|"project")[^]*\}/);if(l)try{s=JSON.parse(l[0]),console.log("Successfully parsed Seima metadata JSON using regex extraction")}catch(d){console.warn("Regex extraction also failed:",d)}}}}}return{data:o,metadata:s}}isValidProductRow(e){if(!e)return!1;const t=Object.values(e);return!(t.every(o=>!o||o.toString().trim()==="")||t.some(o=>o&&o.toString().includes("---METADATA---"))||t.some(o=>o&&o.toString().startsWith('{"_metadata"')))}populateCustomerInfoFromMetadata(e){var s,n,i,r,c,a;if(!e)return;const t=E.getStorageItem("pdfFormSettings",{}),o={...t,name:((s=e.customer)==null?void 0:s.name)||t.name||"",email:((n=e.customer)==null?void 0:n.email)||t.email||"",telephone:((i=e.customer)==null?void 0:i.phone)||t.telephone||"",project:((r=e.project)==null?void 0:r.name)||t.project||"",address:((c=e.project)==null?void 0:c.address)||t.address||"",projectNotes:((a=e.project)==null?void 0:a.notes)||t.projectNotes||""};e.staff&&E.setStorageItem("staffContact",{name:e.staff.name||"",email:e.staff.email||"",mobile:e.staff.mobile||""}),E.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from Seima CSV metadata:",o)}async parseExcel(e){try{typeof XLSX>"u"&&await E.loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js")}catch{throw new Error("Failed to load XLSX library")}return new Promise((t,o)=>{if(typeof XLSX>"u"){o(new Error("XLSX library not loaded"));return}const s=new FileReader;s.onload=n=>{try{const i=new Uint8Array(n.target.result),r=XLSX.read(i,{type:"array"}),c=r.SheetNames[0],a=r.Sheets[c],l=XLSX.utils.sheet_to_json(a,{header:1,defval:""});if(l.length===0){o(new Error("Excel file is empty"));return}const d=l[0],h=l.slice(1).map(y=>{const g={};return d.forEach((S,w)=>{g[S]=y[w]||""}),g});console.log("Excel parsing complete:",h);const{data:f,metadata:m}=this.extractSeimaMetadata(h);m&&(console.log("Extracted Seima Scanner metadata from Excel:",m),this.importedMetadata=m,this.populateCustomerInfoFromMetadata(m)),t(f)}catch(i){console.error("Excel parsing error:",i),o(i)}},s.onerror=()=>{o(new Error("Failed to read Excel file"))},s.readAsArrayBuffer(e)})}async parseJSON(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=n=>{try{let i=JSON.parse(n.target.result);console.log("JSON parsing complete, raw data:",i);let r=[];if(Array.isArray(i))if(i.length>0&&i[0].productsJson)for(const a of i){const l=this.extractProductsFromRecord(a);r.push(...l)}else r=i;else i&&typeof i=="object"&&(r=this.extractProductsFromRecord(i));if(r.length===0){o(new Error("No products found in JSON file. Expected Seima Scanner export format."));return}const c=r.map(a=>({Code:a.orderCode||a.OrderCode||a.code||a.Code||"",Description:a.description||a.Description||a.productName||a["Product Name"]||"",Quantity:a.quantity||a.Quantity||1,Room:a.room||a.Room||"Blank",Notes:a.notes||a.Notes||"","Price ea inc GST":a.priceIncGst||a.PriceIncGst||a.price||a.Price||"",_originalItem:a}));console.log("Normalized JSON data:",c),t(c)}catch(i){console.error("JSON parsing error:",i),o(new Error("Invalid JSON format: "+i.message))}},s.onerror=()=>{o(new Error("Failed to read JSON file"))},s.readAsText(e)})}extractProductsFromRecord(e){let t=e.productsJson||e.products||[];if(typeof t=="string")try{t=JSON.parse(t)}catch(o){return console.warn("Failed to parse productsJson string:",o),[]}return Array.isArray(t)?t:[]}async processDataChunked(e){if(e.length===0)throw new Error("No data to process");const t=this.detectColumns(e[0]);if(console.log("Detected column mapping:",t),t.productsJson){console.log("Detected Seima Scanner selection record format with Products JSON column"),await this.processSeimaSelectionRecords(e,t);return}if(!t.productCode)throw new Error('Could not find Product Code column. Please ensure your file has a column named like "Order Code", "Product Code", "SKU", or a "Products JSON" column for Seima Scanner exports.');this.processedData=[],this.notFoundProducts=[];const o=50;for(let s=0;s<e.length;s+=o){const n=e.slice(s,s+o);await this.processChunk(n,t),await new Promise(i=>setTimeout(i,10))}console.log("Processing complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}async processSeimaSelectionRecords(e,t){this.processedData=[],this.notFoundProducts=[],this.importedMetadata=null;for(const o of e){this.importedMetadata||(this.importedMetadata=this.extractMetadataFromRow(o,t),console.log("Extracted metadata from selection record:",this.importedMetadata),this.populateCustomerInfo(this.importedMetadata));const s=o[t.productsJson];if(!s){console.log("Skipping row - no Products JSON data");continue}let n=[];try{typeof s=="string"?n=JSON.parse(s):Array.isArray(s)&&(n=s)}catch(i){console.warn("Failed to parse Products JSON:",i,s);continue}if(!Array.isArray(n)||n.length===0){console.log("Skipping row - Products JSON is empty or invalid");continue}console.log(`Processing ${n.length} products from selection record`);for(const i of n)await this.processSeimaProduct(i)}console.log("Seima Scanner import complete. Processed:",this.processedData.length,"Not found:",this.notFoundProducts.length)}extractMetadataFromRow(e,t){return{customerName:e[t.customerName]||"",customerEmail:e[t.customerEmail]||"",customerPhone:e[t.customerPhone]||"",customerAddress:e[t.customerAddress]||"",customerProject:e[t.customerProject]||"",customerType:e[t.customerType]||"",builderName:e[t.builderName]||"",merchantProjectName:e[t.merchantProjectName]||"",projectNotes:e[t.projectNotes]||"",staffName:e[t.staffName]||"",staffEmail:e[t.staffEmail]||"",date:e[t.date]||"",time:e[t.time]||"",roomsList:e[t.roomsList]||"",estimateValue:e[t.estimateValue]||""}}async processSeimaProduct(e){const t=String(e.orderCode||e.OrderCode||e.code||"").trim(),o=e.description||e.Description||e.productName||"",s=parseInt(e.quantity||e.Quantity)||1,n=String(e.room||e.Room||"Blank").trim(),i=String(e.notes||e.Notes||"").trim(),r=e.priceIncGst||e.PriceIncGst||e.price||"";n&&n!=="Blank"&&this.ensureRoomExists(n);const c=this.validateProductCode(t);if(!c.isValid){console.log("Excluding product:",t,"-",c.reason);return}let a=0,l=0;if(r){const h=String(r).replace(/[^\d.-]/g,"");a=parseFloat(h)||0,l=a/1.1}console.log("Processing Seima product:",{productCode:t,productName:o,quantity:s,priceIncGst:a,room:n,notes:i});const d=await this.findProductInCatalog(t,o),p=this.createProductObject({productCode:t,productName:o,priceExGst:l,priceIncGst:a,catalogProduct:d});d||this.notFoundProducts.push({orderCode:t,productName:o||"Unknown Product",quantity:s,price:a>0?a.toFixed(2):"N/A"}),v.addProductToSelection(p,i,n,s),this.processedData.push({...p,quantity:s,notes:i,room:n})}detectColumns(e){const t=Object.keys(e);console.log("Available headers:",t);const o=G.get("import.columnPatterns",{productCode:["code","ordercode","productcode","sku","order code","product code"],productName:["product name","description","name"],quantity:["quantity","qty","min order quantity","orderquantity"],priceIncGst:["price ea inc gst","price inc gst","priceincgst","rrp inc gst"],priceExGst:["price per unit","price ex gst","rrp ex gst"],room:["room","location"],notes:["notes","note","comments","comment"],productsJson:["products json","productsjson"],customerName:["customer name","customername"],customerEmail:["customer email","customeremail"],customerPhone:["customer phone","customerphone"],customerAddress:["customer address","customeraddress"],customerProject:["customer project","customerproject"]}),s=this.findColumnByPatterns(t,o.productsJson||["products json","productsjson"]);if(s)return console.log("Detected Seima Scanner selection record format with Products JSON column"),{productsJson:s,date:this.findColumnByPatterns(t,["date"]),time:this.findColumnByPatterns(t,["time"]),staffName:this.findColumnByPatterns(t,["staff name","staffname"]),staffEmail:this.findColumnByPatterns(t,["staff email","staffemail"]),customerName:this.findColumnByPatterns(t,o.customerName||["customer name","customername"]),customerEmail:this.findColumnByPatterns(t,o.customerEmail||["customer email","customeremail"]),customerPhone:this.findColumnByPatterns(t,o.customerPhone||["customer phone","customerphone"]),customerAddress:this.findColumnByPatterns(t,o.customerAddress||["customer address","customeraddress"]),customerProject:this.findColumnByPatterns(t,o.customerProject||["customer project","customerproject"]),customerType:this.findColumnByPatterns(t,["customer type","customertype"]),builderName:this.findColumnByPatterns(t,["builder name","buildername"]),merchantProjectName:this.findColumnByPatterns(t,["merchant project name","merchantprojectname"]),projectNotes:this.findColumnByPatterns(t,["project notes","projectnotes","about notes"]),roomsList:this.findColumnByPatterns(t,["rooms list","roomslist","rooms"]),estimateValue:this.findColumnByPatterns(t,["estimate value","estimatevalue"])};const n=t.some(a=>a.toLowerCase()==="code")&&!t.some(a=>a.toLowerCase().includes("ordercode"));console.log("Detected Seima Scanner CSV format:",n);const i=this.findColumnByPatterns(t,o.priceIncGst||["price ea inc gst","price inc gst","priceincgst","rrp inc gst"]),r=this.findColumnByPatterns(t,o.priceExGst||["price per unit","price ex gst","rrp ex gst"]),c=this.findColumnByPatterns(t,["adjusted amount","adjustedamount"]);return{productCode:this.findColumnByPatterns(t,o.productCode||["code","ordercode","productcode","sku"]),productName:this.findColumnByPatterns(t,o.productName||["product name","description","name"]),quantity:this.findColumnByPatterns(t,o.quantity||["quantity","qty"]),price:i||r,adjustedAmount:c,room:this.findColumnByPatterns(t,o.room||["room","location"]),notes:this.findColumnByPatterns(t,o.notes||["notes","note","comments"]),priceIncludesGst:n||!!i||t.some(a=>a.toLowerCase().includes("inc gst"))}}findColumnByPatterns(e,t){for(const o of t){const s=e.find(n=>n.toLowerCase().includes(o.toLowerCase()));if(s)return s}return null}async processChunk(e,t){for(const o of e)await this.processRow(o,t)}async processRow(e,t){const o=t.productCode?e[t.productCode]:"",s=t.productName?e[t.productName]:"",n=t.quantity?e[t.quantity]:"1",i=t.price?e[t.price]:"",r=t.room?String(e[t.room]||"").trim():"",c=t.notes?String(e[t.notes]||"").trim():"",a=String(o).trim(),l=this.validateProductCode(a);if(!l.isValid){console.log("Excluding row:",a,"-",l.reason);return}const d=Math.max(1,parseInt(n)||1);let p=0,h=0;if(t.adjustedAmount&&d>0){const g=e[t.adjustedAmount];h=(parseFloat(String(g).replace(/[^\d.-]/g,""))||0)/d,p=h*1.1}else if(i){const g=String(i).replace(/[^\d.-]/g,""),S=parseFloat(g)||0;S>0&&(t.priceIncludesGst?(p=S,h=S/1.1):(h=S,p=S*1.1))}const f=r||"Blank";f!=="Blank"&&this.ensureRoomExists(f),console.log("Processing product:",{productCode:a,productName:s,quantity:d,priceIncGst:p,room:f,notes:c});const m=await this.findProductInCatalog(a,s),y=this.createProductObject({productCode:a,productName:s,priceExGst:h,priceIncGst:p,catalogProduct:m});m?console.log("Found product in catalog:",a):(console.log("Product not found in catalog:",a),this.notFoundProducts.push({orderCode:a,productName:s||"Unknown Product",quantity:d,price:p>0?p.toFixed(2):"N/A"})),v.addProductToSelection(y,c,f,d),this.processedData.push({...y,quantity:d,notes:c,room:f})}async findProductInCatalog(e,t){var s;const o=D.getAllProducts();if(e){const n=String(e).trim(),i=o.find(r=>[r.OrderCode,r.orderCode,r["Order Code"],r.order_code].some(a=>a&&String(a).trim().toLowerCase()===n.toLowerCase()));if(i)return console.log("Found product in catalog by code:",n,i),i}if(t){const n=String(t).trim().toLowerCase(),i=o.find(r=>[r.productName,r["Product Name"],r.description,r.Description,r.LongDescription].some(a=>a&&String(a).trim().toLowerCase()===n));if(i)return console.log("Found product in catalog by name:",t,i),i}if(e&&B.isEnabled())try{const n=await B.findSeimaMatches(e);if(((s=n==null?void 0:n.matches)==null?void 0:s.length)>0){const i=n.matches[0],r=o.find(c=>String(c.OrderCode||"").trim()===String(i.SeimaSKU).trim());if(r)return console.log(`Crosshair: mapped ${e} (${n.competitor}) -> ${i.SeimaSKU}`),r}}catch(n){console.warn("Crosshair lookup failed for",e,n)}return console.log("Product not found in catalog:",{productCode:e,productName:t}),null}showImportResults(){this.showResultsStep();const e=document.getElementById("import-summary"),t=document.getElementById("not-found-products"),o=document.getElementById("not-found-list");if(e&&(e.innerHTML=`
        <p><strong>Total processed:</strong> ${this.processedData.length}</p>
        <p><strong>Products added:</strong> ${this.processedData.length}</p>
        <p style="color: #059669;"><strong>All products imported successfully!</strong></p>
      `),t&&o)if(this.notFoundProducts.length>0){const n=t.querySelector("h5");n&&(n.textContent="Products added with placeholder information:",n.style.color="#2563eb");const i=this.notFoundProducts.map(r=>`<li><strong>${r.orderCode}</strong> - ${r.productName} (Qty: ${r.quantity}, Price: ${r.price})</li>`).join("");o.innerHTML=`<ul>${i}</ul>`,t.style.display="block",t.style.borderColor="#2563eb",t.style.backgroundColor="#eff6ff"}else t.style.display="none";const s=document.getElementById("import-close-btn");s&&this.processedData.length>0&&(s.textContent="View Products",s.onclick=()=>{window.location.reload()}),console.log("Import results displayed")}populateCustomerInfo(e){if(!e)return;const t=E.getStorageItem("pdfFormSettings",{}),o={...t,name:e.customerName||t.name||"",project:e.customerProject||t.project||"",address:e.customerAddress||t.address||"",email:e.customerEmail||t.email||"",telephone:e.customerPhone||t.telephone||""};E.setStorageItem("pdfFormSettings",o),console.log("Customer information populated from import:",o)}validateProductCode(e){const t=String(e||"").trim();if(!t||t.toLowerCase()==="n/a")return{isValid:!1,reason:"Empty or N/A code"};const o=G.get("import.productCodeValidation",{regex:"^\\d{6}$",allowAnyNonEmpty:!1,skipValidation:!1});if(o.skipValidation)return{isValid:!0,reason:"Validation skipped"};try{if(new RegExp(o.regex).test(t))return{isValid:!0,reason:"Matches pattern"}}catch(s){console.warn("Invalid product code regex pattern:",o.regex,s)}return o.allowAnyNonEmpty?{isValid:!0,reason:"Non-empty code accepted"}:{isValid:!1,reason:`Does not match pattern: ${o.regex}`}}createProductObject({productCode:e,productName:t,priceExGst:o,priceIncGst:s,catalogProduct:n}){return{OrderCode:e,orderCode:e,productName:t||(n?n.productName:"Unknown Product"),"Product Name":t||(n?n["Product Name"]:"Unknown Product"),Description:t||(n?n.Description:"Unknown Product"),description:t||(n?n.description:"Unknown Product"),LongDescription:n?n.LongDescription||n["Long Description"]:"","Long Description":n?n.LongDescription||n["Long Description"]:"",price:o>0?o.toFixed(2):n?n.price:"0.00",Image_URL:n?n.Image_URL||n.imageUrl:"assets/no-image.png",imageUrl:n?n.Image_URL||n.imageUrl:"assets/no-image.png",Website_URL:n?n.Website_URL||n.websiteUrl:"",websiteUrl:n?n.Website_URL||n.websiteUrl:"",Diagram_URL:n?n.Diagram_URL||n.diagramUrl:"",diagramUrl:n?n.Diagram_URL||n.diagramUrl:"",Datasheet_URL:n?n.Datasheet_URL||n.datasheetUrl:"",datasheetUrl:n?n.Datasheet_URL||n.datasheetUrl:"",RRP_EXGST:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",rrpExGst:o>0?o.toFixed(2):n?n.RRP_EXGST||n.rrpExGst:"0.00",RRP_INCGST:s>0?s.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00",rrpIncGst:s>0?s.toFixed(2):n?n.RRP_INCGST||n.rrpIncGst:"0.00"}}ensureRoomExists(e){!e||e==="Blank"||G.get("rooms.predefined",[]).some(i=>i.name===e)||v.getCustomRooms().some(i=>i.name===e)||(console.log("Adding imported room as custom room:",e),v.addCustomRoom(e))}}class Qt{constructor(){var e,t,o,s;this.isEnabled=(e=F.PRESENTATION_RECORDING)==null?void 0:e.ENABLED,this.googleSheetsUrl=(t=F.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL,this.retryAttempts=(o=F.PRESENTATION_RECORDING)==null?void 0:o.RETRY_ATTEMPTS,this.retryDelay=(s=F.PRESENTATION_RECORDING)==null?void 0:s.RETRY_DELAY,this.currentSelectionId=null}configure(e){this.googleSheetsUrl=e,console.log("📊 Presentation recorder configured with Google Sheets URL")}getStaffContact(){const e=O.getCurrentUser();if(console.log("🔐 Auth user for save:",e),e&&e.email)return console.log("✅ Using authenticated user email:",e.email),{name:e.name||"",email:e.email,mobile:e.phone||""};console.warn("⚠️ No authenticated user, falling back to settings");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Using settings email:",o.email),o}}catch(t){console.warn("Could not load staff contact:",t)}return{name:"",email:"",mobile:""}}async saveSelection(e){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};try{const t=this.prepareSelectionData(e);t.action="savePresenterSelection",console.log("📧 Saving with staff email:",t.staffEmail);const o=await this.sendToGoogleSheets(t);if(console.log("📊 Google Sheets response:",o),o.success)return console.log("✅ Presentation saved successfully with ID:",o.id),this.currentSelectionId=o.id,{success:!0,id:o.id,data:t};throw new Error(o.error||"Failed to save presentation")}catch(t){return console.error("❌ Failed to save presentation:",t),{success:!1,error:t.message}}}async updateSelection(e,t){if(!this.isEnabled||!this.googleSheetsUrl)return console.log("📊 Presentation recording disabled or not configured"),{success:!1,reason:"not_configured"};if(!e)return{success:!1,error:"No selection ID provided for update"};try{const o=this.prepareSelectionData(t);o.action="updatePresenterSelection",o.id=e;const s=await this.sendToGoogleSheets(o);if(s.success)return console.log("✅ Presentation updated successfully:",e),{success:!0,id:e,updated:!0};throw new Error(s.error||"Failed to update presentation")}catch(o){return console.error("❌ Failed to update presentation:",o),{success:!1,error:o.message}}}prepareSelectionData(e){const t=new Date,o=this.getStaffContact(),s=e.gridRows||v.getSelectedProducts()||[],n=s.filter(d=>d.product).length,i=s.reduce((d,p)=>d+(parseInt(p.quantity)||1),0),r=[...new Set(s.map(d=>d.room).filter(Boolean))],c=this.calculateEstimatedValue(s);let a=[];try{const d=localStorage.getItem("customRoomOrder");d&&(a=JSON.parse(d))}catch(d){console.warn("Could not load room order:",d)}const l=e.pdfSettings||{};return{date:t.toLocaleDateString("en-AU"),time:t.toLocaleTimeString("en-AU",{hour:"2-digit",minute:"2-digit",hour12:!1}),appVersion:F.VERSION,staffName:o.name||e.staffName||"",staffEmail:o.email||e.staffEmail||"",staffMobile:this.formatPhoneNumber(o.mobile||e.staffMobile),customerName:e.customerName||"",customerEmail:e.customerEmail||"",customerPhone:this.formatPhoneNumber(e.customerPhone),customerProject:e.customerProject||"",customerAddress:e.customerAddress||"",documentName:e.documentName||`${e.customerName||"Selection"} - ${t.toLocaleDateString("en-AU")}`,notes:e.notes||"",productsJson:JSON.stringify(s.map(d=>{var p;return{id:d.id,product:d.product?{OrderCode:d.product.OrderCode||"",Description:d.product.Description||"",RRP_INCGST:d.product.RRP_INCGST||"0.00",RRP_EX:d.product.RRP_EX||"0.00",Image_URL:d.product.Image_URL||"",Diagram_URL:d.product.Diagram_URL||"",Website_URL:d.product.Website_URL||"",BARCODE:d.product.BARCODE||""}:null,quantity:d.quantity||1,room:d.room||"",notes:d.notes||"",price:d.price||((p=d.product)==null?void 0:p.RRP_EX)||"0.00"}})),roomOrderJson:JSON.stringify(a),pdfSettingsJson:JSON.stringify(l),totalProducts:n,totalQuantity:i,totalRooms:r.length,roomsList:r.join(", "),estimatedValue:c}}calculateEstimatedValue(e){let t=0;return e.forEach(o=>{var r,c;if(!o.product)return;const s=parseInt(o.quantity)||1,n=o.price||((r=o.product)==null?void 0:r.RRP_INCGST)||((c=o.product)==null?void 0:c.RRP_EX)||"0",i=parseFloat(n.toString().replace(/[^0-9.]/g,""))||0;t+=i*s}),t.toFixed(2)}formatPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),/^4\d{8}$/.test(t)&&(t="0"+t),"'"+t}async sendToGoogleSheets(e,t=1){try{const o=new URLSearchParams;o.append("data",JSON.stringify(e)),console.log("📊 Sending to Google Sheets:",this.googleSheetsUrl);const s=await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});if(console.log("📊 Response status:",s.status,s.statusText),!s.ok)throw new Error(`HTTP ${s.status}: ${s.statusText}`);const n=await s.text();console.log("📊 Raw response:",n);try{return JSON.parse(n)}catch(i){return console.error("📊 Failed to parse JSON response:",i),{success:!1,error:"Invalid JSON response",raw:n}}}catch(o){return console.error(`📊 Attempt ${t} failed:`,o),t<this.retryAttempts?(console.log(`📊 Retrying in ${this.retryDelay}ms... (attempt ${t+1}/${this.retryAttempts})`),await new Promise(s=>setTimeout(s,this.retryDelay)),this.sendToGoogleSheets(e,t+1)):{success:!1,error:o.message}}}async testConnection(){if(!this.googleSheetsUrl)return{success:!1,error:"No Google Sheets URL configured"};try{const e=new URL(this.googleSheetsUrl);e.searchParams.append("action","getPresenterSelections"),e.searchParams.append("staffEmail","");const t=await fetch(e.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return{success:!0,message:"Connection successful",result:await t.json()}}catch(e){return{success:!1,error:e.message}}}getCurrentSelectionId(){return this.currentSelectionId}setCurrentSelectionId(e){this.currentSelectionId=e}clearCurrentSelectionId(){this.currentSelectionId=null}hasLoadedSelection(){return this.currentSelectionId!==null}setEnabled(e){this.isEnabled=e,console.log(`📊 Presentation recording ${e?"enabled":"disabled"}`)}}const de=new Qt;class Yt{constructor(){var e;this.googleSheetsUrl=(e=F.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,this.cachedSelections=null,this.cacheTimestamp=null,this.cacheDuration=5*60*1e3}getStaffEmail(){const e=O.getCurrentUser();if(console.log("🔐 Auth user for load:",e),e&&e.email)return console.log("✅ Filtering by authenticated user email:",e.email),e.email;console.warn("⚠️ No authenticated user for filtering");try{const t=localStorage.getItem("staffContact");if(t){const o=JSON.parse(t);return console.log("📋 Fallback to settings email:",o.email),o.email||""}}catch(t){console.warn("Could not load staff email:",t)}return""}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null,console.log("🗑️ Selections cache cleared")}async fetchSelections(e=!1,t=!1){if(!this.googleSheetsUrl)return console.error("❌ Google Sheets URL not configured"),[];if(!t&&!e&&this.cachedSelections&&this.cacheTimestamp&&Date.now()-this.cacheTimestamp<this.cacheDuration)return console.log("📊 Using cached selections"),this.cachedSelections;try{const o=this.getStaffEmail();console.log(`📊 Fetching ${e?"deleted":""} selections for: ${o||"all users"}`);const s=new URL(this.googleSheetsUrl);s.searchParams.append("action","getPresenterSelections"),s.searchParams.append("staffEmail",o),e&&s.searchParams.append("deletedOnly","true");const n=await fetch(s.toString(),{method:"GET",headers:{Accept:"application/json"}});if(!n.ok)throw new Error(`HTTP ${n.status}: ${n.statusText}`);const i=await n.json();if(i.success&&i.selections)return console.log(`✅ Fetched ${i.selections.length} selections`),e||(this.cachedSelections=i.selections,this.cacheTimestamp=Date.now()),i.selections;throw new Error(i.error||"Failed to fetch selections")}catch(o){return console.error("❌ Error fetching selections:",o),[]}}clearCache(){this.cachedSelections=null,this.cacheTimestamp=null}searchSelections(e,t){if(!t||t.trim()==="")return e;const o=t.toLowerCase().trim();return e.filter(s=>{const n=(s.customerName||"").toLowerCase(),i=(s.customerProject||"").toLowerCase(),r=(s.documentName||"").toLowerCase(),c=(s.date||"").toLowerCase();return n.includes(o)||i.includes(o)||r.includes(o)||c.includes(o)})}sortByDateDescending(e){return[...e].sort((t,o)=>{try{const s=this.parseDateValue(t.lastModified||t.date,t.time);return this.parseDateValue(o.lastModified||o.date,o.time)-s}catch{return 0}})}parseDateValue(e,t=""){if(!e)return new Date(0);if(e.includes("T"))return new Date(e);const o=e.toString().split("/");if(o.length===3){const s=parseInt(o[0]),n=parseInt(o[1])-1,i=parseInt(o[2]);if(t){const r=t.replace(/[AP]M/i,"").trim().split(":"),c=parseInt(r[0])||0,a=parseInt(r[1])||0,l=t.toUpperCase().includes("PM");return new Date(i,n,s,l&&c!==12?c+12:c,a)}return new Date(i,n,s)}return new Date(0)}async loadSelection(e,t="replace"){try{console.log(`📊 Loading selection: ${e.id} (mode: ${t})`);let o=[];try{o=JSON.parse(e.productsJson||"[]")}catch(r){return console.error("Failed to parse products JSON:",r),{success:!1,error:"Invalid products data"}}let s=[];try{s=JSON.parse(e.roomOrderJson||"[]")}catch(r){console.warn("Could not parse room order:",r)}let n={};try{n=JSON.parse(e.pdfSettingsJson||"{}")}catch(r){console.warn("Could not parse PDF settings:",r)}const i=await this.enrichProductsWithCatalog(o);if(t==="replace"){v.clearAllSelections();const r={name:e.customerName||"",email:e.customerEmail||"",phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("customerDetails",JSON.stringify(r));const c={name:e.customerName||"",email:e.customerEmail||"",telephone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject||"",address:e.customerAddress||""};localStorage.setItem("pdfFormSettings",JSON.stringify(c)),s.length>0&&localStorage.setItem("customRoomOrder",JSON.stringify(s)),Object.keys(n).length>0&&localStorage.setItem("pdfSettings",JSON.stringify(n)),i.forEach(a=>{a.product&&v.addProductToSelection(a.product,a.room||"",a.quantity||1,a.notes||"",a.price||null)})}else t==="merge"&&i.forEach(r=>{r.product&&(v.getSelectedProducts().some(l=>{var d;return((d=l.product)==null?void 0:d.OrderCode)===r.product.OrderCode&&l.room===r.room})||v.addProductToSelection(r.product,r.room||"",r.quantity||1,r.notes||"",r.price||null))});return de.setCurrentSelectionId(e.id),console.log(`✅ Loaded ${i.length} products`),{success:!0,id:e.id,documentName:e.documentName,customerName:e.customerName,customerProject:e.customerProject,productCount:i.length,roomOrder:s,customerDetails:{name:e.customerName,email:e.customerEmail,phone:this.cleanPhoneNumber(e.customerPhone),project:e.customerProject,address:e.customerAddress},mode:t}}catch(o){return console.error("❌ Error loading selection:",o),{success:!1,error:o.message}}}async enrichProductsWithCatalog(e){const t=[];for(const o of e){if(!o.product){t.push(o);continue}const s=o.product.OrderCode||o.product.orderCode;if(s){const n=D.findProductByCode(s);n?t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:n,quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||n.RRP_EX||"0.00"}):(console.warn(`Product ${s} not found in catalog, using saved data`),t.push({id:o.id||`row_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,product:{OrderCode:s,Description:o.product.Description||o.product.description||"Unknown Product",RRP_INCGST:o.product.RRP_INCGST||o.product.rrpIncGst||"0.00",RRP_EX:o.product.RRP_EX||o.product.rrpEx||"0.00",Image_URL:o.product.Image_URL||o.product.imageUrl||"",Diagram_URL:o.product.Diagram_URL||"",Website_URL:o.product.Website_URL||"",BARCODE:o.product.BARCODE||"",_notInCatalog:!0},quantity:o.quantity||1,room:o.room||"",notes:o.notes||"",price:o.price||o.product.RRP_EX||"0.00"}))}}return t}cleanPhoneNumber(e){if(!e)return"";let t=String(e).trim();return t.startsWith("'")&&(t=t.substring(1)),t}async deleteSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"deletePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}async restoreSelections(e){if(!this.googleSheetsUrl)return{success:!1,error:"Not configured"};try{const t=new URLSearchParams;t.append("data",JSON.stringify({action:"restorePresenterSelections",ids:e}));const s=await(await fetch(this.googleSheetsUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t})).json();return s.success&&this.clearCache(),s}catch(t){return{success:!1,error:t.message}}}}const le=new Yt;class Kt{constructor(){this.isVisible=!1,this.allSelections=[],this.filteredSelections=[],this.currentSearchQuery="",this.onLoadCallback=null,this.selectedItems=new Set,this.showDeletedMode=!1}async show(e){console.log("📂 PresentationPicker.show() called");try{this.onLoadCallback=e,this.selectedItems.clear(),this.showDeletedMode=!1,this.createModalHTML(),this.attachEventListeners(),this.isVisible=!0,console.log("📂 Modal created, fetching selections..."),this.setLoadingState(!0),await this.fetchAndRenderSelections(),console.log("📂 Picker ready")}catch(t){throw console.error("❌ PresentationPicker.show() error:",t),t}}async fetchAndRenderSelections(){this.setLoadingState(!0),this.selectedItems.clear();try{this.allSelections=await le.fetchSelections(this.showDeletedMode,!0),this.allSelections=le.sortByDateDescending(this.allSelections),this.filterAndRender()}catch(e){console.error("Error fetching selections:",e),this.showError("Failed to load selections. Please try again.")}finally{this.setLoadingState(!1)}}hide(){const e=document.getElementById("presentation-picker-modal");e&&e.remove(),this.isVisible=!1}createModalHTML(){const e=document.getElementById("presentation-picker-modal");e&&e.remove();const t=`
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
    `)}attachEventListeners(){var t,o,s,n,i;const e=document.getElementById("presentation-picker-modal");e&&((t=document.getElementById("picker-close-btn"))==null||t.addEventListener("click",()=>this.hide()),e.addEventListener("click",r=>{r.target===e&&this.hide()}),(o=document.getElementById("picker-search"))==null||o.addEventListener("input",r=>{this.currentSearchQuery=r.target.value,this.filterAndRender()}),(s=document.getElementById("picker-show-deleted"))==null||s.addEventListener("change",r=>{this.showDeletedMode=r.target.checked,this.fetchAndRenderSelections()}),(n=document.getElementById("picker-refresh"))==null||n.addEventListener("click",()=>{le.clearCache(),this.fetchAndRenderSelections()}),(i=document.getElementById("picker-retry-btn"))==null||i.addEventListener("click",()=>{this.fetchAndRenderSelections()}),document.addEventListener("keydown",this.handleKeyDown.bind(this)))}handleKeyDown(e){e.key==="Escape"&&this.isVisible&&this.hide()}setLoadingState(e){const t=document.getElementById("picker-loading"),o=document.getElementById("picker-table"),s=document.getElementById("picker-empty"),n=document.getElementById("picker-error");e?(t&&(t.style.display="flex"),o&&(o.style.display="none"),s&&(s.style.display="none"),n&&(n.style.display="none")):t&&(t.style.display="none")}showError(e){const t=document.getElementById("picker-error"),o=document.getElementById("picker-error-message"),s=document.getElementById("picker-table"),n=document.getElementById("picker-empty");o&&(o.textContent=e),t&&(t.style.display="flex"),s&&(s.style.display="none"),n&&(n.style.display="none")}filterAndRender(){this.filteredSelections=le.searchSelections(this.allSelections,this.currentSearchQuery),this.renderTable()}renderTable(){const e=document.getElementById("picker-table"),t=document.getElementById("picker-empty"),o=document.getElementById("picker-footer"),s=document.getElementById("picker-table-body");if(!s)return;if(this.filteredSelections.length===0){e&&(e.style.display="none"),t&&(t.style.display="flex"),o&&(o.style.display="none");return}e&&(e.style.display="table"),t&&(t.style.display="none"),o&&(o.style.display="flex"),s.innerHTML=this.filteredSelections.map((i,r)=>`
      <tr data-index="${r}" data-id="${i.id}">
        <td class="col-date">
          <div>${this.formatDate(i.date)}</div>
          <div style="font-size: 0.75rem; color: var(--text-tertiary, #9ca3af);">${this.formatTime(i.time)}</div>
        </td>
        <td class="col-customer">
          <div class="picker-customer-name">${this.escapeHtml(i.customerName||"Unknown")}</div>
          <div class="picker-customer-email">${this.escapeHtml(i.customerEmail||"")}</div>
        </td>
        <td class="col-project">
          <div class="picker-project-name">${this.escapeHtml(i.customerProject||"-")}</div>
          <div class="picker-document-name">${this.escapeHtml(i.documentName||"")}</div>
        </td>
        <td class="col-products" style="text-align: right;">
          ${i.totalProducts||0}
        </td>
        <td class="col-value" style="text-align: right;">
          $${this.formatValue(i.estimatedValue)}
        </td>
        <td class="col-actions">
          <button class="picker-load-btn" data-action="load" data-index="${r}">Load</button>
          ${this.showDeletedMode?`<button class="picker-delete-btn" data-action="restore" data-index="${r}" style="color: #059669; border-color: #059669;">Restore</button>`:`<button class="picker-delete-btn" data-action="delete" data-index="${r}">Delete</button>`}
        </td>
      </tr>
    `).join("");const n=document.getElementById("picker-selection-count");n&&(n.textContent=`${this.filteredSelections.length} selection${this.filteredSelections.length!==1?"s":""}`),this.attachRowEventListeners()}attachRowEventListeners(){const e=document.getElementById("picker-table-body");e&&(e.querySelectorAll("button[data-action]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const s=t.dataset.action,n=parseInt(t.dataset.index),i=this.filteredSelections[n];s==="load"?this.showLoadConfirmation(i):s==="delete"?this.confirmDelete(i):s==="restore"&&this.restoreSelection(i)})}),e.querySelectorAll("tr").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("button"))return;const s=parseInt(t.dataset.index),n=this.filteredSelections[s];this.showLoadConfirmation(n)})}))}showLoadConfirmation(e){const t=v.getSelectedProducts();if(!(t&&t.length>0)){this.loadSelection(e,"replace");return}const s=`
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
    `;document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("picker-confirm-dialog");n.querySelectorAll("button[data-action]").forEach(i=>{i.addEventListener("click",()=>{const r=i.dataset.action;n.remove(),r==="replace"?this.loadSelection(e,"replace"):r==="merge"&&this.loadSelection(e,"merge")})}),n.addEventListener("click",i=>{i.target===n&&n.remove()})}async loadSelection(e,t){try{this.setLoadingState(!0);const o=await le.loadSelection(e,t);o.success?(this.hide(),this.showToast(`Loaded ${o.productCount} products (${t})`),this.onLoadCallback&&this.onLoadCallback(o)):this.showError(o.error||"Failed to load selection")}catch(o){this.showError(o.message)}finally{this.setLoadingState(!1)}}async confirmDelete(e){if(confirm(`Delete selection for "${e.customerName||"Unknown"}"?

This can be restored later.`))try{const t=await le.deleteSelections([e.id]);t.success?(this.showToast("Selection deleted"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to delete")}catch(t){this.showError(t.message)}}async restoreSelection(e){try{const t=await le.restoreSelections([e.id]);t.success?(this.showToast("Selection restored"),this.fetchAndRenderSelections()):this.showError(t.error||"Failed to restore")}catch(t){this.showError(t.message)}}showToast(e){const t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="toast-out 0.3s ease",setTimeout(()=>t.remove(),300)},3e3)}formatDate(e){if(!e)return"-";if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(e))return e;try{const t=new Date(e);if(!isNaN(t.getTime())&&t.getFullYear()>1900)return t.toLocaleDateString("en-AU")}catch{}return e}formatTime(e){if(!e)return"";const t=e.match(/(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?/i);if(t){let o=parseInt(t[1]);const s=t[2],n=(t[3]||"").toUpperCase();return n==="PM"&&o!==12?o+=12:n==="AM"&&o===12&&(o=0),`${o.toString().padStart(2,"0")}:${s}`}return e}formatValue(e){return(parseFloat(e)||0).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const rt=new Kt,Ke="pdfWizardSettings",Ze="tipTailSettings",Ae="customerLogo";class Zt{constructor(){this.wizardData=this.getDefaultData(),this.availableTipPdfs=[],this.availableTailPdfs=[],this.customTipPdf=null,this.customTailPdf=null,this.onComplete=null,this.onCancel=null}getDefaultData(){return{customer:{name:"",project:"",address:"",email:"",phone:"",logo:null},options:{showRrp:!1,includeGst:!1,noPricing:!1,noQty:!1,includeDescriptions:!0,includeNotes:!0},customise:{tipPdf:"",tailPdf:""}}}async open(e={}){this.onComplete=e.onComplete||null,this.onCancel=e.onCancel||null;try{const o=await(await fetch("./screens/pdf-wizard.html")).text(),s=document.createElement("div");if(s.id="pdf-wizard-container",s.innerHTML=o,document.body.appendChild(s),!document.querySelector('link[href*="design-system.css"]')){const n=document.createElement("link");n.rel="stylesheet",n.href="./css/design-system.css",document.head.appendChild(n)}this.loadSavedSettings(),await this.discoverAvailablePdfs(),this.setupEventHandlers(),this.populateForm(),console.log("✅ PDF Wizard opened"),this.startImagePreloading()}catch(t){console.error("Failed to open PDF wizard:",t)}}close(){const e=document.getElementById("pdf-wizard-container");e&&e.remove(),this.onCancel&&this.onCancel()}startImagePreloading(){const e=v.getSelectedProducts();if(!e||e.length===0){console.log("📷 No products to preload");return}const t=e.map(o=>{var s,n,i;return{...o.product,Image_URL:((s=o.product)==null?void 0:s.Image_URL)||((n=o.product)==null?void 0:n.imageUrl)||"",Diagram_URL:((i=o.product)==null?void 0:i.Diagram_URL)||""}});console.log(`📷 Starting background preload for ${t.length} products...`),ot(t).then(o=>{console.log(`✅ Preloaded ${o} images - ready for PDF generation`)}).catch(o=>{console.warn("Image preloading error:",o)})}loadSavedSettings(){const e=E.getStorageItem(Ke,null);if(e){const n=this.getDefaultData();this.wizardData={...n,...e,customer:{...n.customer,...e.customer||{}},options:{...n.options,...e.options||{}},customise:{...n.customise,...e.customise||{}}}}const t=E.getStorageItem("pdfFormSettings",{});t.name&&(this.wizardData.customer.name=t.name),t.project&&(this.wizardData.customer.project=t.project),t.address&&(this.wizardData.customer.address=t.address),t.email&&(this.wizardData.customer.email=t.email),t.telephone&&(this.wizardData.customer.phone=t.telephone);const o=localStorage.getItem(Ae);o&&(this.wizardData.customer.logo=o);const s=E.getStorageItem(Ze,{});s.tipAsset&&(this.wizardData.customise.tipPdf=s.tipAsset),s.tailAsset&&(this.wizardData.customise.tailPdf=s.tailAsset)}async discoverAvailablePdfs(){try{let e=[];try{const t=await fetch("./assets-list.json");t.ok&&(e=await t.json())}catch{}e.length===0&&(e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail-generic.pdf"]),this.availableTipPdfs=e.filter(t=>t.toLowerCase().startsWith("tip-")),this.availableTailPdfs=e.filter(t=>t.toLowerCase().startsWith("tail-")),this.renderPdfOptions()}catch(e){console.error("Failed to discover PDFs:",e)}}renderPdfOptions(){const e=document.getElementById("tip-pdf-grid");if(e){const o=this.wizardData.customise.tipPdf||"",s=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${s?"":" selected"}" data-tip="none">
          <input type="radio" name="tipPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTipPdfs.forEach(i=>{const r=i.replace("tip-","").replace(".pdf",""),c=o===`./assets/${i}`;n+=`
          <label class="option-card${c?" selected":""}" data-tip="${i}">
            <input type="radio" name="tipPdf" value="./assets/${i}" ${c?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${r}</span>
          </label>
        `}),e.innerHTML=n,e.querySelectorAll(".option-card").forEach(i=>{i.addEventListener("click",()=>{var c;this.customTipPdf=null,document.getElementById("tip-custom-preview").style.display="none",document.getElementById("tip-upload-link").style.display="",e.querySelectorAll(".option-card").forEach(a=>a.classList.remove("selected")),i.classList.add("selected");const r=i.querySelector("input");r&&(r.checked=!0),this.wizardData.customise.tipPdf=((c=i.querySelector("input"))==null?void 0:c.value)||"",this.saveSettings()})})}const t=document.getElementById("tail-pdf-grid");if(t){const o=this.wizardData.customise.tailPdf||"",s=o&&o!==""&&o!=="__custom__";let n=`
        <label class="option-card${s?"":" selected"}" data-tail="none">
          <input type="radio" name="tailPdf" value="" ${s?"":"checked"} style="display: none;">
          <div class="option-card-icon">✕</div>
          <span class="option-card-title">None</span>
        </label>
      `;this.availableTailPdfs.forEach(i=>{const r=i.replace("tail-","").replace(".pdf",""),c=o===`./assets/${i}`;n+=`
          <label class="option-card${c?" selected":""}" data-tail="${i}">
            <input type="radio" name="tailPdf" value="./assets/${i}" ${c?"checked":""} style="display: none;">
            <div class="option-card-icon">📄</div>
            <span class="option-card-title">${r}</span>
          </label>
        `}),t.innerHTML=n,t.querySelectorAll(".option-card").forEach(i=>{i.addEventListener("click",()=>{var c;this.customTailPdf=null,document.getElementById("tail-custom-preview").style.display="none",document.getElementById("tail-upload-link").style.display="",t.querySelectorAll(".option-card").forEach(a=>a.classList.remove("selected")),i.classList.add("selected");const r=i.querySelector("input");r&&(r.checked=!0),this.wizardData.customise.tailPdf=((c=i.querySelector("input"))==null?void 0:c.value)||"",this.saveSettings()})})}}setupEventHandlers(){var e,t,o;(e=document.getElementById("wizard-close"))==null||e.addEventListener("click",()=>this.close()),(t=document.getElementById("wizard-cancel"))==null||t.addEventListener("click",()=>this.close()),(o=document.getElementById("wizard-generate"))==null||o.addEventListener("click",s=>{s.preventDefault(),this.generatePdf()}),this.setupFormHandlers(),this.setupOptionCardHandlers(),this.setupLogoUpload(),this.setupPdfUploads()}setupFormHandlers(){document.querySelectorAll('#pdf-wizard input[type="text"], #pdf-wizard input[type="email"], #pdf-wizard input[type="tel"]').forEach(o=>{o.addEventListener("blur",()=>{this.collectFormData(),this.saveSettings()})}),document.querySelectorAll("#pdf-wizard .form-checkbox").forEach(o=>{const s=o.querySelector('input[type="checkbox"]');s&&(o.addEventListener("click",n=>{n.target.tagName==="SPAN"&&(s.checked=!s.checked,s.dispatchEvent(new Event("change",{bubbles:!0})))}),s.addEventListener("change",()=>{this.collectFormData(),this.saveSettings()}))})}setupOptionCardHandlers(){const e=document.getElementById("show-rrp"),t=document.getElementById("include-gst"),o=document.getElementById("no-pricing"),s=document.getElementById("no-qty");o&&o.addEventListener("change",()=>{const n=o.checked;this.wizardData.options.noPricing=n,n?(e&&(e.checked=!1,e.disabled=!0,e.parentElement.style.opacity="0.5",this.wizardData.options.showRrp=!1),t&&(t.checked=!1,t.disabled=!0,t.parentElement.style.opacity="0.5",this.wizardData.options.includeGst=!1)):(e&&(e.disabled=!1,e.parentElement.style.opacity="1"),t&&(t.disabled=!1,t.parentElement.style.opacity="1")),this.saveSettings()}),e&&e.addEventListener("change",()=>{this.wizardData.options.showRrp=e.checked,this.saveSettings()}),t&&t.addEventListener("change",()=>{this.wizardData.options.includeGst=t.checked,this.saveSettings()}),s&&s.addEventListener("change",()=>{this.wizardData.options.noQty=s.checked,this.saveSettings()})}setupLogoUpload(){const e=document.getElementById("logo-upload-zone"),t=document.getElementById("customer-logo-input"),o=document.getElementById("logo-preview-container"),s=document.getElementById("logo-preview-img"),n=document.getElementById("remove-logo-btn");e&&t&&(e.onclick=()=>t.click(),e.ondragover=i=>{i.preventDefault(),e.style.borderColor="var(--color-copper)"},e.ondragleave=()=>{e.style.borderColor=""},e.ondrop=i=>{i.preventDefault(),e.style.borderColor="",i.dataTransfer.files.length>0&&this.handleLogoFile(i.dataTransfer.files[0])},t.onchange=i=>{i.target.files.length>0&&this.handleLogoFile(i.target.files[0])}),n&&(n.onclick=()=>{this.wizardData.customer.logo=null,localStorage.removeItem(Ae),o&&(o.style.display="none"),e&&(e.style.display="")}),this.wizardData.customer.logo&&s&&o&&(s.src=this.wizardData.customer.logo,o.style.display="block",e&&(e.style.display="none"))}handleLogoFile(e){if(!e.type.startsWith("image/")){alert("Please select an image file");return}if(e.size>2*1024*1024){alert("File size must be less than 2MB");return}const t=new FileReader;t.onload=o=>{this.wizardData.customer.logo=o.target.result,localStorage.setItem(Ae,o.target.result);const s=document.getElementById("logo-preview-container"),n=document.getElementById("logo-preview-img"),i=document.getElementById("logo-upload-zone");n&&(n.src=o.target.result),s&&(s.style.display="block"),i&&(i.style.display="none")},t.readAsDataURL(e)}setupPdfUploads(){const e=document.getElementById("tip-upload-link"),t=document.getElementById("tip-pdf-input"),o=document.getElementById("tip-custom-preview"),s=document.getElementById("tip-custom-name"),n=document.getElementById("remove-tip-btn");e&&t&&(e.onclick=d=>{d.preventDefault(),t.click()},t.onchange=d=>{d.target.files.length>0&&(this.customTipPdf=d.target.files[0],s&&(s.textContent=this.customTipPdf.name),o&&(o.style.display="flex"),e&&(e.style.display="none"),document.querySelectorAll("#tip-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tipPdf="__custom__")}),n&&(n.onclick=()=>{this.customTipPdf=null,o&&(o.style.display="none"),t&&(t.value=""),e&&(e.style.display="");const d=document.querySelector('#tip-pdf-grid [data-tip="none"]');if(d){document.querySelectorAll("#tip-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),d.classList.add("selected");const p=d.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tipPdf=""});const i=document.getElementById("tail-upload-link"),r=document.getElementById("tail-pdf-input"),c=document.getElementById("tail-custom-preview"),a=document.getElementById("tail-custom-name"),l=document.getElementById("remove-tail-btn");i&&r&&(i.onclick=d=>{d.preventDefault(),r.click()},r.onchange=d=>{d.target.files.length>0&&(this.customTailPdf=d.target.files[0],a&&(a.textContent=this.customTailPdf.name),c&&(c.style.display="flex"),i&&(i.style.display="none"),document.querySelectorAll("#tail-pdf-grid .option-card").forEach(p=>p.classList.remove("selected")),this.wizardData.customise.tailPdf="__custom__")}),l&&(l.onclick=()=>{this.customTailPdf=null,c&&(c.style.display="none"),r&&(r.value=""),i&&(i.style.display="");const d=document.querySelector('#tail-pdf-grid [data-tail="none"]');if(d){document.querySelectorAll("#tail-pdf-grid .option-card").forEach(h=>h.classList.remove("selected")),d.classList.add("selected");const p=d.querySelector("input");p&&(p.checked=!0)}this.wizardData.customise.tailPdf=""})}collectFormData(){const e=["customer-name","customer-project","customer-address","customer-email","customer-phone"],t=["name","project","address","email","phone"];e.forEach((n,i)=>{const r=document.getElementById(n);r&&(this.wizardData.customer[t[i]]=r.value)}),Object.entries({"show-rrp":"showRrp","include-gst":"includeGst","no-pricing":"noPricing","no-qty":"noQty"}).forEach(([n,i])=>{const r=document.getElementById(n);r&&(this.wizardData.options[i]=r.checked)}),Object.entries({"include-descriptions":"includeDescriptions","include-notes":"includeNotes"}).forEach(([n,i])=>{const r=document.getElementById(n);r&&(this.wizardData.options[i]=r.checked)})}populateForm(){const e={"customer-name":this.wizardData.customer.name,"customer-project":this.wizardData.customer.project,"customer-address":this.wizardData.customer.address,"customer-email":this.wizardData.customer.email,"customer-phone":this.wizardData.customer.phone};Object.entries(e).forEach(([s,n])=>{const i=document.getElementById(s);i&&(i.value=n||"")});const t={"show-rrp":this.wizardData.options.showRrp,"include-gst":this.wizardData.options.includeGst,"no-pricing":this.wizardData.options.noPricing,"no-qty":this.wizardData.options.noQty};Object.entries(t).forEach(([s,n])=>{const i=document.getElementById(s);i&&(i.checked=!!n,this.wizardData.options.noPricing&&(s==="show-rrp"||s==="include-gst")&&(i.disabled=!0,i.parentElement.style.opacity="0.5"))});const o={"include-descriptions":this.wizardData.options.includeDescriptions,"include-notes":this.wizardData.options.includeNotes};Object.entries(o).forEach(([s,n])=>{const i=document.getElementById(s);i&&(i.checked=n)})}saveSettings(){try{E.setStorageItem(Ke,this.wizardData),E.setStorageItem("pdfFormSettings",{name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone}),E.setStorageItem(Ze,{tipAsset:this.wizardData.customise.tipPdf!=="__custom__"?this.wizardData.customise.tipPdf:"",tailAsset:this.wizardData.customise.tailPdf!=="__custom__"?this.wizardData.customise.tailPdf:""})}catch(e){console.warn("Could not save settings to localStorage:",e.message)}}async generatePdf(){this.collectFormData(),this.saveSettings();const e={name:this.wizardData.customer.name,project:this.wizardData.customer.project,address:this.wizardData.customer.address,email:this.wizardData.customer.email,telephone:this.wizardData.customer.phone,showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,excludePrice:this.wizardData.options.noPricing,excludeQty:this.wizardData.options.noQty,excludeLongDescription:!this.wizardData.options.includeDescriptions,exportCsv:!0},t={tipAsset:"",tipUpload:null,tailAsset:"",tailUpload:null};if(this.wizardData.customise.tipPdf&&this.wizardData.customise.tipPdf!=="__custom__"&&(t.tipAsset=this.wizardData.customise.tipPdf),this.wizardData.customise.tailPdf&&this.wizardData.customise.tailPdf!=="__custom__"&&(t.tailAsset=this.wizardData.customise.tailPdf),this.customTipPdf)try{const s=await this.fileToBase64(this.customTipPdf);t.tipUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tip PDF converted to base64")}catch(s){console.error("Failed to convert tip PDF:",s)}if(this.customTailPdf)try{const s=await this.fileToBase64(this.customTailPdf);t.tailUpload=s.replace(/^data:application\/pdf;base64,/,""),console.log("📄 Custom tail PDF converted to base64")}catch(s){console.error("Failed to convert tail PDF:",s)}try{localStorage.setItem("tipTailSettings",JSON.stringify(t))}catch(s){console.warn("Could not save tipTailSettings to localStorage (likely quota exceeded), using in-memory:",s.message)}console.log("📄 Generating PDF with settings:",{...e,tipAsset:t.tipAsset||"(none)",tipUpload:t.tipUpload?"(custom file)":"(none)",tailAsset:t.tailAsset||"(none)",tailUpload:t.tailUpload?"(custom file)":"(none)"});const o=document.getElementById("pdf-wizard-container");o&&o.remove(),this.onComplete?this.onComplete(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))}fileToBase64(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>t(s.result),s.onerror=o,s.readAsDataURL(e)})}showSaveDialog(){H.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){this.collectFormData();const t=de.hasLoadedSelection(),o=this.wizardData.customer.name?`${this.wizardData.customer.name} - ${new Date().toLocaleDateString("en-AU")}`:`Selection - ${new Date().toLocaleDateString("en-AU")}`,s=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",s);const n=document.getElementById("save-dialog"),i=document.getElementById("save-doc-name"),r=document.getElementById("save-notes");i==null||i.focus(),i==null||i.select(),n.querySelectorAll("button[data-action]").forEach(a=>{a.addEventListener("click",async()=>{const l=a.dataset.action;if(l==="cancel"){n.remove();return}const d=(i==null?void 0:i.value.trim())||"Untitled Selection",p=(r==null?void 0:r.value.trim())||"",h={customerName:this.wizardData.customer.name,customerEmail:this.wizardData.customer.email,customerPhone:this.wizardData.customer.phone,customerProject:this.wizardData.customer.project,customerAddress:this.wizardData.customer.address,documentName:d,notes:p,pdfSettings:{showRrp:this.wizardData.options.showRrp,includeGst:this.wizardData.options.includeGst,noPricing:this.wizardData.options.noPricing,noQty:this.wizardData.options.noQty,includeDescriptions:this.wizardData.options.includeDescriptions,includeNotes:this.wizardData.options.includeNotes,tipPdf:this.wizardData.customise.tipPdf,tailPdf:this.wizardData.customise.tailPdf},gridRows:v.getSelectedProducts()};n.querySelectorAll("button").forEach(f=>f.disabled=!0),a.textContent="Saving...";try{let f;if(l==="save-update"){const m=de.getCurrentSelectionId();f=await de.updateSelection(m,h)}else f=await de.saveSelection(h);n.remove(),f.success?this.showToast(l==="save-update"?"Selection updated!":"Selection saved!"):this.showToast("Failed to save: "+(f.error||"Unknown error"),"error")}catch(f){n.remove(),this.showToast("Failed to save: "+f.message,"error")}})}),n.addEventListener("click",a=>{a.target===n&&n.remove()});const c=a=>{a.key==="Escape"&&(n.remove(),document.removeEventListener("keydown",c))};document.addEventListener("keydown",c)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){H.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){console.log("📂 Opening load picker...");try{rt.show(t=>{console.log("✅ Selection loaded:",t);try{const o=JSON.parse(localStorage.getItem("customerDetails")||"{}");this.wizardData.customer.name=o.name||"",this.wizardData.customer.email=o.email||"",this.wizardData.customer.phone=o.phone||"",this.wizardData.customer.project=o.project||"",this.wizardData.customer.address=o.address||"";const s=JSON.parse(localStorage.getItem("pdfSettings")||"{}");s.showRrp!==void 0&&(this.wizardData.options.showRrp=s.showRrp),s.includeGst!==void 0&&(this.wizardData.options.includeGst=s.includeGst),s.noPricing!==void 0&&(this.wizardData.options.noPricing=s.noPricing),s.noQty!==void 0&&(this.wizardData.options.noQty=s.noQty),s.includeDescriptions!==void 0&&(this.wizardData.options.includeDescriptions=s.includeDescriptions),s.includeNotes!==void 0&&(this.wizardData.options.includeNotes=s.includeNotes),s.tipPdf&&(this.wizardData.customise.tipPdf=s.tipPdf),s.tailPdf&&(this.wizardData.customise.tailPdf=s.tailPdf),this.populateForm(),this.showToast(`Loaded ${t.productCount} products`)}catch(o){console.warn("Could not reload wizard data:",o)}})}catch(t){console.error("❌ Failed to open load picker:",t),this.showToast("Failed to open picker: "+t.message,"error")}}showToast(e,t="success"){const o=document.createElement("div");o.style.cssText=`
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
    `,o.textContent=e,document.body.appendChild(o),setTimeout(()=>{o.style.animation="toast-out 0.3s ease",setTimeout(()=>o.remove(),300)},3e3)}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const eo=new Zt;class to{constructor(){this.container=null,this.toasts=new Map,this.nextId=1,this.init()}init(){document.getElementById("toast-container")?this.container=document.getElementById("toast-container"):(this.container=document.createElement("div"),this.container.id="toast-container",this.container.className="toast-container",document.body.appendChild(this.container))}show({message:e,type:t="info",duration:o=4e3,action:s=null}){const n=this.nextId++,i=document.createElement("div");i.className=`toast toast-${t}`,i.setAttribute("role","alert"),i.setAttribute("aria-live","polite");const r={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};i.innerHTML=`
      <div class="toast-icon">${r[t]||r.info}</div>
      <div class="toast-content">
        <span class="toast-message">${e}</span>
        ${s?`<button class="toast-action" type="button">${s.label}</button>`:""}
      </div>
      <button class="toast-close" type="button" aria-label="Dismiss">×</button>
    `;const c=i.querySelector(".toast-close");if(c.onclick=()=>this.dismiss(n),s&&s.callback){const a=i.querySelector(".toast-action");a.onclick=()=>{s.callback(),this.dismiss(n)}}return this.container.appendChild(i),this.toasts.set(n,i),requestAnimationFrame(()=>{i.classList.add("toast-enter")}),o>0&&setTimeout(()=>this.dismiss(n),o),n}dismiss(e){const t=this.toasts.get(e);t&&(t.classList.add("toast-exit"),t.addEventListener("animationend",()=>{t.remove(),this.toasts.delete(e)}))}dismissAll(){this.toasts.forEach((e,t)=>this.dismiss(t))}success(e,t={}){return this.show({message:e,type:"success",...t})}error(e,t={}){return this.show({message:e,type:"error",duration:6e3,...t})}warning(e,t={}){return this.show({message:e,type:"warning",...t})}info(e,t={}){return this.show({message:e,type:"info",...t})}withUndo(e,t,o=5e3){return this.show({message:e,type:"info",duration:o,action:{label:"Undo",callback:t}})}}const re=new to;window.toast=re;class oo{constructor(){this.activeDropdown=null,this.updatePositionHandler=null,document.addEventListener("click",e=>{e.target.closest(".global-search-dropdown")||this.hideDropdown()})}showDropdown(e,t,o,s=!1){this.hideDropdown();const n=document.createElement("ul");n.className="global-search-dropdown";const i=300,r=e.getBoundingClientRect(),c=window.innerWidth,a=window.innerHeight,l=r.width,d=a-r.bottom,p=r.top;let h=!1;d<i&&p>d&&(h=!0);let f;h?f=Math.max(8,r.top-i-8):f=Math.min(a-i-8,r.bottom+8);let m=r.left;m+l>c-8&&(m=c-l-8),m<8&&(m=8);const y={position:"fixed",top:`${f}px`,left:`${m}px`,width:`${l}px`,minWidth:`${l}px`,maxWidth:`${l}px`,background:"#fff",border:"1px solid #d1d5db",borderRadius:"8px",boxShadow:"0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",maxHeight:`${i}px`,overflowY:"auto",overflowX:"hidden",zIndex:"10010",listStyle:"none",margin:"0",padding:"4px 0",whiteSpace:"normal",wordWrap:"break-word",display:"block",pointerEvents:"auto",transform:"none",contain:"none",isolation:"isolate"};Object.keys(y).forEach(g=>{n.style.setProperty(g,y[g],"important")}),n.dropdownHeight=i,t.length===0?n.innerHTML='<li style="padding: 12px 16px; color: #6b7280; font-style: italic; background: #fff;">No products found</li>':n.innerHTML=t.map(g=>{if(g._crosshairValidate){const _=g._crosshairValidate,Z=_.imageUrl?`<img src="${E.sanitizeInput(_.imageUrl)}" alt="" style="width:32px; height:32px; object-fit:contain; border-radius:4px; margin-right:10px; vertical-align:middle; flex-shrink:0;">`:"";return`<li data-validate-competitor="${E.sanitizeInput(_.competitor)}" data-validate-code="${E.sanitizeInput(_.productCode)}"
                       style="padding: 10px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6;
                              font-size: 13px; line-height: 1.4; display: flex; align-items: center;
                              background: #fffbeb !important; border-left: 3px solid #f59e0b;">
            ${Z}
            <div style="flex:1; min-width:0;">
              <div style="font-weight: 600; color: #92400e;">${E.sanitizeInput(_.productName)}</div>
              <div style="color: #78716c; font-size: 11px;">${E.sanitizeInput(_.competitor)} · #${E.sanitizeInput(_.productCode)}${_.finish?" · "+E.sanitizeInput(_.finish):""} · ${_.matchCount} suggested match${_.matchCount!==1?"es":""}</div>
            </div>
            <span style="color: #d97706; font-size: 11px; font-weight: 600; white-space: nowrap; margin-left: 8px;">Review →</span>
          </li>`}const S=g.OrderCode||g.Code||"",w=g.Description||g.ProductName||g["Product Name"]||"",b=g.Image_URL||g.image_url||"",x=g._crosshairMatch,k=x?`<span style="display: inline-block; background: ${x.status==="Verified"?"#e8f5e9":"#e3f2fd"}; color: ${x.status==="Verified"?"#2e7d32":"#1565c0"}; font-size: 10px; font-weight: 600; padding: 1px 6px; border-radius: 8px; margin-left: 8px;">↔ ${E.sanitizeInput(x.competitorLabel||x.competitor)}</span>`:"",P=b?`<img src="${E.sanitizeInput(b)}" alt="" style="width:36px; height:36px; object-fit:contain; border-radius:4px; margin-right:10px; flex-shrink:0;" onerror="this.style.display='none'">`:"",z=x?Object.fromEntries(Object.entries(g).filter(([_])=>_!=="_crosshairMatch")):g;return`<li data-product='${JSON.stringify(z).replace(/'/g,"&apos;")}'
                     style="padding: 8px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; 
                            transition: background-color 0.15s ease; font-size: 14px; line-height: 1.5;
                            margin: 0; display: flex; align-items: center; width: 100%; 
                            white-space: normal; word-wrap: break-word; overflow: visible; background: ${x?"#f0f7ff":"#fff"} !important;">
          ${P}
          <div style="flex:1; min-width:0;">
            <span style="font-weight: 600; color: #2563eb;">${E.sanitizeInput(S)}</span>
            <span style="color: #6b7280; margin: 0 8px;">—</span>
            <span style="color: #374151;">${E.sanitizeInput(w)}</span>
            ${k}
          </div>
        </li>`}).join(""),n.querySelectorAll("li[data-validate-competitor]").forEach(g=>{g.addEventListener("mouseenter",()=>g.style.background="#fef3c7"),g.addEventListener("mouseleave",()=>g.style.background="#fffbeb"),g.onclick=()=>{const S=g.dataset.validateCompetitor,w=g.dataset.validateCode;window.location.href=`screens/validator.html?competitor=${encodeURIComponent(S)}&search=${encodeURIComponent(w)}`}}),n.querySelectorAll("li[data-product]").forEach((g,S)=>{g.addEventListener("mouseenter",()=>{n.querySelectorAll("li.active").forEach(w=>w.classList.remove("active")),g.classList.add("hover")}),g.addEventListener("mouseleave",()=>{g.classList.remove("hover")}),g.onclick=()=>{try{const w=JSON.parse(g.getAttribute("data-product"));o(w),this.hideDropdown()}catch(w){console.error("Failed to parse product data:",w)}},s&&S===0&&(g.classList.add("active"),g.style.setProperty("background","rgba(184,115,51,0.12)","important"))}),document.body.appendChild(n),this.activeDropdown=n,this.updatePositionHandler=()=>{const g=e.getBoundingClientRect(),S=window.innerHeight,w=n.dropdownHeight||300,b=S-g.bottom,x=g.top;let k=!1;b<w&&x>b&&(k=!0);let P;k?P=Math.max(8,g.top-w-8):P=Math.min(S-w-8,g.bottom+8);let z=g.left;z+g.width>c-8&&(z=c-g.width-8),z<8&&(z=8),n.style.setProperty("top",`${P}px`,"important"),n.style.setProperty("left",`${z}px`,"important"),n.style.setProperty("width",`${g.width}px`,"important"),n.style.setProperty("min-width",`${g.width}px`,"important"),n.style.setProperty("max-width",`${g.width}px`,"important")},window.addEventListener("scroll",this.updatePositionHandler),window.addEventListener("resize",this.updatePositionHandler)}hideDropdown(){this.activeDropdown&&(this.updatePositionHandler&&(window.removeEventListener("scroll",this.updatePositionHandler),window.removeEventListener("resize",this.updatePositionHandler)),this.activeDropdown.remove(),this.activeDropdown=null,this.updatePositionHandler=null)}}const Fe="tipTailSettings",Me="customerLogo";class so{constructor(){this.gridRows=[],this.nextRowId=1,this.currentSearchRow=null,this.searchCache=new Map,this.searchTimeout=null,this.dropdownManager=new oo,this.lastUsedRoom="Blank",this.draggedRowId=null,this.draggedRoomName=null,this.customRoomOrder=this.loadCustomRoomOrder(),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.autoSaveTimeout=null,this.lastSaveTime=null}loadCustomRoomOrder(){try{const e=localStorage.getItem("customRoomOrder");return e?JSON.parse(e):[]}catch{return[]}}saveCustomRoomOrder(){try{localStorage.setItem("customRoomOrder",JSON.stringify(this.customRoomOrder))}catch(e){console.warn("Failed to save room order:",e)}}init(){const e=document.querySelector(".grid-table");e&&(e.style.removeProperty("table-layout"),e.style.removeProperty("overflow"),e.classList.remove("has-open-dropdown"));const t=document.querySelector(".global-search-dropdown");t&&t.remove(),this.setupEventListeners(),this.updateAllRoomDropdowns(),this.loadExistingProducts(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.handleSortChange(),this.initContextHeader(),this.checkForRecentSelection()}initContextHeader(){this.updateContextHeader();const e=document.getElementById("save-selection-btn"),t=document.getElementById("load-selection-btn");e&&e.addEventListener("click",()=>this.showSaveDialog()),t&&t.addEventListener("click",()=>this.showLoadPicker());const o=document.getElementById("entry-import"),s=document.getElementById("entry-load"),n=document.getElementById("entry-new"),i=document.getElementById("entry-continue");o&&o.addEventListener("click",()=>this.showImportModal()),s&&s.addEventListener("click",()=>this.showLoadPicker()),n&&n.addEventListener("click",()=>this.addEmptyRow()),i&&i.addEventListener("click",()=>this.loadRecentSelection())}updateContextHeader(){const e=document.getElementById("selection-name"),t=document.getElementById("status-icon"),o=document.getElementById("save-indicator");e&&(e.textContent=this.currentSelectionName||"New Selection"),t&&(this.currentSelectionId?(t.textContent="●",t.classList.add("saved"),t.classList.remove("unsaved")):(t.textContent="○",t.classList.remove("saved"))),o&&(o.style.display=this.hasUnsavedChanges?"flex":"none")}markAsChanged(){this.hasUnsavedChanges=!0,this.updateContextHeader(),clearTimeout(this.autoSaveTimeout),this.autoSaveTimeout=setTimeout(()=>{this.hasUnsavedChanges&&this.currentSelectionId&&this.autoSave()},3e4)}async autoSave(){if(!(!this.currentSelectionId||!this.hasUnsavedChanges))try{const e=this.prepareSelectionData();(await de.updateSelection(this.currentSelectionId,e)).success&&(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),re.success("Auto-saved"))}catch(e){console.warn("Auto-save failed:",e)}}async checkForRecentSelection(){try{const e=v.getUserSettings(),t=O.getCurrentUser();if(!((e==null?void 0:e.staffEmail)||(t==null?void 0:t.email)||""))return;const s=await le.fetchSelections();if(s.length>0){const n=s[0],i=document.getElementById("entry-continue"),r=document.getElementById("recent-selection-name");i&&r&&(i.style.display="flex",r.textContent=`${n.documentName||n.customerName} • ${n.date}`,i.dataset.selectionId=n.id)}}catch(e){console.warn("Could not check for recent selections:",e)}}async loadRecentSelection(){const e=document.getElementById("entry-continue");if(!(e==null?void 0:e.dataset.selectionId)){re.warning("No recent selection found");return}this.showLoadPicker()}prepareSelectionData(){const e=E.getStorageItem("pdfFormSettings",{});return{customerName:e.name||"",customerEmail:e.email||"",customerPhone:e.telephone||"",customerProject:e.project||"",customerAddress:e.address||"",documentName:this.currentSelectionName,notes:"",pdfSettings:E.getStorageItem("pdfWizardSettings",{}),gridRows:v.getSelectedProducts(),roomOrder:this.customRoomOrder}}setupEventListeners(){const e=document.getElementById("back-to-home"),t=document.getElementById("import-file-btn"),o=document.getElementById("download-btn"),s=document.getElementById("clear-all-btn"),n=document.getElementById("add-row-btn");e&&(e.onclick=()=>location.reload()),t&&(t.onclick=()=>this.showImportModal()),o&&(o.onclick=()=>this.showDownloadModal()),s&&(s.onclick=()=>this.showClearAllModal()),n&&(n.onclick=()=>this.addEmptyRow());const i=document.getElementById("clear-all-cancel"),r=document.getElementById("clear-all-confirm");i&&(i.onclick=()=>this.hideClearAllModal()),r&&(r.onclick=()=>{var g;const y=((g=document.getElementById("clear-customer-details"))==null?void 0:g.checked)??!0;this.clearAll(y),this.hideClearAllModal()});const c=document.getElementById("clear-all-modal");c&&(c.onclick=y=>{y.target===c&&this.hideClearAllModal()});const a=document.getElementById("sort-by");a&&(a.onchange=()=>this.handleSortChange());const l=document.getElementById("sort-refresh-btn");l&&(l.onclick=()=>this.handleSortChange());const d=document.getElementById("grid-body");d&&(d.addEventListener("input",this.handleGridInput.bind(this)),d.addEventListener("change",this.handleGridChange.bind(this)),d.addEventListener("click",this.handleGridClick.bind(this)),d.addEventListener("keydown",this.handleGridKeydown.bind(this)),d.addEventListener("focusin",this.handleGridFocusIn.bind(this)),d.addEventListener("focusout",this.handleGridFocusOut.bind(this)),d.addEventListener("dragstart",this.handleDragStart.bind(this)),d.addEventListener("dragover",this.handleDragOver.bind(this)),d.addEventListener("dragleave",this.handleDragLeave.bind(this)),d.addEventListener("drop",this.handleDrop.bind(this)),d.addEventListener("dragend",this.handleDragEnd.bind(this))),document.addEventListener("click",y=>{!y.target.closest(".grid-product-cell")&&!y.target.closest(".global-search-dropdown")&&this.hideAllDropdowns()});const p=document.getElementById("pdf-email-modal"),h=document.getElementById("pdf-email-cancel");h&&p&&(h.onclick=()=>{p.style.display="none"});const f="pdfFormSettings",m=document.getElementById("pdf-email-form");p&&p.addEventListener("show",()=>{const y=E.getStorageItem(f,{});m&&(m["user-name"].value=y.name||"",m["user-project"].value=y.project||"",m["user-address"].value=y.address||"",m["user-email"].value=y.email||"",m["user-telephone"].value=y.telephone||"",m["exclude-prices"].checked=!!y.excludePrices,m["exclude-qty"].checked=!!y.excludeQty,m["exclude-long-description"].checked=!!y.excludeLongDescription,m["include-gst"].checked=!!y.includeGst)}),m&&(m.addEventListener("input",()=>{E.setStorageItem(f,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked})}),m.addEventListener("change",()=>{E.setStorageItem(f,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked})}),m.onsubmit=y=>{var S,w,b,x,k,P,z,_,Z,N,ce;y.preventDefault(),E.setStorageItem(f,{name:m["user-name"].value,project:m["user-project"].value,address:m["user-address"].value,email:m["user-email"].value,telephone:m["user-telephone"].value,excludePrices:m["exclude-prices"].checked,excludeQty:m["exclude-qty"].checked,excludeLongDescription:m["exclude-long-description"].checked,includeGst:m["include-gst"].checked});const g={name:((S=m["user-name"])==null?void 0:S.value)||"",project:((w=m["user-project"])==null?void 0:w.value)||"",address:((b=m["user-address"])==null?void 0:b.value)||"",email:((x=m["user-email"])==null?void 0:x.value)||"",telephone:((k=m["user-telephone"])==null?void 0:k.value)||"",excludePrice:(P=m["exclude-qty"])!=null&&P.checked?!0:((z=m["exclude-price"])==null?void 0:z.checked)||((_=m["exclude-prices"])==null?void 0:_.checked)||!1,excludeQty:((Z=m["exclude-qty"])==null?void 0:Z.checked)||!1,excludeLongDescription:((N=m["exclude-long-description"])==null?void 0:N.checked)||!1,includeGst:((ce=m["include-gst"])==null?void 0:ce.checked)||!1,exportCsv:!0};console.log("DEBUG: userDetails created for PDF:",g),window.showPdfFormScreen?window.showPdfFormScreen(g):typeof showPdfFormScreen=="function"&&showPdfFormScreen(g),p&&(p.style.display="none")})}addEmptyRow(){const e=`row_${this.nextRowId++}`,t={id:e,product:null,room:"Blank",quantity:1,price:"0.00",notes:""};this.gridRows.push(t),this.renderGrid(),setTimeout(()=>{const o=document.querySelector(`[data-row-id="${e}"]`);o&&(o.scrollIntoView({behavior:"smooth",block:"center"}),o.style.backgroundColor="#dbeafe",o.style.transition="background-color 0.3s ease",setTimeout(()=>{o.style.backgroundColor="";const s=o.querySelector(".grid-search-input");s&&s.focus()},800))},100)}removeRow(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t!==-1){const o=this.gridRows[t],s={...o,index:t,product:o.product?{...o.product}:null};if(o.product&&o.storageId&&v.removeProductFromSelection(o.storageId),this.gridRows.splice(t,1),this.renderGrid(),this.updateTotals(),s.product){const n=s.product.Description||s.product.ProductName||s.product.OrderCode||"Product",i=n.length>30?n.substring(0,30)+"...":n;re.withUndo(`Removed "${i}"`,()=>{this.restoreRow(s)})}}this.ensureAtLeastOneEmptyRow()}restoreRow(e){const t={id:`row-${this.nextRowId++}`,product:e.product,qty:e.qty||1,notes:e.notes||"",room:e.room||"Blank",price:e.price||null,storageId:null};t.product&&(t.storageId=v.addProductToSelection({...t.product,qty:t.qty,notes:t.notes,room:t.room,customPrice:t.price}));const o=Math.min(e.index,this.gridRows.length);this.gridRows.splice(o,0,t),this.renderGrid(),this.updateTotals(),re.success("Product restored")}moveRow(e,t){const o=this.gridRows.findIndex(i=>i.id===e);if(o===-1)return;let s;if(t==="up"?s=Math.max(0,o-1):t==="down"&&(s=Math.min(this.gridRows.length-1,o+1)),s===o)return;const n=this.gridRows.splice(o,1)[0];this.gridRows.splice(s,0,n),this.renderGrid(),this.updateTotals(),setTimeout(()=>{const i=document.querySelector(`[data-row-id="${e}"]`);i&&(i.style.backgroundColor="#dbeafe",setTimeout(()=>{i.style.backgroundColor=""},500))},100)}async handleProductSearch(e,t){if(!t||t.length<2){this.hideSearchDropdown(e);return}const o=t.toLowerCase();if(this.searchCache.has(o)){this.showSearchResults(e,this.searchCache.get(o),t);return}clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(async()=>{try{const s=await this.searchProducts(t);this.searchCache.set(o,s),this.showSearchResults(e,s,t)}catch(s){console.error("Product search failed:",s),this.hideSearchDropdown(e)}},300)}async searchProducts(e){var a;D.isLoaded||await new Promise(l=>{const d=()=>{D.isLoaded?l():setTimeout(d,100)};d()});const t=B.isEnabled(),o=B.isWriteEnabled();let s=null;if(t&&e.trim().length>=2&&!e.includes(" "))try{s=await B.findSeimaMatches(e.trim())}catch{}const[n,i,r]=await Promise.all([Promise.resolve(D.searchProducts(e,50)),t?B.findAlternatives(e).catch(l=>(console.warn("Crosshair competitor lookup failed:",l),[])):Promise.resolve([]),o?B.findUnvalidatedProducts(e).catch(l=>(console.warn("Crosshair unvalidated lookup failed:",l),[])):Promise.resolve([])]),c=[...n];if(s&&((a=s.matches)==null?void 0:a.length)>0){const l=String(s.matches[0].SeimaSKU),d=D.findProductByCode(l);if(d&&!c.some(p=>(p.OrderCode||p.Code)===l)){const p=s.competitorProduct,h=String((p==null?void 0:p.product_code)||s.matches[0].CompetitorSKU||""),f=(p==null?void 0:p.product_name)||"",m=(p==null?void 0:p.finish)||"",y=[s.competitor+":",h,f?"- "+f:"",m?"- "+m:""].filter(Boolean).join(" ");c.unshift({...d,_crosshairMatch:{competitor:s.competitor,competitorProduct:p,competitorLabel:y,confidence:s.matches[0].Confidence,reason:s.matches[0].MatchReason,status:s.matches[0].Status}})}}if(i.length>0){const l=new Set(c.map(d=>d.OrderCode));for(const d of i){const p=D.findProductByCode(d.seimaSKU);if(!p||l.has(p.OrderCode))continue;l.add(p.OrderCode);const h=d.competitorProduct,f=String((h==null?void 0:h.product_code)||d.match.CompetitorSKU||""),m=(h==null?void 0:h.product_name)||"",y=(h==null?void 0:h.finish)||"",g=[d.competitor+":",f,m?"- "+m:"",y?"- "+y:""].filter(Boolean).join(" ");c.unshift({...p,_crosshairMatch:{competitor:d.competitor,competitorProduct:h,competitorLabel:g,confidence:d.match.Confidence,reason:d.match.MatchReason,status:d.match.Status}})}}if(r.length>0)for(const l of r){const d=l.product,p=String(d.product_code||"");c.push({_crosshairValidate:{competitor:l.competitor,productCode:p,productName:d.product_name||d.collection||p,matchCount:l.matchCount,imageUrl:d.image_url,finish:d.finish||""}})}return c}showSearchResults(e,t,o){let s=!1;if(t.length>0&&o){const n=o.toUpperCase().trim(),i=t[0],r=(i.OrderCode||"").toString().toUpperCase().trim(),c=(i.BARCODE||i.Barcode||"").toString().toUpperCase().trim();(r===n||c===n)&&(s=!0)}this.dropdownManager.showDropdown(e,t,n=>this.selectProduct(e,n),s)}setupDropdownEvents(e,t){}hideSearchDropdown(e){this.hideGlobalDropdown()}hideGlobalDropdown(){this.dropdownManager.hideDropdown()}selectProduct(e,t){var c;const o=e.closest(".grid-row"),s=o.dataset.rowId,n=this.gridRows.find(a=>a.id===s);if(!n)return;n.storageId&&((c=n.product)!=null&&c._placeholder)&&(v.removeProductFromSelection(n.storageId),n.storageId=null),n.product=t;const i=t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.RRP_EXGST||t.rrpExGst||t.RRP_INCGST||t.RRP_INCGST||t["RRP INC GST"]||t.rrpIncGst||"";n.price=i;const r=o.querySelector('input[name="price"]');r&&(r.value=i),e.value="",this.renderGrid(),this.saveRowToStorage(n),this.focusNextRowOrCreate(s)}saveRowToStorage(e){if(!e.product)return;const t={...e.product,OrderCode:e.product.OrderCode||e.product.Code||"",Description:e.product.Description||e.product.ProductName||e.product["Product Name"]||"",UserEditedPrice:e.price,RRP_EX:e.product.RRP_EX||e.product["RRP EX GST"]||e.product.RRP_EX||e.product.RRP_EXGST||e.product.rrpExGst||"0",RRP_INCGST:e.product.RRP_INCGST||e.product["RRP INC GST"]||e.product.rrpIncGst||"0",Image_URL:e.product.Image_URL||e.product.imageUrl||e.product.Image||"assets/no-image.png"},o=v.addProductToSelection(t,e.notes,e.room,e.quantity);o&&(e.storageId=o,this.updateTotals())}focusNextRowOrCreate(e){const t=this.gridRows.findIndex(o=>o.id===e);if(t<this.gridRows.length-1){const o=this.gridRows[t+1];setTimeout(()=>{const s=document.querySelector(`[data-row-id="${o.id}"] .grid-search-input`);s&&!s.classList.contains("populated")&&s.focus()},100)}else this.addEmptyRow()}handleGridInput(e){const t=e.target;t.classList.contains("grid-search-input")&&!t.classList.contains("populated")?this.handleProductSearch(t,t.value):(t.classList.contains("grid-input")||t.classList.contains("grid-textarea")||t.classList.contains("grid-select"))&&this.updateRowFromInput(t)}handleGridChange(e){const t=e.target;(t.classList.contains("grid-select")||t.classList.contains("grid-input")||t.classList.contains("grid-textarea"))&&this.updateRowFromInput(t)}handleGridClick(e){var s;const t=e.target,o=t.closest(".grid-competitor-code-link");if(o){e.preventDefault();const n=o.dataset.competitor,i=o.dataset.code,r=o.closest(".grid-row"),c=(s=r==null?void 0:r.dataset)==null?void 0:s.rowId;n&&i&&this.openValidatorModal(n,i,c);return}if(t.classList.contains("grid-remove-btn")){const i=t.closest(".grid-row").dataset.rowId;this.removeRow(i)}else if(t.classList.contains("grid-move-btn")){const i=t.closest(".grid-row").dataset.rowId,r=t.dataset.direction;this.moveRow(i,r)}else t.closest(".grid-search-dropdown")||document.querySelectorAll(".grid-search-dropdown.visible").forEach(n=>{n.classList.remove("visible")})}handleGridKeydown(e){if(e.target.classList.contains("grid-search-input")){const t=document.querySelector(".global-search-dropdown");t?this.handleDropdownKeyboard(e,t):e.key==="Enter"&&(e.preventDefault(),this.handleProductSearch(e.target,e.target.value))}}handleDropdownKeyboard(e,t){const o=document.querySelector(".global-search-dropdown");if(!o)return;const s=o.querySelectorAll("li[data-product]"),n=o.querySelector("li.active");let i=null;const r=(c,a)=>{a?(c.dataset.origBg||(c.dataset.origBg=c.style.background||"#fff"),c.classList.add("active"),c.style.setProperty("background","rgba(184,115,51,0.12)","important")):(c.classList.remove("active"),c.style.setProperty("background",c.dataset.origBg||"#fff","important"))};switch(e.key){case"ArrowDown":if(e.preventDefault(),!n)i=s[0];else{r(n,!1);const a=(Array.from(s).indexOf(n)+1)%s.length;i=s[a]}i&&(r(i,!0),i.scrollIntoView({block:"nearest"}));break;case"ArrowUp":if(e.preventDefault(),!n)i=s[s.length-1];else{r(n,!1);const c=Array.from(s).indexOf(n),a=c===0?s.length-1:c-1;i=s[a]}i&&(r(i,!0),i.scrollIntoView({block:"nearest"}));break;case"Enter":e.preventDefault(),n&&n.click();break;case"Escape":e.preventDefault(),this.hideGlobalDropdown();break}}handleGridFocusIn(e){}handleGridFocusOut(e){}handleDragStart(e){const t=e.target.closest(".grid-row");if(!t){e.preventDefault();return}if(t.classList.contains("room-header-row")){const o=t.dataset.roomName;if(o==="Blank"){e.preventDefault();return}if(this.draggedRoomName=o,this.draggedRowId=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",`room:${o}`),t.classList.add("dragging"),e.dataTransfer.setDragImage){const s=document.createElement("div");s.textContent=`📁 ${o}`,s.style.cssText=`
          position: absolute; top: -1000px; padding: 8px 16px;
          background: #374151; color: white; border-radius: 6px;
          font-weight: 600; font-size: 14px;
        `,document.body.appendChild(s),e.dataTransfer.setDragImage(s,0,15),setTimeout(()=>s.remove(),0)}return}if(!e.target.classList.contains("grid-drag-handle")){e.preventDefault();return}if(this.draggedRowId=t.dataset.rowId,this.draggedRoomName=null,e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.dataset.rowId),t.classList.add("dragging"),e.dataTransfer.setDragImage){const o=t.cloneNode(!0);o.style.opacity="0.8",o.style.position="absolute",o.style.top="-1000px",o.style.width=t.offsetWidth+"px",document.body.appendChild(o),e.dataTransfer.setDragImage(o,t.offsetWidth-10,20),setTimeout(()=>o.remove(),0)}}handleDragOver(e){e.preventDefault(),e.dataTransfer.dropEffect="move";const t=e.target.closest(".grid-row");if(!t||t.classList.contains("dragging"))return;if(document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(n=>{n.classList.remove("drag-over-above","drag-over-below")}),this.draggedRoomName){if(!t.classList.contains("room-header-row")||t.dataset.roomName==="Blank"||t.dataset.roomName===this.draggedRoomName)return;const n=t.getBoundingClientRect(),i=n.top+n.height/2;e.clientY<i?t.classList.add("drag-over-above"):t.classList.add("drag-over-below");return}if(t.classList.contains("room-header-row"))return;const o=t.getBoundingClientRect(),s=o.top+o.height/2;e.clientY<s?t.classList.add("drag-over-above"):t.classList.add("drag-over-below")}handleDragLeave(e){const t=e.target.closest(".grid-row");if(t){const o=e.relatedTarget;t.contains(o)||t.classList.remove("drag-over-above","drag-over-below")}}handleDrop(e){e.preventDefault(),document.querySelectorAll(".grid-row.drag-over-above, .grid-row.drag-over-below").forEach(h=>{h.classList.remove("drag-over-above","drag-over-below")});const t=e.dataTransfer.getData("text/plain"),o=e.target.closest(".grid-row");if(!o||!t)return;if(t.startsWith("room:")){const h=t.replace("room:","");if(!o.classList.contains("room-header-row"))return;const f=o.dataset.roomName;if(f==="Blank"||h===f)return;const m=o.getBoundingClientRect(),y=e.clientY<m.top+m.height/2;this.moveRoomInOrder(h,f,y),this.renderGrid();return}const s=t;if(o.classList.contains("room-header-row"))return;const n=o.dataset.rowId;if(s===n)return;const i=o.getBoundingClientRect(),r=e.clientY<i.top+i.height/2,c=this.gridRows.findIndex(h=>h.id===s),a=this.gridRows.findIndex(h=>h.id===n);if(c===-1||a===-1)return;const l=this.gridRows[c],d=this.gridRows[a];l.room!==d.room&&(l.room=d.room,this.lastUsedRoom=d.room,l.product&&l.storageId&&v.updateProductRoom(l.storageId,l.room)),this.gridRows.splice(c,1);let p=this.gridRows.findIndex(h=>h.id===n);p!==-1&&(r||p++,this.gridRows.splice(p,0,l),this.renderGrid(),setTimeout(()=>{const h=document.querySelector(`[data-row-id="${s}"]`);h&&(h.style.backgroundColor="#dbeafe",h.style.transition="background-color 0.3s ease",setTimeout(()=>{h.style.backgroundColor=""},500))},50))}handleDragEnd(e){this.draggedRowId=null,this.draggedRoomName=null,document.querySelectorAll(".grid-row.dragging").forEach(t=>t.classList.remove("dragging")),document.querySelectorAll(".grid-row.drag-over-above").forEach(t=>t.classList.remove("drag-over-above")),document.querySelectorAll(".grid-row.drag-over-below").forEach(t=>t.classList.remove("drag-over-below"))}hideAllDropdowns(){this.hideGlobalDropdown()}showClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="flex")}hideClearAllModal(){const e=document.getElementById("clear-all-modal");e&&(e.style.display="none")}async showSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="flex",setTimeout(async()=>{const t=v.getUserSettings(),o=O.getCurrentUser(),s=document.getElementById("staff-name"),n=document.getElementById("staff-position"),i=document.getElementById("staff-email"),r=document.getElementById("staff-telephone"),c=document.getElementById("logged-in-profile-section"),a=document.getElementById("profile-avatar"),l=document.getElementById("profile-display-name"),d=document.getElementById("profile-display-email"),p=document.getElementById("edit-profile-btn");if(t&&(t.staffName||t.staffEmail)?(s&&(s.value=t.staffName||""),n&&(n.value=t.staffPosition||""),i&&(i.value=t.staffEmail||""),r&&(r.value=t.staffPhone||"")):o&&(s&&o.name&&(s.value=o.name),n&&o.position&&(n.value=o.position),i&&o.email&&(i.value=o.email),r&&o.phone&&(r.value=o.phone)),o){c&&(c.style.display="block"),l&&(l.textContent=o.name||""),d&&(d.textContent=o.email||""),a&&(a.textContent=this.getInitials(o.name)),p&&(p.onclick=()=>{H.showEditProfile(S=>{console.log("📱 Profile updated:",S),v.clearUserSettings(),this.showSettingsModal()})});const g=document.getElementById("change-password-btn");g&&(g.onclick=()=>{H.showChangePassword(()=>{console.log("📱 Password changed")})})}else c&&(c.style.display="none");const f=document.getElementById("settings-version-info");if(f)try{let S=(await(await fetch("./version.txt")).text()).trim();S=S.split(/\r?\n/)[0].replace(/[^0-9.v]/g,""),f.innerText=S?`v${S}`:"",f.title="App Version"}catch{f.innerText=""}const m=document.getElementById("refresh-catalog-btn");m&&(m.onclick=()=>{localStorage.removeItem("productCatalogCsv"),localStorage.removeItem("configPreferences"),localStorage.removeItem("pdfWizardSettings"),Object.keys(localStorage).filter(g=>g.startsWith("crosshair_")).forEach(g=>localStorage.removeItem(g)),window.location.reload()});const y=document.getElementById("refresh-pdf-files-btn");y&&(y.onclick=async()=>{await this.refreshPdfFileList();const g=y.textContent;y.textContent="✅ Refreshed!",y.style.background="#dcfce7",y.style.color="#059669",setTimeout(()=>{y.textContent=g,y.style.background="#f3f4f6",y.style.color="#059669"},2e3)}),this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()},0))}getInitials(e){if(!e)return"?";const t=e.trim().split(" ");return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():t[0][0].toUpperCase()}loadCustomerLogoPreview(){const e=document.getElementById("customer-logo-preview"),t=localStorage.getItem(Me);e&&(e.innerHTML=t?`<img src="${t}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`:"")}setupCustomerLogoHandlers(){const e=document.getElementById("customer-logo-upload"),t=document.getElementById("customer-logo-clear"),o=document.getElementById("customer-logo-preview");e.onchange=s=>{const n=s.target.files[0];if(n){const i=new FileReader;i.onload=r=>{localStorage.setItem(Me,r.target.result),o&&(o.innerHTML=`<img src="${r.target.result}" style="max-height:100px;max-width:180px;width:auto;height:auto;object-fit:contain;">`)},i.readAsDataURL(n)}},t.onclick=()=>{localStorage.removeItem(Me),o&&(o.innerHTML=""),e&&(e.value="")}}async populateTipTailDropdowns(){console.log("🔍 Discovering available PDF files...");const t=(await this.detectAvailablePdfFiles()).map(n=>`./assets/${n}`),o=document.getElementById("tip-pdf-select"),s=document.getElementById("tail-pdf-select");o&&s&&(o.innerHTML='<option value="">(None)</option>',s.innerHTML='<option value="">(None)</option>',t.forEach(n=>{const i=n.split("/").pop();o.innerHTML+=`<option value="${n}">${i}</option>`,s.innerHTML+=`<option value="${n}">${i}</option>`}))}async detectAvailablePdfFiles(){try{const o=await fetch("./assets-list");if(o.ok){const s=await o.json();return console.log("✅ Server provided files:",s),s}}catch{console.log("ℹ️ Server endpoint not available, trying assets-list.json...")}try{const o=await fetch("./assets-list.json");if(o.ok){const s=await o.json();return console.log("✅ assets-list.json provided files:",s),s}}catch{console.log("ℹ️ assets-list.json not available, using fallback list...")}const e=["tip-AandD.pdf","tip-Builder.pdf","tip-Merchant.pdf","tip-Volume Merchant.pdf","tail.pdf","tail-generic.pdf"];console.log("🔍 Testing individual file availability...");const t=[];for(const o of e)try{const s=await fetch(`./assets/${o}`,{method:"HEAD"});s.ok?(t.push(o),console.log(`✅ Found: ${o}`)):console.log(`❌ Not found: ${o} (${s.status})`)}catch(s){console.log(`❌ Error checking ${o}:`,s.message)}return console.log(`🎯 Dynamically detected PDF files (${t.length} found):`,t),t}async refreshPdfFileList(){console.log("🔄 Refreshing PDF file list..."),await this.populateTipTailDropdowns(),console.log("✅ PDF file list refreshed")}loadTipTailSelections(){const e=JSON.parse(localStorage.getItem(Fe)||"{}"),t=document.getElementById("tip-pdf-select"),o=document.getElementById("tail-pdf-select"),s=document.getElementById("tip-pdf-upload"),n=document.getElementById("tail-pdf-upload");t&&(e.tipUpload?(t.innerHTML='<option value="">Custom file selected</option>',t.value="",s&&(s.style.fontWeight="bold",s.style.color="#2563eb")):e.tipAsset&&(t.value=e.tipAsset)),o&&(e.tailUpload?(o.innerHTML='<option value="">Custom file selected</option>',o.value="",n&&(n.style.fontWeight="bold",n.style.color="#2563eb")):e.tailAsset&&(o.value=e.tailAsset))}setupTipTailHandlers(){const e=document.getElementById("tip-pdf-select"),t=document.getElementById("tail-pdf-select"),o=document.getElementById("tip-pdf-upload"),s=document.getElementById("tail-pdf-upload"),n=document.getElementById("tip-pdf-clear"),i=document.getElementById("tail-pdf-clear"),r=document.getElementById("tip-pdf-selected"),c=document.getElementById("tail-pdf-selected");e.onchange=()=>{this.saveTipTailSettings({tipAsset:e.value,tipUpload:null,tipUploadName:""}),r&&(r.textContent="")},t.onchange=()=>{this.saveTipTailSettings({tailAsset:t.value,tailUpload:null,tailUploadName:""}),c&&(c.textContent="")},o.onchange=a=>{const l=a.target.files[0];if(l){const d=new FileReader;d.onload=p=>{const h=p.target.result,f=new Uint8Array(h);let m="";for(let g=0;g<f.length;g++)m+=String.fromCharCode(f[g]);const y=btoa(m);this.saveTipTailSettings({tipAsset:"",tipUpload:y,tipUploadName:l.name}),e&&(e.value="",e.innerHTML='<option value="">Custom file selected</option>'),o&&(o.style.fontWeight="bold",o.style.color="#2563eb")},d.readAsArrayBuffer(l)}},s.onchange=a=>{const l=a.target.files[0];if(l){const d=new FileReader;d.onload=p=>{const h=p.target.result,f=new Uint8Array(h);let m="";for(let g=0;g<f.length;g++)m+=String.fromCharCode(f[g]);const y=btoa(m);this.saveTipTailSettings({tailAsset:"",tailUpload:y,tailUploadName:l.name}),t&&(t.value="",t.innerHTML='<option value="">Custom file selected</option>'),s&&(s.style.fontWeight="bold",s.style.color="#2563eb")},d.readAsArrayBuffer(l)}},n.onclick=async()=>{this.saveTipTailSettings({tipAsset:"",tipUpload:null,tipUploadName:""}),e&&(e.value="",e.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{e.innerHTML+=`<option value="assets/${l}">${l}</option>`})),o&&(o.value="",o.style.fontWeight="normal",o.style.color="")},i.onclick=async()=>{this.saveTipTailSettings({tailAsset:"",tailUpload:null,tailUploadName:""}),t&&(t.value="",t.innerHTML='<option value="">(None)</option>',(await this.detectAvailablePdfFiles()).forEach(l=>{t.innerHTML+=`<option value="assets/${l}">${l}</option>`})),s&&(s.value="",s.style.fontWeight="normal",s.style.color="")}}saveTipTailSettings(e){const o={...JSON.parse(localStorage.getItem(Fe)||"{}"),...e};localStorage.setItem(Fe,JSON.stringify(o))}hideSettingsModal(){const e=document.getElementById("settings-modal");e&&(e.style.display="none")}saveSettings(){var i,r,c,a;const e=((i=document.getElementById("staff-name"))==null?void 0:i.value)||"",t=((r=document.getElementById("staff-position"))==null?void 0:r.value)||"",o=((c=document.getElementById("staff-email"))==null?void 0:c.value)||"",s=((a=document.getElementById("staff-telephone"))==null?void 0:a.value)||"",n={staffName:e.trim(),staffPosition:t.trim(),staffEmail:o.trim(),staffPhone:s.trim()};v.saveUserSettings(n),this.hideSettingsModal(),console.log("Settings saved successfully:",n)}loadSettings(){const e=v.getUserSettings(),t=document.getElementById("staff-name"),o=document.getElementById("staff-position"),s=document.getElementById("staff-email"),n=document.getElementById("staff-telephone");t&&(t.value=e.staffName||""),o&&(o.value=e.staffPosition||""),s&&(s.value=e.staffEmail||""),n&&(n.value=e.staffPhone||"")}updateRowFromInput(e){const t=e.closest(".grid-row"),o=t.dataset.rowId,s=this.gridRows.find(i=>i.id===o);if(!s)return;let n=!1;if(e.classList.contains("grid-select")&&e.name==="room")if(e.value==="__ADD_NEW_ROOM__"){const i=prompt("Enter new room name:");if(i&&i.trim()){const r=i.trim();if(v.addCustomRoom(r))s.room=r,this.lastUsedRoom=r,console.log("✅ Added new room:",r),this.updateAllRoomDropdowns(),e.value=r;else{alert("Room name already exists or is invalid"),e.value=s.room||"Blank";return}}else{e.value=s.room||"Blank";return}}else s.room=e.value,this.lastUsedRoom=e.value;else e.classList.contains("grid-input")&&e.name==="quantity"?(s.quantity=Math.max(1,parseInt(e.value)||1),e.value=s.quantity,n=!0):e.classList.contains("grid-input")&&e.name==="price"?(s.price=e.value,n=!0):e.classList.contains("grid-textarea")&&e.name==="notes"&&(s.notes=e.value);n&&this.updateRowTotal(t,s),s.product&&s.storageId&&(v.updateProductQuantity(s.storageId,s.quantity),v.updateProductRoom(s.storageId,s.room),v.updateProductNotes(s.storageId,s.notes),n&&e.name==="price"&&v.updateProductPrice(s.storageId,s.price),this.updateTotals())}updateRowTotal(e,t){const o=e.querySelector(".grid-total-display");if(o){const s=parseFloat((t.price||"").toString().replace(/,/g,""))||0,n=parseInt(t.quantity)||1,i=s*n;o.textContent=i>0?i.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):""}}loadExistingProducts(){const e=v.getSelectedProducts();this.gridRows=[],this.nextRowId=1,e.forEach(t=>{var i,r,c,a,l,d,p,h,f,m;const o=`row_${this.nextRowId++}`;let s="";((i=t.product)==null?void 0:i.UserEditedPrice)!==void 0&&((r=t.product)==null?void 0:r.UserEditedPrice)!==null&&((c=t.product)==null?void 0:c.UserEditedPrice)!==""?s=t.product.UserEditedPrice:s=((a=t.product)==null?void 0:a.RRP_EX)||((l=t.product)==null?void 0:l["RRP EX GST"])||((d=t.product)==null?void 0:d.RRP_EX)||((p=t.product)==null?void 0:p.rrpExGst)||((h=t.product)==null?void 0:h.RRP_EXGST)||((f=t.product)==null?void 0:f.RRP_INCGST)||((m=t.product)==null?void 0:m["RRP INC GST"])||"";const n={id:o,product:t.product,room:t.room||"Blank",quantity:t.quantity||1,price:s,notes:t.notes||"",storageId:t.id};this.gridRows.push(n)}),this.renderGrid()}renderGrid(){const e=document.getElementById("grid-body"),t=document.getElementById("product-grid-empty"),o=document.getElementById("product-grid-container");if(!e)return;if(this.gridRows.length===0){o.style.display="none",t.style.display="block";return}t.style.display="none",o.style.display="block";const s=this.groupRowsByRoom(),n=[];Object.entries(s).forEach(([i,r])=>{const c=this.getRoomClass(i),l=!(i==="Blank"),d=`
        <div class="grid-row room-header-row ${c}" 
             data-room-name="${i}"
             ${l?'draggable="true"':""}>
          <div class="col-search room-header-cell" colspan="8">
            <div class="room-header-content">
              ${l?'<span class="room-drag-handle" title="Drag to reorder">⋮⋮</span>':""}
              <span class="room-name">${i}</span>
              <span class="room-count">(${r.length})</span>
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
      `;n.push(d),r.forEach(p=>{n.push(this.renderRowHtml(p))})}),e.innerHTML=n.join(""),this.attachSeimaMatchSuggestions()}extractCandidateCodes(e){if(!e||typeof e!="string")return[];const t=new Set,o=[],s=/(?:Code|Part\s*(?:No\.?|Number)|P\/N|Order\s*Code|SKU|Item\s*(?:No\.?|Number)?|#)\s*:?\s*([A-Za-z0-9]{4,14}(?:[.\-][A-Za-z0-9]{2,5})?)/gi;let n;for(;(n=s.exec(e))!==null;){const l=n[1].trim();l&&!t.has(l)&&(t.add(l),o.push(l))}const i=e.split(/\|/).map(l=>l.trim()),r=/^[A-Za-z0-9]{5,14}([.\-][A-Za-z0-9]{2,5})?$/,c=/\d/,a=new Set(["white","stainless","steel","black","grey","gray","chrome","brushed","matte","polished"]);for(const l of i){if(!r.test(l)||!c.test(l))continue;const d=l.toLowerCase();a.has(d)||t.has(l)||(t.add(l),o.push(l))}return o}escapeRegex(e){return String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}buildPlaceholderHintHtml(e,t){if(!e)return"";let o=E.sanitizeInput(e);if(t.length===0)return o;for(const{code:s,competitor:n,searchCode:i}of t){const r=this.escapeRegex(s),c="(?:(?:Code|Part\\s*(?:No\\.?|Number)|P\\/N|Order\\s*Code|SKU|Item\\s*(?:No\\.?|Number)?|#)\\s*:?\\s*)?",a=new RegExp("("+c+r+")","gi"),l=i??s,d=`<a href="#" class="grid-competitor-code-link" data-competitor="${E.sanitizeInput(n)}" data-code="${E.sanitizeInput(l)}" title="Review in Validator to link to Seima product">$1</a>`;o=o.replace(a,d)}return o}async attachSeimaMatchSuggestions(){var t,o,s;if(!B.isEnabled())return;const e=document.querySelectorAll(".grid-seima-match-wrap");for(const n of e){const i=n.dataset.rowId,r=this.gridRows.find(S=>S.id===i);if(!((t=r==null?void 0:r.product)!=null&&t._placeholder))continue;const c=r.product.Description||"",a=this.extractCandidateCodes(c);if(a.length===0)continue;const l=n.closest(".grid-product-cell"),d=l==null?void 0:l.querySelector(".grid-placeholder-hint"),p=[];for(const S of a)try{const w=await B.findCompetitorEntryByCode(S);if(w){const b=w.matchedCode??((o=w.competitorProduct)==null?void 0:o.product_code)??S;p.push({code:S,competitor:w.competitor,searchCode:b})}else console.log(`Crosshair: no competitor match for code "${S}" (row ${i})`)}catch{}if(d&&p.length>0&&(d.innerHTML=this.buildPlaceholderHintHtml(c,p)),!D.isLoaded)continue;let h=null,f="";for(const S of a)try{const w=await B.findSeimaMatches(S);if(((s=w==null?void 0:w.matches)==null?void 0:s.length)>0){const b=String(w.matches[0].SeimaSKU).trim(),x=D.findProductByCode(b);if(x){h=x;const P=(w.competitorProduct||{}).product_name||x.Description||"";f=`${w.competitor}: ${S} → ${b}${P?" – "+P:""}`;break}}}catch{}if(!h)continue;const m=document.createElement("button");m.type="button",m.className="grid-seima-match-btn";const y=(h.Description||"").trim(),g=y.length>45?y.slice(0,45)+"…":y;m.textContent=`Use Seima match: ${h.OrderCode||""} – ${g}`,m.title=f,m.addEventListener("click",()=>{const S=n.closest(".grid-row"),w=S==null?void 0:S.querySelector(".grid-search-input");w&&this.selectProduct(w,h)}),n.appendChild(m)}}async openValidatorModal(e,t,o){this.closeValidatorModal();const s=document.createElement("div");s.className="grid-validator-overlay";const n=document.createElement("div");n.className="grid-validator-modal",n.innerHTML=`
      <div class="gvm-header">
        <div class="gvm-title">Loading…</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-body"><div class="gvm-no-matches">Loading competitor data…</div></div>
    `,document.body.appendChild(s),document.body.appendChild(n);const i=()=>this.closeValidatorModal(o);n.querySelector(".gvm-close").addEventListener("click",i),s.addEventListener("click",i);const r=c=>{c.key==="Escape"&&i()};document.addEventListener("keydown",r),this._validatorModal={overlay:s,modal:n,escHandler:r,competitor:e,productCode:t};try{await B._ensureIndex();const c=await B.getMatches(e),l=(await B.getProducts(e)).find(m=>String(m.product_code)===String(t));if(!l){n.querySelector(".gvm-body").innerHTML=`<div class="gvm-no-matches">Product ${E.sanitizeInput(t)} not found in ${E.sanitizeInput(e)} data.</div>`;return}const d=c.filter(m=>String(m.CompetitorSKU)===String(t)).sort((m,y)=>(m.Rank||99)-(y.Rank||99)),p={Verified:0,Manual:1,Rejected:2,"AI-Suggested":3},h=new Map;for(const m of d){const y=String(m.SeimaSKU),g=h.get(y);(!g||(p[m.Status]??9)<(p[g.Status]??9))&&h.set(y,m)}const f=[...h.values()].sort((m,y)=>(m.Rank||99)-(y.Rank||99));this._renderValidatorModal(l,f,e)}catch(c){console.error("Validator modal load failed:",c),n.querySelector(".gvm-body").innerHTML='<div class="gvm-no-matches">Failed to load data. Check console.</div>'}}_renderValidatorModal(e,t,o){var d;const s=(d=this._validatorModal)==null?void 0:d.modal;if(!s)return;const n=e.product_name||e.product_code,i=e.image_url||e.Image||"",r=p=>E.sanitizeInput(p||"");s.querySelector(".gvm-title").textContent=`${n} — ${o}`;let c;t.length===0?c='<div class="gvm-no-matches">No Seima matches found. Use the search below to add one.</div>':c=t.map(p=>{const h=String(p.SeimaSKU||"").trim(),f=D.findProductByCode(h),m=(f==null?void 0:f.Description)||(f==null?void 0:f.ProductName)||h,y=(f==null?void 0:f.Image_URL)||(f==null?void 0:f.imageUrl)||"",g=(f==null?void 0:f.RRP_INCGST)||(f==null?void 0:f["RRP INC GST"])||"",S=g?`$${Number(g).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"",w=Number(p.Confidence)||0,b=w>=70?"high":w>=40?"med":"low",x=(p.Status||"").toLowerCase().replace(/[\s-]+/g,"-");let k;return p.Status==="Verified"||p.Status==="Manual"?k=`<span class="gvm-status-label gvm-status-verified">✓ Verified</span>
            <button class="gvm-btn gvm-btn-undo" data-action="reject" data-sku="${r(h)}">reject</button>`:p.Status==="Rejected"?k=`<span class="gvm-status-label gvm-status-rejected">✗ Rejected</span>
            <button class="gvm-btn gvm-btn-undo" data-action="verify" data-sku="${r(h)}">verify</button>`:k=`<button class="gvm-btn gvm-btn-verify" data-action="verify" data-sku="${r(h)}">✓ Verify</button>
            <button class="gvm-btn gvm-btn-reject" data-action="reject" data-sku="${r(h)}">✗ Reject</button>`,`<div class="gvm-match-card status-${x}" data-seima-sku="${r(h)}" style="cursor:pointer;">
          ${y?`<img src="${r(y)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:'<div class="gvm-match-img-placeholder">No img</div>'}
          <div class="gvm-match-info">
            <div class="gvm-match-name">${r(m)}</div>
            <div class="gvm-match-sku">${r(h)} <span class="gvm-badge gvm-badge-${b}">${w}%</span></div>
            ${p.MatchReason?`<div class="gvm-match-reason">${r(p.MatchReason)}</div>`:""}
          </div>
          <div class="gvm-match-price">${S}</div>
          <div class="gvm-match-actions">${k}</div>
        </div>`}).join("");const l=[["Code",e.product_code],["Brand",e.brand||o],["Category",[e.product_type,e.subcategory].filter(Boolean).join(" / ")],["Collection",e.collection],["Finish",e.finish||e.colour]].filter(([,p])=>p&&String(p).trim()).map(([p,h])=>`<tr><td>${r(p)}</td><td>${r(h)}</td></tr>`).join("");s.querySelector(".gvm-body").innerHTML=`
      <div class="gvm-layout">
        <div class="gvm-product-detail">
          ${i?`<img src="${r(i)}" alt="${r(n)}" class="gvm-product-img" onerror="this.style.display='none'">`:""}
          <table class="gvm-product-table">
            <tr><td>Name</td><td><strong>${r(n)}</strong></td></tr>
            ${l}
          </table>
          ${e.product_url?`<a href="${e.product_url}" target="_blank" style="font-size:0.75rem;color:#b87333;">View on website →</a>`:""}
        </div>
        <div class="gvm-matches-panel">
          <div class="gvm-section-title">Seima Alternatives (${t.length})</div>
          ${c}
          <div class="gvm-search-add">
            <div class="gvm-search-add-label">Add Seima Product</div>
            <input type="text" class="gvm-search-add-input" placeholder="Search Seima by name, code or range…">
            <div class="gvm-search-results"></div>
          </div>
        </div>
      </div>
    `,this._wireValidatorModalActions(e,t,o)}_wireValidatorModalActions(e,t,o){var c;const s=(c=this._validatorModal)==null?void 0:c.modal;if(!s)return;s.querySelectorAll(".gvm-match-card").forEach(a=>{a.addEventListener("click",l=>{if(l.target.closest(".gvm-btn"))return;const d=a.dataset.seimaSku;d&&this._showSeimaDetailInModal(d)})}),s.querySelectorAll(".gvm-btn-verify, .gvm-btn-reject, .gvm-btn-undo").forEach(a=>{a.addEventListener("click",async l=>{l.stopPropagation();const d=a.dataset.sku,p=a.dataset.action,h=p==="verify"?"Verified":"Rejected";a.disabled=!0,a.textContent="…";try{await B.updateMatch(o,String(e.product_code),d,h);const f=t.find(m=>String(m.SeimaSKU)===d);f&&(f.Status=h),this._renderValidatorModal(e,t,o)}catch(f){console.error("Match update failed:",f),a.disabled=!1,a.textContent=p==="verify"?"✓ Verify":"✗ Reject"}})});const n=s.querySelector(".gvm-search-add-input"),i=s.querySelector(".gvm-search-results");if(!n||!i)return;let r;n.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{this._renderValidatorSeimaSearch(n.value,i,e,t,o)},250)})}_renderValidatorSeimaSearch(e,t,o,s,n){if(!e||e.length<2){t.innerHTML="";return}const i=D.searchProducts(e,20),r=new Set(s.map(l=>String(l.SeimaSKU))),c=i.filter(l=>{const d=String(l.OrderCode||l.Code||"");return d&&!r.has(d)});if(c.length===0){t.innerHTML='<div class="gvm-no-matches">No Seima products found.</div>';return}const a=l=>E.sanitizeInput(l||"");t.innerHTML=c.slice(0,15).map(l=>{const d=l.OrderCode||l.Code||"",p=l.Description||l.ProductName||"",h=l.Image_URL||l.imageUrl||"",f=l.RRP_INCGST||l["RRP INC GST"]||"",m=f?`$${Number(f).toLocaleString("en-AU",{minimumFractionDigits:2})}`:"";return`<div class="gvm-search-result" data-seima-code="${a(d)}">
        ${h?`<img src="${a(h)}" alt="" class="gvm-match-img" onerror="this.outerHTML='<div class=\\'gvm-match-img-placeholder\\'>No img</div>'">`:'<div class="gvm-match-img-placeholder">No img</div>'}
        <div class="gvm-match-info">
          <div class="gvm-match-name">${a(p)}</div>
          <div class="gvm-match-sku">${a(d)}</div>
        </div>
        <div class="gvm-match-price">${m}</div>
        <button class="gvm-btn gvm-btn-verify" data-seima-code="${a(d)}">✓ Verify</button>
      </div>`}).join(""),t.querySelectorAll(".gvm-search-result").forEach(l=>{const d=l.querySelector(".gvm-btn-verify");d==null||d.addEventListener("click",async p=>{p.stopPropagation();const h=d.dataset.seimaCode;d.disabled=!0,d.textContent="…";try{const f=s.length+1;await B.addMatch(n,String(o.product_code),h,f,"Manual verification"),await B.updateMatch(n,String(o.product_code),h,"Verified"),s.push({CompetitorSKU:String(o.product_code),SeimaSKU:h,Rank:f,Confidence:"",MatchReason:"Manual verification",Status:"Verified"}),this._renderValidatorModal(o,s,n)}catch(f){console.error("Add match failed:",f),d.disabled=!1,d.textContent="✓ Verify"}})})}closeValidatorModal(e){this._validatorModal&&(this._closeSeimaDetailPanel(),this._validatorModal.overlay.remove(),this._validatorModal.modal.remove(),this._validatorModal.escHandler&&document.removeEventListener("keydown",this._validatorModal.escHandler),this._validatorModal=null,B._index=null,this.attachSeimaMatchSuggestions())}_showSeimaDetailInModal(e){this._closeSeimaDetailPanel();const t=D.findProductByCode(e);if(!t)return;const o=p=>E.sanitizeInput(p||""),s=t.Description||t.ProductName||e,n=t.Image_URL||t.imageUrl||"",i=t.Website_URL||"",c=[["Order Code",t.OrderCode||t.Code],["Description",t.Description],["Long Description",t.LongDescription||t["Long Description"]],["Range",t.Range],["Group",t.Group],["Sub Group",t.SubGroup||t["Sub Group"]],["RRP ex GST",t.RRP_EX||t["RRP EX GST"]],["RRP inc GST",t.RRP_INCGST||t["RRP INC GST"]],["Dimensions (W)",t.DimX||t["X Dimension (mm)"]],["Dimensions (D)",t.DimY||t["Y Dimension (mm)"]],["Dimensions (H)",t.DimZ||t["Z Dimension (mm)"]],["WELS Star",t.WELS_STAR||t["WELS Star"]],["WELS Consumption",t.WELS_CONSUMPTION||t["WELS Consumption"]]].filter(([,p])=>p&&String(p).trim()&&String(p).trim()!=="0").map(([p,h])=>{const f=p.startsWith("RRP")?`$${Number(h).toLocaleString("en-AU",{minimumFractionDigits:2})}`:o(h);return`<tr><td>${o(p)}</td><td>${f}</td></tr>`}).join(""),a=document.createElement("div");a.className="gvm-detail-overlay";const l=document.createElement("div");l.className="gvm-detail-panel",l.innerHTML=`
      <div class="gvm-detail-header">
        <div class="gvm-detail-title">${o(s)}</div>
        <button class="gvm-close">&times;</button>
      </div>
      <div class="gvm-detail-body">
        ${n?`<img src="${o(n)}" alt="${o(s)}" class="gvm-detail-img" onerror="this.style.display='none'">`:""}
        <table class="gvm-detail-table">${c}</table>
        ${i?`<a href="${o(i)}" target="_blank" style="display:inline-block;margin-top:10px;font-size:0.8rem;color:#b87333;">View on Seima website →</a>`:""}
      </div>
    `,document.body.appendChild(a),document.body.appendChild(l);const d=()=>this._closeSeimaDetailPanel();l.querySelector(".gvm-close").addEventListener("click",d),a.addEventListener("click",d),this._seimaDetailPanel={overlay:a,panel:l}}_closeSeimaDetailPanel(){this._seimaDetailPanel&&(this._seimaDetailPanel.overlay.remove(),this._seimaDetailPanel.panel.remove(),this._seimaDetailPanel=null)}renderRowHtml(e){const t=e.product,o=t&&(t.Image_URL||t.imageUrl||t.Image)||"assets/no-image.png",s=t&&(t.Description||t.ProductName||t["Product Name"])||"",n=t&&(t.OrderCode||t.Code)||"",i=n?String(parseInt(n,10)):"",r=e.price||t&&(t.RRP_EX||t["RRP EX GST"]||t.RRP_EX||t.rrpExGst||t.RRP_EXGST||t.RRP_INCGST||t["RRP INC GST"])||"",c=parseFloat((r||"").toString().replace(/,/g,""))||0,a=parseInt(e.quantity)||1,l=c*a,d=l>0?l.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}):"";return`
      <div class="grid-row ${this.getRoomRowClass(e.room)}" data-row-id="${e.id}" data-room="${(e.room||"blank").toLowerCase()}">
        <div class="col-image grid-image-cell">
          ${t?`<img src="${o}" alt="Product" class="grid-product-image" onerror="this.src='assets/no-image.png';">`:""}
        </div>
        <div class="col-product grid-product-cell ${t&&!t._placeholder?"has-product":"empty-product"}">
          ${t&&!t._placeholder?`
            <div class="grid-product-display">
              <div class="grid-product-name">
                <strong>${E.sanitizeInput(i)}</strong> ${E.sanitizeInput(s)}
              </div>
            </div>
          `:`
            ${t!=null&&t._placeholder?`<div class="grid-placeholder-hint">${E.sanitizeInput(t.Description||"")}</div>`:""}
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
          <input type="text" class="grid-input" name="price" value="${r}" placeholder="0.00">
        </div>
        <div class="col-total">
          <div class="grid-total-display">${d}</div>
        </div>
        <div class="col-notes">
          <textarea class="grid-textarea" name="notes" placeholder="Notes..." rows="2">${E.sanitizeInput(e.notes)}</textarea>
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
    `}handleSortChange(){const e=document.getElementById("sort-by"),t=e?e.value:"room";this.sortGridRows(t),this.renderGrid()}sortGridRows(e){switch(e){case"room":this.gridRows.sort((t,o)=>{const s=t.room||"Blank",n=o.room||"Blank";return s.localeCompare(n)});break;case"product":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.Description||t.product.ProductName)||"",n=o.product&&(o.product.Description||o.product.ProductName)||"";return s.localeCompare(n)});break;case"code":this.gridRows.sort((t,o)=>{const s=t.product&&(t.product.OrderCode||t.product.Code)||"",n=o.product&&(o.product.OrderCode||o.product.Code)||"";return s.localeCompare(n)});break;default:this.gridRows.sort((t,o)=>{const s=t.room||"Blank",n=o.room||"Blank";return s.localeCompare(n)});break}}groupRowsByRoom(){const e=document.getElementById("sort-by");if((e?e.value:"room")!=="room")return{"All Products":this.gridRows};const o={};this.gridRows.forEach(r=>{const c=r.room||"Blank";o[c]||(o[c]=[]),o[c].push(r)});const s=Object.keys(o).filter(r=>r!=="Blank"),n=this.getSortedRoomNames(s),i={};return n.forEach(r=>{o[r]&&(i[r]=o[r])}),o.Blank&&(i.Blank=o.Blank),i}getSortedRoomNames(e){const t=this.customRoomOrder.filter(s=>e.includes(s)),o=e.filter(s=>!this.customRoomOrder.includes(s)).sort((s,n)=>s.localeCompare(n));return[...t,...o]}moveRoomInOrder(e,t,o){if(e==="Blank"||t==="Blank"||e===t)return;const s={};this.gridRows.forEach(a=>{const l=a.room||"Blank";s[l]||(s[l]=[])});const n=Object.keys(s).filter(a=>a!=="Blank"),r=this.getSortedRoomNames(n).filter(a=>a!==e);let c=r.indexOf(t);c===-1&&(c=r.length),o||c++,r.splice(c,0,e),this.customRoomOrder=r,this.saveCustomRoomOrder()}getRoomClass(e){return{Blank:"blank-room","Bath 1":"bath-room","Bath 2":"bath-room","Bath 3":"bath-room",Ensuite:"bath-room",Powder:"bath-room",Kitchen:"kitchen-room",Laundry:"laundry-room",Alfresco:"alfresco-room",Butlers:"butlers-room",Standard:"standard-room",Upgrade:"upgrade-room",Other:"other-room","All Products":"all-products"}[e]||""}getRoomRowClass(e){const t=(e||"Blank").toLowerCase();return t.includes("bath")||t.includes("ensuite")||t.includes("powder")?"bath-room-row":t.includes("kitchen")?"kitchen-room-row":t.includes("laundry")?"laundry-room-row":t.includes("alfresco")?"alfresco-room-row":t.includes("butler")?"butlers-room-row":""}getRoomOptions(e){let t=`<option value="Blank" ${e==="Blank"?"selected":""}>Blank</option>`;return G.get("rooms.predefined",[]).forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),v.getCustomRooms().forEach(n=>{t+=`<option value="${n.name}" ${e===n.name?"selected":""}>${n.name}</option>`}),t+='<option value="__ADD_NEW_ROOM__" style="font-weight: bold; color: #2563eb;">➕ Add new room...</option>',t}updateAllRoomDropdowns(){document.querySelectorAll('.grid-select[name="room"]').forEach(o=>{o.value;const s=this.gridRows.find(n=>n.id===o.closest(".grid-row").dataset.rowId);s&&(o.innerHTML=this.getRoomOptions(s.room))});const t=document.getElementById("bulk-room-select");t&&(t.innerHTML=this.getRoomOptions("Blank"))}ensureAtLeastOneEmptyRow(){this.gridRows.length===0&&this.addEmptyRow()}updateTotals(){const e=document.getElementById("total-items"),t=document.getElementById("total-rooms"),o=document.getElementById("total-value");let s=0,n=0;const i=new Set;this.gridRows.forEach(r=>{if(r.product&&!r.product._placeholder){s+=r.quantity;const c=parseFloat(r.price)||0;n+=c*r.quantity,r.room&&r.room!=="Blank"&&r.room.trim()!==""&&i.add(r.room)}}),e&&(e.textContent=s),t&&(t.textContent=i.size),o&&(o.textContent=n>0?`$${n.toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}`:"$0.00")}clearAll(e=!0){v.clearAllSelections(),localStorage.removeItem("pdfWizardSettings"),e&&(localStorage.removeItem("pdfFormSettings"),localStorage.removeItem("customerDetails"),this.currentSelectionId=null,this.currentSelectionName="New Selection",this.hasUnsavedChanges=!1,this.customRoomOrder=[],this.saveCustomRoomOrder()),this.gridRows=[],this.nextRowId=1,this.renderGrid(),this.updateTotals(),this.ensureAtLeastOneEmptyRow(),this.updateContextHeader()}showImportModal(){const e=document.getElementById("file-import-modal");e&&(e.style.display="flex")}syncGridToStorage(){for(const e of this.gridRows)!e.product||!e.storageId||typeof e.storageId!="string"||(v.updateProductPrice(e.storageId,e.price),v.updateProductQuantity(e.storageId,e.quantity),v.updateProductRoom(e.storageId,e.room),v.updateProductNotes(e.storageId,e.notes))}async showDownloadModal(){this.syncGridToStorage(),H.requireAuth(async()=>{try{await eo.open({onComplete:(e,t)=>{console.log("📄 Wizard completed, generating PDF"),window.showPdfFormScreen?window.showPdfFormScreen(e,t):window.dispatchEvent(new CustomEvent("generatePdf",{detail:{...e,tipTailSettings:t}}))},onCancel:()=>{console.log("📄 Wizard cancelled")}})}catch(e){console.error("Failed to open PDF wizard, falling back to legacy modal:",e),this.showLegacyDownloadModal()}},"create PDF")}async showLegacyDownloadModal(){const e=document.getElementById("pdf-email-modal");if(e){e.style.display="flex";const t=document.getElementById("pdf-email-form");if(t){const o=E.getStorageItem("pdfFormSettings",{});t["user-name"]&&(t["user-name"].value=o.name||""),t["user-project"]&&(t["user-project"].value=o.project||""),t["user-address"]&&(t["user-address"].value=o.address||""),t["user-email"]&&(t["user-email"].value=o.email||""),t["user-telephone"]&&(t["user-telephone"].value=o.telephone||""),t["exclude-prices"]&&(t["exclude-prices"].checked=!!o.excludePrices),t["exclude-qty"]&&(t["exclude-qty"].checked=!!o.excludeQty),t["exclude-long-description"]&&(t["exclude-long-description"].checked=!!o.excludeLongDescription),t["include-gst"]&&(t["include-gst"].checked=!!o.includeGst)}this.loadCustomerLogoPreview(),this.setupCustomerLogoHandlers(),await this.populateTipTailDropdowns(),this.loadTipTailSelections(),this.setupTipTailHandlers()}}refreshUI(){this.init()}showSaveDialog(){H.requireAuth(e=>{this._showSaveDialogInternal(e)})}_showSaveDialogInternal(e){const t=E.getStorageItem("pdfFormSettings",{}),o=!!this.currentSelectionId,s=t.name?`${t.name} - ${new Date().toLocaleDateString("en-AU")}`:this.currentSelectionName||`Selection - ${new Date().toLocaleDateString("en-AU")}`,n=`
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
    `;this.injectSaveDialogStyles(),document.body.insertAdjacentHTML("beforeend",n);const i=document.getElementById("save-dialog"),r=document.getElementById("save-doc-name"),c=document.getElementById("save-notes");r==null||r.focus(),r==null||r.select(),i.querySelectorAll("button[data-action]").forEach(l=>{l.addEventListener("click",async()=>{const d=l.dataset.action;if(d==="cancel"){i.remove();return}const p=(r==null?void 0:r.value.trim())||"Untitled Selection",h=(c==null?void 0:c.value.trim())||"";this.currentSelectionName=p;const f={...this.prepareSelectionData(),documentName:p,notes:h};i.querySelectorAll("button").forEach(m=>m.disabled=!0),l.textContent="Saving...";try{let m;d==="save-update"?m=await de.updateSelection(this.currentSelectionId,f):(m=await de.saveSelection(f),m.success&&m.id&&(this.currentSelectionId=m.id)),i.remove(),m.success?(this.hasUnsavedChanges=!1,this.lastSaveTime=new Date,this.updateContextHeader(),re.success(d==="save-update"?"Selection updated!":"Selection saved!")):re.error("Failed to save: "+(m.error||"Unknown error"))}catch(m){i.remove(),re.error("Failed to save: "+m.message)}})}),i.addEventListener("click",l=>{l.target===i&&i.remove()});const a=l=>{l.key==="Escape"&&(i.remove(),document.removeEventListener("keydown",a))};document.addEventListener("keydown",a)}injectSaveDialogStyles(){if(document.getElementById("save-dialog-styles"))return;document.head.insertAdjacentHTML("beforeend",`
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
    `)}showLoadPicker(){H.requireAuth(e=>{this._showLoadPickerInternal(e)})}_showLoadPickerInternal(e){rt.show(t=>{console.log("✅ Selection loaded:",t),this.currentSelectionId=t.id||null,this.currentSelectionName=t.documentName||t.customerName||"Loaded Selection",this.hasUnsavedChanges=!1,this.loadExistingProducts(),this.updateTotals(),this.updateContextHeader(),t.roomOrder&&Array.isArray(t.roomOrder)&&(this.customRoomOrder=t.roomOrder,this.saveCustomRoomOrder()),re.success(`Loaded ${t.productCount||this.gridRows.length} products`)})}escapeHtml(e){const t=document.createElement("div");return t.textContent=e||"",t.innerHTML}}const Ue="onboardingCompleted",et=2;class no{constructor(){this.currentStep=0,this.overlay=null}shouldShow(){const e=localStorage.getItem(Ue);if(!e)return!0;try{return JSON.parse(e).version<et}catch{return!0}}show(){this.shouldShow()&&this.showForced()}showForced(){const e=document.getElementById("onboarding-overlay");e&&e.remove(),this.currentStep=0,this.createOverlay(),this.renderStep()}createOverlay(){var e,t;this.overlay=document.createElement("div"),this.overlay.id="onboarding-overlay",this.overlay.innerHTML=`
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
    `,document.head.appendChild(e)}getSteps(){return[{icon:"logo",title:"Welcome to Product Presenter",text:"Create beautiful PDF presentations of Seima products for your clients in minutes.",features:[]},{icon:"📦",title:"Add Your Products",text:"There are three ways to get started:",features:[{icon:"📁",title:"Import a File",desc:"Upload CSV or Excel files with product codes"},{icon:"📂",title:"Load a Selection",desc:"Continue from a previous saved selection"},{icon:"🔍",title:"Search Products",desc:"Search and add products one by one"}]},{icon:"🏠",title:"Organise by Room",text:"Group products by room or area. Drag to reorder, and easily manage your selection.",features:[{icon:"🎨",title:"Colour-coded",desc:"Rooms are visually distinct for quick reference"},{icon:"📊",title:"Sort Options",desc:"Sort by Room/Group, Product Code, or Product Name"},{icon:"💾",title:"Auto-saves",desc:"Your work is automatically preserved"}]},{icon:"📄",title:"Create Your PDF",text:'Click "Create PDF" to customise and generate a professional presentation with your branding.',features:[{icon:"💰",title:"Pricing Options",desc:"Show RRP, add GST, or hide pricing entirely"},{icon:"📝",title:"Content Control",desc:"Include descriptions and custom notes"},{icon:"📑",title:"Cover Pages",desc:"Add branded cover and appendix pages"}]}]}renderStep(){const e=this.getSteps(),t=e[this.currentStep],o=document.getElementById("onboarding-content"),s=document.getElementById("onboarding-dots"),n=document.getElementById("onboarding-next");if(!o||!s)return;let i="";t.features.length>0&&(i=t.features.map(c=>`
        <div class="onboarding-feature">
          <span class="onboarding-feature-icon">${c.icon}</span>
          <div class="onboarding-feature-content">
            <div class="onboarding-feature-title">${c.title}</div>
            <div class="onboarding-feature-desc">${c.desc}</div>
          </div>
        </div>
      `).join(""));const r=t.icon==="logo"?'<img src="assets/seima-logo.png" alt="Seima" class="onboarding-logo">':`<div class="onboarding-icon">${t.icon}</div>`;o.innerHTML=`
      ${r}
      <h2 class="onboarding-title">${t.title}</h2>
      <p class="onboarding-text">${t.text}</p>
      ${i}
    `,s.innerHTML=e.map((c,a)=>`<div class="onboarding-dot ${a===this.currentStep?"active":""}"></div>`).join(""),n&&(n.textContent=this.currentStep===e.length-1?"Get Started":"Next")}nextStep(){const e=this.getSteps();this.currentStep<e.length-1?(this.currentStep++,this.renderStep()):this.complete()}complete(){localStorage.setItem(Ue,JSON.stringify({version:et,completedAt:new Date().toISOString()})),this.overlay&&(this.overlay.style.animation="fadeIn 0.2s ease reverse",setTimeout(()=>{this.overlay.remove(),this.overlay=null},200))}reset(){localStorage.removeItem(Ue)}}const at=new no;class io{constructor(){this.panel=null,this.messagesContainer=null,this.input=null,this.sendBtn=null,this.isOpen=!1,this._lastUserMessage=null,this._conversationId=null,this._userEmail=null,this._historyOpen=!1}init(){this._createPanel(),this._bindEvents(),this._restoreMessages(),this._initUserEmail()}_createPanel(){const e=document.createElement("div");e.id="ai-chat-panel",e.className="ai-chat-panel",e.innerHTML=`
      <div class="ai-chat-header">
        <div class="ai-chat-header-left">
          <div class="ai-chat-avatar">AI</div>
          <div>
            <div class="ai-chat-title">Fred</div>
            <div class="ai-chat-subtitle">Product Assistant</div>
          </div>
        </div>
        <div class="ai-chat-header-actions">
          <button class="ai-chat-history-btn" title="Conversation history">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </button>
          <button class="ai-chat-clear-btn" title="New conversation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
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
        <div class="ai-chat-image-preview" id="ai-chat-image-preview" style="display:none;">
          <img id="ai-chat-image-thumb" alt="">
          <button class="ai-chat-image-remove" id="ai-chat-image-remove" title="Remove image">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="ai-chat-input-wrapper">
          <button class="ai-chat-image-btn" id="ai-chat-image-btn" title="Upload image for visual search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </button>
          <input type="file" id="ai-chat-image-input" accept="image/*" style="display:none;">
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
    `;const t=document.createElement("div");t.className="ai-chat-history-panel",t.id="ai-chat-history-panel",t.innerHTML=`
      <div class="ai-chat-history-header">
        <h3>Conversations</h3>
        <button class="ai-chat-history-close" title="Close history">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div class="ai-chat-history-list" id="ai-chat-history-list">
        <div class="ai-chat-history-empty">No previous conversations.</div>
      </div>
    `,e.appendChild(t),document.body.appendChild(e),this.panel=e,this.messagesContainer=e.querySelector("#ai-chat-messages"),this.input=e.querySelector("#ai-chat-input"),this.sendBtn=e.querySelector("#ai-chat-send"),this._showWelcome()}_bindEvents(){this.panel.querySelector(".ai-chat-close-btn").addEventListener("click",()=>this.close()),this.panel.querySelector(".ai-chat-clear-btn").addEventListener("click",()=>this._startNewConversation()),this.panel.querySelector(".ai-chat-history-btn").addEventListener("click",()=>this._toggleHistory()),this.panel.querySelector(".ai-chat-history-close").addEventListener("click",()=>this._toggleHistory(!1)),this.input.addEventListener("input",()=>{this.sendBtn.disabled=!this.input.value.trim(),this._autoResizeInput()}),this.input.addEventListener("keydown",o=>{o.key==="Enter"&&!o.shiftKey&&(o.preventDefault(),this._send())}),this.sendBtn.addEventListener("click",()=>this._send());const e=this.panel.querySelector("#ai-chat-image-btn"),t=this.panel.querySelector("#ai-chat-image-input");e.addEventListener("click",()=>t.click()),t.addEventListener("change",()=>{t.files.length&&this._handleImageSelect(t.files[0]),t.value=""}),this.panel.querySelector("#ai-chat-image-remove").addEventListener("click",()=>this._clearImagePreview()),document.addEventListener("keydown",o=>{o.key==="Escape"&&this.isOpen&&this.close()})}_showWelcome(){const e=[{prompt:"What matte black basin mixers do you have under $300?",label:"Matte black mixers"},{prompt:"Show me Seima wall-mounted basins",label:"Wall-mounted basins"},{prompt:"What tapware is available in brushed gold?",label:"Brushed gold tapware"},{prompt:"Summarise the products in my current selection",label:"Analyse my selection"}],t=document.createElement("div");t.className="ai-chat-welcome",t.innerHTML=`
      <div class="ai-chat-welcome-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h3>Hi, I'm Fred!</h3>
      <p>Search the Seima product catalog using natural language.</p>
      <div class="ai-chat-suggestions"></div>
    `,this.messagesContainer.innerHTML="",this.messagesContainer.appendChild(t);const o=t.querySelector(".ai-chat-suggestions");this._renderSuggestions(o,e),this._fetchTopQuestions().then(s=>{if(s&&s.length>0){const n=s.slice(0,3);n.push(e[e.length-1]),o.innerHTML="",this._renderSuggestions(o,n)}})}_renderSuggestions(e,t){for(const o of t){const s=document.createElement("button");s.className="ai-suggestion-btn",s.dataset.prompt=o.prompt,s.textContent=o.label,s.addEventListener("click",()=>{this.input.value=o.prompt,this.sendBtn.disabled=!1,this._send()}),e.appendChild(s)}}async _fetchTopQuestions(){try{const e=sessionStorage.getItem("fredTopQuestions");if(e)return JSON.parse(e);const t=await fetch(`${ne.PROXY_URL}/v1/top-questions`);if(!t.ok)return null;const s=((await t.json()).questions||[]).map(n=>({prompt:n.prompt,label:n.label||n.prompt}));return sessionStorage.setItem("fredTopQuestions",JSON.stringify(s)),s}catch{return null}}_handleImageSelect(e){if(!e.type.startsWith("image/"))return;const t=new FileReader;t.onload=()=>{this._pendingImage={dataUrl:t.result,mimeType:e.type,name:e.name};const o=this.panel.querySelector("#ai-chat-image-preview"),s=this.panel.querySelector("#ai-chat-image-thumb");s.src=t.result,o.style.display="flex",this.sendBtn.disabled=!1},t.readAsDataURL(e)}_clearImagePreview(){this._pendingImage=null;const e=this.panel.querySelector("#ai-chat-image-preview");e.style.display="none",this.sendBtn.disabled=!this.input.value.trim()}_autoResizeInput(){this.input.style.height="auto",this.input.style.height=Math.min(this.input.scrollHeight,120)+"px"}async _send(){const e=this.input.value.trim(),t=!!this._pendingImage;if(!e&&!t||ae.processing)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();const s=t?e||`[Image: ${this._pendingImage.name}]`:e;this._addMessage("user",s),this._trackQuestion(s);const n=this._pendingImage;this._clearImagePreview(),this.input.value="",this.input.style.height="auto",this.sendBtn.disabled=!0;let i;n&&(i=[],e&&i.push({type:"text",text:e}),i.push({type:"image_url",image_url:{url:n.dataUrl,detail:"low"}}),e||i.push({type:"text",text:"What Seima products would match this style or look similar to what's shown in this image?"}));const r=this._addThinking();try{const c=v.getSelectedProducts();r.remove();const{wrapper:a,bubble:l}=this._createStreamingBubble(),d=i||e,p=await ae.chat(d,D,c,f=>{l.textContent+=f,this._scrollToBottom()});l.classList.remove("ai-msg-streaming"),l.dataset.rawContent=p.content,l.innerHTML=this._formatMarkdown(p.content),this._injectProductCards(l),this._collapseProductCards(l),this._attachProductButtons(l);const h=this._generateId();a.dataset.feedbackId=h,this._appendFeedbackRow(a,h,p.content),this._persistMessages(),this._saveConversation()}catch(c){r.parentNode&&r.remove(),this._addMessage("error",c.message||"Something went wrong. Please try again.")}this._scrollToBottom(),this.input.focus()}_addMessage(e,t,{skipPersist:o=!1,feedbackId:s=null}={}){const n=document.createElement("div");n.className=`ai-msg ai-msg-${e}`;const i=document.createElement("div");if(i.className="ai-msg-bubble",e==="user")i.textContent=t,this._lastUserMessage=t;else if(e==="assistant"){i.dataset.rawContent=t,i.innerHTML=this._formatMarkdown(t),this._injectProductCards(i),this._collapseProductCards(i),this._attachProductButtons(i);const r=s||this._generateId();n.dataset.feedbackId=r,n.appendChild(i),this._appendFeedbackRow(n,r,t)}else e==="error"&&(i.innerHTML=`<span class="ai-msg-error">${this._escapeHtml(t)}</span>`);return n.contains(i)||n.appendChild(i),this.messagesContainer.appendChild(n),this._scrollToBottom(),!o&&e!=="error"&&this._persistMessages(),n}_createStreamingBubble(){const e=document.createElement("div");e.className="ai-msg ai-msg-assistant";const t=document.createElement("div");return t.className="ai-msg-bubble ai-msg-streaming",e.appendChild(t),this.messagesContainer.appendChild(e),this._scrollToBottom(),{wrapper:e,bubble:t}}_addThinking(){const e=document.createElement("div");return e.className="ai-msg ai-msg-assistant",e.innerHTML=`
      <div class="ai-msg-bubble ai-msg-thinking">
        <span class="ai-thinking-dot"></span>
        <span class="ai-thinking-dot"></span>
        <span class="ai-thinking-dot"></span>
      </div>
    `,this.messagesContainer.appendChild(e),this._scrollToBottom(),e}_formatMarkdown(e){let t=this._escapeHtml(e);return t=t.replace(/((?:^\|.+\|$\n?)+)/gm,o=>{const s=o.trim().split(`
`).filter(d=>d.trim());if(s.length<2)return o;const n=d=>d.split("|").slice(1,-1).map(p=>p.trim()),i=d=>/^\|[\s:|-]+\|$/.test(d.trim());let r=n(s[0]),c=1;s.length>1&&i(s[1])&&(c=2);let a="<thead><tr>"+r.map(d=>`<th>${d}</th>`).join("")+"</tr></thead>",l="<tbody>"+s.slice(c).filter(d=>!i(d)).map(d=>"<tr>"+n(d).map(p=>`<td>${p}</td>`).join("")+"</tr>").join("")+"</tbody>";return`<table class="ai-comparison-table">${a}${l}</table>`}),t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t=t.replace(/^### (.+)$/gm,"<h4>$1</h4>"),t=t.replace(/^## (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/(<li>.*<\/li>\n?)+/g,o=>`<ul>${o}</ul>`),t=t.replace(/^\d+\. (.+)$/gm,"<li>$1</li>"),t=t.replace(/\n\n/g,"</p><p>"),t=`<p>${t}</p>`,t=t.replace(/<p><\/p>/g,""),t=t.replace(/<p>(<h[34]>)/g,"$1"),t=t.replace(/(<\/h[34]>)<\/p>/g,"$1"),t=t.replace(/<p>(<ul>)/g,"$1"),t=t.replace(/(<\/ul>)<\/p>/g,"$1"),t=t.replace(/<p>(<table)/g,"$1"),t=t.replace(/(<\/table>)<\/p>/g,"$1"),t=t.replace(/\b(\d{6})\b/g,'<button class="ai-add-product-btn" data-code="$1" title="Add $1 to selection">$1 <span class="ai-add-icon">+</span></button>'),t}_getBasePath(){var e;return(((e=document.querySelector("base"))==null?void 0:e.href)||window.location.origin+"/").replace(/\/$/,"")}_getProductImage(e){return e.Image_URL||e.imageUrl||e.Image||`${this._getBasePath()}/assets/no-image.png`}_getProductName(e){return e.Description||e.ProductName||e["Product Name"]||""}_getProductMeta(e){const t=e.Finish||e.Colour||"",o=e.DimX||e["X Dimension (mm)"]||"",s=e.DimY||e["Y Dimension (mm)"]||"",n=e.DimZ||e["Z Dimension (mm)"]||"",i=o&&o!=="0"?`${o} × ${s||0} × ${n||0}mm`:"";return[t,i].filter(Boolean).join("  ·  ")}_getProductPrice(e){const t=e["RRP INC GST"]||e.RRP_INCGST||e["RRP EX GST"]||e.RRP_EXGST||"";return t?`$${parseFloat(t).toLocaleString("en-AU",{minimumFractionDigits:2})}`:""}_injectProductCards(e){const t=e.querySelectorAll(".ai-add-product-btn");if(!t.length)return;const o=this._getBasePath();t.forEach(s=>{const n=s.dataset.code,i=D.findProductByCode(n);if(!i)return;const r=s.closest("li");if(!(r||s.parentElement))return;const a=this._getProductImage(i),l=this._getProductName(i),d=this._getProductMeta(i),p=this._getProductPrice(i),h=document.createElement("div");h.className="ai-product-card",h.dataset.code=n,h.innerHTML=`
        <img class="ai-product-card-img" src="${this._escapeHtml(a)}" alt="" onerror="this.src='${o}/assets/no-image.png';">
        <div class="ai-product-card-info">
          <div class="ai-product-card-name">${this._escapeHtml(l)}</div>
          ${d?`<div class="ai-product-card-meta">${this._escapeHtml(d)}</div>`:""}
          <div class="ai-product-card-footer">
            <span class="ai-product-card-price">${p}</span>
            <button class="ai-card-add-btn" data-code="${n}" title="Add to selection">+ Add</button>
          </div>
        </div>
      `,h.addEventListener("click",f=>{f.target.closest(".ai-card-add-btn")||this._showProductModal(n)}),h.querySelector(".ai-card-add-btn").addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),this._addProductToGrid(n,f.currentTarget)}),r?r.replaceWith(h):s.replaceWith(h)})}_collapseProductCards(e,t=5){const o=e.querySelectorAll(".ai-product-card");if(o.length<=t)return;const s=[];o.forEach((r,c)=>{c>=t&&(r.style.display="none",s.push(r))});const n=document.createElement("button");n.className="ai-show-more-btn",n.textContent=`Show ${s.length} more product${s.length>1?"s":""}`,n.addEventListener("click",()=>{s.forEach(r=>{r.style.display=""}),n.remove(),this._scrollToBottom()});const i=o[t-1];i.parentNode.insertBefore(n,i.nextSibling)}_attachProductButtons(e){e.querySelectorAll(".ai-add-product-btn").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),this._addProductToGrid(t.dataset.code,t)})})}_addProductToGrid(e,t){const o=D.findProductByCode(e);if(!o){t&&(t.classList.add("ai-add-error"),t.title="Product not found");return}v.addProductToSelection(o,"","",1),window.productGridManager&&(window.productGridManager.loadExistingProducts(),window.productGridManager.updateTotals(),window.productGridManager.ensureAtLeastOneEmptyRow()),t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added ✓"),this._markCardAdded(e)}_markCardAdded(e){document.querySelectorAll(`.ai-card-add-btn[data-code="${e}"]`).forEach(o=>{o.classList.add("added"),o.disabled=!0,o.textContent="Added ✓"});const t=document.querySelector('.ai-product-modal-add[data-code="'+e+'"]');t&&(t.classList.add("added"),t.disabled=!0,t.textContent="Added to Selection ✓")}_showProductModal(e){const t=D.findProductByCode(e);if(!t)return;const o=document.querySelector(".ai-product-modal-overlay");o&&o.remove();const s=this._getBasePath(),n=this._getProductImage(t),i=this._getProductName(t),r=this._getProductPrice(t),c=t["Long Description"]||t.LongDescription||"",a=t.Range||"",l=t.Group||"",d=t.SubGroup||t.Subgroup||"",p=t.Finish||"",h=t.Colour||"",f=t.DimX||t["X Dimension (mm)"]||"",m=t.DimY||t["Y Dimension (mm)"]||"",y=t.DimZ||t["Z Dimension (mm)"]||"",g=f&&f!=="0"?`${f} × ${m||0} × ${y||0}mm`:"",S=t["WELS STAR"]||t.WELS_STAR||"",w=[];a&&w.push(["Range",a]),l&&w.push(["Group",l]),d&&w.push(["Type",d]),p&&w.push(["Finish",p]),h&&h!==p&&w.push(["Colour",h]),g&&w.push(["Dimensions",g]),S&&w.push(["WELS",`${S} star`]);const b=document.createElement("div");b.className="ai-product-modal-overlay",b.innerHTML=`
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
          <h3 class="ai-product-modal-title">${this._escapeHtml(i)}</h3>
          ${w.length?`<dl class="ai-product-modal-specs">${w.map(([x,k])=>`<dt>${this._escapeHtml(x)}</dt><dd>${this._escapeHtml(k)}</dd>`).join("")}</dl>`:""}
          ${c?`<div class="ai-product-modal-desc">${this._escapeHtml(c)}</div>`:""}
          ${r?`<div class="ai-product-modal-price">${r}</div>`:""}
          <button class="ai-product-modal-add" data-code="${e}">Add to Selection</button>
        </div>
      </div>
    `,b.addEventListener("click",x=>{x.target===b&&b.remove()}),b.querySelector(".ai-product-modal-close").addEventListener("click",()=>b.remove()),b.querySelector(".ai-product-modal-add").addEventListener("click",x=>{this._addProductToGrid(e,null);const k=x.currentTarget;k.classList.add("added"),k.disabled=!0,k.textContent="Added to Selection ✓"}),document.addEventListener("keydown",function x(k){k.key==="Escape"&&(b.remove(),document.removeEventListener("keydown",x))}),document.body.appendChild(b)}_appendFeedbackRow(e,t,o){const s=document.createElement("div");s.className="ai-feedback-row";const n=this._getFeedbackEntry(t),i=(n==null?void 0:n.rating)||null;s.innerHTML=`
      <button class="ai-feedback-btn ai-feedback-up${i==="up"?" active":""}"
              data-rating="up" title="Helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
          <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </svg>
      </button>
      <button class="ai-feedback-btn ai-feedback-down${i==="down"?" active":""}"
              data-rating="down" title="Not helpful">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"></path>
          <path d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
        </svg>
      </button>
    `,s.querySelectorAll(".ai-feedback-btn").forEach(c=>{c.addEventListener("click",()=>{const a=c.dataset.rating;s.querySelectorAll(".ai-feedback-btn").forEach(l=>l.classList.remove("active")),c.classList.add("active"),this._saveFeedback(t,o,a)})});const r=e.querySelector(".ai-msg-bubble");r?e.insertBefore(s,r.nextSibling):e.appendChild(s)}_saveFeedback(e,t,o){try{const s=this._loadFeedback(),n=s.findIndex(r=>r.id===e),i={id:e,question:this._lastUserMessage||"",answer:(t||"").slice(0,500),rating:o,timestamp:Date.now(),synced:!1};n>=0?s[n]={...s[n],...i}:s.push(i),localStorage.setItem(Ie,JSON.stringify(s))}catch{}}_getFeedbackEntry(e){return this._loadFeedback().find(t=>t.id===e)||null}_loadFeedback(){try{const e=localStorage.getItem(Ie);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_scrollToBottom(){requestAnimationFrame(()=>{this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight})}_persistMessages(){try{const e=[];this.messagesContainer.querySelectorAll(".ai-msg").forEach(t=>{var o,s;t.classList.contains("ai-msg-user")?e.push({role:"user",content:((o=t.querySelector(".ai-msg-bubble"))==null?void 0:o.textContent)||""}):t.classList.contains("ai-msg-assistant")&&!t.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((s=t.querySelector(".ai-msg-bubble"))==null?void 0:s.dataset.rawContent)||"",feedbackId:t.dataset.feedbackId||null})}),localStorage.setItem(Ve,JSON.stringify(e))}catch{}}_restoreMessages(){try{const e=localStorage.getItem(Ve);if(!e)return;const t=JSON.parse(e);if(!Array.isArray(t)||t.length===0)return;const o=this.messagesContainer.querySelector(".ai-chat-welcome");o&&o.remove();for(const n of t)n.role==="user"&&(this._lastUserMessage=n.content),this._addMessage(n.role,n.content,{skipPersist:!0,feedbackId:n.feedbackId||null});const s=document.createElement("div");s.className="ai-chat-restored",s.textContent="Previous conversation restored",this.messagesContainer.prepend(s)}catch{}}_generateId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}_trackQuestion(e){try{const t=localStorage.getItem(we),o=t?JSON.parse(t):{},s=e.trim();if(s.length<5)return;o[s]=(o[s]||0)+1,localStorage.setItem(we,JSON.stringify(o))}catch{}}async _syncFeedback(){try{const e=this._loadFeedback(),t=e.filter(i=>!i.synced),o=localStorage.getItem(we),s=o?JSON.parse(o):null;if(t.length===0&&!s)return;if((await fetch(`${ne.PROXY_URL}/v1/feedback`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ne.APP_SECRET}`},body:JSON.stringify({entries:t,questionLog:s})})).ok){for(const i of t)i.synced=!0;this._pruneFeedback(e),localStorage.setItem(Ie,JSON.stringify(e)),localStorage.removeItem(we)}}catch{}}_pruneFeedback(e){const t=Date.now()-6048e5;for(let o=e.length-1;o>=0;o--)e[o].synced&&e[o].timestamp<t&&e.splice(o,1)}_clearChat(){ae.clearHistory();try{localStorage.removeItem(Ie),localStorage.removeItem(we)}catch{}this._showWelcome()}async _initUserEmail(){var e;try{const{authService:t}=await Pt(async()=>{const{authService:s}=await import("./index-ChJN2C3c.js");return{authService:s}},__vite__mapDeps([0,1,2,3])),o=((e=t.getUser)==null?void 0:e.call(t))||{};this._userEmail=o.email||null}catch{}}async _saveConversation(){var s;if(!this._userEmail)return;const e=[];if(this.messagesContainer.querySelectorAll(".ai-msg").forEach(n=>{var i,r;n.classList.contains("ai-msg-user")?e.push({role:"user",content:((i=n.querySelector(".ai-msg-bubble"))==null?void 0:i.textContent)||""}):n.classList.contains("ai-msg-assistant")&&!n.querySelector(".ai-msg-thinking")&&e.push({role:"assistant",content:((r=n.querySelector(".ai-msg-bubble"))==null?void 0:r.dataset.rawContent)||""})}),e.length<2)return;this._conversationId||(this._conversationId=Date.now().toString(36)+Math.random().toString(36).slice(2,8));const t=((s=e.find(n=>n.role==="user"))==null?void 0:s.content)||"Untitled",o=t.length>50?t.slice(0,47)+"...":t;try{await fetch(`${ne.PROXY_URL}/v1/conversations/${this._conversationId}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${ne.APP_SECRET}`},body:JSON.stringify({email:this._userEmail,title:o,messages:e})})}catch{}}_startNewConversation(){this._saveConversation(),this._conversationId=null,this._clearChat()}_toggleHistory(e){const t=this.panel.querySelector("#ai-chat-history-panel");this._historyOpen=e!==void 0?e:!this._historyOpen,t.classList.toggle("open",this._historyOpen),this._historyOpen&&this._loadConversationList()}async _loadConversationList(){if(!this._userEmail){this.panel.querySelector("#ai-chat-history-list").innerHTML='<div class="ai-chat-history-empty">Sign in to see conversation history.</div>';return}const e=this.panel.querySelector("#ai-chat-history-list");e.innerHTML='<div class="ai-chat-history-empty">Loading...</div>';try{const t=`${ne.PROXY_URL}/v1/conversations?token=${encodeURIComponent(ne.APP_SECRET)}&email=${encodeURIComponent(this._userEmail)}`,o=await fetch(t);if(!o.ok)throw new Error("Failed");const n=(await o.json()).conversations||[];if(n.length===0){e.innerHTML='<div class="ai-chat-history-empty">No previous conversations.</div>';return}e.innerHTML=n.map(i=>`
        <button class="ai-chat-history-item" data-id="${i.id}">
          <div class="ai-chat-history-title">${this._escapeHtml(i.title)}</div>
          <div class="ai-chat-history-meta">${i.messageCount||0} messages · ${this._formatHistoryTime(i.updatedAt)}</div>
        </button>
      `).join(""),e.querySelectorAll(".ai-chat-history-item").forEach(i=>{i.addEventListener("click",()=>this._loadConversation(i.dataset.id))})}catch{e.innerHTML='<div class="ai-chat-history-empty">Failed to load conversations.</div>'}}async _loadConversation(e){try{const t=`${ne.PROXY_URL}/v1/conversations/${e}?token=${encodeURIComponent(ne.APP_SECRET)}`,o=await fetch(t);if(!o.ok)throw new Error("Failed");const s=await o.json();this._conversationId=e,ae.clearHistory(),this.messagesContainer.innerHTML="";const n=this.messagesContainer.querySelector(".ai-chat-welcome");n&&n.remove();for(const r of s.messages||[])r.role==="user"&&(this._lastUserMessage=r.content),this._addMessage(r.role,r.content,{skipPersist:!0}),(r.role==="user"||r.role==="assistant")&&ae.conversationHistory.push(r);this._persistMessages(),this._toggleHistory(!1);const i=document.createElement("div");i.className="ai-chat-restored",i.textContent="Conversation restored",this.messagesContainer.prepend(i)}catch{console.error("Failed to load conversation")}}_formatHistoryTime(e){if(!e)return"";const t=new Date(e),s=new Date-t,n=Math.floor(s/864e5);return n===0?"Today":n===1?"Yesterday":n<7?`${n}d ago`:t.toLocaleDateString("en-AU",{day:"numeric",month:"short"})}open(){this.panel.classList.add("open"),this.isOpen=!0,setTimeout(()=>this.input.focus(),300),this._syncFeedback()}close(){this.panel.classList.remove("open"),this.isOpen=!1}toggle(){this.isOpen?this.close():this.open()}}const tt=new io;class ro{constructor(){this.navigationManager=null,this.fileImportManager=new Xt,this.productGridManager=new so,this.isInitialized=!1,be.log("SeimaScanner application starting",Se.INFO)}async init(){var e,t,o;try{be.log("Initializing application modules",Se.INFO),O.configure({googleSheetsUrl:(e=F.PRESENTATION_RECORDING)==null?void 0:e.GOOGLE_SHEETS_URL,email:F.EMAIL}),H.configure({logoSrc:"assets/seima-logo.png",brandName:"Seima",appName:"Product Presenter"});const s=(t=F.PRESENTATION_RECORDING)==null?void 0:t.GOOGLE_SHEETS_URL;if(s&&It(s).catch(r=>{console.warn("Synonyms preload failed:",(r==null?void 0:r.message)||r)}),(o=F.CROSSHAIR)!=null&&o.ENABLED){const r=O.getCurrentUser();B.configure(F.CROSSHAIR,(r==null?void 0:r.email)||""),B.preload().catch(c=>{console.warn("Crosshair preload failed (user may not be logged in):",c.message)})}this.navigationManager=new Rt;const n=fe.getCompatibilityReport();be.log(`Browser compatibility: ${n.score}% (${n.browserName})`,Se.INFO),fe.shouldShowCompatibilityWarning()&&this.showCompatibilityWarning(),await this.navigationManager.init(),this.fileImportManager.init(),this.setupGlobalEventListeners(),this.productGridManager.init(),tt.init();const i=document.getElementById("ai-chat-trigger");return i&&i.addEventListener("click",()=>tt.toggle()),window.navigationManager=this.navigationManager,window.productGridManager=this.productGridManager,window.browserCompatibility=fe,window.downloadWithFallback=Oe,window.showPdfFormScreen=ze,this.isInitialized=!0,be.log("Seima Scanner initialized successfully",Se.INFO),this._dismissLoadingOverlay(),setTimeout(()=>{at.show()},500),!0}catch(s){return be.handleError({message:"Failed to initialize application",error:s,category:mt.UI,level:Se.CRITICAL,context:"app-init"}),this._dismissLoadingOverlay(),!1}}_dismissLoadingOverlay(){const e=document.getElementById("app-loading-overlay");e&&(e.classList.add("fade-out"),e.addEventListener("transitionend",()=>e.remove(),{once:!0}),setTimeout(()=>e.remove(),400))}showCompatibilityWarning(){const e=fe.getCompatibilityReport(),t=e.recommendations;if(t.length===0)return;const o=t.filter(i=>i.type==="critical"),s=e.score<G.get("compatibility.minCompatibilityScore",70);if(o.length===0&&!s)return;const n=document.createElement("div");n.style.cssText=`
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
    `,document.body.insertBefore(n,document.body.firstChild)}setupGlobalEventListeners(){window.addEventListener("generatePdf",e=>{const{tipTailSettings:t,...o}=e.detail;Lt(),ze(o,t||null)}),window.addEventListener("beforeunload",()=>{}),fe.features.memoryAPI&&setInterval(()=>{const e=fe.memoryInfo;e.memoryPressure==="high"&&console.warn("High memory usage detected:",e)},6e4)}getSelectedProducts(){return v.getSelectedProducts()}clearSelection(){return v.clearAllSelections()}addProduct(e,t,o,s){return v.addProductToSelection(e,t,o,s)}updateSelectionCount(){this.navigationManager&&this.navigationManager.updateSelectionCount()}showError(e){alert(e)}}document.addEventListener("DOMContentLoaded",()=>{window.seimaScanner=new ro,window.seimaScanner.init()});window.addEventListener("DOMContentLoaded",()=>{fetch("./version.txt").then(u=>u.text()).then(u=>{const e=u.trim().split(`
`);if(e.length>0){const o=e[0].split(" - ")[0].trim();window._appVersion=o;const s=document.getElementById("menu-version-footer");s&&(s.textContent=`Ver: ${o}`)}}),ao(),co()});function ao(){const u=document.getElementById("help-btn");u&&u.addEventListener("click",()=>{lo()});const e=document.getElementById("crosshair-btn");e&&e.addEventListener("click",()=>{window.location.href="screens/validator.html"});const t=document.getElementById("landscape-btn");t&&t.addEventListener("click",()=>{window.location.href="screens/landscape.html"});const o=document.getElementById("admin-btn");o&&o.addEventListener("click",()=>{window.location.href="screens/admin.html"});const s=document.getElementById("quick-start-btn");s&&s.addEventListener("click",()=>{at.showForced()})}function co(){const u=document.getElementById("user-menu-container"),e=document.getElementById("user-menu-trigger"),t=document.getElementById("user-menu-dropdown"),o=document.getElementById("sign-in-btn"),s=document.getElementById("user-avatar"),n=document.getElementById("user-name-display");function i(a){var l,d,p,h,f,m,y,g,S,w;if(a){(l=F.CROSSHAIR)!=null&&l.ENABLED&&(B.configure(F.CROSSHAIR,a.email||""),B.preload().catch(ce=>{console.warn("Crosshair preload after login failed:",ce)})),u&&(u.style.display="block"),o&&(o.style.display="none");const b=document.getElementById("crosshair-btn");b&&(b.style.display=(d=F.CROSSHAIR)!=null&&d.ENABLED&&O.isStaffMode()?"":"none");const x=document.getElementById("landscape-btn");x&&(x.style.display=(p=F.CROSSHAIR)!=null&&p.ENABLED&&O.isAdmin()?"":"none");const k=document.getElementById("admin-btn");k&&(k.style.display=O.isAdmin()?"":"none");const P=document.getElementById("staff-divider"),z=(b==null?void 0:b.style.display)!=="none"||(x==null?void 0:x.style.display)!=="none"||(k==null?void 0:k.style.display)!=="none";P&&(P.style.display=z?"":"none");const _=r(a.name);s&&(s.textContent=_),n&&(n.textContent=((h=a.name)==null?void 0:h.split(" ")[0])||"User");const Z=(a.email||"").toLowerCase().endsWith("@seima.com.au")&&a.emailVerified===!1;let N=document.getElementById("verify-email-banner");if(Z?(N||(N=document.createElement("div"),N.id="verify-email-banner",N.className="verify-email-banner",N.innerHTML=`
            <span>Verify your email to access staff features.</span>
            <button id="verify-email-btn" class="verify-email-btn">Verify now</button>
          `,document.body.insertBefore(N,document.body.firstChild),N.querySelector("#verify-email-btn").addEventListener("click",()=>{H.showVerifyEmail(a.email,()=>{i(O.getCurrentUser()),N==null||N.remove()})})),N.style.display=""):N&&(N.style.display="none"),t){const ce=Z?`
            <button class="user-menu-item" id="menu-verify-email" style="color:var(--color-copper,#b87333);font-weight:600;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Verify Email (staff access)
            </button>`:"",Re=window._appVersion?`Ver: ${window._appVersion}`:"Loading...";t.innerHTML=`
          <div class="user-menu-header">
            <div class="user-menu-name">${c(a.name||"User")}</div>
            <div class="user-menu-email">${c(a.email||"")}</div>
          </div>
          <div class="user-menu-items">
            ${ce}
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
            <div class="user-menu-divider"></div>
            <button class="user-menu-item" id="menu-refresh">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
              Refresh All Data
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
          <div class="user-menu-footer" id="menu-version-footer" title="Click to view what's new">${Re}</div>
        `,(f=document.getElementById("menu-verify-email"))==null||f.addEventListener("click",()=>{t.style.display="none",H.showVerifyEmail(a.email,()=>{var ee;i(O.getCurrentUser()),(ee=document.getElementById("verify-email-banner"))==null||ee.remove()})}),(m=document.getElementById("menu-refresh"))==null||m.addEventListener("click",()=>{t.style.display="none",localStorage.removeItem("productCatalogCsv"),localStorage.removeItem("configPreferences"),localStorage.removeItem("pdfWizardSettings"),Object.keys(localStorage).filter(ee=>ee.startsWith("crosshair_")).forEach(ee=>localStorage.removeItem(ee)),window.location.reload()}),(y=document.getElementById("menu-version-footer"))==null||y.addEventListener("click",()=>{t.style.display="none",po()}),(g=document.getElementById("menu-profile"))==null||g.addEventListener("click",()=>{t.style.display="none",H.showEditProfile(ee=>{v.clearUserSettings(),i(ee)})}),(S=document.getElementById("menu-password"))==null||S.addEventListener("click",()=>{t.style.display="none",H.showChangePassword()}),(w=document.getElementById("menu-logout"))==null||w.addEventListener("click",()=>{t.style.display="none",v.clearUserSettings(),O.logout(),i(null)})}}else u&&(u.style.display="none"),o&&(o.style.display="block")}function r(a){if(!a)return"?";const l=a.trim().split(" ");return l.length>=2?(l[0][0]+l[l.length-1][0]).toUpperCase():a.substring(0,2).toUpperCase()}function c(a){const l=document.createElement("div");return l.textContent=a||"",l.innerHTML}e&&t&&(e.addEventListener("click",a=>{a.stopPropagation();const l=t.style.display!=="none";t.style.display=l?"none":"block"}),document.addEventListener("click",a=>{u!=null&&u.contains(a.target)||(t.style.display="none")})),o&&o.addEventListener("click",()=>{H.showLogin(a=>{i(a)})}),O.onAuthChange=i,i(O.getCurrentUser())}function lo(){const u=document.getElementById("user-guide-modal"),e=document.getElementById("user-guide-content");if(!u||!e)return;e.innerHTML=uo(),u.style.display="flex";const t=document.getElementById("user-guide-close");t&&(t.onclick=()=>{u.style.display="none"}),u.onclick=s=>{s.target===u&&(u.style.display="none")};const o=s=>{s.key==="Escape"&&(u.style.display="none",document.removeEventListener("keydown",o))};document.addEventListener("keydown",o)}function uo(){return`
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
  `}async function po(){try{const u=document.getElementById("changelog-modal"),e=document.getElementById("changelog-content"),s=(await(await fetch("./version.txt")).text()).trim().split(`
`);if(s.length===0){e.innerHTML="<p>No changelog available.</p>",u.style.display="flex";return}let n="";s.forEach(i=>{if(i.trim()){const r=i.indexOf(" - ");if(r>0){const c=i.substring(0,r).trim(),a=i.substring(r+3).trim();n+=`
            <div style="margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin: 0; color: #a09484;">v${c}</h4>
              </div>
              <p style="margin: 10px 0; color: #555; line-height: 1.5;">${a}</p>
            </div>
          `}}}),e.innerHTML=n||"<p>No changelog available.</p>",u.style.display="flex"}catch(u){console.error("Error loading changelog:",u),document.getElementById("changelog-content").innerHTML='<p style="color: #999;">Error loading changelog.</p>',document.getElementById("changelog-modal").style.display="flex"}}document.addEventListener("DOMContentLoaded",()=>{const u=document.getElementById("changelog-close");u&&u.addEventListener("click",()=>{document.getElementById("changelog-modal").style.display="none"})});document.addEventListener("click",u=>{const e=document.getElementById("changelog-modal");u.target===e&&(e.style.display="none")});
