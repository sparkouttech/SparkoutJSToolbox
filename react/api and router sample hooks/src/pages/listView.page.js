import React, { useEffect, useState } from 'react';
import { getList } from '../services/common.service';

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
          return <li key={index}>{element.title}</li>
        })
      }
    </div>
  )
}

export default ListView;