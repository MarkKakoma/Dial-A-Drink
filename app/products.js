// Dial A Drink Zimbabwe — product catalogue (prototype data)
// Single source of truth. Edit prices/names here; catalogue, product and cart all read from this.

const CATEGORIES = [
  {
    "name": "Whisky",
    "emoji": "🥃"
  },
  {
    "name": "Brandy",
    "emoji": "🥃"
  },
  {
    "name": "Brandy/Cognac",
    "emoji": "🥃"
  },
  {
    "name": "Rum",
    "emoji": "🍹"
  },
  {
    "name": "Vodka",
    "emoji": "🍸"
  },
  {
    "name": "Gin",
    "emoji": "🍸"
  },
  {
    "name": "Tequila",
    "emoji": "🌵"
  },
  {
    "name": "Liqueur",
    "emoji": "🍯"
  },
  {
    "name": "Beers",
    "emoji": "🍺"
  },
  {
    "name": "Cider",
    "emoji": "🍏"
  },
  {
    "name": "Drinks & Mixers",
    "emoji": "🥤"
  },
  {
    "name": "Red Wine",
    "emoji": "🍷"
  },
  {
    "name": "White Wine",
    "emoji": "🥂"
  },
  {
    "name": "Rose'",
    "emoji": "🌸"
  },
  {
    "name": "Bubbly",
    "emoji": "🍾"
  },
  {
    "name": "Box Wine",
    "emoji": "📦"
  },
  {
    "name": "Cordials",
    "emoji": "🧃"
  },
  {
    "name": "Premixed/Ready To Drink",
    "emoji": "🥤"
  },
  {
    "name": "Add-Ons",
    "emoji": "🍕"
  },
  {
    "name": "Vapes",
    "emoji": "💨"
  }
];

