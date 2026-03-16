import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const NOTES_DIR = path.join(process.cwd(), "src", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  lastModified?: string;
  description?: string;
  tags?: string[];
  author?: string;
  draft?: boolean;
};

export type NoteData = NoteMeta & {
  contentHtml: string;
};

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md"));
  const notes: NoteMeta[] = files
    .map((f) => {
      const raw = fs.readFileSync(path.join(NOTES_DIR, f), "utf8");
      const { data } = matter(raw);
      if (data.draft) return null;
      return {
        slug: data.slug || f.replace(/\.md$/, ""),
        title: data.title || f.replace(/\.md$/, ""),
        date: String(data.date ?? ""),
        lastModified: data.lastModified ? String(data.lastModified) : undefined,
        description: data.description,
        tags: data.tags || [],
        author: data.author,
        draft: data.draft,
      };
    })
    .filter(Boolean) as NoteMeta[];

  return notes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return getAllNotes().map((n) => n.slug);
}

export async function getNoteBySlug(slug: string): Promise<NoteData | null> {
  if (!fs.existsSync(NOTES_DIR)) return null;
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md"));

  for (const f of files) {
    const raw = fs.readFileSync(path.join(NOTES_DIR, f), "utf8");
    const { data, content } = matter(raw);
    const noteSlug = data.slug || f.replace(/\.md$/, "");
    if (noteSlug !== slug) continue;
    if (data.draft) return null;

    const processed = await remark().use(remarkGfm).use(html).process(content);

    return {
      slug: noteSlug,
      title: data.title || noteSlug,
      date: String(data.date ?? ""),
      lastModified: data.lastModified ? String(data.lastModified) : undefined,
      description: data.description,
      tags: data.tags || [],
      author: data.author,
      contentHtml: processed.toString(),
    };
  }
  return null;
}

export function generateRssFeed(notes: NoteMeta[]): string {
  const siteUrl = "https://angg.me";
  const items = notes
    .map(
      (n) => `    <item>
      <title>${escapeXml(n.title)}</title>
      <link>${siteUrl}/notes/${n.slug}</link>
      <guid>${siteUrl}/notes/${n.slug}</guid>
      <pubDate>${new Date(n.date).toUTCString()}</pubDate>
      <description>${escapeXml(n.description || "")}</description>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Angela Gilhotra — Notes</title>
    <link>${siteUrl}/notes</link>
    <description>Technical notes and blog posts by Angela Gilhotra</description>
    <language>en</language>
    <atom:link href="${siteUrl}/notes.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
