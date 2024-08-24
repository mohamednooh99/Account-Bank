import { useSelector } from "react-redux";
import "./App.css";
import AccountOpration from "./features/accounts/AccountOpration";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div className="App">
      <div>
        {" "}
        <h2> React Redux Bank </h2>
      </div>

      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOpration />
        </>
      )}
    </div>
  );
}

export default App;
