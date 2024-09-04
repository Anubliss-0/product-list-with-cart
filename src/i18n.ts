import i18n from 'i18next';
import { initReactI18next, useTranslation, Trans } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "addToCart": "Add to Cart",
                    "carbonNeutral": "This is a <1>carbon-neutral</1> delivery",
                    "starters": {
                        "title": "Starters",
                        "category": {
                            "appetizer": "Appetizer",
                            "bread": "Bread",
                            "salad": "Salad"
                        },
                        "items": {
                            "bruschetta": "Bruschetta",
                            "stuffedMushrooms": "Stuffed Mushrooms",
                            "garlicBreadsticks": "Garlic Breadsticks",
                            "capreseSalad": "Caprese Salad",
                            "miniQuiches": "Mini Quiches"
                        }
                    },
                    "desserts": {
                        "title": "Desserts",
                        "category": {
                            "waffle": "Waffle",
                            "cremeBrulee": "Crème Brûlée",
                            "macaron": "Macaron",
                            "tiramisu": "Tiramisu",
                            "baklava": "Baklava",
                            "cake": "Cake",
                            "brownie": "Brownie",
                            "pannaCotta": "Panna Cotta",
                            "pie": "Pie"
                        },
                        "items": {
                            "waffleWithBerries": "Waffle with Berries",
                            "vanillaBeanCremeBrulee": "Vanilla Bean Crème Brûlée",
                            "macaronMixofFive": "Macaron Mix of Five",
                            "classicTiramisu": "Classic Tiramisu",
                            "pistachioBaklava": "Pistachio Baklava",
                            "lemonMeringuePie": "Lemon Meringue Pie",
                            "redVelvetCake": "Red Velvet Cake",
                            "saltedCaramelBrownie": "Salted Caramel Brownie",
                            "vanillaPannaCotta": "Vanilla Panna Cotta"
                        }
                    },
                    "ariaLabels": {
                        "decreaseQuantity": "Decrease quantity",
                        "increaseQuantity": "Increase quantity",
                    }
                }
            },
            nl: {
                "translation": {
                    "addToCart": "Toevoegen",
                    "carbonNeutral": "Dit is een <1>koolstofneutrale</1> levering",
                    "starters": {
                        "title": "Voorgerechten",
                        "category": {
                            "appetizer": "Aperitief",
                            "bread": "Brood",
                            "salad": "Salade"
                        },
                        "items": {
                            "bruschetta": "Bruschetta",
                            "stuffedMushrooms": "Gevulde Champignons",
                            "garlicBreadsticks": "Knoflook Broodstengels",
                            "capreseSalad": "Caprese Salade",
                            "miniQuiches": "Mini Quiches"
                        }
                    },
                    "desserts": {
                        "title": "Nagerechten",
                        "category": {
                            "waffle": "Wafel",
                            "cremeBrulee": "Crème Brûlée",
                            "macaron": "Macaron",
                            "tiramisu": "Tiramisu",
                            "baklava": "Baklava",
                            "cake": "Taart",
                            "brownie": "Brownie",
                            "pannaCotta": "Panna Cotta",
                            "pie": "Taart"
                        },
                        "items": {
                            "waffleWithBerries": "Wafel met Bessen",
                            "vanillaBeanCremeBrulee": "Vanilleboon Crème Brûlée",
                            "macaronMixofFive": "Macaron Mix van Vijf",
                            "classicTiramisu": "Klassieke Tiramisu",
                            "pistachioBaklava": "Pistache Baklava",
                            "lemonMeringuePie": "Citroen Meringue Taart",
                            "redVelvetCake": "Red Velvet Taart",
                            "saltedCaramelBrownie": "Gezouten Karamel Brownie",
                            "vanillaPannaCotta": "Vanille Panna Cotta"
                        }
                    },
                    "ariaLabels": {
                        "decreaseQuantity": "Hoeveelheid verminderen",
                        "increaseQuantity": "Hoeveelheid verhogen"
                    }
                }
            },
            fr: {
                translation: {
                    "addToCart": "Ajouter au panier",
                    "carbonNeutral": "Ceci est une livraison <1>neutre en carbone</1>",
                    "starters": {
                        "title": "Entrées",
                        "category": {
                            "appetizer": "Apéritif",
                            "bread": "Pain",
                            "salad": "Salade"
                        },
                        "items": {
                            "bruschetta": "Bruschetta",
                            "stuffedMushrooms": "Champignons farcis",
                            "garlicBreadsticks": "Gressins à l'ail",
                            "capreseSalad": "Salade Caprese",
                            "miniQuiches": "Mini quiches"
                        }
                    },
                    "desserts": {
                        "title": "Desserts",
                        "category": {
                            "waffle": "Gaufre",
                            "cremeBrulee": "Crème brûlée",
                            "macaron": "Macaron",
                            "tiramisu": "Tiramisu",
                            "baklava": "Baklava",
                            "cake": "Gâteau",
                            "brownie": "Brownie",
                            "pannaCotta": "Panna cotta",
                            "pie": "Tarte"
                        },
                        "items": {
                            "waffleWithBerries": "Gaufre aux fruits rouges",
                            "vanillaBeanCremeBrulee": "Crème brûlée à la vanille",
                            "macaronMixofFive": "Assortiment de cinq macarons",
                            "classicTiramisu": "Tiramisu classique",
                            "pistachioBaklava": "Baklava à la pistache",
                            "lemonMeringuePie": "Tarte au citron meringuée",
                            "redVelvetCake": "Gâteau Red Velvet",
                            "saltedCaramelBrownie": "Brownie au caramel salé",
                            "vanillaPannaCotta": "Panna cotta à la vanille"
                        }
                    },
                    "ariaLabels": {
                        "decreaseQuantity": "Diminuer la quantité",
                        "increaseQuantity": "Augmenter la quantité"
                    }
                }
            },
            es: {
                translation: {
                    "addToCart": "Añadir al carrito",
                    "carbonNeutral": "Este es un envío <1>neutral en carbono</1>",
                    "starters": {
                        "title": "Entrantes",
                        "category": {
                            "appetizer": "Aperitivo",
                            "bread": "Pan",
                            "salad": "Ensalada"
                        },
                        "items": {
                            "bruschetta": "Bruschetta",
                            "stuffedMushrooms": "Champiñones rellenos",
                            "garlicBreadsticks": "Palitos de pan con ajo",
                            "capreseSalad": "Ensalada Caprese",
                            "miniQuiches": "Mini quiches"
                        }
                    },
                    "desserts": {
                        "title": "Postres",
                        "category": {
                            "waffle": "Gofre",
                            "cremeBrulee": "Crème brûlée",
                            "macaron": "Macaron",
                            "tiramisu": "Tiramisú",
                            "baklava": "Baklava",
                            "cake": "Pastel",
                            "brownie": "Brownie",
                            "pannaCotta": "Panna Cotta",
                            "pie": "Tarta"
                        },
                        "items": {
                            "waffleWithBerries": "Gofre con frutas del bosque",
                            "vanillaBeanCremeBrulee": "Crème brûlée de vainilla",
                            "macaronMixofFive": "Mezcla de cinco macarons",
                            "classicTiramisu": "Tiramisú clásico",
                            "pistachioBaklava": "Baklava de pistacho",
                            "lemonMeringuePie": "Tarta de limón con merengue",
                            "redVelvetCake": "Pastel de terciopelo rojo",
                            "saltedCaramelBrownie": "Brownie de caramelo salado",
                            "vanillaPannaCotta": "Panna cotta de vainilla"
                        }
                    },
                    "ariaLabels": {
                        "decreaseQuantity": "Disminuir cantidad",
                        "increaseQuantity": "Aumentar cantidad"
                    }
                }
            },
            de: {
                translation: {
                    "addToCart": "In den Warenkorb",
                    "carbonNeutral": "Dies ist eine <1>CO₂-neutrale</1> Lieferung",
                    "starters": {
                        "title": "Vorspeisen",
                        "category": {
                            "appetizer": "Vorspeise",
                            "bread": "Brot",
                            "salad": "Salat"
                        },
                        "items": {
                            "bruschetta": "Bruschetta",
                            "stuffedMushrooms": "Gefüllte Champignons",
                            "garlicBreadsticks": "Knoblauchbrotstangen",
                            "capreseSalad": "Caprese Salat",
                            "miniQuiches": "Mini-Quiches"
                        }
                    },
                    "desserts": {
                        "title": "Desserts",
                        "category": {
                            "waffle": "Waffel",
                            "cremeBrulee": "Crème Brûlée",
                            "macaron": "Macaron",
                            "tiramisu": "Tiramisu",
                            "baklava": "Baklava",
                            "cake": "Kuchen",
                            "brownie": "Brownie",
                            "pannaCotta": "Panna Cotta",
                            "pie": "Torte"
                        },
                        "items": {
                            "waffleWithBerries": "Waffel mit Beeren",
                            "vanillaBeanCremeBrulee": "Vanille Crème Brûlée",
                            "macaronMixofFive": "Macaron-Mix aus fünf",
                            "classicTiramisu": "Klassisches Tiramisu",
                            "pistachioBaklava": "Baklava mit Pistazien",
                            "lemonMeringuePie": "Zitronen-Baiser-Torte",
                            "redVelvetCake": "Red Velvet Kuchen",
                            "saltedCaramelBrownie": "Brownie mit gesalzenem Karamell",
                            "vanillaPannaCotta": "Vanille Panna Cotta"
                        }
                    },
                    "ariaLabels": {
                        "decreaseQuantity": "Menge verringern",
                        "increaseQuantity": "Menge erhöhen"
                    }
                }
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export { i18n, useTranslation, Trans };