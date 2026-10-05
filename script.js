/* ============ M.A.S.K. FRAMEWORK DATA ============ */
// Each entry is [letter, title, description]. Edit here to change the cards on every page.
const M=[["M","Meet Your Truth","Name what you are carrying and stop performing fine."],["A","Ask for Help","Asking early is a strength, not a weakness."],["S","Systems Save Lives","Habits, people, and structures keep you steady under pressure."],["K","Know Your Identity","You are more than your role, results, or reputation."]];

/* ============ HELPER ============ */
// Shorthand for querySelectorAll that returns a real array (so .map/.forEach work).
// Optional second argument limits the search to inside a parent element.
const $=(s,r=document)=>[...r.querySelectorAll(s)];

/* ============ BUILD THE M.A.S.K. CARDS ============ */
// Home page: short clickable cards (the description expands on click).
// The "if" checks make sure this only runs on pages that have the #maskgrid container.
if($("#maskgrid")[0])$("#maskgrid")[0].innerHTML=M.map(m=>`<div class="card mask" tabindex="0"><div class="l">${m[0]}</div><h3>${m[1]}</h3><div class="d"><p>${m[2]}</p></div></div>`).join("");
// M.A.S.K. page: full cards with the description always visible
if($("#maskfull")[0])$("#maskfull")[0].innerHTML=M.map(m=>`<div class="card"><div class="mask"><div class="l">${m[0]}</div></div><h3>${m[1]}</h3><p>${m[2]}</p></div>`).join("");
// Toggle the "open" class on click, or when Enter is pressed (keyboard accessibility)
$("#maskgrid .mask").forEach(c=>{const t=()=>c.classList.toggle("open");c.onclick=t;c.onkeydown=e=>e.key==="Enter"&&t()});

/* ============ BOOKING FORM ============ */
// HTML template for the inquiry form, reused everywhere a [data-form] container exists.
// On submit it stops the page reload and swaps the form for a thank-you message.
// NOTE: demo only. Nothing is sent anywhere yet; connect this to email or a form service.
const F=`<form onsubmit="event.preventDefault();this.outerHTML='<p><b>Thank you!</b> Your inquiry has been noted (demo form, not yet connected to email).</p>'"><div class="r"><div><label>Name</label><input required></div><div><label>Email</label><input type="email" required></div></div><div class="r"><div><label>Event Date</label><input type="date"></div><div><label>Location</label><input></div></div><div class="r"><div><label>Audience Type</label><select><option>Corporate</option><option>Athletes</option><option>University</option><option>Other</option></select></div><div><label>Format</label><select><option>Keynote</option><option>Workshop</option><option>Team experience</option></select></div></div><div><label>Core challenges</label><textarea rows="3"></textarea></div><button class="btn">Send inquiry</button></form>`;
// Insert the form into every [data-form] container on the page
$("[data-form]").forEach(d=>d.innerHTML=F);

/* ============ TESTIMONIAL CAROUSEL ============ */
// Placeholder quotes; replace with real client testimonials
const Q=["“Placeholder testimonial: add client quote here.” — Organization","“Placeholder testimonial: add athlete or university quote.” — Program","“Placeholder testimonial: add corporate leader quote.” — Company"];
const car=$("#car")[0],dots=$("#dots")[0];
// Only runs on pages that have the carousel (the home page)
if(car){
// Render one slide per quote (first one visible) and one dot button per slide
car.innerHTML=Q.map((q,i)=>`<div class="t${i?"":" on"}">${q}</div>`).join("");dots.innerHTML=Q.map((_,i)=>`<button class="${i?"":"on"}" aria-label="Quote ${i+1}"></button>`).join("");
// ci tracks the current slide; show(i) switches to slide i and updates the dots
let ci=0;const show=i=>{ci=i;$(".t",car).forEach((e,j)=>e.classList.toggle("on",j==i));$("button",dots).forEach((e,j)=>e.classList.toggle("on",j==i))};
// Clicking a dot jumps to that slide; otherwise auto-advance every 6 seconds, looping back to the start
$("button",dots).forEach((b,i)=>b.onclick=()=>show(i));setInterval(()=>show((ci+1)%Q.length),6000);}

/* ============ MODALS ============ */
// Returns the classList of a modal by id so we can add/remove the "on" (visible) class
const mod=id=>$("#"+id)[0].classList;
// Any "Book Fernando" button opens the booking modal
$("[data-book]").forEach(b=>b.onclick=()=>mod("bm").add("on"));
// Any reel button opens the speaking reel modal
$("[data-reel],#reel").forEach(b=>b.onclick=()=>mod("rm").add("on"));
// The × button closes all modals
$("[data-close]").forEach(b=>b.onclick=()=>$(".modal").forEach(m=>m.classList.remove("on")));
// Clicking the dark backdrop (but not the white box inside) also closes the modal
$(".modal").forEach(m=>m.onclick=e=>e.target===m&&m.classList.remove("on"));

/* ============ MOBILE MENU ============ */
// Hamburger button shows/hides the nav on small screens
$("#menu")[0].onclick=()=>$("#nav")[0].classList.toggle("open");

/* ============ SCROLL FADE-IN ============ */
// Add the "in" class to each .fade element once 12% of it is visible, triggering the CSS fade-in
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("in")),{threshold:.12});
$(".fade").forEach(e=>io.observe(e));

/* ============ ACTIVE NAV LINK ============ */
// Highlight the nav link that matches the current page (defaults to home.html at the site root)
const cur=location.pathname.split("/").pop()||"home.html";
$("#nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")===cur));