import Page from '../components/page'
import Footer from '../components/footer'

export default function About() {
  return (
    <div>
      <Page title="About Us">
        <div id="about">
          <div id="aboutTitle">About Us</div>
          <div id="aboutDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum.<br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum.<br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus ultrices lorem, consectetur interdum nisl aliquam vel. Nulla ut lectus placerat, sodales quam nec, finibus lorem. Praesent ut justo ut odio faucibus egestas ut ac nunc. Vivamus quis tellus ipsum.<br />
          </div>
          <Footer></Footer>

        </div>

      </Page>
    
    <style jsx>{`
          #about {
            display: flex;
            background-image: url('./static/topbg.png');
            background-size: cover;
            overflow-x: hidden;
            width: calc(70vw - 16px);
            padding: 0 calc(15vw + 8px);
            height: calc(100vh - 64px);
            margin-left: calc(-15vw - 8px);
            margin-top: -32px;

            flex-direction: column;
            justify-content: space-evenly;
            align-items: stretch;
          }

          #aboutTitle {
            font-size: 36pt;
            text-align: center;
            margin-bottom: 16px;
            margin-top: -64px;
          }

          #aboutDescription {
            /*width: calc(250px * 4 + 10px * 4);*/
            padding: 10px;
          }

          @media screen and (max-width: 1200px){
            #about {
              margin-left: -16px;
              width: calc(70vw - 32px);
              padding: 32px calc(15vw + 16px);
            }
          }
    `}</style>
    </div>
  );
}