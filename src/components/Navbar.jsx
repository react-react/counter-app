import React from "react";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <span class="badge badge-pill badge-secondary">
          {props.counters.filter((c) => c.value > 0).length}
        </span>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
