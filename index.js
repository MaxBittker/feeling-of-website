import { render } from "inferno";

import Frame from "./src/Frame";
import styles from "./src/styles.css";

const mountNode = document.getElementById("root");

render(<Frame />, mountNode, mountNode.lastChild);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
