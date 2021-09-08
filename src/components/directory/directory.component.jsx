import React from "react";
import "./directory.styles.scss";
import "../menu-item/menu-item.component";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return sections !== undefined ? (
    <>
      <div className="directory-menu">
        {sections.map(({ ...sectionProps }) => (
          <MenuItem key={sectionProps.id} {...sectionProps}></MenuItem>
        ))}
      </div>
    </>
  ) : null;
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
