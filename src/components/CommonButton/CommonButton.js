import { Button } from "@mui/material";

export default function CommonButton(props) {
    return (
        <Button variant="contained" sx={props.sx} onClick={props.onClick} >
            {props.children}
        </Button>
    );
}
