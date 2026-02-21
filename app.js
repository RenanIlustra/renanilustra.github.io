/**
 * FitDeck – Fitness Recipe Card App
 * app.js
 */

// ─── Recipe Data ────────────────────────────────────────────────────────────
const INITIAL_RECIPES = [
    {
        id: 1,
        name: "Omelete Proteico com Espinafre",
        category: "Café da Manhã",
        emoji: "🥚",
        calories: 280,
        protein: 24,
        carbs: 6,
        fat: 18,
        prepTime: 10,
        ingredients: ["3 ovos inteiros", "1 xícara de espinafre fresco", "30g de queijo cottage", "1 colher de azeite", "Sal e pimenta a gosto"],
        instructions: "Bata os ovos com sal e pimenta. Refogue o espinafre no azeite por 2 minutos. Despeje os ovos na frigideira, adicione o espinafre e o cottage. Dobre ao meio e sirva quente."
    },
    {
        id: 2,
        name: "Bowl de Açaí Proteico",
        category: "Café da Manhã",
        emoji: "🫐",
        calories: 340,
        protein: 18,
        carbs: 45,
        fat: 9,
        prepTime: 5,
        ingredients: ["200g de polpa de açaí", "1 scoop de whey baunilha", "1/2 banana congelada", "1 colher de aveia", "Mix de berries para cobrir"],
        instructions: "Bata o açaí com o whey e a banana congelada até ficar cremoso. Despeje em tigela e cubra com a aveia e as berries. Consuma imediatamente."
    },
    {
        id: 3,
        name: "Frango Grelhado com Quinoa",
        category: "Almoço",
        emoji: "🍗",
        calories: 420,
        protein: 42,
        carbs: 38,
        fat: 8,
        prepTime: 25,
        ingredients: ["180g de filé de frango", "1 xícara de quinoa cozida", "1/2 pepino", "Tomate cereja", "Molho de limão e ervas"],
        instructions: "Tempere o frango com limão, alho e ervas. Grelhe por 6-7 min de cada lado. Sirva sobre a quinoa com os legumes frescos e regue com molho de limão."
    },
    {
        id: 4,
        name: "Salmão com Batata Doce Assada",
        category: "Almoço",
        emoji: "🐟",
        calories: 480,
        protein: 38,
        carbs: 42,
        fat: 14,
        prepTime: 30,
        ingredients: ["180g de filé de salmão", "200g de batata doce", "Brócolis a gosto", "Azeite extra virgem", "Limão siciliano e endro"],
        instructions: "Asse a batata doce e o brócolis por 20 min a 200°C. Grelhe o salmão temperado com limão e endro por 4 min de cada lado. Monte o prato e regue com fio de azeite."
    },
    {
        id: 5,
        name: "Wrap de Peru com Abacate",
        category: "Almoço",
        emoji: "🌯",
        calories: 360,
        protein: 32,
        carbs: 28,
        fat: 13,
        prepTime: 10,
        ingredients: ["2 fatias de peito de peru", "1/2 abacate maduro", "Tortilla integral", "Alface americana", "Mostarda dijon e limão"],
        instructions: "Amasse o abacate com limão e sal. Espalhe na tortilla, adicione a alface, o peru e a mostarda. Enrole firme e corte ao meio. Sirva imediatamente."
    },
    {
        id: 6,
        name: "Tilápia ao Forno com Legumes",
        category: "Jantar",
        emoji: "🐠",
        calories: 310,
        protein: 36,
        carbs: 18,
        fat: 7,
        prepTime: 35,
        ingredients: ["180g de filé de tilápia", "Abobrinha fatiada", "Pimentão vermelho", "200g de tomate pelado", "Ervas provençais"],
        instructions: "Disponha os legumes em refratário, coloque o peixe por cima. Regue com tomate, tempere com as ervas e asse por 25 min a 190°C."
    },
    {
        id: 7,
        name: "Carne Magra com Couve-flor",
        category: "Jantar",
        emoji: "🥩",
        calories: 350,
        protein: 40,
        carbs: 12,
        fat: 14,
        prepTime: 20,
        ingredients: ["180g de patinho moído", "1 xícara de couve-flor", "Alho e cebola", "Páprica defumada", "Azeite e salsinha"],
        instructions: "Refogue o alho e cebola, adicione a carne moída e tempere com páprica. Cozinhe a couve-flor no vapor. Sirva a carne sobre a couve-flor e finalize com salsinha fresca."
    },
    {
        id: 8,
        name: "Sopa de Lentilha com Espinafre",
        category: "Jantar",
        emoji: "🍲",
        calories: 290,
        protein: 18,
        carbs: 40,
        fat: 5,
        prepTime: 30,
        ingredients: ["1 xícara de lentilha vermelha", "2 xícaras de espinafre", "Cebola e alho", "Cominho e cúrcuma", "Caldo de legumes"],
        instructions: "Refogue cebola e alho. Adicione as lentilhas, o caldo e os temperos. Cozinhe por 20 min. Adicione o espinafre, cozinhe por mais 2 min e sirva."
    },
    {
        id: 9,
        name: "Iogurte Grego com Granola Fit",
        category: "Lanche",
        emoji: "🥣",
        calories: 220,
        protein: 16,
        carbs: 24,
        fat: 5,
        prepTime: 3,
        ingredients: ["200g de iogurte grego natural", "30g de granola sem açúcar", "1 colher de mel", "Morango fatiado"],
        instructions: "Despeje o iogurte em tigela. Adicione a granola, o mel e os morangos fatiados. Consuma gelado."
    },
    {
        id: 10,
        name: "Shake Pós-Treino",
        category: "Lanche",
        emoji: "🥤",
        calories: 260,
        protein: 28,
        carbs: 30,
        fat: 3,
        prepTime: 3,
        ingredients: ["1 scoop de whey chocolate", "200ml de leite desnatado", "1/2 banana madura", "1 colher de pasta de amendoim"],
        instructions: "Bata todos os ingredientes no liquidificador com gelo até ficar homogêneo. Consuma imediatamente após o treino."
    },
    {
        id: 11,
        name: "Panqueca de Aveia Proteica",
        category: "Café da Manhã",
        emoji: "🥞",
        calories: 320,
        protein: 22,
        carbs: 38,
        fat: 7,
        prepTime: 15,
        ingredients: ["1 xícara de aveia", "2 ovos", "1 banana madura", "1/2 scoop de whey baunilha", "Canela a gosto"],
        instructions: "Bata todos os ingredientes no liquidificador. Cozinhe porções pequenas em frigideira antiaderente, 2-3 min de cada lado. Sirva com mel e frutas."
    },
    {
        id: 12,
        name: "Edamame com Sal Rosa",
        category: "Lanche",
        emoji: "🫛",
        calories: 160,
        protein: 14,
        carbs: 12,
        fat: 5,
        prepTime: 5,
        ingredients: ["200g de edamame congelado", "Sal rosa do Himalaia", "Limão a gosto", "Pimenta do reino"],
        instructions: "Cozinhe o edamame em água fervente por 3-4 minutos. Escorra, tempere com sal rosa, limão e pimenta. Sirva quente ou frio."
    }
];

