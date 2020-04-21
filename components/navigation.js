import Link from "next/link";
import NavLeft from "../components/navLeft";
import NavRight from "../components/navRight";
import Sidebar from "../components/sidebar";

const Navigation = () => (
  <div id="navi">
    <div id="titleLink">
      <Link href="/">
        <a><img id="logo" src="../static/logo.png"></img></a>
      </Link>
    </div>

    <div id="sidebar">
      <Sidebar />
    </div>

    <div id="leftLinks">
      <NavLeft />
    </div>

    <div id="rightLinks">
      <NavRight />
    </div>

    <style jsx>{`
      /*774 min width of navi*/

      #navi {
        width: calc(70vw - 16px);
        height: 48px;
        padding: 8px calc(15vw + 8px);
        position: fixed;
        z-index: 30;
        
        background-color: rgba(255, 255, 255, 0.5);
        box-shadow: 0 10px 10px #eee;

        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
      }

      #logo {
        margin-top: 8px;
        height: 48px;
      }

      #sidebar {
        z-index: 50;
        align-self: flex-start;
        display: none;
      }

      #leftLinks {
        position: absolute;
        z-index: 50;
        align-self: flex-start;
      }

      #rightLinks {
        position: absolute;
        z-index: 50;
        align-self: flex-end;
      }

      #titleLink {
        position: absolute;
        margin-top: -5px;
        text-align: center;
        text-shadow: rgba(25,25,25,0.5) 1px 0 5px;
        z-index: 40;
      }

      a {
        height: 56px;

        text-decoration: none;
        color: black;
        font-family: 'Pacifico', cursive;
        font-size: 24pt;
      }

      @media screen and (max-width: 1200px){
        #navi {
          width: calc(100vw - 16px);
          padding: 8px 8px;
        }

        #leftLinks {
          display: none;
        }

        #sidebar {
          display: block;
        }
      }
    `}</style>
  </div>
);

export default Navigation;
