
class TimeFormat {

	convertSecondToHourMinutes(seconds: number): string {
		let hours = Math.floor(seconds / 60);
		const minutes = seconds % 60;

		return `${hours}h ${minutes}m`;
	}

}

const timeFormat = new TimeFormat();
export default timeFormat;