// ─── State ───────────────────────────────────────────────────────────────────
let recipes = [...INITIAL_RECIPES];
let nextId = INITIAL_RECIPES.length + 1;

// ─── DOM References ───────────────────────────────────────────────────────────
const deckEl = document.getElementById('deck');
const deckCount = document.getElementById('deck-count');
const btnShuffle = document.getElementById('btn-shuffle');
const btnRandom = document.getElementById('btn-random');
const btnAdd = document.getElementById('btn-add');

// Detail modal
const detailModal = document.getElementById('detail-modal');
const detailClose = document.getElementById('detail-close');
const modalEmoji = document.getElementById('modal-emoji');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalPrepTime = document.getElementById('modal-prep-time');
const modalMacros = document.getElementById('modal-macros');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');

// Add modal
const addModal = document.getElementById('add-modal');
const addClose = document.getElementById('add-close');
const addForm = document.getElementById('add-recipe-form');
const formError = document.getElementById('form-error');

// Spotlight
const spotlightOverlay = document.getElementById('spotlight-overlay');
const spotlightContainer = document.getElementById('spotlight-container');
const spotlightDismiss = document.getElementById('spotlight-dismiss');

// ─── Category Configs ────────────────────────────────────────────────────────
const CAT_CONFIG = {
    "Café da Manhã": { icon: "☀️" },
    "Almoço": { icon: "🥗" },
    "Jantar": { icon: "🌙" },
    "Lanche": { icon: "🍎" }
};

