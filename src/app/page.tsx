import BorderLayout from "@/components/borderLayout";
import Name from "@/components/name";
import MusicPlayer from "@/components/musicPlayer";


export default function Home() {
  return (

    <>
      <BorderLayout />
      <main>
        <Name />
        <MusicPlayer
          audioUrl="/music/ven_baila_quinceaniera_nicole_pillman.mp3"
          songTitle="Ven Baila Quinceañera"
          artist="Nicole Pilman" 
          />
      </main>
    </>
  );
}
