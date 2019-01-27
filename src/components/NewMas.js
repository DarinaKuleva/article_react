import articles from "../constants/articles";
import comments from "../constants/comments";
import Merge from "./MergeMass";

const Article = Merge(articles, comments);

export default Article
