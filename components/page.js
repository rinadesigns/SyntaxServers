import Navigation from '../components/navigation'
import Style from '../components/style'
import Link from "next/link";

const Page = props => (
  <div>
      <Style title={`${props.title}`}/>
      <Navigation />
      <div id="content">
        {props.children}
      </div>

      <style jsx>{` 
        #content {
          height: calc(100vh - 64px - 32px);
          width: calc(70vw - 16px);
          padding: 32px calc(15vw + 8px) 0;
          position: fixed;
          overflow-y: auto;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        
        @media screen and (max-width: 1200px){
          #content {
            width: calc(100vw - 16px);
            padding: 32px 8px;
          }
        }
      `}</style>
  </div>
);

export default Page;