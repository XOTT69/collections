(function () {
    'use strict';

    /**
     * STUDIOS MASTER (Unified) v2.0
     * Optimized by: Perplexity AI
     */

    // -----------------------------------------------------------------
    // 1. CONSTANTS & CONFIG (Оптимізація та Рефакторинг)
    // -----------------------------------------------------------------
    
    var IDS = {
        NETFLIX: '213',
        APPLE: '350',
        HBO: '49',
        MAX: '3186',
        AMAZON: '1024',
        DISNEY: '2739',
        HULU: '453',
        PARAMOUNT: '4330',
        SYFY: '77',
        DISCOVERY: '64',
        NATGEO: '43',
        BBC: '4'
    };

    var SERVICE_CONFIGS = {
        'netflix': {
            title: 'Netflix',
            icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 2L16.5 22" stroke="#E50914" stroke-width="4"/><path d="M7.5 2L7.5 22" stroke="#E50914" stroke-width="4"/><path d="M7.5 2L16.5 22" stroke="#E50914" stroke-width="4"/></svg>',
            categories: [
                { "title": "Нові фільми", "url": "discover/movie", "params": { "with_watch_providers": "8", "watch_region": "UA", "sort_by": "primary_release_date.desc", "primary_release_date.lte": "{current_date}", "vote_count.gte": "10" } },
                { "title": "В тренді", "url": "discover/tv", "params": { "with_networks": IDS.NETFLIX, "sort_by": "popularity.desc" } },
                { "title": "Тільки на Netflix (Exclusives)", "url": "discover/tv", "params": { "with_networks": IDS.NETFLIX, "with_status": "0|1|2|3", "sort_by": "vote_average.desc", "vote_count.gte": "500" } },
                { "title": "K-Dramas (Корея)", "url": "discover/tv", "params": { "with_networks": IDS.NETFLIX, "with_original_language": "ko", "sort_by": "popularity.desc" } },
                { "title": "Аніме (Японія)", "url": "discover/tv", "params": { "with_networks": IDS.NETFLIX, "with_genres": "16", "with_original_language": "ja", "sort_by": "popularity.desc" } }, // Додано language:ja
                { "title": "Документальне", "url": "discover/movie", "params": { "with_companies": IDS.NETFLIX, "with_genres": "99", "sort_by": "release_date.desc" } }
            ]
        },
        'apple': {
            title: 'Apple TV+',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>',
            categories: [
                { "title": "Новинки Apple TV+", "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "sort_by": "first_air_date.desc", "first_air_date.lte": "{current_date}", "vote_count.gte": "5" } },
                { "title": "Наукова фантастика (Sci-Fi)", "url": "discover/tv", "params": { "with_watch_providers": "350", "watch_region": "UA", "with_genres": "10765", "sort_by": "popularity.desc" } },
                { "title": "Apple Films", "url": "discover/movie", "params": { "with_watch_providers": "350", "watch_region": "UA", "sort_by": "release_date.desc" } }
            ]
        },
        'hbo': {
            title: 'HBO / Max',
            icon: '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor"><path d="M7.042 16.896H4.414v-3.754H2.708v3.754H.01L0 7.22h2.708v3.6h1.706v-3.6h2.628zm12.043.046C21.795 16.94 24 14.689 24 11.978a4.89 4.89 0 0 0-4.915-4.92c-2.707-.002-4.09 1.991-4.432 2.795.003-1.207-1.187-2.632-2.58-2.634H7.59v9.674l4.181.001c1.686 0 2.886-1.46 2.888-2.713.385.788 1.72 2.762 4.427 2.76zm-7.665-3.936c.387 0 .692.382.692.817 0 .435-.305.817-.692.817h-1.33v-1.634zm.005-3.633c.387 0 .692.382.692.817 0 .436-.305.818-.692.818h-1.33V9.373zm1.77 2.607c.305-.039.813-.387.992-.61-.063.276-.068 1.074.006 1.35-.204-.314-.688-.701-.998-.74zm3.43 0a2.462 2.462 0 1 1 4.924 0 2.462 2.462 0 0 1-4.925 0zm2.462 1.936a1.936 1.936 0 1 0 0-3.872 1.936 1.936 0 0 0 0 3.872z"/></svg>',
            categories: [
                { "title": "Головні хіти HBO", "url": "discover/tv", "params": { "with_networks": IDS.HBO, "sort_by": "popularity.desc" } },
                { "title": "Ексклюзиви Max", "url": "discover/tv", "params": { "with_networks": IDS.MAX, "sort_by": "popularity.desc" } },
                { "title": "Світ DC", "url": "discover/movie", "params": { "with_companies": "174", "with_keywords": "9715", "sort_by": "release_date.desc" } },
                { "title": "Золота колекція (IMDb 8+)", "url": "discover/tv", "params": { "with_networks": IDS.HBO, "vote_average.gte": "8.0", "vote_count.gte": "500", "sort_by": "vote_average.desc" } }
            ]
        },
        'amazon': {
            title: 'Prime Video',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.787 15.292c-.336-.43-2.222-.204-3.069-.103-.257.031-.296-.193-.065-.356 1.504-1.056 3.968-.75 4.255-.397.288.357-.076 2.827-1.485 4.007-.217.18-.423.084-.327-.155.317-.792 1.027-2.566.69-2.996"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>',
            categories: [
                { "title": "Amazon Originals", "url": "discover/tv", "params": { "with_networks": IDS.AMAZON, "sort_by": "popularity.desc" } },
                { "title": "The Boys & Superheroes", "url": "discover/tv", "params": { "with_networks": IDS.AMAZON, "with_genres": "10765", "sort_by": "vote_average.desc" } }
            ]
        },
        'disney': {
            title: 'Disney+',
            icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19,3V7m2-2H17m-10.31,4L8.69,21m-5.69-7c0-3,5.54-4.55,9-2m-9,2s12.29-2,13.91,6.77c1.09,5.93-6.58,6.7-9.48,5.89S3,16.06,3,14.06"/></svg>',
            categories: [
                { "title": "Marvel Studios", "url": "discover/movie", "params": { "with_companies": "420", "sort_by": "release_date.desc" } },
                { "title": "Star Wars Universe", "url": "discover/tv", "params": { "with_companies": "1", "with_keywords": "1930", "sort_by": "popularity.desc" } },
                { "title": "Pixar & Animation", "url": "discover/movie", "params": { "with_companies": "3", "sort_by": "popularity.desc" } }
            ]
        },
        'hulu': {
            title: 'Hulu',
            icon: '<svg viewBox="0 0 24 24" fill="#3DBB3D"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>',
            categories: [
                { "title": "Hulu Originals", "url": "discover/tv", "params": { "with_networks": IDS.HULU, "sort_by": "popularity.desc" } },
                { "title": "Драми та Трилери", "url": "discover/tv", "params": { "with_networks": IDS.HULU, "with_genres": "18,9648", "sort_by": "vote_average.desc" } }
            ]
        },
        'paramount': {
            title: 'Paramount+',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22H22L12 2ZM12 6.5L18.5 19.5H5.5L12 6.5Z"/></svg>',
            categories: [
                { "title": "Paramount+ Originals", "url": "discover/tv", "params": { "with_networks": IDS.PARAMOUNT, "sort_by": "popularity.desc" } },
                { "title": "Йеллоустоун та Вестерни", "url": "discover/tv", "params": { "with_networks": IDS.PARAMOUNT + '|318', "with_genres": "37", "sort_by": "popularity.desc" } }
            ]
        },
        'syfy': {
            title: 'Syfy',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>',
            categories: [
                { "title": "Syfy: Фантастика", "url": "discover/tv", "params": { "with_networks": IDS.SYFY, "sort_by": "popularity.desc" } }
            ]
        },
        'educational_and_reality': {
            title: 'Пізнавальне',
            icon: '<svg viewBox="0 0 24 24" fill="#FF9800"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>',
            categories: [
                { "title": "Discovery & NatGeo", "url": "discover/tv", "params": { "with_networks": IDS.DISCOVERY + '|' + IDS.NATGEO, "sort_by": "popularity.desc" } },
                { "title": "Кулінарія (Reality)", "url": "discover/tv", "params": { "with_genres": "10764", "with_keywords": "222083", "sort_by": "popularity.desc" } },
                { "title": "True Crime (Розслідування)", "url": "discover/tv", "params": { "with_genres": "99", "with_keywords": "10714", "sort_by": "popularity.desc" } }
            ]
        }
    };

    // -----------------------------------------------------------------
    // 2. COMPONENTS (Логіка відображення)
    // -----------------------------------------------------------------

    function StudiosMain(object) {
        var comp = new Lampa.InteractionMain(object);
        var config = SERVICE_CONFIGS[object.service_id];

        comp.create = function () {
            var _this = this;
            this.activity.loader(true);
            var categories = config.categories;
            var network = new Lampa.Reguest();
            var status = new Lampa.Status(categories.length);

            status.onComplite = function () {
                var fulldata = [];
                Object.keys(status.data).sort(function (a, b) { return a - b; }).forEach(function (key) {
                    var data = status.data[key];
                    if (data && data.results && data.results.length) {
                        var cat = categories[parseInt(key)];
                        // CSS FIX: Не ставимо тут жорсткий стиль, використаємо клас
                        Lampa.Utils.extendItemsParams(data.results, { 
                            style: { name: 'wide', card_class: 'card-studio-wide' } 
                        });
                        fulldata.push({
                            title: cat.title,
                            results: data.results,
                            url: cat.url,
                            params: cat.params,
                            service_id: object.service_id
                        });
                    }
                });

                if (fulldata.length) {
                    _this.build(fulldata);
                    _this.activity.loader(false);
                } else {
                    _this.empty();
                }
            };

            categories.forEach(function (cat, index) {
                var params = [];
                params.push('api_key=' + Lampa.TMDB.key());
                params.push('language=' + Lampa.Storage.get('language', 'uk')); // Мова інтерфейсу Лампи

                if (cat.params) {
                    for (var key in cat.params) {
                        var val = cat.params[key];
                        if (val === '{current_date}') {
                            var d = new Date();
                            val = [d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('0' + d.getDate()).slice(-2)].join('-');
                        }
                        params.push(key + '=' + val);
                    }
                }

                var url = Lampa.TMDB.api(cat.url + '?' + params.join('&'));
                network.silent(url, function (json) {
                    status.append(index.toString(), json);
                }, function () {
                    status.error();
                });
            });

            return this.render();
        };

        comp.onMore = function (data) {
            Lampa.Activity.push({
                url: data.url,
                params: data.params,
                title: data.title,
                component: 'studios_view',
                page: 1
            });
        };

        return comp;
    }

    function StudiosView(object) {
        var comp = new Lampa.InteractionCategory(object);
        var network = new Lampa.Reguest();

        function buildUrl(page) {
            var params = [];
            params.push('api_key=' + Lampa.TMDB.key());
            params.push('language=' + Lampa.Storage.get('language', 'uk'));
            params.push('page=' + page);

            if (object.params) {
                for (var key in object.params) {
                    var val = object.params[key];
                    if (val === '{current_date}') {
                        var d = new Date();
                        val = [d.getFullYear(), ('0' + (d.getMonth() + 1)).slice(-2), ('0' + d.getDate()).slice(-2)].join('-');
                    }
                    params.push(key + '=' + val);
                }
            }
            return Lampa.TMDB.api(object.url + '?' + params.join('&'));
        }

        comp.create = function () {
            var _this = this;
            network.silent(buildUrl(1), function (json) {
                // CSS FIX:
                if(json.results) {
                     Lampa.Utils.extendItemsParams(json.results, { 
                        style: { name: 'wide', card_class: 'card-studio-wide' } 
                    });
                }
                _this.build(json);
            }, this.empty.bind(this));
        };

        comp.nextPageReuest = function (object, resolve, reject) {
            network.silent(buildUrl(object.page), function(json){
                if(json.results) {
                     Lampa.Utils.extendItemsParams(json.results, { 
                        style: { name: 'wide', card_class: 'card-studio-wide' } 
                    });
                }
                resolve(json);
            }, reject);
        };

        return comp;
    }

    // -----------------------------------------------------------------
    // 3. INJECTION (Кнопки та Налаштування)
    // -----------------------------------------------------------------

    function startPlugin() {
        if (window.plugin_studios_master_ready) return;
        window.plugin_studios_master_ready = true;

        // --- ДОДАВАННЯ НАЛАШТУВАНЬ В МЕНЮ ЛАМПИ ---
        // Створюємо параметри, щоб користувач міг їх бачити в Settings > Interface
        Object.keys(SERVICE_CONFIGS).forEach(function(sid){
            Lampa.SettingsApi.addParam({
                component: 'interface',
                param: 'studios_show_' + sid,
                type: 'trigger',
                name: 'Студії: ' + SERVICE_CONFIGS[sid].title,
                default: true // За замовчуванням увімкнено
            });
        });

        // Register components
        Lampa.Component.add('studios_main', StudiosMain);
        Lampa.Component.add('studios_view', StudiosView);

        // --- CSS FIX (RESPONSIVE) ---
        if (!$('#studios-unified-css').length) {
            $('body').append(`
                <style id="studios-unified-css">
                    /* Стандартний розмір для wide */
                    .studios_main .card--wide, 
                    .studios_view .card--wide { 
                        width: 18em; 
                    }
                    /* Адаптивність для мобільних/планшетів */
                    @media screen and (max-width: 768px) {
                        .studios_main .card--wide, 
                        .studios_view .card--wide { 
                            width: 46%; /* 2 колонки */
                        }
                    }
                     @media screen and (max-width: 480px) {
                        .studios_main .card--wide, 
                        .studios_view .card--wide { 
                            width: 100%; /* 1 колонка */
                        }
                    }
                </style>
            `);
        }

        function addMenuButtons() {
            var menu = $('.menu .menu__list').eq(0);
            if (!menu.length) return;

            Object.keys(SERVICE_CONFIGS).forEach(function (sid) {
                var conf = SERVICE_CONFIGS[sid];

                // 1. SETTINGS CHECK: Перевіряємо, чи дозволив користувач цю студію
                if(!Lampa.Storage.get('studios_show_' + sid, true)) return;

                // 2. DUPLICATE CHECK
                if (menu.find('.menu__item[data-sid="' + sid + '"]').length) return;

                var btn = $(`<li class="menu__item selector" data-action="studios_action_${sid}" data-sid="${sid}">
                    <div class="menu__ico">${conf.icon}</div>
                    <div class="menu__text">${conf.title}</div>
                </li>`);

                btn.on('hover:enter', function () {
                    Lampa.Activity.push({
                        title: conf.title,
                        component: 'studios_main',
                        service_id: sid,
                        page: 1
                    });
                });

                menu.append(btn);
            });
        }

        // --- ЗАМІНА SETINTERVAL НА LISTENER ---
        if (window.appready) {
            addMenuButtons();
        } else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type == 'ready') addMenuButtons();
            });
        }
        
        // Слухаємо подію рендеру меню (найнадійніший спосіб без таймера)
        // В Лампі немає прям ідеальної події "menu rendered", але це стандартний підхід:
        Lampa.Listener.follow('app', function(e){
            if(e.type == 'resize' || e.type == 'ready') {
                addMenuButtons();
            }
        });
        
        // Додатковий хук на відкриття налаштувань, щоб оновити меню, якщо користувач щось вимкнув
        Lampa.Settings.listener.follow('close', function(e){
            // Якщо закрили налаштування - перевіримо меню, може треба прибрати кнопку
             var menu = $('.menu .menu__list').eq(0);
             if(menu.length) {
                 // Найпростіший спосіб оновити - видалити наші кнопки і додати заново
                 Object.keys(SERVICE_CONFIGS).forEach(function(sid){
                     menu.find('.menu__item[data-sid="' + sid + '"]').remove();
                 });
                 addMenuButtons();
             }
        });
    }

    if (!window.plugin_studios_master_ready) startPlugin();
})();
