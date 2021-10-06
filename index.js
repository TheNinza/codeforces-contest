#!/usr/bin/env node

/**
 * codeforces-contest
 * Provides you with sample inputs and outputs for a codechef contest
 *
 * @author theninza <https://theninza.me>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const fetchIO = require('./utils/fetchIO');

const input = cli.input;
const flags = cli.flags;
const { id, clear, debug, url, folder, language } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	( id || url ) && (await fetchIO(url, id, folder, language));
	debug && log(flags);
})();
