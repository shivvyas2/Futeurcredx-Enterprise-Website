import H1 from "@/common/component/element/H1";
import Button from "@/common/component/element/Button";
import Image from "next/image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionText from "@/common/component/element/SectionText";
import clsx from "clsx";

export const metadata = {
  title: "For Fintechs - How It Works - FuteurCredX",
  description: "How our fintech platform works",
};

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col relative overflow-hidden items-center bg-neutral-50">
      {/* HERO SECTION */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            background: 'linear-gradient(to bottom, #ffffff 0%, #d4e4f7 75%, #7ba3d4 100%)' 
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
                <p className="text-sm tracking-[0.25em] uppercase text-neutral-600 font-medium">
                  A Pre-Credit Operating Loop
                </p>
                <h1 className="uppercase text-black text-[32px] leading-[38px] tracking-tight sm:text-[40px] sm:leading-[46px] lg:text-[52px] lg:leading-[60px] xl:text-[60px] xl:leading-[68px]">
                  — Not a Product Feature
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                  LumiqAI operates upstream of credit — in the phase where uncertainty is highest and traditional systems collapse into binary outcomes.
                </p>
                <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl mx-auto leading-relaxed font-medium">
                  Its job is simple and precise:
                  <br />
                  Turn uncertainty into observable progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE LUMIQAI SITS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-4">
              <H1
                title="Where LumiqAI Sits"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                LumiqAI lives between application and capital.
              </p>
            </div>

            {/* Visual Stack Diagram */}
            <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-0">
                {/* ABOVE Section - Products Layer */}
                <div className="w-full space-y-3 mb-6">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider text-center mb-4">PRODUCTS LAYER</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 bg-white border-2 border-neutral-300 rounded-xl text-center shadow-sm flex flex-col items-center gap-2">
                      <Image src="/SVG/Bank.svg" alt="Banking" width={32} height={32} className="w-8 h-8 object-contain" />
                      <p className="text-sm font-semibold text-neutral-800">Banking Products</p>
                    </div>
                    <div className="p-4 bg-white border-2 border-neutral-300 rounded-xl text-center shadow-sm flex flex-col items-center gap-2">
                      <Image src="/SVG/money.svg" alt="Lending" width={32} height={32} className="w-8 h-8 object-contain" />
                      <p className="text-sm font-semibold text-neutral-800">Lending Products</p>
                    </div>
                    <div className="p-4 bg-white border-2 border-neutral-300 rounded-xl text-center shadow-sm flex flex-col items-center gap-2">
                      <Image src="/SVG/growth.svg" alt="RBF" width={32} height={32} className="w-8 h-8 object-contain" />
                      <p className="text-sm font-semibold text-neutral-800">Revenue-Based Financing</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex flex-col items-center my-2">
                  <div className="w-0.5 h-8 bg-neutral-400"></div>
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-neutral-400"></div>
                </div>

                {/* LumiqAI Layer - Highlighted */}
                <div className="w-full p-6 lg:p-8 bg-gradient-to-br from-[#495464] to-[#3a4451] rounded-2xl shadow-xl border-4 border-neutral-200 relative z-10">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center mb-3">
                      <Image src="/SVG/connection.svg" alt="LumiqAI" width={48} height={48} className="w-12 h-12 object-contain opacity-90" />
                    </div>
                    <p className="text-2xl lg:text-3xl font-bold text-white mb-1">LumiqAI</p>
                    <p className="text-sm lg:text-base text-neutral-200 font-medium">The Pre-Credit Operating Layer</p>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-xs text-neutral-300 italic">Sits between products and underwriting</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex flex-col items-center my-2">
                  <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-neutral-400"></div>
                  <div className="w-0.5 h-8 bg-neutral-400"></div>
                </div>

                {/* BELOW Section - Foundation Layer */}
                <div className="w-full space-y-3 mt-6">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider text-center mb-4">FOUNDATION LAYER</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-4 bg-neutral-100 border-2 border-neutral-300 rounded-xl text-center flex flex-col items-center gap-2">
                      <Image src="/SVG/Audit.svg" alt="Underwriting" width={32} height={32} className="w-8 h-8 object-contain" />
                      <p className="text-sm font-semibold text-neutral-800">Core Underwriting Logic</p>
                    </div>
                    <div className="p-4 bg-neutral-100 border-2 border-neutral-300 rounded-xl text-center flex flex-col items-center gap-2">
                      <Image src="/SVG/safe box.svg" alt="Policies" width={32} height={32} className="w-8 h-8 object-contain" />
                      <p className="text-sm font-semibold text-neutral-800">Sponsor Bank Policies</p>
                    </div>
                    <div className="p-4 bg-neutral-100 border-2 border-neutral-300 rounded-xl text-center flex flex-col items-center gap-2">
                      <Image src="/SVG/target.svg" alt="Approval" width={32} height={32} className="w-8 h-8 object-contain" />
                      <p className="text-sm font-semibold text-neutral-800">Approval Authority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation Box */}
            <div className="mt-8 sm:mt-12 max-w-3xl mx-auto p-6 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-2xl border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#495464] rounded-full flex items-center justify-center p-2">
                  <Image src="/SVG/connection.svg" alt="Connection" width={24} height={24} className="w-6 h-6 object-contain opacity-90" />
                </div>
                <div>
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                    It does not compete with your stack. It feeds it cleaner inputs.
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                    LumiqAI operates above your products and below your core systems, providing the intelligence layer that connects them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* THE OPERATING LOOP */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-4">
              <H1
                title="THE OPERATING LOOP"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                LumiqAI runs as a continuous, observable loop
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              {/* Step 1 */}
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#495464] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Image src="/SVG/Binoculars.svg" alt="Visibility" width={24} height={24} className="w-6 h-6 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#494949]">Visibility</h3>
                      </div>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        Every business begins with visibility — not judgment.
                      </p>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        LumiqAI establishes personal credit context, business credit presence, entity hygiene, and baseline readiness indicators.
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-3">
                        No decisions are made here. Only reality is made visible.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentTransition>

              {/* Step 2 */}
              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#495464] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Image src="/SVG/Compass.svg" alt="Understanding" width={24} height={24} className="w-6 h-6 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#494949]">Contextual Understanding</h3>
                      </div>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        Instead of asking &quot;Do they qualify?&quot;, LumiqAI asks:
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed italic mb-3 bg-white/50 p-3 rounded-lg">
                        &quot;What is structurally true about this business right now?&quot;
                      </p>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        — explaining why a business is considered &quot;not ready&quot; and which factors matter for which products.
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-3">
                        This is where blind rejection ends.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentTransition>

              {/* Step 3 */}
              <ComponentTransition delay={0.3} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#495464] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Image src="/SVG/speedometer.svg" alt="Opportunity" width={24} height={24} className="w-6 h-6 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#494949]">Measured Opportunity</h3>
                      </div>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        A controlled, sponsor-safe middle state.
                      </p>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        Exposure is capped. Progression is conditional. Behavior is observed, not assumed. No trust is given freely — all trust is earned and documented.
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-3">
                        The third state between approve and decline.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentTransition>

              {/* Step 4 */}
              <ComponentTransition delay={0.4} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#495464] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Image src="/SVG/chart.svg" alt="Progression" width={24} height={24} className="w-6 h-6 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#494949]">Observable Progression</h3>
                      </div>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        Behaviors are observed. Signals are recorded. Milestones are tracked.
                      </p>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        Progress is incremental, auditable, and reversible. Nothing relies on optimism or projections.
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-3">
                        Behavior replaces history as the signal.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentTransition>

              {/* Step 5 */}
              <ComponentTransition delay={0.5} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#495464] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Image src="/SVG/Achievement.svg" alt="Escalation" width={24} height={24} className="w-6 h-6 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#494949]">Earned Escalation</h3>
                      </div>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        When observable milestones are met, access increases.
                      </p>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        Limits expand. Products unlock. Escalation is rule-based, explainable, sponsor-governed, and human-overridable.
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-3">
                        No step is automatic without proof.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentTransition>

              {/* Step 6 */}
              <ComponentTransition delay={0.6} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#495464] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
                      6
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Image src="/SVG/rocket.svg" alt="Graduation" width={24} height={24} className="w-6 h-6 object-contain" />
                        <h3 className="text-2xl font-semibold text-[#494949]">Graduation Into Your Products</h3>
                      </div>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        The customer arrives ready — inside your ecosystem.
                      </p>
                      <p className="text-sm text-[#7A7A7A] leading-relaxed mb-3">
                        The business graduates into your lending products, RBF offerings, or higher-tier banking services. Approval risk is lower, context is richer, loyalty is established.
                      </p>
                      <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-3">
                        Revenue created, not harvested.
                      </p>
                    </div>
                  </div>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* WHAT LUMIQAI DOES AND DOESN'T DO */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="What LumiqAI Does — and Doesn't Do"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              {/* What LumiqAI Observes */}
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/SVG/analitic.svg" alt="Observes" width={28} height={28} className="w-7 h-7 object-contain" />
                    <h3 className="text-2xl font-semibold text-[#494949]">What LumiqAI Observes</h3>
                  </div>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed mb-4 font-medium">
                    Signals that compound trust:
                  </p>
                  <ul className="space-y-3 text-sm text-[#7A7A7A] mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Consistency of behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Reporting discipline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Cashflow patterns (where applicable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Structural readiness indicators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Progression against defined milestones</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4">
                    These signals inform progression, explain decisions, and reduce uncertainty.
                  </p>
                </div>
              </ComponentTransition>

              {/* What LumiqAI Does Not Do */}
              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Image src="/SVG/safe box.svg" alt="Does Not Do" width={28} height={28} className="w-7 h-7 object-contain" />
                    <h3 className="text-2xl font-semibold text-[#494949]">What LumiqAI Does Not Do</h3>
                  </div>
                  <p className="text-sm text-[#7A7A7A] leading-relaxed mb-4 italic font-medium">
                    This is intentional:
                  </p>
                  <ul className="space-y-3 text-sm text-[#7A7A7A] mb-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold text-lg">✕</span>
                      <span>Move funds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold text-lg">✕</span>
                      <span>Approve credit alone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold text-lg">✕</span>
                      <span>Override sponsor rules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold text-lg">✕</span>
                      <span>Replace your underwriting models</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold text-lg">✕</span>
                      <span>Force exposure increases</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4">
                    LumiqAI is a control layer, not a risk engine.
                  </p>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* WHY THIS IS SAFER */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="Why This Is Safer Than the Status Quo"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              When uncertainty appears, most systems default to blind decisions.
            </p>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">Status Quo Defaults</h3>
                  <ul className="space-y-3 text-sm text-[#7A7A7A] mb-4">
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Owner FICO</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Hard revenue thresholds</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Binary rejection</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4">
                    These are blind decisions.
                  </p>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">LumiqAI Replaces With</h3>
                  <ul className="space-y-3 text-sm text-[#7A7A7A] mb-4">
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Visibility</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Staged exposure</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Documented progression</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#495464] font-bold text-lg">→</span>
                      <span>Explainable outcomes</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4">
                    Risk does not increase. It becomes observable.
                  </p>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* WHY THIS CHANGES THE FUNNEL */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="Why This Changes the Funnel"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">Without LumiqAI</h3>
                  <ul className="space-y-3 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Declined applicants disappear</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Future revenue is lost upstream</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Platforms compete downstream for survivors</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">With LumiqAI</h3>
                  <ul className="space-y-3 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Declined applicants become progression pipelines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Readiness is cultivated, not guessed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#495464] mt-1 font-bold">•</span>
                      <span>Future revenue is created inside your platform</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>
            </div>

            <p className="text-center text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium mt-6 sm:mt-8">
              Nothing downstream changes. Everything upstream improves.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* DESIGNED FOR SPONSORS */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="Designed for Sponsors, Not Around Them"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              LumiqAI is built to respect sponsor bank constraints, align with compliance frameworks, produce auditable decision trails, and allow immediate intervention if needed.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
              It is not a loophole.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
              It is a defensible operating layer.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* IN ONE SENTENCE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 text-center">
            <SectionText title="IN ONE SENTENCE" />
            <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl mx-auto leading-relaxed font-medium">
              LumiqAI does not decide who gets credit.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl mx-auto leading-relaxed font-medium">
              It decides how readiness is earned — safely, visibly, and inside your ecosystem.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* FINAL CTA */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200 bg-neutral-50 mb-24">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 text-center">
            <div className="space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                If this loop fits how you think about risk, growth, and long-term customer ownership:
              </p>
              <div className="mt-6 sm:mt-8">
                <Button title="Request a Private Pilot" className="!bg-white border border-neutral-300 text-neutral-900 hover:!bg-neutral-100 shadow-sm !px-8 !py-3" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mt-4">
                We work with one platform per category.
              </p>
            </div>
            
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <div className="text-center space-y-2">
                <p className="text-2xl font-bold text-neutral-900">LumiqAI</p>
                <p className="text-sm text-neutral-700">The Intelligence Layer That Turns &quot;Unbankable&quot; Into &quot;Proven&quot;</p>
                <p className="text-xs text-neutral-600 mt-4">© 2025 LumiqAI. All rights reserved.</p>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>
    </main>
  );
}
