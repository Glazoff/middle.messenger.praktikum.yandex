### My messenger
---
Учебный проект Яндекс.Практикум. Приложение для обмена сообщениями между пользователями. С возможностью регистрации и редаткирования профиля. Можно иметь неограниченное количество чатов с пользователями. Быстрый и удобный благодоря минималистичному и понятному интерфейсу.

За основу дизайна взят [макет](https://www.figma.com/file/Xvi8XumEhUEl80RTlRkLCb/Chat_external_link-(Copy)?node-id=0%3A1&mode=dev) от Яндекс.Практикум 

### Функциональность 
На данный момент приложение может:
+ Регистрация, Авторизация
+ Обмен сообщениями по WebSocket 
+ Добавлить чат, добавить в чат пользователя (Добавления происходит по id)
+ Редактировать профиль пользователя 
+ Замена аватарки пользователя
+ Проверка на авторизации пользователя в роутинге приложения

### Тестирование 
В проекте имеется unit-тесты
Для запуска вызовите команду ниже

```bash
npm  test
```

### Прекомит
На проекте имеется прекомит husky
Для установки ввиде команду ниже
```bash
npm prepare
```

после этого каждый коммит будет запускать проверку литинга и тесты.

### Технологии
+ Проект написан на основне компонетного подхода, основой которой служит [class Component](https://github.com/Glazoff/middle.messenger.praktikum.yandex/tree/sprint_2/src/service/Component).
+ WebSocket
+ [handlebars](https://github.com/handlebars-lang/handlebars.js)
+ [typescript](https://www.typescriptlang.org)
+ [uuid](https://github.com/uuidjs/uuid)
+ [mocha](https://mochajs.org/)
+ [chai](https://www.chaijs.com/)

### Команды 
Запустить проект для разработки:
```bash
npm run dev
```

Сборка проекта:
```bash
npm run build
```

Запуск проекта:
```bash
npm run start
```

Запуск литинга:
```bash
npm run lint
```

Запуск тестов:
```bash
npm  test
```

Установка husky (pre-commit):
```bash
npm prepare
```

### Деплой проекта
Проект развернут на сервисе Netlify
Ссылка на проект: https://deploy--cozy-babka-3ed8f9.netlify.app

### Ссылки на страницы проекта 

1. [auth](https://deploy--cozy-babka-3ed8f9.netlify.app/auth)
2. [registration](https://deploy--cozy-babka-3ed8f9.netlify.app/registration)
3. [profile](https://deploy--cozy-babka-3ed8f9.netlify.app/profile)
4. [404](https://deploy--cozy-babka-3ed8f9.netlify.app/404)
5. [500](https://deploy--cozy-babka-3ed8f9.netlify.app/500)
6. [chat](https://deploy--cozy-babka-3ed8f9.netlify.app/chat)
