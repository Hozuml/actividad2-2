import React from 'react';
import { Button, Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';


export default function IconButton() {
    return (
        <Flex gap="small" wrap>
            <Button type="text">Log in</Button>
            <Space direction="vertical" size={16}>
                <Space wrap size={16}>
                    <Avatar size="small" icon={<UserOutlined />} />
                </Space>
            </Space>
        </Flex>
    );
}