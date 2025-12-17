import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useReadContract } from "wagmi";
import { useMyStates } from "../hooks/states";
import { Card } from "../components/card.jsx";
import { Background } from "../components/background.jsx";
import { Pinksquare } from "../components/pinksquare.jsx";
import "./record.css";
import { contract } from "../hooks/contracts";
export function Record() {
  const { lv, image } = useMyStates();
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(0);

  const {
    data: historyData,
    isLoading,
    isError,
    error,
  } = useReadContract({
    address: contract.address,
    abi: contract.abi,
    functionName: "get_history",
  });

  useEffect(() => {
    if (!Array.isArray(historyData)) return;

    const pet_LevelUri = historyData[0];
    lv = historyData[1];

    console.log("Pet Level URI:", pet_LevelUri);
    console.log("Level:", lv);

    const nftImageUrl = pet_LevelUri?.uri1 || "/pets/default.png";

    setHistory([
      ...history,
      {
        lv: Number(lv ?? 0),
        pet_LevelUri,
        nftImageUrl,
      },
    ]);

    setIndex(historyData.length - 1);
  }, [historyData]);

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containerRecord">
      <div className="picture">
        {pet_LevelUri?.map((item, index) => {
          if (index < lv - 1) {
            return (
              <div key={index}>
                <img src={item.uri1} alt="pet" />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="times">DAYS</div>
      <div className="time">{lv}</div>
      <div className="username">cy</div>
      <div className="black"></div>
      <div className="cardPos">
        <Card />
      </div>
      <button
        className="leftPos1"
        onClick={() => {
          if (index <= 0) return;
          setIndex(index - 1);
        }}
      >
        <img src="/1.png" alt="left" />
      </button>
      <button
        className="rightPos1"
        onClick={() => {
          if (index >= history.length - 1) return;
          setIndex(index + 1);
        }}
      >
        <img src="/2.png" alt="right" />
      </button>
      <div className="pinkPos">
        <Pinksquare />
      </div>
      <div className="bgPos">
        <Background />
      </div>
      <button className="editPos" onClick={() => navigate("/")}>
        <img src="/3.png" alt="close" />
      </button>
      <button className="closePos" onClick={() => navigate("/")}>
        <img src="/4.png" alt="back" />
      </button>

      <div className="home">
        {image && <img src={image} alt="pet" width="600rem" />}
      </div>
    </div>
  );
}
