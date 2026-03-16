import Head from "next/head";
import Link from "next/link";
import type { NoteData } from "../lib/notes";

export default function NoteLayout({ note }: { note: NoteData }) {
  const url = `https://angg.me/notes/${note.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.description ?? "",
    datePublished: note.date,
    ...(note.lastModified ? { dateModified: note.lastModified } : {}),
    author: { "@type": "Person", name: note.author || "Angela", url: "https://angg.me" },
    publisher: { "@type": "Person", name: "Angela Gilhotra", url: "https://angg.me" },
    url,
  };

  return (
    <>
      <Head>
        <title>{note.title} — Angg.me</title>
        <meta name="description" content={note.description ?? ""} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={note.title} />
        <meta property="og:description" content={note.description ?? ""} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Angg.me" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={note.title} />
        <meta name="twitter:description" content={note.description ?? ""} />
        <meta name="twitter:site" content="@probablyangg" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      </Head>

      <main className="min-h-screen bg-neutral-800 text-gray-200 px-6 py-12 flex justify-center">
        <article className="max-w-2xl w-full">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm">
            <Link href="/" className="hover:text-gray-400 transition-colors">
              Home
            </Link>
            {" / "}
            <Link href="/notes" className="hover:text-gray-400 transition-colors">
              Notes
            </Link>
          </nav>

          <header className="mb-8">
            <h1 className="text-3xl font-semibold mb-2">{note.title}</h1>
            <p className="text-sm text-gray-400 mt-2">
              <time dateTime={note.date}>{note.date}</time>
              {note.author ? ` · ${note.author}` : ""}
            </p>
            {note.tags && note.tags.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-neutral-700 text-gray-300 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-invert prose-neutral" dangerouslySetInnerHTML={{ __html: note.contentHtml }} />

          <hr className="border-neutral-600 my-8" />
          <nav aria-label="Post navigation" className="text-sm">
            <Link href="/notes" className="hover:text-gray-400 transition-colors">
              ← Back to all notes
            </Link>
          </nav>
        </article>
      </main>
    </>
  );
}
