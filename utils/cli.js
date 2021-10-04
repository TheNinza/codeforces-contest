const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	url: {
		type: `string`,
		alias: `u`,
		desc: `Fetches sample inputs and outputs and creates folder for the contest`,
		default: ``
	},
	folder: {
		type: `string`,
		alias: `f`,
		desc: `Defines the directory name for the folder in which the files will be`,
		default: ``
	},
	language: {
		type: `string`,
		alias: `l`,
		desc: `Preferred language to write files. For example '-l cpp' will create .cpp files to write solutions`,
		default: ``
	},
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `cfc`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
