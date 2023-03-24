import React , {useState} from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [sideNavClass, setsideNavClass] = useState("sidenav sidenavClosed");
  function navbarClose() {
    setsideNavClass("sidenav sidenavClosed");
    return;
  };
  function navbarOpen() {
    setsideNavClass("sidenav sidenavOpen");
    return;
  };
    return (
      <React.Fragment>
          <h1>Tic Tac Toe Variants</h1>
        <span className="btn btn-secondary" onClick={() => navbarOpen()}>Menu</span>
        <div id="mySidenav" className={sideNavClass}>
                    <div>
                        <nav>
                        <a href="javascript:void(0)" className="closebtn" onClick={() => navbarClose()}>&times;</a>
                        <a href={`/SwapMode`}>Swap Mode</a>
                            <br></br>
                                <a href={`/MoveMode`}>Move Mode</a>
                            <br></br>
                                <a href={`/MoveModeHex`}>Move Mode - Hexagon</a>
                        </nav>
                    </div>
        </div>
        <div className="mainContent">
            <Outlet />
        </div>
      </React.Fragment>
    );
  }