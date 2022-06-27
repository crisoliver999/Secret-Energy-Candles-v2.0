import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function SummaryPost(props) {
    return (
        <Box className="featured-post container">
            <img
                src={props.img}
                alt={props.imgAlt}
                className="featured-post-img"
            />
            <div className="section-content">
                <h2 className="section-title">{props.title}</h2>
                <p>
                    {props.children}
                    </p>
                <Link
                    to=""
                    id="post-${postCount}"
                    className="btn"
                    onClick="openPost(${post.id})"
                >
                    ler mais
                </Link>
            </div>
        </Box>
    );
}
