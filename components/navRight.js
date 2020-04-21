import Link from "next/link";

const NavRight = () => (
  <div id="navRight">
    <div id="serversList">
      <Link href="#">
        <a id="servers">Servers</a>
      </Link>
      <Link href="../#webservers">
        <a id="servers">Web Servers</a>
      </Link>
      <Link href="../#wcservers">
        <a id="servers">Web Controlled Servers</a>
      </Link>
      <Link href="../#dedicatedservers">
        <a id="servers">Dedicated Servers</a>
      </Link>
    </div>
    <Link href="/login">
      <a id="login">Login</a>
    </Link>

    <style jsx>{`
      #navRight {
        float: left;
        padding: 8px;
        display: flex;
        margin-top: -16px;
      }

      #serverList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      a#servers {
        width: 220px;
        text-align: right;
        display: block;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 16pt;
        color: #888;
        padding: 20px 12px;
        background-color: rgba(255, 255, 255, 0.7);
        transition: all 0.2s ease-in-out;
      }

      a#servers:hover {
        color: #fff !important;
        background-color: #cdcdcd;
      }

      #login {
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 16pt;
        float: right;

        color: #fff;
        background-color: #eae;
        border-radius: 5px;
        
        margin-left: 16px;
        margin-top: 16px;
        padding: 2px 4px;

        height: 26px;
      }

      #serversList {
        height: 64px;
        overflow-y: hidden;
        transition: all 0.5s ease-in-out;
      }

      #serversList:hover {
        height: calc(64px * 5);
      }

      @media screen and (max-width: 1200px){
        #serversList {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default NavRight;
