import React from 'react'
import { connect,useSelector } from "react-redux";
import Add from './Add';
import OneList from './oneList'

const List = () => {
    const list = useSelector(state => state.list)
    

    return (
        <div>
            {list.map((el,i)=><OneList key={i} el={el}/>)}

          
        </div>
    )
}
const mapStateToProps = (state) => {
    return { note:state
        // task:state.list
      
    };
  };

export default connect(mapStateToProps)(List)
