import BorderLayout from "@/components/borderLayout";
import Name from "@/components/name";
import MusicPlayer from "@/components/musicPlayer";
import Temporizador from "@/components/temporizador";
import FirstThanks from "@/components/firstThanks";
import Parents from "@/components/parents";
import Date from "@/components/date";
import SeconThanks from "@/components/secondThanks";
import Reception from "@/components/reception";
import Assistance from "@/components/assistance";
import DressCode from "@/components/dressCode";
import Dedication from "@/components/dedication";
import Farewell from "@/components/farewell";

export default function Home() {

  return (

    <>
      <BorderLayout />
      <main>
        <Name />
        <Temporizador />
        <MusicPlayer
          audioUrl="/music/ven_baila_quinceaniera_nicole_pillman.mp3"
          songTitle="Ven Baila Quinceañera"
          artist="Nicole Pilman"
        />
        <FirstThanks />
        <Parents />
        <Date />
        <SeconThanks />

        <Reception />
        <Assistance />
        <DressCode />
        <Dedication />
        <Farewell />
      </main>
    </>
  );
}
