import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Understanding SAWS Water Restrictions: A Property Manager's Guide",
  description:
    'A complete guide to SAWS water restrictions for commercial property managers. Covers year-round rules, Stage 1 through Stage 4 restrictions, compliance strategies, and smart irrigation solutions.',
  keywords: [
    'SAWS water restrictions',
    'SAWS watering rules',
    'San Antonio water restrictions',
    'SAWS Stage 1 restrictions',
    'SAWS Stage 2 restrictions',
    'SAWS commercial watering schedule',
    'San Antonio irrigation compliance',
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Understanding SAWS Water Restrictions: A Property Manager's Guide",
  description:
    'A complete guide to SAWS water restrictions for commercial property managers in San Antonio.',
  datePublished: '2026-04-01',
  author: {
    '@type': 'Organization',
    name: 'GreatView Landscapes',
    url: 'https://greatviewlandscapes.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GreatView Landscapes',
    url: 'https://greatviewlandscapes.com',
  },
}

export default function SAWSWaterRestrictionsArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">SAWS Water Restrictions Guide</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Water Management
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-3">
            Understanding SAWS Water Restrictions: A Property Manager&apos;s Guide
          </h1>
          <p className="mt-4 text-sm text-emerald-200/60">
            Published April 1, 2026
          </p>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <article className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg">
              San Antonio Water System (SAWS) enforces water use restrictions year-round, not just
              during droughts. For property managers overseeing HOA communities and commercial
              properties, understanding these SAWS water restrictions is not optional. Violations
              carry fines that escalate with each offense, and repeated non-compliance can result in
              flow restrictors being placed on your meter. This guide covers what you need to know
              to keep your properties compliant and your landscapes healthy.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              Year-Round SAWS Watering Rules
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Even when San Antonio is not in a drought stage, SAWS water restrictions apply. The
              baseline rules are in effect at all times and limit landscape irrigation to specific
              days and hours. Under year-round rules, landscape watering with an irrigation system
              or sprinkler is allowed once per week on your designated watering day, which is
              determined by the last digit of your address. Watering is permitted before 11:00 a.m.
              or after 7:00 p.m. to reduce evaporation loss.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Hand watering and soaker hoses are allowed any day at any time. Drip irrigation
              systems also receive more flexibility under SAWS guidelines, which is one reason
              many commercial properties are converting spray zones to drip where plant material
              allows it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              SAWS Drought Stage Restrictions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When the Edwards Aquifer level drops below certain thresholds, or when system demand
              requires it, SAWS activates drought stages. Each stage adds tighter SAWS water
              restrictions on top of the year-round baseline.
            </p>

            <div className="mt-6 space-y-6">
              <div className="bg-brand-cream rounded-xl p-7 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-navy">Stage 1: Watering Once Per Week</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Landscape irrigation is limited to one day per week on your designated day, before
                  11:00 a.m. or after 7:00 p.m. This is similar to year-round rules but with
                  increased enforcement and public awareness campaigns. SAWS conservation staff may
                  begin patrolling and issuing warnings.
                </p>
              </div>

              <div className="bg-brand-cream rounded-xl p-7 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-navy">Stage 2: Watering Every Other Week</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  Irrigation is reduced to once every two weeks on your designated day. Hose-end
                  sprinklers are prohibited. This stage has the largest impact on commercial turf
                  areas, which struggle to survive on biweekly watering during San Antonio summers.
                  Properties with warm-season grasses like Bermuda and Buffalo handle this better
                  than those relying on St. Augustine.
                </p>
              </div>

              <div className="bg-brand-cream rounded-xl p-7 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-navy">Stage 3: No Irrigation</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  All landscape irrigation using sprinkler or irrigation systems is prohibited.
                  Hand watering with a hose and bucket watering of trees, shrubs, and foundations
                  is permitted. This stage forces property managers to make triage decisions about
                  which plantings to protect and which to let go dormant.
                </p>
              </div>

              <div className="bg-brand-cream rounded-xl p-7 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-navy">Stage 4: Severe Restrictions</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  All outdoor watering is prohibited except for hand watering of trees and
                  foundations with a bucket. Stage 4 is rarely activated but represents an emergency
                  condition. In this stage, landscape preservation is secondary to water supply
                  protection.
                </p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              How SAWS Water Restrictions Affect Commercial Properties
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Commercial properties and HOA communities face specific challenges under SAWS water
              restrictions that single-family homeowners do not. Large turf areas require more water
              to maintain, and the visual expectations from tenants, homeowners, and visitors are
              higher. Additionally, commercial accounts are subject to higher fines: first-time
              violations can result in a $100 to $200 penalty, with subsequent violations increasing
              to $500 or more.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Properties with multiple meters or addresses may have different designated watering
              days, which complicates scheduling. A 200-unit HOA community with shared common areas
              served by several meters must coordinate irrigation schedules across different days.
              This is manageable with proper controller programming, but it requires attention to
              detail.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              Compliance Strategies for Property Managers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Staying compliant with SAWS water restrictions while maintaining attractive landscapes
              requires a proactive approach. The following strategies reduce water use, minimize
              violation risk, and protect plant health during drought stages.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Audit your irrigation system.</strong> Identify and fix leaks, misaligned heads, and zones that overlap onto hardscapes. A system running at peak efficiency uses 20 to 30 percent less water than one with deferred maintenance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Convert to drip irrigation where possible.</strong> Drip systems deliver water directly to the root zone with minimal evaporation. SAWS allows more flexibility for drip irrigation under most restriction stages.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Install a smart irrigation controller.</strong> Controllers with weather-based or soil-moisture-based scheduling adjust run times automatically and can prevent the system from running during rain events or freeze conditions. SAWS offers rebates for WaterSense-labeled controllers.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Select drought-tolerant plant material.</strong> When replacing plantings or installing new beds, choose species adapted to South Texas conditions. Native and adapted plants require less supplemental irrigation and recover faster from drought stress.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Maintain proper mulch depth.</strong> Three to four inches of mulch in planting beds reduces soil moisture evaporation by up to 70 percent. Mulch also moderates soil temperature, which protects root systems during extreme heat.</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              Smart Irrigation as a Long-Term Solution
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The most effective way to manage SAWS water restrictions over the long term is to
              invest in smart irrigation technology. Modern controllers paired with rain sensors,
              soil moisture probes, and flow meters give property managers real-time visibility into
              water use and system performance. These systems pay for themselves through reduced
              water bills and lower maintenance costs.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              SAWS incentivizes these upgrades through its WaterSaver rebate programs. Eligible
              improvements include smart controllers, drip irrigation conversions, rain and freeze
              sensors, and high-efficiency nozzles. GreatView Landscapes can help you identify which
              upgrades your property qualifies for and handle the application process.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Stay Compliant With SAWS Water Restrictions
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            Our team can audit your irrigation system, recommend upgrades, and keep your property
            compliant with current SAWS regulations. Let us put a plan together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Request an Irrigation Audit
          </Link>
        </div>
      </section>
    </>
  )
}