// ─── Render Deck ─────────────────────────────────────────────────────────────
function renderDeck() {
    deckEl.innerHTML = '';
    deckCount.textContent = recipes.length;

    const total = recipes.length;
    const MAX_SPREAD_ANGLE = Math.min(28, total * 2.4);

    recipes.forEach((recipe, i) => {
        const t = total === 1 ? 0 : (i / (total - 1)) * 2 - 1; // -1 to +1
        const angle = t * MAX_SPREAD_ANGLE;
        const zIndex = i + 1;

        const card = createCardElement(recipe);

        // Anchor every card at bottom-center of the deck div;
        // rotation around 'bottom center' fans them like a real hand of cards
        card.style.setProperty('--base-transform', `translateX(-50%) rotate(${angle}deg)`);
        card.style.transform = `translateX(-50%) rotate(${angle}deg)`;
        card.style.left = '50%';
        card.style.bottom = '0';
        card.style.top = 'auto';
        card.style.translate = 'none';
        card.style.zIndex = zIndex;

        card.addEventListener('click', () => openDetailModal(recipe));
        deckEl.appendChild(card);
    });
}

// ─── Create Card Element ──────────────────────────────────────────────────────
function createCardElement(recipe) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = recipe.id;
    card.dataset.cat = recipe.category;

    const catIcon = (CAT_CONFIG[recipe.category] || {}).icon || '🍽️';

    card.innerHTML = `
    <div class="card-inner">
      <div class="card-emoji-area">
        <div class="card-emoji">${recipe.emoji}</div>
        <div class="card-category">${catIcon} ${recipe.category}</div>
      </div>
      <div class="card-name">${recipe.name}</div>
      <div class="card-macros">
        <div class="macro-item">
          <span class="macro-val">${recipe.calories}</span>
          <span class="macro-lbl">kcal</span>
        </div>
        <div class="macro-item">
          <span class="macro-val">${recipe.protein}g</span>
          <span class="macro-lbl">Prot</span>
        </div>
        <div class="macro-item">
          <span class="macro-val">${recipe.carbs}g</span>
          <span class="macro-lbl">Carb</span>
        </div>
        <div class="macro-item">
          <span class="macro-val">${recipe.fat}g</span>
          <span class="macro-lbl">Gord</span>
        </div>
      </div>
      ${recipe.prepTime ? `<div class="card-prep">⏱ ${recipe.prepTime} min de preparo</div>` : ''}
    </div>
  `;

    return card;
}

// ─── Open Detail Modal ────────────────────────────────────────────────────────
function openDetailModal(recipe) {
    const catIcon = (CAT_CONFIG[recipe.category] || {}).icon || '🍽️';

    modalEmoji.textContent = recipe.emoji;
    modalCategory.textContent = `${catIcon} ${recipe.category}`;
    modalTitle.textContent = recipe.name;
    modalPrepTime.textContent = recipe.prepTime ? `⏱ ${recipe.prepTime} min de preparo` : '';

    // Macros grid
    modalMacros.innerHTML = `
    <div class="macro-card">
      <span class="mc-val">${recipe.calories}</span>
      <span class="mc-unit">kcal</span>
      <span class="mc-lbl">Calorias</span>
    </div>
    <div class="macro-card">
      <span class="mc-val">${recipe.protein}g</span>
      <span class="mc-unit">por porção</span>
      <span class="mc-lbl">Proteína</span>
    </div>
    <div class="macro-card">
      <span class="mc-val">${recipe.carbs}g</span>
      <span class="mc-unit">por porção</span>
      <span class="mc-lbl">Carboidrato</span>
    </div>
    <div class="macro-card">
      <span class="mc-val">${recipe.fat}g</span>
      <span class="mc-unit">por porção</span>
      <span class="mc-lbl">Gordura</span>
    </div>
  `;

    // Ingredients
    modalIngredients.innerHTML = recipe.ingredients
        .map(ing => `<li>${ing}</li>`)
        .join('');

    modalInstructions.textContent = recipe.instructions;

    openModal(detailModal);
}

