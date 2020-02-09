import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.FooterList.map(footerName => {
        return <li key={footerName}>{footerName}</li>;
      })}
    </ul>
  );
};

export default Footer;
