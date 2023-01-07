import {ActionIcon, Card, Container, LoadingOverlay, SimpleGrid, Skeleton, Text, TextInput, useMantineTheme} from "@mantine/core";
import {IconSearch} from "@tabler/icons";
import React, {useEffect} from "react";
import SearchDisplay from "../components/SearchDisplay";
import axios from "axios";
import {UserResult} from "../types/users";
import {showNotification} from "@mantine/notifications";
import CardLoader from "../components/CardLoader";

export const fetchConfig = {
  headers: {
    authorization: `token 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`
  }
}

export default function IndexPage() {
  const theme = useMantineTheme();
  const [searchQuery, setSearch] = React.useState('');
  const [submittedString, setSubmittedString] = React.useState('');
  const [activePage, setPage] = React.useState(1);
  const [results, setResults] = React.useState<Array<UserResult>>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [totalResults, setTotalresults] = React.useState<number>(0);


  useEffect(() => {
    async function updateDataOnPaginate() {
      try {
        if (submittedString.length > 0) {
          const response: any = await axios.get("https://api.github.com/search/users?q=" + submittedString + `&page=${activePage}`, fetchConfig);
          const users = response.data.items;
          setResults(current => users);
          setTotalresults(response.data.total_count);
        } else {
          console.log('Initial Load 🚀')
        }
      } catch (error: any) {
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

    updateDataOnPaginate();

  }, [activePage, submittedString])


  const handleSubmit = () => {
    setLoading(true);
    setSubmittedString(searchQuery);
    setLoading(false);
  }

  const handlePaginate = async (page: number) => {
    console.log('Getting page: ', page);
    setLoading(true);
    setPage(page);
    setLoading(false);
  }

  return (
    <Container size="xl">
      <TextInput
        size="md"
        mb={18}
        rightSection={
          <ActionIcon size={32} color={theme.primaryColor} variant="filled" onClick={handleSubmit}>
            <IconSearch size={18} stroke={1.5} />
          </ActionIcon>
        }
        placeholder="Search for Github users"
        rightSectionWidth={42}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      {(loading === true) ? (
        <CardLoader />
      ) : (
        <SearchDisplay handlePaginate={handlePaginate} totalCount={Math.ceil(totalResults / 30)} results={results} />
      )}

    </Container>
  );
}
