import { useNavigate } from "react-router-dom";

function Coffee() {
  const navigate = useNavigate();

  function handleBackHome() {
    navigate('/')
    }

    return (
      <div>
        <h1>Coffee page</h1>
       <button onClick={ handleBackHome }>Votlar para home</button>
      </div>
    )
  }
  
  export default Coffee;