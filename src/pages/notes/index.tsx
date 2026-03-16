import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { getAllNotes, NoteMeta } from "../../lib/notes";

export const getStaticProps: GetStaticProps<{ notes: NoteMeta[] }> = async () => {
  const notes = getAllNotes();
  return { props: { notes } };
};

export default function NotesIndex({ notes }: { notes: NoteMeta[] }) {
  return (
    <main className="min-h-screen bg-neutral-800 text-gray-200 px-6 py-12 flex justify-center">
      <Head>
        <title>Notes — Angg.me</title>
        <meta name="description" content="Technical notes, thoughts, and experiments by Angela Gilhotra." />
        <link rel="canonical" href="https://angg.me/notes" />
        <meta property="og:title" content="Notes — Angg.me" />
        <meta property="og:description" content="Technical notes, thoughts, and experiments by Angela Gilhotra." />
        <meta property="og:url" content="https://angg.me/notes" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Notes — Angg.me" />
        <meta name="twitter:description" content="Technical notes, thoughts, and experiments by Angela Gilhotra." />
        <meta name="twitter:site" content="@probablyangg" />
      </Head>

      <div className="max-w-2xl w-full">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-gray-200 transition-colors text-sm">
            ← Home
          </Link>
        </nav>

        <h1 className="text-3xl font-semibold mb-8">Notes</h1>

        {notes.length === 0 ? (
          <p className="text-gray-500">Nothing here yet.</p>
        ) : (
          <ul>
            {notes.map((note, i) => (
              <li key={note.slug}>
                {i > 0 && <hr className="border-neutral-700 my-6" />}
                <Link href={`/notes/${note.slug}`} className="group block py-1">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-100 group-hover:text-gray-400 transition-colors">
                      {note.title}
                    </h2>
                    <time dateTime={note.date} className="text-xs text-gray-500">
                      {note.date}
                    </time>
                  </div>
                  {note.description && (
                    <p className="text-sm text-gray-400 leading-relaxed mt-2">
                      {note.description}
                    </p>
                  )}
                  {note.tags && note.tags.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {note.tags.map((t) => (
                        <span key={t} className="text-xs text-gray-400 bg-neutral-700 px-2 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
