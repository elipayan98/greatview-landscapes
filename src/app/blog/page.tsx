import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights and guides for HOA boards, property managers, and commercial facility teams in San Antonio. Budget planning, irrigation tips, and SAWS compliance.',
}

const articles = [
  {
    slug: 'hoa-landscaping-budget-planning',
    category: 'Budget Planning',
    title: 'HOA Landscaping Budget Planning for 2026',
    excerpt:
      'A practical breakdown of landscaping budget line items, seasonal cost variations in San Antonio, and strategies to get board approval on your landscape spending plan.',
  },
  {
    slug: 'when-to-winterize-irrigation-san-antonio',
    category: 'Irrigation',
    title: 'When to Winterize Your Irrigation System in San Antonio',
    excerpt:
      'San Antonio winters are mild, but a single hard freeze can cause thousands in irrigation damage. Here is what property managers need to know about winterization timing and process.',
  },
  {
    slug: 'saws-water-restrictions-guide',
    category: 'Water Management',
    title: "Understanding SAWS Water Restrictions: A Property Manager's Guide",
    excerpt:
      'SAWS water restrictions apply year-round and tighten during drought stages. This guide covers each stage, how restrictions affect commercial properties, and strategies to stay compliant.',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-navy via-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-28">
          <nav className="text-sm text-emerald-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
            Insights and guides for HOA boards, property managers, and commercial facility teams.
          </p>
        </div>
      </section>

      {/* Intro + Articles */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl mb-14">
            <p className="text-gray-600 leading-relaxed text-lg">
              Managing commercial landscaping involves more than mowing and pruning. Property managers
              need to plan budgets, understand local water regulations, and protect infrastructure
              from seasonal weather. Our blog covers the topics that matter most to the people
              responsible for maintaining HOA communities and commercial properties in San Antonio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold text-brand-navy mt-3 mb-3 group-hover:text-brand-green transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-brand-green group-hover:text-brand-green-light transition-colors">
                  Read Article
                  <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-brand-green-dark to-brand-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative container-default py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Have a Question About Your Property?
          </h2>
          <p className="mt-4 text-emerald-100/80 text-lg max-w-2xl mx-auto">
            If any of these topics apply to your HOA or commercial property, our team can help
            you put the right plan in place.
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
