import { BodyRanking } from "@/Components/Ranking/BodyRanking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FRATERB - RANKING",
  description: "Grupo de amigos",
};

export default function Ranking() {
  return (
    <>
      <BodyRanking></BodyRanking>;
    </>
  );
}
