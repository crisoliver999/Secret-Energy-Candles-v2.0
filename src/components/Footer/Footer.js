import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box>
            <Box className="container">
                <Box className="footer-left">
                    <Link to="#" className="tandc-btn">
                        termos e condições
                    </Link>
                </Box>
                <Box className="footer-center">
                    <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        rel="noopener nonreferrer"
                        className="sm-link"
                    >
                        <img
                            src="./imgs/Instagram.png"
                            alt="instagram"
                            id="instagram"
                        />
                    </Link>
                    <Link
                        to="https://www.facebook.com/Secret-energy-candle-104733131745775"
                        target="_blank"
                        rel="noopener nonreferrer"
                        className="sm-link"
                    >
                        <img
                            src="./imgs/Facebook.png"
                            alt="facebook"
                            id="facebook"
                        />
                    </Link>
                </Box>
                <Box className="footer-right">
                    <p className="payment-footer">métodos de pagamento</p>
                    <Box className="payment-logos">
                        <img src="./imgs/MBWay.png" alt="mbway" id="mbway" />
                        <img
                            src="./imgs/multibanco-e1599554768413.png"
                            alt="multibanco"
                            id="multibanco"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
