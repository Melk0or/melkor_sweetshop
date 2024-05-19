--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: sweetshop; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE sweetshop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';


ALTER DATABASE sweetshop OWNER TO postgres;

\connect sweetshop

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: app_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_users (
    id bigint NOT NULL,
    user_name character varying(25) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public.app_users OWNER TO postgres;

--
-- Name: app_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.app_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.app_users_id_seq OWNER TO postgres;

--
-- Name: app_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.app_users_id_seq OWNED BY public.app_users.id;


--
-- Name: app_users_orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.app_users_orders (
    user_id bigint NOT NULL,
    orders_id integer NOT NULL
);


ALTER TABLE public.app_users_orders OWNER TO postgres;

--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    order_num integer NOT NULL,
    user_id bigint
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- Name: orders_product_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders_product_list (
    order_id integer NOT NULL,
    product_list_id integer NOT NULL
);


ALTER TABLE public.orders_product_list OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    category character varying(25) NOT NULL,
    description character varying(250) NOT NULL,
    img_src character varying(250) NOT NULL,
    price integer NOT NULL,
    title character varying(25) NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: sweetshops; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sweetshops (
    id integer NOT NULL
);


ALTER TABLE public.sweetshops OWNER TO postgres;

--
-- Name: sweetshops_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sweetshops_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sweetshops_id_seq OWNER TO postgres;

--
-- Name: sweetshops_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sweetshops_id_seq OWNED BY public.sweetshops.id;


--
-- Name: app_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_users ALTER COLUMN id SET DEFAULT nextval('public.app_users_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: sweetshops id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sweetshops ALTER COLUMN id SET DEFAULT nextval('public.sweetshops_id_seq'::regclass);


--
-- Data for Name: app_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_users (id, user_name, password) FROM stdin;
1	cimchana	$2a$10$aCIY7XwxEZgmbNS.eRJDvOYVZgvCAgVjWiXN0shdQDojNj1.R46.u
2	cimchana1	$2a$10$utCOCQPfpJKfRy/KoC6Ov.FPExWItPf5yzHpbbIKFtxW7LksYRhQ.
3	asd	$2a$10$GgjcWZp7mEVG3gnlYeGQNuiAr4Uj.TOFMTo8s.HwXQJ.DhohTGBLa
\.


--
-- Data for Name: app_users_orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.app_users_orders (user_id, orders_id) FROM stdin;
1	2
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (id, order_num, user_id) FROM stdin;
2	248	1
\.


--
-- Data for Name: orders_product_list; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders_product_list (order_id, product_list_id) FROM stdin;
2	1
2	3
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, category, description, img_src, price, title) FROM stdin;
1	Торт	Нежный бисквит с апельсиновым и шоколадным наполнением. Сверху торт покрыт толстым слоем шоколада.	https://mrbulkin.ru/image/cache/data/bulkin/shokoladno-apelsinovyj-tort-0-700x700.jpg	2000	Шоколадно-апельсиновый
2	Торт	Бисквитный ванильный торт со слоем соленой хрустящей карамели и сливочного крема с молотыми стручками бурбонской ванили, покрыт толстым слоем карамели	https://mrbulkin.ru/image/cache/data/bulkin/tort-vanilno-karamelnyjcp-0-700x700.jpg	1900	Ванильно-карамельный
3	Торт	Прекрасное угощение для любителей шоколада. Вкуснейший шоколадный торт изготовлен из 70% черного бельгийского шоколада, коржи которого пропитаны мягким шоколадным кремом.	https://mrbulkin.ru/image/cache/data/bulkin/tort-dvojnoj-shokolad-0-700x700.jpg	2400	Двойной-шоколад
4	Торт	Между двумя тонкими слоями бисквита расположен толстый слой начинки на основе сыра Рикотта. Сверху торт залит марципаном и украшен цукатами из апельсина и вишней в сиропе	https://mrbulkin.ru/image/cache/data/tort-brusnichno-kremovyj-s-belym-shokoladom-3-2-0-700x700.jpg	2000	Кассата с марципаном
5	Торт	Нежный малиновый мусс с прослойкой из малины и вкусное сердце из панна котты.	https://mrbulkin.ru/image/cache/data/bulkin/tort-malinovaya-panna-kotta-2-1-700x700.jpg	2700	Малиновая панна котта
6	Торт	Нежный торт с сердцевиной из фундучного пралине, молочного шоколада, крема из взбитых сливок и хрустящей крошки на тонкой шоколадной подложке. 	https://mrbulkin.ru/image/cache/data/bulkin/tort-pemont-0-700x700.jpg	2600	Пьемонт
7	Чизкейк	Классический сливочно-сырный чизкейк Нью-Йорк на подложке из песочного шоколадного теста с начинкой из шоколадного ганаша и карамельного кранча.	https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-arahisovyj-kranch-0-700x700.jpg	2380	Арахисовый кранч
8	Чизкейк	Сладость придется по вкусу всем гостям, близким или коллегам, так как состоит из 8 разных вариантов. Все ингредиенты десерта натуральные. Мы не используем пищевые красители и консерванты.	https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-assorti-shokoladno-karamelnoe-2-0-700x700.jpg	2400	Ассорти
9	Чизкейк	Чизкейк соленая карамель придуман для ценителей необычного. Легкая кислинка творожной основы дополняется сладкой негой с едва уловимым солоноватым привкусом. Десерт идеален в дуэте с крепким чаем или кофе.	https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-karamelnyj-rossiya-16-p-0-700x700.jpg	2380	Соленая карамель
10	Чизкейк	Вкуснейший чизкейк, который окунет вас в феерический букет вкуса малины в сочетание с  классическим чезкейком на основе из шоколадного печенья.	https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-malinovyj-16p-4-3-0-700x700.jpg	2240	Малиновый
11	Чизкейк	Чизкейк  Шоколадный сосредоточил в себе тонкое сочетание вкусов, которые порадуют каждого любителя шоколада.	https://mrbulkin.ru/image/cache/data/bulkin/chizkejk-shokoladnyj-16p-3-2-0-700x700.jpg	2350	Шоколадный
12	Чизкейк	Одним из самых популярных десертов по всему миру по праву можно назвать Чизкейк Нью-Йорк, этот бархатистый чизкейк отличается нежным и приятным сливочным вкусом.	https://mrbulkin.ru/image/cache/data/chees/new-york-cheese/cheese-new-york5-500-700x700.jpg	3500	Нью-Йорк
13	Пирожное	Коржи с добавлением моркови, ананаса, грецкого ореха, изюма покрыты кремом из сливочного сыра.	https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-morkovnoe-0-700x700.jpg	1600	Морковное
14	Пирожное	Трехслойное пирожное с шоколадными прослойками и нежнейшим сливочным кремом с белым шоколадом.	https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-red-velvet-3-1-700x700.jpg	1660	Ред Вельвет
15	Пирожное	Воздушное безе с сердцевиной из малинового конфитюра, прослойкой из лепестков миндаля и сливочным кремом. Сверху украшено свежими ягодами малины.	https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-anna-pavlova-1-700x700.jpg	2400	Ирина ну еб***
16	Пирожное	На орехово белковой подложке заварной лимонный крем и крем шантильи с сердцевиной из каштанового крема. Сверху десерт украшен каштановым кремом.	https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-mont-blan-2-2-0%20(1)-700x700.jpg	1900	Монблан
17	Пирожное	Нежнейший карамельный мусс на подложке из песочного теста и пралине с сердцевиной сырно-карамельного мусса и начинкой из жидкой карамели. 	https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-karamelnyj-muss-1-700x700.jpg	2200	Карамельный мусс
18	Пирожное	Нежнейшее суфле из черной смородины с сердцевиной из белого суфле из свежих сливок с ароматной начинкой из черной смородины на корже.	https://mrbulkin.ru/image/cache/data/bulkin/pirozhnoe-chernaya-smorodina-2-0-700x700.jpg	2100	Черная смородина
19	Пирожное	Солоноватый вкус фисташки с нежным муссом и спелой малиной - невероятно сочный! Сверху украшен стружкой белого шоколада.	https://mrbulkin.ru/image/cache/data/bulkin/57378-2-1-700x700.jpg	1400	Фисташковое с малиной
20	Набор пряников	Размер набора: 15х15 см	https://mrbulkin.ru/image/cache/data/pryanik/valentine/Plove1-700x700.jpg	1490	1 + 1
21	Набор пряников	Размер набора: 15х15 см	https://mrbulkin.ru/image/cache/data/pryanik/14feb/vlublenniy-mishka-700x700.jpg	700	Влюбленный мишка
22	Набор пряников	Размер набора: 11х24 см	https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/veselayakompaniya-700x700.jpg	850	Веселая компания
23	Набор пряников	Размер набора: 20х20 см	https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/luchshiydrug-700x700.jpg	1100	Лучший друг
24	Набор пряников	Размер набора: 20х20 см	https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/novogodneenastroenie-700x700.jpg	1200	Новогоднее настроение
25	Набор пряников	Размер набора: 15х15 см	https://mrbulkin.ru/image/cache/data/pryanik/noviyigod2018/pryanyaielka50%D1%8550-700x700.jpg	700	Новогодний Пряня
26	Маффин	Апельсиновый  маффин - прекрасный десерт, который придется по вкусу любому сладкоежке. Маффин приготовлен с добавлением банана и грецкого ореха.	https://mrbulkin.ru/image/cache/data/bulkin/maffin-apelsinovyj-3-1-700x700.jpg	570	Апельсиновый
27	Маффин	Классический маффин приготовлен с добавлением сочной черники. Станет прекрасным дополнением к чаю или кофе.	https://mrbulkin.ru/image/cache/data/bulkin/maffin-chernichnyj-2-0-700x700.jpg	570	Черничный
28	Маффин	Шоколадный  маффин - прекрасный десерт, который придется по вкусу любому сладкоежке. Маффин приготовлен с добавлением банана и грецкого ореха.	https://mrbulkin.ru/image/cache/data/bulkin/maffin-shokoladnyj-2-0-700x700.jpg	570	Шоколадный
29	Топперы	Идеально подходит: Капкейки, Маффины.	https://mrbulkin.ru/image/cache/data/ukrasheniya/toppers/09.01.17/09.01.17.06-700x700.png	200	Hello Kitty
30	Топперы	Идеально подходит: Капкейки, Маффины.	https://mrbulkin.ru/image/cache/data/ukrasheniya/toppers/05.06.16/starwars-700x700.png	200	Star Wars
31	Топперы	Идеально подходит: Капкейки, Маффины.	https://mrbulkin.ru/image/cache/data/ukrasheniya/2111.6-700x700.png	200	Ого, я аутист
32	Топперы	Идеально подходит: Капкейки, Маффины.	https://mrbulkin.ru/image/cache/data/ukrasheniya/toppers/09.01.17/09.01.17.01-700x700.png	200	Тачки
33	Топперы	Идеально подходит: Капкейки, Маффины.	https://mrbulkin.ru/image/cache/data/ukrasheniya/0512.14-700x700.png	200	Трансформеры
\.


--
-- Data for Name: sweetshops; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sweetshops (id) FROM stdin;
\.


--
-- Name: app_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.app_users_id_seq', 3, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 2, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 33, true);


--
-- Name: sweetshops_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sweetshops_id_seq', 1, false);


--
-- Name: app_users app_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_users
    ADD CONSTRAINT app_users_pkey PRIMARY KEY (id);


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: sweetshops sweetshops_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sweetshops
    ADD CONSTRAINT sweetshops_pkey PRIMARY KEY (id);


--
-- Name: app_users_orders uk_b1stqv791ml3bd43gwmka0nbr; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_users_orders
    ADD CONSTRAINT uk_b1stqv791ml3bd43gwmka0nbr UNIQUE (orders_id);


--
-- Name: orders_product_list fkfe0yuq8pkkf5lmcsek4nyepob; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_product_list
    ADD CONSTRAINT fkfe0yuq8pkkf5lmcsek4nyepob FOREIGN KEY (product_list_id) REFERENCES public.products(id);


--
-- Name: orders_product_list fkifdydvyknltjvx46kmth4ses2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders_product_list
    ADD CONSTRAINT fkifdydvyknltjvx46kmth4ses2 FOREIGN KEY (order_id) REFERENCES public.orders(id);


--
-- Name: app_users_orders fkmhj994jc964wlcns24bb2egxo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_users_orders
    ADD CONSTRAINT fkmhj994jc964wlcns24bb2egxo FOREIGN KEY (orders_id) REFERENCES public.orders(id);


--
-- Name: orders fkrg873cdvpd23vrtmqygifcdwa; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT fkrg873cdvpd23vrtmqygifcdwa FOREIGN KEY (user_id) REFERENCES public.app_users(id);


--
-- Name: app_users_orders fks5gsox8bh6g5afm4ghb6m0ege; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.app_users_orders
    ADD CONSTRAINT fks5gsox8bh6g5afm4ghb6m0ege FOREIGN KEY (user_id) REFERENCES public.app_users(id);


--
-- PostgreSQL database dump complete
--

