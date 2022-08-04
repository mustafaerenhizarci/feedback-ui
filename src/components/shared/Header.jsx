

function Header({ text, size,color }) {
  function handleSize(size) {
    switch (size) {
      case 1:
        return <h1 style={{color:color}}>{text}</h1>;

      case 2:
        return <h2 style={{color:color}}>{text}</h2>;

      case 3:
        return <h3 style={{color:color}}>{text}</h3>;

      default:
        break;
    }
  }

  return (
    <>
      {handleSize(size)}
    </>
  );
}

Header.defaultProps = {
  size: 1,
  color:"#000"
};



export default Header;
