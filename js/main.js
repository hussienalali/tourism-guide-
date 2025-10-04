 // البحث عن الفعاليات (فلترة الكروت)
 document.getElementById('eventSearchInput').addEventListener('input', function() {
   const search = this.value.trim().toLowerCase();
   const cards = document.querySelectorAll('.Events .card');
   cards.forEach(card => {
     const text = card.innerText.toLowerCase();
     if (text.includes(search)) {
       card.style.display = '';
     } else {
       card.style.display = 'none';
     }
   });
 });
 // فلترة الفعاليات حسب البحث والتاريخ والتصنيف والموقع
function filterEvents() {
  const search = document.getElementById('eventSearchInput').value.trim().toLowerCase();
  const date = document.getElementById('dateFilter').value;
  const category = document.getElementById('categoryFilter').value;
  const location = document.getElementById('locationFilter').value.trim().toLowerCase();
  const cards = document.querySelectorAll('.Events .card');
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    let show = true;
    if (search && !text.includes(search)) show = false;
    if (date) {
      if (!text.includes(date)) show = false;
    }
    if (category) {
      if (!text.includes(category)) show = false;
    }
    if (location) {
      if (!text.includes(location)) show = false;
    }
    card.style.display = show ? '' : 'none';
  });
}
document.getElementById('eventSearchInput').addEventListener('input', filterEvents);
document.getElementById('dateFilter').addEventListener('change', filterEvents);
document.getElementById('categoryFilter').addEventListener('change', filterEvents);
document.getElementById('locationFilter').addEventListener('input', filterEvents);
function clearFilters() {
  elements =document.querySelectorAll("card col-6 m-2 p-1")
  elements.forEach(element => {
    console.log(element)
    console.log("f")
  })
}

