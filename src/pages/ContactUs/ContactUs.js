import { useState } from "react";

import { Box } from "@mui/material";

export default function ContactUs() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChanges = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setMessage({...message, [name]: value });
        console.log(message);
    };

    return (
        <Box id="contact-us" className="container">
            <h2 className="section-title-form">fale connosco</h2>
            <form className="contact-us" action="./new-message.php">
                <div className="name-email">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome*"
                        required=""
                        onChange={handleChanges}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail*"
                        required=""
                        onChange={handleChanges}
                    />
                </div>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Assunto"
                    onChange={handleChanges}
                />
                <br />
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Mensagem*"
                    required=""
                    onChange={handleChanges}
                ></textarea>
                <br />
                <input className="form-btn" type="submit" value="enviar" />
            </form>
        </Box>
    );
}
