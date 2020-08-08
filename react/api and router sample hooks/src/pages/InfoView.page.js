import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getListData } from '../services/common.service';
import CardView from '../components/cardView.component';

const InfoView = ()=>{
  const [ listData, changeListData ] = useState({});
  const urlParams = useParams();
  const history = useHistory();

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
      info view :
      <CardView props={listData}></CardView>
    </div>
  )
}

export default InfoView;