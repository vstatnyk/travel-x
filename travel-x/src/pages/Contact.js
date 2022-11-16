import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_kk6m644",
        "template_2p233z3",
        form.current,
        "-kb53h4fwoyf_X3ig"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    sendEmail(e);
    setNameValue("");
    setEmailValue("");
    setSubjectValue("");
    setMessageValue("");
  };

  return (
    <div>
      {/* <h1 className="ContactHeader">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className = "row" style = {{ margin: "25px 85px 75px 100px"}}>
        <label>Name:</label>
        <input type="text" name="user_name" className = "form-control"/>
        <label>Email:</label>
        <input type="email" name="user_email" className = "form-control"/>
        <label>Subject:</label>
        <input type="text" name="subject" className = "form-control"/>
        <label>Message:</label>
        <textarea name="message" rows = "4" className="form-control" />
        <input type="submit" value="Send" className = "form-control btn btn-primary "/>
      </form> */}
      <Typography gutterBottom variant="h3" align="center">
        Contact Us
      </Typography>
      <Grid>
        <Card elevation={5} style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Send us an email.
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you as soon as possible.
            </Typography>
            <form ref={form} onSubmit={handleSubmit}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    placeholder="Enter Full Name"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="user_name"
                    value={nameValue}
                    onChange={(e) => { setNameValue(e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter Email Address"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="user_email"
                    value={emailValue}
                    onChange={(e) => { setEmailValue(e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Enter Subject"
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    required
                    name="subject"
                    value={subjectValue}
                    onChange={(e) => { setSubjectValue(e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    name="message"
                    value={messageValue}
                    onChange={(e) => { setMessageValue(e.target.value) }}
                  />
                </Grid>
                <Grid item xs={12} mb={-2}>
                  <Button
                    style={{ backgroundColor: 'burlywood' }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Contact;
