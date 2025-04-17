document.addEventListener('DOMContentLoaded', function () {
	let cart_items = [];

	function updateCartDisplay() {
		const cart_list = document.querySelector('.cart_list');
		const cart_total_elem = document.querySelector('.cart_total');
		const cart_count = document.querySelector('.cart_count');

		cart_list.innerHTML = '';
		let total = 0;

		cart_items.forEach(item => {
			const li = document.createElement('li');
			const subtotal = item.price * item.amount;
			li.textContent = `${item.name}（${item.amount}冊）- ${subtotal}円`;
			cart_list.appendChild(li);
			total += subtotal;
		});

		cart_total_elem.textContent = `合計: ${total}円`;
		cart_count.textContent = cart_items.length;
	}

	document.querySelector('.clear_cart').addEventListener('click', () => {
		cart_items = [];
		updateCartDisplay();
	});

	document.querySelectorAll('.book').forEach(book => {
		const cart_btn = book.querySelector('.cart');
		const name = book.querySelector('.bookname').textContent;
		const price = parseInt(book.querySelector('.price').textContent.replace('円', ''));
		const amount_select = book.querySelector('.amount');

		cart_btn.addEventListener('click', () => {
			const amount = parseInt(amount_select.value);
			if (amount === 0) return;

			const existing = cart_items.find(item => item.name === name);
			if (existing) {
				existing.amount += amount;
			} else {
				cart_items.push({ name, price, amount });
			}
			updateCartDisplay();
		});
	});;
});

$('.js-modal-open').on('click', () => {
  $('body').css({ 'overflow': 'hidden' });
  $('#modal').addClass('show').css('display', 'flex');
});

$('.js-modal-close').on('click', () => {
  $('body').css({ 'overflow': '' });
  $('#modal').removeClass('show').hide();
});

$('#modal').on('click', e => {
  if (e.target === $('#modal')[0]) {
    $('body').css({ 'overflow': '' });
    $('#modal').removeClass('show').hide();
  }
});
