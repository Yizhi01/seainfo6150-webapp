import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import ArticleList from "./ArticleList/ArticleList";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? (<div>You have no data!</div>) : (
    <div className="App">
      <Switch>
        <Route exact path="/articlelist">
          <ArticleList articlelist={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
