import { Box, Typography } from "@mui/material";
import mainLogo from "../../assets/imgs/secretenergycandleslogo.png";
import aboutUsImg from "../../assets/imgs/IMG_8771.jpg";
import shopImg from "../../assets/imgs/IMG_8777.jpg";
import blogImg from "../../assets/imgs/IMG_8727.jpg";
import { styledHome } from "./styles";
import { aboutUsTextShort } from "../../components/consts/aboutUsText";
import { shopText } from "../../components/consts/shopText";
import { blogText } from "../../components/consts/blogText";
import CommonButton from "../../components/CommonButton/CommonButton";

import { useNavigate } from "react-router-dom";
import { navbarItems } from "../../components/consts/navbarItems";

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
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
                        {aboutUsTextShort}
                    </Typography>
                    <CommonButton
                        sx={styledHome.buttons}
                        onClick={() => navigate(navbarItems[1].path)}
                    >
                        ler mais
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
                            onClick={() => navigate(navbarItems[2].path)}
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
                        onClick={() => navigate(navbarItems[4].path)}
                    >
                        ler blog
                    </CommonButton>
                </Box>
            </Box>
        </>
    );
}
