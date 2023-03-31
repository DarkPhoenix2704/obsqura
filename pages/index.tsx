import HomeView from "@app/views/HomeView";
import Launch from "@app/views/Launch";
import { VStack } from "@chakra-ui/react";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("launch");
  return (
    <>
      <Head>
        <title>Obsqura 23</title>
        <meta
          name="description"
          content="Obsqura '23 is the annual techno-cultural fest of Ilahia College of Engineering and Technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <VStack backgroundColor="#000000">
        <AnimatePresence mode="wait" initial={false}>
          {view === "launch" ? <Launch onClick={setView} /> : <HomeView />}
        </AnimatePresence>
      </VStack>
    </>
  );
}
