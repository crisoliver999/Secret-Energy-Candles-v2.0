import React, { useState } from "react";

import { Box, Typography } from "@mui/material";
import CommonButton from "../../components/CommonButton/CommonButton";

import shopImg from "../../assets/imgs/IMG_8731.jpg";
import ShopItem from "../../components/ShopItem/ShopItem";

export default function Shop() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const increaseCount = () => setPage(page + 1);
    const decreaseCount = () => setPage(page - 1);

    return (
        <Box>
            <Box id="shop" className="container">
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
                <ShopItem name="candle test" price="€9.99" image={shopImg} />
            </Box>
            <Box id="blog-nav">
                <CommonButton
                    onClick={decreaseCount}
                    disabled={page === 1 ? true : false}
                >
                    <span className="chevron left"></span>
                </CommonButton>
                <Typography paragraph id="page-nav">
                    {page}
                </Typography>
                <CommonButton onClick={increaseCount}>
                    <span className="chevron right"></span>
                </CommonButton>
            </Box>
        </Box>
    );
}
