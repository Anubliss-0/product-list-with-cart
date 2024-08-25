import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "addToCart": "Add to Cart",
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
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export { i18n, useTranslation };