import { useState } from "react";
import emailjs from "emailjs-com";
import { ContactDetails } from "../constants/contactDetails";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { FacebookOutlined, Twitter, YouTube } from "@mui/icons-material";

const initialState = {
    name: "",
    email: "",
    message: "",
};

export default function Contact () {
    const [{ name, email, message }, setState] = useState(initialState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(name, email, message);
        emailjs
            .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
            .then(
                (result: any) => {
                    console.log(result.text);
                    clearState();
                },
                (error: any) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Get In Touch</h2>
                                <p>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                                </p>
                            </div>
                            <form name="sentMessage"  onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows={4}
                                        placeholder="Message"
                                        required
                                        onChange={handleChange}
                                    ></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-custom btn-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                    <h3>Contact Info</h3>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <LocationOnIcon fontSize="medium"/> Address
                                </span>
                                {ContactDetails.address}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <LocalPhoneIcon/> Phone
                                </span>{" "}
                                {ContactDetails.phone}
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <MailIcon/> Email
                                </span>{" "}
                                {ContactDetails.email}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href={ContactDetails.facebook}>
                                            <FacebookOutlined style={{color: 'white', fontSize:'50px'}}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ContactDetails.twitter}>
                                            <Twitter style={{color: 'white', fontSize:'50px'}}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ContactDetails.youtube}>
                                            <YouTube style={{color: 'white', fontSize:'50px'}}/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p style={{color: 'black', fontWeight: 'bold'}}>
                        &copy; 2023 AGRAINEXUS
                    </p>
                </div>
            </div>
        </div>
    );
};
