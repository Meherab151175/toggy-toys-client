import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Tabss = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://toggy-toys-server.vercel.app/categories")
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

