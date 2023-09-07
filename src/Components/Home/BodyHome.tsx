"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ct from "../../../public/assets/Image/contraTerrorista.png";
import tr from "../../../public/assets/Image/terrorista.jpg";
import player from "../../../public/assets/Image/palyer.png";
import inferno from "../../../public/assets/Image/mapaInferno.jpeg";
import useMedia from "@/Ultils/Hooks/useMedia";

export const BodyHome = () => {
  const [closed, setClosed] = useState(true);
  const mobile = useMedia("(max-width:75rem)");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bgprimary bg-opacity-80">
      <section
        className={`  after:absolute after:w-24 after:h-9    w-full bg-bgprimary  h-hplay text-primary  absolute top-48 bg-opacity-96
        ${closed ? "hidden" : "grid"}  items-center justify-center  ${
          closed ? "-z-10 " : "animate-open z-10  "
        }      duration-transitionDuration`}
      >
        <div className="flex  items-center justify-center gap-5 ">
          <h1 className="text-red-600 text-2xl animate-pulse">Ao vivo</h1>
          <p className="text-base text-primary ">00:00:00</p>
        </div>
        <div className="flex  max-desktop:grid items-center  max-desktop:gap-4  gap-7 justify-between">
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-end"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5 ">
              {mobile ? (
                <>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                </>
              )}
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base ">
              Team Tibau
            </h1>
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
            <h1 className="text-4xl font-bold mb-3 max-desktop:text-lg">
              Mapa Inferno
            </h1>
            <div>
              <Image
                className="brightness-50"
                src={inferno}
                width={mobile ? 200 : 500}
                priority={true}
                alt="mapa"
              />
            </div>
          </main>
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-start"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5">
              <Image
                className="rounded-full "
                src={tr}
                width={mobile ? 18 : 36}
                priority={true}
                alt="terrorista"
              />
              <p className="text-lg max-desktop:text-sm">Terrorista</p>
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base">
              Team Jamal
            </h1>
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
      <button
        onClick={() => setClosed(!closed)}
        className={`absolute right-0 w-24 h-9 rounded-sm text-primary border-none top-24 bg-bgprimary duration-transitionDuration border-primary  ${
          closed ? "animate-closedbtn" : "animate-openbtn z-10"
        }`}
      >
        <p className={`${closed ? "animate-pulse text-red-600" : ""} `}>
          {closed ? "Ao vivo" : "Fechar"}
        </p>
      </button>
      <div className="grid gap-10 text-primary mt-12 p-10">
        <div className="flex  border-bgsecondary border-b  max-desktop:grid items-center  max-desktop:gap-4  gap-7 justify-between">
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-end"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5 ">
              {mobile ? (
                <>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                </>
              )}
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base ">
              Team Tibau
            </h1>
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
            <h1 className="text-4xl font-bold mb-3 max-desktop:text-lg">
              Mapa Inferno
            </h1>
            <div>
              <Image
                className="brightness-50"
                src={inferno}
                width={mobile ? 200 : 500}
                priority={true}
                alt="mapa"
              />
            </div>
            <h1 className="text-3xl mt-5">16 x 14</h1>
          </main>
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-start"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5">
              <Image
                className="rounded-full "
                src={tr}
                width={mobile ? 18 : 36}
                priority={true}
                alt="terrorista"
              />
              <p className="text-lg max-desktop:text-sm">Terrorista</p>
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base">
              Team Jamal
            </h1>
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
        <div className="flex  max-desktop:grid items-center  max-desktop:gap-4  gap-7 justify-between border-bgsecondary border-b">
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-end"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5 ">
              {mobile ? (
                <>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                </>
              )}
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base ">
              Team Tibau
            </h1>
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
            <h1 className="text-4xl font-bold mb-3 max-desktop:text-lg">
              Mapa Inferno
            </h1>
            <div>
              <Image
                className="brightness-50"
                src={inferno}
                width={mobile ? 200 : 500}
                priority={true}
                alt="mapa"
              />
            </div>
            <h1 className="text-3xl mt-5">16 x 14</h1>
          </main>
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-start"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5">
              <Image
                className="rounded-full "
                src={tr}
                width={mobile ? 18 : 36}
                priority={true}
                alt="terrorista"
              />
              <p className="text-lg max-desktop:text-sm">Terrorista</p>
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base">
              Team Jamal
            </h1>
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
        <div className="flex  max-desktop:grid items-center  max-desktop:gap-4  gap-7 justify-between border-bgsecondary border-b">
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-end"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5 ">
              {mobile ? (
                <>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                </>
              )}
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base ">
              Team Tibau
            </h1>
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
            <h1 className="text-4xl font-bold mb-3 max-desktop:text-lg">
              Mapa Inferno
            </h1>
            <div>
              <Image
                className="brightness-50"
                src={inferno}
                width={mobile ? 200 : 500}
                priority={true}
                alt="mapa"
              />
            </div>
            <h1 className="text-3xl mt-5">16 x 14</h1>
          </main>
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-start"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5">
              <Image
                className="rounded-full "
                src={tr}
                width={mobile ? 18 : 36}
                priority={true}
                alt="terrorista"
              />
              <p className="text-lg max-desktop:text-sm">Terrorista</p>
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base">
              Team Jamal
            </h1>
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
        <div className="flex  max-desktop:grid items-center  max-desktop:gap-4  gap-7 justify-between border-bgsecondary border-b">
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-end"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5 ">
              {mobile ? (
                <>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg max-desktop:text-sm">
                    Contra terrorista
                  </p>
                  <Image
                    className="rounded-full "
                    src={ct}
                    width={mobile ? 20 : 40}
                    priority={true}
                    alt="contra_terrorista"
                  />{" "}
                </>
              )}
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base ">
              Team Tibau
            </h1>
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
            <h1 className="text-4xl font-bold mb-3 max-desktop:text-lg">
              Mapa Inferno
            </h1>
            <div>
              <Image
                className="brightness-50"
                src={inferno}
                width={mobile ? 200 : 500}
                priority={true}
                alt="mapa"
              />
            </div>
            <h1 className="text-3xl mt-5">16 x 14</h1>
          </main>
          <div
            className={`grid max-desktop:gap-2 gap-6  ${
              mobile ? "justify-items-center" : "justify-items-start"
            }`}
          >
            <div className="flex items-center  max-desktop:gap-2 gap-5">
              <Image
                className="rounded-full "
                src={tr}
                width={mobile ? 18 : 36}
                priority={true}
                alt="terrorista"
              />
              <p className="text-lg max-desktop:text-sm">Terrorista</p>
            </div>
            <h1 className="text-4xl font-medium max-desktop:text-base">
              Team Jamal
            </h1>
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
      </div>
    </main>
  );
};
