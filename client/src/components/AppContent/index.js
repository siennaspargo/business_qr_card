import React from "react";
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from "./MyInfo";
import Expansion from "./Expansion";
import TextFields from "./InputForm";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
};

export default props => (
  // felxbox model

  <div>
    <RecipeReviewCard />
    <Expansion />
  </div>
);
