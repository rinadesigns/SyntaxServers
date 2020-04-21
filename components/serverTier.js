import Link from "next/link";

const ServerTier = props => (
  <div id="serverTier">
    <div id="icon"><img src={props.icon} /></div>
    <div id="name">{props.name}</div>
    <div id="cost">Starting at<br /><div id="price">${props.price}</div><br />/ mo.</div>
    <div id="description">{props.desc}</div>
    <div id="select"><Link href={`${props.url}`}><a id="link">Learn More</a></Link></div>

    <style jsx>{`
        #serverTier {
          margin: 10px;
          height: 500px;
          width: 250px;

          background-color: #dbd;
        }

        #icon {
          height: 100px;
          background-color: #dad;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        #name {
          font-family: 'Pacifico', cursive;
          font-size: 24pt;
          background-color: #dbd;
          color: #555;
          height: 75px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        #cost {
          background-color: #dad;
          font-size: 10pt;
          color: #555;
          height: 75px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        #price {
          margin-top: -16px;
          margin-bottom: -28px;
          font-family: 'Pacifico', cursive;
          font-size: 24pt;
        }

        #description {
          min-height: 155px;
          font-size: 11pt;
          color: #333;
          padding: 10px;
          text-align: center;
        }

        #select {
          height: 75px;
          background-color: #d8d;
          
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #link {
          text-decoration: none;
          color: #444;
          background-color: #d7d;
          width: calc(250px - 20px);
          height: 55px;
          margin: 10px;
          font-size: 18pt;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
      `}</style>
  </div>
)

export default ServerTier