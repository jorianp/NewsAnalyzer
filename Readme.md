# Дипломный проект
## [https://jorianp.github.io/NewsAnalyzer](https://jorianp.github.io/NewsAnalyzer)
### v. 1.0.4

В этом репозитории находятся материалы дипломного проекта по курсу Фронтенд-разработчик от Яндекс.Практикум. Название проекта "NewsAnalyzer".

## Описание проекта

NewsAnalyzer сервис для анализа происходящих в мире событий. Его задача — установить, насколько популярны в мире новости на определённую тему.

### Как это должно работать?

Пользователь вводит в строку поиска ключевые слова, по которым хочет найти новости. Это обязательное поле. Если оставить его пустым, сайт должен показать ошибку.

По нажатию кнопки «Искать» сайт выполняет два действия:
- находит все статьи по запросу за последнюю неделю и отрисовывает карточки с новостями;
- подсчитывает статистику: сколько новостей вышло в каждый из последних семи дней. Статистику нужно отрисовать на отдельной странице.

## Запуск

```
- Development: npm run dev;
- Production: npm run build;
- Deploy to Github Pages: npm run deploy;
```
