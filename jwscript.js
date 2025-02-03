const container = document.getElementById('card-explain');
const words = container.textContent.split(' ');

// 단어 단위로 나눠 span 요소로 감싸기
container.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
