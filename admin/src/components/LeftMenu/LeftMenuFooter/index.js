import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Mantido por </span>
        <a
          key="website"
          href="https://www.linkedin.com/in/alanhrc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alan Henrique
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
