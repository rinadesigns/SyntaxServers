import Link from "next/link";

const NavLeft = () => (
  <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="../about">
      <a>About</a>
    </Link>
    <Link href="../contact">
      <a>Contact Us</a>
    </Link>

    <style jsx>{`
      div {
        float: left;
        margin-left: -8px;
        margin-top: 12px;
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

export default NavLeft;
