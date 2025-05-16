document.addEventListener('DOMContentLoaded', function() {
    // Данные о растениях
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
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/zvezdchatka_srednyaya_2_13651.jpg',
            diagnosis: 'Звездчатка средняя',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 7,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/buraya_rzhavchina_11521.jpg',
            diagnosis: 'Ржавчина',
            description: 'На верхней стороне листьев охристо-коричневые круглые или продолговатые скопления уредоспор. Позже на нижней стороне листа и листовых влагалищах образуются черные овальные или продолговатые скопления телиоспор.Использование устойчивых сортов. Оптимальные сроки сева, сбалансированное использование азотных удобрений. Обработка вегетирующих растений фунгицидами АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА®, ТИЛТ ТУРБО®, ЭЛАТУС™РИА.',
            type: 'disease'
        },
        {
            id: 8,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/septoria_nodorum_1.jpg',
            diagnosis: 'Септориоз колоса',
            description: 'На колос болезнь переходит с листьев. На колосковых чешуях образуются темно-бурые пятна, на которых формируются пикниды. Зерно может не иметь видимых симптомов поражения и отличаться от здорового легковесностью и щуплостью. Протравливание семенного материала препаратами ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО, МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, оптимальные сроки сева, соблюдение севооборота, правильная обработка почвы (лущение стерни с последующей зяблевой вспашкой), сбалансированное внесение минеральных удобрений, обработка фунгицидами (АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА®, ЭЛАТУС™ РИА) в период вегетации, возделывание устойчивых сортов.',
            type: 'disease'
        },
        {
            id: 9,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/lisohvost_polevoy_2.jpg',
            diagnosis: 'Лисохвост полевой',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 10,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/snezhnaya_plesen_1.jpg',
            diagnosis: 'Снежная плесень зерновых',
            description: 'На листьях появляются водянистые пятна, однако наиболее четко она проявляется ранней весной. После таяния снега на листьях появляются грязно-белые пятна, напоминающие участки не растаявшего снега. На них образуется сначала белый, а позже розовый паутинистый мицелиальный налет гриба. Пораженные листья и целые растения могут  быть склеены между собой бело-розовым мицелием в виде сплошной паутинистой пленки. При сильном поражении наблюдается отмирание узла кущения, листовых влагалищ и гибель всего растения. Протравливание семян препаратами МАКСИМ, МАКСИМ ФОРТЕ, СЕЛЕСТ МАКС, ВАЙБРАНС™ИНТЕГРАЛ, ВАЙБРАНС ТРИО, агротехника.',
            type: 'disease'
        },
        {
            id: 11,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/rozh-siderat-kak-ispolzovat-plyusy-i-minusy-2.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии трубкования, растение в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 12,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/mar_belaya_2.jpg',
            diagnosis: 'Марь белая',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 13,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/pshenica.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии флаг листа, растение в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 14,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/ergot_-_claviceps_purpurea.jpg',
            diagnosis: 'Спорынья',
            description: 'При поражении зерновых культур спорыньей вместо зерна образуются рожки, снаружи темно-фиолетового, внутри белого цвета. Севооборот, использование переходящих семенных фондов, отвальная обработка почвы, борьба с пыреем ползучим, обкашивание обочин дорог, протравливание семян препаратами МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО.',
            type: 'disease'
        },
        {
            id: 15,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/33516288836b519ce519966d0fedb2c0.jpg',
            diagnosis: 'Здоровое растение',
            description: 'Пшеница в стадии колошения, растение в хорошем состоянии. Продолжайте текущий уход, регулярно осматривайте на признаки заболеваний.',
            type: 'healthy'
        },
        {
            id: 16,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/podorozhnik_bolshoi_vshody_1.jpg',
            diagnosis: 'Подорожник большой',
            description: 'Удалите растение вручную, стараясь выкопать корень полностью. Может быть устойчив к некоторым гербицидам.',
            type: 'weed'
        },
        {
            id: 17,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/img0064.jpg',
            diagnosis: 'Фузариоз колоса',
            description: 'Преждевременное пожелтение в начале отдельных колосков, а в дальнейшем целых участков колоса. На нем появляется красный (оранжевый) налет спороношения. Соблюдение севооборота. Использование устойчивых сортов. Протравливание семенного материала препаратами, содержащими флудиоксонил и седаксан: ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО, МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС. Запашка растительных остатков. Использование фунгицидов АМИСТАР ТРИО®, АМИСТАР ЭКСТРА®, МАГНЕЛЛО®, МЕНАРА® в фазу цветения.',
            type: 'disease'
        },
        {
            id: 18,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/tilletia_caries_2.jpg',
            diagnosis: 'Твердая головня пшеницы',
            description: 'Пораженные колосья несколько сплюснуты, колоски растопырены и имеют интенсивный сизо-зеленый цвет. Вместо зерновки образуются черные плотные головневые мешочки. При раздавливании такие мешочки издают запах триметиламина. В фазе восковой спелости пораженные колосья остаются прямостоячими, здоровые под тяжестью зерна поникают. Обработка семян препаратами МАКСИМ®, МАКСИМ® ФОРТЕ, СЕЛЕСТ® МАКС, ВАЙБРАНС™ ИНТЕГРАЛ, ВАЙБРАНС® ТРИО.',
            type: 'disease'
        },
        {
            id: 19,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/wireworm-brassicas.jpg',
            diagnosis: 'Проволочники',
            description: 'Наносят большой вред зерновым культурам, особенно яровым. Питаются высеянными семенами, проростками, корнями и стеблями колосовых культур. У набухшего зерна злаков выедают содержимое, оставляя тонкую оболочку, на проростках выгрызают глубокое круглое отверстие. Молодые растения повреждают до наступления фазы стеблевания, измочаливая подземную часть стебля. Вред от проволочников проявляется в изреживании всходов и угнетении поврежденных растений. Основными резервациями проволочников являются участки, покрытые густой злаковой растительностью, особенно пыреем. Высокая численность вредителя отмечается на торфяно-болотных почвах, а также на участках после многолетних трав. Защитные мероприятия. Предпосадочное протравливание семенного материала препаратами. Уничтожение сорняков, особенно пырея; глубокая безотвальная вспашка паровых полей; культивация и междурядное рыхление почвы на пропашных культурах в конце весны – начале лета. Помимо этого: ранняя послеуборочная вспашка и культивация почвы; уничтожение растительных остатков после уборки урожая; внесение высоких доз органических удобрений.',
            type: 'pests'
        },
        {
            id: 20,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/ozimaya_sovka.jpg',
            diagnosis: 'Озимая совка',
            description: 'Распространена по всей республике, в отдельные годы развивается массово. Гусеницы озимой совки питаются самыми разнообразными растениями. На озимых злаках выедают семена и всходы (семядольные листья, первые настоящие листья), повреждают корневые шейки и молодые стебли, часто уничтожают их целиком. Эти повреждения вызывают гибель растений и изреживание всходов. На надземных частях всходов злаков гусеницы объедают листья с краев, перегрызают их, что вызывает образование плешин или изреживание посевов. Предпосадочное протравливание семенного материала препаратами КРУЙЗЕР®, СЕЛЕСТ® МАКС, ВАЙБРАНС™ ИНТЕГРАЛ. Обработка растений инсектицидами АКТАРА®, КАРАТЭ ЗЕОН®, ЭФОРИЯ®.',
            type: 'pests'
        },
        {
            id: 21,
            image: 'file:///C:/Users/user/Desktop/agrodetector/images/oulema_2.jpg',
            diagnosis: 'Пьявица',
            description: 'Поврежденные листья выделяются среди зеленых белесоватыми продольными полосами. При большой численности личинок повреждения сливаются и весь лист белеет. При сильном повреждении листья засыхают, уменьшается масса зерна и снижается урожай. Вредная деятельность продолжается с фазы кущения и заканчивается к моменту колошения. Повреждения пьявицы особенно опасны в засушливые годы, т.к. при недостатке влаги в почве повреждения жуками и личинками сильнее сказываются на растениях, вплоть до того, что они не выколашиваются. Защитные мероприятия. Применение инсектицидов АКТАРА®, КАРАТЭ ЗЕОН®, ЭФОРИЯ® при численности жуков в период питания личинок и жуков, наиболее уязвимых весной сразу после выхода с мест зимовки, краевые обработки полей.',
            type: 'pests'
        },
    ];

    // Элементы DOM
    const plantsContainer = document.getElementById('plants-container');
    const modal = document.getElementById('plant-modal');
    const modalImage = document.getElementById('modal-image');
    const modalDiagnosis = document.getElementById('modal-diagnosis');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');
    const badBtn = document.getElementById('bad-btn');
    const goodBtn = document.getElementById('good-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Текущее выбранное растение
    let currentPlantId = null;
    
    // Загрузка оценок из localStorage
    let ratings = JSON.parse(localStorage.getItem('plantRatings')) || {};

    // Отображение растений
    function renderPlants(filter = 'all') {
        plantsContainer.innerHTML = '';
        
        const filteredPlants = filter === 'all' 
            ? plantsData 
            : plantsData.filter(plant => plant.type === filter);
        
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
    }

    // Открытие модального окна
    function openModal(plant) {
        currentPlantId = plant.id;
        modalImage.src = plant.image;
        modalDiagnosis.textContent = plant.diagnosis;
        modalDescription.textContent = plant.description;
        modal.style.display = 'block';
    }

    // Закрытие модального окна
    function closeModal() {
        modal.style.display = 'none';
        currentPlantId = null;
    }

    // Оценка растения
    function ratePlant(isBad) {
        if (!currentPlantId) return;
        
        ratings[currentPlantId] = isBad ? 'bad' : 'good';
        localStorage.setItem('plantRatings', JSON.stringify(ratings));
        
        // Обновляем отображение
        const statusElement = document.querySelector(`.plant-card[data-id="${currentPlantId}"] .plant-status`);
        statusElement.textContent = isBad ? '❌' : '✅';
        
        closeModal();
    }

    // Фильтрация растений
    function setActiveFilter(e) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderPlants(e.target.dataset.filter);
    }

    // Обработчики событий
    closeBtn.addEventListener('click', closeModal);
    badBtn.addEventListener('click', () => ratePlant(true));
    goodBtn.addEventListener('click', () => ratePlant(false));
    filterButtons.forEach(btn => btn.addEventListener('click', setActiveFilter));
    
    // Закрытие модального окна при клике вне его
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Первоначальная загрузка
    renderPlants();
});
