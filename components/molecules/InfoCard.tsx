import React from "react";
import ImageAtom from "../atoms/ImageCard";
import TitleAtom from "../atoms/TittleCard";
import TextAtom from "../atoms/TextCard";

type InfoCardProps = {
    image: string;
    title: string;
    text: string;
};

export default function InfoCard({ image, title, text }: InfoCardProps) {
    return (
        <div style={{
            width: 300,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <ImageAtom src={image} alt={title} />
            <TitleAtom text={title} />
            <TextAtom text={text} />
        </div>
    );
}