// ─── Modal Helpers ────────────────────────────────────────────────────────────
function openModal(el) {
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(el) {
    el.classList.remove('open');
    document.body.style.overflow = '';
}

// ─── Shuffle ──────────────────────────────────────────────────────────────────
function shuffleDeck() {
    const cards = Array.from(deckEl.querySelectorAll('.card'));

    // Animate scatter
    cards.forEach(card => {
        const scatterX = (Math.random() - 0.5) * 400;
        const scatterY = (Math.random() - 0.5) * 300;
        const scatterR = (Math.random() - 0.5) * 120;

        card.style.setProperty('--scatter-x', `${scatterX}px`);
        card.style.setProperty('--scatter-y', `${scatterY}px`);
        card.style.setProperty('--scatter-r', `${scatterR}deg`);
        card.classList.add('shuffling');
    });

    // Fisher-Yates shuffle
    for (let i = recipes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [recipes[i], recipes[j]] = [recipes[j], recipes[i]];
    }

    // Re-render after animation
    setTimeout(() => {
        cards.forEach(card => card.classList.remove('shuffling'));
        renderDeck();
    }, 850);

    // Disable button during animation
    btnShuffle.disabled = true;
    setTimeout(() => { btnShuffle.disabled = false; }, 900);
}

// ─── Random Pick ──────────────────────────────────────────────────────────────
function pickRandom() {
    if (recipes.length === 0) return;

    const randomIndex = Math.floor(Math.random() * recipes.length);
    const recipe = recipes[randomIndex];

    // Build a card clone for spotlight
    const cardClone = createCardElement(recipe);
    spotlightContainer.innerHTML = '';
    spotlightContainer.appendChild(cardClone);

    spotlightOverlay.classList.add('open');
}

// ─── Add Recipe ───────────────────────────────────────────────────────────────
function handleAddRecipe(e) {
    e.preventDefault();
    formError.textContent = '';

    const name = document.getElementById('f-name').value.trim();
    const category = document.getElementById('f-category').value;
    const emoji = document.getElementById('f-emoji').value.trim() || '🍽️';
    const calories = parseInt(document.getElementById('f-calories').value);
    const protein = parseInt(document.getElementById('f-protein').value);
    const carbs = parseInt(document.getElementById('f-carbs').value);
    const fat = parseInt(document.getElementById('f-fat').value);
    const prepTime = parseInt(document.getElementById('f-preptime').value) || null;
    const ingredRaw = document.getElementById('f-ingredients').value.trim();
    const instructions = document.getElementById('f-instructions').value.trim();

    // Validation
    if (!name) { formError.textContent = '⚠️ Nome da receita é obrigatório.'; return; }
    if (!category) { formError.textContent = '⚠️ Selecione uma categoria.'; return; }
    if (!calories || isNaN(calories)) { formError.textContent = '⚠️ Informe as calorias.'; return; }
    if (isNaN(protein) || isNaN(carbs) || isNaN(fat)) {
        formError.textContent = '⚠️ Preencha todos os macronutrientes.'; return;
    }
    if (!ingredRaw) { formError.textContent = '⚠️ Informe os ingredientes.'; return; }
    if (!instructions) { formError.textContent = '⚠️ Informe o modo de preparo.'; return; }

    const ingredients = ingredRaw.split('\n').map(l => l.trim()).filter(Boolean);

    const newRecipe = {
        id: nextId++,
        name, category, emoji, calories, protein, carbs, fat,
        prepTime, ingredients, instructions
    };

    recipes.push(newRecipe);
    renderDeck();
    closeModal(addModal);
    addForm.reset();

    // Scroll to new card and highlight it
    setTimeout(() => {
        const newCard = deckEl.querySelector(`[data-id="${newRecipe.id}"]`);
        if (newCard) {
            newCard.classList.add('selected');
            setTimeout(() => newCard.classList.remove('selected'), 2000);
        }
    }, 100);
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
btnShuffle.addEventListener('click', shuffleDeck);
btnRandom.addEventListener('click', pickRandom);
btnAdd.addEventListener('click', () => openModal(addModal));

detailClose.addEventListener('click', () => closeModal(detailModal));
addClose.addEventListener('click', () => closeModal(addModal));
addForm.addEventListener('submit', handleAddRecipe);

// Close modals on overlay click
detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal(detailModal);
});
addModal.addEventListener('click', (e) => {
    if (e.target === addModal) closeModal(addModal);
});

// Spotlight dismiss
spotlightDismiss.addEventListener('click', () => {
    spotlightOverlay.classList.remove('open');
});
spotlightOverlay.addEventListener('click', (e) => {
    if (e.target === spotlightOverlay) spotlightOverlay.classList.remove('open');
});

// Keyboard: close modals with Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(detailModal);
        closeModal(addModal);
        spotlightOverlay.classList.remove('open');
    }
});

// ─── Init ─────────────────────────────────────────────────────────────────────
renderDeck();
