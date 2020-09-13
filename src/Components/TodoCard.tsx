import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './TodoCard.scss';

export interface ITodoCard {
    title: string;
    completed: boolean;
    handleToggle: () => void;
}

const AlbumCard: React.FC<ITodoCard> = ({
    title, completed, handleToggle
}) => {    
    return(
        <div className='todo-card-container'>
            <div className='todo-card-icon'>
                <button 
                    onClick={handleToggle}
                    type='button'
                    className='btn btn-default'>
                    <FontAwesomeIcon 
                        icon={['fas', 'check-circle']} 
                        className={`${completed ? 'text-success' : ''}`}
                    />
                </button>
                
            </div>
            <div className='todo-card-title'>
                <span>{title}</span>
            </div>
        </div>
    )

}

export default AlbumCard;