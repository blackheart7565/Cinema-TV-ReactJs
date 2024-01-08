

interface IDateServices {
	getRegistrationDateOnSite: () => string;
}

export interface IMonthName {
	id: number;
	name_eng: string;
	name_rus: string;
	genitive_rus: string;
}

class DateServices implements IDateServices {
	private _date: string = "";
	public monthName: Array<IMonthName> = [];

	constructor(date: string) {
		this._date = date;
		this.monthName = [
			{
				id: 1,
				name_eng: "January",
				name_rus: "Январь",
				genitive_rus: "Января",
			},
			{
				id: 2,
				name_eng: "February",
				name_rus: "Февраль",
				genitive_rus: "Февраля",
			},
			{
				id: 3,
				name_eng: "March",
				name_rus: "Март",
				genitive_rus: "Марта",
			},
			{
				id: 4,
				name_eng: "April",
				name_rus: "Апрель",
				genitive_rus: "Апреля",
			},
			{
				id: 5,
				name_eng: "May",
				name_rus: "Май",
				genitive_rus: "Мая",
			},
			{
				id: 6,
				name_eng: "June",
				name_rus: "Июнь",
				genitive_rus: "Июня",
			},
			{
				id: 7,
				name_eng: "July",
				name_rus: "Июль",
				genitive_rus: "Июля",
			},
			{
				id: 8,
				name_eng: "August",
				name_rus: "Август",
				genitive_rus: "Августа",
			},
			{
				id: 9,
				name_eng: "September",
				name_rus: "Сентябрь",
				genitive_rus: "Сентября",
			},
			{
				id: 10,
				name_eng: "October",
				name_rus: "Октябрь",
				genitive_rus: "Октября",
			},
			{
				id: 11,
				name_eng: "November",
				name_rus: "Ноябрь",
				genitive_rus: "Ноября",
			},
			{
				id: 12,
				name_eng: "December",
				name_rus: "Декабрь",
				genitive_rus: "Декабря",
			},
		]
	}

	getRegistrationDateOnSite = (): string => {
		if (!this._date) return "Date is not specified!";

		const date = new Date(this._date);

		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();

		const fullDate = `${day} ${(this.monthName[month].genitive_rus).toLowerCase()} ${year}`;
		return `На сайте с ${fullDate}`;
	}
}

export {
	DateServices
};

