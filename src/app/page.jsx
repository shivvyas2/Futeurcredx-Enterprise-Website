import H1 from "@/common/component/element/H1";
import Button from "@/common/component/element/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden items-center bg-neutral-50">
      {/* SECTION 1 — HERO */}
      <section className="w-full h-screen min-h-screen relative overflow-hidden">
        {/* Main gradient background - white to purple via light purple */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            background: 'linear-gradient(to bottom, #ffffff 0%, #c2cbff 75%, #7579ff 100%)' 
          }}
        ></div>
        
        {/* Overlay pattern with vertical gradient stripes */}
        <div className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay flex">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full bg-gradient-to-l from-black to-transparent border-r border-white/20"
              style={{ width: `${100 / 14}%` }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
          <div className="w-full max-w-[1600px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="uppercase text-black text-[28px] leading-[34px] tracking-tight sm:text-[36px] sm:leading-[42px] md:text-[40px] md:leading-[46px] lg:text-[52px] lg:leading-[60px] xl:text-[60px] xl:leading-[68px]">
                  The Infrastructure Layer for SMB Readiness
                </h1>
                
                {/* Subhead */}
                <p className="uppercase text-sm sm:text-base md:text-lg lg:text-xl text-[#272727] max-w-3xl mx-auto leading-relaxed px-2">
                  Credit visibility and progression — before revenue, before approval, before competitors.
                </p>
                
                {/* Supporting line */}
                <p className="text-sm sm:text-base lg:text-lg text-[#272727]/80 max-w-3xl mx-auto px-2">
                  Built for banks, fintech platforms, sponsor institutions, and embedded finance operators.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2 sm:pt-4">
                <Button title="Request Enterprise Briefing" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT THIS IS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 2 — What This Is
          </p>
          <H1
            title="Enterprise Infrastructure. Not a Product."
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 mt-6 sm:mt-8">
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/analitic.svg" alt="Analytics" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">Not a dashboard</h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                No surface-level reporting or consumer tooling.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/safe box.svg" alt="Safe Box" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">Not a credit decision engine</h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Approval authority stays exactly where it belongs.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/inovation out of the box.svg" alt="Innovation" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">Not a workaround</h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Built for sponsors, compliance, and governance.
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-base text-neutral-700 max-w-3xl mt-4 sm:mt-6">
            FuteurCredX Enterprise operates above products, below policy, and outside the money path.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHERE IT SITS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 3 — Where It Sits
          </p>
          <H1
            title="Where FuteurCredX Fits"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
            {/* Left: Stack diagram (textual representation) */}
            <div className="space-y-3 sm:space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-sm">
                <p className="text-xs font-medium tracking-wide text-neutral-500 mb-2">
                  Products
                </p>
                <p className="text-xs sm:text-sm text-neutral-800">
                  Banking, lending, and RBF products that face SMBs.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-900 bg-neutral-900 p-4 sm:p-5 shadow-sm">
                <p className="text-xs font-medium tracking-wide text-neutral-200 mb-2">
                  FuteurCredX Enterprise
                </p>
                <p className="text-xs sm:text-sm text-neutral-100">
                  Infrastructure for SMB readiness, credit visibility, and progression.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 shadow-sm">
                <p className="text-xs font-medium tracking-wide text-neutral-500 mb-2">
                  Underwriting / Sponsor
                </p>
                <p className="text-xs sm:text-sm text-neutral-800">
                  Underwriting engines, sponsor rules, and approval authority.
                </p>
              </div>
            </div>

            {/* Right: Short copy + visual placeholder */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm text-neutral-700">
                Above banking, lending, and RBF products.
              </p>
              <p className="text-xs sm:text-sm text-neutral-700">
                Below underwriting engines and sponsor rules.
              </p>
              <p className="text-xs sm:text-sm text-neutral-700">
                Outside capital movement and approval authority.
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 pt-3 sm:pt-4">
                Feeds your existing systems cleaner, richer, longitudinal context.
              </p>
              {/* Stack diagram illustration - IMAGE PLACEHOLDER */}
              <div className="mt-3 sm:mt-4 h-32 sm:h-40 rounded-2xl border-2 border-dashed border-neutral-400 bg-gradient-to-br from-neutral-50 to-neutral-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                }}></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-neutral-300 flex items-center justify-center">
                    <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-neutral-600">IMAGE PLACEHOLDER</p>
                  <p className="text-xs text-neutral-500 mt-1">Stack Diagram Illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CORE CAPABILITIES */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 4 — Core Capabilities
          </p>
          <H1
            title="What Institutions Use It For"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-2">
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/Binoculars.svg" alt="Credit Visibility" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Credit Visibility at Scale
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Personal VantageScore + business credit context, normalized and explainable.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/growth.svg" alt="Progression" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Progression Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Turn binary decline into governed readiness with Measured Opportunity.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/Audit.svg" alt="Enterprise Control" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Enterprise Control
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Kill switches, overrides, sponsor-aligned constraints, audit trails.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/target.svg" alt="Product Readiness" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Product-Linked Readiness
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                SMBs see exactly what unlocks each product — no guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUTCOMES */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 5 — Outcomes
          </p>
          <H1
            title="What Changes After Deployment"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-2">
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/growth.svg" alt="Retention" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Retention moves upstream
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Declined applicants stay, progress, and mature inside your platform.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/money.svg" alt="Revenue" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Revenue appears earlier
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Monetization before capital deployment — without loosening standards.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/Binoculars.svg" alt="Risk Visibility" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Risk becomes observable
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Longitudinal behavior replaces thin snapshots.
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 flex items-center justify-center">
                <Image src="/SVG/connection.svg" alt="Relationships" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2 text-sm sm:text-base">
                Sponsor relationships strengthen
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600">
                Fewer exceptions. More clarity. Cleaner approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHO THIS IS FOR */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 6 — Who This Is For
          </p>
          <H1
            title="Built for Institutions That Can't Afford Guesswork"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-3 sm:gap-4 lg:grid-cols-2">
            <div className="p-3 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-800 shadow-sm flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <Image src="/SVG/Bank.svg" alt="Banks" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span>Banks &amp; Sponsor Institutions</span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-800 shadow-sm flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <Image src="/SVG/Fintech.svg" alt="Fintech" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span>Neo-banks &amp; Fintech Platforms</span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-800 shadow-sm flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <Image src="/SVG/digital payment.svg" alt="Embedded Finance" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span>Embedded Finance Providers</span>
            </div>
            <div className="p-3 sm:p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-800 shadow-sm flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <Image src="/SVG/invest.svg" alt="Lenders" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span>Lenders &amp; RBF Operators</span>
            </div>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-neutral-700 max-w-3xl mt-4 sm:mt-6">
            If SMBs touch your platform before they qualify — this layer belongs to you.
          </p>
        </div>
      </section>

      {/* SECTION 7 — RISK & COMPLIANCE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 7 — Risk &amp; Compliance
          </p>
          <H1
            title="Designed for Risk and Compliance Teams"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
            {/* Left: Content */}
            <div className="space-y-4 sm:space-y-6">
              <ul className="grid gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-700">
                <li>No credit decisions made</li>
                <li>No funds moved</li>
                <li>No policy overrides</li>
                <li>No pre-approval language</li>
              </ul>
              <p className="text-xs sm:text-sm lg:text-base text-neutral-700">
                Risk is not reduced by avoidance. It&apos;s reduced by visibility.
              </p>
            </div>

            {/* Right: Image placeholder - IMAGE PLACEHOLDER */}
            <div className="h-48 sm:h-64 lg:h-80 rounded-2xl border-2 border-dashed border-neutral-400 bg-gradient-to-br from-neutral-50 to-neutral-100 flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
              }}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-neutral-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-neutral-700 mb-1">IMAGE PLACEHOLDER</p>
                <p className="text-xs text-neutral-600">Risk &amp; Compliance Image</p>
                <p className="text-xs text-neutral-500 mt-2">Replace with your image</p>
              </div>
              {/* <Image src="/your-image.jpg" alt="Risk & Compliance" width={500} height={400} className="w-full h-full object-cover rounded-2xl" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — DEPLOYMENT */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200 bg-neutral-50 mb-12 sm:mb-16 lg:mb-24">
        <div className="space-y-6 sm:space-y-8">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            Section 8 — Deployment
          </p>
          <H1
            title="Enterprise Deployment Model"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center">
            {/* Left: Image placeholder - IMAGE PLACEHOLDER */}
            <div className="h-48 sm:h-64 lg:h-80 rounded-2xl border-2 border-dashed border-neutral-400 bg-gradient-to-br from-neutral-50 to-neutral-100 flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
              }}></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-neutral-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-neutral-700 mb-1">IMAGE PLACEHOLDER</p>
                <p className="text-xs text-neutral-600">Deployment Image</p>
                <p className="text-xs text-neutral-500 mt-2">Replace with your image</p>
              </div>
              {/* <Image src="/your-image.jpg" alt="Enterprise Deployment" width={500} height={400} className="w-full h-full object-cover rounded-2xl" /> */}
            </div>

            {/* Right: Content */}
            <div className="space-y-4 sm:space-y-6">
              <ul className="grid gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-700">
                <li>Private, scoped pilots</li>
                <li>One platform per category</li>
                <li>Sponsor-aligned configuration</li>
                <li>Expansion only after proof</li>
              </ul>
              <div className="mt-3 sm:mt-4">
                <Button title="Request Enterprise Briefing" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

