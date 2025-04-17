$(document).ready(function() {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});
const submit = document.querySelector('.submit-btn');
submit.addEventListener('click', (e) => {
	e.preventDefault();
	const name = document.getElementById("name");
	const error_name = document.getElementById("error_name");
	if (!name.value) {
		error_name.classList.add("form_invalid");
		error_name.textContent = "入力してください"
		name.classList.add("input-invalid");
	}
	else {
		error_name.textContent = "";
		name.classList.remove('input_invalid');
	}
	const email = document.getElementById("email");
	const error_email = document.getElementById("error_email");
	if (!email.value) {
		error_email.classList.add("form_invalid");
		error_email.textContent = "入力してください"
		email.classList.add("input-invalid");
	}
	else {
		error_email.textContent = "";
		email.classList.remove('input_invalid');
	}
	const message = document.getElementById("message");
	const error_message = document.getElementById("error_message");
	if (!message.value) {
		error_message.classList.add("form_invalid");
		error_message.textContent = "入力してください"
		message.classList.add("input-invalid");
	}
	else {
		error_message.textContent = "";
		message.classList.remove('input_invalid');
	}

}, false);

document.addEventListener("DOMContentLoaded", function() {
	const select_element = document.querySelector("#pulldown select");
	const book_list = document.querySelector("#booklist");
	const books = Array.from(book_list.querySelectorAll(".book"));

	// 初期順保存（おすすめ順）
	const original_order = books.slice();

	select_element.addEventListener("change", function() {
		const selected_value = this.value;

		let sorted_books;

		if (selected_value === "価格の安い順") {
			sorted_books = books.slice().sort((a, b) => {
				const price_a = get_price(a);
				const price_b = get_price(b);
				return price_a - price_b;
			});
		} else if (selected_value === "価格の高い順") {
			sorted_books = books.slice().sort((a, b) => {
				const price_a = get_price(a);
				const price_b = get_price(b);
				return price_b - price_a;
			});
		} else {
			// おすすめ順（元の順）
			sorted_books = original_order.slice();
		}

		// 一度中身を空にして、ソート後の本を追加し直す
		book_list.innerHTML = "";
		sorted_books.forEach(book => book_list.appendChild(book));
	});

	function get_price(book_element) {
		const price_text = book_element.querySelector(".price").textContent;
		const price_numeric = parseInt(price_text.replace(/[^\d]/g, ""), 10);
		return price_numeric;
	}
});

