import BorderLayout from "@/components/borderLayout";
import Name from "@/components/name";
import MusicPlayer from "@/components/musicPlayer";
import Temporizador from "@/components/temporizador";
import FirstThanks from "@/components/firstThanks";


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
      </main>
    </>
  );
}
