import {
  Text,
  Strong,
  Pane,
  Button,
  SearchIcon,
  TextInput,
  ShoppingCartIcon,
  Badge,
  UnorderedList,
  ListItem,
  LogInIcon,
  UserIcon,
  Menu,
  Popover,
  KeyIcon,
  HomeIcon,
} from 'evergreen-ui';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar({
  search,
  cartItemCount,
  cartTotalFormatted,
  handleSearch,
}) {
  const [searchValue, setSearchValue] = useState(search);

  return (
    <nav>
      <Pane
        display="flex"
        alignItems="center"
        width="100vw"
        paddingY={12}
        background="#111827"
      >
        <UnorderedList
          display="flex"
          listStyle="none"
          flex="1 1 auto"
        >
          <ListItem marginX={20} marginBottom={0}>
            <Strong fontSize={32} color="white">
              <Link href="/">Shop</Link>
            </Strong>
          </ListItem>
          <ListItem marginX={20} marginBottom={0}>
            <Text color="white">
              <Link href="/about">About Us</Link>
            </Text>
          </ListItem>
        </UnorderedList>
        <Pane display="flex" flex="1 1 auto" justifyItems="flex-end">
          <TextInput
            name="search"
            placeholder="Search shop"
            height={36}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            onChange={e => setSearchValue(e.target.value)}
          ></TextInput>
          <Link href="/search" passHref>
            <Button
              appearance="primary"
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              height={36}
              onClick={event => handleSearch(searchValue)}
            >
              <SearchIcon height={36} width={40} />
            </Button>
          </Link>
        </Pane>
        <Pane flex="0">
          <Popover
            content={
              <Menu>
                <Menu.Group>
                  <Link href="/" passHref>
                    <Menu.Item icon={HomeIcon}>Home</Menu.Item>
                  </Link>
                  <Link href="login" passHref>
                    <Menu.Item icon={LogInIcon}>Login</Menu.Item>
                  </Link>
                  <Link href="register" passHref>
                    <Menu.Item icon={KeyIcon}>Register</Menu.Item>
                  </Link>
                </Menu.Group>
              </Menu>
            }
          >
            <Button appearance="minimal" height={40}>
              <UserIcon color="white" size={32} />
            </Button>
          </Popover>
        </Pane>
        <Pane
          display="flex"
          justifyContent="space-around"
          width={260}
        >
          <Pane display="flex" alignItems="center" justifyItems="center">
            <ShoppingCartIcon color="white" size={32} />
            <Badge
              borderRadius={'50%'}
              marginLeft={-5}
              marginTop={-20}
              paddingTop={2}
              width={20}
              height={20}
            >
              <Text fontSize={16} fontWeight={'bold'} color="#474543">
                {cartItemCount}
              </Text>
            </Badge>
            <Text marginLeft={12} fontSize={30} color="white">
              {cartTotalFormatted}
            </Text>
          </Pane>
        </Pane>
      </Pane>
    </nav>
  );
}
