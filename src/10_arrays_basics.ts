const food: string[] = ["bread", "meat", "rice"];

food.pop(); // Allowed✅
food.push("Beans"); // Allowed✅
// food.push(2); Not allowed❌

const plates: number[] = [1, 2, 3, 4, 5];

plates.pop(); // Allowed✅
// plates.push("Beans");  Not allowed❌
plates.push(2); //Allowed✅

const mixed: (string | number)[] = [1, "2", "3", 4, 5];

mixed.pop(); // Allowed✅
mixed.push("Beans"); // Allowed✅
mixed.push(2); // Allowed✅
