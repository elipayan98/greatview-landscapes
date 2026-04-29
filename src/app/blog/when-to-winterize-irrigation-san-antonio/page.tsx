import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When to Winterize Your Irrigation System in San Antonio',
  description:
    'Learn when and how to winterize your irrigation system in San Antonio. Covers freeze risk, winterization steps, spring startup, and lessons from the 2021 winter storm.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'When to Winterize Your Irrigation System in San Antonio',
  description:
    'Learn when and how to winterize your irrigation system in San Antonio. Covers freeze risk, winterization steps, spring startup, and lessons from the 2021 winter storm.',
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

export default function WinterizeIrrigationArticle() {
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
            <span className="text-white">Winterize Irrigation</span>
          </nav>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Irrigation
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-3">
            When to Winterize Your Irrigation System in San Antonio
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
              San Antonio winters are generally mild, but that creates a false sense of security
              when it comes to irrigation systems. The city averages 20 to 25 nights below freezing
              each winter, and hard freeze events, while infrequent, can cause catastrophic damage
              to unprotected backflow preventers, exposed pipes, and valve assemblies. February 2021
              proved just how real that risk is.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              San Antonio Freeze Risk and Timing
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The first freeze in San Antonio typically arrives in late November or early December.
              The last freeze usually occurs in late February or early March. Most winters, these
              freezes are brief, dropping into the upper 20s overnight and recovering by midmorning.
              However, extended freeze events, where temperatures stay below 32 degrees for 12 hours
              or more, have occurred multiple times in the past decade.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Winter Storm Uri in February 2021 brought temperatures into the single digits across
              San Antonio for nearly four consecutive days. Thousands of commercial and residential
              irrigation systems sustained damage, and many property managers waited months for
              repairs due to contractor backlogs. Backflow preventers, which are required by SAWS
              on all commercial systems, were the most commonly damaged component. Replacement costs
              for a single double-check valve assembly ranged from $800 to $2,000 during the
              recovery period.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              What Winterization Involves
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Proper winterization for a commercial irrigation system in San Antonio includes
              several steps. The process should be completed by mid-November at the latest.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Drain mainlines and lateral lines.</strong> Any water left in the pipes can freeze and expand, cracking PVC or bursting fittings. Compressed air blowouts are standard for larger commercial systems.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Insulate the backflow preventer.</strong> Wrap the assembly with insulated covers rated for freezing temperatures. Off-the-shelf covers are available, but they must fit properly to provide protection.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Shut down the controller.</strong> Set the irrigation controller to rain mode or off. This prevents the system from running during a freeze, which would push water into empty lines and create ice buildup.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span><strong className="text-brand-navy">Inspect valves and exposed components.</strong> Identify any cracked housings, leaking seals, or loose fittings before the freeze season. Repairs are easier and cheaper in November than in January.</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              Spring Startup Checklist
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Once the last freeze date has passed, usually by mid-March in San Antonio, the system
              should be brought back online carefully. A rushed startup can cause water hammer,
              which damages pipes and fittings.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span>Open the mainline valve slowly to allow gradual pressurization.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span>Run each zone individually and inspect for broken heads, leaks, and misaligned spray patterns.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span>Check the backflow preventer for cracks or leaks after removing insulation.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span>Reprogram the controller with an appropriate spring watering schedule that complies with current SAWS restrictions.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-green font-bold mt-0.5">•</span>
                <span>Schedule a backflow test if your annual SAWS-required test is due.</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy tracking-tight mt-12 mb-4">
              The Cost of Skipping Winterization
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Winterization for a commercial irrigation system typically costs between $150 and $400,
              depending on the size of the system and the number of zones. Skipping it can result in
              repair bills that are ten to twenty times higher. Cracked mainlines, destroyed backflow
              preventers, and blown valve diaphragms are all common outcomes of an unprotected freeze.
              For properties with multiple buildings or large common areas, the repair backlog after
              a severe freeze can mean weeks without irrigation during the critical spring
              establishment period.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Winterization is one of the simplest and most cost-effective maintenance tasks on the
              annual calendar. It takes less than two hours for most commercial systems and protects
              an asset that may have cost $15,000 to $50,000 to install.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Schedule Your Winterization Service
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            GreatView Landscapes provides winterization and spring startup services for commercial
            irrigation systems across the San Antonio metro. Contact us to schedule before the
            first freeze.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-gold px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg hover:bg-brand-gold-light transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
