var elements = {
	// Средства восстановления при ошибках на входе
	"Н0101": "Наличие требований к программе по устойчивости функционирования при наличии ошибок во входных данных",
	"Н0102": "Возможность обработки ошибочных ситуаций",
	"Н0103": "Полнота обработки ошибочных ситуаций",
	"Н0104": "Наличие тестов для проверки ошибочных ситуаций",
	"Н0105": "Наличие системы контроля полноты входных данных",
	"Н0106": "Наличие средств контроля корректности входных данных",
	"Н0107": "Наличие средств непротиворечивости входных данных",
	"Н0108": "Наличие проверки параметров и адресов по диапазону их значений",
	"Н0109": "Наличие обработки граничных результатов",
	"Н0110": "Наличиче обработки неопределенностей (деление на 0, квадратный корень из отрицательного числа и т.д.)",
	// Средства восстановления при сбоях оборудования
	"Н0201": "Наличие требований к прогамме по восстановлению процесса выполнения в случае сбоя операционной системы, процессора, внешних устройств",	
	"Н0202": "Наличие требований к программе по восстановлению результатов при отказах процессора, ОС",	
	"Н0203": "Наличие средств восстановления процесса в случае сбоев оборудования	",
	"Н0204": "Наличие возможности разделения по времени выполнения отдельных функций прогамм",	
	"Н0205": "Наличие возможности повторного старта с точки останова",	
	"Н0301": "Наличие централизованного управления процессами, конкурирующими из-за ресурсов", 	
	"Н0302": "Наличие возможности автоматически обходить ошибочные ситуации в процессе вычисления",	
	"Н0303": "Наличие средств, обеспечиающих завершение процесса решения в случае помех",	
	"Н0304": "Наличие средств, обеспечивающих выполнение программы в сокращенном объеме в случае ошибок или помех",	
	"Н0305": "Показатель устойчивости к искажающим воздействиям",	
	"Н0401": "Вероятность безотказной работы работы",	
	"Н0501": "Оценка по среднему времени восстановления",	
	"Н0502": "Оценка по продолжительности преобразования входного набора данных в выходной",
	"С0101": "Наличие модульной схемы программы",
	"С0102": "Оценка программы по числу уникальных модулей",
	"С0201": "Наличие ограничений на размеры модуля",
	"С0301": "Наличие проверки корректности передаваемых данных",
	"С0302": "Оценка простоты программы по числу точек входа и выхода",
	"С0303": "Осуществляется ли передача результатов работы модуля через вызывающий его модуль",
	"С0304": "Осуществляется ли контроль за правильностью данных, поступающих в вызывающий модуль от вызываемого",
	"С030": "Наличие требований к независимости модулей программы от типов и форматов выходных данных",
	"С1001": "Используется ли язык высокого уровня",
	"С1002": "Оценка простоты программы по числу переходов по условию",
	"С0801": "Наличие комментариев ко всем машинозависимым частям программы",
	"С0802": "Наличие комментариев к машинозависимым операторам программы",
	"С0803": "Наличие комментариев в точках входа и выхода программы",
	"С0901": "Соответствие комментариев принятым соглашениям",
	"С0902": "Наличие комментариев- заголовков программы с указанием ее структурных и функциональных характеристик",
	"С0903": "Оценка ясности и точности описания последовательности функционирования всех элементов программы",
	"С0601": "Использование при построении программ метода структурного программирования",
	"С0602": "Соблюдение принципа разработки программы сверху вниз",
	"С0603": "Оценка программы по числу циклов с одним входом и одним выходом",
	"С0604": "Оценка программы по числу циклов",
	"У0101": "Возможность освоения программных средств по документации",
	"У0102": "Возможность освоения ПС на контрольном примере при помощи ЭВМ",
	"У0103": "Возможность поэтапного освоения ПС",	
	"У0201": "Полнота и понятность документации для освоения", 
	"У0202": "Точность документации для освоения",	
	"У0203": "Техническое исполнение документации",	
	"У0301": "Наличие краткой аннотации",	
	"У0302": "Наличие описания решаемых задач",	
	"У0303": "Наличие описания структуры функций ПС",	
	"У0304": "Наличие описания основных функций ПС",	
	"У0306": "Наличие описания частных функций",	
	"У0307": "Наличие описания алгоритмов",	
	"У0308": "Наличие описания межмодульных интерфейсов",
	"У0309": "Наличие описания пользовательских интерфейсов",
	"У0310": "Наличие описания входных и выходных данных", 
	"У0311": "Наличие описания диагностических сообщений", 
	"У0312": "Наличие описания основных характеристик ПС",
	"У0314": "Наличие описания программной среды функционирования ПС",	
	"У0315": "Достаточность документации для ввода ПС в эксплуатацию",
	"У0316": "Наличие информации технологии переноса для мобильных программ",
	"У0401": "Соответствие оглавления содержанию документации",
	"У0402": "Оценка оформления документации",	
	"У0403": "Грамматическая правильность изложения документации",
	"У0404": "Отсутствие противоречий",	
	"У0405": "Ясность формулировок и описаний",	
	"У0406": "Ясность формулировок и описаний",	
	"У0407": "Отсутствие неоднозначных формулировок и описаний",
	"У0408": "Правильность использования терминов",	
	"У0409": "Краткость, отсутствие лишней детализации",
	"У0410": "Единство формулировок",	
	"У0411": "Единство обозначений",	
	"У0412": "Отсутствие ненужных повторений",	
	"У0413": "Наличие нужных объяснений",	
	"У0501": "Оценка стиля изложения",	
	"У0502": "Дидактическая разделенность",	
	"У0303": "Формальная разделенность",	
	"У0504": "Ясность логической структуры",	
	"У0505": "Соблюдение стандартов и правил изложения в документации",	
	"У0506": "Оценка по числу ссылок вперед в тексте документов",	
	"У0601": "Наличие оглавления",	
	"У0602": "Наличие предметного указателя",	
	"У0603": "Наличие перекрестных ссылок",	
	"У0604": "Наличие всех требуемых разделов",	
	"У0605": "Соблюдение непрерывности нумерации страниц документов",	
	"У0606": "Отсутствие незаконченных разделов абзацев, предложений",	
	"У0607": "Наличие всех рисунков, чертежей, формул, таблиц",	
	"У0608": "Наличие всех строк и примечаний",	
	"У0609": "Логический порядок частей внутри главы",	
	"У0701": "Наличие полного перечня документации",	
	"У0801": "Уровень языка общения пользователя с программой",	
	"У0802": "Легкость и быстрота загрузки и запуска программы",	
	"У0803": "Легкость и быстрота завершения работы программы",	
	"У0804": "Возможность распечатки содержимого программы",	
	"У0805": "Возможность приостанова и повторного запуска работы без потерь информации",	
	"У0901": "Соответствие меню требованиям пользователя",	
	"У0902": "Возможность прямого перехода вверх и вниз по многоуровнему меню (пропуск уровней)",	
	"У1001": "Возможность управления подробностью получаемых выходных данных",	
	"У1002": "Достаточность полученной информации для продолжения работы",	
	"У1101": "Обеспечение удобства ввода данных",	
	"У1102": "Легкость восприятия",	
	"У1201": "Обеспечение программой выполнения предусмотренных рабочих процедур",	
	"У1202": "Достаточность информации, выдаваемой программой для составления дополнительных процедур",	
	"Э0101": "Проблемно-ориентированные функции",	
	"Э0102": "Машинно-ориентированные функции",	
	"Э0103": "Функции ведения и управления",	
	"Э0104": "Функции ввода/вывода",	
	"Э0105": "Функции защиты и проверки данных",	
	"Э0106": "Функции защиты от несанкционированного доступа",	
	"Э0107": "Функции контроля доступа",	
	"Э0108": "Функции защиты от внесения изменений",	
	"Э0109": "Наличие соответствующих границ функциональных областей",	
	"Э0110": "Число знаков после запятой в результатах вычислений",	
	"Э0201": "Время выполнения программ",	
	"Э0202": "Время реакции и ответов",	
	"Э0203": "Время подготовки",
	"Э0205": "Затраты времени на защиту данных",	
	"Э0206": "Время компиляции",	
	"Э0301": "Требуемый объем внутренней памяти",	
	"Э0302": "Требуемый объем внешней памяти",	
	"Э0303": "Требуемые периферийные устройства",	
	"Э0304": "Требуемое базовое программное обеспечение",	
	"Г0101": "Оценка числа потенциальных пользователей",	
	"Г0102": "Оценка числа функций ПС",	
	"Г0103": "Насколько набор функций удовлетворяет требованиям пользователя",	
	"Г0104": "Насколько возможности программ охватывают область решаемых пользователем задач",	
	"Г0105": "Возможность настройки формата выходных данных для конкретных пользователей",	
	"Г0201": "Наличие схемы иерархии модулей программы",	
	"Г0202": "Оценка независимости модулей",	
	"Г0203": "Оценка числа уникальных элементов/реквизитов",	
	"Г0204": "Используется ли в текущем вызове модуля информация, полученная в предыдущем вызове",	
	"Г0205": "Оценка организации точек входа и выхода модуля",	
	"Г0206": "Наличие описания атрибутов модуля",	
	"Г0301": "Оценка программ по числу переходов и точек ветвления",	
	"Г0401": "Использование метода пошагового уточнения",	
	"Г0402": "Наличие описания структуры программ",	
	"Г0403": "Наличие описания связей между элементами структуры программы",	
	"Г0404": "Наличие в программе повторного выполнения функций (подпрограмм)",	
	"Г0501": "Использование стандартных протоколов связи",	
	"Г0601": "Использование стандартных интерфейсных подпрограмм",	
	"Г0701": "Оценка зависимости программ от емкости оперативной памяти ЭВМ",	
	"Г0702": "Оценка зависимости временных характеристик программы от скорости вычислений ЭВМ",	
	"Г0703": "Оценка зависимости функционирования программы от числа внешних запоминающих устройств и их общей емкости",	
	"Г0704": "Оценка зависимости функционирования программы от специальных устройств ввода-вывода",	
	"Г0801": "Применение специальных языков программирования",	
	"Г0802": "Оценка зависимости программы от программ операционной системы",	
	"Г0803": "Зависимость от других программных средств",	
	"Г0901": "Оценка локализации непереносимой части программы",	
	"Г1001": "Оценка использования отрицательных или булевых выражений",	
	"Г1002": "Оценка программы по использованию условных переходов",	
	"Г1003": "Оценка программы по использованию безусловных переходов",	
	"Г1004": "Оформление процедур входа и выхода из циклов",	
	"Г1005": "Ограничения на модификацию переменной индексации в цикле",	
	"Г1007": "Оценка программы по использованию локальных переменных",	
	"Г1006": "Оценка модулей по направлению потока управления",	
	"Г1101": "Оценка программы по числу комментариев",	
	"Г1201": "Наличие заголовка в программе",	
	"Г1202": "Комментарии к точкам ветвлений",	
	"Г1203": "Комментарии к машинозависимым частям программы",	
	"Г1204": "Комментарии к машинозависимым операторам программы",	
	"Г1205": "Комментарии к операторам объявления переменных",	
	"Г1206": "Оценка семантики операторов",	
	"Г1207": "Наличие соглашений по форме представления комментариев",	
	"Г1208": "Наличие общих комментариев к программам",	
	"Г1301": "Использование языков высокого уровня",	
	"Г1302": "Семантика имен используемых переменных",	
	"Г1303": "Использование отступов, сдвигов и пропусков при формировании текста",	
	"Г1304": "Размещение операторов по строкам",	
	"Г1401": "Передача информации для управления по параметрам",	
	"Г1402": "Параметрическая передача входных данных",	
	"Г1403": "Наличие передачи результатов работы между модулями",	
	"Г1404": "Наличие проверки правильности данных, получаемых модулями от вызываемого модуля",	
	"Г1405": "Использование общих областей памяти",	
	"К0101": "Наличие всех необходимых документов для понимания и использования ПС",	
	"К0102": "Наличие описания и схемы иерархии модулей программы",	
	"К0103": "Наличие описания основных функций",	
	"К0104": "Наличие описания частных функций",	
	"К0105": "Наличие описания данных",	
	"К0106": "Наличие описания алгоритмов",	
	"К0107": "Наличие описания интерфейсов между модулями",	
	"К0108": "Наличие описания интерфейсов с пользователями",	
	"К0109": "Наличие описания используемых числовых методов",	
	"К0110": "Указаны ли все численные методы",	
	"К0111": "Наличие описания всех параметров",	
	"К0112": "Наличие описания методов настройки системы",	
	"К0113": "Наличие описания всех диагностических сообщений",	
	"К0114": "Наличие описания способов проверки работоспособности программы",	
	"К0201": "Реализация всех исходных модулей",	
	"К0202": "Реализация всех основных функций",	
	"К0203": "Реализация всех частных функций",	
	"К0204": "Реализация всех алгоритмов",	
	"К0205": "Реализация всех взаимосвязей в системе",	
	"К0206": "Реализация всех интерфейсов между модулями",	
	"К0207": "Реализация возможности настройки системы",	
	"К0208": "Реализация диагностики всех граничных и аварийных ситуаций",	
	"К0209": "Наличие определения всех данных (переменные, индексы, массивы и проч.)",	
	"К0210": "Наличие интерфейсов с пользователем",	
	"К0301": "Отсутствие противоречий в описании частных функций",	
	"К0302": "Отсутствие противоречий в описании основных функций в разных документах",	
	"К0303": "Отсутствие противоречий в описании алгоритмов",	
	"К0304": "Отсутствие противоречий в описании взаимосвязей в системе",	
	"К0305": "Отсутствие противоречий в описании интерфейсов между модулями",	
	"К0306": "Отсутствие противоречий в описании интерфейсов с пользователем",	
	"К0307": "Отсутствие противоречий в описании настройки системы",	
	"К0309": "Отсутствие противоречий в описании иерархической структуры сообщений",	
	"К0310": "Отсутствие противоречий в описании диагностических сообщений",	
	"К0311": "Отсутствие противоречий в описании данных",	
	"К0401": "Отсутствие противоречий в выполнении основных функций	",
	"К0402": "Отсутствие противоречий в выполнении частных функций",	
	"К0403": "Отсутствие противоречий в выполнении алгоритмов",	
	"К0404": "Правильность взаимосвязей",	
	"К0405": "Правильность реализации интерфейса между модулями",	
	"К0406": "Правильность реализации интерфейса с пользователем",	
	"К0407": "Отсутствие противоречий в настройке системы",	
	"К0408": "Отсутствие противоречий в диагностике системы	",
	"К0409": "Отсутствие противоречий в общих переменных",	
	"К0501": "Единообразие способов вызова модулей",	
	"К0502": "Единообразие процедур возврата управления из модулей",	
	"К0503": "Единообразие способов сохранения информации для возврата",	
	"К0504": "Единообразие способов восстановления информации для возврата",	
	"К0505": "Единообразие организации списков передаваемых параметров",	
	"К0601": "Единообразие наименования каждой переменной и константы",	
	"К0602": "Все ли одинаковые константы встречаются во всех программах под одинаковыми именами",	
	"К0603": "Единообразие определения внешних данных во всех программах",	
	"К0604": "Используются ли разные идентификаторы для разных переменных",	
	"К0605": "Все ли общие переменные объявлены как общие переменные",	
	"К0606": "Наличие определений одинаковых атрибутов",	
	"К0701": "Комплектность документации в соответствии со стандартами",	
	"К0702": "Правильное оформление частей документов",	
	"К0703": "Правильное оформление титульных и заглавных листов документов",	
	"К0704": "Наличие в документах всех разделов в соответствии со стандартами",	
	"К0705": "Полнота содержания разделов в соответствии со стандартами",	
	"К0706": "Деление документов на структурные элементы: разделы, подразделы, пункты, подпункты",	
	"К0801": "Соответствие организации и вычислительного процесса эксплуатационной документации",	
	"К0802": "Правильность заданий на выполнение программы, правильность написания управляющих и операторов (отсутствие ошибок)",	
	"К0803": "Отсутствие ошибок в описании действий пользователя",	
	"К0804": "Отсутствие ошибок в описании запуска",	
	"К0805": "Отсутствие ошибок в описании генерации",	
	"К0806": "Отсутствие ошибок в описании настройки",	
	"К1001": "Наличие требований к тестированию программ",	
	"К1002": "Достаточность требований к тестированию программ",	
	"К1003": "Отношение числа модулей, отработавших в процессе тестирования и отладки ( Q т м ) к общему числу модулей ( Q о м )",	
	"К1004": "Отношение числа логических блоков, отработавших в процессе тестирования и отладки ( Q т б ), к общему числу логических блоков в программе ( Q о б )"	
};
