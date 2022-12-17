import React from "react";
import { JournalLayout } from "../../common/layout/JournalLayout";

export const HomePage: React.FC = () => {
  console.log("Home page rendering...");
  return (
    <JournalLayout>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad laboriosam
        consequatur, obcaecati id deserunt cupiditate ea, debitis maxime impedit
        quas harum iure exercitationem beatae itaque accusamus mollitia animi
        reprehenderit hic.
      </div>
    </JournalLayout>
  );
};
