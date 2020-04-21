import Head from "next/head"

const Style = props => (
  <div>
    <Head>
      <title>Syntax Servers - {props.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="icon" href="../static/icon.png" type="image/x-icon"/>
      <link rel="shortcut icon" href="../static/icon.png" type="image/x-icon"/>

      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet"></link>
    </Head>

    <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          /*background-image: url(../static/bg.jpg);
          background-repeat: repeat;*/
        }

        #content {
          width: 100vw;
          position: absolute;
          margin-top: 64px;
        }
      `}</style>
  </div>
)

export default Style