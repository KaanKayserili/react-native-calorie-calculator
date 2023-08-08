import { fetchFoodData } from "../service/api";

export const FoodDatas = async () => {
    const data = await fetchFoodData()
    const units = data?.foods[0]?.packageWeight?.split("/");

    console.log("Kütle:" + units[1]);
    console.log("Kalori:" + data?.foods[0]?.foodNutrients[3]?.value + " kcal")

    console.log("Kütle:" + "100 g");
    console.log("Kalori:" + ((parseFloat(data?.foods[0]?.foodNutrients[3]?.value) / parseFloat(units[1])) * 100) + " kcal");
}