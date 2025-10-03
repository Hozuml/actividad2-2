import React from "react";

type ImageAtomProps = { src: string; alt?: string };
export default function ImageAtom({ src, alt }: ImageAtomProps) {
    return <img src={src} alt={alt} style={{ width: "100%", borderRadius: 8 }} />;
}
