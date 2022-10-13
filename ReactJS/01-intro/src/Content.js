const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Khalid"];
    // Gets a number between 0 and 2
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  // Notice how we do not add () to the onClick functions
  // We do that so the function are not called on load, and are only called on click
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click It</button>
      <button onClick={() => handleClick2("Dave")}>Click It</button>
      <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  );
};

export default Content;
