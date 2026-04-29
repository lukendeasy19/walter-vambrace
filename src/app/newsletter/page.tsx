const issues = [
  {
    slug: '2026-04-29-the-brittle-surface',
    date: 'April 29, 2026',
    title: 'Inside #12: The Brittle Surface',
    excerpt: "The gap between 'works' and 'is correct' is widening. More models won't fix it.",
  },
  {
    slug: '2026-04-26-the-reflection-problem',
    date: 'April 26, 2026',
    title: 'Inside #11: Weekend Read — The Reflection Problem',
    excerpt: "What we lose when AI gets too agreeable. And why humans are worse at this than machines.",
  },
  {
    slug: '2026-04-22-the-model-flood',
    date: 'April 22, 2026',
    title: 'Inside #10: The Model Flood',
    excerpt: "Five major AI models in four weeks. The velocity is the story now.",
  },
  {
    slug: '2026-03-26-when-ambition-meets-reality',
    date: 'March 26, 2026',
    title: 'Inside #9: When Ambition Meets Reality',
    excerpt: "Six months after launching with App Store fanfare, OpenAI pulled the plug on Sora. Plus: what ambition without follow-through looks like in AI.",
  },
  {
    slug: '2026-03-22-the-lobster-in-the-room',
    date: 'March 22, 2026',
    title: 'Inside #8: Weekend Read',
    excerpt: "An Austrian software developer just showed us where the real value in AI might be hiding—and it's not where the billion-dollar labs think.",
  },
  {
    slug: '2026-03-16-when-knuth-says-shock',
    date: 'March 16, 2026',
    title: 'Inside #7: Weekend Read',
    excerpt: "When Donald Knuth says he's shocked by AI progress, you pay attention. Plus: what 'coding is solved' really means for the rest of us.",
  },
  {
    slug: '2026-03-12-industry-defends-itself',
    date: 'March 12, 2026',
    title: 'Inside #6: The Industry Defends Itself',
    excerpt: "More than 30 employees from OpenAI and Google DeepMind filed an amicus brief supporting Anthropic. The industry is drawing lines.",
  },
  {
    slug: '2026-03-09-users-choose-sides',
    date: 'March 9, 2026',
    title: 'Inside #5: Users Choose Sides',
    excerpt: "After the Pentagon designated Anthropic as a supply chain risk, users started choosing sides. The consumer AI market is fragmenting.",
  },
  {
    slug: '2026-03-04-lines-in-the-sand',
    date: 'March 4, 2026',
    title: 'Inside #4: Lines in the Sand',
    excerpt: "The Pentagon designated Anthropic a security risk. State, Treasury, and HHS began phasing out their products. Where AI companies draw their lines.",
  },
  {
    slug: '2026-03-01-standing-ground',
    date: 'March 1, 2026',
    title: 'Inside #3: Standing Ground',
    excerpt: "Watching my own company draw a line in the sand is surreal. Anthropic vs. the Pentagon, employee solidarity, and what happens when red lines meet real consequences.",
  },
  {
    slug: '2026-02-25-coding-is-solved',
    date: 'February 25, 2026',
    title: 'Inside #2: Coding Is Solved (Apparently)',
    excerpt: "Boris Cherny says coding is solved. What does that actually mean? Plus: Anthropic vs. the Pentagon, Claude Opus 4.5, and what happens when the constraint moves.",
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
