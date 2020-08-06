# Задача JS - Морской бой.
 Написать игру “Морской-бой” для игры в браузере с компьютером.
 ____
 Начинается игра, требуется ввести имена пользователей.
  
 Необходимо отображение чей ход. 
 
 Расстановка кораблей случайная для игрока и для компьютера.
 
 Требования к выполнению задачи
 
     1. Задача должна быть решена с использованием следующих технологий: HTML, CSS, Javascript (или TypeScript)
     2. Разрешается использование стороннего JS-фреймворка графического рендера (React, Vue, Angular и т.п.)
     3. Код программы с необходимыми комментариями
     4. Обеспечить выполнение программы в Google Chrome
     5. Вывод графики должен быть реализован средствами CSS и JavaScript (или TypeScript), минимальное использование растровых картинок.
     6. Интерфейс должен быть приятен пользователю и вызвать желание играть снова и снова
     7. Игра должна выглядеть законченным продуктом, целостно 
     
## Решение
Задача решена на `React.js` 

Проект собран с помощью [Create React App](https://github.com/facebook/create-react-app).

Реализован функционал:
    
    1. Ввод имени для игрока и компьютера
    2. Автоматическая генерация кораблей
    3. Автоматический ход противника (компьютер)
    4. Блокировка хода игрока, когда очередь хода у компьютера
    5. При попадании в корабль, очередь хода сохраняется
    6. Реализовано поле, где отображается статистика ходов игрока
    