import React from 'react';
import './card-list.css';
import { Card } from '../cards/card.component';

export const CardList = props => {
    return <div className='Card_list'>
    
          {
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>
      ))
    }
    
    </div>;
};  
