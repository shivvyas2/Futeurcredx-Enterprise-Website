import H1 from "@/common/component/element/H1";
import Button from "@/common/component/element/Button";
import Image from "next/image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionText from "@/common/component/element/SectionText";

export const metadata = {
  title: "For Fintechs - Outcomes - FuteurCredX",
  description: "Results and outcomes you can expect",
};

export default function OutcomesPage() {
  return (
    <main className="flex flex-col relative overflow-hidden items-center bg-neutral-50">
      {/* HERO SECTION */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            background: 'linear-gradient(to bottom, #ffffff 0%, #a7f3d0 75%, #10b981 100%)' 
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
            <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="uppercase text-black text-[32px] leading-[38px] tracking-tight sm:text-[40px] sm:leading-[46px] lg:text-[52px] lg:leading-[60px] xl:text-[60px] xl:leading-[68px]">
                  Outcomes
                </h1>
                <p className="text-xl lg:text-2xl text-[#272727] max-w-3xl mx-auto font-medium">
                  What Changes When You Stop Rejecting Potential
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                  Most fintech platforms measure success at the moment of approval.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium">
                  LumiqAI shifts the center of gravity upstream — to the moment before approval, where most value is silently destroyed.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium">
                  Not hypothetically. Structurally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME 01 - FUNNEL STOPS LEAKING */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                01
              </div>
              <H1
                title="Your Funnel Stops Leaking Where It Matters Most"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">BEFORE</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Applications spike</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Approvals look clean</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Declines disappear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>CAC resets every cycle</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">AFTER</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Declines become states, not exits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>70–90% of &apos;not approved&apos; applicants remain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Readiness is formed instead of deferred</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Value creation starts before capital is deployed</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium mt-6 sm:mt-8 text-center">
              Your funnel stops ending early. It starts compounding upstream.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 02 - OWN THE MOMENT */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                02
              </div>
              <H1
                title="You Own the Moment Businesses Become Real"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                There is a single moment every SMB remembers: &apos;This is when we became legitimate.&apos; With LumiqAI, that moment happens inside your platform — before anyone else ever touches them.
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>The first financial mirror</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>The first place progress is visible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>The system that taught them how readiness is earned</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                That ownership never resets.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 03 - RETENTION BECOMES GRAVITY */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                03
              </div>
              <H1
                title="Retention Stops Being a Metric — It Becomes Gravity"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                SMBs don&apos;t churn because they hate platforms. They churn because platforms go dark when the answer is &apos;not yet.&apos;
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>See where they stand</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>See what unlocks next</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>See progress move weekly</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                This is not engagement. This is identity lock-in.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 04 - REVENUE APPEARS EARLIER */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                04
              </div>
              <H1
                title="Revenue Appears Earlier — Without Taking More Risk"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                Traditional systems wait for revenue before engagement. LumiqAI does the opposite.
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Pre-credit subscriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Readiness-linked tooling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Graduated product tiers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Earlier cross-sell eligibility</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                Revenue moves upstream. Risk does not.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 05 - LENDING BECOMES SMARTER */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                05
              </div>
              <H1
                title="Lending Becomes Smarter Without Becoming Looser"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">BEFORE</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>A thin snapshot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>A binary score</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>A cold application</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">AFTER</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Longitudinal behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Documented progression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Explainable readiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Reduced uncertainty</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium mt-6 sm:mt-8 text-center">
              Approval rates improve. Defaults stabilize or fall. Not because standards drop — but because signal quality rises.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 06 - RISK COMMITTEES GAIN CONTROL */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                06
              </div>
              <H1
                title="Risk Committees Gain Control Instead of Exceptions"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">BEFORE</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Uncertainty forces exceptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Exceptions create anxiety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Anxiety tightens policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">—</span>
                      <span>Good businesses get rejected</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">AFTER</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Uncertainty becomes staged</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Progression is documented</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Escalation is governed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Intervention is easy</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium mt-6 sm:mt-8 text-center">
              Risk teams stop saying &apos;no&apos; defensively. They start saying: &apos;Show me the progression.&apos;
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 07 - SPONSOR RELATIONSHIPS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                07
              </div>
              <H1
                title="Sponsor Relationships Get Easier, Not Harder"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                Sponsor banks and BIN partners don&apos;t want innovation. They want clarity.
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Explicit middle states</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Documented logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Auditable progression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Fewer informal exceptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Cleaner downstream approvals</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                The &apos;gray zone&apos; becomes visible. Oversight improves. Tension drops.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 08 - STOP COMPETING ON FEATURES */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                08
              </div>
              <H1
                title="Your Platform Stops Competing on Features"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                Every fintech eventually converges on similar products, UX, APIs, and pricing. LumiqAI changes what you compete on.
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>When you meet businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>How early you retain them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>How deeply you shape them</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                Once a platform owns readiness formation, every competitor feels late.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* OUTCOME 09 - COMPETITIVE LOSS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#495464] text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-md">
                09
              </div>
              <H1
                title="Competitive Loss Is Irreversible Once It Starts"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                The advantage LumiqAI creates does not compound through capital or pricing. It compounds through time.
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Captures early visibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Hosts readiness formation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Governs progression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">→</span>
                  <span>Graduates customers internally</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                Waiting does not preserve optionality. It permanently narrows it.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* THE STRUCTURAL DIFFERENCE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="The Structural Difference"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed text-center mx-auto">
              Architecture comparison
            </p>

            <div className="grid gap-8 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/SVG/loss.svg" alt="Traditional" width={24} height={24} className="w-6 h-6 object-contain" />
                    <h3 className="text-xl font-semibold text-[#494949]">Traditional Fintech Funnel</h3>
                  </div>
                  <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-4">BINARY · FEAR-BASED · LEAKY</p>
                  <div className="space-y-3 text-sm text-[#7A7A7A]">
                    <div>Apply</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <span>Binary Decision</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <div className="flex-1">
                        <div className="p-2 bg-white rounded border border-neutral-200 mb-2">Approve → Compete downstream</div>
                        <div className="p-2 bg-white rounded border border-neutral-200">Decline → Lost forever</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-300 space-y-1 text-xs text-[#7A7A7A]">
                    <p>— Value creation begins only after approval</p>
                    <p>— Loss is silent and permanent</p>
                    <p>— CAC resets every cycle</p>
                  </div>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/SVG/growth.svg" alt="LumiqAI" width={24} height={24} className="w-6 h-6 object-contain" />
                    <h3 className="text-xl font-semibold text-[#494949]">LumiqAI Funnel</h3>
                  </div>
                  <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-4">PROGRESSIVE · OBSERVABLE · COMPOUNDING</p>
                  <div className="space-y-3 text-sm text-[#7A7A7A]">
                    <div>Apply</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <span>Visibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <span>Measured Opportunity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <span>Observable Progression</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <span>Graduation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">↓</span>
                      <div className="flex-1 space-y-1">
                        <div className="p-2 bg-white rounded border border-neutral-200">Lending</div>
                        <div className="p-2 bg-white rounded border border-neutral-200">RBF</div>
                        <div className="p-2 bg-white rounded border border-neutral-200">Premium Banking</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-neutral-300 space-y-1 text-xs text-[#7A7A7A]">
                    <p>→ Readiness is manufactured, not assumed</p>
                    <p>→ Value compounds before capital is deployed</p>
                    <p>→ No silent exits</p>
                  </div>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* TIME-BASED COMPETITIVE POSITION */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <H1
              title="Time-Based Competitive Position"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">PLATFORM A</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mb-4">Installs LumiqAI</p>
                  <div className="space-y-2 text-sm text-[#7A7A7A]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">→</span>
                      <span>Visibility</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">→</span>
                      <span>Progression</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">→</span>
                      <span>Graduation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">→</span>
                      <span>Loyalty</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#494949] font-semibold mt-4 pt-4 border-t border-neutral-300">
                    Compounding value over time →
                  </p>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">PLATFORM B</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mb-4">Waits</p>
                  <div className="space-y-2 text-sm text-[#7A7A7A]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">→</span>
                      <span>Apply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">→</span>
                      <span>Decline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#495464]">—</span>
                      <span>Compete for survivors</span>
                    </div>
                  </div>
                  <p className="text-sm text-[#494949] font-semibold mt-4 pt-4 border-t border-neutral-300">
                    No accumulation
                  </p>
                </div>
              </ComponentTransition>
            </div>
            <p className="text-center text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium italic mt-6 sm:mt-8">
              &quot;Readiness ownership compounds by time, not capital.&quot;
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* DIRECTIONAL ECONOMICS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <H1
              title="Directional Economics"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
              This is not a promise deck. It is a description of structural shifts platforms consistently observe:
            </p>
            <div className="mt-6 sm:mt-8 space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[#495464] mt-1 font-bold">→</span>
                <span className="text-sm text-neutral-800">Declined applicants retained instead of lost</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[#495464] mt-1 font-bold">→</span>
                <span className="text-sm text-neutral-800">CAC amortized over longer lifecycles</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[#495464] mt-1 font-bold">→</span>
                <span className="text-sm text-neutral-800">Earlier monetization surfaces introduced</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[#495464] mt-1 font-bold">→</span>
                <span className="text-sm text-neutral-800">Approval confidence increases</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-200">
                <span className="text-[#495464] mt-1 font-bold">→</span>
                <span className="text-sm text-neutral-800">Downstream products see warmer demand</span>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium mt-6 sm:mt-8 text-center">
              The economic effect is not explosive. It is compounding.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* THE END STATE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <H1
              title="The End State"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
              18 months after installing LumiqAI, your platform is no longer asking:
            </p>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] border border-neutral-200">
              <p className="text-lg font-semibold text-neutral-900 mb-4">&quot;How do we approve more safely?&quot;</p>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
              You&apos;re asking:
            </p>
            <div className="mt-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] border border-neutral-200">
              <p className="text-lg font-semibold text-neutral-900 mb-4">&quot;How early can we meet the next generation of businesses?&quot;</p>
            </div>
            <p className="text-xl lg:text-2xl text-neutral-900 font-medium mt-6 sm:mt-8">
              You don&apos;t wait for readiness.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 font-medium">
              You manufacture it.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* IN ONE SENTENCE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 text-center max-w-4xl mx-auto">
            <SectionText title="IN ONE SENTENCE" />
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed font-medium">
              LumiqAI doesn&apos;t help you win approvals.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed font-medium">
              It helps you win before approvals exist.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* PRIVATE PILOTS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200 bg-neutral-50 mb-24">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <H1
                title="Private Pilots"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                We work with one platform per category.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                Because this is not a feature. It is an operating advantage.
              </p>
              <div className="mt-6 sm:mt-8">
                <Button title="Request a Private Pilot" className="!bg-white border border-neutral-300 text-neutral-900 hover:!bg-neutral-100 shadow-sm !px-8 !py-3" />
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>
    </main>
  );
}
