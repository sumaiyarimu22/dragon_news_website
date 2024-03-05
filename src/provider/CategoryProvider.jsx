import { createContext, useState } from "react";
export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setselectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setselectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
