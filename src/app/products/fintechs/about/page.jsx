import H1 from "@/common/component/element/H1";
import Button from "@/common/component/element/Button";
import Image from "next/image";
import { OutlineCards } from "@/common/component/element/OutlineCards";

export const metadata = {
  title: "For Fintechs - About - FuteurCredX",
  description: "The Pre-Credit Operating System That Makes SMBs Bankable",
};

export default function ForFintechsPage() {
  return (
    <main className="flex flex-col relative overflow-hidden items-center bg-neutral-50">
      {/* HERO SECTION */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            background: 'linear-gradient(to bottom, #ffffff 0%, #b8e6d3 75%, #5fd3a0 100%)' 
          }}
        ></div>
        
        <div className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-overlay flex">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full bg-gradient-to-l from-black to-transparent border-r border-white/20"
              style={{ width: `${100 / 14}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24">
          <div className="w-full max-w-[1600px] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 sm:space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4 sm:space-y-4 sm:space-y-6">
                <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-600 font-medium">
                  Private Pilot — Invite Only
                </p>
                <h1 className="uppercase text-black text-[28px] leading-[34px] tracking-tight sm:text-[36px] sm:leading-[42px] md:text-[40px] md:leading-[46px] lg:text-[52px] lg:leading-[60px] xl:text-[60px] xl:leading-[68px] px-2">
                  The Pre-Credit Operating System That Makes SMBs Bankable
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-[#272727] max-w-3xl mx-auto font-medium px-2">
                  — Before They Earn a Dollar
                </p>
                <p className="text-sm sm:text-sm sm:text-base lg:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed px-2">
                  Most fintechs say they support small business.
                  <br />
                  The truth is: they only support them after revenue already exists.
                </p>
                <p className="text-sm sm:text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed px-2">
                  LumiqAI fixes the broken middle — the moment where capable, disciplined businesses are filtered out by blunt rules, lazy proxies, and inherited fear.
                  <br />
                  Not because they&apos;re bad risks — but because no system exists to let them prove themselves safely.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="px-8 py-3 bg-white border border-neutral-300 rounded-full text-neutral-900 font-semibold hover:bg-neutral-50 transition-colors shadow-sm">
                  Request a Private Pilot
                </button>
                <button className="px-8 py-3 bg-transparent border border-neutral-300 rounded-full text-neutral-900 font-semibold hover:bg-white/50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTLINE CARDS SECTION */}
      <OutlineCards />

      {/* THE INDUSTRY CONTRADICTION */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            The Industry Contradiction
          </p>
          <H1
            title="Every Fintech Quietly Hides"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Fintech sells itself as modern.
            <br />
            But when ambiguity hits:
          </p>
          <ul className="space-y-3 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>underwriters retreat to owner FICO</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>product teams default to crude revenue brackets</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>banks lean on thin-file heuristics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>RBF gates assume survival already occurred</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            Why?
            <br />
            Because uncertainty scares balance sheets.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            So when revenue is low and business credit files don&apos;t exist, the system trusts:
            <br />
            <strong>The founder&apos;s personal past — not the business&apos;s future.</strong>
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            This isn&apos;t innovation —
            <br />
            this is risk avoidance dressed in better UI.
            <br />
            It feels modern, but it is still anchored in history — not potential.
          </p>
        </div>
      </section>

      {/* THE REAL COST */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            The Real Cost of Current Approaches
          </p>
          <H1
            title="Here's what your funnel doesn't tell you:"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
            You don&apos;t lose customers later.
            <br />
            You lose them before they even begin.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            You reject:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>disciplined operators</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>early-stage LLCs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>service-based ventures with contracts</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>founders yet to monetize</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4 font-medium">
            Not because they&apos;re bad risks — but because your stack lacks a way for them to earn trust incrementally.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            That&apos;s the moment every modern fintech misses.
          </p>
        </div>
      </section>

      {/* THE RADICAL INSIGHT */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            The Radical Insight
          </p>
          <H1
            title="Progression Is the New Credit"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Underwriting today uses:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>Pass/Fail gates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>Static thresholds</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>Binary outcomes</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            That&apos;s it. No progression state. No learning. No visibility. No earned evolution.
          </p>
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Image src="/SVG/speedometer.svg" alt="Opportunity" width={32} height={32} className="w-8 h-8 object-contain" />
              <p className="text-lg lg:text-xl text-neutral-900 font-semibold">
                LumiqAI introduces:
              </p>
            </div>
            <p className="text-2xl lg:text-3xl text-neutral-900 font-bold">
              Measured Opportunity
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-700 mt-4 leading-relaxed">
              Not charity. Not reckless exposure. Not blind optimism. Structured, observable progression that becomes capacity.
            </p>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE IN ONE PICTURE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="The Difference in One Picture"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            This is why some platforms compound — and others leak.
          </p>
          
          {/* IMAGE PLACEHOLDER - Funnel Comparison Visual */}
          <div className="mt-6 sm:mt-8 mb-8 h-64 lg:h-96 rounded-2xl border-2 border-dashed border-neutral-400 bg-gradient-to-br from-neutral-50 to-neutral-100 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
            }}></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-3 rounded-lg bg-neutral-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-base font-semibold text-neutral-700 mb-1">IMAGE PLACEHOLDER</p>
              <p className="text-xs sm:text-sm text-neutral-600">Funnel Comparison Visual</p>
              <p className="text-xs text-neutral-500 mt-2">Side-by-side comparison diagram</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-2">
            {/* Traditional Fintech Funnel */}
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/SVG/loss.svg" alt="Traditional" width={24} height={24} className="w-6 h-6 object-contain" />
                <h3 className="text-lg font-semibold text-neutral-900">
                  Traditional Fintech Funnel
                </h3>
              </div>
              <div className="space-y-3 text-sm text-neutral-700">
                <div>Application</div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span>Binary underwriting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span>Pass / Fail</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span>Revenue threshold check</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span>Fear under uncertainty</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span>Owner FICO fallback</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span>No learning state</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">↓</span>
                  <span className="font-semibold text-neutral-900">Decline / Churn</span>
                </div>
                <p className="text-xs text-neutral-600 mt-4 pt-4 border-t border-neutral-200">
                  CAC leaks here
                </p>
                <p className="text-xs text-neutral-600">
                  Good operators lost
                  <br />
                  Future revenue that never existed
                </p>
              </div>
            </div>

            {/* LumiqAI Progression Funnel */}
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/SVG/growth.svg" alt="Progression" width={24} height={24} className="w-6 h-6 object-contain" />
                <h3 className="text-lg font-semibold text-neutral-900">
                  LumiqAI Progression Funnel
                </h3>
              </div>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                  <span>Structural visibility</span>
                </div>
                <div className="pl-8 text-xs text-neutral-600">Measured Opportunity</div>
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                  <span>Credit &amp; readiness awareness</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                  <span>Probationary exposure</span>
                </div>
                <div className="pl-8 text-xs text-neutral-600">Progress replaces fear</div>
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                  <span>Observable behavior</span>
                </div>
                <div className="pl-8 text-xs text-neutral-600">Behavior &gt; history</div>
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
                  <span>Earned limits</span>
                </div>
                <div className="pl-8 text-xs text-neutral-600">Every step observable</div>
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">6</span>
                  <span>Product graduation (RBF / lending)</span>
                </div>
                <div className="pl-8 text-xs text-neutral-600">Trust compounds</div>
                <p className="text-xs text-neutral-900 mt-4 pt-4 border-t border-neutral-200 font-semibold">
                  Retained &amp; graduated
                </p>
                <p className="text-xs text-neutral-600">
                  Revenue created inside your platform
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4 font-medium">
            One model rejects uncertainty.
            <br />
            The other turns uncertainty into data.
          </p>
        </div>
      </section>

      {/* SMBs ARE FLYING BLIND */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="The Deeper Truth: SMBs Are Flying Blind — And Your Platform Is Too"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            SMBs don&apos;t know how they look to financial systems:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>their true personal credit context</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>their business credit status</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>why they&apos;re treated as &quot;not ready&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>what precisely disqualifies them</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>how close they really are to qualification</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            So they guess. They apply blindly. They get rejected. They disengage.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            LumiqAI ends that blindness.
          </p>
        </div>
      </section>

      {/* CREDIT VISIBILITY LAYER */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="LumiqAI Is the Credit Visibility Layer on Top of Your Stack"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            This isn&apos;t a score report. This is actionable visibility.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            LumiqAI gives every business owner:
          </p>
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-2">
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/SVG/chart.svg" alt="VantageScore" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Personal VantageScore in business context
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  See your score in context, not isolation
                </p>
              </div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/SVG/Binoculars.svg" alt="Visibility" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Business credit visibility
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Normalized, explained, and product-linked
                </p>
              </div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/SVG/Compass.svg" alt="Maps" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Revenue readiness maps
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Tied to your own product offers
                </p>
              </div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/SVG/target.svg" alt="Goals" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  Explicit goal states
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  &quot;This is what unlocks Product X&quot;
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            + A living, owned progression roadmap showing exactly what moves the needle
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            This is not education.
            <br />
            This is product-linked truth.
          </p>
        </div>
      </section>

      {/* WHEN SMBs CAN SEE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="When SMBs Can See The Path Ahead"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
            They don&apos;t churn.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            They stay to:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>watch their score rise</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>explore what unlocks next</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>test themselves against real product gates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>build legitimacy inside your ecosystem</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            No longer &quot;just a tool&quot; — you become:
          </p>
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
            The first place businesses go to become finance-ready.
          </p>
        </div>
      </section>

      {/* BEYOND RBF */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="Beyond Revenue-Based Financing"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
            Why RBF Is Not Enough
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Revenue-Based Financing (RBF) assumes:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>revenue already exists</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>consistency already proven</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>survival already achieved</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            Which means: RBF harvests survivors — it does not cultivate them.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            There&apos;s nothing wrong with harvesting. But it&apos;s incomplete.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            LumiqAI feeds the harvest.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Instead of asking: &quot;Are they ready yet?&quot;
            <br />
            You create a system where readiness is earned, visible, and inevitable.
          </p>
        </div>
      </section>

      {/* DELIVERY SEQUENCE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="Delivery Sequence — Not a Product SKU"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="text-base text-neutral-800">
                    Pre-revenue businesses gain structural visibility
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="text-base text-neutral-800">
                    Low-revenue businesses enter probationary exposure
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="text-base text-neutral-800">
                    Trust is earned via measurable progress
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="text-base text-neutral-800">
                    Limits increase only when behavior proves it
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-900 mb-4">Results:</p>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 mt-1">✓</span>
                  <span>Approval rates rise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 mt-1">✓</span>
                  <span>Defaults fall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 mt-1">✓</span>
                  <span>CAC leakage stops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600 mt-1">✓</span>
                  <span>Retention accelerates</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4 font-medium">
            With LumiqAI, RBF becomes graduation, not the first gate.
          </p>
        </div>
      </section>

      {/* READ THIS FROM EVERY FINTECH PERSPECTIVE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="Now Read This From Every Fintech Perspective"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Read This As...
          </p>
          
          <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6 lg:grid-cols-3">
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/SVG/trophy.svg" alt="Winner" width={24} height={24} className="w-6 h-6 object-contain" />
                <h3 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">
                  The Category Winner
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-4">Neo-Bank CEO</p>
              <p className="text-sm text-neutral-800 italic mb-4">
                &quot;If we rely on owner FICO when revenue is low, we&apos;re just another bank with better UX.&quot;
              </p>
              <p className="text-sm text-neutral-700 font-medium mb-2">LumiqAI lets you:</p>
              <ul className="space-y-1 text-xs text-neutral-600">
                <li>• sequence trust — not deny it</li>
                <li>• give SMBs reasons to log in weekly</li>
                <li>• retain customers before you can even sell them a product</li>
              </ul>
              <p className="text-sm text-neutral-800 mt-4 font-medium">
                You become: &quot;The place businesses start — not just where money sits.&quot;
              </p>
              <p className="text-xs text-neutral-600 mt-2">That&apos;s category ownership.</p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/SVG/growth.svg" alt="Transformer" width={24} height={24} className="w-6 h-6 object-contain" />
                <h3 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">
                  The Pipeline Transformer
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-4">Lender / RBF Operator</p>
              <p className="text-sm text-neutral-800 italic mb-4">
                &quot;We decline too many people who would pay us back — if we had let them start smaller.&quot;
              </p>
              <p className="text-sm text-neutral-700 font-medium mb-2">LumiqAI turns:</p>
              <ul className="space-y-1 text-xs text-neutral-600">
                <li>• rejected applicants → proof pipelines</li>
                <li>• random churn → staged retention</li>
                <li>• blind risk → observable readiness</li>
              </ul>
              <p className="text-sm text-neutral-800 mt-4 font-medium">
                You don&apos;t bet on history — you watch capability unfold.
              </p>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/SVG/safe box.svg" alt="Control" width={24} height={24} className="w-6 h-6 object-contain" />
                <h3 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">
                  The Control Layer
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-4">BIN Sponsor / Risk Committee</p>
              <p className="text-sm text-neutral-800 italic mb-4">
                &quot;We need defensibility, not inspiration.&quot;
              </p>
              <p className="text-sm text-neutral-700 font-medium mb-2">LumiqAI creates:</p>
              <ul className="space-y-1 text-xs text-neutral-600">
                <li>• explainable decisions</li>
                <li>• documented progression logic</li>
                <li>• measurable milestones</li>
                <li>• auditable limit escalation</li>
              </ul>
              <p className="text-sm text-neutral-800 mt-4 font-medium">
                Behavior is harder to fake than history — and now it&apos;s observable.
              </p>
              <p className="text-xs text-neutral-600 mt-2">Risk teams sleep better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BREAKTHROUGH */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            The Breakthrough
          </p>
          <H1
            title="You Don't Compete With Features"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Everyone copies speeds, APIs, UX
            <br />
            Everyone fights for the same mature SMBs
            <br />
            Everyone targets the same revenue-qualified accounts
            <br />
            Everyone goes after the same post-proof businesses
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4 font-medium">
            What LumiqAI owns is something deeper:
          </p>
          <p className="text-2xl lg:text-3xl text-neutral-900 max-w-3xl leading-relaxed font-bold">
            Financial Self-Awareness.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            The thing incumbents don&apos;t even realize they&apos;re missing.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            Whoever owns a business&apos;s self-image owns the long-term customer.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Once a business understands itself through your system:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>every competitor feels opaque</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>every external rejection amplifies your clarity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>every win reinforces your platform</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4 font-medium">
            This is retention as identity — not product utility.
          </p>
        </div>
      </section>

      {/* THE REAL LAND GRAB */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="The Real Land Grab"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            Once a platform owns:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>the first visibility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>the first trust</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">•</span>
              <span>the first earned limits</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            Switching stops being rational. It becomes emotional.
          </p>
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium italic">
            &quot;No one leaves who believed in us before anyone else did.&quot;
          </p>
        </div>
      </section>

      {/* THIS IS NOT LENDING */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <H1
            title="This Is Not Lending"
            className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
            textColor="dark"
          />
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
            This Is System Architecture
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            LumiqAI does not ask you to:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">✕</span>
              <span>take blind risk</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">✕</span>
              <span>override compliance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">✕</span>
              <span>challenge sponsor relationships</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            It gives you:
          </p>
          <ul className="space-y-2 text-sm lg:text-base text-neutral-700 max-w-3xl">
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">✓</span>
              <span>a defensible middle path</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">✓</span>
              <span>a way to say &quot;yes, carefully&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neutral-600 mt-1">✓</span>
              <span>a way to turn &quot;not yet&quot; into &quot;watch this unfold&quot;</span>
            </li>
          </ul>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            It aligns:
          </p>
          <div className="grid gap-3 lg:grid-cols-4 mt-4">
            <div className="text-center p-4 rounded-lg bg-neutral-50 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-900">Product</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-50 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-900">Risk</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-50 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-900">Revenue</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-neutral-50 border border-neutral-200 shadow-sm">
              <p className="font-semibold text-neutral-900">Marketing</p>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4 font-medium">
            Around one fundamental truth:
          </p>
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
            Businesses deserve a chance to prove themselves — without being set up to fail.
          </p>
        </div>
      </section>

      {/* THE BIGGER VISION */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            The Bigger Vision — The Mark You Leave on Finance
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
            If finance only funds what already works, we don&apos;t build economies— we freeze them.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
            LumiqAI does something radical:
          </p>
          <div className="mt-6 sm:mt-8 grid gap-4 lg:grid-cols-2">
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-base text-neutral-800">
                <span className="text-neutral-600 font-bold">🔹</span> Replace inherited fear with observable progress
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-base text-neutral-800">
                <span className="text-neutral-600 font-bold">🔹</span> Replace binary rejection with earned trust
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-base text-neutral-800">
                <span className="text-neutral-600 font-bold">🔹</span> Replace blind underwriting with deep visibility
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-base text-neutral-800">
                <span className="text-neutral-600 font-bold">🔹</span> Expand access without expanding risk
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-base text-neutral-800">
                <span className="text-neutral-600 font-bold">🔹</span> Grow revenue without harvesting only survivors
              </p>
            </div>
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-base text-neutral-800">
                <span className="text-neutral-600 font-bold">🔹</span> Build future revenue streams before they exist
              </p>
            </div>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed pt-4">
            This is how finance evolves.
            <br />
            This is how economies grow.
            <br />
            This is how you win the SMB era.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200 bg-neutral-50 mb-24">
        <div className="space-y-4 sm:space-y-6 text-center">
          <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Every fintech will eventually arrive here.
            <br />
            The only question is:
          </p>
          <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl mx-auto leading-relaxed font-medium">
            Who installs it first — and who has to explain later why they didn&apos;t?
          </p>
          <div className="mt-6 sm:mt-8">
            <Button title="Request a Private Pilot" />
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 mt-4">
            We work with one platform per category. No exceptions.
          </p>
        </div>
      </section>
    </main>
  );
}

