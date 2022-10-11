const Content = () => {
  const handleNameChange = () => {
    const names = ["Bobs", "Kevin", "Khalid"];
    // Gets a number between 0 and 2
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
};

export default Content;
