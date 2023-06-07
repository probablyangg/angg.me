import Main from "src/layout/Main";

const About = () => {
  return (
    <Main title="About">
      <div className="prose text-white my-6 prose-a:text-slate-300 prose-a:underline-offset-8">
        <p>
          Crafting my way through the interwebs of Ethereum and Communities; exploring infrastructure, tooling and relations. Currently working as web3/full stack developer at <a href="https://kernel.community/" target="_blank">Kernel</a>.
        </p>
        <p>
          Previously I have worked as a Full Stack Software Engineer at <a href="https://bonfire.xyz" target="_blank">Bonfire</a> (Aug 2021 - April 2023), Special Projects Lead at <a href="https://gitcoin.co" target="_blank">Gitcoin</a> (Oct 2020 - Sep 2021) and Blockchain Platform Engineer and a Dev Advocate at <a href="https://polygon.technology" target="_blank">Polygon</a> (Aug 2019 - Oct 2020).
        </p>
      </div>
    </Main>
  )
}

export default About;
