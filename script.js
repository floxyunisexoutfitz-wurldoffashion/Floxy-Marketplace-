const LOGO="assets/logo.png";
const FLYER="assets/flyer.jpg";
const IMG_MALE="assets/male-outfit.jpg";
const IMG_FEMALE="assets/female-outfit.jpg";

const ICON={
 wa:'<svg class="i" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-3.7-.9-3.1-1.3-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.3.5-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>',
 tt:'<svg class="i" viewBox="0 0 24 24"><path d="M16.6 2h-3.2v13.2a2.8 2.8 0 1 1-2-2.7V9.2a6 6 0 1 0 5.2 5.9V8.6a7.4 7.4 0 0 0 4.3 1.4V6.8a4.3 4.3 0 0 1-4.3-4.8Z"/></svg>',
 ig:'<svg class="i" viewBox="0 0 24 24"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.3-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
 fb:'<svg class="i" viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.5-3.3h-3.2V8.6c0-.9.4-1.7 1.8-1.7h1.5V4.1S15.4 3.9 14.2 3.9c-2.5 0-4.1 1.5-4.1 4.2v2.6H7.4V14h2.7v8h3.4Z"/></svg>',
 mail:'<svg class="i" viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.5 7v.2L12 12.4 19.5 7.2V7L12 12.2Z"/><path d="m4 7 8 5.5L20 7v-.5H4V7Z"/></svg>',
 cart:'<svg class="i" viewBox="0 0 24 24"><path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM1 2v2h2l3.6 7.6-1.4 2.4A2 2 0 0 0 7 17h12v-2H7.4l1.1-2h7.5a2 2 0 0 0 1.8-1l3.6-6.5A1 1 0 0 0 20.5 4H5.2l-.9-2H1Z"/></svg>',
 search:'<svg class="i" viewBox="0 0 24 24"><path d="M10 2a8 8 0 0 1 6.3 12.9l5.4 5.4-1.4 1.4-5.4-5.4A8 8 0 1 1 10 2Zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"/></svg>'
};

