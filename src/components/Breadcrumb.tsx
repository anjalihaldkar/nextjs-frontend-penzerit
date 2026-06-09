import Link from "next/link";
import Image from "next/image";

interface BreadcrumbPath {
  name: string;
  url?: string;
}

interface BreadcrumbProps {
  title: string;
  paths: BreadcrumbPath[];
}

export function Breadcrumb({ title, paths }: BreadcrumbProps) {
  return (
    <section className="panzer-resource-breadcrumb-section" aria-label={`${title} breadcrumb`}>
      <div className="container-fluid">
        <nav className="panzer-resource-breadcrumb-nav" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {paths.map((path, index) => {
              const isCurrent = index === paths.length - 1;

              return (
                <li key={`${path.name}-${index}`} aria-current={isCurrent ? "page" : undefined}>
                  {path.url && !isCurrent ? (
                    <Link href={path.url}>{path.name}</Link>
                  ) : (
                    <span>{path.name}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        <div className="panzer-resource-breadcrumb-shell">
          <div className="panzer-resource-breadcrumb-copy">
            <h1 className="panzer-resource-breadcrumb-title">{title}</h1>
            <p className="panzer-resource-breadcrumb-text">
              Explore Panzer IT resources, solutions and security insights designed to help your business stay informed and protected.
            </p>
          </div>
          <div className="panzer-resource-breadcrumb-visual" aria-hidden="true">
            <Image
              src="/assets/images/hero/breadcumb.png"
              alt=""
              width={1536}
              height={1024}
              sizes="(max-width: 991px) 86vw, 52vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
