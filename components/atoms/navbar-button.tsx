import React from "react";
import { Button, Flex } from 'antd';


export default function navbarButton() {
    return (
        <Flex gap="small">
            <Button type="link">Browse</Button>
            <Button type="link">My Learning</Button>
            <Button type="link">Wishlist</Button>
        </Flex>
    )
}