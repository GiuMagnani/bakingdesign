import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ses_address: "hello@bakingdesign.com",
      send_to: "hello@bakingdesign.com",
      subject: "Baking Design Contact Form",
      honeypot: "",
      name: "",
      replyTo: "",
      message: "",
    };
  }

  handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.honeypot !== "") return;
    fetch(`https://8ijhyffnal.execute-api.us-east-1.amazonaws.com/dev/baking-design-contact-form`, {
      method: "POST",
      body: JSON.stringify({
        ses_address: this.state.ses_address,
        send_to: this.state.send_to,
        subject: this.state.subject,
        name: this.state.name,
        replyTo: this.state.replyTo,
        message: this.state.message,
      }),
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json; charset=utf-8",
      }),
    }).then(response => {
      console.log(response);
      // The form submission was successful
      console.log('form successful');
      return response.json();
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <h2>contact me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore
          incidunt libero obcaecati similique sit.
        </p>
        <form onSubmit={this.onSubmit}>
          <input
            type="input"
            name="honeypot"
            value=""
            style={{"display": "none"}}
            tabIndex="-1"
            autoComplete="off"
          />
          <label>
            Name
            <input type="text" name="name" onChange={this.handleOnChange} value={this.state.name} required />
          </label>
          <label>
            Email
            <input type="email" name="replyTo" onChange={this.handleOnChange} value={this.state.replyTo} required />
          </label>
          <label>
            Message:
            <textarea name="message" required onChange={this.handleOnChange} value={this.state.message} />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default Contact;
//
// export const pageQuery = graphql`
//   query WorkQuery {
//     allWordpressWpProject {
//       edges {
//         node {
//           title
//           slug
//           categories {
//             name
//           }
//           featured_media {
//             source_url
//           }
//         }
//       }
//     }
//   }
// `;
