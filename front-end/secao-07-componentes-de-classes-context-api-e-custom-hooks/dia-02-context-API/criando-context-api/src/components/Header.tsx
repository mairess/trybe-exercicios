import '../style.css';

export default function Header() {
  return (
    <header>
      <h1>Trybe</h1>
      <button
        onClick={ () => console.log('click') }
      >
        🌒
      </button>
    </header>
  );
}
