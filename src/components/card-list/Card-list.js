import React from 'react';
// import './Card-list.css';
import Card from '../card/Card';
import Grid2 from '@mui/material/Grid2';
import { Container } from '@mui/material';

// class CardList extends React.Component{

// render(){
//   return(
//     <div className='card-list'>
//         <Card/>
//     </div>
//   )
// }

// }

const CardList = (props) => {
  return (
    <Container >
      <Grid2 container spacing={{ xs: 3, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.monsters.map((monster) => (
          <Grid2 size={{ xs: 2, sm: 4, md: 4 }} key={monster.id}> {/* Ensure each item has a unique key */}
            <Card monster={monster} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default CardList;