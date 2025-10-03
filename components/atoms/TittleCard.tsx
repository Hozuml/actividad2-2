import React from "react";

type TitleAtomProps = { text: string };


export default function TitleAtom({ text }: TitleAtomProps) {
    return <h3 style={{ margin: 0 }}>{text}</h3>;
}