import Layout from "./components/Layout";
import Routes from "./routes";

function App() {
  var myHeaders = new Headers();
  myHeaders.append("DEVICEID", " 1");
  myHeaders.append("USERID", " 4");
  myHeaders.append("MACADDR", "2E:33:7A:EE:0E:43");
  myHeaders.append("PROGRAMTYPE", " DESKTOP");
  myHeaders.append("WPID", " 7");
  myHeaders.append("LOCALE", " tr");
  myHeaders.append("IND", " 9");
  myHeaders.append("Content-Type", " application/json; charset=utf-8");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  fetch(
    "http://85.132.9.251:16720/service/mobile_report/dashboard/currentOpenTables?type=undefined&detail=1&idDepartment=2&filterType=undefined&startDate=undefined&endDate=undefined&filterByEmplId=undefined&cashierId=undefined&positionType=undefined&cashboxId=undefined&toTime=undefined",
    requestOptions
  )
    .then((response) => response)
    .then((result) => console.log(result.json()))
    .catch((error) => console.log("error", error.message));

  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
