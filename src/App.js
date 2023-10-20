import "./App.css";
import "./test_js.js";

function App() {
  const name = "Tom";
  // const user = {
  //   // 객체
  //   name: "Jane",
  // };
  const naver = {
    name: "네이버",
    url: "http://naver.com",
  };
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "#1C315E", color: "#fff" }}>
        Hello, {name}. <p>{2 + 3}</p>
        {/* 중괄호 내에서 문자열이나 숫자는 잘 나오지만 불린타입이나 객체는 표현하지 못함
        <p>{user}</p> */}
      </h1>
      <a href={naver.url} style={{ color: "#227C70" }}>
        {naver.name}
      </a>
    </div>
  );
}

export default App;
