import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const styleProfile={color :"orange" , textAlign :"center" ,paddingTop:"4em"};
    const styleImage ={width :"100px" , height :"auto" ,borderRadius:"50px"}
  return (
    <div style={styleProfile}>
      <img src={props.children} alt="" style={styleImage}></img>
      <h1>{props.fullname}</h1>
      <p>{props.bio}</p>
      <h3>{props.profession}</h3>
      <em>{props.default}</em>
      <br/>
      <button
        onClick={() => props.handelFullName(props.fullname)}
      >
        Show Name
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullname: "Hamza",
  bio :"i exist",
  profession :"dev",
  default:"this is a default props"
};
Profile.propsTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.any,
};
export default Profile;
