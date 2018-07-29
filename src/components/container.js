import React from "react";

import styles from './about-css-modules.module.css'
console.log(styles)
export default ({ children }) => (
  <div style={{ margin: "3rem auto", maxWidth: 600 }}>{children}</div>
);