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
                    "language": "Language",
                    "confirmOrder": "Confirm Order",
                    "yourCart": "Your Cart",
                    "emptyCart": "Your added items will appear here",
                    "orderTotal": "Order Total",
                    "cancel": "Cancel",
                    "orderConfirmed": "Order Confirmed",
                    "enjoyYourFood": "We hope you enjoy your food!",
                    "newOrder": "Start New Order",
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
                    "mains": {
                        "title": "Mains",
                        "category": {
                            "meat": "Meat",
                            "pasta": "Pasta",
                            "vegetarian": "Vegetarian",
                            "seafood": "Seafood"
                        },
                        "items": {
                            "grilledSteak": "Grilled Steak",
                            "chickenAlfredo": "Chicken Alfredo",
                            "vegetableStirFry": "Vegetable Stir Fry",
                            "salmonFillet": "Salmon Fillet",
                            "lambChops": "Lamb Chops"
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
                        "removeFromCart": "Remove From cart",
                        "thumbnail": "Thumbnail"
                    }
                }
            },
            nl: {
                "translation": {
                    "addToCart": "Toevoegen",
                    "carbonNeutral": "Dit is een <1>koolstofneutrale</1> levering",
                    "language": "Taal",
                    "confirmOrder": "Bevestig bestelling",
                    "yourCart": "Je winkelwagen",
                    "emptyCart": "Je toegevoegde items verschijnen hier",
                    "orderTotal": "Totaalbedrag van bestelling",
                    "cancel": "Annuleren",
                    "orderConfirmed": "Bestelling Bevestigd",
                    "enjoyYourFood": "We hopen dat je van je eten geniet!",
                    "newOrder": "Begin Nieuwe Bestelling",
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
                    "mains": {
                        "title": "Hoofdgerechten",
                        "category": {
                            "meat": "Vlees",
                            "pasta": "Pasta",
                            "vegetarian": "Vegetarisch",
                            "seafood": "Zeevruchten"
                        },
                        "items": {
                            "grilledSteak": "Gegrilde Steak",
                            "chickenAlfredo": "Kip Alfredo",
                            "vegetableStirFry": "Groente Roerbak",
                            "salmonFillet": "Zalmfilet",
                            "lambChops": "Lamskoteletten"
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
                        "increaseQuantity": "Hoeveelheid verhogen",
                        "removeFromCart": "Verwijderen uit winkelwagen",
                        "thumbnail": "Miniatuur"
                    }
                }
            },
            fr: {
                translation: {
                    "addToCart": "Ajouter au panier",
                    "carbonNeutral": "Ceci est une livraison <1>neutre en carbone</1>",
                    "language": "Langue",
                    "confirmOrder": "Confirmer la commande",
                    "yourCart": "Votre panie",
                    "emptyCart": "Vos articles ajoutés apparaîtront ici",
                    "orderTotal": "Total de la commande",
                    "cancel": "Annuler",
                    "orderConfirmed": "Commande Confirmée",
                    "enjoyYourFood": "Nous espérons que vous apprécierez votre repas!",
                    "newOrder": "Commencer une Nouvelle Commande",
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
                    "mains": {
                        "title": "Plats Principaux",
                        "category": {
                            "meat": "Viande",
                            "pasta": "Pâtes",
                            "vegetarian": "Végétarien",
                            "seafood": "Fruits de Mer"
                        },
                        "items": {
                            "grilledSteak": "Steak Grillé",
                            "chickenAlfredo": "Poulet Alfredo",
                            "vegetableStirFry": "Sauté de Légumes",
                            "salmonFillet": "Filet de Saumon",
                            "lambChops": "Côtelettes d'Agneau"
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
                        "increaseQuantity": "Augmenter la quantité",
                        "removeFromCart": "Retirer du panier",
                        "thumbnail": "Vignette"
                    }
                }
            },
            es: {
                translation: {
                    "addToCart": "Añadir al carrito",
                    "carbonNeutral": "Este es un envío <1>neutral en carbono</1>",
                    "language": "Idioma",
                    "confirmOrder": "Confirmar pedido",
                    "yourCart": "Tu carrito",
                    "emptyCart": "Tus artículos añadidos aparecerán aquí",
                    "orderTotal": "Total del pedido",
                    "cancel": "Cancelar",
                    "orderConfirmed": "Pedido Confirmado",
                    "enjoyYourFood": "¡Esperamos que disfrutes tu comida!",
                    "newOrder": "Iniciar Nuevo Pedido",
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
                    "mains": {
                        "title": "Platos Principales",
                        "category": {
                            "meat": "Carne",
                            "pasta": "Pasta",
                            "vegetarian": "Vegetariano",
                            "seafood": "Mariscos"
                        },
                        "items": {
                            "grilledSteak": "Filete a la Parrilla",
                            "chickenAlfredo": "Pollo Alfredo",
                            "vegetableStirFry": "Salteado de Verduras",
                            "salmonFillet": "Filete de Salmón",
                            "lambChops": "Chuletas de Cordero"
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
                        "increaseQuantity": "Aumentar cantidad",
                        "removeFromCart": "Quitar del carrito",
                        "thumbnail": "Miniatura"
                    }
                }
            },
            de: {
                translation: {
                    "addToCart": "In den Warenkorb",
                    "carbonNeutral": "Dies ist eine <1>CO₂-neutrale</1> Lieferung",
                    "language": "Sprache",
                    "confirmOrder": "Bestellung bestätigen",
                    "yourCart": "Dein Warenkorb",
                    "emptyCart": "Deine hinzugefügten Artikel erscheinen hier",
                    "orderTotal": "Bestellsumme",
                    "cancel": "Abbrechen",
                    "orderConfirmed": "Bestellung Bestätigt",
                    "enjoyYourFood": "Wir hoffen, dass Sie Ihr Essen genießen!",
                    "newOrder": "Neue Bestellung Starten",
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
                    "mains": {
                        "title": "Hauptgerichte",
                        "category": {
                            "meat": "Fleisch",
                            "pasta": "Nudeln",
                            "vegetarian": "Vegetarisch",
                            "seafood": "Meeresfrüchte"
                        },
                        "items": {
                            "grilledSteak": "Gegrilltes Steak",
                            "chickenAlfredo": "Hähnchen Alfredo",
                            "vegetableStirFry": "Gemüsepfanne",
                            "salmonFillet": "Lachsfilet",
                            "lambChops": "Lammkoteletts"
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
                        "increaseQuantity": "Menge erhöhen",
                        "removeFromCart": "Aus dem Warenkorb entfernen",
                        "thumbnail": "Vorschaubild"
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