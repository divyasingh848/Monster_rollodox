// import React from 'react';
// import './Search-box.css';

// class SearchBox extends React.Component{

// render(){
//   return(

//      <input id="email" className='search-box' type='email' name='email' placeholder='Search Monsters..'/>
  
//   )
// }

// }


import React from 'react';
import { Input } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import './Search-box.css'

const { Search } = Input;

const SearchBox = (props) => {
  return (
    <Input
      id="email"
      className='search-box'
      placeholder='Search Monsters...'
      onChange={props.onSearchChange}
      enterButton
    />
  );
};

export default SearchBox;
