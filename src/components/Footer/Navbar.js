import smallLogo from "../../assets/imgs/Icon_Home.png";
import {
    ListItemButton,
    Box,
    ListItem,
    ListItemText,
    IconButton,
    Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styledNavbar } from "./styles";
import { navbarItems } from "../consts/navbarItems";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <Box sx={styledNavbar.navbar}>
            <Box sx={styledNavbar.container}>
                <img style={styledNavbar.logo} src={smallLogo} alt="" />
                <ListItem>
                    {navbarItems.map((item, index) => (
                        <ListItemButton
                            key={item.id}
                            sx={styledNavbar.button}
                            onClick={()=>navigate(item.path)}
                        >
                            <ListItemText>{item.label}</ListItemText>
                        </ListItemButton>
                    ))}
                </ListItem>
                <IconButton aria-label="cart">
                    <Badge badgeContent={5} color="secondary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <IconButton aria-label="username">
                    <Badge color="secondary">
                        <PersonIcon />
                    </Badge>
                </IconButton>
            </Box>
        </Box>
    );
}
