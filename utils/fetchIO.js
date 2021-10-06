const axios = require('axios').default;
const cheerio = require('cheerio');
const path = require('path');
const fs = require('fs');
const alert = require('cli-alerts');
const readline = require('readline');

const randomColors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];

let spinner;

function askQuestion(query) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	return new Promise(resolve =>
		rl.question(query, ans => {
			rl.close();
			resolve(ans);
		})
	);
}

const getProblems = async codeforcesLink => {
	try {
		const { data } = await axios.get(codeforcesLink);

		const $ = cheerio.load(data);
		const links = $(`table.problems a`).toArray();
		const array = links.filter(
			link =>
				link.children &&
				link.children[0].type === 'comment' &&
				link.children[0].next.type === 'text'
		);
		const titles = array
			.filter(
				link =>
					link.children &&
					link.children[0].type === 'comment' &&
					link.children[0].next.type === 'text'
			)
			.map(link => link.children[0].next.data);
		const problemLinks = array.map(link => link.attribs.href);

		return { problemLinks, titles };
	} catch (error) {
		console.error('Some Error Occurred', error.message);
		process.exit(1);
	}
};

const createProblemSubFolders = async (
	problemLinks = [],
	folderPath,
	language = '',
	titles = []
) => {
	if (!problemLinks.length) {
		console.log('No Links Available');
		process.exit(1);
	}

	try {
		for (let i = 0; i < problemLinks.length; i++) {
			// Getting Title
			const title = titles[i];
			spinner.start(`Fetching ${title}...`);

			spinner.color = randomColors[i % (randomColors.length + 1)];

			const link = problemLinks[i];
			const problemId = link.split('/').slice(-1)[0];

			const { data } = await axios.get(`https://codeforces.com${link}`);

			const $ = cheerio.load(data);
		    

			// Getting Inputs
			const inputs = $('div.sample-test > div.input > pre')
				.toArray()
				.map(input => input.children[0]?.data);

			// Getting Outputs
			const outputs = $('div.sample-test > div.output > pre')
				.toArray()
				.map(output => output.children[0]?.data);

			// making subFolder

			const subFolderPath = path.join(folderPath, problemId);
			fs.mkdirSync(subFolderPath);

			// making sample input files
			inputs.forEach((input, idx) => {
				fs.writeFileSync(
					path.join(subFolderPath, `in_${idx + 1}.txt`),
					input
				);
			});

			// making sample output files
			outputs.forEach((output, idx) => {
				fs.writeFileSync(
					path.join(subFolderPath, `out_${idx + 1}.txt`),
					output
				);
			});

			// make programfiles

			if (language.length) {
				fs.writeFileSync(
					path.join(
						subFolderPath,
						`${problemId.toLowerCase()}.${language}`
					),
					''
				);
			}
			spinner.succeed(`Fetched ${title}`);
		}
	} catch (error) {
		spinner.fail('Failed');
		process.exit(1);
	}
};

module.exports = async function fetchIO(url='', id='', folderName = '', language = '') {
	const ora = await (await import('ora')).default;
	spinner = ora('');	
	  const codeforcesLink = id.length ? `https://codeforces.com/contest/${id}` : url;
	  const contestId=url.length ? codeforcesLink.split('/').slice(-1)[0]:id;
	  const { problemLinks, titles } = await getProblems(codeforcesLink);
	if (!problemLinks.length) {
		alert({
			type: `error`,
			name: `No links found`,
			msg: `No links were found for the given contest`
		});
		alert({
			type: `info`,
			name: `Give a star`,
			msg: `https://github.com/TheNinza/codeforces-contest`
		});
		process.exit(1);
	}

	if (problemLinks?.length) {
		const contestFolderPath = path.join(
			process.cwd(),
			folderName ? folderName : contestId
		);

		// checking if folder already exists
		if (fs.existsSync(contestFolderPath)) {
			alert({
				type: `warning`,
				name: `Folder Already Exists`,
				msg: `Do you want to remove the folder '${
					folderName ? folderName : contestId
				}'? \n(y)es/(n)o ENTER`
			});

			const ans = await askQuestion(``);

			if (ans.toLowerCase() === 'y' || ans.toLowerCase() === 'yes') {
				fs.rmSync(contestFolderPath, { recursive: true, force: true });
			} else {
				return;
			}
		}
		// Create contest folder
		console.log('\nCreating Folder\n');

		fs.mkdirSync(contestFolderPath);

		// creating subFolder for each problem
		await createProblemSubFolders(
			problemLinks,
			contestFolderPath,
			language,
			titles
		);
	}
	spinner.stop();

	alert({
		type: `success`,
		name: `Completed`,
		msg: `Created folder '${folderName ? folderName : contestId}'`
	});

	alert({
		type: `info`,
		name: `Give a star`,
		msg: `https://github.com/TheNinza/codeforces-contest`
	});
};
