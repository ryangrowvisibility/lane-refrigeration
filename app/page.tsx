import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

const PHOTO =
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHuUjzz6fbYo07A9M-LBCcu2gRQYqUO8IdnQP7Dixnxtp9MwDI9ap2n1Rl9il3mO7xdWrJHDvDg9M3xJ31wXspRQGo2iaJERyS3V57aWns3obrKrjfG03JBhHsjuLjvsigJxbTcT0tKqSgw=w800-h600";

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17v-.08z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AcIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="6" width="20" height="8" rx="2" />
      <path d="M6 18h12M10 10h4" />
      <circle cx="6" cy="10" r="1" fill="currentColor" />
      <circle cx="18" cy="10" r="1" fill="currentColor" />
    </svg>
  );
}

function HeatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 12c-2-2.5-2-5 0-7" />
      <path d="M6 12c-2-2.5-2-5 0-7" />
      <path d="M18 12c-2-2.5-2-5 0-7" />
      <path d="M4 18h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: "oklch(0.97 0.008 70)", color: "oklch(0.18 0.02 240)", fontFamily: "var(--font-body, Hind, sans-serif)" }}>

      {/* NAV */}
      <nav style={{ borderBottom: "1px solid oklch(0.88 0.012 70)", backgroundColor: "oklch(0.97 0.008 70)" }} className="sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <span
              style={{
                fontFamily: "var(--font-display, Domine, serif)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "oklch(0.18 0.02 240)",
              }}
            >
              Lane Refrigeration
            </span>
            <span
              className="ml-2 text-xs"
              style={{ color: "oklch(0.58 0.015 240)" }}
            >
              Bakersfield, CA
            </span>
          </div>
          <a
            href="tel:+16618594276"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200 hover:opacity-90 active:scale-[0.97] font-semibold text-sm"
            style={{
              backgroundColor: "oklch(0.36 0.07 230)",
              color: "oklch(0.97 0.004 70)",
            }}
            aria-label="Call Dan Lane"
          >
            <PhoneIcon />
            (661) 859-4276
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 pt-14 pb-10 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          {/* Left: 3/5 */}
          <div className="lg:col-span-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 animate-fade-up text-sm font-medium"
              style={{
                backgroundColor: "oklch(0.36 0.07 230 / 0.08)",
                border: "1px solid oklch(0.36 0.07 230 / 0.18)",
                color: "oklch(0.36 0.07 230)",
              }}
            >
              <span>Licensed · HVAC · Refrigeration · Electrical · Plumbing</span>
            </div>

            <h1
              className="anim-d1"
              style={{
                fontFamily: "var(--font-display, Domine, serif)",
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "oklch(0.12 0.02 240)",
              }}
            >
              Bakersfield&apos;s Most Trusted HVAC &amp; Refrigeration
            </h1>

            <p
              className="mt-5 text-lg leading-relaxed anim-d2"
              style={{ color: "oklch(0.40 0.015 240)", maxWidth: "50ch" }}
            >
              Dan Lane fixes exactly what needs to be fixed. No upselling. No guessing. Just honest work from a multi-licensed technician who&apos;s been at it since 2012.
            </p>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap gap-4 anim-d2">
              {[
                "5-Star Rating",
                "Since 2012 · 14+ Years",
                "Family-Owned",
                "Sole Proprietorship",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm"
                  style={{ color: "oklch(0.50 0.015 240)" }}
                >
                  <span style={{ color: "oklch(0.60 0.11 55)" }}><CheckIcon /></span>
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 anim-d3">
              <a
                href="tel:+16618594276"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
                style={{
                  backgroundColor: "oklch(0.36 0.07 230)",
                  color: "oklch(0.97 0.004 70)",
                  fontSize: "1rem",
                }}
                aria-label="Call Dan Lane at Lane Refrigeration"
              >
                <PhoneIcon />
                (661) 859-4276
              </a>
              <a
                href="#services"
                className="flex items-center justify-center px-7 py-3.5 rounded-xl font-medium transition-all duration-200 hover:bg-[oklch(0.92_0.014_70)] active:scale-[0.97] text-sm"
                style={{
                  border: "1px solid oklch(0.84 0.015 70)",
                  color: "oklch(0.32 0.02 240)",
                }}
              >
                See Services
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-5 text-sm anim-d3" style={{ color: "oklch(0.58 0.015 240)" }}>
              <span className="flex items-center gap-1.5"><ClockIcon /> Mon–Fri 8am–5pm</span>
              <span className="flex items-center gap-1.5"><MapPinIcon /> 2300 Mountain Oak Rd, Bakersfield</span>
            </div>
          </div>

          {/* Right: 2/5 — photo */}
          <div className="lg:col-span-2 anim-d2">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4]"
              style={{ boxShadow: "0 20px 48px oklch(0.36 0.07 230 / 0.15)" }}
            >
              <Image
                src={PHOTO}
                alt="Lane Refrigeration — Dan Lane HVAC work in Bakersfield"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Overlay rating card */}
              <div
                className="absolute bottom-4 right-4 px-4 py-3 rounded-xl"
                style={{
                  backgroundColor: "oklch(0.97 0.008 70 / 0.95)",
                  border: "1px solid oklch(0.88 0.012 70)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="flex gap-0.5 mb-0.5" style={{ color: "oklch(0.60 0.11 55)" }}>
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <p className="text-xs font-semibold" style={{ color: "oklch(0.18 0.02 240)" }}>
                  5.0 · Trusted since 2012
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LICENSES BANNER */}
      <section style={{ backgroundColor: "oklch(0.36 0.07 230)", color: "oklch(0.95 0.004 240)" }} className="py-8">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p
              style={{ fontFamily: "var(--font-display, Domine, serif)", fontSize: "1.05rem", fontWeight: 700 }}
            >
              Fully Licensed &amp; Insured
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Refrigeration License",
                "HVAC License",
                "Electrical License",
                "Plumbing License",
              ].map((lic) => (
                <span
                  key={lic}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{ backgroundColor: "oklch(0.97 0.004 240 / 0.12)", border: "1px solid oklch(0.97 0.004 240 / 0.20)" }}
                >
                  {lic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "oklch(0.36 0.07 230)" }}>
            Services
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display, Domine, serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "oklch(0.12 0.02 240)",
            }}
          >
            Everything HVAC &amp; More
          </h2>
          <p className="mt-2 text-base" style={{ color: "oklch(0.45 0.015 240)", maxWidth: "48ch" }}>
            One technician. Four licenses. Dan handles what most shops send out to three different contractors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <AcIcon />,
              title: "AC Repair",
              description: "Fast residential and commercial AC diagnosis and repair. Dan finds the real problem without overselling extra parts.",
            },
            {
              icon: <HeatIcon />,
              title: "Heating Repair",
              description: "Furnace and heating system repairs done right. Clean work, honest assessment, no unnecessary replacements.",
            },
            {
              icon: <SnowflakeIcon />,
              title: "Refrigeration Service",
              description: "Commercial and residential refrigeration repair and maintenance — backed by a dedicated refrigeration license.",
            },
            {
              icon: <ZapIcon />,
              title: "Electrical",
              description: "Licensed electrical work integrated with your HVAC system. One call, one tech, no coordination headaches.",
            },
            {
              icon: <DropletIcon />,
              title: "Plumbing",
              description: "HVAC-related plumbing issues handled in-house. Dan doesn&apos;t subcontract the plumbing side — he&apos;s licensed for it.",
            },
            {
              icon: <AcIcon />,
              title: "System Maintenance",
              description: "Regular maintenance to keep your system running efficiently year-round. Dan recommends only what&apos;s actually needed.",
            },
          ].map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ backgroundColor: "oklch(0.94 0.010 70)", borderTop: "1px solid oklch(0.88 0.012 70)", borderBottom: "1px solid oklch(0.88 0.012 70)" }} className="py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="flex justify-center gap-0.5 mb-6" style={{ color: "oklch(0.60 0.11 55)" }}>
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <blockquote
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-display, Domine, serif)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              color: "oklch(0.15 0.02 240)",
              fontStyle: "italic",
            }}
          >
            &ldquo;Lane Refrigeration is the only HVAC company I trust in Bakersfield. Dan Lane fixes exactly what needs to be fixed without any unnecessary work, and he does it fast. I&apos;ve called him multiple times over the years — always the same: honest, quick, and right the first time.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm" style={{ color: "oklch(0.55 0.015 240)" }}>
            — Longtime Bakersfield customer · Verified Google review
          </p>
        </div>
      </section>

      {/* ABOUT DAN */}
      <section className="max-w-6xl mx-auto px-5 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "oklch(0.36 0.07 230)" }}>
              About Dan
            </p>
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-display, Domine, serif)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "oklch(0.12 0.02 240)",
              }}
            >
              The Only HVAC Tech Bakersfield Trusts
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.40 0.015 240)", maxWidth: "52ch" }}>
              Dan Lane started Lane Refrigeration in 2012 as a sole proprietorship — and that&apos;s intentional. When you hire Dan, you get Dan. No bait-and-switch with subcontractors, no junior techs learning on your equipment.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "oklch(0.40 0.015 240)", maxWidth: "52ch" }}>
              Holding active licenses in refrigeration, HVAC, electrical, and plumbing, Dan handles the full scope of what most shops split across multiple contractors. One call, one trusted technician, done right.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "2012", label: "Founded" },
              { value: "4", label: "Active Licenses" },
              { value: "5.0★", label: "Google Rating" },
              { value: "1", label: "Technician — Dan" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="rounded-xl p-5"
                style={{ backgroundColor: "oklch(0.94 0.010 70)", border: "1px solid oklch(0.88 0.012 70)" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display, Domine, serif)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "oklch(0.36 0.07 230)",
                  }}
                >
                  {value}
                </div>
                <div className="text-sm mt-0.5" style={{ color: "oklch(0.52 0.015 240)" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ backgroundColor: "oklch(0.94 0.010 70)", borderTop: "1px solid oklch(0.88 0.012 70)" }} className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display, Domine, serif)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "oklch(0.12 0.02 240)",
            }}
          >
            Need an Honest HVAC Tech?
          </h2>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "oklch(0.42 0.015 240)" }}>
            Call Dan directly. Monday–Friday, 8am–5pm. No call centers, no voicemail maze — just Dan.
          </p>
          <a
            href="tel:+16618594276"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
            style={{
              backgroundColor: "oklch(0.36 0.07 230)",
              color: "oklch(0.97 0.004 70)",
            }}
            aria-label="Call Lane Refrigeration"
          >
            <PhoneIcon />
            (661) 859-4276
          </a>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm" style={{ color: "oklch(0.58 0.015 240)" }}>
            <span className="flex items-center gap-1.5"><ClockIcon /> Mon–Fri 8am–5pm</span>
            <span className="flex items-center gap-1.5"><MapPinIcon /> Bakersfield, CA 93311</span>
          </div>
          <div className="mt-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lane%20Refrigeration&query_place_id=ChIJrSkt625B6oARlFeNqHo6WCk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.36 0.07 230)" }}
            >
              Get Directions →
            </a>
            {" · "}
            <a
              href="https://www.linkedin.com/in/dan-lane-7135358a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: "oklch(0.36 0.07 230)" }}
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid oklch(0.88 0.012 70)" }} className="py-7">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm" style={{ color: "oklch(0.58 0.015 240)" }}>
          <span style={{ fontFamily: "var(--font-display, Domine, serif)", fontWeight: 700, color: "oklch(0.32 0.03 240)" }}>
            Lane Refrigeration
          </span>
          <span>Bakersfield, CA · (661) 859-4276 · Mon–Fri 8am–5pm</span>
        </div>
      </footer>
    </div>
  );
}
