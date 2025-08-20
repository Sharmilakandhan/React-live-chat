import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Chat from './components/chat'
import './App.css'
import { signInWithPopup } from "firebase/auth";
import { provider , auth } from "./config/firebase";

function App() {
  const [user, setUser] = useState(null)

   const handlelogin =()=>{
          signInWithPopup(auth, provider )
          .then(result =>setUser(result._tokenResponse))
          .catch(err =>console.log(err));
      }

  return (
    <> 
      <div className='app'>
       { user ?
       
      <Chat user= {user}/>
      :
      
        <div className="text-center">
            <div >
                <img src='loginlogo.jpg'
                alt="logo"
                width={300}
                height={300}
                className="firstlogo"
                style={{borderRadius: 200}}
                />
            </div>
            <div>
                <button 
                className="btn btn-primary" 
                style={{marginTop:"50px"}}
                onClick={handlelogin}
                >
                  Start
                </button>
            </div>
        </div>
       }
      </div>
    </>
  )
}

export default App
