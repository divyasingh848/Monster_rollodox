import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './Card.css';

const MonsterCard = (props) => {
    return (
        <Card className='card'>
            <CardMedia
                component='img'
                alt='monster'
                image={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
                title={props.monster.name}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.monster.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.monster.email}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MonsterCard;
