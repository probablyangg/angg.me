import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Me from "public/images/me.jpg";
// import Astronaut from "public/images/astronaut.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Main from "src/layout/Main";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>angg</title>
        <meta name="description" content="Angela Gilhotra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <div className="flex flex-col gap-3 sm:px-4 sm:py-16">
          <div className="sm:text-[2rem] text-xl font-semibold">
            meandering between several what ifs
          </div>
          <div className="flex flex-row gap-3 text-[1.5rem] w-full">
            <a href="https://twitter.com/anggxyz" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/anggxyz" target="_blank" className="hover:scale-[1.08] transform transition duration-500" >
            <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://angg.substack.com" target="_blank" className="hover:scale-[1.08] transform transition duration-500">
              <FontAwesomeIcon icon={faPenNib} />
            </a>
          </div>
          <div className="flex flex-row w-full gap-3 text-[1.2rem]">
            <Link href={"/about"} className="underline underline-offset-8">
              about
            </Link>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
