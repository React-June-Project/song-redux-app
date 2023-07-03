import React from 'react';
import { UseSelector } from 'react-redux';
import SongsList from './Components/SongsList';
import SongsDetail from './Components/SongsDetail';


const App = () =>{

  return (

      <div>
        <SongsList/>
        <SongsDetail/>
      </div>
  )
}
export default App; 