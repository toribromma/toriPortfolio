import React, {useState} from "react";
import Button from "../Button/Button"
export const Contact = (props) => {

    // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('toribromma@gmail.com');
    const [message, setMessage] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
       window.open(`mailto:${email}?subject=${subject}&body=Hi my name is ${name}. ${message}`);
     }

    return (
        <section id={props.id} style={{flexDirection:"column", backgroundColor: "black"}}>
            <div id="contactHeading">Contact me</div>
            <form id="contactForm" name="contactForm">
                <fieldset>
                <div>
						   <label id="contactLabel" htmlFor="contactName">Name <span aria-required >*</span></label>
						   <input value={name} type="text" defaultValue="" size="25" id="contactName" name="contactName" onChange={e => setName(e.target.value)}/>
                  </div>

                  {/* <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input value={email} type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={e=> setEmail(e.target.value)}/>
                  </div> */}

                  <div>
						   <label id="contactLabel" htmlFor="contactSubject">Subject</label>
						   <input value={subject} type="text" defaultValue="" size="25" id="contactSubject" name="contactSubject" onChange={e => setSubject(e.target.value)}/>
                  </div>

                  <div>
                     <label id="contactLabel" htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="25" rows="10" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button
                     style={{
                        backgroundColor: "black",
                        border: "transparent",
                        fontFamily: "Open Sans",
                        padding: "8px 20px",
                        margin: 5,
                        color: "white",
                        borderRadius: 2,
                        cursor: "pointer",
                        float: "right"
                    }}
                     type='submit' onClick={handleClick} className="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}