// UserInput.js
// import UserInputButton
import UserInputButton from "./UserInputButton.js";

// event binding user input function
// this user input allows the user to click a button to alert the user of a fun ibd fact
const UserInput = () => {
  function clickAlert() {
    alert("Researchers have found that patients with Crohn's disease (a type of IBD) may have a unique 'superpower' - they are more likely to be resistant to the effects of snake venom. In a study conducted in Israel, it was found that the venom of the viper snake was significantly less toxic to people with Crohn's disease compared to those without the condition");
  }

  return (
    <div id="IBDfact">
        <hr />
            <UserInputButton
                text="Click for a Fun IBD Fact!"
                onButtonClick={clickAlert}
            />
    </div>
  );
};

export default UserInput;