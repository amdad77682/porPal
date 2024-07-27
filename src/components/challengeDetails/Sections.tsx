import { Section } from "@components/common/models";
import React from "react";

export default function Sections({ sections }: { sections: Section[] }) {
  return (
    <div className="flex-1 flex flex-col gap-5">
      {sections.map((item: Section) => {
        return (
          <div key={item?.title} className="">
            <h1>{item?.title}</h1>
            {Array.isArray(item.value) ? (
              item.value.map((tag) => {
                if (item?.type == "resources") {
                  return <div key={tag}>{tag?.name}</div>;
                }
                return <div key={tag}>{tag}</div>;
              })
            ) : (
              <div dangerouslySetInnerHTML={{ __html: item?.value }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
