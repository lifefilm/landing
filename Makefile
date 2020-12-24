.PHONY: help

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.DEFAULT_GOAL := help

%:
	@:

prod = `arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}}`


generate: ## Билдим VUE в статичный сайт
	@npm run generate


reg: ## Отсылаем на сервер Reg.ru (lifefilm.ru)
	@scp -r dist/* reg:www/lifefilm.ru

life: ## Отсылаем на сервер gcloud life
	@gsutil cp -r dist/* gs://www.life2film.com


sentry: ## Отсываем maps в sentry, укажите название релиза name=
	@RELEASE=${name} yarn sentry_vue
	RELEASE=${name} yarn sentry_django

# MAIN

# Быстрая команда: сбилдить и залить на сервер
up: generate life reg
d: up
