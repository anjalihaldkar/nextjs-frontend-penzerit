import Link from "next/link";

export const metadata = {
  title: "Resources | Panzer IT",
};

export default function DownloadRedirectPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/resources/");',
        }}
      />
      <main className="container py-5">
        <p>
          Redirecting to <Link href="/resources/">resources</Link>.
        </p>
      </main>
    </>
  );
}
