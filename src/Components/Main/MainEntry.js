// entry page is for users to enter in their email
const MainEntry = () => {
    // this function is called when the submit box is selected to show a popup to user
    // event bindings
    function emailSubmit() {
      alert("Your e-mail has been added to the list!");
    }
  
    // html for this email submission form
    return (
      <section id="emailentry">
        <h2>Receive the IBD Email Newsletter</h2>
        <form onSubmit={emailSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  };
  
  export default MainEntry;