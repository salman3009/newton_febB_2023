



function MusicCard(props) {
   const {title,thumbnail,artist,id} = props;
    
   const artistList = artist.map((item)=>item.name).join(" & ");

    return (<>
       <section className="musicCard">
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
       </section>
    </>)
 }
 export default MusicCard;