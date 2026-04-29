const testimonials = [
  {
    quote:
      'GreatView has been managing our community\'s common areas for over a year. The grounds look consistently clean, and their communication is the best we have worked with.',
    name: 'Maria R.',
    title: 'HOA Board President',
    location: 'Stone Oak',
  },
  {
    quote:
      'We switched to GreatView for our irrigation management and saw a noticeable drop in our water bill within the first quarter. Their team knows SAWS regulations inside and out.',
    name: 'David K.',
    title: 'Property Manager',
    location: 'North Central San Antonio',
  },
  {
    quote:
      'The entry monument project turned out better than we expected. GreatView presented to our board, handled the permitting, and delivered on schedule.',
    name: 'Jennifer L.',
    title: 'Community Manager',
    location: 'Boerne',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-brand-cream rounded-xl p-7 border border-gray-100"
            >
              <svg
                className="w-8 h-8 text-brand-gold/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-brand-navy text-sm">{t.name}</p>
                <p className="text-gray-500 text-sm">
                  {t.title}, {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
