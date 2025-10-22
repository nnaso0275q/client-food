import React from "react";

// export const FoodMenu = async () => {
//   const res = await fetch("http://localhost:8000/api/food", {
//     method: "POST",
//   });

export const FoodMenu = async () => {
  return (
    <div className="bg-neutral-700 w-full h-fit">
      <div>
        {/* {foods.map((food: FoodType) => (
          <div
            key={food._id}
            className="w-[270px] h-[241px] rounded-[20px] border border-gray-200"
          >
            <div className="m-4">
              <div className="relative w-full h-[129px] rounded-[12px] overflow-hidden bg-gray-100">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between mt-5">
                <div className="text-red-500">{food.name}</div>
                <div>{food.price}</div>
              </div>
              <div className="text-sm text-muted-foreground">
                {food.ingredients}
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};
