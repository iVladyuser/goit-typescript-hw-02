/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
	sunday = "sunday",
	monday = "monday",
	tuesday = "tuesday",
	wednesday = "wednesday",
	thursday = "thursday",
	friday = "friday",
	saturday = "saturday",
}

function isWeekend(day: DayOfWeek): boolean {
	return day === DayOfWeek.saturday || day === DayOfWeek.sunday;
}

// Example:
const today: DayOfWeek = DayOfWeek.saturday;

if (isWeekend(today)) {
	console.log("Сьогодні вихідний!");
} else {
	console.log("Сьогодні робочий день.");
}
