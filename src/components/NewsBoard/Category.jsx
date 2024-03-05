import { useState, useEffect, useContext } from "react";
import Title from "../common/Title";
import { CategoryContext } from "../../provider/CategoryProvider";

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const { selectedCategory, setselectedCategory } = useContext(CategoryContext);

  console.log(selectedCategory);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/category");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setCategorys(jsonData);

      if (jsonData.length > 0) {
        setselectedCategory(jsonData[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCategoryClick = (category) => {
    setselectedCategory(category);
  };

  return (
    <div>
      <Title title={"All Caterogy"} />
      <ul className='flex flex-col gap-2 py-5'>
        {categorys.map((category) => (
          <li
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={` ${
              selectedCategory === category
                ? "text-[#403F3F] bg-[#E7E7E7] font-semibold"
                : "text-[#9F9F9F]"
            } cursor-pointer  px-5 py-3 text-[20px] hover:bg-[#F3F3F3] rounded-md
               `}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
