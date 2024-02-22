import Main from "src/layout/Main";

const About = () => {
  return (
    <Main title="About">
      <div className="prose text-white my-6 prose-a:text-slate-300 prose-a:underline-offset-8">
        <p>
          Crafting my way through the interwebs of Ethereum and Communities; exploring infrastructure, tooling and relations.
        </p>
        <p>
          Most recently, I freelanced as a Developer Advocate with <a href="https://futureprimitive.xyz/" target="_blank">Future Primitive</a> and <a href="https://www.alchemy.com/" target="_blank">Alchemy</a> from August 2023 to January 2024.
          Previously, I have worked as a Software Engineer at <a href="https://bonfire.xyz" target="_blank">Bonfire</a> (Aug 2021 - April 2023), Software Engineer (Special Projects) at <a href="https://gitcoin.co" target="_blank">Gitcoin</a> (Oct 2020 - Sep 2021) and Blockchain Platform Engineer and a Dev Advocate at <a href="https://polygon.technology" target="_blank">Polygon</a> (Aug 2019 - Oct 2020).
          <br />
          <br />
          While at Gitcoin, <a href="https://kernel.community" target="_blank">Kernel</a> was formed (July 2020). A community that is attempting to onboard people into Web3 by providing a peer-to-peer educational platform. My work at Kernel involves working on increasing cohesiveness inside the community through building applications like <a href="https://convo.cafe" target="_blank">Convo Cafe</a>. It is now a virtual home for me and ~1800 people on the internet.
          <br />
          <br />
        </p>
      </div>
    </Main>
  )
}

export default About;
