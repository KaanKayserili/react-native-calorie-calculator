export const fetchFoodData = async () => {
    try {
        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=7Paauk4LORamphUkSDSnp9Sjg88p8e5hfiVPzekz&query=Cheddar%20Cheese`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Hata oluştu:', error);
    }
}