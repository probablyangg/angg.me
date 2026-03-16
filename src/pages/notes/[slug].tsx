import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { getNoteBySlug, getAllSlugs, NoteData } from "../../lib/notes";
import NoteLayout from "../../components/NoteLayout";

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ note: NoteData | null }> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const note = await getNoteBySlug(slug);
  // Pass through for layout to render
  return { props: { note } };
};

export default function NotePage({ note }: { note: NoteData | null }) {
  if (!note) return <div>Not found</div>;
  // Build a minimal content wrapper; NoteLayout handles UI/SEO
  return (
    <NoteLayout note={note} />
  );
}
