import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getListData } from '../services/common.service';
import CardView from '../components/cardView.component';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/actions';

const InfoView = ()=>{
  const [ listData, changeListData ] = useState({});
  const [ textinput, setTextInput ] = useState('');
  const urlParams = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const getIndividualData = async (id)=>{
    const listDataTemp = await getListData(id);
    changeListData(listDataTemp.data);
  }

  useEffect(()=>{
    getIndividualData(urlParams.id);
  },[])

  const goBack = ()=>{
    history.push('/');
  }

  return(
    <div>
      <button onClick={ ()=>goBack() }>Back</button>
      <input type="text" onChange={(e)=>setTextInput(e.target.value)}/>
      <button onClick={ ()=>dispatch(addData(textinput)) }>Add dispatch</button>

      info view :
      <CardView props={listData}></CardView>
    </div>
  )
}

export default InfoView;