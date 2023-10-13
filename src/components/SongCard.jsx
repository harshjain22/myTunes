import React from 'react';
import '../App.css';

const SongCard =({song})=>{

return(
    <div className='card'>
        <div>
            <h2 className='marqueeName'> {song.trackName.slice(0,20) }... </h2>
        </div>

        <div className='cardItem'>
            <img className='cardImg' src={song.artworkUrl100} alt='music poster'/>
        </div>

        <div className='audioDiv'>
            <audio className='audioBar' src= {song.previewUrl} controls loop/>
        </div>

        <h4 className='artistName'> {song.artistName} </h4>
        
        <div>
            <a href={song.trackViewUrl} target='_blank' rel="noreferrer"  > View more on iTunes</a> 
        </div>
        
    </div>
);

}

export default SongCard;