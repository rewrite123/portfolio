import BlogInterface from "../Bloginterface";

import welcome from "./welcome.md";

const article: BlogInterface = {
  id: "welcome",
  title: "Welcome to the blog! Common questions and concerns",
  summery:
    "A quick welcome to the site for new and returning viewers as well as some answers I get to common questions.",
  content: welcome,
  date: "3/17/2023", // (new Date()).toLocaleDateString()
};
export default article;
