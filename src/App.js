


import { useState } from 'react';
import LoginApp from './login';
import RecentProfile from './recentprofile';

function App() {




  return (
    <div className='appContainer'>
      <div className='recent-container'>
        <h1 className='fb'>facebook</h1>
        <h2>Recent Logins</h2>
        <span>Click your picture or add an account.</span>

        <RecentProfile/>
        </div>
       <div className='login-container'>
        <LoginApp />
        
        <span className='foot'>Create a Page for a celebrity, brand or business.</span>
       </div>

      {/* <RecentProfile />
      <LoginApp /> */}
    </div>
   
  );
}


export default App;
