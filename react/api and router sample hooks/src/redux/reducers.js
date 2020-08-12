const initData = {
  data:''
};

function reducer(state = initData,data){
  console.log('previous state',state);
  switch(data.type){
    case 'ADD': return {...state,data:data.payload};
    default : return state
  }
}

export default reducer;