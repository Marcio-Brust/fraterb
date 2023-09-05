"use client";
import Image from "next/image";
import ct from "../../public/assets/Image/contraTerrorista.png";
import tr from "../../public/assets/Image/terrorista.jpg";
import player from "../../public/assets/Image/palyer.png";
import inferno from "../../public/assets/Image/mapaInferno.jpeg";
import { useEffect, useState } from "react";

export default function Home() {
  const [segundo, setSegundo] = useState(0);
  const [milesimo, setMilesimo] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full bg-bgprimary bg-opacity-90 h-hplay text-primary -mt-24 absolute   grid items-center justify-center ">
        <div className="flex items-center justify-center gap-5 ">
          <h1 className="text-red-600 text-5xl animate-pulse">Ao vivo</h1>
          <p className="text-base text-primary ">00:00:00</p>
        </div>
        <div className="flex items-center gap-7 justify-between">
          <div className="grid gap-6 justify-items-end">
            <div className="flex items-center gap-5">
              <p className="text-lg">Contra terrorista</p>
              <Image
                className="rounded-full "
                src={ct}
                width={40}
                priority={true}
                alt="contra_terrorista"
              />
            </div>
            <h1 className="text-4xl font-bold">Team Tibau</h1>
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
          <main className="text-center mt-2">
            <h1 className="text-4xl font-bold mb-3">Mapa Inferno</h1>
            <Image src={inferno} width={500} priority={true} alt="mapa" />
          </main>
          <div className="grid gap-6 justify-items-start">
            <div className="flex items-center gap-5">
              <Image
                className="rounded-full "
                src={tr}
                width={36}
                priority={true}
                alt="terrorista"
              />
              <p className="text-lg">Terrorista</p>
            </div>
            <h1 className="text-4xl font-bold">Team Jamal</h1>
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
