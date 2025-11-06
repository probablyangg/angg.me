import { type NextPage } from "next";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Angela Gilhotra</title>
        <meta name="description" content="Angela Gilhotra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-neutral-800 text-gray-200 px-6 py-12 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <h1 className="text-2xl font-semibold mb-4">Angela Gilhotra</h1>

          <div className="flex gap-4 text-xl mb-8">
            <a href="https://github.com/probablyangg" target="_blank" className="hover:text-gray-400 transition-colors">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/angelagilhotra/" target="_blank" className="hover:text-gray-400 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://t.me/probablyangg" target="_blank" className="hover:text-gray-400 transition-colors">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://x.com/probablyangg" target="_blank" className="hover:text-gray-400 transition-colors">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>

          <div className="space-y-6 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4">Hi! I'm Angela</h2>
              <p>
                I like <a href="https://github.com/probablyangg" target="_blank" className="underline underline-offset-4 hover:text-gray-400">experimenting</a> and I <a href="https://substack.com/@probablyangg" target="_blank" className="underline underline-offset-4 hover:text-gray-400">write</a> sometimes. Been in crypto since 2018, have always enjoyed a mix of building and sharing knowledge.
              </p>
              <p className="mt-4">
                Always happy to chat on Telegram (<a href="https://t.me/probablyangg" target="_blank" className="underline underline-offset-4 hover:text-gray-400">@probablyangg</a>) or you can <a href="mailto:angela.gilhotra@gmail.com" className="underline underline-offset-4 hover:text-gray-400">land straight in my inbox</a>
              </p>
            </section>

            <hr className="border-neutral-600" />

            <section>
              <h2 className="text-xl font-semibold mb-4">worked with</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://crossmint.com" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Crossmint</a>: Developer Relations Engineer (present)</li>
                <li><a href="https://xion.burnt.com/" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Xion</a>: Developer Relations Lead</li>
                <li><a href="https://layerzero.network/" target="_blank" className="underline underline-offset-4 hover:text-gray-400">LayerZero Labs</a>: Developer Relations Engineer</li>
                <li><a href="https://futureprimitive.xyz/" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Future Primitive</a>: Freelance Developer Advocate</li>
                <li> <a href="https://www.alchemy.com/" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Alchemy</a>: Freelance Developer Advocate</li>
                <li><a href="https://bonfire.xyz" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Bonfire</a>: Core Software Engineer</li>
                <li><a href="https://kernel.community" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Kernel</a>: Community Steward, Engineer and Maintainer</li>
                <li><a href="https://gitcoin.co" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Gitcoin</a>: Special Projects Engineer</li>
                <li><a href="https://upgrad.com" target="_blank" className="underline underline-offset-4 hover:text-gray-400">upGrad</a>: Blockchain Subject Matter Expert (SME)</li>
                <li><a href="https://polygon.technology" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Polygon</a>: Blockchain Platform Engineer</li>
              </ul>
            </section>


            <hr className="border-neutral-600" />

            <section>
              <h2 className="text-xl font-semibold mb-4">worked on</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://x.com/crossmint/status/1986473653257539959" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Demo: Crossmint wallets working with Agents exposing paid MCP tools deployed on Cloudflare workers</a></li>
                <li><a href="https://github.com/crossmint/worldstore-agent" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Crossmint's Worldstore Agent on Base</a></li>
                <li><a href="https://github.com/kernel-community/convo-app" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Kernel's Community on Convo Cafe</a></li>
                <li><a href="https://github.com/probablyangg/ohey" target="_blank" className="underline underline-offset-4 hover:text-gray-400">OHey</a>: tiny project I built, haven't been maintaining it</li>
              </ul>
            </section>

            <hr className="border-neutral-600" />


              {/* <section>
              <h2 className="text-xl font-semibold mb-4">talks/content/public presence</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><a href="https://github.com/crossmint/worldstore-agent" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Crossmint's Worldstore Agent on Base</a></li>
                <li><a href="https://github.com/kernel-community/convo-app" target="_blank" className="underline underline-offset-4 hover:text-gray-400">Kernel's Community on Convo Cafe</a></li>
                <li><a href="https://github.com/probablyangg/ohey" target="_blank" className="underline underline-offset-4 hover:text-gray-400">OHey</a>: tiny project I built, haven't been maintaining it</li>
              </ul>
            </section> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
