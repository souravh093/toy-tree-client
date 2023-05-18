import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Category = () => {
    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
      ];
    
      const subcategories = [
        { id: 1, categoryId: 1, name: 'Subcategory 1.1' },
        { id: 2, categoryId: 1, name: 'Subcategory 1.2' },
        { id: 3, categoryId: 1, name: 'Subcategory 1.3' },
        { id: 4, categoryId: 2, name: 'Subcategory 2.1' },
        { id: 5, categoryId: 2, name: 'Subcategory 2.2' },
        { id: 6, categoryId: 2, name: 'Subcategory 2.3' },
        { id: 7, categoryId: 3, name: 'Subcategory 3.1' },
        { id: 8, categoryId: 3, name: 'Subcategory 3.2' },
        { id: 9, categoryId: 3, name: 'Subcategory 3.3' },
      ];
    
      const products = [
        { id: 1, subcategoryId: 1, name: 'Product 1.1.1' },
        { id: 2, subcategoryId: 1, name: 'Product 1.1.2' },
        { id: 3, subcategoryId: 2, name: 'Product 1.2.1' },
        { id: 4, subcategoryId: 2, name: 'Product 1.2.2' },
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
          <div className="grid grid-cols-3 gap-4">
            {subcategories
              .filter((subcategory) => subcategory.categoryId === category.id)
              .map((subcategory) => (
                <div key={subcategory.id}>
                  <h3 className="text-lg font-bold mb-2">{subcategory.name}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {products
                      .filter((product) => product.subcategoryId === subcategory.id)
                      .map((product) => (
                        <div key={product.id}>
                          <div className="border border-gray-300 p-4">
                            <h4 className="font-bold mb-2">{product.name}</h4>
                            {/* Add product details here */}
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