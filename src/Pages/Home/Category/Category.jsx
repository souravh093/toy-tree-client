import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategory1 from "./SubCategory/SubCategory1";

const Category = () => {

  const [data, setData] = useState([]);
  const slicData = data.slice(0, 2)
  const [cat1, setCat1] = useState([]);
  const displayCat1 = cat1.slice(0, 2);
  const [cat2, setCat2] = useState([]);
  const displayCat2 = cat2.slice(0, 2);
  const [cat3, setCat3] = useState([]);
  const displayCat3 = cat3.slice(0, 2);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/category/transformer');
        const result = await response.json();
        setData(result); // Update the component state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch data function when the component mounts
  }, []);

  const category1 = async (categoryName) => {
    try {
      const res = await fetch(`http://localhost:5000/category/${categoryName}`);
      const data = await res.json();
      setCat1(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const category2 = async (categoryName) => {
    try {
      const res = await fetch(`http://localhost:5000/category/${categoryName}`);
      const data = await res.json();
      setCat2(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const category3 = async (categoryName) => {
    try {
      const res = await fetch(`http://localhost:5000/category/${categoryName}`);
      const data = await res.json();
      setCat3(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDetails = (id) => {
    fetch(`http://localhost:5000/categoryDetails/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
  }

  return (
    <div className="px-52 mb-24">
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold mb-3 text-gray-600">
          Shop by Category
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          You can buy toy what you want. We are providing to which category toy
          your needed
        </p>
      </div>
      <Tabs defaultIndex={0}>
        <TabList className="my-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <Tab
            onClick={() => category1("transformer")}
            className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow text-2xl font-bold"
          >
            Transformers
          </Tab>
          <Tab
            onClick={() => category2("avenger")}
            className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow text-2xl font-bold"
          >
            Avenger
          </Tab>
          <Tab
            onClick={() => category3("starwars")}
            className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow text-2xl font-bold"
          >
            Star Wars
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2 px-24 gap-10">
            {slicData.map((display) => (
              <SubCategory1 key={display._id} handleDetails={handleDetails} display={display} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 px-24 gap-10">
            {displayCat2.map((display) => (
              <SubCategory1 key={display._id} handleDetails={handleDetails} display={display} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2 px-24 gap-10">
            {displayCat3.map((display) => (
              <SubCategory1 key={display._id} handleDetails={handleDetails} display={display} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
