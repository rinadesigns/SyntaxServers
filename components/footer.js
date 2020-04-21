import Link from "next/link";

const Style = () => (
  <div id="footer">
    
    <a href="http://rinakou.ch/">Developed and Designed by Rina Kouch</a>

    <style jsx>{`
      #footer {
        margin-bottom: 32px;
        text-align: center;
        align-self: flex-center;
      }

      a {
        font-size: 10pt;
        color: #222 !important;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Style;
