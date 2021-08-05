import { useState } from "react";
import { RightNav } from "../RightNav";
import { StyledBurguer } from "./styles";


export function Burguer() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurguer open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurguer>
            <RightNav open={open} />
        </>
    )
}