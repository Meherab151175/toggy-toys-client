import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tabss = ({ toys, handleTab }) => {
  console.log(toys.length);
 
  

  if(toys.length > 0){  return (
    <Tabs className="container mx-auto">
      <TabList>
        <Tab>
          <button
            onClick={() => handleTab("mini police car")}
            className="btn btn-active btn-neutral"
          >
            mini police car
          </button>
          </Tab>
          <Tab>
          <button
            onClick={() => handleTab("	remote control toy car")}
            className="btn btn-active btn-neutral"
          >
            remote control toy car
          </button>
        </Tab>
      </TabList>

      {toys.map((toy, index) => (
        <TabPanel key={index}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={toy?.toyPic}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{toy?.toyName}</h2>
              <p className="grid grid-cols-2 gap-4">
                <p>Price : {toy?.price} $</p>
                <p>{toy?.rating}</p>
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  )}

};

export default Tabss;
