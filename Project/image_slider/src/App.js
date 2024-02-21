import Slider from "./component/Slider";

function App() {
  return (
    <div className="slider_section">
      <Slider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"} />
    </div>
  );
}

export default App;
