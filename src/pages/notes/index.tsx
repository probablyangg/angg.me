import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getAllNotes, NoteMeta } from "../../lib/notes";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{ notes: NoteMeta[] }> = async () => {
    const notes = getAllNotes();
    return { props: { notes } };
  };

  export default function NotesIndex({ notes }: { notes: NoteMeta[] }) {
    return (
      <main className="min-h-screen bg-neutral-800 text-gray-200 px-6 py-12 flex items-center justify-center">
        <Head>
          <title>Notes — Angg.me</title>
          <meta name="description" content="Technical notes, thoughts, and experiments by Angela Gilhotra." />
        </Head>
        <div className="max-w-2xl w-full">
          <nav className="mb-8">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <h1 className="text-3xl font-semibold mb-8">Notes</h1>

          <ul className="space-y-6">
            {notes.map((note) => (
              <li key={note.slug} className="group">
                <Link href={"/notes/" + note.slug} className="block group-hover:bg-neutral-800/50 transition duration-150">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h2 className="text-xl font-medium text-gray-100 group-hover:text-blue-400 transition-colors">
                      {note.title}
                    </h2>
                    <time dateTime={note.date} className="text-sm text-gray-500 whitespace-nowrap sm:ml-4">
                      {note.date}
                    </time>
                  </div>
                  {note.description && (
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                      {note.description}
                    </p>
                  )}
                  {note.tags && note.tags.length > 0 && (
                    <div className="flex gap-2 mt-2">
                        {note.tags.map(t => (
                            <span key={t} className="text-xs text-gray-600 bg-neutral-900 px-1 rounded border border-neutral-700">#{t}</span>
                        ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
