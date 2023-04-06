// UserInputButton.js
// child component of UserInput with events up when button is clicked
export default function UserInputButton({ text, onButtonClick }) {
    return (
      <div>
        <button id="funfact" onClick={onButtonClick}>
          {text}
        </button>
      </div>
    );
  }