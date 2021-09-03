import "./button.styles.scss";

export default function Button({
  type,
  textContent,
  onClick,
  backGroundColor,
  isGoogleSignIn,
  className,
}) {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""}${
        className ? className : ""
      } custom-btn`}
      onClick={onClick}
      type={type}
      style={{ backgroundColor: backGroundColor }}
    >
      {textContent.toUpperCase()}
    </button>
  );
}
