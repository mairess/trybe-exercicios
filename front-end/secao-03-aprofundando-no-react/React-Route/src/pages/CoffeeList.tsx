import { useNavigate } from "react-router-dom";
import { coffeeList } from "../data";
import { useParams } from 'react-router-dom';

function CoffeeList() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }
    return (
      <>
      <h1>CoffeeList page</h1>
      {coffeeList.map((coffee) => (
        <div key={coffee.id}>
          <img src={coffee.image} alt={coffee.slug} />
          <h2>{coffee.title}</h2>
          <p>{coffee.description}</p>
          <pre>{coffee.ingredients}</pre>
        </div>
      ))}

<button onClick={ handleClick }>Voltar para Home</button>
      </>
      
    )
  }
  
  export default CoffeeList;