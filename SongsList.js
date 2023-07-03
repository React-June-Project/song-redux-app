import React from "react";
import { useSelector,useDispatch} from "react-redux";
import {selectSong} from '../redux/actions/song.action';


const SongsList = () => {
  // useSelector is used to select the data from the redux

  let data = useSelector((state) => state.data);

  // after importing dispatch 
  let dispatch = useDispatch();

  return (
    <div>
      <h1> Song Lists </h1>

      {/* parent div for styling */}
      <div style={{
        border:"1px solid black",
        padding: "10px",
        display: "flex",
        gap:"1rem",
        justifyContent:"space-between",
        flexWrap:"wrap"
        
      }}>
      {
            data.map((song, index) => (
              // whenever we click on the song we should display the details of the songs
              // so, dispatch(selectSong(song))
            <div key={index} 
              onClick={() =>dispatch(selectSong(song))}
            >
                  <h3> {song.name} </h3>
            </div>
            ))
      }
      </div>
      {/* completed the parent div */}
      
    </div>
  );
};

export default SongsList;


// after creating the songdeatil file we have to import our song.action file in songlist
// beacuse we have all the information here of the song data