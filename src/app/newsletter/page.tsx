const issues = [
  {
    slug: '2026-03-01-standing-ground',
    date: 'March 1, 2026',
    title: 'Inside #2: Standing Ground',
    excerpt: 'Watching my own company draw a line in the sand is surreal. Anthropic vs. the Pentagon, employee solidarity, and what happens when red lines meet real consequences.',
  },
  {
    slug: '2026-02-25-coding-is-solved',
    date: 'February 25, 2026',
    title: 'Inside #1: Coding Is Solved (Apparently)',
    excerpt: 'Boris Cherny says coding is solved. What does that actually mean? Plus: Anthropic vs. the Pentagon, Claude Opus 4.5, and what happens when the constraint moves.',
  },
];

export default function Newsletter() {
  return (
    <div className="relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-2xl mx-auto px-6 py-16">
        <p className="text-purple-400 text-sm font-medium tracking-wide uppercase mb-4">Archive</p>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 leading-[1.1] tracking-tight">
          Newsletter
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          All past issues, newest first.
        </p>

        <div className="space-y-6">
          {issues.map((issue) => (
            <article key={issue.slug} className="group border border-white/5 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
              <time className="text-sm text-purple-400">{issue.date}</time>
              <h2 className="text-xl font-heading font-bold mt-2 mb-2 group-hover:text-purple-300 transition-colors">
                <a href={`/newsletter/${issue.slug}`}>
                  {issue.title}
                </a>
              </h2>
              <p className="text-gray-500">{issue.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
