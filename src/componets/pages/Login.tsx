import { Box, Button, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, FC } from "react";

export const Login: FC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1">ユーザー管理アプリ</Heading>
        <Divider />
        <Input placeholder="ユーザーID" />
        <Button>ログイン</Button>
      </Box>
    </Flex>
  );
});
