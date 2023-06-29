import Main from "../layout/Main"

const Music = () => {
  return (
    <Main>
      <div className="mt-12">
        <iframe style={{ borderRadius: "12px", height: "552px" }} src="https://open.spotify.com/embed/playlist/0AijRQz41WO7DzX1nPnkDs?utm_source=generator" width="100%" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </Main>
  )
}

export default Music;
