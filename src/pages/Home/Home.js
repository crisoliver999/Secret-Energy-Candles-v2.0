import { Box, Typography } from "@mui/material";
import mainLogo from "../../assets/imgs/secretenergycandleslogo.png";
import aboutUsImg from "../../assets/imgs/IMG_8771.jpg";
import shopImg from "../../assets/imgs/IMG_8777.jpg";
import blogImg from "../../assets/imgs/IMG_8727.jpg";
import { styledHome } from "./styles";
import {
    aboutUsTextShort,
    aboutUsText,
} from "../../components/consts/aboutUsText";
import { shopText } from "../../components/consts/shopText";
import { blogText } from "../../components/consts/blogText";
import CommonButton from "../../components/CommonButton/CommonButton";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navbarItems } from "../../components/consts/navbarItems";

export default function Home() {
    const navigate = useNavigate();

    const [aboutUs, setAboutUs] = useState(false);

    return (
        <>
            <div id="overlay"></div>
            <Box sx={styledHome.logoBox}>
                <img style={styledHome.logoImg} src={mainLogo} alt="" />
            </Box>
            <Box sx={styledHome.homeBoxes}>
                <img style={styledHome.secundaryImg} src={aboutUsImg} alt="" />
                <Box sx={styledHome.textBoxes1}>
                    <Typography sx={styledHome.h2} variant="h2">
                        quem somos
                    </Typography>
                    <Typography sx={styledHome.p} paragraph>
                        {aboutUs ? aboutUsText : aboutUsTextShort}
                    </Typography>
                    <CommonButton
                        sx={styledHome.buttons}
                        onClick={() => setAboutUs(!aboutUs)}
                    >
                        {aboutUs ? "ler menos" : "ler mais"}
                    </CommonButton>
                </Box>
            </Box>
            <Box sx={styledHome.pinkBackground}>
                <Box sx={styledHome.homeBoxesRight}>
                    <img style={styledHome.secundaryImg} src={shopImg} alt="" />
                    <Box sx={styledHome.textBoxes2}>
                        <Typography sx={styledHome.p2} paragraph>
                            {shopText}
                        </Typography>
                        <CommonButton
                            sx={styledHome.buttons2}
                            onClick={() => navigate(navbarItems[1].path)}
                        >
                            loja
                        </CommonButton>
                    </Box>
                </Box>
            </Box>
            <Box sx={styledHome.homeBoxes}>
                <img style={styledHome.secundaryImg} src={blogImg} alt="" />
                <Box sx={styledHome.textBoxes1}>
                    <Typography sx={styledHome.h2} variant="h2">
                        as nossas velas
                    </Typography>
                    <Typography sx={styledHome.p} paragraph>
                        {blogText}
                    </Typography>
                    <CommonButton
                        sx={styledHome.buttons}
                        onClick={() => navigate(navbarItems[3].path)}
                    >
                        ler blog
                    </CommonButton>
                </Box>
            </Box>
        </>
    );
}
