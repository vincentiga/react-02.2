import React from 'react';
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Contact 
        characterFirstName='Katherine'
        characterLastName='Parker'
        avatarPic='https://randomuser.me/api/portraits/women/35.jpg'
        online='online'
        on='status-online'
      />
      <Contact 
        characterFirstName='Lisa'
        characterLastName='Nelson'
        avatarPic='https://randomuser.me/api/portraits/women/78.jpg'
        online=''
        on=''
      />  
      <Contact 
        characterFirstName='Samantha'
        characterLastName='Welch'
        avatarPic='https://randomuser.me/api/portraits/women/82.jpg'
        online='online'
        on='status-online'
      />  
    </div>
  );
}

export default App;
