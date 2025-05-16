document.addEventListener('DOMContentLoaded', function() {

    const plantsData = [
        {
            id: 1,
            image: 'https://i.ibb.co/WN6pStgh/cochliobolus-sativus.jpg',
            diagnosis: 'Гельминтоспориоз колоса',
            description: 'Темно-бурые пятна на чешуйках колоса. Протравливание семян. Для этого используйте протравители ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО, МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС. Обработка фунгицидами АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА® во время вегетации.',
            type: 'disease'
        },
        {
            id: 2,
            image: 'https://i.ibb.co/DPn2491m/erysiphe-graminis5.jpg',
            diagnosis: 'Мучнистая роса',
            description: 'На надземной части зерновых образуются белые, похожие на вату, скопления мицелия и конидий, которые можно легко отодвинуть ногтем. Обработка вегетирующих растений фунгицидами АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА®, ТИЛТ ТУРБО®, ЭЛАТУС™РИА. Избегать чрезмерного загущения и избытка азотных удобрений.',
            type: 'disease'
        },
        {
            id: 3,
            image: 'https://i.ibb.co/KcHcqSKf/vasilek-siniy-2.jpg',
            diagnosis: 'Василек синий',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 4,
            image: 'https://i.ibb.co/SDFV09PM/bipolaris-sorokiniana-2.jpg',
            diagnosis: 'Прикорневая гниль',
            description: 'На проростках появляются бурые пятна, в начальной стадии штрихообразные, может происходить загнивание первичных корней. Со временем наблюдается побурение основания стебля, узла кущения, корней, возможна пустоколосость. Обработка семян препаратами МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО.',
            type: 'disease'
        },
        {
            id: 5,
            image: 'https://i.ibb.co/KpMKk8KW/18d18b29b96cc92312bc687d3d0281d3.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии кущения, в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 6,
            image: 'https://i.ibb.co/C5TGZ3sn/zvezdchatka-srednyaya-2-13651.jpg',
            diagnosis: 'Звездчатка средняя',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 7,
            image: 'https://i.ibb.co/1G3y7WWn/buraya-rzhavchina-11521.jpg',
            diagnosis: 'Ржавчина',
            description: 'На верхней стороне листьев охристо-коричневые круглые или продолговатые скопления уредоспор. Позже на нижней стороне листа и листовых влагалищах образуются черные овальные или продолговатые скопления телиоспор.Использование устойчивых сортов. Оптимальные сроки сева, сбалансированное использование азотных удобрений. Обработка вегетирующих растений фунгицидами АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА®, ТИЛТ ТУРБО®, ЭЛАТУС™РИА.',
            type: 'disease'
        },
        {
            id: 8,
            image: 'https://i.ibb.co/VpMFv9Mc/septoria-nodorum-1.jpg',
            diagnosis: 'Септориоз колоса',
            description: 'На колос болезнь переходит с листьев. На колосковых чешуях образуются темно-бурые пятна, на которых формируются пикниды. Зерно может не иметь видимых симптомов поражения и отличаться от здорового легковесностью и щуплостью. Протравливание семенного материала препаратами ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО, МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, оптимальные сроки сева, соблюдение севооборота, правильная обработка почвы (лущение стерни с последующей зяблевой вспашкой), сбалансированное внесение минеральных удобрений, обработка фунгицидами (АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА®, ЭЛАТУС™ РИА) в период вегетации, возделывание устойчивых сортов.',
            type: 'disease'
        },
        {
            id: 9,
            image: 'https://i.ibb.co/qYrbh0ZY/lisohvost-polevoy-2.jpg',
            diagnosis: 'Лисохвост полевой',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 10,
            image: 'https://i.ibb.co/ynhCLZ6D/snezhnaya-plesen-1.jpg',
            diagnosis: 'Снежная плесень зерновых',
            description: 'На листьях появляются водянистые пятна, однако наиболее четко она проявляется ранней весной. После таяния снега на листьях появляются грязно-белые пятна, напоминающие участки не растаявшего снега. На них образуется сначала белый, а позже розовый паутинистый мицелиальный налет гриба. Пораженные листья и целые растения могут  быть склеены между собой бело-розовым мицелием в виде сплошной паутинистой пленки. При сильном поражении наблюдается отмирание узла кущения, листовых влагалищ и гибель всего растения. Протравливание семян препаратами МАКСИМ, МАКСИМ ФОРТЕ, СЕЛЕСТ МАКС, ВАЙБРАНС™ИНТЕГРАЛ, ВАЙБРАНС ТРИО, агротехника.',
            type: 'disease'
        },
        {
            id: 11,
            image: 'https://i.ibb.co/cGCLTBB/rozh-siderat-kak-ispolzovat-plyusy-i-minusy-2.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии трубкования, растение в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 12,
            image: 'https://i.ibb.co/fzkGj14C/mar-belaya-2.jpg',
            diagnosis: 'Марь белая',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 13,
            image: 'https://i.ibb.co/zVyY4vFq/pshenica.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии флаг листа, растение в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 14,
            image: 'https://i.ibb.co/5gPTfQnx/ergot-claviceps-purpurea.jpg',
            diagnosis: 'Спорынья',
            description: 'При поражении зерновых культур спорыньей вместо зерна образуются рожки, снаружи темно-фиолетового, внутри белого цвета. Севооборот, использование переходящих семенных фондов, отвальная обработка почвы, борьба с пыреем ползучим, обкашивание обочин дорог, протравливание семян препаратами МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО.',
            type: 'disease'
        },
        {
            id: 15,
            image: 'https://i.ibb.co/Ldnns8hJ/33516288836b519ce519966d0fedb2c0.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии колошения, растение в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 16,
            image: 'https://i.ibb.co/1fyNWw7K/podorozhnik-bolshoi-vshody-1.jpg',
            diagnosis: 'Подорожник большой',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 17,
            image: 'https://i.ibb.co/21V6dv5Z/img0064.jpg',
            diagnosis: 'Фузариоз колоса',
            description: 'Преждевременное пожелтение в начале отдельных колосков, а в дальнейшем целых участков колоса. На нем появляется красный (оранжевый) налет спороношения. Соблюдение севооборота. Использование устойчивых сортов. Протравливание семенного материала препаратами, содержащими флудиоксонил и седаксан: ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО, МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС. Запашка растительных остатков. Использование фунгицидов АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА® в фазу цветения.',
            type: 'disease'
        },
        {
            id: 18,
            image: 'https://i.ibb.co/Jw6Ky5GB/oulema-2.jpg',
            diagnosis: 'Твердая головня пшеницы',
            description: 'Пораженные колосья несколько сплюснуты, колоски растопырены и имеют интенсивный сизо-зеленый цвет. Вместо зерновки образуются черные плотные головневые мешочки. При раздавливании такие мешочки издают запах триметиламина. В фазе восковой спелости пораженные колосья остаются прямостоячими, здоровые под тяжестью зерна поникают. Обработка семян препаратами МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО.',
            type: 'disease'
        },
    ];
    
    const plantsContainer = document.getElementById('plants-container');
    const modal = document.getElementById('plant-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDiagnosis = document.getElementById('modal-diagnosis');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');
    const badBtn = document.getElementById('bad-btn');
    const goodBtn = document.getElementById('good-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const showResultsBtn = document.getElementById('show-results-btn');
    const resultText = document.getElementById('result-text');
    const roleModal = document.getElementById('role-modal');
    const agronomistBtn = document.getElementById('agronomist-btn');
    const foremanBtn = document.getElementById('foreman-btn');
    const startCheckBtn = document.querySelector('.btn[href="#gallery"]');

    const pestsFilter = document.querySelector('.filter-btn[data-filter="pests"]');
    if (pestsFilter) {
        pestsFilter.remove();
    }

    startCheckBtn.addEventListener('click', function(e) {
        e.preventDefault();
        roleModal.style.display = 'block';
    });
    
    agronomistBtn.addEventListener('click', function() {
        roleModal.style.display = 'none';
        window.location.href = "#gallery";
        console.log("Выбрана роль: Агроном");
    });
    
    foremanBtn.addEventListener('click', function() {
        roleModal.style.display = 'none';
        window.location.href = "#gallery";
        console.log("Выбрана роль: Бригадир");
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === roleModal) {
            roleModal.style.display = 'none';
        }
    });

    let currentPlantId = null;
    
    let ratings = JSON.parse(localStorage.getItem('plantRatings')) || {};

    function checkCompletion() {
        const allRated = plantsData.every(plant => ratings[plant.id]);
        showResultsBtn.style.display = allRated ? 'block' : 'none';
        return allRated;
    }

function showResults() {
    const healthyCount = plantsData.filter(plant => ratings[plant.id] === 'good').length;
    const problemCount = plantsData.length - healthyCount;
    
    let resultHTML = `
        <h3>Результаты анализа</h3>
        <p>Вы проанализировали ${plantsData.length} растений:</p>
        <p>✅ Здоровые растения: ${healthyCount}</p>
        <p>❌ Проблемные растения: ${problemCount}</p>
        <p class="final-result">лалалала блаблабла улюлюлю говня</p>
        <div class="pdf-download">
            <a href="file:///C:/Users/user/Desktop/agrodetector/Результат.pdf" class="pdf-link" download>
                <i class="fas fa-file-pdf"></i> Скачать отчет в PDF
            </a>
        </div>
    `;
    
    resultText.innerHTML = resultHTML;
    resultText.style.display = 'block';
}
    function renderPlants(filter = 'all') {
        plantsContainer.innerHTML = '';
        
        const filteredPlants = filter === 'all' 
            ? plantsData 
            : plantsData.filter(plant => plant.type === filter && plant.type !== 'pests');
        
        filteredPlants.forEach(plant => {
            const plantCard = document.createElement('div');
            plantCard.className = 'plant-card';
            plantCard.dataset.id = plant.id;
            
            const status = ratings[plant.id] || '';
            const statusClass = status === 'bad' ? '❌' : status === 'good' ? '✅' : '';
            
            plantCard.innerHTML = `
                <img src="${plant.image}" alt="${plant.diagnosis}" class="plant-img">
                <div class="plant-info">
                    <h3>${plant.diagnosis}</h3>
                </div>
                <div class="plant-status">${statusClass}</div>
            `;
            
            plantCard.addEventListener('click', () => openModal(plant));
            plantsContainer.appendChild(plantCard);
        });
        
        checkCompletion();
    }

    function openModal(plant) {
        currentPlantId = plant.id;
        modalImage.src = plant.image;
        modalDiagnosis.textContent = plant.diagnosis;
        modalDescription.textContent = plant.description;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
        currentPlantId = null;
    }

    function ratePlant(isBad) {
        if (!currentPlantId) return;
        
        ratings[currentPlantId] = isBad ? 'bad' : 'good';
        localStorage.setItem('plantRatings', JSON.stringify(ratings));
        
        const statusElement = document.querySelector(`.plant-card[data-id="${currentPlantId}"] .plant-status`);
        statusElement.textContent = isBad ? '❌' : '✅';
        
        closeModal();
        renderPlants();
        checkCompletion();
    }

    function setActiveFilter(e) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderPlants(e.target.dataset.filter);
    }

    closeBtn.addEventListener('click', closeModal);
    badBtn.addEventListener('click', () => ratePlant(true));
    goodBtn.addEventListener('click', () => ratePlant(false));
    filterButtons.forEach(btn => btn.addEventListener('click', setActiveFilter));
    showResultsBtn.addEventListener('click', showResults);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    renderPlants();
});
