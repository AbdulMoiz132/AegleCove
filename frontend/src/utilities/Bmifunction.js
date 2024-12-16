export const bmi_calc = (weight, height, age, gender) => {
    let bmi = weight / (height * height)
    bmi=Math.round(bmi * 100) / 100;
    

    if (age >= 18) {
        if (gender == "male") {
            const message = bmi < 18.5 ? 'underweight' : bmi < 24.9 ? 'Normal' : bmi < 29.9 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        }
        else if (gender == "female") {
           const message = bmi < 16 ? 'underweight' : bmi < 23 ? 'Normal' : bmi < 28.9 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        }
    }

     
    else if (age < 18) {
        if (gender == "Male") {
          const  message = bmi < 17 ? 'Underweight' : bmi < 22 ? 'Normal' : bmi < 27 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        } 
        else if (gender == "Female") {
            const message = bmi < 15.5 ? 'Underweight' : bmi < 21 ? 'Normal' : bmi < 26.5 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        }
    
        
    } 
    else return {yourbmi:0,message:null};
    
}






