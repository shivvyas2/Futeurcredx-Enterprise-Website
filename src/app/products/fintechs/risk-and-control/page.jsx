import H1 from "@/common/component/element/H1";
import Button from "@/common/component/element/Button";
import Image from "next/image";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionText from "@/common/component/element/SectionText";

export const metadata = {
  title: "For Fintechs - Risk and Control - FuteurCredX",
  description: "Risk management and control features",
};

export default function RiskAndControlPage() {
  return (
    <main className="flex flex-col relative overflow-hidden items-center bg-neutral-50">
      {/* Risk and Control Page - Complete Content */}
      {/* HERO SECTION */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            background: 'linear-gradient(to bottom, #ffffff 0%, #c4b5fd 75%, #8b5cf6 100%)' 
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
                  Control Layer Documentation
                </p>
                <h1 className="uppercase text-black text-[32px] leading-[38px] tracking-tight sm:text-[40px] sm:leading-[46px] lg:text-[52px] lg:leading-[60px] xl:text-[60px] xl:leading-[68px]">
                  Risk, Control, and Sponsor Alignment
                </h1>
                <p className="text-xl lg:text-2xl text-[#272727] max-w-3xl mx-auto font-medium">
                  This Is How Uncertainty Is Governed — Not Avoided
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                  LumiqAI is not a lending product. It is not an underwriting shortcut. It is not a workaround for policy.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed">
                  LumiqAI is a Pre-Credit Operating System — a control layer that governs how uncertainty is handled before capital is ever placed at risk.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium">
                  Its purpose is not to loosen standards. Its purpose is to replace blind rejection with observable readiness — without moving authority, policy ownership, or sponsor control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE RISK PHILOSOPHY */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-4">
              <SectionText title="Start Here" />
              <H1
                title="The Risk Philosophy"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                Modern credit systems break at the same point:
              </p>
              <p className="text-2xl lg:text-3xl text-neutral-900 font-bold">
                Uncertainty.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                When signal quality drops, most stacks default to:
              </p>
              <ul className="space-y-3 text-base text-neutral-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">•</span>
                  <span>owner FICO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">•</span>
                  <span>hard revenue gates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#495464] mt-1 font-bold">•</span>
                  <span>binary rejection</span>
                </li>
              </ul>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                Those are not conservative decisions.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium">
                They are blind ones.
              </p>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] border border-neutral-200">
                <p className="text-xl lg:text-2xl text-neutral-900 font-bold italic">
                  &quot;Risk should not be avoided when uncertainty appears. It should be measured, staged, and governed.&quot;
                </p>
                <p className="text-base text-neutral-700 mt-4">
                  This is the role of the Pre-Credit Operating System.
                </p>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* AUTHORITY NEVER MOVES */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="Authority Never Moves"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              LumiqAI is intentionally designed so that nothing critical changes hands.
            </p>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Image src="/SVG/safe box.svg" alt="Authority" width={28} height={28} className="w-7 h-7 object-contain" />
                    <h3 className="text-xl font-semibold text-[#494949]">Stays With You</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span><strong>Your institution</strong> — final approval authority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span><strong>Your sponsor bank / BIN sponsor</strong> — policy and constraints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span><strong>Your risk committee</strong> — escalation, override, kill-switch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span><strong>Your underwriting models</strong> — decisioning</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Image src="/SVG/Audit.svg" alt="Does Not" width={28} height={28} className="w-7 h-7 object-contain" />
                    <h3 className="text-xl font-semibold text-[#494949]">LumiqAI Does Not</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>Does not approve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>Does not decline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>Does not lend</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4 mt-4">
                    It governs the space between those outcomes.
                  </p>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* WHAT DOES NOT CHANGE / WHAT DOES CHANGE */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">What Does Not Change</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>Eligibility rules</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>Approval thresholds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>Sponsor constraints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>Credit policy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>Capital exposure limits</span>
                    </li>
                  </ul>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">What Does Change</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>What happens after &apos;not approved&apos;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>How readiness is formed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>Whether uncertainty becomes data or dead ends</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4 mt-4">
                    This is the difference between risk governance and risk avoidance.
                  </p>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* MEASURED OPPORTUNITY */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Image src="/SVG/speedometer.svg" alt="Opportunity" width={40} height={40} className="w-10 h-10 object-contain" />
              <H1
                title="Measured Opportunity"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>
            <p className="text-xl lg:text-2xl text-neutral-900 max-w-3xl leading-relaxed font-medium">
              The Missing Control State
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              Most stacks offer two states:
            </p>
            <div className="flex items-center gap-4 max-w-3xl">
              <div className="flex-1 p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 text-center">
                <p className="font-semibold text-neutral-900">approve</p>
              </div>
              <p className="text-neutral-600 font-medium">or</p>
              <div className="flex-1 p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 text-center">
                <p className="font-semibold text-neutral-900">decline</p>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
              LumiqAI introduces a third:
            </p>
            <div className="mt-6 sm:mt-8 p-8 rounded-2xl bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] border border-neutral-200">
              <p className="text-2xl lg:text-3xl text-neutral-900 font-bold mb-6">Measured Opportunity</p>
              
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-6 sm:mt-8">
                <div>
                  <p className="text-sm font-semibold text-[#494949] mb-3">Measured Opportunity is:</p>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span>non-credit by default</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span>capped if any instrument is attached</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span>milestone-gated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span>reversible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span>fully documented</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✓</span>
                      <span>sponsor-aligned</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#494949] mb-3">It is not:</p>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>pre-approval</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>silent underwriting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>exception-making</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">✕</span>
                      <span>policy drift</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-base text-neutral-800 leading-relaxed font-medium mt-6 pt-6 border-t border-neutral-300">
                Measured Opportunity exists so uncertainty can be observed instead of feared.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* WHY THIS IS SAFER */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <H1
              title="Why This Is Safer Than Defaults"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              When uncertainty appears, binary systems:
            </p>

            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 mt-8 sm:mt-12">
              <ComponentTransition delay={0.1} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">Binary Systems</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>reject prematurely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">•</span>
                      <span>approve on weak proxies</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4 mt-4">
                    Both are risky.
                  </p>
                </div>
              </ComponentTransition>

              <ComponentTransition delay={0.2} className="p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] rounded-3xl border border-neutral-200 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#494949] mb-4">LumiqAI Replaces With</h3>
                  <ul className="space-y-2 text-sm text-[#7A7A7A]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>staged exposure (or none)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>longitudinal behavior observation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>explicit readiness milestones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>explainable progression logic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#495464] mt-1">→</span>
                      <span>human-governed escalation</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#494949] font-semibold leading-relaxed border-t border-neutral-300 pt-4 mt-4">
                    Risk does not increase. It becomes legible.
                  </p>
                </div>
              </ComponentTransition>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* GAMING, BIAS, AND FAIR LENDING */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <H1
              title="Gaming, Bias, and Fair Lending"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
              LumiqAI does not introduce a new credit model. It introduces transparency.
            </p>
            <div className="grid gap-4 lg:grid-cols-2 mt-6 sm:mt-8">
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200">
                <ul className="space-y-2 text-sm text-[#7A7A7A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✕</span>
                    <span>No protected-class inference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✕</span>
                    <span>No opaque scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✕</span>
                    <span>No hidden weighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✕</span>
                    <span>No automatic escalation</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200">
                <p className="text-sm text-[#494949] font-semibold mb-2">Why This Matters:</p>
                <p className="text-sm text-[#7A7A7A] leading-relaxed">
                  Behavior is harder to game than history.
                </p>
                <p className="text-sm text-[#7A7A7A] leading-relaxed mt-2">
                  Consistency is harder to fake than a score.
                </p>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* KILL SWITCHES AND INTERVENTION */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <Image src="/SVG/safe box.svg" alt="Kill Switches" width={40} height={40} className="w-10 h-10 object-contain" />
              <H1
                title="Kill Switches and Intervention"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              Every LumiqAI deployment supports:
            </p>
            <div className="grid gap-4 lg:grid-cols-3 mt-6 sm:mt-8">
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center gap-3 text-center">
                <Image src="/SVG/target.svg" alt="Caps" width={32} height={32} className="w-8 h-8 object-contain" />
                <p className="text-sm font-semibold text-neutral-900">progression caps</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center gap-3 text-center">
                <Image src="/SVG/hourglass.svg" alt="Freezing" width={32} height={32} className="w-8 h-8 object-contain" />
                <p className="text-sm font-semibold text-neutral-900">stage freezing</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center gap-3 text-center">
                <Image src="/SVG/target.svg" alt="Approval" width={32} height={32} className="w-8 h-8 object-contain" />
                <p className="text-sm font-semibold text-neutral-900">manual escalation approval</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center gap-3 text-center">
                <Image src="/SVG/rocket.svg" alt="Rollback" width={32} height={32} className="w-8 h-8 object-contain" />
                <p className="text-sm font-semibold text-neutral-900">instant rollback</p>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col items-center gap-3 text-center">
                <Image src="/SVG/safe box.svg" alt="Constraints" width={32} height={32} className="w-8 h-8 object-contain" />
                <p className="text-sm font-semibold text-neutral-900">sponsor-governed constraints</p>
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium mt-6 sm:mt-8">
              Nothing must auto-escalate.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
              Nothing is irreversible.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed font-medium">
              Control is designed in — not layered on later.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* AUDITABILITY AND DOCUMENTATION */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <Image src="/SVG/document.svg" alt="Documentation" width={40} height={40} className="w-10 h-10 object-contain" />
              <H1
                title="Auditability and Documentation"
                className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
                textColor="dark"
              />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 max-w-3xl leading-relaxed">
              LumiqAI produces:
            </p>
            <div className="grid gap-4 lg:grid-cols-2 mt-6 sm:mt-8">
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200">
                <ul className="space-y-2 text-sm text-[#7A7A7A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">•</span>
                    <span>progression state logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">•</span>
                    <span>milestone completion records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">•</span>
                    <span>escalation rationales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">•</span>
                    <span>override trails (who, what, when, why)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">•</span>
                    <span>sponsor-ready summaries</span>
                  </li>
                </ul>
              </div>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200">
                <p className="text-sm font-semibold text-neutral-900 mb-4">This strengthens:</p>
                <ul className="space-y-2 text-sm text-[#7A7A7A]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✓</span>
                    <span>audit readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✓</span>
                    <span>model risk governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✓</span>
                    <span>sponsor oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#495464] mt-1">✓</span>
                    <span>regulatory defensibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>

      {/* THE STRATEGIC RISK OF WAITING */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-neutral-200 bg-neutral-50">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
            <H1
              title="The Strategic Risk of Waiting"
              className="!text-xl sm:!text-2xl lg:!text-4xl font-semibold"
              textColor="dark"
            />
            <p className="text-2xl lg:text-3xl text-neutral-900 font-bold">
              Waiting does not reduce risk.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 font-medium">
              It shifts it downstream.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
              Platforms without a progression layer:
            </p>
            <ul className="space-y-3 text-base text-neutral-700">
              <li className="flex items-start gap-3">
                <span className="text-[#495464] mt-1 font-bold">•</span>
                <span>only see businesses after readiness exists</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#495464] mt-1 font-bold">•</span>
                <span>compete for the same survivors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#495464] mt-1 font-bold">•</span>
                <span>lose visibility into formation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#495464] mt-1 font-bold">•</span>
                <span>inherit customers shaped elsewhere</span>
              </li>
            </ul>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed font-medium mt-6">
              Once a business earns readiness inside another system, switching becomes costly — operationally and psychologically.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 font-medium">
              That loss is permanent.
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
              LumiqAI does not decide who gets credit.
            </p>
            <p className="text-xl lg:text-2xl text-neutral-900 leading-relaxed font-medium">
              It decides whether uncertainty becomes a blind rejection — or a governed process.
            </p>
          </div>
        </ComponentTransition>
      </section>

      {/* FINAL CTA */}
      <section className="w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 border-t border-b border-neutral-200 bg-neutral-50 mb-24">
        <ComponentTransition className="w-full">
          <div className="space-y-6 sm:space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-neutral-800 leading-relaxed">
                If your institution values control over comfort,
              </p>
              <div className="mt-6 sm:mt-8">
                <Button title="Request a Private Pilot" className="!bg-white border border-neutral-300 text-neutral-900 hover:!bg-neutral-100 shadow-sm !px-8 !py-3" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mt-4">
                One platform per category.
              </p>
            </div>
          </div>
        </ComponentTransition>
      </section>
    </main>
  );
}
