import {ActionIcon, Container, Text, TextInput, useMantineTheme} from "@mantine/core";
import {IconSearch} from "@tabler/icons";

export default function IndexPage() {
  const theme = useMantineTheme();
  return (
    <Container size="xl">
      <TextInput
        size="md"
        rightSection={
          <ActionIcon size={32} color={theme.primaryColor} variant="filled">
            <IconSearch size={18} stroke={1.5} />
          </ActionIcon>
        }
        placeholder="Search for Github users"
        rightSectionWidth={42}
      />
    </Container>
  );
}
