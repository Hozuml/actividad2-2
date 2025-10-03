import React from "react";
import { Button } from "antd";


type NavButtonProps = {
    label: string;
    onClick?: () => void;
};

export default function NavButton({ label, onClick }: NavButtonProps) {
    return (
        <Button type="link" onClick={onClick} style={{ fontSize: "1rem" }}>
            {label}
        </Button>
    );
}