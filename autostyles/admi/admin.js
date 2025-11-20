// Переключение вкладок
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// Управление заказами
function updateOrder(button, status) {
  const row = button.closest('tr');
  row.cells[4].textContent = status === 'confirmed' ? 'Подтверждено' : status === 'rescheduled' ? 'Перенесено' : 'Отменено';
  alert(`Статус заказа обновлен на: ${row.cells[4].textContent}`);
}

// Управление услугами
function editService(button) {
  const service = button.parentElement;
  const newName = prompt("Введите новое название услуги:", service.firstChild.textContent.trim());
  if(newName) service.firstChild.textContent = newName;
}

function addService() {
  const name = prompt("Введите название новой услуги:");
  if(name){
    const li = document.createElement('li');
    li.innerHTML = `${name} <button onclick="editService(this)">Редактировать</button>`;
    document.getElementById('services-list').appendChild(li);
  }
}

// Отчеты
function generateReport(type){
  alert(`Генерация отчета по: ${type}`);
}
