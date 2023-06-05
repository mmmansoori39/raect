let curdate = new Date();
let curtime = curdate.getSeconds();
let greeting = "";
let cssstyle = {};

  if (curtime > 1 && curtime < 5) {
    greeting = "Moinuddin";
    cssstyle.color = "red";
  } else if (curtime > 5 && curtime < 10) {
    greeting = "Jasmine";
    cssstyle.color = "green";
  } else if (curtime > 10 && curtime < 15) {
    greeting = "MMM";
    cssstyle.color = "blue";
  } else if (curtime > 15 && curtime < 20) {
    greeting = "Khushi";
    cssstyle.color = "red";
  } else if (curtime > 20 && curtime < 25) {
    greeting = "Khushboo";
    cssstyle.color = "pink";
  } else if (curtime > 25 && curtime < 30) {
    greeting = "Jasmine";
    cssstyle.color = "black";
  } else {
    greeting = "hasan";
    cssstyle.color = "orange";
  }


function App() {
  return (
    <>
      <h1>
        Good morning, <span style={cssstyle}>{greeting}</span>
      </h1>
    </>
  );
}
export default App;
