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

        {/* Placeholder for when there are no issues yet */}
        <div className="border border-white/5 rounded-2xl p-12 bg-white/[0.02] text-center">
          <div className="w-16 h-16 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <p className="text-gray-400 mb-2">No issues published yet.</p>
          <p className="text-gray-600 text-sm">
            The first issue is coming soon. <a href="/subscribe" className="text-purple-400 hover:text-purple-300 transition-colors">Subscribe</a> to get notified.
          </p>
        </div>

        {/* 
        Future: Map over issues like this:
        
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
        */}
      </div>
    </div>
  );
}
