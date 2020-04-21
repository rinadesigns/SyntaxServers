import Page from '../components/page'
import Footer from '../components/footer'

export default function Contact() {
  var state = {
    fname: '',
    lname: '',
    email: '',
    message: ''
  }
  function handleChange (event) {
    state[event.target.name] = event.target.value;
    console.log("Updated " + event.target.name + " to " + state[event.target.name]);
  }

/*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey("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");

  function submitForm() {
    console.log(state["fname"]);
    console.log(state["lname"]);
    console.log(state["email"]);
    console.log(state["message"]);

    const msg = {
      to: 'rinakouch@outlook.com',
      from: state["email"],
      subject: 'From' + state["fname"] + " " + state["lname"],
      text: state["message"]
    };
    sgMail.send(msg);
  }*/
  
  return (
    <div>
      <Page title="Contact Us">
        <h1>Contact Us</h1>
        <form method="POST" id="contactForm" className="board-form" onSubmit={e => {
              //submitForm(this)
              e.preventDefault()
            }}>
          <label>First Name</label>
          <input type="text" id="fname" name="body[fname]" placeholder="First Name" onChange={event => handleChange(event)}/>
          <label>Last Name</label>
          <input type="text" id="lname" name="lname" placeholder="Last Name" onChange={event => handleChange(event)}/>

          <label>Email</label>
          <input type="text" id="email" name="email" placeholder="Email Address" onChange={event => handleChange(event)}/>

          <label>Query</label>
          <textarea id="message" name="message" placeholder="What would you like to ask?" onChange={event => handleChange(event)}></textarea>
          <input type="submit" value="Submit" />
        </form>
        <Footer></Footer>
      </Page>
    
    <style jsx>{`
      * {
        box-sizing: border-box;
      }

      .App {
        max-width: 420px;
        margin: 0 auto;
      }

      p {
        text-align: center;
        font-weight: 500;
      }

      input[type=text],input[type=email], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
        font-family: 'Roboto', sans-serif;
      }

      input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      input[type=submit]:hover {
        background-color: #45a049;
      }

      .container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
      }
    `}</style>
    </div>
  );
}