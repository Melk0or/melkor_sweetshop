package ru.melkor.sweetshop.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ru.melkor.sweetshop.entity.Product;
import ru.melkor.sweetshop.repository.ProductRepository;

import java.util.ArrayList;

@Configuration
public class DataConfig {

    // Данные для инициализации базы данных питомцев
    @Bean
    public CommandLineRunner loadData(ProductRepository productRepository)
    {
        return (args) -> {
            if (productRepository.findAll().isEmpty())
            {
                var products = new ArrayList<Product>();
                // Торты
                products.add(new Product("Шоколадно-апельсиновый", "Нежный бисквит с апельсиновым и шоколадным наполнением. Сверху торт покрыт толстым слоем шоколада.", 2000, "Торт", "https://mrbulkin.ru/image/cache/data/bulkin/shokoladno-apelsinovyj-tort-0-700x700.jpg"));
                products.add(new Product("Ванильно-карамельный", "Бисквитный ванильный торт со слоем соленой хрустящей карамели и сливочного крема с молотыми стручками бурбонской ванили, покрыт толстым слоем карамели", 1900, "Торт", "https://mrbulkin.ru/image/cache/data/bulkin/tort-vanilno-karamelnyjcp-0-700x700.jpg"));
                products.add(new Product("Двойной-шоколад", "Прекрасное угощение для любителей шоколада. Вкуснейший шоколадный торт изготовлен из 70% черного бельгийского шоколада, коржи которого пропитаны мягким шоколадным кремом.", 2400, "Торт", "https://mrbulkin.ru/image/cache/data/bulkin/tort-dvojnoj-shokolad-0-700x700.jpg"));
                products.add(new Product("Кассата с марципаном", "Между двумя тонкими слоями бисквита расположен толстый слой начинки на основе сыра Рикотта. Сверху торт залит марципаном и украшен цукатами из апельсина и вишней в сиропе", 2000, "Торт", "https://mrbulkin.ru/image/cache/data/tort-brusnichno-kremovyj-s-belym-shokoladom-3-2-0-700x700.jpg"));
                products.add(new Product("Малиновая панна котта", "Нежный малиновый мусс с прослойкой из малины и вкусное сердце из панна котты.", 2700, "Торт", "https://mrbulkin.ru/image/cache/data/bulkin/tort-malinovaya-panna-kotta-2-1-700x700.jpg"));
                products.add(new Product("Пьемонт", "Нежный торт с сердцевиной из фундучного пралине, молочного шоколада, крема из взбитых сливок и хрустящей крошки на тонкой шоколадной подложке. ", 2600, "Торт", "https://mrbulkin.ru/image/cache/data/bulkin/tort-pemont-0-700x700.jpg"));
                // Чизкейки
                products.add(new Product("Арахисовый кранч", "Классический сливочно-сырный чизкейк Нью-Йорк на подложке из песочного шоколадного теста с начинкой из шоколадного ганаша и карамельного кранча.", 2380, "Чизкейк", "https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-arahisovyj-kranch-0-700x700.jpg"));
                products.add(new Product("Ассорти", "Сладость придется по вкусу всем гостям, близким или коллегам, так как состоит из 8 разных вариантов. Все ингредиенты десерта натуральные. Мы не используем пищевые красители и консерванты.", 2400, "Чизкейк", "https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-assorti-shokoladno-karamelnoe-2-0-700x700.jpg"));
                products.add(new Product("Соленая карамель", "Чизкейк соленая карамель придуман для ценителей необычного. Легкая кислинка творожной основы дополняется сладкой негой с едва уловимым солоноватым привкусом. Десерт идеален в дуэте с крепким чаем или кофе.", 2380, "Чизкейк", "https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-karamelnyj-rossiya-16-p-0-700x700.jpg"));
                products.add(new Product("Малиновый", "Вкуснейший чизкейк, который окунет вас в феерический букет вкуса малины в сочетание с  классическим чезкейком на основе из шоколадного печенья.", 2240, "Чизкейк", "https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-malinovyj-16p-4-3-0-700x700.jpg"));
                products.add(new Product("Шоколадный", "Чизкейк  Шоколадный сосредоточил в себе тонкое сочетание вкусов, которые порадуют каждого любителя шоколада.", 2350 , "Чизкейк", "https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-shokoladnyj-16p-3-2-0-700x700.jpg"));
                products.add(new Product("Нью-Йорк", "Одним из самых популярных десертов по всему миру по праву можно назвать Чизкейк Нью-Йорк, этот бархатистый чизкейк отличается нежным и приятным сливочным вкусом.", 3500, "Чизкейк", "https://mrbulkin.ru/image/cache/data/chees/new-york-cheese/cheese-new-york5-500-700x700.jpg"));
                // Пирожные
                products.add(new Product("Морковное", "Коржи с добавлением моркови, ананаса, грецкого ореха, изюма покрыты кремом из сливочного сыра.", 1600, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-morkovnoe-0-700x700.jpg"));
                products.add(new Product("Ред Вельвет", "Трехслойное пирожное с шоколадными прослойками и нежнейшим сливочным кремом с белым шоколадом.", 1660, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-red-velvet-3-1-700x700.jpg"));
                products.add(new Product("Ирина ну еб***", "Воздушное безе с сердцевиной из малинового конфитюра, прослойкой из лепестков миндаля и сливочным кремом. Сверху украшено свежими ягодами малины.", 2400, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-anna-pavlova-1-700x700.jpg"));
                products.add(new Product("Монблан", "На орехово белковой подложке заварной лимонный крем и крем шантильи с сердцевиной из каштанового крема. Сверху десерт украшен каштановым кремом.", 1900, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-mont-blan-2-2-0%20(1)-700x700.jpg"));
                products.add(new Product("Карамельный мусс", "Нежнейший карамельный мусс на подложке из песочного теста и пралине с сердцевиной сырно-карамельного мусса и начинкой из жидкой карамели. ", 2200, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-karamelnyj-muss-1-700x700.jpg"));
                products.add(new Product("Черная смородина", "Нежнейшее суфле из черной смородины с сердцевиной из белого суфле из свежих сливок с ароматной начинкой из черной смородины на корже.", 2100, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-chernaya-smorodina-2-0-700x700.jpg"));
                products.add(new Product("Фисташковое с малиной", "Солоноватый вкус фисташки с нежным муссом и спелой малиной - невероятно сочный! Сверху украшен стружкой белого шоколада.", 1400, "Пирожное", "https://mrbulkin.ru/image/cache/data/bulkin/57378-2-1-700x700.jpg"));

                // Пряники
                products.add(new Product("1 + 1", "Размер набора: 15х15 см", 1490, "Набор пряников", "https://mrbulkin.ru/image/cache/data/pryanik/valentine/Plove1-700x700.jpg"));
                products.add(new Product("Влюбленный мишка", "Размер набора: 15х15 см", 700, "Набор пряников", "https://mrbulkin.ru/image/cache/data/pryanik/14feb/vlublenniy-mishka-700x700.jpg"));
                products.add(new Product("Веселая компания", "Размер набора: 11х24 см", 850, "Набор пряников", "https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/veselayakompaniya-700x700.jpg"));
                products.add(new Product("Лучший друг", "Размер набора: 20х20 см", 1100, "Набор пряников", "https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/luchshiydrug-700x700.jpg"));
                products.add(new Product("Новогоднее настроение", "Размер набора: 20х20 см", 1200, "Набор пряников", "https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/novogodneenastroenie-700x700.jpg"));
                products.add(new Product("Новогодний Пряня", "Размер набора: 15х15 см", 700, "Набор пряников", "https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/pryanyaielka50%D1%8550-700x700.jpg"));
                // Маффины
                products.add(new Product("Апельсиновый", "Апельсиновый  маффин - прекрасный десерт, который придется по вкусу любому сладкоежке. Маффин приготовлен с добавлением банана и грецкого ореха.", 570, "Маффин", "https://mrbulkin.ru/image/cache/data/bulkin/maffin-apelsinovyj-3-1-700x700.jpg"));
                products.add(new Product("Черничный", "Классический маффин приготовлен с добавлением сочной черники. Станет прекрасным дополнением к чаю или кофе.", 570, "Маффин", "https://mrbulkin.ru/image/cache/data/bulkin/maffin-chernichnyj-2-0-700x700.jpg"));
                products.add(new Product("Шоколадный", "Шоколадный  маффин - прекрасный десерт, который придется по вкусу любому сладкоежке. Маффин приготовлен с добавлением банана и грецкого ореха.", 570, "Маффин", "https://mrbulkin.ru/image/cache/data/bulkin/maffin-shokoladnyj-2-0-700x700.jpg"));

                // Топперы
                products.add(new Product("Hello Kitty", "Идеально подходит: Капкейки, Маффины.", 200, "Топперы", "https://mrbulkin.ru/image/cache/data/ukrasheniya/toppers/09.01.17/09.01.17.06-700x700.png"));
                products.add(new Product("Star Wars", "Идеально подходит: Капкейки, Маффины.", 200, "Топперы", "https://mrbulkin.ru/image/cache/data/ukrasheniya/toppers/05.06.16/starwars-700x700.png"));
                products.add(new Product("Ого, я аутист", "Идеально подходит: Капкейки, Маффины.", 200, "Топперы", "https://mrbulkin.ru/image/cache/data/ukrasheniya/2111.6-700x700.png"));
                products.add(new Product("Тачки", "Идеально подходит: Капкейки, Маффины.", 200, "Топперы", "https://mrbulkin.ru/image/cache/data/ukrasheniya/toppers/09.01.17/09.01.17.01-700x700.png"));
                products.add(new Product("Трансформеры", "Идеально подходит: Капкейки, Маффины.", 200, "Топперы", "https://mrbulkin.ru/image/cache/data/ukrasheniya/0512.14-700x700.png"));

                productRepository.saveAll(products);
            }
        };
    }
}
