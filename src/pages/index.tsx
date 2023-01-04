import {ActionIcon, Card, Container, LoadingOverlay, SimpleGrid, Skeleton, Text, TextInput, useMantineTheme} from "@mantine/core";
import {IconSearch} from "@tabler/icons";
import React from "react";
import SearchDisplay from "../components/SearchDisplay";
import axios from "axios";
import {UserResult} from "../types/users";
import {showNotification} from "@mantine/notifications";

export default function IndexPage() {
  const theme = useMantineTheme();
  const [searchQuery, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [results, setResults] = React.useState<Array<UserResult>>([]);
  const [loading, setLoading] = React.useState<boolean>(false);



  const handleQuery = async () => {
    try {
      setLoading(true);
      const response: any = await axios.get("https://api.github.com/search/users?q=" + searchQuery + `&page=${page}`);
      const users = response.data.items;
      console.log(response);
      setResults(users);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 422) {
        showNotification({
          title: "Error",
          message: "Please enter a valid search query",
          color: "red",
        })
      } else {
        showNotification({
          title: "Error",
          message: "Something went wrong. Please try again later",
          color: "red",
        })
      }
    }
  }

  return (
    <Container size="xl">
      <TextInput
        size="md"
        mb={18}
        rightSection={
          <ActionIcon size={32} color={theme.primaryColor} variant="filled" onClick={handleQuery}>
            <IconSearch size={18} stroke={1.5} />
          </ActionIcon>
        }
        placeholder="Search for Github users"
        rightSectionWidth={42}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {(loading === true) ? (
        <Loader />
      ) : (
        <SearchDisplay results={results} />
      )}

    </Container>
  );
}

const Loader = () => {
  return (
    <SimpleGrid cols={4}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => (
        <Card key={index} withBorder radius="md" >
          <Skeleton height={50} circle mb="xl" />
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
          <Skeleton height={8} mt={6} width="70%" radius="xl" />
        </Card>
      ))}
    </SimpleGrid>
  )
}
