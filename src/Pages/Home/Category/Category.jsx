import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Category = () => {
    const categories = [
        { id: 1, name: 'Math Toys' },
        { id: 2, name: 'Language Toys' },
        { id: 3, name: 'Engineering Toys' },
      ];
    
      const subcategories = [
        { id: 1, categoryId: 1, name: 'Subcategory 1' },
        { id: 2, categoryId: 1, name: 'Subcategory 2' },
        { id: 3, categoryId: 2, name: 'Subcategory 1' },
        { id: 4, categoryId: 2, name: 'Subcategory 2' },
        { id: 5, categoryId: 3, name: 'Subcategory 1' },
        { id: 6, categoryId: 3, name: 'Subcategory 2' },
      ];
    
      const products = [
        {
          id: 1,
          subcategoryId: 1,
          name: 'Toy 1',
          image: 'toy1.jpg',
          price: 19.99,
          rating: 4.5,
        },
        {
          id: 2,
          subcategoryId: 1,
          name: 'Toy 2',
          image: 'toy2.jpg',
          price: 24.99,
          rating: 4.8,
        },
        // ... and so on
      ];
  return (
    <Tabs>
      <TabList>
        {categories.map((category) => (
          <Tab key={category.id}>{category.name}</Tab>
        ))}
      </TabList>

      {categories.map((category) => (
        <TabPanel key={category.id}>
          <div className="grid grid-cols-2 gap-4">
            {subcategories
              .filter((subcategory) => subcategory.categoryId === category.id)
              .map((subcategory) => (
                <div key={subcategory.id}>
                  <h3 className="text-lg font-bold mb-2">{subcategory.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {products
                      .filter(
                        (product) => product.subcategoryId === subcategory.id
                      )
                      .slice(0, 2) // Displaying only the first 2 toys
                      .map((product) => (
                        <div key={product.id}>
                          <div className="border border-gray-300 p-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-auto mb-2"
                            />
                            <h4 className="font-bold mb-1">{product.name}</h4>
                            <p className="text-gray-500 mb-1">
                              ${product.price}
                            </p>
                            <p className="text-gray-500 mb-2">
                              Rating: {product.rating}
                            </p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Category;

const toys = [
    {
        "name": "Captain America",
        "url" : "https://example.com/hello.jpg",
        ""
    }
]
