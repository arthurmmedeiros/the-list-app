import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import './HomeCard.scss';


export interface IHomeCard {
    title: string;
    icon: string;    
    pathUrl: string;
}

const HomeCard: React.FC<IHomeCard> = ({
    title, icon, pathUrl
}) => {   

    return(
        <a             
            className='btn-default btn btn-block home-card-container'
            href={pathUrl}>
            <FontAwesomeIcon icon={['fas', icon as IconName]}/>
            <span className='home-card-title'>
            {title}
            </span>
        </a>
    )

}

export default HomeCard;