import DropDown from "@components/common/Filter/DropDown";
import React from "react";
import ChallengeCard from "./common/ChallengeCard";

export default function Challenges() {
  return (
    <div className="container">
      <h1>Challenges</h1>
      <p>
        Join our community of problem solvers and take on exciting challenges to
        win rewards.
      </p>
      <div className="flex gap-4 py-5">
        <DropDown
          name="Skill Level"
          data={[]}
          isSearchEnabled={false}
          onClickItemQuery={"skill_level"}
        />
        <DropDown
          name="Skill Level"
          data={[]}
          isSearchEnabled={false}
          onClickItemQuery={"skill_level"}
        />
        <DropDown
          name="Skill Level"
          data={[]}
          isSearchEnabled={false}
          onClickItemQuery={"skill_level"}
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <div key={item}>
              <ChallengeCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}
