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
    <section className="tv-breadcrumb-section">
      <div className="tv-breadcrumb-inner mx-30 ml-mx-0 position-relative overflow-hidden br-30 ml-br-0">
        <div className="bg image" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <Image
            src="/assets/images/bg-img/breadcrumb.png"
            alt="Breadcrumb Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-outer">
                <div className="page-title">
                  <h2 className="title">{title}</h2>
                  <ul className="page-breadcrumb">
                    <li>
                      <Link href="/">
                        <i className="fa-solid fa-house-chimney"></i>Home
                      </Link>
                    </li>
                    {paths.map((path, index) => (
                      <li key={index}>
                        <span>/</span>{" "}
                        {path.url ? (
                          <Link href={path.url}>{path.name}</Link>
                        ) : (
                          path.name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
