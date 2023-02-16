    let IS_FULL_TIME = 2;
    let IS_PART_TIME = 1;
    var companyName = "";
    let fullDayHrs;
    let wagePerHour;
    let workingDaysPerMonth;
    function employeeWageCalculation(companyName,fullDayHrs,wagePerHour,workingDaysPerMonth) {
        let dayCount = 1;
        let totalWage = 0;
        let totalWorkHrs = 0;
        console.log("Details of " + companyName + " employee");
        console.log("-----------------------------------------------------");
        while (dayCount <= workingDaysPerMonth && totalWorkHrs <= 100) {
            let dailyWage = 0;
            let workHrs = 0;
            let employeeCheck =  Math.floor(Math.random() * 10) % 3;
            switch (employeeCheck) {
                case IS_FULL_TIME:
                    console.log("Employee is Present");
                    dailyWage = wagePerHour * fullDayHrs;
                    workHrs = 8;
                    break;
                case IS_PART_TIME:
                    console.log("Employee is Part_Time");
                    dailyWage = (fullDayHrs / 2) * wagePerHour;
                    workHrs = 4;
                    break;
                default:
                    console.log("Employee is Absent");
            }
            totalWage += dailyWage;
            totalWorkHrs += workHrs;
            console.log("Daily Wage for  Day " + dayCount + " is " + dailyWage);
            console.log("Total wage till Day " + dayCount + " is " + totalWage);
            console.log("Working Hours till Day " + dayCount + " is " + totalWorkHrs);
            dayCount++;
        }
        console.log("Wage for a Month is: " + totalWage);
        console.log("Total Working Hours per month: " + totalWorkHrs);
    }

        console.log("Welcome to Employee Wage Computation");
        employeeWageCalculation("Amazon",8,8,20);
