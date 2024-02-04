


const scriptsInEvents = {

	async Esplash_Event25_Act1(runtime, localVars)
	{
		const currentDateAndTime = new Date();
		
		const year = currentDateAndTime.getFullYear();
		const month = currentDateAndTime.getMonth() + 1;
		const day = currentDateAndTime.getDate();
		const hours = currentDateAndTime.getHours();
		const minutes = currentDateAndTime.getMinutes();
		const seconds = currentDateAndTime.getSeconds();
		
		const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
		
		runtime.globalVars.UserInputDate = formattedDate;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

