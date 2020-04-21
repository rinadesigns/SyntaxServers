import Page from '../components/page'
import ServerTier from '../components/serverTier'
import Footer from '../components/footer'
//import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Page title="Home">
        
        <div id="webservers"></div>
        <div id="servers">
          <div id="serversDescription">
            <div id="serversTitle">Web Hosting</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum.
          </div>
          <br />
          <div id="serversTiers">
            <ServerTier
              url="../"
              icon="../static/light.png"
              name="Light"
              price="39.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
            <ServerTier
              url="../"
              icon="../static/medium.png"
              name="Medium"
              price="74.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
            <ServerTier
              url="../"
              icon="../static/powerful.png"
              name="Powerful"
              price="99.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
          </div>
        </div>

        <br/><hr></hr>

        <div id="wcservers"></div>
        <div id="servers">
          <div id="serversDescription">
            <div id="serversTitle">Web Controlled Servers</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum.
          </div>
          <br />
          <div id="serversTiers">
            <ServerTier
              url="../"
              icon="../static/light.png"
              name="Light"
              price="39.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
            <ServerTier
              url="../"
              icon="../static/medium.png"
              name="Medium"
              price="74.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
            <ServerTier
              url="../"
              icon="../static/powerful.png"
              name="Powerful"
              price="99.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
          </div>
        </div>

        <br/><hr></hr>

        <div id="dedicatedservers"></div>
        <div id="servers">
          <div id="serversDescription">
            <div id="serversTitle">Dedicated Servers</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum.
          </div>
          <br />
          <div id="serversTiers">
            <ServerTier
              url="../"
              icon="../static/light.png"
              name="Light"
              price="39.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
            <ServerTier
              url="../"
              icon="../static/medium.png"
              name="Medium"
              price="74.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
            <ServerTier
              url="../"
              icon="../static/powerful.png"
              name="Powerful"
              price="99.90"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum."
              />
          </div>
        </div>

      <Footer></Footer>
      </Page>
        
        <style jsx>{`

          #servers {
            display: flex;
            width: calc(70vw - 16px);

            flex-direction: column;
            justify-content: center;
            align-items: stretch;
          }

          #serversTitle {
            font-size: 36pt;
            text-align: center;
            margin-bottom: 16px;
          }

          #serversDescription {
            /*width: calc(250px * 4 + 10px * 4);*/
            padding: 10px;
          }

          #serversTitle {
            font-size: 36pt;
            text-align: center;
            margin-bottom: 16px;
          }

          #serversDescription {
            /*width: calc(250px * 4 + 10px * 4);*/
            padding: 10px;
          }

          #serversTiers {
            display: flex;
            width: calc(70vw - 16px);

            flex-direction: row;
            justify-content: center;
            align-items: stretch;
          }

          @media screen and (max-width: 1200px){
            #about {
              margin-left: -16px;
              width: calc(70vw - 32px);
              padding: 32px calc(15vw + 16px);
            }

            #servers {
              width: calc(100vw - 16px * 2);
            }

            #serversTiers {
              width: calc(572px - 16px * 2);
              padding: 0 calc(50vw - 572px / 2);
              flex-wrap: wrap;
            }
          }

          @media screen and (max-width: calc(572px - 16px * 2)){
            #serversTiers {
              width: 100vw;
            }
          }
        `}</style>
    </div>
  )
}