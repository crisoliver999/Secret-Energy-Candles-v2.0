import { Button } from "@mui/material";

export default function CommonButton(props) {
    return (
        <Button variant="contained" sx={props.sx} onClick={props.onClick} disabled={props.disabled} >
            {props.children}
        </Button>
    );
}
