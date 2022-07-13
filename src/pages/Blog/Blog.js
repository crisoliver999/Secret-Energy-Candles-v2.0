import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CommonButton from "../../components/CommonButton/CommonButton";
import SummaryPost from "../../components/SummaryPost/SummaryPost";

import logo from "../../assets/imgs/secretenergycandleslogo.png";
import "../../assets/css/style.css";

export default function Blog() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const increaseCount = () => setPage(page + 1);
    const decreaseCount = () => setPage(page - 1);
    return (
        <>
            <Box id="overlay"></Box>
            <Box id="home" className="home blog">
                <img
                    src={logo}
                    alt="secret energy candles logo"
                    id="main-logo"
                />
            </Box>

            <Box className="img-carousel container"></Box>
            <Box className="blog-links container">
                <Box className="blog-link1">
                    <Link to="blog/blog-velas">
                        <h2 className="content-title">as nossas velas</h2>
                    </Link>
                </Box>
                <Box className="blog-link2">
                    <Link to="/shop">
                        <h2 className="content-title">loja</h2>
                    </Link>
                </Box>
                <Box className="blog-link3">
                    <a href="blog/blog-pedras">
                        <h2 className="content-title">as pedras</h2>
                    </a>
                </Box>
            </Box>

            <Box id="featured">
                {data.map((post) => (
                    <SummaryPost img={post.img} title={post.title}>
                        {post.shortPost}
                    </SummaryPost>
                ))}
            </Box>
            <Box id="blog-nav">
                <CommonButton onClick={decreaseCount} disabled={page===1 ? true : false}>
                    <span className="chevron left"></span>
                </CommonButton>
                <Typography paragraph id="page-nav">
                    {page}
                </Typography>
                <CommonButton onClick={increaseCount}>
                    <span className="chevron right"></span>
                </CommonButton>
            </Box>
        </>
    );
}
