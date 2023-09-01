import React from "react";


const App = () => {
  return <div>
    <h2>there was a problem to push data on orign main at github so with the help of chatgpt i resolved this making set orign url using thes command</h2>
    <h3>git remote -v</h3>
    <h3>git remote set-url origin https://github.com/yourusername/your-repo.git</h3>
    <h3>git push --set-upstream origin main</h3>
  </div>;
};

export default App;
