const common = [
	'--require-module ts-node/register'
];

const backend = [
	...common,
	'tests/backend/features/**/*.feature',
	'--require tests/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
	backend
};
