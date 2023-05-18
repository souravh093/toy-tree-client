import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  return (
    <div className="px-52">
      <div className="text-center mb-10">
        <h2 className="text-6xl font-bold mb-3 text-gray-600">Toys Category</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here some discount to our toys you can buy this toys. Discount date is
          available only 2 more days buy now{" "}
        </p>
      </div>
      <Tabs forceRenderTabPanel defaultIndex={1}>
        <TabList className="my-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow text-2xl font-bold">
            Transformers
          </Tab>
          <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow text-2xl font-bold">
            Avenger
          </Tab>
          <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow text-2xl font-bold">
            Star Wars
          </Tab>
        </TabList>

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="my-6 flex flex-col sm:flex-row sm:justify-between sm:items-center px-24">
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Autobots
              </Tab>
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Decepticons
              </Tab>
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Dinobots
              </Tab>
            </TabList>
            <TabPanel>
              <div className="grid grid-cols-2 px-32">
                <div className="card w-full bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="my-6 flex flex-col sm:flex-row sm:justify-between sm:items-center px-24">
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Superheroes
              </Tab>
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Avengers Team
              </Tab>
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Marvel Heroes
              </Tab>
            </TabList>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList className="my-6 flex flex-col sm:flex-row sm:justify-between sm:items-center px-24">
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Jedi Knights
              </Tab>
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Rebel Alliance
              </Tab>
              <Tab className="cursor-pointer py-4 px-8 bg-grey-background border border-grey-intermediate flex flex-grow">
                Galactic Heroes
              </Tab>
            </TabList>
            <TabPanel>1</TabPanel>
            <TabPanel>2</TabPanel>
            <TabPanel>3</TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
