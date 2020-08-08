import React, { useEffect, useState } from 'react';
import { getList } from '../services/common.service';
import ListElementContainer from '../components/listElementContainer.component';

const ListView = ()=>{
  const [listData, changeListData] = useState([]);

  useEffect(()=>{
    getListData();
  },[]);

  const getListData = async ()=>{
    const list = await getList();
    changeListData(list.data);
  }

  return(
    <div>
      {
        listData.map((element,index)=>{
          return <ListElementContainer key={index} props={{ id:element.id }}>{element.title}</ListElementContainer>
        })
      }
    </div>
  )
}

export default ListView;