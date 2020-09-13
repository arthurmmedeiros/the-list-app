import React from "react";
import Header from '../Components/Header';
import HomeCard from '../Components/HomeCard';

const Home = () => {
  return (
    <>
    <Header 
      title='Welcome to the list app' 
      subtitle='Here we have a list for a bunch of different things'
    />
      <div className='list-container'>
        <div className='row'>
          <div className='col-md-4 col-xs-12'>
            <HomeCard title='Albums' icon='record-vinyl' pathUrl='/albums'/>
          </div>
          <div className='col-md-4 col-xs-12'>
            <HomeCard title='Posts' icon='edit' pathUrl='/posts'/>
          </div>
          <div className='col-md-4 col-xs-12'>
            <HomeCard title='Todos' icon='list' pathUrl='/todos'/>
          </div>                    
        </div>
      </div>
    </>
  );
};

export default Home;
