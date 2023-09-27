import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Gallery() {
  const rootState = useSelector((state: ReduxState) => state);

  return (
    <div>
      {rootState.isLoading && <div>Loading...</div>}
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
        </div>
      )}
    </div>
  );
}

export default Gallery;
