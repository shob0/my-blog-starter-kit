import React, { useReducer } from "react"
import "./contact.css"

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "I want to connect with you!!",
  message: "How you doing.\nPlease contact me on given info.",
  status: "IDLE",
}

const reducer = (INITIAL_STATE, action) => {
  switch (action.type) {
    case "updateFiledValue":
      return {
        ...INITIAL_STATE,
        [action.field]: action.value,
      }
    case "updateStatus":
      return {
        ...INITIAL_STATE,
        status: action.status,
      }
    default:
      return INITIAL_STATE
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const setStatus = status => {
    dispatch({ type: "updateStatus", status: status })
  }

  const updateFieldValue = field => event => {
    dispatch({ type: "updateFiledValue", field, value: event.target.value })
  }

  const handlerSubmit = event => {
    setStatus("PENDING")
    event.preventDefault()

    const body = `<div style="text-align: center"><h1>${state.subject}</h1>.<p> You are amazing. Now Check this: </p> <p><b>${state.name}</b> wants to get in touch with you. His email is <b>${state.email}</b>. He also left a message for you: <i>${state.message}</i></p>
    <p>healthyU</p></div>`

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(response => response.json())
      .then(response => {
        setStatus("SUCCESS")
        setTimeout(() => {
          setStatus("IDLE")
          dispatch({ type: "RESET" })
        }, 3000)
      })
      .catch(error => {
        setStatus("ERROR")
      })
  }

  if (state.status === "SUCCESS") {
    return <p className="success">Congratulation!! Message Sent</p>
  }

  return (
    <>
      {state.status === "ERROR" && (
        <p className="error">Something Went Wrong! Please try again</p>
      )}
      <div
        id="contact"
        className={`${state.status === "PENDING" && "pending"}`}
      >
        <div className="contact-left-div">
          <div className="flexbox">
            <h3>CONTACT</h3>
          </div>
          <div className="own-address">
            <span>Shobhit5@hotmail.com</span>
          </div>
          <div className="own-address">
            <span>+31 644477939</span>
          </div>
        </div>
        <form onSubmit={handlerSubmit}>
          <div className="contact-right-div">
            <label className="contact-label">
              <input
                className="contact-input"
                type="name"
                aria-label="name"
                placeholder="Name"
                required={true}
                value={state.name}
                onChange={updateFieldValue("name")}
              />
            </label>
            <label className="contact-label">
              <input
                className="contact-input"
                type="email"
                aria-label="name"
                placeholder="Email"
                required={true}
                value={state.email}
                onChange={updateFieldValue("email")}
              />
            </label>

            <label className="contact-label">
              <input
                className="contact-input"
                type="text"
                aria-label="name"
                placeholder="Subject"
                required={true}
                value={state.subject}
                onChange={updateFieldValue("subject")}
              />
            </label>
            <label className="contact-label">
              <textarea
                style={{ marginTop: "20px", height: "100px" }}
                className="contact-input"
                type="email"
                aria-label="name"
                placeholder="Message"
                required={true}
                value={state.message}
                onChange={updateFieldValue("message")}
              />
            </label>
            <div className="flexbox" style={{ alignItems: "start" }}>
              <button type="submit" className="contact-form-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactForm
