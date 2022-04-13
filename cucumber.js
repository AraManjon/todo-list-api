const common = [
	'--require-module ts-node/register'
];

const tasks_backend = [
	...common,
	'tests/tasks/backend/features/**/*.feature',
	'--require tests/tasks/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
	tasks_backend
};
