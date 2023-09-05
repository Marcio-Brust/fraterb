import Image from "next/image";
import ct from "../../public/assets/Image/contraTerrorista.png";
import tr from "../../public/assets/Image/terrorista.jpg";
import player from "../../public/assets/Image/palyer.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full bg-transparent h-96 -mt-24 absolute border-solid border-red-600 border grid items-center justify-center">
        <div className="flex items-center justify-center gap-5 ">
          <h1 className="text-red-600 text-5xl">Ao vivo</h1>
          <p className="text-3xl ">00:00</p>
        </div>
        <div className="flex items-center w-96 justify-between">
          <div className="grid gap-6 ">
            <Image
              className="rounded-full  my-0 mx-auto"
              src={ct}
              width={40}
              priority={true}
              alt="contra_terrorista"
            />
            <h1>Team Tibau</h1>
            <div className="flex items-center gap-1">
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
            </div>
          </div>
          <main></main>
          <div className="grid gap-6">
            <Image
              className="rounded-full my-0 mx-auto"
              src={tr}
              width={36}
              priority={true}
              alt="terrorista"
            />
            <h1>Team Jamal</h1>
            <div className="flex items-center gap-1">
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
              <span>
                {" "}
                <Image
                  className="bg-black"
                  src={player}
                  width={20}
                  priority={true}
                  alt="player"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
