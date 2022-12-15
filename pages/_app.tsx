import {useState} from "react";
import {AppProps} from "next/app";
import Head from "next/head";
import {MantineProvider, ColorSchemeProvider, ColorScheme} from "@mantine/core";
import {MainAppShell} from "./components/MainAppShell";

export default function App(props: AppProps) {
  const {Component, pageProps} = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme
          }}
        >
          <MainAppShell>
            <Component {...pageProps} />
          </MainAppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
