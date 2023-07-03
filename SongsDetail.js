import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

const SongsDetail = () => {
      

      let selectedSong = useSelector((state) => state.selectedSong);
      console.log(selectedSong);
      return (
            <div>
                  <h1>Songs Detail</h1>
                  {/* if selctedsong is there we have to passs the detail of the song */}
                  {
                        selectedSong && (
                              <div>
                              <h3>{selectedSong.name}</h3>
                              <h3>{selectedSong.album}</h3>
                              <h3>{selectedSong.singer}</h3>
                              <h3>{selectedSong.genere}</h3>
                              </div>
                        )
                  }
            </div>
      )
}
export default SongsDetail;