import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>We are sorry, page not found!</h2>
        <p>Kindly do one thing if you've typed the URL manually, double check
          the spelling, or if you've clicked a broken link, please let us know
          where the broken link came from.
        </p>
        <Link to="/" className="backtohome">
          Back To Homepage
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
