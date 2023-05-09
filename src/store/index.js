import {configureStore, createSlice} from '@reduxjs/toolkit'

const songsSlice=createSlice({
  name:'song',
  initialState:[],
  reducers:{
    addSong(state, action){
      state.push(action.payload)
      console.log(state.length)
    },
    removeSong(state,action){
      const index=state.indexOf(action.payload)
      state.splice(index,1);
    }

  }
});

const store = configureStore({
  reducer:{
    songs:songsSlice.reducer
  }
});

// const getStore=store.getState()
// console.log(getStore);

// store.dispatch({
//   type:'song/addSong',
//   payload: "new song"

// });
// const finalizeStore=store.getState()
// console.log(JSON.stringify(finalizeStore));

export { store };
console.log(songsSlice.actions.addSong())

export const {addSong,removeSong} =songsSlice.actions;