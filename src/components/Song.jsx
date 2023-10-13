import { useEffect, useState } from "react";
import '../App.css';

import SongCard from "./SongCard";


const Song = () => {    

    const [songs, setSongs] = useState([]);

    const [searchedSong, setSearchedSong] = useState('');

    const makeApiCall = async (title) => {

        // const API_URL = ' https://itunes.apple.com/search?term=yo+yo+honey+singh';
        const API_URL =  'https://itunes.apple.com/search';

        const response = await fetch(`${API_URL}?term=${title}&country=in`);    // response = header + body
        const data = await response.json();     // Non-blocking (async) await : jab tak ye data ayega nhi tab tak aage nhi jayenge
        // console.log("Data is :", data.results);
        
        setSongs(data.results);
    }

    useEffect(() => {
        makeApiCall("yo yo honey");       // it is called when component mount
    }, []);

    
    return (
        <div>

            <div className="searchContainer"> 

                <input 
                    className="searchBar"
                    placeholder="Search for any song" 
                    value={searchedSong}
                    onChange={(e)=> setSearchedSong(e.target.value)}
                />

                <button className="searchBtn" onClick={()=> makeApiCall(searchedSong)}> Search </button>

            </div>

            {
                songs?.length > 0 
                    ? (
                        <div className="container"> 

                            { songs.map((song)=>(
                               <SongCard song={song} />
                            )) }

                        </div>

                    ) : (
                        <div>
                            <h2>
                                No song found for this artist !
                            </h2>
                        </div>
                    ) 
            }


        </div>
        
        );
    }
    
    export default Song;
  
  
