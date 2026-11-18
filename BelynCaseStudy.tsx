import React, { useEffect, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowUpRight, Check, CheckCircle2, CreditCard,
  Github, Linkedin, Menu, X, ShoppingBag, ShieldCheck, Smartphone,
  Monitor, Tablet, Package, Star, Database, UserRound, Truck, Layers
} from "lucide-react";

const liveShot = "https://image.thum.io/get/width/1600/crop/1050/noanimate/https://www.belyn.in/";
const mobileShot = "https://image.thum.io/get/width/430/crop/1050/noanimate/https://www.belyn.in/";
const site = "https://www.belyn.in/";

export default function BelynCaseStudy() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const title = "BELYN — From Kashmir to the Digital World | Inam Ul Haq";
    const description = "A complete eCommerce experience for BELYN, a Kashmir-rooted brand. Case study by Inam Ul Haq — Web Developer, UI/UX Designer and Digital Creator.";
    document.title = title;
    const setMeta = (selector: string, attr: string, value: string) => {
      let node = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!node) { node = document.createElement("meta"); document.head.appendChild(node); }
      node.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[property="og:url"]', "content", "https://inam.dev/projects/belyn");
    setMeta('meta[property="og:image"]', "content", liveShot);
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("belyn-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".belyn-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="belyn-case min-h-screen bg-[#f8f6ef] text-[#202923]">
      <style>{`
        .belyn-case { --forest:#075b4d; --ivory:#f8f6ef; --cream:#e9e5d8; --gold:#b99a62; --ink:#392c22; font-family:Inter,Arial,sans-serif; }
        .belyn-display { font-family:'Cormorant Garamond',Georgia,serif; }
        .belyn-mono { font-family:'JetBrains Mono',monospace; }
        .belyn-rule { border-color:rgba(37,55,45,.17); }
        .belyn-reveal { opacity:0; transform:translateY(24px); transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1); }
        .belyn-reveal.belyn-visible { opacity:1; transform:translateY(0); }
        .belyn-shot { box-shadow:0 32px 90px rgba(22,43,33,.16); }
        .belyn-link { transition:color .2s ease, background .2s ease, transform .2s ease; }
        .belyn-link:hover { transform:translateY(-2px); }
        .belyn-case a:focus-visible,.belyn-case button:focus-visible { outline:2px solid var(--forest); outline-offset:4px; }
        @media(prefers-reduced-motion:reduce){.belyn-reveal{opacity:1;transform:none;transition:none}.belyn-link{transition:none}}
      `}</style>

      <header className="sticky top-0 z-50 border-b border-[#20372d]/10 bg-[#f8f6ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="/" className="belyn-mono text-[11px] font-semibold tracking-[.22em] text-[#20372d]">INAM<span className="text-[#b99a62]">.</span></a>
          <nav className="hidden items-center gap-7 text-[10px] font-semibold tracking-[.18em] text-[#687269] md:flex" aria-label="Case study navigation">
            {["OVERVIEW","APPROACH","FEATURES","TECHNOLOGY","CREDITS"].map((item) => <button key={item} onClick={() => jump(item.toLowerCase())} className="belyn-link hover:text-[#075b4d]">{item}</button>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href={site} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#075b4d] px-4 py-2.5 text-[10px] font-bold tracking-[.13em] text-white transition hover:bg-[#123d34] sm:flex">VISIT BELYN <ArrowUpRight size={13}/></a>
            <button className="rounded-full border border-[#20372d]/15 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={17}/> : <Menu size={17}/>}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-[#20372d]/10 bg-[#f8f6ef] px-5 py-4 md:hidden">{["overview","approach","features","technology","credits"].map((item) => <button key={item} onClick={() => jump(item)} className="block w-full border-b border-[#20372d]/10 py-3 text-left text-xs font-semibold tracking-[.15em]">{item.toUpperCase()}</button>)}<a href={site} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 py-3 text-xs font-bold text-[#075b4d]">VISIT LIVE WEBSITE <ArrowUpRight size={14}/></a></nav>}
      </header>

      <main>
        <section className="relative overflow-hidden px-5 pb-14 pt-16 md:px-10 md:pb-24 md:pt-24">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] font-semibold tracking-[.2em] text-[#687269] md:text-[10px]">
              <span>INDEPENDENT PROJECT / 2026</span><span className="h-px w-8 bg-[#b99a62]"/><span>ECOMMERCE · KASHMIR, INDIA</span>
            </div>
            <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_.6fr]">
              <div>
                <p className="mb-5 text-[10px] font-bold tracking-[.25em] text-[#075b4d]">BELYN — BORN IN KASHMIR. CRAFTED WITH PURITY.</p>
                <h1 className="belyn-display max-w-[1050px] text-[clamp(3.8rem,10.2vw,9.8rem)] font-semibold uppercase leading-[.79] tracking-[-.045em] text-[#173d32]">FROM KASHMIR,<br/><span className="pl-[.18em] text-[#a18a60]">TO THE DIGITAL</span><br/>WORLD.</h1>
              </div>
              <div className="pb-2 lg:pb-4">
                <p className="max-w-sm text-base leading-7 text-[#59655c] md:text-lg md:leading-8">Building a premium eCommerce experience for a Kashmiri brand — bringing local products, thoughtful storytelling and a complete shopping journey into one digital storefront.</p>
                <a href="#overview" className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold tracking-[.18em] text-[#075b4d]">EXPLORE THE PROJECT <ArrowDown size={14}/></a>
              </div>
            </div>
            <div className="relative mt-16 md:mt-24">
              <div className="absolute -left-2 top-8 z-10 hidden -rotate-90 text-[9px] font-semibold tracking-[.24em] text-[#687269] xl:block">THE DIGITAL STOREFRONT / 01</div>
              <div className="belyn-shot overflow-hidden rounded-[4px] border border-[#20372d]/15 bg-white">
                <div className="flex h-9 items-center gap-2 border-b border-black/5 bg-[#f3f1ea] px-4">
                  <span className="h-2 w-2 rounded-full bg-[#c9bda6]"/><span className="h-2 w-2 rounded-full bg-[#c9bda6]"/><span className="h-2 w-2 rounded-full bg-[#c9bda6]"/>
                  <div className="mx-auto rounded-full bg-white px-6 py-1 text-[9px] text-[#777d75]">www.belyn.in</div>
                </div>
                <img src={liveShot} alt="Live BELYN storefront homepage captured from belyn.in" className="block aspect-[16/9] w-full object-cover object-top" fetchPriority="high"/>
              </div>
              <div className="mt-4 flex flex-wrap justify-between gap-3 text-[9px] font-semibold tracking-[.16em] text-[#778078]"><span>LIVE WEBSITE PREVIEW · BELYN.IN</span><span>DESKTOP STOREFRONT / RESPONSIVE EXPERIENCE</span></div>
            </div>
          </div>
        </section>

        <section id="overview" className="scroll-mt-24 border-t belyn-rule px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div className="belyn-reveal"><Kicker>01 / PROJECT OVERVIEW</Kicker><h2 className="belyn-display mt-5 text-5xl leading-[.95] text-[#173d32] md:text-7xl">A local story.<br/>A digital home.</h2></div>
            <div className="belyn-reveal">
              <p className="max-w-3xl text-xl leading-8 text-[#39483e] md:text-3xl md:leading-[1.45]">BELYN is positioned around the character and provenance of Kashmiri products. The brief was to translate that identity into a considered online store — one that feels rooted, clear and dependable from the first visit to checkout.</p>
              <p className="mt-7 max-w-2xl text-sm leading-7 text-[#687269]">The work extended beyond a landing page. The codebase contains a multi-route storefront with product discovery, product detail, cart, checkout, customer account flows, order history and supporting operational interfaces.</p>
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t belyn-rule pt-7 sm:grid-cols-4">
                <Meta label="CLIENT / BRAND" value="BELYN"/>
                <Meta label="INDUSTRY" value="KASHMIRI ECOMMERCE"/>
                <Meta label="ROLE" value="DESIGN & DEVELOPMENT"/>
                <Meta label="LOCATION" value="KASHMIR, INDIA"/>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#173d32] px-5 py-20 text-[#f8f6ef] md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div className="belyn-reveal"><Kicker light>02 / THE CHALLENGE</Kicker><h2 className="belyn-display mt-5 text-5xl leading-[.94] md:text-7xl">Commerce<br/>with a sense<br/>of place.</h2></div>
            <div className="belyn-reveal grid gap-8 sm:grid-cols-2">
              <Challenge n="01" title="Translate provenance" body="Present the Kashmir origin story and product context without overwhelming the shopping experience."/>
              <Challenge n="02" title="Build trust through clarity" body="Give customers useful product information, transparent choices and a legible path from discovery to order."/>
              <Challenge n="03" title="Support real shopping flows" body="Connect catalogue, product variants, cart and checkout rather than stopping at a static promotional page."/>
              <Challenge n="04" title="Design for everyday devices" body="Keep navigation, product browsing and purchase actions comfortable across narrow mobile screens and larger displays."/>
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="belyn-reveal mb-14 grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><Kicker>03 / THE APPROACH</Kicker><h2 className="belyn-display mt-5 text-5xl leading-[.95] text-[#173d32] md:text-7xl">Designed to feel<br/>considered.</h2></div><p className="max-w-xl text-sm leading-7 text-[#687269]">The visual direction balances editorial warmth with practical commerce patterns. A restrained palette and serif-led brand typography establish character; a clean sans-serif interface keeps product information and controls easy to scan.</p></div>
            <div className="grid gap-px overflow-hidden border belyn-rule bg-[#d9d7cc] md:grid-cols-3">
              <Approach n="01" title="Brand before decoration" body="Deep green, warm ivory, soft cream and muted gold carry the identity. Generous whitespace gives product imagery and copy room to breathe."/>
              <Approach n="02" title="A clear shopping path" body="Collections, product pages, variant selection, cart and checkout are separated into purposeful routes and reusable interface modules."/>
              <Approach n="03" title="Responsive by design" body="Layouts adapt across breakpoints, with a dedicated mobile navigation, touch-friendly controls and product media that retains its proportions."/>
            </div>
          </div>
        </section>

        <section id="design" className="scroll-mt-24 bg-[#e9e5d8] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="belyn-reveal mb-12"><Kicker>04 / DESIGN SYSTEM</Kicker><h2 className="belyn-display mt-5 text-5xl text-[#173d32] md:text-7xl">Quiet confidence.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#687269]">Design tokens and interface styles verified in the BELYN source stylesheet and document head.</p></div>
            <div className="grid gap-4 lg:grid-cols-[1.05fr_.95fr]">
              <div className="belyn-reveal rounded-sm bg-[#f8f6ef] p-7 md:p-10">
                <p className="belyn-mono text-[9px] tracking-[.2em] text-[#7c8279]">TYPOGRAPHY / BRAND + INTERFACE</p>
                <div className="mt-8 border-b belyn-rule pb-8"><p className="belyn-display text-6xl text-[#075b4d] md:text-8xl">Kashmir.</p><p className="mt-2 text-xs text-[#687269]">Cormorant Garamond · Editorial display</p></div>
                <div className="pt-7"><p className="text-3xl font-medium tracking-tight text-[#392c22] md:text-5xl">Made to be explored.</p><p className="mt-2 text-xs text-[#687269]">Inter · Interface and body copy</p></div>
              </div>
              <div className="belyn-reveal rounded-sm bg-[#f8f6ef] p-7 md:p-10">
                <p className="belyn-mono text-[9px] tracking-[.2em] text-[#7c8279]">COLOUR / CORE PALETTE</p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[
                    ["#075B4D","Deep green"],["#F8F6EF","Warm ivory"],["#E9E5D8","Soft cream"],["#B99A62","Muted gold"],["#392C22","Coffee brown"],["#6B5E52","Warm grey"]
                  ].map(([hex,name])=><div key={hex}><div className="h-20 border border-black/5 md:h-28" style={{backgroundColor:hex}}/><div className="mt-2 flex justify-between gap-2 text-[9px] text-[#687269]"><span>{name}</span><span className="belyn-mono">{hex}</span></div></div>)}
                </div>
              </div>
              <div className="belyn-reveal rounded-sm bg-[#f8f6ef] p-7 md:p-10">
                <p className="belyn-mono text-[9px] tracking-[.2em] text-[#7c8279]">COMPONENT LANGUAGE</p>
                <div className="mt-8 flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#075b4d] px-6 py-3 text-xs font-semibold text-white">Explore the collection <ArrowUpRight className="ml-2 inline" size={14}/></span><span className="rounded-full border border-[#075b4d]/30 px-6 py-3 text-xs font-semibold text-[#075b4d]">Discover more</span></div>
                <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#e9e5d8] p-4"><div className="aspect-[4/3] rounded-lg bg-[#d6d0c1]"/><p className="mt-3 text-sm font-semibold text-[#392c22]">Product card</p><p className="mt-1 text-[10px] text-[#687269]">Soft media surface</p></div><div className="rounded-xl border border-[#e9e5d8] p-4"><div className="flex h-[calc(100%-2rem)] items-center justify-center rounded-lg bg-[#f1efe7]"><ShoppingBag size={26} className="text-[#075b4d]"/></div><p className="mt-3 text-sm font-semibold text-[#392c22]">Commerce icon</p><p className="mt-1 text-[10px] text-[#687269]">Simple line language</p></div></div>
              </div>
              <div className="belyn-reveal flex flex-col justify-between rounded-sm bg-[#075b4d] p-7 text-[#f8f6ef] md:p-10"><p className="belyn-mono text-[9px] tracking-[.2em] text-white/60">BRAND POSITIONING</p><p className="belyn-display mt-10 text-5xl leading-[.95] md:text-6xl">Born in Kashmir.<br/><span className="text-[#d5c39f]">Crafted with Purity.</span></p><p className="mt-10 max-w-xs text-xs leading-6 text-white/65">A concise brand statement, supported by a calm palette and editorial typography.</p></div>
            </div>
          </div>
        </section>

        <section id="technology" className="scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="belyn-reveal mb-14 grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-end"><div><Kicker>05 / DEVELOPMENT & TECHNOLOGY</Kicker><h2 className="belyn-display mt-5 text-5xl leading-[.95] text-[#173d32] md:text-7xl">A commerce<br/>system, not<br/>a static page.</h2></div><p className="max-w-xl text-sm leading-7 text-[#687269]">Technology details below are taken from the Belyn repository's package manifest, application routes, source modules and deployment documentation. Some external services are environment-configured and depend on production credentials.</p></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Tech icon={<Layers/>} name="Frontend" items={["React 19","TypeScript","Custom component architecture","esbuild build pipeline"]}/>
              <Tech icon={<Database/>} name="Data & accounts" items={["Supabase Auth","Postgres via PostgREST","Customer profiles & addresses","Row Level Security migrations"]}/>
              <Tech icon={<CreditCard/>} name="Commerce" items={["Custom product catalogue","Persistent cart state","Razorpay checkout flow","COD & manual UPI options"]}/>
              <Tech icon={<Star/>} name="Customer experience" items={["Product reviews & ratings","Account and order history","Wishlist and saved items","Responsive mobile navigation"]}/>
              <Tech icon={<ShieldCheck/>} name="Operations" items={["Admin order dashboard","Order status workflow","Server-side order validation","Payment signature verification"]}/>
              <Tech icon={<Package/>} name="Motion & media" items={["GSAP","Swiper galleries","Matter.js interaction","Optimised product imagery"]}/>
            </div>
            <div className="mt-10 border-l-2 border-[#b99a62] bg-[#e9e5d8]/55 px-5 py-5 text-xs leading-6 text-[#687269]"><strong className="text-[#392c22]">Configuration note.</strong> Customer authentication, database-backed order history and administrative order data rely on the Supabase environment variables and SQL migrations documented in the repository. Razorpay online payment also requires server-side keys. The code supports these flows; this case study does not imply that every external credential or payment mode is active at every moment.</div>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 bg-[#173d32] px-5 py-20 text-[#f8f6ef] md:px-10 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="belyn-reveal mb-14"><Kicker light>06 / KEY FEATURES</Kicker><h2 className="belyn-display mt-5 text-5xl md:text-7xl">The full journey.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/60">A connected set of storefront and service flows, verified against the current application structure.</p></div>
            <div className="grid gap-10 md:grid-cols-2">
              <Feature n="01" icon={<ShoppingBag/>} title="Product discovery" body="Shop all, featured and curated collections, with category routes for honey, saffron, dry fruits, kahwa and gift boxes." image="https://www.belyn.in/images/shop.webp" alt="BELYN shop editorial image"/>
              <Feature n="02" icon={<Package/>} title="Product detail" body="Dedicated product pages with variant selection, product imagery, descriptions and review surfaces." image="https://www.belyn.in/images/mongra-hero.png" alt="BELYN saffron product imagery"/>
              <Feature n="03" icon={<ShoppingBag/>} title="Cart & checkout" body="A persistent cart drawer and checkout form connect selected variants and quantities to the order submission flow." image={liveShot} alt="BELYN storefront screenshot"/>
              <Feature n="04" icon={<UserRound/>} title="Customer accounts" body="Registration, sign-in, password recovery, profile details, saved addresses and account order history are present in the route and auth modules." image="https://www.belyn.in/images/honey.webp" alt="BELYN honey product imagery"/>
              <Feature n="05" icon={<Star/>} title="Product reviews" body="Product-specific ratings and written reviews are supported by a customer review interface and administrative review moderation route." image="https://www.belyn.in/images/saffron.webp" alt="BELYN saffron product imagery"/>
              <Feature n="06" icon={<Truck/>} title="Order operations" body="A private order dashboard supports order lookup and status updates, with customer order tracking backed by order events." image="https://www.belyn.in/images/dryfruits.webp" alt="BELYN dry fruit product imagery"/>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="belyn-reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Kicker>07 / RESPONSIVE EXPERIENCE</Kicker><h2 className="belyn-display mt-5 text-5xl text-[#173d32] md:text-7xl">One brand.<br/>Every screen.</h2></div><p className="max-w-md text-sm leading-7 text-[#687269]">The storefront is built to adapt from wide desktop layouts to touch-first mobile browsing. The captures below use the live website at desktop and narrow viewport widths.</p></div>
            <div className="grid items-start gap-7 lg:grid-cols-[1.55fr_.75fr]">
              <div className="belyn-reveal"><div className="overflow-hidden rounded-xl border border-[#20372d]/15 bg-white p-2 shadow-xl"><div className="mb-2 flex items-center gap-2 px-2 py-1"><Monitor size={13}/><span className="belyn-mono text-[9px] tracking-widest text-[#687269]">DESKTOP / WIDE VIEWPORT</span></div><img src={liveShot} alt="BELYN live website at desktop viewport" className="w-full rounded-md" loading="lazy"/></div></div>
              <div className="belyn-reveal mx-auto w-full max-w-[310px]"><div className="rounded-[2.2rem] border-[7px] border-[#1d2d26] bg-[#1d2d26] p-1 shadow-2xl"><div className="mx-auto mb-2 h-4 w-20 rounded-b-xl bg-[#1d2d26]"/><div className="overflow-hidden rounded-[1.5rem] bg-white"><img src={mobileShot} alt="BELYN live website at mobile viewport" className="w-full" loading="lazy"/></div></div><div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-semibold tracking-[.18em] text-[#687269]"><Smartphone size={13}/> MOBILE / NARROW VIEWPORT</div></div>
            </div>
          </div>
        </section>

        <section className="border-y belyn-rule bg-[#e9e5d8]/55 px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="belyn-reveal"><Kicker>08 / FINAL OUTCOME</Kicker><h2 className="belyn-display mt-5 text-5xl leading-[.95] text-[#173d32] md:text-7xl">From identity<br/>to infrastructure.</h2></div>
            <div className="belyn-reveal"><p className="text-xl leading-8 text-[#39483e] md:text-3xl md:leading-[1.45]">BELYN now has a digital commerce foundation that brings brand storytelling and functional shopping journeys together.</p><p className="mt-7 max-w-2xl text-sm leading-7 text-[#687269]">The delivered codebase goes beyond a visual storefront: it includes product and collection routes, cart state, checkout integrations, account flows, review interfaces and administrative order tooling. It gives the brand a structured place to present Kashmiri products and a platform that can be extended as its operations grow.</p><a href={site} target="_blank" rel="noreferrer" className="belyn-link mt-9 inline-flex items-center gap-4 rounded-full bg-[#075b4d] px-7 py-4 text-[10px] font-bold tracking-[.16em] text-white hover:bg-[#123d34]">VISIT LIVE WEBSITE <ArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section id="credits" className="scroll-mt-24 bg-[#173d32] px-5 py-20 text-[#f8f6ef] md:px-10 md:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="belyn-reveal flex flex-col justify-between gap-12 border-b border-white/20 pb-12 md:flex-row md:items-end">
              <div><Kicker light>09 / PROJECT CREDITS</Kicker><p className="belyn-display mt-5 text-5xl md:text-7xl">Designed & developed by</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.04em] md:text-5xl">INAM UL HAQ</h2><p className="mt-4 text-[10px] font-semibold tracking-[.2em] text-white/60">WEB DEVELOPER · DESIGNER · DIGITAL CREATOR</p><p className="mt-3 text-xs text-white/55">Mattan Chowk, Anantnag, Kashmir, India</p></div>
              <div className="flex flex-wrap gap-3"><a href="https://github.com/inamu3174-droid" target="_blank" rel="noreferrer" className="belyn-link flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs hover:bg-white hover:text-[#173d32]"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a><a href="https://share.google/p7ICZlnNEwxOSqBvh" target="_blank" rel="noreferrer" className="belyn-link flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs hover:bg-white hover:text-[#173d32]"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a></div>
            </div>
            <div className="flex flex-col justify-between gap-5 pt-8 text-[9px] font-semibold tracking-[.16em] text-white/45 md:flex-row"><span>BELYN / BORN IN KASHMIR. CRAFTED WITH PURITY.</span><a href={site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#d5c39f] hover:text-white">VISIT LIVE WEBSITE <ArrowUpRight size={13}/></a><a href="/" className="inline-flex items-center gap-2 hover:text-white"><ArrowLeft size={13}/> BACK TO PORTFOLIO</a><span>© 2026 INAM UL HAQ</span></div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Kicker({children,light=false}:{children:React.ReactNode;light?:boolean}) { return <p className={`belyn-mono text-[9px] font-semibold tracking-[.22em] ${light?"text-[#d5c39f]":"text-[#075b4d]"}`}>{children}</p>; }
function Meta({label,value}:{label:string;value:string}) { return <div><p className="belyn-mono text-[8px] tracking-[.15em] text-[#92988e]">{label}</p><p className="mt-2 text-[10px] font-bold tracking-[.08em] text-[#39483e]">{value}</p></div>; }
function Challenge({n,title,body}:{n:string;title:string;body:string}) { return <div className="border-t border-white/20 pt-5"><span className="belyn-mono text-[9px] text-[#d5c39f]">{n}</span><h3 className="belyn-display mt-5 text-3xl">{title}</h3><p className="mt-3 text-xs leading-6 text-white/60">{body}</p></div>; }
function Approach({n,title,body}:{n:string;title:string;body:string}) { return <div className="bg-[#f8f6ef] p-7 md:p-9"><span className="belyn-mono text-[9px] text-[#a18a60]">{n} / PROCESS</span><h3 className="belyn-display mt-10 text-3xl text-[#173d32]">{title}</h3><p className="mt-4 text-xs leading-6 text-[#687269]">{body}</p></div>; }
function Tech({icon,name,items}:{icon:React.ReactNode;name:string;items:string[]}) { return <article className="belyn-reveal border border-[#20372d]/15 bg-[#fbfaf5] p-6"><div className="flex items-center gap-3 text-[#075b4d]">{icon}<h3 className="text-sm font-bold text-[#24382d]">{name}</h3></div><ul className="mt-6 space-y-3">{items.map(item=><li key={item} className="flex gap-2 text-xs text-[#687269]"><Check size={13} className="mt-0.5 shrink-0 text-[#b99a62]"/>{item}</li>)}</ul></article>; }
function Feature({n,icon,title,body,image,alt}:{n:string;icon:React.ReactNode;title:string;body:string;image:string;alt:string}) { return <article className="belyn-reveal"><div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-white/10"><img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy"/><span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#f8f6ef] px-3 py-2 text-[9px] font-bold tracking-widest text-[#075b4d]">{icon}{n}</span></div><div className="mt-5 flex items-start justify-between gap-5"><div><h3 className="belyn-display text-3xl">{title}</h3><p className="mt-3 max-w-md text-xs leading-6 text-white/60">{body}</p></div><ArrowUpRight size={18} className="mt-2 shrink-0 text-[#d5c39f]"/></div></article>; }
