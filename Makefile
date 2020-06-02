.PHONY: all compile

all: compile

compile:
	@git submodule init
	@git submodule update --recursive
	@cd ./pb && git pull origin master
	@rm -rf ./electrious && mkdir ./electrious
	@cp -R ./pb/electrious/* ./electrious
	@prototool all --fix
	@./generate_index.sh