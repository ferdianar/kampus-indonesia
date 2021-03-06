import backendApi from "configs/api/backendApi";
import React, { useState, useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import useSWRImmutable from "swr/immutable";
import { ContainerCard, HeaderCard, BodyCard } from "../../Card";

const CardCategory = ({ register }) => {
  const { data, error } = useSWRImmutable("/categories", backendApi.get);
  const [category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = React.useState(true);
  const [activePage, setActivePage] = React.useState(0);

  useEffect(() => {
    if (data) {
      setCategory(data.data.data);
    }
  }, [data]);

  return (
    <ContainerCard>
      <HeaderCard
        title="Categories"
        setOpen={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
      {isOpen && (
        <BodyCard>
          <div className="flex">
            <button
              type="button"
              className={`px-4 py-2 ${activePage === 0 && "bg-[#F5F5F5]"}`}
              onClick={() => setActivePage(0)}
            >
              All Categories
            </button>
            <button
              type="button"
              className={`px-4 py-2 ${activePage === 1 && "bg-[#F5F5F5]"}`}
              onClick={() => setActivePage(1)}
            >
              Most Used
            </button>
          </div>
          <div className="bg-[#F5F5F5]">
            <div className={`px-4 py-3 ${activePage !== 0 && "hidden"}`}>
              {category.map((item) => (
                <CheckBoxItem
                  key={item.id}
                  {...register(`categories.${item.id}.value`, {
                    // onChange: (e) => console.log(e),
                  })}
                >
                  {item.name}
                </CheckBoxItem>
              ))}
            </div>
          </div>
        </BodyCard>
      )}
    </ContainerCard>
  );
};

const CheckBoxItem = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <label className="flex items-center">
      <input ref={ref} type="checkbox" className="mr-2" {...props} />
      {children}
    </label>
  );
});

CheckBoxItem.displayName = "CheckBoxItem";

export default CardCategory;
