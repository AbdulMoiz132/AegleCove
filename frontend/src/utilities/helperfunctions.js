// Calculate Body Mass Index (BMI) with height and weight
export const bmi_calc_simple = (weight, height) => {
    const heightInMeters = height * 0.0254;
    const bmi = weight / (heightInMeters * heightInMeters);
    return Math.round(bmi * 1000) / 1000;
};

// Calculate Body Mass Index (BMI) with height, weight, age, and gender
export const bmi_calc = (weight, height, age, gender) => {
    const bmi = bmi_calc_simple(weight, height);
    if (age >= 18) {
        if (gender === "male") {
            const message = bmi < 18.5 ? 'underweight' : bmi < 24.9 ? 'Normal' : bmi < 29.9 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        } else if (gender === "female") {
            const message = bmi < 16 ? 'underweight' : bmi < 23 ? 'Normal' : bmi < 28.9 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        }
    } else if (age < 18) {
        if (gender === "male") {
            const message = bmi < 17 ? 'Underweight' : bmi < 22 ? 'Normal' : bmi < 27 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        } else if (gender === "female") {
            const message = bmi < 15.5 ? 'Underweight' : bmi < 21 ? 'Normal' : bmi < 26.5 ? 'Overweight' : 'Obese';
            return { yourbmi: bmi, message: message };
        }
    } else {
        return { yourbmi: 0, message: null };
    }
};

export const searchItems = (query, items) => {
    return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
};

// Calculate Ideal Body Weight (IBW) using the Devine Formula
export const calculateIBW = (height, gender) => {
    // Calculate IBW for male
    if (gender === "male") {
        return Math.round((50 + 2.3 * (height - 60)) * 1000) / 1000;
    }
    
    // Calculate IBW for female
    else if (gender === "female") {
        return Math.round((45.5 + 2.3 * (height - 60)) * 1000) / 1000;
    }
    
    // For other genders, average the male and female IBW
    else {
        const maleIBW = 50 + 2.3 * (height - 60);
        const femaleIBW = 45.5 + 2.3 * (height - 60);
        const averageIBW = (maleIBW + femaleIBW) / 2;
        return Math.round(averageIBW * 1000) / 1000;
    }
};




// Calculate Lean Body Mass (LBM)
export const calculateLBM = (weight, bodyFatPercentage) => {
    const lbm = weight * (1 - bodyFatPercentage / 100);
    return Math.round(lbm * 1000) / 1000;
};

// Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation
export const calculateBMR = (weight, height, age, gender) => {
    const heightInCm = height * 2.54;
    const bmr = gender === "male"
        ? 10 * weight + 6.25 * heightInCm - 5 * age + 5
        : 10 * weight + 6.25 * heightInCm - 5 * age - 161;
    return Math.round(bmr * 1000) / 1000;
};

// Calculate Body Fat Percentage (BFP)
export const calculateBFP = (weight, height, age, gender) => {
    const heightInMeters = height * 0.0254;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bfp = gender === "male"
        ? 1.20 * bmi + 0.23 * age - 16.2
        : 1.20 * bmi + 0.23 * age - 5.4;
    return Math.round(bfp * 1000) / 1000;
};

// Calculate Hip-to-Waist Ratio (HWR)
export const calculateHWR = (hip, waist) => {
    const hwr = waist / hip;
    return Math.round(hwr * 1000) / 1000;
};

// Calculate Risk Score for Diseases
export const calculateRiskScore = (bmi, whtr, bfp) => {
    let score = 0;
    if (bmi >= 25) score += 1;
    if (whtr >= 0.5) score += 1;    
    if (bfp >= 25) score += 1;
    return score;
};

// Calculate Age from Birthdate
export const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
