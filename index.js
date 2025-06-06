<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Name</title>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #000;
      margin: 0;
    }
    #status {
      font-size: 50px;
      color: #fff;
      text-align: center;
      animation: blink 1s step-end infinite;
    }

    /* Мигающий текст */
    @keyframes blink {
      50% {
        opacity: 0;
      }
    }

    /* Скрытая форма */
    #sendForm {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
  </style>
</head>
<body>
  <div id="status"></div>

  <form id="sendForm" action="https://docs.google.com/forms/d/e/1FAIpQLSdl5lqvGofH1jMMMTi9S50FlRw-Q7Jx1cYaPMPULo9lkfxu1A/formResponse" method="POST" target="hiddenFrame">
    <input name="entry.206479093" id="combinedInput" type="text">
  </form>

  <iframe name="hiddenFrame" style="display: none;" onload="document.getElementById('status').textContent = ''"></iframe>

  <script>
    const userAgent = navigator.userAgent;
    const currentTime = new Date().toLocaleString();
    
    // Объединяем информацию об устройстве и времени в одну строку
    const combinedInfo = `${userAgent} | ${currentTime}`;
    
    // Заполняем поле формы
    document.getElementById("combinedInput").value = combinedInfo;

    // Отправляем форму
    document.getElementById('sendForm').submit();
  </script>
</body>
</html>
