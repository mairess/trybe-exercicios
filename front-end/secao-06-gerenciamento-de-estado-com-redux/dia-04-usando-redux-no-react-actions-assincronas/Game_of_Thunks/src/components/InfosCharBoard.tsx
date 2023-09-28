import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReduxState } from '../types';

function Gallery() {
  const rootState = useSelector((state: ReduxState) => state);
  if (rootState.isLoading) { return <h3>Loading...</h3>; }
  if (rootState.error) { return <div>{rootState.error}</div>; }

  const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem;
  
  li {
    list-style: none;
  }
  `;

  return (
    <Container>
      {!rootState.isLoading && (
        <div>
          <h2>
            {rootState.name}
          </h2>
          <p>
            {`Gender: ${rootState.gender}`}
          </p>
          <p>{`Culture: ${rootState.culture}`}</p>
          <p>
            {`Born: ${rootState.born}`}
          </p>
          <p>
            {`Died: ${rootState.died}`}
          </p>
          <h3>Titles:</h3>
          <ul>
            {rootState.titles.map((title, index) => (
              <li key={ index }>{title}</li>
            ))}
          </ul>
          <h3>Aka:</h3>
          <ul>
            {rootState.aliases.map((alias, index) => (
              <li key={ index }>{alias}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
}

export default Gallery;
