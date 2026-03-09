import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quent-tech.com"),
  title: {
    default: "Quent Tech Ltd | IT Consulting & Cloud Solutions Cyprus",
    template: "%s | Quent Tech Ltd",
  },
  description:
    "Expert IT consulting, staff augmentation, and cloud solutions in Cyprus. Hire pre-vetted data engineers, cloud architects, and DevOps specialists. AWS, Azure, Databricks, Snowflake. B2B contractor model.",
  keywords: [
    "IT consulting Cyprus",
    "staff augmentation",
    "hire data engineers",
    "B2B contractor",
    "cloud solutions",
    "AWS consulting",
    "Azure consulting",
    "software development Cyprus",
    "data engineering",
    "trading systems",
    "fintech consulting",
    "digital transformation",
    "Paphos IT company",
    "Snowflake",
    "Databricks",
  ],
  authors: [{ name: "Artem Firsov", url: "https://quent-tech.com/about" }],
  creator: "Quent Tech Ltd",
  publisher: "Quent Tech Ltd",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Quent Tech Ltd | IT Consulting, Staff Augmentation & Cloud Solutions",
    description:
      "Expert IT consulting, staff augmentation, and cloud solutions. Hire data engineers and cloud architects. AWS, Azure, Databricks, Snowflake.",
    url: "https://quent-tech.com",
    siteName: "Quent Tech Ltd",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quent Tech Ltd - IT Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quent Tech Ltd | IT Consulting, Staff Augmentation & Cloud Solutions",
    description:
      "Expert IT consulting, staff augmentation, and cloud solutions. Hire data engineers and cloud architects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quent-tech.com",
  },
  verification: {
    google: "NNP4KQrrNxTR5x2QANG9YmQ59e5LSEuh6nbGmeQwK30",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Quent Tech Ltd",
  image: "https://quent-tech.com/og-image.png",
  "@id": "https://quent-tech.com",
  url: "https://quent-tech.com",
  telephone: "",
  email: "info@quent-tech.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Georgiou Griva Digeni 51, Athineon Building, 1st floor",
    addressLocality: "Paphos",
    postalCode: "8047",
    addressCountry: "CY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.7612,
    longitude: 32.4234,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://www.linkedin.com/company/quent-tech"],
  priceRange: "$$",
  description:
    "Expert IT consulting, staff augmentation, and cloud solutions company in Cyprus. Hire data engineers, cloud architects, and DevOps specialists. AWS, Azure, Databricks, Snowflake.",
  founder: {
    "@type": "Person",
    name: "Artem Firsov",
    jobTitle: "Founder & Principal Consultant",
  },
  foundingDate: "2026-01",
  areaServed: ["Cyprus", "Europe", "Worldwide"],
  serviceType: [
    "IT Consulting",
    "Staff Augmentation",
    "Cloud Solutions",
    "Software Development",
    "Data Engineering",
    "Trading Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="de" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="fr" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="es" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="it" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="ru" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="uk" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="pt" href="https://quent-tech.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://quent-tech.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
        </LanguageProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if(navigator.doNotTrack==="1")return;
  var E="https://quent-tech-analytics.quent-tech.workers.dev";
  var Q=[];

  // Session ID (cookie-based, 30min expiry)
  function sid(){
    var m=document.cookie.match(/(?:^|;)\\s*_qt_sid=([^;]+)/);
    if(m)return m[1];
    var id=Math.random().toString(36).slice(2)+Date.now().toString(36);
    document.cookie="_qt_sid="+id+";path=/;max-age=1800;SameSite=Lax";
    return id;
  }
  var sessionId=sid();

  // UTM extraction
  var sp=new URLSearchParams(location.search);
  var utm={};
  ["source","medium","campaign","term","content"].forEach(function(k){
    var v=sp.get("utm_"+k);if(v)utm["utm_"+k]=v;
  });

  // Device info
  var dev={
    screen_width:screen.width,screen_height:screen.height,
    viewport_width:window.innerWidth,viewport_height:window.innerHeight,
    device_pixel_ratio:window.devicePixelRatio||1,
    touch:"ontouchstart"in window,
    language:navigator.language||"",
    connection_type:(navigator.connection&&navigator.connection.effectiveType)||""
  };

  function send(d){
    d.session_id=sessionId;
    Object.assign(d,dev,utm);
    try{navigator.sendBeacon(E,JSON.stringify(d))}
    catch(e){fetch(E,{method:"POST",body:JSON.stringify(d),keepalive:true}).catch(function(){})}
  }

  // Pageview
  send({event_type:"pageview",path:location.pathname,referrer:document.referrer,title:document.title,ts:Date.now()});

  // Web Vitals via PerformanceObserver
  function vitals(){
    if(!window.PerformanceObserver)return;
    var metrics={};
    function observe(type,cb){
      try{new PerformanceObserver(function(l){l.getEntries().forEach(cb)}).observe({type:type,buffered:true})}catch(e){}
    }
    observe("largest-contentful-paint",function(e){metrics.lcp=e.startTime});
    observe("first-input",function(e){metrics.fid=e.processingStart-e.startTime});
    observe("layout-shift",function(e){if(!e.hadRecentInput)metrics.cls=(metrics.cls||0)+e.value});
    observe("event",function(e){if(e.interactionId){var d=e.duration;metrics.inp=metrics.inp?Math.max(metrics.inp,d):d}});
    // Paint timing for FCP, TTFB
    try{
      var nav=performance.getEntriesByType("navigation")[0];
      if(nav)metrics.ttfb=nav.responseStart;
      var paint=performance.getEntriesByType("paint");
      paint.forEach(function(p){if(p.name==="first-contentful-paint")metrics.fcp=p.startTime});
    }catch(e){}
    // Send after 10s to capture LCP
    setTimeout(function(){
      if(Object.keys(metrics).length)send(Object.assign({event_type:"vitals",path:location.pathname},metrics));
    },10000);
  }
  vitals();

  // Scroll depth tracking
  var maxScroll=0;
  var scrollTimer;
  window.addEventListener("scroll",function(){
    clearTimeout(scrollTimer);
    scrollTimer=setTimeout(function(){
      var h=document.documentElement;
      var pct=Math.round(100*(h.scrollTop+h.clientHeight)/h.scrollHeight);
      if(pct>maxScroll)maxScroll=pct;
    },200);
  },{passive:true});

  // Click tracking (outbound links + CTA buttons)
  document.addEventListener("click",function(e){
    var t=e.target.closest("a[href],button,[data-cta]");
    if(!t)return;
    var href=t.getAttribute("href")||"";
    var isOutbound=href&&href.startsWith("http")&&!href.includes("quent-tech.com");
    var isCTA=t.hasAttribute("data-cta")||t.closest("[data-cta]");
    if(isOutbound||isCTA){
      send({event_type:isOutbound?"outbound_click":"cta_click",path:location.pathname,
        click_href:href,click_text:(t.textContent||"").trim().slice(0,100),
        click_target:t.tagName.toLowerCase()});
    }
  });

  // Time on page + scroll depth on unload
  var pageStart=Date.now();
  window.addEventListener("visibilitychange",function(){
    if(document.visibilityState==="hidden"){
      send({event_type:"engagement",path:location.pathname,
        time_on_page:Math.round((Date.now()-pageStart)/1000),scroll_depth:maxScroll});
    }
  });
})();
`
          }}
        />
      </body>
    </html>
  );
}
