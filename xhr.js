// Читаем пакет данных JSON
// const requestURL = 'https://jsonplaceholder.typicode.com/users'
// Читаем локальный Tornado Web Server
const requestURL = 'http://127.0.0.1:8888/'
// Задаем метод запроса
function sendRequest(method, url){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    // Определяем тип данных
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {resolve(xhr.response)}
    }
    xhr.onerror = () => {reject(xhr.response)}
    xhr.send()
  })
}
function out() {
  var button;
  button = document.getElementById('out');                  //Прячем кнопку
  button.visible=false;
  sendRequest('GET', requestURL)                            //Отправляем запрос на сервер
    .then(data => {
      start = document.getElementById('start');
      let innerdata = JSON.parse(data)                      //Преобразуем данные
      innerdata.forEach(item => {
        let contact = document.createElement('div');
        contact.style="width: 450px; padding: 10px; border:1px solid black"
        contact.classList.add('contact')
        contact.innerHTML = `
          <div class="id"><b>id:</b>${item.id}</div>
          <div class="name"><b>Имя:</b>   ${item.name}</div>
          <div class="username"><b>Логин:</b>   ${item.username}</div>
          <div class="email"><b>Почта:</b>   ${item.email}</div>
          <div class="adress"><b>Адрес:</b>
              <div class="adress"><b>индекс:</b>   ${item.address.zipcode}</div>
              <div class="adress"><b>город:</b>   ${item.address.city}</div>
              <div class="adress"><b>улица:</b>   ${item.address.street}</div>
              <div class="adress"><b>дом:</b>   ${item.address.suite}</div>
              <div class="geo"><b>Геолокация: Широта:</b>${item.address.geo.lat}; Долгота:${item.address.geo.lng} </div>
          </div>
          <div class="phone"><b>Телефон:</b>   ${item.phone}</div>
          <div class="website"><b>Вэб-сайт:</b>   ${item.website}</div>
          <div class="company"><b>Данные о компании:</b>
            <div class="company"><b>название:</b>   ${item.company.name}</div>
            <div class="company"><b>профиль:</b>   ${item.company.catchPhrase}</div>
            <div class="company"><b>специализация:</b>   ${item.company.bs}</div>
          </div>
        `
        document.querySelector('.app').appendChild(contact);
      });
      start.innerHTML = '<h2 style="text-align: center">Полученные данные по адресу: http://127.0.0.1:8888/</h2>'
    })
    .catch(err => console.log(err))
}
