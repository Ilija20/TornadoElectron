const electron = require('electron');
const url = require('url');
const fs = require('fs');
const http = require('http');
const path = require('path');
const {app, BrowserWindow} = electron;
let appWindow;
// Ждем загрузки приложения
 app.on('ready', function(){
  // Создаем окно
  appWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    // webPreferences: {webSecurity: false}
  })
  // Загружаем разметку страницы
  appWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol:'file:',
    slashes: true
  }))


})
