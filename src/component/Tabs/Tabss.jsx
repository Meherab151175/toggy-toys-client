import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import TabCard from "./TabCard";

const Tabss = () => {
  const [tabIndex, setTabIndex] = useState(0);
  // const [tabData, setTabData] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);



  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              <TabList>
          {categories?.map((category) => (
            <Tab disabledClassName="border-0 outline-0" key={category.id}>
              <Link to={`/categories/${category.id}`}>
                {category.category_name}
              </Link>
            </Tab>
          ))}
        </TabList>


    </Tabs>
  );
};

export default Tabss;

// import { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import TabCard from "./TabCard";

// const Tabss = () => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [tabNames, setTabName] = useState([]);
//   const [tabData, setTabData] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/categories`)
//       .then((res) => res.json())
//       .then((data) => {
//         setTabName(data);
//       });
//   }, []);

//   useEffect(() => {
//     if (tabNames.length > 0) {
//       fetchData(tabNames[tabIndex]);
//     }
//   }, [tabIndex, tabNames]);

//   const fetchData = (category) => {
//     console.log(category)
//     fetch(`http://localhost:5000/tabData/${category}`)

//       .then((res) => res.json())
//       .then((data) => {
//         setTabData(data);
//       });
//   };

//   console.log('tabData',tabData)

//   return (
//     <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//       <TabList>
//         {tabNames?.map((name, index) => (
//           <Tab key={index}>{name}</Tab>
//         ))}
//       </TabList>

//       {tabNames?.map((name, index) => (
//         <TabPanel key={index}>
//           {/* Render content specific to each tab */}
//           {tabData[index]?.map((item) => (
//             <TabCard key={item._id} item={item} />
//           ))}
//         </TabPanel>
//       ))}
//     </Tabs>
//   );
// };

// export default Tabss;
