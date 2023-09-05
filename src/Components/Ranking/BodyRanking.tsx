"use client";
import React, { useState } from "react";
import { Seasons } from "@/Ultils/Hooks/FakeApi";
import { Data } from "@/Ultils/Hooks/FakeApi";
import ak47 from "../../../public/assets/Image/ak-47.png";
import player from "../../../public/assets/Image/palyer.png";
import skull from "../../../public/assets/Image/caveira.png";
import assist from "../../../public/assets/Image/assist.png";
import flash from "../../../public/assets/Image/flashbang.png";
import trophy from "../../../public/assets/Image/trophy.png";
import rating from "../../../public/assets/Image/rating.png";
import eu from "../../../public/assets/Image/fotoTest.jpeg";
import Image from "next/image";

export const BodyRanking = () => {

  
  const [search, setSearch] = useState("");

  const filteredRepos =
    search.length > 0 ? Data.filter((data) => data.user.includes(search)) : [];

  return (
    <main className="grid justify-center  w-full mb-20 grid-rows-main ">
      <div className=" flex justify-between mt-7 mb-7 items-center max-w-myWidth w-full">
        <select className="duration-transitionDuration max-laptop:w-40 w-72 h-10 bg-bgsecondary outline-none p-2 text-primary rounded border-solid border-transparent hover:border-2 hover:border-secondary border-2 opacity-95">
          {Seasons.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input
          className="duration-transitionDuration text-primary max-laptop:w-40 w-72 h-10 bg-bgsecondary outline-none p-2 placeholder:text-primary rounded border-solid border-transparent hover:border-2 hover:border-secondary border-2 opacity-95"
          type="text"
          name="seatch"
          placeholder="Buscar..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value.length <= 1
                ? e.target.value.toUpperCase()
                : e.target.value
            )
          }
        />
      </div>
      <table className="h-auto w-full max-w-myWidth opacity-95">
        <thead>
          <tr className="bg-secondary text-primary font-medium text-base">
            <th className="w-3"></th>
            <th className="w-3"></th>
            <th className="w-celtable">
              <div className="flex items-center justify-center  gap-2 py-2 ">
                <Image src={player} width={20} priority={true} alt="player" />{" "}
                Jogador
              </div>
            </th>
            <th className="w-celtable">
              <div className="flex items-center justify-center  gap-2 ">
                <Image src={trophy} width={20} priority={true} alt="player" />{" "}
                Vitorias
              </div>
            </th>
            <th className="w-40 max-tablet:hidden">
              <div className="flex items-center justify-center  gap-2 ">
                <Image src={ak47} width={20} priority={true} alt="player" />
                Matou
              </div>
            </th>
            <th className="w-40 max-laptop:hidden">
              <div className="flex items-center justify-center  gap-2  ">
                <Image src={skull} width={20} priority={true} alt="player" />{" "}
                Morreu
              </div>
            </th>
            <th className="w-celtable max-laptop:hidden">
              <div className="flex items-center justify-center  gap-2 ">
                <Image src={assist} width={20} priority={true} alt="player" />{" "}
                Assistencias
              </div>
            </th>
            <th className="w-celtable max-desktopsmall:hidden">
              <div className="flex items-center justify-center  gap-2 ">
                <Image src={flash} width={20} priority={true} alt="player" />{" "}
                Flashbang
              </div>
            </th>
            <th className="w-celtable max-desktop:hidden">
              <div className="flex items-center justify-center  gap-2  ">
                🚀 Rounds
              </div>
            </th>
            <th className="w-celtable max-desktop:hidden">
              <div className="flex items-center justify-center  gap-2  ">
                <Image src={rating} width={20} priority={true} alt="player" />{" "}
                Rating
              </div>
            </th>
          </tr>
        </thead>
        {search.length > 0
          ? filteredRepos.map((data, index) => (
              <tbody
                key={data.user}
                onClick={(e) => {
                  const td = Array.from(e.currentTarget.querySelectorAll("td"));
                  const Arraytd = td.map((item) => item);
                  if (e.target === Arraytd[2]) {
                  }
                }}
              >
                <tr
                  className={`text-center text-primary h-10 hover:bg-tertiary  ${
                    index % 2 === 0 ? "bg-bgprimary" : "bg-bgsecondary"
                  }`}
                >
                  <td className={` w-10 `}>{`${index + 1}º`}</td>
                  <td className={` w-5 `}>
                    <Image
                      src={eu}
                      width={20}
                      priority={true}
                      alt="img jogador"
                    />
                  </td>

                  <td className={` w-celtable`}>{data.user.toUpperCase()}</td>
                  <td className={` w-celtable`}>{data.total_wins}</td>
                  <td className={` w-celtable max-tablet:hidden`}>
                    {data.kills}
                  </td>
                  <td className={` w-celtable max-laptop:hidden`}>
                    {data.deaths}
                  </td>
                  <td className={` w-celtable max-laptop:hidden`}>
                    {data.assists}
                  </td>
                  <td className={` w-celtable max-desktopsmall:hidden`}>
                    {data.flashbang_assists}
                  </td>
                  <td className={` max-desktop:hidden w-celtable`}>
                    {data.total_rounds_played}
                  </td>
                  <td className={` max-desktop:hidden w-celtable `}>
                    {data.rating}
                  </td>
                </tr>
              </tbody>
            ))
          : Data.map((data, index) => (
              <tbody
                key={data.user}
                onClick={(e) => {
                  const td = Array.from(e.currentTarget.querySelectorAll("td"));
                  const Arraytd = td.map((item) => item);
                  if (e.target === Arraytd[2]) {
                  }
                }}
              >
                <tr
                  className={`text-center text-primary   hover:bg-tertiary ${
                    index % 2 === 0 ? "bg-bgprimary" : "bg-bgsecondary"
                  } `}
                >
                  <td className={` w-10 `}>{`${index + 1}º`}</td>
                  <td className={`w-5`}>
                    <Image
                      src={eu}
                      width={20}
                      priority={true}
                      alt="img jogador"
                    />
                  </td>
                  <td className={`w-celtable`}>{data.user.toUpperCase()}</td>
                  <td className={` w-celtable`}>{data.total_wins}</td>
                  <td className={`w-celtable max-tablet:hidden`}>
                    {data.kills}
                  </td>

                  <td
                    className={`
                     
                     w-celtable max-laptop:hidden`}
                  >
                    {data.deaths}
                  </td>
                  <td className={`w-celtable max-laptop:hidden`}>
                    {data.assists}
                  </td>
                  <td className={`w-celtable max-desktopsmall:hidden`}>
                    {data.flashbang_assists}
                  </td>
                  <td className={`max-desktop:hidden w-celtable`}>
                    {data.total_rounds_played}
                  </td>
                  <td className={`max-desktop:hidden w-celtable`}>
                    {data.rating}
                  </td>
                </tr>
              </tbody>
            ))}
      </table>
    </main>
  );
};
