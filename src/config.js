export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const FETCH_MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9689968&lng=77.72088529999999&restaurantId=";
// "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=";

export const FETCH_RESTAURANT_DETAILS_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9689968&lng=77.72088529999999&page_type=DESKTOP_WEB_LISTING";
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";


export const restaurantMenuList = [
  {
    "statusCode": 0,
    "data": {
        "statusMessage": "done successfully",
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "221738",
                            "name": "Meghana Foods",
                            "city": "Bangalore",
                            "slugs": {
                                "restaurant": "meghana-foods-mahadevpura-mahadevpura",
                                "city": "bangalore"
                            },
                            "uniqueId": "106f4556-6804-4554-8c68-ee875d6acf65",
                            "cloudinaryImageId": "aqsnrylokzpn45qhg1pb",
                            "locality": "Mahadevpura",
                            "areaName": "Brookefield",
                            "costForTwo": "50000",
                            "costForTwoMessage": "₹500 for two",
                            "cuisines": [
                                "Biryani",
                                "Andhra"
                            ],
                            "avgRating": 4.3,
                            "feeDetails": {
                                "restaurantId": "221738",
                                "fees": [
                                    {
                                        "name": "distance",
                                        "fee": 3000
                                    },
                                    {
                                        "name": "time"
                                    },
                                    {
                                        "name": "special"
                                    }
                                ],
                                "totalFee": 3000,
                                "title": "Delivery Charge",
                                "amount": "3000"
                            },
                            "parentId": "635",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "10K+ ratings",
                            "sla": {
                                "restaurantId": "221738",
                                "deliveryTime": 29,
                                "minDeliveryTime": 29,
                                "maxDeliveryTime": 29,
                                "lastMileTravel": 1.9,
                                "serviceability": "SERVICEABLE",
                                "stressFactor": 0.80420315,
                                "rainMode": "RAIN_MODE_NONE",
                                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                                "zoneId": 5,
                                "slaString": "29 MINS",
                                "lastMileTravelString": "1.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2023-07-04 01:30:00",
                                "visibility": true,
                                "opened": true,
                                "restaurantClosedMeta": {}
                            },
                            "aggregatedDiscountInfo": {
                                "shortDescriptionList": [
                                    {
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "20% off up to ₹120 | Use FEDERALCC Above ₹249",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "25% off up to ₹100 | Use ONECARD100 Above ₹250",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "visible": true
                            },
                            "badges": {},
                            "slugString": "meghana-foods-mahadevpura-mahadevpura",
                            "multiOutlet": true,
                            "isOpen": true,
                            "labels": [
                                {
                                    "title": "Timings",
                                    "message": "null"
                                },
                                {
                                    "title": "Address",
                                    "message": "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India"
                                },
                                {
                                    "title": "Cuisines",
                                    "message": "Biryani,Andhra"
                                }
                            ],
                            "logo": "v1685078885/Brand logo/Meghana_Foods",
                            "totalRatings": 10000,
                            "aggregatedDiscountInfoV2": {
                                "shortDescriptionList": [
                                    {
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "20% off up to ₹120 | Use FEDERALCC Above ₹249",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "25% off up to ₹100 | Use ONECARD100 Above ₹250",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "couponDetailsCta": "View coupon details"
                            },
                            "type": "F",
                            "headerBanner": {
                                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/221738"
                            },
                            "expectationNotifiers": [
                                {
                                    "icon": {},
                                    "popup": {
                                        "cta": {}
                                    },
                                    "type": "DISTANCE_FEE_NON_FOOD_LM",
                                    "halfCardPopup": {
                                        "halfCardPopupHeader": {}
                                    }
                                }
                            ],
                            "generalPurposeInfoListV2": [
                                {
                                    "cta": {
                                        "info": {
                                            "recordings": {}
                                        },
                                        "linkCta": {}
                                    }
                                }
                            ],
                            "ratingSlab": "RATING_SLAB_5",
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {}
                            },
                            "hasBestsellerItems": true,
                            "cartOrderabilityNudgeBanner": {
                                "parameters": {},
                                "presentation": {}
                            },
                            "areaPostalCode": "560066",
                            "latLong": "12.9769677,77.7109643"
                        },
                        "analytics": {}
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
                        "sectionId": "POP_UP_CROUTON_MENU"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "rows": 1,
                            "columns": 3,
                            "horizontalScrollEnabled": true,
                            "itemSpacing": 12,
                            "lineSpacing": 10,
                            "widgetPadding": {},
                            "containerStyle": {
                                "containerPadding": {
                                    "left": 10,
                                    "right": 10,
                                    "bottom": 16
                                }
                            },
                            "scrollBar": {}
                        },
                        "id": "offerCollectionWidget_UX4",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                                "offers": [
                                    {
                                        "info": {
                                            "header": "20% OFF UPTO ₹120",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                                            "offerIds": [
                                                "44c7e39c-b679-4ea7-8591-f67041e02f39"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE FEDERALCC",
                                            "description": "ABOVE ₹249",
                                            "offerType": "offers",
                                            "restId": "221738",
                                            "offerLogo": "rng/md/ads/production/1acdb97aadcb61b323307845bda86535",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "25% OFF UPTO ₹100",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "rng/md/ads/production/6de08393313dbf29b8b4c610c30702ad",
                                            "offerIds": [
                                                "d21a2541-4358-47f8-be89-e8607d065410"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE ONECARD100",
                                            "description": "ABOVE ₹250",
                                            "offerType": "offers",
                                            "restId": "221738",
                                            "offerLogo": "rng/md/ads/production/6de08393313dbf29b8b4c610c30702ad",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    },
                                    {
                                        "info": {
                                            "header": "10% OFF UPTO ₹100",
                                            "offerTagColor": "#E46D47",
                                            "logoBottom": "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                                            "offerIds": [
                                                "01dcc29c-3621-431b-9a25-df6e421a7ce5"
                                            ],
                                            "expiryTime": "1970-01-01T00:00:00Z",
                                            "couponCode": "USE INDUSIND100",
                                            "description": "ABOVE ₹699",
                                            "offerType": "offers",
                                            "restId": "221738",
                                            "offerLogo": "rng/md/ads/production/5c4848f8c208408b048c18f6be604f14",
                                            "descriptionTextColor": "#7302060C"
                                        },
                                        "cta": {
                                            "type": "OFFER_HALF_CARD"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            },
            {
                "groupedCard": {
                    "cardGroupMap": {
                        "REGULAR": {
                            "cards": [
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                                            "badges": {},
                                            "vegOnlyDetails": {
                                                "imageId": "AutoVegOnly_qkjowj",
                                                "title": "Showing only vegetarian options.",
                                                "description": "Tap on the VEG ONLY button to turn off the setting"
                                            },
                                            "topRatedFilter": {}
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Recommended",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698864",
                                                            "name": "Golden Baby Corn",
                                                            "category": "Veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 325.18 kcal, Protein: 9.84g, Carbohydrates: 40.6g, Fat: 13.76g]",
                                                            "imageId": "ocgjpnijydsughgjnkk0",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 30000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835594",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "82 ratings",
                                                                    "ratingCountV2": "82"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247304",
                                                            "name": "Paneer 65",
                                                            "category": "Veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]",
                                                            "imageId": "druwjzmfmz7qvepq3bkr",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835521",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "61 ratings",
                                                                    "ratingCountV2": "61"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698863",
                                                            "name": "Aloo Dum Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1415.98 kcal, Protein: 25.46g, Carbohydrates: 226.97g, Fat: 42.15g]",
                                                            "imageId": "mtuzvgdmipuikj6pxllr",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 28500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835245",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835248",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "398 ratings",
                                                                    "ratingCountV2": "398"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "64597168",
                                                            "name": "Spl Veg Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1327.35 kcal, Protein: 26.99g, Carbohydrates: 213.24g, Fat: 38.46g]",
                                                            "imageId": "fsitbray4gq1kxcndqqx",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 30000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835026",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835028",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "622 ratings",
                                                                    "ratingCountV2": "622"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698881",
                                                            "name": "Paneer Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1800.51 kcal, Protein: 61.42g, Carbohydrates: 198.62g, Fat: 82g]",
                                                            "imageId": "gehax5kizfwncsgkris2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835255",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835258",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "1374 ratings",
                                                                    "ratingCountV2": "1374"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698869",
                                                            "name": "Chilly Chicken (Boneless)",
                                                            "category": "Non-veg Starter",
                                                            "description": "370 gram | Serves 1 |  [Energy: 604.42 kcal, Protein: 50.63g, Carbohydrates: 29.67g, Fat: 30.94g]",
                                                            "imageId": "ry3c3f518z10t4olu4l7",
                                                            "inStock": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835286",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "370 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "128 ratings",
                                                                    "ratingCountV2": "128"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247336",
                                                            "name": "Lemon Chicken",
                                                            "category": "Non-veg Starter",
                                                            "description": "370 gram | Serves 1 |  [Energy: 582.12 kcal, Protein: 44.58g, Carbohydrates: 31.16g, Fat: 30.79g]",
                                                            "imageId": "vnotaq2k5i2nqdigafon",
                                                            "inStock": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835379",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "370 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "182 ratings",
                                                                    "ratingCountV2": "182"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698875",
                                                            "name": "Chicken Lollypop",
                                                            "category": "Non-veg Starter",
                                                            "description": "250 gram | Serves 1 |  [Energy: 389.14 kcal, Protein: 36.13g, Carbohydrates: 7.31g, Fat: 23.92g]",
                                                            "imageId": "ldqyxnhlfylhymnsopzc",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835402",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "250 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "176 ratings",
                                                                    "ratingCountV2": "176"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247284",
                                                            "name": "Meghana Chicken 555",
                                                            "category": "Non-veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 585.13 kcal, Protein: 32.48g, Carbohydrates: 26.88g, Fat: 39.36g]",
                                                            "imageId": "irnwr59vlrmciau11or0",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835367",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "272 ratings",
                                                                    "ratingCountV2": "272"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698870",
                                                            "name": "Chicken Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1615.27 kcal, Protein: 61.82g, Carbohydrates: 190.89g, Fat: 64.63g]",
                                                            "imageId": "zbrpxvywfsrrb7os11jf",
                                                            "inStock": 1,
                                                            "price": 31500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836348",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836351",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "962 ratings",
                                                                    "ratingCountV2": "962"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698873",
                                                            "name": "Chicken Boneless Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1446.5 kcal, Protein: 64.22g, Carbohydrates: 189.62g, Fat: 44.2g]",
                                                            "imageId": "iivuhjc2mswi9lublktf",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836356",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836360",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "4120 ratings",
                                                                    "ratingCountV2": "4120"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698877",
                                                            "name": "Lollipop Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1673.09 kcal, Protein: 45.42g, Carbohydrates: 217.95g, Fat: 65.98g]",
                                                            "imageId": "tscwxqko4pabme8gj2ty",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94834994",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94834998",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "108 ratings",
                                                                    "ratingCountV2": "108"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698878",
                                                            "name": "Meghana Special Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1456.21 kcal, Protein: 64.65g, Carbohydrates: 190.89g, Fat: 44.5g]",
                                                            "imageId": "zuthvcwjjvdjmo6n1pbl",
                                                            "inStock": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836366",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836369",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "2909 ratings",
                                                                    "ratingCountV2": "2909"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698890",
                                                            "name": "Prawns Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1431.95 kcal, Protein: 37.34g, Carbohydrates: 213.4g, Fat: 43.56g]",
                                                            "imageId": "pxqhnjvdhm3nyqkhxute",
                                                            "inStock": 1,
                                                            "price": 41500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835070",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835074",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "230 ratings",
                                                                    "ratingCountV2": "230"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698874",
                                                            "name": "Mutton Keema Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1551.26 kcal, Protein: 42.47g, Carbohydrates: 200.46g, Fat: 61.1g]",
                                                            "imageId": "bsswvqauvfo1qg4lqblz",
                                                            "inStock": 1,
                                                            "price": 42500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835048",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835050",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "63 ratings",
                                                                    "ratingCountV2": "63"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247322",
                                                            "name": "Butter Chicken Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "600 gram | Serves 1 |  [Energy: 910.32 kcal, Protein: 50.28g, Carbohydrates: 32.44g, Fat: 63.47g]",
                                                            "imageId": "mqfjzwea48recubya6or",
                                                            "inStock": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836131",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "600 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "93 ratings",
                                                                    "ratingCountV2": "93"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247312",
                                                            "name": "Paneer Butter Masala",
                                                            "category": "Veg Curries",
                                                            "description": "550 gram | Serves 1 |  [Energy: 1156.81 kcal, Protein: 43.54g, Carbohydrates: 37.93g, Fat: 92.6g]",
                                                            "imageId": "ksjxi61s8xqlj8cqp4zs",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835794",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "550 gram"
                                                            },
                                                            "ribbon": {},
                                                            "showImage": true,
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.7",
                                                                    "ratingCount": "60 ratings",
                                                                    "ratingCountV2": "60"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ],
                                            "type": "CATEGORY_TYPE_RECOMMENDED"
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Veg Starter",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698861",
                                                            "name": "Chilly Gobi",
                                                            "category": "Veg Starter",
                                                            "description": "350 gram | Serves 1 |  [Energy: 192.99 kcal, Protein: 8.11g, Carbohydrates: 15.54g, Fat: 10.39g]",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 27000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835609",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "350 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.7",
                                                                    "ratingCount": "7 ratings",
                                                                    "ratingCountV2": "7"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66618452",
                                                            "name": "Gobi 65",
                                                            "category": "Veg Starter",
                                                            "description": "320 gram | Serves 1 |  [Energy: 187.49 kcal, Protein: 7.79g, Carbohydrates: 16.9g, Fat: 9.06g]",
                                                            "imageId": "q8kk1xz0w0l8oxmcyxdc",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 27000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835615",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "320 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "56 ratings",
                                                                    "ratingCountV2": "56"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247306",
                                                            "name": "Gobi Manchurian",
                                                            "category": "Veg Starter",
                                                            "description": "320 gram | Serves 1 |  [Energy: 194.6 kcal, Protein: 7.96g, Carbohydrates: 15.56g, Fat: 10.89g]",
                                                            "imageId": "rzh4qydjkaurrpecaxc2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 27000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835514",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "320 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "85 ratings",
                                                                    "ratingCountV2": "85"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66630649",
                                                            "name": "Baby Corn Manchurian",
                                                            "category": "Veg Starter",
                                                            "description": "250 gram | Serves 1 |  [Energy: 258.72 kcal, Protein: 7.42g, Carbohydrates: 32.28g, Fat: 11.45g]",
                                                            "imageId": "qkg8efaxbjjgx5cpkuax",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 29500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836221",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "250 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.7",
                                                                    "ratingCount": "23 ratings",
                                                                    "ratingCountV2": "23"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698862",
                                                            "name": "Chilly Babycorn",
                                                            "category": "Veg Starter",
                                                            "description": "320 gram | Serves 1 |  [Energy: 308.05 kcal, Protein: 8.85g, Carbohydrates: 39.35g, Fat: 12.97g]",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 29500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835488",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "320 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "10 ratings",
                                                                    "ratingCountV2": "10"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698864",
                                                            "name": "Golden Baby Corn",
                                                            "category": "Veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 325.18 kcal, Protein: 9.84g, Carbohydrates: 40.6g, Fat: 13.76g]",
                                                            "imageId": "ocgjpnijydsughgjnkk0",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 30000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835594",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "82 ratings",
                                                                    "ratingCountV2": "82"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66630650",
                                                            "name": "Mushroom Manchurian",
                                                            "category": "Veg Starter",
                                                            "imageId": "soz7jm21okoxcltrobge",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 30500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836241",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "17 ratings",
                                                                    "ratingCountV2": "17"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "80518117",
                                                            "name": "Veg Manchurian",
                                                            "category": "Veg Starter",
                                                            "description": "230 gram | Serves 1 |  [Energy: 240.61 kcal, Protein: 12.72g, Carbohydrates: 18.83g, Fat: 12.39g]",
                                                            "imageId": "etnsehnoylzjgipeapde",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 30500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835499",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "230 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.6",
                                                                    "ratingCount": "37 ratings",
                                                                    "ratingCountV2": "37"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698867",
                                                            "name": "Chilly Mushroom",
                                                            "category": "Veg Starter",
                                                            "description": "320 gram | Serves 1 |  [Energy: 203.43 kcal, Protein: 11.25g, Carbohydrates: 15.55g, Fat: 10.64g]",
                                                            "imageId": "bof3doctupomf223xpzz",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 31500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835273",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "320 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "51 ratings",
                                                                    "ratingCountV2": "51"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247307",
                                                            "name": "Mushroom 65",
                                                            "category": "Veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 196.76 kcal, Protein: 10.27g, Carbohydrates: 16.97g, Fat: 9.35g]",
                                                            "imageId": "buclixrr4jwtcemyrz68",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 31500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835683",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "38 ratings",
                                                                    "ratingCountV2": "38"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698866",
                                                            "name": "Chilly Paneer",
                                                            "category": "Veg Starter",
                                                            "description": "320 gram | Serves 1 |  [Energy: 871.69 kcal, Protein: 51.9g, Carbohydrates: 21.54g, Fat: 64.36g]",
                                                            "imageId": "byonwwb8mzxyqluxlqpq",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835586",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "320 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "98 ratings",
                                                                    "ratingCountV2": "98"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247304",
                                                            "name": "Paneer 65",
                                                            "category": "Veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 723.82 kcal, Protein: 32.95g, Carbohydrates: 30.89g, Fat: 51.82g]",
                                                            "imageId": "druwjzmfmz7qvepq3bkr",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835521",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "61 ratings",
                                                                    "ratingCountV2": "61"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66630651",
                                                            "name": "Paneer Manchurian",
                                                            "category": "Veg Starter",
                                                            "description": "250 gram | Serves 1 |  [Energy: 706.01 kcal, Protein: 41.58g, Carbohydrates: 18.14g, Fat: 52.24g]",
                                                            "imageId": "xafpkamsf7oz2ae8lgil",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836206",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "250 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "29 ratings",
                                                                    "ratingCountV2": "29"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Veg Biriyani",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698859",
                                                            "name": "Veg Biryani Rice",
                                                            "category": "Veg Biriyani",
                                                            "imageId": "yiiln3ntc7cwm51l9lhi",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 23000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835266",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835269",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "182 ratings",
                                                                    "ratingCountV2": "182"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698863",
                                                            "name": "Aloo Dum Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1415.98 kcal, Protein: 25.46g, Carbohydrates: 226.97g, Fat: 42.15g]",
                                                            "imageId": "mtuzvgdmipuikj6pxllr",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 28500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835245",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835248",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "398 ratings",
                                                                    "ratingCountV2": "398"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "64597168",
                                                            "name": "Spl Veg Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1327.35 kcal, Protein: 26.99g, Carbohydrates: 213.24g, Fat: 38.46g]",
                                                            "imageId": "fsitbray4gq1kxcndqqx",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 30000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835026",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835028",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "622 ratings",
                                                                    "ratingCountV2": "622"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "78196452",
                                                            "name": "Veg Manchurian Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1218.09 kcal, Protein: 42.53g, Carbohydrates: 176.93g, Fat: 35.32g]",
                                                            "imageId": "x6hqabmwan7pfwhshqhj",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835915",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "102 ratings",
                                                                    "ratingCountV2": "102"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698880",
                                                            "name": "Mushroom Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1225.8 kcal, Protein: 29.42g, Carbohydrates: 186.92g, Fat: 37.51g]",
                                                            "imageId": "ujngpmxwklmqpruqhx9h",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835158",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835165",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "295 ratings",
                                                                    "ratingCountV2": "295"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698881",
                                                            "name": "Paneer Biryani",
                                                            "category": "Veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1800.51 kcal, Protein: 61.42g, Carbohydrates: 198.62g, Fat: 82g]",
                                                            "imageId": "gehax5kizfwncsgkris2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835255",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422317",
                                                                            "name": "Paneer Pcs",
                                                                            "price": 21000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422318",
                                                                            "name": "Extra Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422315",
                                                                            "name": "Extra Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422316",
                                                                            "name": "Extra Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422314",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835258",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "1374 ratings",
                                                                    "ratingCountV2": "1374"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Sea Food Starter",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698883",
                                                            "name": "Chilly Fish",
                                                            "category": "Sea Food Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 348.16 kcal, Protein: 43.21g, Carbohydrates: 12.57g, Fat: 14.27g]",
                                                            "inStock": 1,
                                                            "price": 34500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835839",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "1.9",
                                                                    "ratingCount": "7 ratings",
                                                                    "ratingCountV2": "7"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698886",
                                                            "name": "Apollo Fish",
                                                            "category": "Sea Food Starter",
                                                            "description": "270 gram | Serves 1 |  [Energy: 293.75 kcal, Protein: 24.8g, Carbohydrates: 15.07g, Fat: 15.38g]",
                                                            "imageId": "ywwqavlqhhhwrpzu3nle",
                                                            "inStock": 1,
                                                            "price": 35000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835876",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "270 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.6",
                                                                    "ratingCount": "61 ratings",
                                                                    "ratingCountV2": "61"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698891",
                                                            "name": "Chilli Prawns",
                                                            "category": "Sea Food Starter",
                                                            "description": "280 gram | Serves 1 |  [Energy: 289.89 kcal, Protein: 28.51g, Carbohydrates: 12.99g, Fat: 13.85g]",
                                                            "imageId": "gbowveie1vh3zrxegqqb",
                                                            "inStock": 1,
                                                            "price": 39500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836046",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "280 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "94 ratings",
                                                                    "ratingCountV2": "94"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247309",
                                                            "name": "Prawns Fry",
                                                            "category": "Sea Food Starter",
                                                            "inStock": 1,
                                                            "price": 39500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836081",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "22 ratings",
                                                                    "ratingCountV2": "22"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Non-veg Starter",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66618455",
                                                            "name": "Chicken Fry",
                                                            "category": "Non-veg Starter",
                                                            "description": "250 gram | Serves 1 |  [Energy: 585.85 kcal, Protein: 29.63g, Carbohydrates: 17.29g, Fat: 44.88g]",
                                                            "imageId": "fxzktf2iv07u8iqufivx",
                                                            "inStock": 1,
                                                            "price": 31000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835725",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "250 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "21 ratings",
                                                                    "ratingCountV2": "21"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698871",
                                                            "name": "Chicken Kabab",
                                                            "category": "Non-veg Starter",
                                                            "imageId": "lxj1uvdkng7zu0npvnsu",
                                                            "inStock": 1,
                                                            "price": 31000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835391",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "71 ratings",
                                                                    "ratingCountV2": "71"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247287",
                                                            "name": "Chicken 65",
                                                            "category": "Non-veg Starter",
                                                            "description": "350 gram | Serves 1 |  [Energy: 544.39 kcal, Protein: 45.15g, Carbohydrates: 25.11g, Fat: 27.91g]",
                                                            "imageId": "x0jegvlf4h7wrgaaqdqi",
                                                            "inStock": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835342",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "350 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "282 ratings",
                                                                    "ratingCountV2": "282"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698869",
                                                            "name": "Chilly Chicken (Boneless)",
                                                            "category": "Non-veg Starter",
                                                            "description": "370 gram | Serves 1 |  [Energy: 604.42 kcal, Protein: 50.63g, Carbohydrates: 29.67g, Fat: 30.94g]",
                                                            "imageId": "ry3c3f518z10t4olu4l7",
                                                            "inStock": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835286",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "370 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "128 ratings",
                                                                    "ratingCountV2": "128"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247336",
                                                            "name": "Lemon Chicken",
                                                            "category": "Non-veg Starter",
                                                            "description": "370 gram | Serves 1 |  [Energy: 582.12 kcal, Protein: 44.58g, Carbohydrates: 31.16g, Fat: 30.79g]",
                                                            "imageId": "vnotaq2k5i2nqdigafon",
                                                            "inStock": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835379",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "370 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "182 ratings",
                                                                    "ratingCountV2": "182"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247334",
                                                            "name": "Pepper Chicken",
                                                            "category": "Non-veg Starter",
                                                            "description": "350 gram | Serves 1 |  [Energy: 609.63 kcal, Protein: 47.42g, Carbohydrates: 25.62g, Fat: 33.7g]",
                                                            "imageId": "rlcjzwkysumyh28nxuaq",
                                                            "inStock": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835463",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "350 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "429 ratings",
                                                                    "ratingCountV2": "429"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698875",
                                                            "name": "Chicken Lollypop",
                                                            "category": "Non-veg Starter",
                                                            "description": "250 gram | Serves 1 |  [Energy: 389.14 kcal, Protein: 36.13g, Carbohydrates: 7.31g, Fat: 23.92g]",
                                                            "imageId": "ldqyxnhlfylhymnsopzc",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835402",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "250 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "176 ratings",
                                                                    "ratingCountV2": "176"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698879",
                                                            "name": "Chicken Pakoda",
                                                            "category": "Non-veg Starter",
                                                            "description": "250 gram | Serves 1 |  [Energy: 269.97 kcal, Protein: 38.25g, Carbohydrates: 7.54g, Fat: 8.7g]",
                                                            "imageId": "txnhcbhyu0kkltnqxyyu",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835412",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "250 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "98 ratings",
                                                                    "ratingCountV2": "98"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247284",
                                                            "name": "Meghana Chicken 555",
                                                            "category": "Non-veg Starter",
                                                            "description": "300 gram | Serves 1 |  [Energy: 585.13 kcal, Protein: 32.48g, Carbohydrates: 26.88g, Fat: 39.36g]",
                                                            "imageId": "irnwr59vlrmciau11or0",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835367",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "300 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "272 ratings",
                                                                    "ratingCountV2": "272"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698884",
                                                            "name": "Chicken Maharaja",
                                                            "category": "Non-veg Starter",
                                                            "description": "350 gram | Serves 1 |  [Energy: 601.09 kcal, Protein: 49.21g, Carbohydrates: 31.6g, Fat: 30.39g]",
                                                            "imageId": "qbvnd4eezzybx9dj38xv",
                                                            "inStock": 1,
                                                            "price": 34500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835800",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "350 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "51 ratings",
                                                                    "ratingCountV2": "51"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Non-veg Biriyani",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "95469133",
                                                            "name": "Non Veg Biryani Rice",
                                                            "category": "Non-veg Biriyani",
                                                            "imageId": "yiiln3ntc7cwm51l9lhi",
                                                            "inStock": 1,
                                                            "price": 24000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836331",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836333",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "113 ratings",
                                                                    "ratingCountV2": "113"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698868",
                                                            "name": "Egg Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1000 gram | Serves 1 |  [Energy: 1421.92 kcal, Protein: 38.82g, Carbohydrates: 196.91g, Fat: 50.86g]",
                                                            "imageId": "wcvun7u8l0jzkzcf8zap",
                                                            "inStock": 1,
                                                            "price": 29000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835189",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835194",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1000 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "255 ratings",
                                                                    "ratingCountV2": "255"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698870",
                                                            "name": "Chicken Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1615.27 kcal, Protein: 61.82g, Carbohydrates: 190.89g, Fat: 64.63g]",
                                                            "imageId": "zbrpxvywfsrrb7os11jf",
                                                            "inStock": 1,
                                                            "price": 31500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836348",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836351",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "962 ratings",
                                                                    "ratingCountV2": "962"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698873",
                                                            "name": "Chicken Boneless Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1446.5 kcal, Protein: 64.22g, Carbohydrates: 189.62g, Fat: 44.2g]",
                                                            "imageId": "iivuhjc2mswi9lublktf",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836356",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836360",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "4120 ratings",
                                                                    "ratingCountV2": "4120"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698877",
                                                            "name": "Lollipop Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1673.09 kcal, Protein: 45.42g, Carbohydrates: 217.95g, Fat: 65.98g]",
                                                            "imageId": "tscwxqko4pabme8gj2ty",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94834994",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94834998",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "108 ratings",
                                                                    "ratingCountV2": "108"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698878",
                                                            "name": "Meghana Special Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1456.21 kcal, Protein: 64.65g, Carbohydrates: 190.89g, Fat: 44.5g]",
                                                            "imageId": "zuthvcwjjvdjmo6n1pbl",
                                                            "inStock": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836366",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94836369",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {
                                                                "text": "Bestseller",
                                                                "textColor": "#ffffff",
                                                                "topBackgroundColor": "#d53d4c",
                                                                "bottomBackgroundColor": "#b02331"
                                                            },
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "isBestseller": true,
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "2909 ratings",
                                                                    "ratingCountV2": "2909"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "80586548",
                                                            "name": "Chicken Fry Pc Biriyani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1576.65 kcal, Protein: 55.24g, Carbohydrates: 197.77g, Fat: 59.33g]",
                                                            "imageId": "o6eblssnt4tjn9zzufs0",
                                                            "inStock": 1,
                                                            "price": 34000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835468",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835471",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "171 ratings",
                                                                    "ratingCountV2": "171"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698889",
                                                            "name": "Fish Biriyani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1429.3 kcal, Protein: 55.02g, Carbohydrates: 189.62g, Fat: 47.6g]",
                                                            "imageId": "cfrtq4lrtjrollvuwyb3",
                                                            "inStock": 1,
                                                            "price": 40500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835057",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835059",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "42 ratings",
                                                                    "ratingCountV2": "42"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698890",
                                                            "name": "Prawns Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1431.95 kcal, Protein: 37.34g, Carbohydrates: 213.4g, Fat: 43.56g]",
                                                            "imageId": "pxqhnjvdhm3nyqkhxute",
                                                            "inStock": 1,
                                                            "price": 41500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835070",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835074",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "230 ratings",
                                                                    "ratingCountV2": "230"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698874",
                                                            "name": "Mutton Keema Biryani",
                                                            "category": "Non-veg Biriyani",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1551.26 kcal, Protein: 42.47g, Carbohydrates: 200.46g, Fat: 61.1g]",
                                                            "imageId": "bsswvqauvfo1qg4lqblz",
                                                            "inStock": 1,
                                                            "price": 42500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835048",
                                                                    "groupName": "Extra",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422306",
                                                                            "name": "Extra Aloo 4 Pcs",
                                                                            "price": 4000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422307",
                                                                            "name": "Gravy",
                                                                            "price": 2000,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422310",
                                                                            "name": "Raita",
                                                                            "price": 1200,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422305",
                                                                            "name": "Chicken Boneless Pcs",
                                                                            "price": 22000,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422308",
                                                                            "name": "Masala Pack",
                                                                            "price": 10500,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422309",
                                                                            "name": "Meghana Chicken Spl Pcs",
                                                                            "price": 22500,
                                                                            "inStock": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 5,
                                                                    "maxFreeAddons": -1
                                                                },
                                                                {
                                                                    "groupId": "94835050",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "63 ratings",
                                                                    "ratingCountV2": "63"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Non-veg Curries",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698858",
                                                            "name": "Egg Masala Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "450 gram | Serves 1 |  [Energy: 721.81 kcal, Protein: 24.15g, Carbohydrates: 34.03g, Fat: 54.89g]",
                                                            "imageId": "xqpvlqbixniguvhqvdzb",
                                                            "inStock": 1,
                                                            "price": 22500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836164",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "450 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "69 ratings",
                                                                    "ratingCountV2": "69"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698876",
                                                            "name": "Chicken Boneless Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "500 gram | Serves 1 |  [Energy: 651.37 kcal, Protein: 44.85g, Carbohydrates: 26.52g, Fat: 39.17g]",
                                                            "imageId": "ybxkminvzggpmjfbecu8",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836093",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "500 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "252 ratings",
                                                                    "ratingCountV2": "252"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247320",
                                                            "name": "Chicken Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "460 gram | Serves 1 |  [Energy: 661.19 kcal, Protein: 35g, Carbohydrates: 33.26g, Fat: 42.53g]",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836136",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "460 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "25 ratings",
                                                                    "ratingCountV2": "25"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "103866663",
                                                            "name": "Chicken Hyd Curry With Bone",
                                                            "category": "Non-veg Curries",
                                                            "inStock": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835133",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "11 ratings",
                                                                    "ratingCountV2": "11"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247322",
                                                            "name": "Butter Chicken Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "600 gram | Serves 1 |  [Energy: 910.32 kcal, Protein: 50.28g, Carbohydrates: 32.44g, Fat: 63.47g]",
                                                            "imageId": "mqfjzwea48recubya6or",
                                                            "inStock": 1,
                                                            "price": 33000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836131",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "600 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.9",
                                                                    "ratingCount": "93 ratings",
                                                                    "ratingCountV2": "93"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247339",
                                                            "name": "Fish Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "440 gram | Serves 1 |  [Energy: 489.84 kcal, Protein: 26.83g, Carbohydrates: 26.33g, Fat: 30.55g]",
                                                            "inStock": 1,
                                                            "price": 38500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836149",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "440 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698888",
                                                            "name": "Prawns Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "440 gram | Serves 1 |  [Energy: 468.91 kcal, Protein: 19.92g, Carbohydrates: 26.95g, Fat: 30.84g]",
                                                            "imageId": "x28cgy0rmpxluhsv0lzr",
                                                            "inStock": 1,
                                                            "price": 41000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836157",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "440 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "35 ratings",
                                                                    "ratingCountV2": "35"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247337",
                                                            "name": "Mutton Curry",
                                                            "category": "Non-veg Curries",
                                                            "description": "460 gram | Serves 1 |  [Energy: 687.42 kcal, Protein: 97.57g, Carbohydrates: 8.12g, Fat: 26.64g]",
                                                            "imageId": "f7ckmzlbdykejeqlmjbh",
                                                            "inStock": 1,
                                                            "price": 41500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836143",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "460 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.8",
                                                                    "ratingCount": "86 ratings",
                                                                    "ratingCountV2": "86"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Indian Breads",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247296",
                                                            "name": "Phulka",
                                                            "category": "Indian Breads",
                                                            "imageId": "myutirf3a1ntipvekpif",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2200,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94094138",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "91601289",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "91601288",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "91601290",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "171 ratings",
                                                                    "ratingCountV2": "171"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Egg",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66618414",
                                                            "name": "Boiled Egg (2nos)",
                                                            "category": "Egg",
                                                            "description": "120 gram | Serves 1 |  [Energy: 161.75 kcal, Protein: 15.94g, Carbohydrates: 0g, Fat: 10.98g]",
                                                            "imageId": "cu8lzfhxtzgzcd0c0wga",
                                                            "inStock": 1,
                                                            "price": 4000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835351",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "120 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "57 ratings",
                                                                    "ratingCountV2": "57"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Veg Curries",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66618477",
                                                            "name": "Tomato Curry",
                                                            "category": "Veg Curries",
                                                            "description": "450 gram | Serves 1 |  [Energy: 509.47 kcal, Protein: 6.93g, Carbohydrates: 25.05g, Fat: 42.21g]",
                                                            "imageId": "thpbu9owje2ut4r7gk0d",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 21000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835817",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "450 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "29 ratings",
                                                                    "ratingCountV2": "29"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698860",
                                                            "name": "Aloo Matar Curry",
                                                            "category": "Veg Curries",
                                                            "description": "550 gram | Serves 1 |  [Energy: 658.32 kcal, Protein: 18.86g, Carbohydrates: 57.86g, Fat: 38.08g]",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 26000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835736",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "550 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {}
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247333",
                                                            "name": "Green Peas Curry",
                                                            "category": "Veg Curries",
                                                            "description": "530 gram | Serves 1 |  [Energy: 675.07 kcal, Protein: 22.48g, Carbohydrates: 52.47g, Fat: 40.67g]",
                                                            "imageId": "izr6y2zxm2o7j8bgj9s2",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 26000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835717",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "530 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "9 ratings",
                                                                    "ratingCountV2": "9"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "66618484",
                                                            "name": "Veg Kadai",
                                                            "category": "Veg Curries",
                                                            "description": "550 gram | Serves 1 |  [Energy: 729.09 kcal, Protein: 20.61g, Carbohydrates: 37.87g, Fat: 54.45g]",
                                                            "imageId": "iffbbbz435xq2c0uzxxt",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 26000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835697",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "550 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "30 ratings",
                                                                    "ratingCountV2": "30"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "103866664",
                                                            "name": "Veg Hyderabadi Curry",
                                                            "category": "Veg Curries",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 27500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835143",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "5 ratings",
                                                                    "ratingCountV2": "5"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "47698865",
                                                            "name": "Palak Paneer Curry",
                                                            "category": "Veg Curries",
                                                            "description": "550 gram | Serves 1 |  [Energy: 833.69 kcal, Protein: 30.72g, Carbohydrates: 33.75g, Fat: 64.01g]",
                                                            "imageId": "slaicd3fv71xcsxblb2w",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 31000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835706",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "550 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.1",
                                                                    "ratingCount": "15 ratings",
                                                                    "ratingCountV2": "15"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247310",
                                                            "name": "Mushroom Masala",
                                                            "category": "Veg Curries",
                                                            "description": "450 gram | Serves 1 |  [Energy: 537.7 kcal, Protein: 13.09g, Carbohydrates: 34.48g, Fat: 38.75g]",
                                                            "imageId": "gqjbuq7xoyuxolxsprjp",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835809",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "450 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "28 ratings",
                                                                    "ratingCountV2": "28"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247312",
                                                            "name": "Paneer Butter Masala",
                                                            "category": "Veg Curries",
                                                            "description": "550 gram | Serves 1 |  [Energy: 1156.81 kcal, Protein: 43.54g, Carbohydrates: 37.93g, Fat: 92.6g]",
                                                            "imageId": "ksjxi61s8xqlj8cqp4zs",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835794",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "550 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.7",
                                                                    "ratingCount": "60 ratings",
                                                                    "ratingCountV2": "60"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "75757138",
                                                            "name": "Kaju Masala",
                                                            "category": "Veg Curries",
                                                            "description": "370 gram | Serves 1 |  [Energy: 780.95 kcal, Protein: 15.53g, Carbohydrates: 39.3g, Fat: 62.27g]",
                                                            "imageId": "jwcsply1spuntwiy6ory",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 32500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835903",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "370 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "2.8",
                                                                    "ratingCount": "16 ratings",
                                                                    "ratingCountV2": "16"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Rice",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247301",
                                                            "name": "Curd Rice",
                                                            "category": "Rice",
                                                            "description": "600 gram | Serves 1 |  [Energy: 569.98 kcal, Protein: 24.32g, Carbohydrates: 58.63g, Fat: 25.64g]",
                                                            "imageId": "ojyjwksfduvct4jrqglo",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 13500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836068",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "600 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "83 ratings",
                                                                    "ratingCountV2": "83"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247323",
                                                            "name": "Ghee Rice",
                                                            "category": "Rice",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1824.4 kcal, Protein: 25.93g, Carbohydrates: 246.6g, Fat: 78.23g]",
                                                            "imageId": "wm9rg7kwm8ujpcal9u2z",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 20500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836035",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "40 ratings",
                                                                    "ratingCountV2": "40"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247325",
                                                            "name": "Jeera Rice",
                                                            "category": "Rice",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1832.3 kcal, Protein: 27.51g, Carbohydrates: 246.73g, Fat: 78.15g]",
                                                            "imageId": "xukq8swrwct8usmg4cjv",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 21000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836057",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "41 ratings",
                                                                    "ratingCountV2": "41"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247294",
                                                            "name": "Veg Fried Rice",
                                                            "category": "Rice",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1477 kcal, Protein: 22.9g, Carbohydrates: 204.14g, Fat: 59.95g]",
                                                            "imageId": "pycpbzawueci1dvhmkr3",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 24500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836024",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "58 ratings",
                                                                    "ratingCountV2": "58"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247290",
                                                            "name": "Egg Fried Rice",
                                                            "category": "Rice",
                                                            "description": "1050 gram | Serves 1 |  [Energy: 1729.51 kcal, Protein: 44.03g, Carbohydrates: 204.54g, Fat: 79.02g]",
                                                            "imageId": "lv6jl9qdscekjmwkxm9l",
                                                            "inStock": 1,
                                                            "price": 26000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "1050 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.0",
                                                                    "ratingCount": "87 ratings",
                                                                    "ratingCountV2": "87"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247295",
                                                            "name": "Chicken Fried Rice",
                                                            "category": "Rice",
                                                            "description": "700 gram | Serves 1 |  [Energy: 1142.26 kcal, Protein: 40.11g, Carbohydrates: 125.05g, Fat: 51.37g]",
                                                            "imageId": "akmx533z73jjbq8avy6v",
                                                            "inStock": 1,
                                                            "price": 29000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835927",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "700 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.2",
                                                                    "ratingCount": "159 ratings",
                                                                    "ratingCountV2": "159"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Beverages",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "61892144",
                                                            "name": "Mineral Water 1l",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1905,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.6",
                                                                    "ratingCount": "11 ratings",
                                                                    "ratingCountV2": "11"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "108115835",
                                                            "name": "Coke [600 ml]",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 3810,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "43 ratings",
                                                                    "ratingCountV2": "43"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "108115836",
                                                            "name": "Sprite [600ml]",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 3810,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.3",
                                                                    "ratingCount": "23 ratings",
                                                                    "ratingCountV2": "23"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "108115837",
                                                            "name": "Thums Up [600ml]",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 3810,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.7",
                                                                    "ratingCount": "36 ratings",
                                                                    "ratingCountV2": "36"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "94415056",
                                                            "name": "Coke Tin 330 Ml",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 6666,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.8",
                                                                    "ratingCount": "11 ratings",
                                                                    "ratingCountV2": "11"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "94322123",
                                                            "name": "Sprite Tin 330 Ml",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 6666,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {}
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "94321822",
                                                            "name": "Thums Up Tin 330 Ml",
                                                            "category": "Beverages",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 6666,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.9",
                                                                    "ratingCount": "8 ratings",
                                                                    "ratingCountV2": "8"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Extra",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "115693122",
                                                            "name": "Paper Plate",
                                                            "category": "Extra",
                                                            "inStock": 1,
                                                            "price": 1000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.4",
                                                                    "ratingCount": "9 ratings",
                                                                    "ratingCountV2": "9"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "58519535",
                                                            "name": "Raita",
                                                            "category": "Extra",
                                                            "imageId": "juyijxp6bswclaw3uuaq",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 1200,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836231",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "130 ratings",
                                                                    "ratingCountV2": "130"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "58519537",
                                                            "name": "Gravy",
                                                            "category": "Extra",
                                                            "imageId": "x8nlpx0doxhanlnplqx9",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 2000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836323",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "4.5",
                                                                    "ratingCount": "71 ratings",
                                                                    "ratingCountV2": "71"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "116393940",
                                                            "name": "Extra Aloo 4 Pcs",
                                                            "category": "Extra",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 4000,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "5.0",
                                                                    "ratingCount": "3 ratings",
                                                                    "ratingCountV2": "3"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                },
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "58519536",
                                                            "name": "Masala Pack",
                                                            "category": "Extra",
                                                            "imageId": "pderw7h3flvbytkaoe01",
                                                            "inStock": 1,
                                                            "isVeg": 1,
                                                            "price": 10500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94836340",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "VEG"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.0",
                                                                    "ratingCount": "4 ratings",
                                                                    "ratingCountV2": "4"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                                            "title": "Day Special",
                                            "itemCards": [
                                                {
                                                    "card": {
                                                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                                        "info": {
                                                            "id": "45247327",
                                                            "name": "Pepper Chicken Dry",
                                                            "category": "Day Special",
                                                            "description": "450 gram | Serves 1 |  [Energy: 655.34 kcal, Protein: 42.86g, Carbohydrates: 44.32g, Fat: 32.41g]",
                                                            "imageId": "rlcjzwkysumyh28nxuaq",
                                                            "inStock": 1,
                                                            "price": 35500,
                                                            "variants": {},
                                                            "variantsV2": {},
                                                            "addons": [
                                                                {
                                                                    "groupId": "94835602",
                                                                    "groupName": "Choice Of Beverage (600ml)",
                                                                    "choices": [
                                                                        {
                                                                            "id": "92422313",
                                                                            "name": "Thums Up 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422311",
                                                                            "name": "Coke 600 Ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        },
                                                                        {
                                                                            "id": "92422312",
                                                                            "name": "Sprite 600ml",
                                                                            "price": 3810,
                                                                            "inStock": 1,
                                                                            "isVeg": 1,
                                                                            "isEnabled": 1
                                                                        }
                                                                    ],
                                                                    "maxAddons": 2,
                                                                    "maxFreeAddons": -1
                                                                }
                                                            ],
                                                            "itemAttribute": {
                                                                "vegClassifier": "NONVEG",
                                                                "portionSize": "450 gram"
                                                            },
                                                            "ribbon": {},
                                                            "type": "ITEM",
                                                            "itemBadge": {},
                                                            "badgesV2": {},
                                                            "ratings": {
                                                                "aggregatedRating": {
                                                                    "rating": "3.7",
                                                                    "ratingCount": "7 ratings",
                                                                    "ratingCountV2": "7"
                                                                }
                                                            }
                                                        },
                                                        "analytics": {},
                                                        "hideRestaurantDetails": true
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                                            "type": "FSSAI",
                                            "imageId": "fssai_final_edss9i",
                                            "text": [
                                                "License No. 11222333000227"
                                            ]
                                        }
                                    }
                                },
                                {
                                    "card": {
                                        "card": {
                                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                                            "name": "Meghana Foods",
                                            "area": "Brookefield",
                                            "completeAddress": "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "firstOffsetRequest": true
    },
    "tid": "45197abb-7216-4114-939d-b4e14b68f255",
    "sid": "7z7ab4c4-c015-46c8-bcb7-a30f25a6b2e6",
    "deviceId": "79345fc2-45d7-38f4-3081-9585016d0ee0",
    "csrfToken": "jQYulbYqB8wJ-A1KHQIYp-Ong8rzefTV1xUHaa-Y"
}
]


export const restaurantList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "73011",
        name: "KFC",
        uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["American", "Snacks", "Biryani"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 6.199999809265137,
        slugs: {
          restaurant: "kfc-chukkuwala-chukkuwala",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
        locality: "Clock Tower",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "73011",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 6.199999809265137,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "542132",
        name: "Domnik Pizza",
        uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
        city: "22",
        area: "Majra    Bansal Home",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        slaString: "33 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
          restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
        locality: "Patel Nagar",
        parentId: 22321,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "542132",
          deliveryTime: 33,
          minDeliveryTime: 33,
          maxDeliveryTime: 33,
          lastMileTravel: 0.6000000238418579,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "321517",
        name: "FOOD PLANET RESTAURANT",
        uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
        city: "22",
        area: "Majra",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "ykboewqeoxnne8fgrnui",
        cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 0.699999988079071,
        slugs: {
          restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
        locality: "Patel Nagar",
        parentId: 81850,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "321517",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 0.699999988079071,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "2.8",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "311806",
        name: "Burger King",
        uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
        city: "22",
        area: "Anand Vihar Colony",
        totalRatingsString: "5000+ ratings",
        cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        slaString: "39 MINS",
        lastMileTravel: 6.300000190734863,
        slugs: {
          restaurant: "burger-king-chakrata-road-ballupur",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
        locality: "CHAKRATA ROAD",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "6.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "311806",
          deliveryTime: 39,
          minDeliveryTime: 39,
          maxDeliveryTime: 39,
          lastMileTravel: 6.300000190734863,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.2",
        totalRatings: 5000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "132460",
        name: "Annapurna Andhra Mess",
        uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
        city: "22",
        area: "Dehradun",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
        cuisines: ["South Indian", "Biryani", "North Indian"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        slaString: "25 MINS",
        lastMileTravel: 1.399999976158142,
        slugs: {
          restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address:
          "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
        locality: "Patel Nagar",
        parentId: 33997,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "132460",
          deliveryTime: 25,
          minDeliveryTime: 25,
          maxDeliveryTime: 25,
          lastMileTravel: 1.399999976158142,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.0",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "496677",
        name: "Uncle Ji Restaurant",
        uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
        city: "22",
        area: "Patel Nagar",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
        cuisines: ["North Indian", "Snacks", "Beverages"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 0.800000011920929,
        slugs: {
          restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
          city: "dehradun",
        },
        cityState: "22",
        address: "348 santosh tower, majra road gram majra dehradun 248001",
        locality: "Patel Nagar",
        parentId: 298209,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹100 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "496677",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 0.800000011920929,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
  ];