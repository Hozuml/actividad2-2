import { Flex } from "antd";
import NavButton from "../atoms/NavButton";

export default function NavButtons() {
    return (
        <div style={{ display: "flex", gap: "1rem"  }}>
            <NavButton label="Browse" />
            <NavButton label="My Learning" />
            <NavButton label="Wishlist" />
        </div>
    );
}
