import Main from "../layout/Main"

const Music = () => {
  return (
    <Main>
{/*       <div className="mt-12">
        <iframe width="100%"  scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1148686567&color=%238f6f60&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" className="h-[30rem]"></iframe><div style={{
          fontSize: "10px",
          color: "#ccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100"}}><a href="https://soundcloud.com/angela-gilhotra-417892481" title="Angela Gilhotra" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>Angela Gilhotra</a> · <a href="https://soundcloud.com/angela-gilhotra-417892481/sets/gwp9ghgwlxzh" title="✨" target="_blank" style={{color: "#cccccc", textDecoration: "none"}}>✨</a></div>
      </div> */}
      <div className="mt-12">
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/videoseries?si=uQqEgp9pCoFArO0p&amp;list=PL2Jxcnz4c2jkbuSyhU9pF5KJhm3AxjicL" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
      </div>
    </Main>
  )
}

export default Music;
