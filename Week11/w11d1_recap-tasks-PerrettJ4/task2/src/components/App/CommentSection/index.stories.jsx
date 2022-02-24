import React from "react";
import CommentSection from ".";
import articles from "../../../libs/articles";

export default {
  title: "Example/CommentSection",
  component: CommentSection,
};

const Template = (args) => <CommentSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  articles: { articles },
  i: 1,
};
