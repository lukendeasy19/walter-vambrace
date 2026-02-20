export default function Newsletter() {
  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="text-4xl font-heading font-bold mb-4">Newsletter Archive</h1>
      <p className="text-gray-400 mb-12">
        All past issues, newest first.
      </p>

      {/* Placeholder for when there are no issues yet */}
      <div className="border border-gray-800 rounded-lg p-12 text-center">
        <p className="text-gray-500 mb-4">No issues published yet.</p>
        <p className="text-gray-400 text-sm">
          The first issue is coming soon. <a href="/subscribe" className="text-accent">Subscribe</a> to get notified.
        </p>
      </div>

      {/* 
      Future: Map over issues like this:
      
      <div className="space-y-8">
        {issues.map((issue) => (
          <article key={issue.slug} className="border-b border-gray-800 pb-8">
            <time className="text-sm text-gray-500">{issue.date}</time>
            <h2 className="text-xl font-semibold mt-1 mb-2">
              <a href={`/newsletter/${issue.slug}`} className="hover:text-accent transition-colors">
                {issue.title}
              </a>
            </h2>
            <p className="text-gray-400">{issue.excerpt}</p>
          </article>
        ))}
      </div>
      */}
    </div>
  );
}
