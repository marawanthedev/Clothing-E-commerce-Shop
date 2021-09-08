import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";
// using the withRouter gives us the ability to get access of the parents router
// which means that i can access the history and perform url/history manipulations
const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  match,
  linkUrl,
  id,
  className,
}) => {
  return (
    <div
      className={`${size} menu-item menu-item${id}  ${
        className ? className : ""
      } $`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop now !</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