const PRODUCTS = [
  {"id": "p001", "name": "Jameson Irish Whisky", "cat": "Whisky", "price": 30.0, "size": "750 ML", "emoji": "🥃", "desc": "Jameson Irish Whiskey is a blended Irish Whiskey. A light floral fragrance, peppered with spicy wood notes."},
  {"id": "p002", "name": "Jameson Caskmates Stout Edition", "cat": "Whisky", "price": 35.0, "size": "750 ML", "emoji": "🥃", "desc": "An initial aroma of freshly cut hay complemented by a crisp orchard fruit character - green apple."},
  {"id": "p003", "name": "Jameson IPA", "cat": "Whisky", "price": 35.0, "size": "750 ML", "emoji": "🥃", "desc": "Floral, herbal hops, grapefruit citrus notes with subtle orchard fruits, complemented by wood shavings."},
  {"id": "p004", "name": "Jameson Black Barrel", "cat": "Whisky", "price": 49.0, "size": "750 ML", "emoji": "🥃", "desc": "Aged up to 16 years in double charred barrels, making it a full strength, rich Irish whiskey."},
  {"id": "p005", "name": "Viceroy Brandy 5yo", "cat": "Brandy", "price": 15.0, "size": "750 ML", "emoji": "🥃", "desc": "A blended brandy combining premium neutral spirit and 5 year matured Potstill brandy."},
  {"id": "p006", "name": "Klipdrift", "cat": "Brandy", "price": 17.0, "size": "750 ML", "emoji": "🥃", "desc": "South African brandy known for its smooth and rich flavour profile."},
  {"id": "p007", "name": "Klipdrift Premium", "cat": "Brandy", "price": 20.0, "size": "750 ML", "emoji": "🥃", "desc": "A premium South African brandy known for its smooth and rich flavour profile."},
  {"id": "p008", "name": "KWV 3yo Brandy", "cat": "Brandy", "price": 14.0, "size": "750 ML", "emoji": "🥃", "desc": "The foundation of the craft. Double distilled, Potstill content matured for at least three years."},
  {"id": "p009", "name": "Hennessy VS", "cat": "Brandy/Cognac", "price": 60.0, "size": "750 ML", "emoji": "🥃", "desc": "Toasted and fruit notes, with a rich, clearly defined palate and a welcoming expression."},
  {"id": "p010", "name": "Hennessy VSOP", "cat": "Brandy/Cognac", "price": 100.0, "size": "750 ML", "emoji": "🥃", "desc": "A well-balanced blend of over 60 eaux-de-vie, matured exclusively in French oak."},
  {"id": "p011", "name": "Hennessy XO", "cat": "Brandy/Cognac", "price": 300.0, "size": "750 ML", "emoji": "🥃", "desc": "The well-rounded flavour of rich, dark chocolate with a striking, powerful finish."},
  {"id": "p012", "name": "Remy Martin VSOP", "cat": "Brandy/Cognac", "price": 95.0, "size": "750 ML", "emoji": "🥃", "desc": "Very Superior Old Pale, made from a blend of Grande and Petite Champagne eaux-de-vie."},
  {"id": "p013", "name": "Captain Morgan Spiced Gold", "cat": "Rum", "price": 20.0, "size": "750 ML", "emoji": "🍹", "desc": "A blend of Caribbean rum, real Madagascar vanilla, natural flavours and spice."},
  {"id": "p014", "name": "Captain Morgan Dark Rum", "cat": "Rum", "price": 20.0, "size": "750 ML", "emoji": "🍹", "desc": "A full-bodied dark rum with rich caramel and vanilla notes. Rich and smooth."},
  {"id": "p015", "name": "Malibu Original", "cat": "Rum", "price": 20.0, "size": "750 ML", "emoji": "🍹", "desc": "The refreshing taste of summer, made with Caribbean rum and natural coconut flavour."},
  {"id": "p016", "name": "Bacardi Carta Blanca", "cat": "Rum", "price": 20.0, "size": "750 ML", "emoji": "🍹", "desc": "A light and aromatic white rum with delicate floral and fruity notes, ideal for cocktails."},
  {"id": "p017", "name": "Smirnoff 1818 Vodka", "cat": "Vodka", "price": 12.0, "size": "750 ML", "emoji": "🍸", "desc": "A premium vodka distilled three times for a clean, smooth taste."},
  {"id": "p018", "name": "Red Square Plain", "cat": "Vodka", "price": 11.0, "size": "750 ML", "emoji": "🍸", "desc": "Carbon filtered for clarity and triple distilled for purity. A premium vodka."},
  {"id": "p019", "name": "Red Square Wild Berry", "cat": "Vodka", "price": 11.0, "size": "750 ML", "emoji": "🍸", "desc": "Carbon filtered and triple distilled, with a wild berry twist."},
  {"id": "p020", "name": "Red Square Lime Vodka", "cat": "Vodka", "price": 11.0, "size": "750 ML", "emoji": "🍸", "desc": "Carbon filtered and triple distilled, with a zesty lime twist."},
  {"id": "p021", "name": "Gordons OG", "cat": "Gin", "price": 13.0, "size": "750 ML", "emoji": "🍸", "desc": "London Dry Gin made with only the finest botanicals, carefully distilled."},
  {"id": "p022", "name": "Gordons Pink Berry", "cat": "Gin", "price": 13.0, "size": "750 ML", "emoji": "🍸", "desc": "A luxurious creaminess complementing a complex array of fruit flavours."},
  {"id": "p023", "name": "Strettons OG", "cat": "Gin", "price": 15.0, "size": "750 ML", "emoji": "🍸", "desc": "A world-class, multiple award-winning London Dry Gin with a secret recipe."},
  {"id": "p024", "name": "Strettons Triple Berry", "cat": "Gin", "price": 15.0, "size": "750 ML", "emoji": "🍸", "desc": "A delightful and fruity twist on the classic gin."},
  {"id": "p025", "name": "Olmeca Silver", "cat": "Tequila", "price": 32.0, "size": "750 ML", "emoji": "🌵", "desc": "A select high-quality Mexican tequila with at least 51% Weber blue agave."},
  {"id": "p026", "name": "Olmeca Gold", "cat": "Tequila", "price": 33.0, "size": "750 ML", "emoji": "🌵", "desc": "A high-quality Mexican tequila with at least 51% blue agave distillate."},
  {"id": "p027", "name": "Patron Reposado", "cat": "Tequila", "price": 95.0, "size": "750 ML", "emoji": "🌵", "desc": "Complex and distinctive, rested in oak for a smooth, refined character."},
  {"id": "p028", "name": "Patron Coffee", "cat": "Tequila", "price": 75.0, "size": "1000 ML", "emoji": "🌵", "desc": "A dry, low-proof coffee liqueur blending Patron Silver with natural coffee essence."},
  {"id": "p029", "name": "Amarula Cream 1L", "cat": "Liqueur", "price": 26.0, "size": "1000 ML", "emoji": "🍯", "desc": "Original cream liqueur made from the Marula fruit of sub-Equatorial Africa."},
  {"id": "p030", "name": "Amarula Cream 750ml", "cat": "Liqueur", "price": 22.0, "size": "750 ML", "emoji": "🍯", "desc": "Original cream liqueur made from the Marula fruit of sub-Equatorial Africa."},
  {"id": "p031", "name": "Cactus Jack OG", "cat": "Liqueur", "price": 22.0, "size": "700 ML", "emoji": "🍯", "desc": "Crafted with precision and care, delivering a distinctive agave character."},
  {"id": "p032", "name": "Jagermeister 1L", "cat": "Liqueur", "price": 32.0, "size": "1000 ML", "emoji": "🍯", "desc": "A German digestif liqueur made with 56 different herbs and botanicals."},
  {"id": "p033", "name": "Zambezi Lager", "cat": "Beers", "price": 1.5, "size": "330 ML", "emoji": "🍺", "desc": "A premium quality beer with good effervescence and exceptional hops flavour."},
  {"id": "p034", "name": "Carling Black Label", "cat": "Beers", "price": 1.5, "size": "330 ML", "emoji": "🍺", "desc": "A light, clean-tasting blond lager with a subtle hint of hops."},
  {"id": "p035", "name": "Castle Lager", "cat": "Beers", "price": 1.5, "size": "330 ML", "emoji": "🍺", "desc": "South Africa's oldest beer brand - iconic, somewhat dry, never bitter."},
  {"id": "p036", "name": "Castle Lite", "cat": "Beers", "price": 2.0, "size": "340 ML", "emoji": "🍺", "desc": "Extra cold lagered to be a clean-drinking, refreshing full strength beer."},
  {"id": "p037", "name": "Hunters Dry", "cat": "Cider", "price": 2.25, "size": "330 ML", "emoji": "🍏", "desc": "A naturally crisp cider with a distinctive apple taste and dry finish."},
  {"id": "p038", "name": "Hunters Gold", "cat": "Cider", "price": 2.25, "size": "330 ML", "emoji": "🍏", "desc": "An all-natural apple cider with a distinctively crisp, refreshing taste."},
  {"id": "p039", "name": "Hunters Hard Lemon", "cat": "Cider", "price": 2.5, "size": "330 ML", "emoji": "🍏", "desc": "A hard cider with an extra zesty twist and bright golden colour."},
  {"id": "p040", "name": "Savannah Dry", "cat": "Cider", "price": 2.25, "size": "330 ML", "emoji": "🍏", "desc": "Produced from crushed apples grown in the Elgin Valley of the Western Cape."},
  {"id": "p041", "name": "Coca-Cola", "cat": "Drinks & Mixers", "price": 1.15, "size": "330 ML", "emoji": "🥤", "desc": "The classic carbonated soft drink from the Coca-Cola Company."},
  {"id": "p042", "name": "Sprite", "cat": "Drinks & Mixers", "price": 1.15, "size": "330 ML", "emoji": "🥤", "desc": "A clear lemon-lime sparkling beverage with natural flavours and no caffeine."},
  {"id": "p043", "name": "Fanta Orange", "cat": "Drinks & Mixers", "price": 1.15, "size": "330 ML", "emoji": "🥤", "desc": "A tongue-tingling, delicious sparkling orange fruit drink."},
  {"id": "p044", "name": "Coca-Cola Zero Sugar", "cat": "Drinks & Mixers", "price": 1.1, "size": "330 ML", "emoji": "🥤", "desc": "All the taste of Coca-Cola with zero sugar."},
  {"id": "p045", "name": "Namaqua Sweet Red", "cat": "Red Wine", "price": 8.0, "size": "750 ML", "emoji": "🍷", "desc": "A long fruity aftertaste, best served chilled with pasta or on its own."},
  {"id": "p046", "name": "1659 Classic Red", "cat": "Red Wine", "price": 8.0, "size": "750 ML", "emoji": "🍷", "desc": "Deep, ripe dark fruit aromas with subtle undertones of spice and vanilla."},
  {"id": "p047", "name": "Bella Vino Sultry Red", "cat": "Red Wine", "price": 8.0, "size": "750 ML", "emoji": "🍷", "desc": "Deep, ripe dark fruit aromas with lovely spice and vanilla notes."},
  {"id": "p048", "name": "Three Monkeys Merlot", "cat": "Red Wine", "price": 9.0, "size": "750 ML", "emoji": "🍷", "desc": "Medium to full bodied, with juicy plum and raspberry on the palate."},
  {"id": "p049", "name": "Three Monkeys Cab Sauv", "cat": "Red Wine", "price": 9.0, "size": "750 ML", "emoji": "🍷", "desc": "A generous juicy mouthful with bags of fruit and spice, a hint of tea."},
  {"id": "p050", "name": "Pandoras Box Merlot", "cat": "Red Wine", "price": 8.0, "size": "750 ML", "emoji": "🍷", "desc": "Deep, fruit-driven and jammy, filled with ripe fruit and spices."},
  {"id": "p051", "name": "Pandoras Box Cab Sauv", "cat": "Red Wine", "price": 8.0, "size": "750 ML", "emoji": "🍷", "desc": "Silky smooth with rich dark berries, bitter chocolate and plummy flavours."},
  {"id": "p052", "name": "Sixpence Cab Sauv", "cat": "Red Wine", "price": 11.0, "size": "750 ML", "emoji": "🍷", "desc": "Made from 100% Cabernet Sauvignon, medium-bodied and abounding with fruit."},
  {"id": "p053", "name": "Balance Cab Sauv", "cat": "Red Wine", "price": 11.0, "size": "750 ML", "emoji": "🍷", "desc": "Intense red hues, well-structured and velvety smooth with ripe fruit."},
  {"id": "p054", "name": "Excelsior Cab Sauv", "cat": "Red Wine", "price": 12.0, "size": "750 ML", "emoji": "🍷", "desc": "Dark ruby colour with sweet violet, blackberry and succulent flavours."},
  {"id": "p055", "name": "Alvis Drift Merlot", "cat": "Red Wine", "price": 13.0, "size": "750 ML", "emoji": "🍷", "desc": "Full bodied yet soft and juicy with subtle tobacco characters."},
  {"id": "p056", "name": "Casal Garcia Vinho Tinto", "cat": "Red Wine", "price": 12.0, "size": "750 ML", "emoji": "🍷", "desc": "A young, fruity wine with an elegant, smooth body and characteristic freshness."},
  {"id": "p057", "name": "Casal Garcia Sangria Red", "cat": "Red Wine", "price": 12.0, "size": "750 ML", "emoji": "🍷", "desc": "Bright ruby colour, very aromatic and easy drinking."},
  {"id": "p058", "name": "Nederburg Baronne", "cat": "Red Wine", "price": 12.0, "size": "750 ML", "emoji": "🍷", "desc": "Deep ruby colour with alluring aromas of spicy dark and black berries."},
  {"id": "p059", "name": "Kumusha Cab Sauv", "cat": "Red Wine", "price": 12.0, "size": "750 ML", "emoji": "🍷", "desc": "A fleshy, fruit-driven Cabernet from South Africa's Western Cape."},
  {"id": "p060", "name": "The Good Stuff Red", "cat": "Red Wine", "price": 13.0, "size": "750 ML", "emoji": "🍷", "desc": "Produced in the heart of tobacco country, a smooth, characterful red."},
  {"id": "p061", "name": "Klein Zalze Merlot 2021", "cat": "Red Wine", "price": 15.0, "size": "750 ML", "emoji": "🍷", "desc": "Exceptionally smooth mouthfeel with supple, elegant tannin structure."},
  {"id": "p062", "name": "Bob's Your Uncle Sauv Blanc", "cat": "White Wine", "price": 8.0, "size": "750 ML", "emoji": "🥂", "desc": "A wonderfully fruity white wine with dynamic, well-paired fruit flavours."},
  {"id": "p063", "name": "1659 Sauv Blanc", "cat": "White Wine", "price": 8.0, "size": "750 ML", "emoji": "🥂", "desc": "Ripe aromas of tropical fruit with subtle hints of lime. Easy drinking."},
  {"id": "p064", "name": "Pandoras Box Sauv Blanc", "cat": "White Wine", "price": 8.0, "size": "750 ML", "emoji": "🥂", "desc": "Pale straw yellow with ripe tropicals and floral notes adding complexity."},
  {"id": "p065", "name": "Darling Cellars Sweet White", "cat": "White Wine", "price": 10.0, "size": "750 ML", "emoji": "🥂", "desc": "Many layers of tropical hints, honey and pear notes on the nose."},
  {"id": "p066", "name": "JP Chenet Sauv Blanc", "cat": "White Wine", "price": 11.0, "size": "750 ML", "emoji": "🥂", "desc": "Golden with green highlights and aromas of white flowers."},
  {"id": "p067", "name": "Diemersfontein Sauv Blanc", "cat": "White Wine", "price": 14.0, "size": "750 ML", "emoji": "🥂", "desc": "Fresh acidity and a delightful spectrum of ripe tropical fruit."},
  {"id": "p068", "name": "Excelsior Sauv Blanc", "cat": "White Wine", "price": 12.0, "size": "750 ML", "emoji": "🥂", "desc": "Complex nose with passion fruit, grapefruit and ripe fig aromas."},
  {"id": "p069", "name": "Balance Sauv Blanc", "cat": "White Wine", "price": 11.0, "size": "750 ML", "emoji": "🥂", "desc": "Fresh and crisp with tropical fruit flavours."},
  {"id": "p070", "name": "Casal Garcia Vinho Verde", "cat": "White Wine", "price": 11.0, "size": "750 ML", "emoji": "🥂", "desc": "A light wine marked by beautiful colour and incredible freshness."},
  {"id": "p071", "name": "Casal Garcia Sangria White", "cat": "White Wine", "price": 13.0, "size": "750 ML", "emoji": "🥂", "desc": "Bright colour, clean appearance, very aromatic."},
  {"id": "p072", "name": "Nederburg Lyric", "cat": "White Wine", "price": 13.0, "size": "750 ML", "emoji": "🥂", "desc": "Light golden with a touch of lime green and lovely aromas."},
  {"id": "p073", "name": "Kumusha Sauv Blanc", "cat": "White Wine", "price": 15.0, "size": "750 ML", "emoji": "🥂", "desc": "Loaded with gooseberry, citrus and fresh cut grass flavours."},
  {"id": "p074", "name": "Fat Bastard Sauv Blanc", "cat": "White Wine", "price": 15.0, "size": "750 ML", "emoji": "🥂", "desc": "A perfect everyday white with a brilliant lemon yellow colour."},
  {"id": "p075", "name": "Alvi's Drift Sauv Blanc", "cat": "White Wine", "price": 19.0, "size": "750 ML", "emoji": "🥂", "desc": "Pale straw with intense aromas of gooseberry and granadilla."},
  {"id": "p076", "name": "Namaqua Blanc De Blanc", "cat": "White Wine", "price": 10.0, "size": "750 ML", "emoji": "🥂", "desc": "Crisp, dry and refreshingly fruity with guava and citrus flavours."},
  {"id": "p077", "name": "Charme Sauv Blanc", "cat": "White Wine", "price": 14.0, "size": "750 ML", "emoji": "🥂", "desc": "A zingy, refreshing dry white with lemon, golden apple and asparagus notes."},
  {"id": "p078", "name": "Tall Horse Sauv Blanc", "cat": "White Wine", "price": 15.0, "size": "750 ML", "emoji": "🥂", "desc": "A graceful perfumed nose with soft, sunny tropical fruit aromas."},
  {"id": "p079", "name": "Montino Rose", "cat": "Rose'", "price": 11.0, "size": "750 ML", "emoji": "🌸", "desc": "An irresistible juicy, naturally sweet rose, pretty cherry pink in colour."},
  {"id": "p080", "name": "Casal Garcia Vinho Rose", "cat": "Rose'", "price": 13.0, "size": "750 ML", "emoji": "🌸", "desc": "Pink colour, bright and slightly effervescent, a fruity wine."},
  {"id": "p081", "name": "Lady Lilian Cru Classe Rose", "cat": "Rose'", "price": 10.0, "size": "750 ML", "emoji": "🌸", "desc": "An elegant sparkling rose wine."},
  {"id": "p082", "name": "Bon Courage Blush Vin Doux", "cat": "Rose'", "price": 11.0, "size": "750 ML", "emoji": "🌸", "desc": "A fragrant, flame-coloured wine with gentle floral perfume and tropical fruit."},
  {"id": "p083", "name": "Four Cousins Sweet Rose", "cat": "Rose'", "price": 11.0, "size": "750 ML", "emoji": "🌸", "desc": "A light-bodied, semi-sweet rose with a floral perfume."},
  {"id": "p084", "name": "Robertson Sweet Rose", "cat": "Rose'", "price": 12.0, "size": "750 ML", "emoji": "🌸", "desc": "A lightly sweet, medium-bodied blush-pink rose from South Africa."},
  {"id": "p085", "name": "Robertson Sweet Rose 1.5L", "cat": "Rose'", "price": 15.0, "size": "1500 ML", "emoji": "🌸", "desc": "A lightly sweet, medium-bodied blush-pink rose. Large format."},
  {"id": "p086", "name": "JC LeRoux Nectar Rose", "cat": "Bubbly", "price": 20.0, "size": "750 ML", "emoji": "🍾", "desc": "A sophisticated, off-dry sparkling wine with a salmon blush colour."},
  {"id": "p087", "name": "Alvi's Drift Brut Rose", "cat": "Bubbly", "price": 18.0, "size": "750 ML", "emoji": "🍾", "desc": "A clean, fresh, unpretentious wine with a dry finish and lively mousse."},
  {"id": "p088", "name": "Da Luca Sparkling Rose", "cat": "Bubbly", "price": 20.0, "size": "750 ML", "emoji": "🍾", "desc": "A smooth and refreshing Italian sparkling rose for any occasion."},
  {"id": "p089", "name": "Valdo Prosecco Paradise", "cat": "Bubbly", "price": 23.0, "size": "750 ML", "emoji": "🍾", "desc": "Fine, elegant blossom with a consistent presence of raspberry aromas."},
  {"id": "p090", "name": "Bottega Millesimato Brut", "cat": "Bubbly", "price": 22.0, "size": "750 ML", "emoji": "🍾", "desc": "A charming sparkling wine made with a specific oenological technique."},
  {"id": "p091", "name": "Graham Beck Bliss Nectar Rose", "cat": "Bubbly", "price": 23.0, "size": "750 ML", "emoji": "🍾", "desc": "A seductively sweet, enchanting Rose-style Cap Classique."},
  {"id": "p092", "name": "Bottega Prosecco Brut", "cat": "Bubbly", "price": 27.0, "size": "750 ML", "emoji": "🍾", "desc": "Fruity apple, white peach and citrus with delicate floral notes."},
  {"id": "p093", "name": "Graham Beck Pinot Noir Rose", "cat": "Bubbly", "price": 38.0, "size": "750 ML", "emoji": "🍾", "desc": "A beautiful salmon pink hue with ripe blueberries and subtle spice."},
  {"id": "p094", "name": "Moet Imperial Brut", "cat": "Bubbly", "price": 80.0, "size": "750 ML", "emoji": "🍾", "desc": "Vibrant notes of green apple and citrus fruit. The iconic champagne."},
  {"id": "p095", "name": "Moet Nectar Imperial", "cat": "Bubbly", "price": 100.0, "size": "750 ML", "emoji": "🍾", "desc": "A chromatic universe of golden, brilliant, shimmering notes."},
  {"id": "p096", "name": "Veuve Clicquot Brut", "cat": "Bubbly", "price": 100.0, "size": "750 ML", "emoji": "🍾", "desc": "Crisp, full flavours, loved the world over for its consistency."},
  {"id": "p097", "name": "Veuve Clicquot Rich", "cat": "Bubbly", "price": 120.0, "size": "750 ML", "emoji": "🍾", "desc": "Bright and clear with peach, apricot, pineapple and mango aromas."},
  {"id": "p098", "name": "Rooiberg Sparkling Brut", "cat": "Bubbly", "price": 10.0, "size": "750 ML", "emoji": "🍾", "desc": "A vivacious, light but dry sparkling wine with dried herbs and citrus."},
  {"id": "p099", "name": "Bottega Gold Prosecco", "cat": "Bubbly", "price": 70.0, "size": "750 ML", "emoji": "🍾", "desc": "A Prosecco DOC from Glera grapes, in its iconic gold bottle."},
  {"id": "p100", "name": "Miss Molly Brut Prosecco", "cat": "Bubbly", "price": 20.0, "size": "750 ML", "emoji": "🍾", "desc": "A dry, crisp sparkling wine with crunchy apple and nectarine."},
  {"id": "p101", "name": "Minini Prosecco", "cat": "Bubbly", "price": 25.0, "size": "750 ML", "emoji": "🍾", "desc": "Pale straw-yellow with lively, persistent bubbles and a fresh aroma."},
  {"id": "p102", "name": "Baglietti Rose Gold", "cat": "Bubbly", "price": 20.0, "size": "750 ML", "emoji": "🍾", "desc": "A large scent with wild strawberries in a striking gold edition."},
  {"id": "p103", "name": "Namaqua Johannisberger Red 5L", "cat": "Box Wine", "price": 20.0, "size": "5 L", "emoji": "📦", "desc": "A sweet red wine known for fruity flavours and easy-drinking style."},
  {"id": "p104", "name": "4th Street Sweet Red 5L", "cat": "Box Wine", "price": 20.0, "size": "5 L", "emoji": "📦", "desc": "A wine known for its fruity sweetness with notes of ripe berries."},
  {"id": "p105", "name": "Roses Lime Cordial", "cat": "Cordials", "price": 9.5, "size": "750 ML", "emoji": "🧃", "desc": "A sweetened, concentrated lime juice to mix with water or other beverages."},
  {"id": "p106", "name": "Roses Watermelon Cordial", "cat": "Cordials", "price": 9.5, "size": "750 ML", "emoji": "🧃", "desc": "A concentrated syrup offering a refreshing, juicy watermelon flavour."},
  {"id": "p107", "name": "Grenadine Cordial", "cat": "Cordials", "price": 10.0, "size": "750 ML", "emoji": "🧃", "desc": "A vibrant red, sweet and tangy non-alcoholic syrup for mixed drinks."},
  {"id": "p108", "name": "Red Square Pink Ice", "cat": "Premixed/Ready To Drink", "price": 2.0, "size": "275 ML", "emoji": "🥤", "desc": "A stylish spirit cooler with a lively, fruity flavour."},
  {"id": "p109", "name": "Red Square Blue Ice", "cat": "Premixed/Ready To Drink", "price": 2.0, "size": "275 ML", "emoji": "🥤", "desc": "A lively, fruity cooler with blueberry fragrances that refreshes."},
  {"id": "p110", "name": "Jack Daniel's Cola", "cat": "Premixed/Ready To Drink", "price": 2.25, "size": "220 ML", "emoji": "🥤", "desc": "The smoothness of Jack Daniel's with caramel notes and oak woodiness."},
  {"id": "p111", "name": "Smirnoff Guarana", "cat": "Premixed/Ready To Drink", "price": 2.25, "size": "275 ML", "emoji": "🥤", "desc": "A strong 6.5% blend of Smirnoff Vodka with citrus and a hit of guarana."},
  {"id": "p112", "name": "Rekorderlig Strawberry", "cat": "Premixed/Ready To Drink", "price": 3.5, "size": "330 ML", "emoji": "🥤", "desc": "A Swedish cider known for its refreshing strawberry and lime taste."},
  {"id": "p113", "name": "Chateau Del Rei", "cat": "Premixed/Ready To Drink", "price": 2.0, "size": "250 ML", "emoji": "🥤", "desc": "A low-alcohol canned sparkling wine in various styles."},
  {"id": "p114", "name": "Bahama Pina Colada", "cat": "Premixed/Ready To Drink", "price": 2.15, "size": "440 ML", "emoji": "🥤", "desc": "A pre-mixed, ready-to-drink pina colada cooler."},
  {"id": "p115", "name": "Brooks Hard Seltzer", "cat": "Premixed/Ready To Drink", "price": 2.0, "size": "330 ML", "emoji": "🥤", "desc": "Gluten-free vodka, natural fruit flavourings and spring water."},
  {"id": "p116", "name": "Woodfired Regina Pizza (medium)", "cat": "Add-Ons", "price": 13.0, "size": "1 each", "emoji": "🍕", "desc": "Woodfired medium pizza with ham and mushrooms."},
  {"id": "p117", "name": "Beef Burger", "cat": "Add-Ons", "price": 5.0, "size": "1 each", "emoji": "🍕", "desc": "A juicy beef patty with lettuce, pickles, tomatoes, grilled onions and ketchup."},
  {"id": "p118", "name": "Beef Burger & Fries", "cat": "Add-Ons", "price": 7.0, "size": "1 each", "emoji": "🍕", "desc": "A standard beef burger served with a side of regular fries."},
  {"id": "p119", "name": "Blaze Grape Ice 10k Puffs", "cat": "Vapes", "price": 22.0, "size": "10k puffs", "emoji": "💨", "desc": "Sweet and sour ripe grapes with a refreshing icy finish."},
  {"id": "p120", "name": "Blaze Blueberry On Ice 10k Puffs", "cat": "Vapes", "price": 22.0, "size": "10k puffs", "emoji": "💨", "desc": "Ripe blueberries with a refreshing icy menthol finish."},
  {"id": "p121", "name": "Blaze Lemon Mint 10k Puffs", "cat": "Vapes", "price": 22.0, "size": "10k puffs", "emoji": "💨", "desc": "A refreshing blend of zesty lemon and invigorating mint."},
  {"id": "p122", "name": "Blaze Watermelon Ice 10k Puffs", "cat": "Vapes", "price": 22.0, "size": "10k puffs", "emoji": "💨", "desc": "Sweet ripe watermelon with a cool, icy menthol finish."},
  {"id": "p123", "name": "Blaze Lemon Mint 6.5k Puffs", "cat": "Vapes", "price": 20.0, "size": "6.5k puffs", "emoji": "💨", "desc": "Sharp, zesty lemon with an invigorating mint finish."},
  {"id": "p124", "name": "Blaze Blueberry On Ice 6.5k Puffs", "cat": "Vapes", "price": 20.0, "size": "6.5k puffs", "emoji": "💨", "desc": "Sweet, ripe blueberry with a cool, icy menthol finish."},
  {"id": "p125", "name": "Blaze 2in1 Watermelon & Strawberry 30k Puffs", "cat": "Vapes", "price": 28.0, "size": "30k puffs", "emoji": "💨", "desc": "Two flavours in one - watermelon ice and strawberry."},
  {"id": "p126", "name": "Blaze 2in1 Cherry Cola & Blue Razz Ice 30k Puffs", "cat": "Vapes", "price": 28.0, "size": "30k puffs", "emoji": "💨", "desc": "Two flavours in one - cherry cola and blue raspberry ice."},
];

// helpers
const money = n => '$' + n.toFixed(2);
const byId = id => PRODUCTS.find(p => p.id === id);
const byCat = c => PRODUCTS.filter(p => p.cat === c);