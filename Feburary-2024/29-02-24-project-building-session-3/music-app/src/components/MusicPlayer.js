

export const MusicPlayer=(props)=>{

    const {title,thumbnail,audio_url} = props;
    
 
     return (<>
        <section className="music-player">
          <img
            src={thumbnail}
            height={"50"}
            width={"50"}
            className="bannerImg"
          />
          <div className="music-title">{title}</div>
          <audio controls src={audio_url}/>
        </section>
        </>
     )


}