/* ---------- storage ---------- */
const DEFAULT_SETTINGS={
  whatsapp:"2349128391588", tiktok:"graceofgod2846", instagram:"floxyunisexoutfits",
  facebook:"Floxy Unisex Outfits", email:"yourname@gmail.com",
  address:"Road 1, Atlantic Garden Estate, Alabeko, General Paints, Lekki-Epe Expressway, Lagos, Nigeria",
  adminPass:"floxy2026", banner:"10% discount on all orders. Few units left."
};
const CATS=["Men","Women","Kids","Couples & Sets","Fabrics"];
const SEED=[
 {id:"p1",name:"Green Ankara Set for Men (Top & Trousers)",price:30000,oldPrice:33300,cat:"Men",sizes:"S, M, L, XL, XXL",desc:"Bold green Ankara print with gold eye motifs. Matching top and trousers, neatly stitched.\nCustom sizes available. Contact us to place your order.",images:[IMG_MALE],stock:true,t:3},
 {id:"p2",name:"Green Ankara Long Gown for Women",price:35000,oldPrice:38900,cat:"Women",sizes:"S, M, L, XL, XXL",desc:"Free-flowing long gown in the same green Ankara print, with wide sleeves and a keyhole neckline.\nCustom sizes available. Contact us to place your order.",images:[IMG_FEMALE],stock:true,t:2},
 {id:"p3",name:"Complete Set: Man + Woman (Matching Couple Outfit)",price:50000,oldPrice:55600,cat:"Couples & Sets",sizes:"Custom",desc:"The full matching set for him and her in one order.\nSave more when you order both together.",images:[FLYER],stock:true,t:1}
];
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){toast("Storage is full. Remove some products or use smaller photos.");return false}}
};
let settings={...DEFAULT_SETTINGS,...store.get("floxy_settings",{})};
let products=store.get("floxy_products",null);
if(!products){products=SEED;store.set("floxy_products",products)}
let cart=store.get("floxy_cart",[]);
let ui={cat:"All",q:"",sort:"new",drawer:false,admin:!!sessionStorage.getItem("floxy_admin"),tab:"products",edit:null,draftImgs:[],pimg:0,psize:""};

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const fmt=n=>"₦"+Number(n||0).toLocaleString("en-NG");
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const waLink=t=>`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(t)}`;
const pct=p=>p.oldPrice&&p.oldPrice>p.price?Math.round((1-p.price/p.oldPrice)*100):0;
function toast(m){const e=document.createElement("div");e.className="toast";e.textContent=m;document.body.appendChild(e);setTimeout(()=>e.remove(),2600)}
function route(){return location.hash.replace(/^#\/?/,"")||""}
function go(h){location.hash=h;window.scrollTo(0,0)}
window.addEventListener("hashchange",render);

/* ---------- shared pieces ---------- */
function header(){
  const n=cart.reduce((a,c)=>a+c.qty,0);
  return `<div class="strip">${esc(settings.banner)}</div>
  <header><div class="hbar">
    <a class="brand" href="#/"><img src="${LOGO}" alt="Floxy logo"><div><b>Floxy</b><small>Unisex Outfits</small></div></a>
    <form class="search" onsubmit="event.preventDefault();ui.q=this.q.value;go('');render()">
      <input name="q" value="${esc(ui.q)}" placeholder="Search outfits, fabrics, styles" aria-label="Search">
      <button aria-label="Search">${ICON.search}</button></form>
    <button class="iconbtn" onclick="ui.drawer=true;render()" aria-label="Open cart">${ICON.cart}<span class="lbl">Cart</span>${n?`<span class="badge">${n}</span>`:""}</button>
  </div></header>`;
}
function footer(){
  const s=settings;
  return `<footer><div class="wrap"><div class="fg">
   <div><h4>Floxy Unisex Outfits</h4><p>Wurld of Fashion. Men and women, kids and adults, African styles and styles from other continents, in different materials with quality stitches.</p><p style="margin-top:10px">${esc(s.address)}</p></div>
   <div><h4>Talk to us</h4><ul>
     <li><a class="ct" href="${waLink("Hello Floxy, I'd like to make an enquiry.")}" target="_blank" rel="noopener">${ICON.wa}WhatsApp +${esc(s.whatsapp)}</a></li>
     <li><a class="ct" href="mailto:${esc(s.email)}">${ICON.mail}${esc(s.email)}</a></li></ul></div>
   <div><h4>Follow us</h4><ul>
     <li><a class="ct" href="https://www.tiktok.com/@${esc(s.tiktok)}" target="_blank" rel="noopener">${ICON.tt}@${esc(s.tiktok)}</a></li>
     <li><a class="ct" href="https://instagram.com/${esc(s.instagram)}" target="_blank" rel="noopener">${ICON.ig}@${esc(s.instagram)}</a></li>
     <li><a class="ct" href="https://www.facebook.com/search/top?q=${encodeURIComponent(s.facebook)}" target="_blank" rel="noopener">${ICON.fb}${esc(s.facebook)}</a></li></ul></div>
  </div>
  <div class="copy"><span>© ${new Date().getFullYear()} Floxy Unisex Outfits. Style fits you.</span><a href="#/admin">Admin</a></div></div></footer>
  <a class="floatwa" href="${waLink("Hello Floxy, I'd like to make an enquiry.")}" target="_blank" rel="noopener">${ICON.wa}Chat with us</a>`;
}
function drawer(){
  if(!ui.drawer)return "";
  const items=cart.map(c=>{const p=products.find(x=>x.id===c.id);return p?{...c,p}:null}).filter(Boolean);
  const total=items.reduce((a,c)=>a+c.p.price*c.qty,0);
  return `<div class="ov" onclick="ui.drawer=false;render()"></div>
  <aside class="drawer" role="dialog" aria-label="Cart"><header><h2>Your cart</h2><button class="iconbtn" onclick="ui.drawer=false;render()">Close</button></header>
   <div class="dl">${items.length?items.map((c,i)=>`<div class="ci"><img src="${c.p.images[0]}" alt=""><div><b style="font-size:14px">${esc(c.p.name)}</b><br><small>${c.size?"Size: "+esc(c.size)+" · ":""}${fmt(c.p.price)}</small>
     <div class="qty"><button onclick="qty(${cart.indexOf(c.__o||cart.find(x=>x.id===c.id&&x.size===c.size))},-1)" aria-label="Less">−</button><span>${c.qty}</span><button onclick="qty(${cart.indexOf(cart.find(x=>x.id===c.id&&x.size===c.size))},1)" aria-label="More">+</button></div></div>
     <button class="back" style="margin:0" onclick="rm(${cart.indexOf(cart.find(x=>x.id===c.id&&x.size===c.size))})">Remove</button></div>`).join(""):`<div class="empty" style="margin-top:20px">Your cart is empty. Add an outfit to start your order.</div>`}</div>
   ${items.length?`<div class="df"><div class="tot"><span>Total</span><span>${fmt(total)}</span></div>
     <a class="btn wa" style="justify-content:center" target="_blank" rel="noopener" href="${waLink(orderText(items,total))}">${ICON.wa}Order on WhatsApp</a>
     <button class="btn ghost" onclick="cart=[];store.set('floxy_cart',cart);render()">Clear cart</button></div>`:""}
  </aside>`;
}
function orderText(items,total){
  return "Hello Floxy, I want to order:\n"+items.map(c=>`• ${c.p.name}${c.size?" (Size "+c.size+")":""} x${c.qty} = ${fmt(c.p.price*c.qty)}`).join("\n")+`\n\nTotal: ${fmt(total)}\nPlease confirm availability and delivery.`;
}
function addCart(id,size){
  const p=products.find(x=>x.id===id); if(!p||!p.stock)return;
  const f=cart.find(c=>c.id===id&&c.size===(size||""));
  if(f)f.qty++; else cart.push({id,size:size||"",qty:1});
  store.set("floxy_cart",cart); toast("Added to cart"); render();
}
function qty(i,d){if(i<0)return;cart[i].qty+=d;if(cart[i].qty<1)cart.splice(i,1);store.set("floxy_cart",cart);render()}
function rm(i){if(i<0)return;cart.splice(i,1);store.set("floxy_cart",cart);render()}

function card(p){
  const d=pct(p);
  return `<article class="card" onclick="go('product/${p.id}')">
    <div class="ph"><img loading="lazy" src="${p.images[0]}" alt="${esc(p.name)}">${!p.stock?'<span class="tag sold">Sold out</span>':d?`<span class="tag">-${d}%</span>`:""}</div>
    <div class="bd"><h3>${esc(p.name)}</h3>
      <div><span class="price">${fmt(p.price)}</span>${d?`<span class="old">${fmt(p.oldPrice)}</span>`:""}</div>
      <div class="meta">${esc(p.cat)}</div>
      <div class="add"><button class="btn sm" ${p.stock?"":"disabled style='opacity:.5;cursor:not-allowed'"} onclick="event.stopPropagation();${p.sizes&&p.sizes!=='Custom'?`go('product/${p.id}')`:`addCart('${p.id}')`}">${p.stock?(p.sizes&&p.sizes!=='Custom'?"Choose size":"Add to cart"):"Sold out"}</button></div></div></article>`;
}

/* ---------- pages ---------- */
function home(){
  let list=products.filter(p=>(ui.cat==="All"||p.cat===ui.cat)&&(!ui.q||(p.name+" "+p.cat+" "+p.desc).toLowerCase().includes(ui.q.toLowerCase())));
  if(ui.sort==="low")list.sort((a,b)=>a.price-b.price);
  else if(ui.sort==="high")list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>(b.t||0)-(a.t||0));
  const cats=["All",...CATS];
  return `<div class="wrap">
   <section class="hero"><div>
     <h1>Outfits cut for the way <span>you</span> carry yourself.</h1>
     <p>Ankara and African prints, plus styles from other continents. Men, women, kids and adults, all stitched with care in Lagos.</p>
     <div class="cta"><a class="btn" href="#shop" onclick="event.preventDefault();document.getElementById('shop').scrollIntoView({behavior:'smooth'})">Shop outfits</a>
     <a class="btn ghost" target="_blank" rel="noopener" href="${waLink("Hello Floxy, I'd like a custom outfit.")}">${ICON.wa}Order a custom outfit</a></div></div>
     <div class="heroimg"><img src="${FLYER}" alt="Floxy matching green Ankara outfits for a man and a woman"></div></section>
   <div class="perks"><div class="perk"><i>👫</i>Men & women</div><div class="perk"><i>🧒</i>Kids & adults</div><div class="perk"><i>🌍</i>African & global styles</div><div class="perk"><i>🧵</i>Quality stitches</div></div>
   <div id="shop"><div class="cats">${cats.map(c=>`<button class="chip ${ui.cat===c?"on":""}" onclick="ui.cat='${c}';render()">${c}</button>`).join("")}</div>
   <div class="sechead"><h2>${ui.q?`Results for “${esc(ui.q)}”`:ui.cat==="All"?"All outfits":esc(ui.cat)} <small style="font-size:14px;color:var(--muted);font-family:Figtree">${list.length} item${list.length===1?"":"s"}</small></h2>
     <select onchange="ui.sort=this.value;render()" aria-label="Sort"><option value="new" ${ui.sort==="new"?"selected":""}>Newest</option><option value="low" ${ui.sort==="low"?"selected":""}>Price: low to high</option><option value="high" ${ui.sort==="high"?"selected":""}>Price: high to low</option></select></div>
   ${list.length?`<div class="grid">${list.map(card).join("")}</div>`:`<div class="empty">No outfits match your search. Try another category or message us for a custom order.</div>`}</div>
  </div>`;
}
function productPage(id){
  const p=products.find(x=>x.id===id);
  if(!p)return `<div class="wrap"><div class="empty" style="margin-top:30px">This outfit is no longer available. <a href="#/" style="color:var(--gold2)">Back to shop</a></div></div>`;
  const d=pct(p), sizes=(p.sizes||"").split(",").map(s=>s.trim()).filter(Boolean);
  const msg=`Hello Floxy, I'm interested in "${p.name}" (${fmt(p.price)})${ui.psize?" in size "+ui.psize:""}.`;
  const related=products.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
  return `<div class="wrap"><button class="back" onclick="history.back()">← Back</button>
   <div class="pp"><div class="gal"><div class="main"><img src="${p.images[ui.pimg]||p.images[0]}" alt="${esc(p.name)}"></div>
     ${p.images.length>1?`<div class="thumbs">${p.images.map((m,i)=>`<img src="${m}" class="${i===ui.pimg?"on":""}" onclick="ui.pimg=${i};render()" alt="">`).join("")}</div>`:""}</div>
    <div><div style="color:var(--muted);font-size:14px">${esc(p.cat)}</div><h1>${esc(p.name)}</h1>
     <div><span class="big">${fmt(p.price)}</span>${d?`<span class="old" style="font-size:17px">${fmt(p.oldPrice)}</span> <span class="tag" style="position:static;display:inline-block;margin-left:6px">-${d}%</span>`:""}</div>
     ${sizes.length&&sizes[0]!=="Custom"?`<div style="margin-top:16px;font-weight:600">Size</div><div class="row">${sizes.map(s=>`<button class="opt ${ui.psize===s?"on":""}" onclick="ui.psize='${esc(s)}';render()">${esc(s)}</button>`).join("")}</div>`:""}
     <p class="d">${esc(p.desc)}</p>
     <div style="display:grid;gap:10px;max-width:420px">
      ${p.stock?`<button class="btn" style="justify-content:center" onclick="${sizes.length&&sizes[0]!=="Custom"?`ui.psize?addCart('${p.id}',ui.psize):toast('Please choose a size')`:`addCart('${p.id}')`}">${ICON.cart}Add to cart</button>
       <a class="btn wa" style="justify-content:center" target="_blank" rel="noopener" href="${waLink(msg)}">${ICON.wa}Order this on WhatsApp</a>`:`<button class="btn" disabled style="opacity:.5;justify-content:center">Sold out</button><a class="btn wa" style="justify-content:center" target="_blank" rel="noopener" href="${waLink("Hello Floxy, when will \""+p.name+"\" be back in stock?")}">${ICON.wa}Ask when it's back</a>`}
     </div></div></div>
   ${related.length?`<div class="sechead"><h2>More in ${esc(p.cat)}</h2></div><div class="grid">${related.map(card).join("")}</div>`:""}</div>`;
}

/* ---------- admin ---------- */
function adminPage(){
  if(!ui.admin)return `<div class="wrap"><form class="login" onsubmit="event.preventDefault();doLogin(this.pw.value)">
    <img src="${LOGO}" alt=""><h2 class="serif">Admin sign in</h2><div class="field"><label for="pw">Password</label><input class="in" id="pw" name="pw" type="password" autocomplete="current-password" required></div>
    <button class="btn" style="justify-content:center">Sign in</button><a href="#/" style="color:var(--muted)">Back to shop</a></form></div>`;
  const tabs=[["products","Products"],["new",ui.edit?"Edit product":"Post new outfit"],["settings","Contacts & settings"]];
  return `<div class="wrap adm"><div class="sechead"><h2>Floxy admin</h2><div style="display:flex;gap:8px"><a class="btn ghost sm" href="#/">View shop</a><button class="btn ghost sm" onclick="logout()">Sign out</button></div></div>
   <div class="tabs">${tabs.map(([k,l])=>`<button class="chip ${ui.tab===k?"on":""}" onclick="ui.tab='${k}';if(ui.tab!=='new'){ui.edit=null;ui.draftImgs=[]}render()">${l}</button>`).join("")}</div>
   ${ui.tab==="products"?adminList():ui.tab==="new"?adminForm():adminSettings()}</div>`;
}
function adminList(){
  return `<div class="panel"><b>${products.length} product${products.length===1?"":"s"} in your shop</b>
   <div class="tbl">${[...products].sort((a,b)=>(b.t||0)-(a.t||0)).map(p=>`<div class="tr"><img src="${p.images[0]}" alt=""><div><b style="font-size:14.5px">${esc(p.name)}</b><br><small style="color:var(--muted)">${fmt(p.price)} · ${esc(p.cat)} · ${p.stock?"In stock":"Sold out"}</small></div>
     <div class="acts"><button class="btn ghost sm" onclick="toggleStock('${p.id}')">${p.stock?"Mark sold out":"Mark in stock"}</button><button class="btn ghost sm" onclick="editP('${p.id}')">Edit</button><button class="btn red sm" onclick="delP('${p.id}')">Delete</button></div></div>`).join("")||'<div class="empty">No products yet. Post your first outfit.</div>'}</div></div>`;
}
function adminForm(){
  const p=ui.edit?products.find(x=>x.id===ui.edit):null;
  return `<form class="panel" onsubmit="event.preventDefault();saveP(this)"><div class="f2">
   <div class="field full"><label>Photos (first photo is the cover)</label>
     <label class="drop" for="files">Tap to choose photos from your phone or computer</label>
     <input id="files" type="file" accept="image/*" multiple class="hidden" onchange="addImgs(this.files)">
     <div class="prev">${ui.draftImgs.map((m,i)=>`<div><img src="${m}" alt=""><button type="button" onclick="ui.draftImgs.splice(${i},1);render()" aria-label="Remove photo">×</button></div>`).join("")}</div></div>
   <div class="field full"><label for="n">Outfit name</label><input class="in" id="n" name="name" required value="${esc(p?.name||"")}" placeholder="e.g. Red Ankara Short Gown"></div>
   <div class="field"><label for="pr">Price (₦)</label><input class="in" id="pr" name="price" type="number" min="0" required value="${p?.price??""}"></div>
   <div class="field"><label for="op">Old price (₦, optional, shows a discount)</label><input class="in" id="op" name="oldPrice" type="number" min="0" value="${p?.oldPrice??""}"></div>
   <div class="field"><label for="c">Category</label><select class="in" id="c" name="cat">${CATS.map(c=>`<option ${p?.cat===c?"selected":""}>${c}</option>`).join("")}</select></div>
   <div class="field"><label for="s">Sizes (separate with commas)</label><input class="in" id="s" name="sizes" value="${esc(p?.sizes??"S, M, L, XL")}" placeholder="S, M, L, XL or Custom"></div>
   <div class="field full"><label for="d">Description</label><textarea class="in" id="d" name="desc" placeholder="Fabric, fit, colours, delivery time">${esc(p?.desc||"")}</textarea></div>
   <div class="field"><label for="st">Availability</label><select class="in" id="st" name="stock"><option value="1" ${p&&!p.stock?"":"selected"}>In stock</option><option value="0" ${p&&!p.stock?"selected":""}>Sold out</option></select></div>
  </div><div style="margin-top:16px;display:flex;gap:10px"><button class="btn">${p?"Save changes":"Post outfit"}</button>${p?`<button type="button" class="btn ghost" onclick="ui.edit=null;ui.draftImgs=[];ui.tab='products';render()">Cancel</button>`:""}</div></form>`;
}
function adminSettings(){
  const s=settings;
  const f=(k,l,t="text")=>`<div class="field"><label for="s_${k}">${l}</label><input class="in" id="s_${k}" name="${k}" type="${t}" value="${esc(s[k])}"></div>`;
  return `<form class="panel" onsubmit="event.preventDefault();saveS(this)"><div class="note">These appear on the shop footer and in every WhatsApp order button.</div><div class="f2">
   ${f("whatsapp","WhatsApp number (country code, no + or spaces)")}${f("email","Gmail address","email")}${f("tiktok","TikTok username (no @)")}${f("instagram","Instagram username (no @)")}${f("facebook","Facebook page name")}${f("banner","Top banner message")}
   <div class="field full"><label for="s_address">Address</label><input class="in" id="s_address" name="address" value="${esc(s.address)}"></div>
   ${f("adminPass","Admin password","text")}</div><div style="margin-top:16px"><button class="btn">Save settings</button></div></form>`;
}
function doLogin(pw){if(pw===settings.adminPass){ui.admin=true;sessionStorage.setItem("floxy_admin","1");render()}else toast("Wrong password")}
function logout(){ui.admin=false;sessionStorage.removeItem("floxy_admin");go("");}
function toggleStock(id){const p=products.find(x=>x.id===id);p.stock=!p.stock;store.set("floxy_products",products);render()}
function delP(id){if(!confirm("Delete this product?"))return;products=products.filter(x=>x.id!==id);cart=cart.filter(c=>c.id!==id);store.set("floxy_products",products);store.set("floxy_cart",cart);toast("Deleted");render()}
function editP(id){const p=products.find(x=>x.id===id);ui.edit=id;ui.draftImgs=[...p.images];ui.tab="new";render();window.scrollTo(0,0)}
function resize(file){return new Promise(res=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const M=900,k=Math.min(1,M/Math.max(im.width,im.height));const c=document.createElement("canvas");c.width=im.width*k;c.height=im.height*k;c.getContext("2d").drawImage(im,0,0,c.width,c.height);res(c.toDataURL("image/jpeg",.78))};im.src=r.result};r.readAsDataURL(file)})}
async function addImgs(files){for(const f of files){ui.draftImgs.push(await resize(f))}render()}
function saveP(form){
  if(!ui.draftImgs.length){toast("Add at least one photo");return}
  const v=Object.fromEntries(new FormData(form));
  const data={name:v.name.trim(),price:+v.price,oldPrice:v.oldPrice?+v.oldPrice:0,cat:v.cat,sizes:v.sizes.trim(),desc:v.desc.trim(),images:ui.draftImgs,stock:v.stock==="1"};
  if(ui.edit){Object.assign(products.find(x=>x.id===ui.edit),data)}
  else products.push({id:"p"+Date.now(),t:Date.now(),...data});
  if(store.set("floxy_products",products)){toast(ui.edit?"Changes saved":"Posted. It is now live in the shop");ui.edit=null;ui.draftImgs=[];ui.tab="products"}
  render();
}
function saveS(form){settings={...settings,...Object.fromEntries(new FormData(form))};if(store.set("floxy_settings",settings))toast("Settings saved");render()}

/* ---------- render ---------- */
function render(){
  const r=route(), y=window.scrollY;
  let body;
  if(r==="admin")body=adminPage();
  else if(r.startsWith("product/")){if(ui.lastP!==r){ui.pimg=0;ui.psize="";ui.lastP=r}body=productPage(r.split("/")[1])}
  else body=home();
  const focus=document.activeElement;
  $("#app").innerHTML=header()+body+footer()+drawer();
  if(r==="admin"||ui.drawer)window.scrollTo(0,y);
}
render();
