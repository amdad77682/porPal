import CheckList from "@components/challengeDetails/CheckList";
import OverviewSection from "@components/challengeDetails/OverviewSection";
import Sections from "@components/challengeDetails/Sections";
import { IChallengeDetails } from "@components/common/models";
import React, { Suspense } from "react";
const data: IChallengeDetails = {
  id: 1,
  title: "Design and test a Medicine Reminder app for non-tech savvy users",
  slug: "design-challenge-one",
  description:
    "You’re a product designer in a large financial corporation. Management has decided to build a new mobile app that lets people",
  review_type: "rubrics",
  media: ["01HKYDVKJ0ZH8JQH8PXA0EQSVS.png", "01HKYDXQVK5C1WP4CMDN64XV9N.png"],
  submission_types: ["github"],
  published_at: "2024-01-08T16:57:22.000000Z",
  organization: {
    id: 1,
    name: "Propal",
    short_description: "short des",
  },
  experience_points: -1,
  configuration: {
    is_enable_discussion_mode: true,
    is_enable_anonymous_submission: false,
    publicly_visible_all_submissions: true,
    invite_reviewer_from_challenger: true,
  },
  checklists: [
    {
      type: "difficulty",
      value: "easy",
    },
    {
      type: "experience",
      value: "intermediate",
    },
    {
      type: "custom",
      value: "dfgdshda ",
    },
  ],
  sections: [
    {
      type: "outcomes",
      title: "Design Scenario",
      value:
        "<p>You’re a product designer in a large financial corporation. Management has decided to build a new mobile app that lets people buy and sell stocks commission-free.You're put on the design team for this new app. </p>",
    },
    {
      type: "long_description",
      title: "Design Task",
      value:
        "<p>You’re a product designer in a large financial corporation. Management has decided to build a new mobile app that lets people buy and sell stocks commission-free.You're put on the design team for this new app. </p>",
    },
    {
      type: "resources",
      title: "gras",
      value: [
        {
          url: "http://propal-studio.test/studio/challenges/1/resource",
          name: "sadf",
        },
        {
          url: "http://propal-studio.test/studio/challenges/1/resource",
          name: "sfgad",
        },
      ],
    },
    {
      type: "tools",
      title: "sga",
      value: ["html", "figma"],
    },
    {
      type: "credits",
      title: "fsga",
      value:
        "<ul><li>User Stories for the App: Create user stories to guide the design of the app. These stories should capture the key tasks and goals that users want to achieve with the app </li><li>User Proto-Persona: Develop a few user proto-personas based on your desktop research that includes their current pain points and goals.</li><li>Sketches, Wireframes, or Prototypes of the Most Promising Ideas: Sketch out multiple ideas for the app, and then create wireframes or prototypes of the most promising ones. These designs should be based on the user stories and persona developed earlier.</li></ul>",
    },
    {
      type: "faq",
      title: "sag",
      value:
        "<ul><li>User Stories for the App: Create user stories to guide the design of the app. These stories should capture the key tasks and goals that users want to achieve with the app </li><li>User Proto-Persona: Develop a few user proto-personas based on your desktop research that includes their current pain points and goals.</li><li>Sketches, Wireframes, or Prototypes of the Most Promising Ideas: Sketch out multiple ideas for the app, and then create wireframes or prototypes of the most promising ones. These designs should be based on the user stories and persona developed earlier.</li></ul>",
    },
  ],
  rubrics: [
    {
      id: 1,
      title: "Idea",
      description: "idea description",
      weight: 1,
      levels: [
        {
          id: 1,
          title: "dsfag",
          description: "sfsaf",
          points: 5,
          has_follow_up_question: false,
          follow_up_question: "",
        },
        {
          id: 3,
          title: "asgs",
          description: "sga",
          points: 4,
          has_follow_up_question: false,
          follow_up_question: "",
        },
        {
          id: 2,
          title: "leve 3",
          description: "sfsdf",
          points: 3,
          has_follow_up_question: true,
          follow_up_question: "sgags",
        },
      ],
    },
  ],
};

export default function page() {
  return (
    <Suspense>
      <OverviewSection data={data} />
      <div className="bg-[#FFFFFF]">
        <div className="flex container justify-between gap-8">
          <Sections sections={data?.sections} />
          <CheckList checklists={data?.checklists} />
        </div>
      </div>
    </Suspense>
  );
}
