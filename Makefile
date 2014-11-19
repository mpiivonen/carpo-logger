# Executables
ISTANBUL_EXEC = ./node_modules/istanbul/lib/cli.js
COVERALLS_EXEC = ./node_modules/coveralls/bin/coveralls.js

coveralls:
	@echo "\n---| Test Coverage to Coveralls |---"
	@NODE_ENV="TEST" $(ISTANBUL_EXEC) \
	cover $(MOCHA__EXEC) --report lcovonly -- \
	--reporter dot \
	--ui tdd \
	--recursive test \
	&& cat ./coverage/lcov.info | $(COVERALLS_EXEC)
