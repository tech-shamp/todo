// Import Required Components
import NavElement from "./components/navbar.js";
import { C2F } from "./components/c2f.js";
import { F2C } from "./components/f2c.js";

window.addEventListener("load", () => {
  const navbar = document.querySelector(".nav-bar-container");
  if (navbar != null) {
    navbar.innerHTML = NavElement;
  } else
    (err) => {
      return err;
    };
});

C2F(0); // This Function is Imported from components/c2f.js
/* Celcius to Farenhiet is working Perfect
I just have to modify some little changes in that module */

F2C(32); // This Function is Imported from components/c2f.js
/* Farenhiet to Celcius is working Perfect
I just have to modify some little changes in that module */
