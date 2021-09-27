import "./App.css";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API; // TAKING VALUE FROM .env.local

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="red" progress={progress} height={3} />
        <Switch>
          <Route exact path="/general">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              categoryName="General"
            />
          </Route>

          <Route exact path="/">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
              categoryName="General"
            />
          </Route>

          <Route exact path="/business">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
              categoryName="Business"
            />
          </Route>

          <Route exact path="/entertainment">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
              categoryName="Entertainment"
            />{" "}
            key=
          </Route>

          <Route exact path="/health">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
              categoryName="Health"
            />
          </Route>

          <Route exact path="/science">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
              categoryName="Science"
            />
          </Route>

          <Route exact path="/sports">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
              categoryName="Sports"
            />
          </Route>

          <Route exact path="/technology">
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
              categoryName="Technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
