import React from "react";
import { Card } from "../components/card.jsx";
import { useMyStates } from "../hooks/states";
import { Pinksquare } from "../components/pinksquare.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { contract } from "../hooks/contracts";
import { Background } from "../components/background.jsx";

import "./record.css";

export function Record() {
  const {
    data: historyData,
    isLoading,
    isError,
    error,
  } = useReadContract({
    address: contract.address,
    abi: contract.abi,
    functionName: "getHistory",
  });

  const [history, setHistory] = useState([]);

  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!Array.isArray(historyData)) return;

    const parsed = historyData.map((item) => ({
      time: item.time.toString(),
      username: item.username,
    }));

    setHistory(parsed);
    setIndex(parsed.length - 1);
  }, [historyData]);

  const current = history.length ? history[index] : null;

  const navigate = useNavigate();
  return (
    <div className="containerRecord">
      <div className="times">DAYs</div>
      {current && (
        <>
          <div className="time">{Number(current.time)}</div>
          <div className="username">{current.username}</div>
        </>
      )}

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
    </div>
  );
}
