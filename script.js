    //  script.js Fase03
   
   // Fotos de perfil
    const photos = [
      'https://i.ibb.co/60zXWsC8/290569328-585508423192478-904275.png',
      'https://i.ibb.co/HMccjqq/Whats-App-Image-2025-05-30-at-16-33-02-1.jpg',
    ];
    let current = 0;
    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    function updateImage() { mainImage.src = photos[current]; }
    prevBtn.addEventListener('click', () => { current = (current - 1 + photos.length) % photos.length; updateImage(); });
    nextBtn.addEventListener('click', () => { current = (current + 1) % photos.length; updateImage(); });

    // Fase 03: Adicionar UCs
    const ucList = document.getElementById('ucList');
    document.getElementById('addUcBtn').addEventListener('click', () => {
      const novaUc = prompt('Digite o nome da nova UC:');
      if (novaUc) {
        const li = document.createElement('li');
        li.textContent = novaUc + ' ';
        const upBtn = document.createElement('button'); upBtn.textContent = '↑'; upBtn.classList.add('up-btn');
        const downBtn = document.createElement('button'); downBtn.textContent = '↓'; downBtn.classList.add('down-btn');
        li.append(upBtn, downBtn);
        addUcListeners(li);
        ucList.appendChild(li);
      }
    });
    // Mover UCs
    function addUcListeners(li) {
      const upBtn = li.querySelector('.up-btn');
      const downBtn = li.querySelector('.down-btn');
      upBtn.addEventListener('click', () => {
        const prev = li.previousElementSibling;
        if (prev) li.parentNode.insertBefore(li, prev);
      });
      downBtn.addEventListener('click', () => {
        const next = li.nextElementSibling;
        if (next) li.parentNode.insertBefore(next, li);
      });
    }
    ucList.querySelectorAll('li').forEach(addUcListeners);

   // Validação de CPF — apaga o valor errado
document.getElementById('cpfInput').addEventListener('blur', (e) => {
  const valor = e.target.value.trim();
  const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (valor && !regexCpf.test(valor)) {
    alert('CPF inválido. Use o formato ddd.ddd.ddd-dd');
    // apaga o que foi digitado
    e.target.value = '';
    setTimeout(() => {
      e.target.focus();
    }, 0);
  }
});

// Validação de E-mail — apaga o valor errado
document.getElementById('emailInput').addEventListener('blur', (e) => {
  const valor = e.target.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (valor && !regexEmail.test(valor)) {
    alert('E-mail com formato inválido.');
    // apaga o que foi digitado
    e.target.value = '';
    setTimeout(() => {
      e.target.focus();
    }, 0);
  }
});

    // Fase 03: Edição de Perfil Pessoal via DOM
    const personalDiv = document.getElementById('personalProfile');
    document.getElementById('editPersonalBtn').addEventListener('click', () => {
      const textarea = document.createElement('textarea');
      textarea.value = personalDiv.textContent;
      personalDiv.replaceWith(textarea);
      const saveBtn = document.createElement('button');
      saveBtn.textContent = 'Salvar';
      textarea.after(saveBtn);
      saveBtn.addEventListener('click', () => {
        personalDiv.textContent = textarea.value;
        textarea.replaceWith(personalDiv);
        saveBtn.remove();
      });
    });
