import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import instagram from "../../assets/imgs/Instagram.png";
import facebook from "../../assets/imgs/Facebook.png";
import mbway from "../../assets/imgs/MBWay.png";
import multibanco from "../../assets/imgs/multibanco-e1599554768413.png";

import "../../assets/css/style.css";

export default function Footer() {
    return (
        <Box id="footer" className="footer light-pink">
            <Box className="container">
                <Box className="footer-left">
                    <Link to="/" className="tandc-btn">
                        termos e condições
                    </Link>
                </Box>
                <Box className="footer-center">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="sm-link"
                        rel="noreferrer"
                    >
                        <img src={instagram} alt="instagram" id="instagram" />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="sm-link"
                        rel="noreferrer"
                    >
                        <img src={facebook} alt="facebook" id="facebook" />
                    </a>
                </Box>
                <Box className="footer-right">
                    <Typography paragraph className="payment-footer">
                        métodos de pagamento
                    </Typography>
                    <Box className="payment-logos">
                        <img src={mbway} alt="mbway" id="mbway" />
                        <img
                            src={multibanco}
                            alt="multibanco"
                            id="multibanco"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
