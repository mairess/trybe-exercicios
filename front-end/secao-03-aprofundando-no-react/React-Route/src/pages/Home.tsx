import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Coffee');
  }
    return (
      <>
      <h1>Home page</h1>
      <Link to='/coffeelist'>
        <button>Conheça nosso produtos</button>
      </Link>
      <button onClick={ handleClick }>Vá para Coffee</button>
      </>
    )
  }
  
  export default Home;