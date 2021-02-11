::Запускаем загрузку зависимостей
call npm install
::переходим в папку сервера
cd TornadoWebServer
::Устанавливаем Tornado
pip install tornado
::Запускаем Tornado в фоновом режиме
start /MIN server.py
::Запускаем электрон
npm start 

