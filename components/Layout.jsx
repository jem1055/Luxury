import Head from "next/head";
import Nav from "../components/Navar";
import Image from "next/image";
import Head_one from "../components/Head";
import Head_two from "../components/HeadTwo";
import Footer from "./Footer";

export default function Home({ children, tittle, description, home }) {
  return (
    <>
      {home ? (
        <div
          style={{
            background: 'url("/img/Fondo.jpg")',
            backgroundColor: "#ff666",
            width: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <Head>
            <title>{tittle}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/img/favicon.ico" />
          </Head>

          <header>
            <div className="Head_one d-flex justify-content-center">
              <Head_one />
            </div>
          </header>

          <nav className="mt-n1">
            <Nav />
          </nav>

          <main>{children}</main>

          <script src="/js/jquery-3.5.1.min.js" />
          <script src="/js/popper.min.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/jquery.magnific-popup.min.js" />
        </div>
      ) : (
        <div>
          <Head>
            <link rel="icon" href="/img/favicon.ico" />
            <title>{tittle}</title>
            <meta name="description" content={description} />
          </Head>

          <header>
            <div>
              <Head_two />
            </div>
          </header>

          <nav className="mt-n2">
            <Nav />
          </nav>

          <main>{children}</main>

          <script src="/js/jquery-3.5.1.min.js" />
          <script src="/js/popper.min.js" />
          <script src="/js/bootstrap.min.js" />
          <script src="/js/jquery.magnific-popup.min.js" />
        </div>
      )}
    </>
  );
}
