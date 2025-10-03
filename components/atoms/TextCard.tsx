import React from "react";

type TextAtomProps = { text: string };


export default function TextAtom({ text }: TextAtomProps) {
    return <p style={{ margin: 0 }}>{text}</p>;
}
