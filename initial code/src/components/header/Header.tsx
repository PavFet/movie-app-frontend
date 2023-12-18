import React from 'react'
import './header.scss'
import LogInModal from '../modal/logInModal/LogInModal';
import SignInModal from '../modal/signInModal/SigInModal'
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { logOut } from '../../features/movieSlice';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);

  const user = useAppSelector(state => state.movie.userData)
  const disp = useAppDispatch()


  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  const toggleSignInnModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };


  
  return (
    <header>
      <div className="logo">FavMovies</div>
      <nav>
        <ul>
          { user.username.length > 1 
            ?  
            <>
              <span className='welcome'>Welcome, {user.username}</span>
              <li><button onClick={() => disp(logOut())}>Log out</button></li>
            </>
            :
            <>
              <li><button onClick={toggleLoginModal} >Log in</button></li>
              <li><button onClick={toggleSignInnModal}>Sign in</button></li>
            </>
          }
        </ul>
      </nav>
      {isLoginModalOpen && <LogInModal onToggle={toggleLoginModal} />}
      {isSignInModalOpen && <SignInModal onToggle={toggleSignInnModal} />}
    </header>
    
  )
}

export default Header