import React from 'react'
import './logInModal.scss'

interface ModalProps {
  onToggle: () => void;
}

const LogInModal: React.FC<ModalProps> = ({ onToggle }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [showPassword, setShowPassword] = React.useState(false)

  // const handleLogin = () => {
  //   // Implement your login logic here
  //   console.log('Logging in with:', username, password);
  //   // You can add your authentication logic here
  //   // For simplicity, we are just logging the credentials
  //   onClose();
  // };
  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <h2>Login to your account</h2>
        <input
          type="text"
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type={showPassword ? 'text' : "password"}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='modal__content__login--btn'>Login
        </button>
        <div className="show__password">
          <button onClick={() => setShowPassword(!showPassword)}>
          &#128065; 
          </button>
        </div>
        <div className="close__modal">
          <button onClick={onToggle} className='close__modal--btn'>&#10006;</button>
        </div>
      </div>
    </div>
  )
}

export default LogInModal