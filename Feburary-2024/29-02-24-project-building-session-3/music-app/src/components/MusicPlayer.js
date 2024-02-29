

export const MusicPlayer=(props)=>{

    const {title,thumbnail,artist,audio_url} = props;
    
    const artistList = artist.map((item)=>item.name).join(" & ");
 
     return (<>
        <section className="music-player">
          <img
            src={thumbnail}
            height={"150"}
            width={"150"}
            className="bannerImg"
          />
          <div className="music-title">{title}</div>
          <div className="artist">
             {artistList}
          </div>
          <audio controls src={audio_url}/>
        </section>
        </>
     )


}