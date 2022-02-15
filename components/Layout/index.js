import React from "react";

export default function Layout({ children }) {
  return (
    <div id="page" className="hfeed site">
      {/* Header here */}
      {/***** add id="content" in the below div with className site-content *****/}
      <div id="" className="site-content">
        <div className="col-full">
          <div className="row">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
