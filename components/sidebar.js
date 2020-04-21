import Link from "next/link";

function toggleMenu() {
  console.log("currentState = " + document.getElementById("links").style.marginLeft);
  if (document.getElementById("links").style.marginLeft == "-100%" || document.getElementById("links").style.marginLeft == "") {
    document.getElementById("links").style.marginLeft = "0%";
  } else {
    document.getElementById("links").style.marginLeft = "-100%";
  }
}

const Sidebar = () => (
  <div id="sidebar">
    <a id="menuToggle" onClick={e => toggleMenu()}>≡</a>
    <div id="links" onClick={e => toggleMenu()}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="../about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
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

    <style jsx>{`
      #sidebar {
        float: left;
        margin-left: -8px;
        margin-top: 12px;
      }

      #menuToggle {
        top: 0;
        margin-top: 0;
        position: absolute;
        cursor: pointer;
        padding: 20px 26px;
        width: 12px !important;
        height: 24px !important;
        max-width: 12px !important;
        max-height: 24px !important;
      }

      #links {
        margin-left: -100%;

        margin-top: 44px;
        width: 220px;
        height: 100vh;
        position: fixed;
        display: flex;
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 10px 10px #eee;

        flex-direction: column;
        justify-content: top;
        align-items: stretch;

        transition: margin-left 0.2s ease;
      }

      a {
        text-decoration: none;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 16pt;
        color: #888;
        transition: all 0.2s ease-in-out;
        padding: 20px 12px;
      }

      a:hover {
        color: #fff !important;
        background-color: #cdcdcd;
      }
    `}</style>
  </div>
);

export default Sidebar;
