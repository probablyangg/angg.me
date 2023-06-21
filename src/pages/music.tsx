import Main from "../layout/Main"

const Music = () => {
  return (
    <Main>
      {/* <iframe scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.
      soundcloud.com/playlists/1148686567&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" className="mt-5 h-[550px]"></iframe> */ }
      <div className="mt-12">
        <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/0AijRQz41WO7DzX1nPnkDs?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </Main>
  )
}

export default Music;
