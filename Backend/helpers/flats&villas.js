const flatVillas ={

    "project_type":"flat_villas",
    "active":true,
    "properties":[
        {
            "id":1,
            "name":"bedrooms",
            "type":"number",
            "input_type":"text_box"
        },
        {
            "id":2,
            "name":"area_in_sqft",
            "type":"number",
            "input_type":"text_box"
        },
        {
            "id":3,
            "name":"number_of_plots",
            "type":"number",
            "input_type":"text_box"
        },
        {
            "id":4,
            "name":"price",
            "type":"number",
            "input_type":"text_box"
        }
    ],
    "possession":[
        {
            "id":1,
            "name":"possession",
            "input_type":"radio_button",
            "value":"ready_to_occupy"
        },
        {
            "id":2,
            "name":"possession",
            "input_type":"radio_button",
            "value":"handovered_in"
        },
        {
            "id":3,
            "name":"date",
            "type":"date",
            "input_type":"date"
        },
        {
            "id":4,
            "name":"rera_id",
            "type":"string",
            "input_type":"text_box"
        }


    ],
    "amenities": [
        {
            "id": 1,
            "name": "Park",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 2,
            "name": "Swimming Pool",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 3,
            "name": "Club House",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 4,
            "name": "Indoor games",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 5,
            "name": "Compound Wall",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 6,
            "name": "RERA Approved",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 7,
            "name": "Entrance Arch",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 8,
            "name": "Avenue Plantation",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 9,
            "name": "Electricity with Street Lights",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 10,
            "name": "Under ground Drainage",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 11,
            "name": "Power Backup",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 12,
            "name": "Community Hall",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 13,
            "name": "CCTV",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 14,
            "name": "24x7 Security",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 15,
            "name": "Lift(s)",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          },
          {
            "id": 16,
            "name": "Children's Play Area",
            "type": "boolean",
            "input_type": "checkbox",
            "value": false
          }
    ],
    "property_highlights":{
        "type": "string",
        "input_type": "text_box"
    },
    "property_description":{
        "type": "text",
        "input_type": "text_box"
    },
    "location":[
        {
            "id":1,
            "name": "address",
            "type": "string",
            "input_type": "text_box"
        },
        {
            "id":2,
            "name":"state",
            "type":"string",
            "input_type":"dropdown",
            "options": [
                {
                    "id":1,
                    "value":"Andhra Pradesh"
                },
                {
                    "id":2,
                    "value":"Telangana"
                }
            ]
                   
        },
        {
            "id":3,
            "name":"city",
            "type":"string",
            "input_type":"dropdown",
            "hasParent_selection": true,
            "parent_id":2,
            "options":[
               {
                "id": 1,
                "name": "Visakhapatnam",
                "parent_id": 1
            },
            {
                "id": 2,
                "name": "Vijayawada",
                "parent_id": 1
            },
            {
                "id": 3,
                "name": "Guntur",
                "parent_id": 1
            },
            {
                "id": 4,
                "name": "Nellore",
                "parent_id": 1
            },
            {
                "id": 5,
                "name": "Kurnool",
                "parent_id": 1
            },
            {
                "id": 6,
                "name": "Rajahmundry",
                "parent_id": 1
            },
            {
                "id": 7,
                "name": "Kakinada",
                "parent_id": 1
            },
            {
                "id": 8,
                "name": "Tirupati",
                "parent_id": 1
            },
            {
                "id": 9,
                "name": "Anantapur",
                "parent_id": 1
            },
            {
                "id": 10,
                "name": "Kadapa",
                "parent_id": 1
            },
            {
                "id": 11,
                "name": "Eluru",
                "parent_id": 1
            },
            {
                "id": 12,
                "name": "Ongole",
                "parent_id": 1
            },
            {
                "id": 13,
                "name": "Chittoor",
                "parent_id": 1
            },
            {
                "id": 14,
                "name": "Machilipatnam",
                "parent_id": 1
            },
            {
                "id": 15,
                "name": "Vizianagaram",
                "parent_id": 1
            },
            {
                "id": 16,
                "name": "Proddatur",
                "parent_id": 1
            },
            {
                "id": 17,
                "name": "Tenali",
                "parent_id": 1
            },
            {
                "id": 18,
                "name": "Adoni",
                "parent_id": 1
            },
            {
                "id": 19,
                "name": "Hindupur",
                "parent_id": 1
            },
            {
                "id": 20,
                "name": "Nandyal",
                "parent_id": 1
            },
            {
                "id": 21,
                "name": "Bhimavaram",
                "parent_id": 1
            },
            {
                "id": 22,
                "name": "Madanapalle",
                "parent_id": 1
            },
            {
                "id": 23,
                "name": "Tadepalligudem",
                "parent_id": 1
            },
            {
                "id": 24,
                "name": "Srikakulam",
                "parent_id": 1
            },
            {
                "id": 25,
                "name": "Chilakaluripet",
                "parent_id": 1
            },
            {
                "id": 26,
                "name": "Gudur",
                "parent_id": 1
            },
            {
                "id": 27,
                "name": "Gudivada",
                "parent_id": 1
            },
            {
                "id": 28,
                "name": "Markapur",
                "parent_id": 1
            },
            {
                "id": 29,
                "name": "Narasaraopet",
                "parent_id": 1
            },
            {
                "id": 30,
                "name": "Chirala",
                "parent_id": 1
            },
            {
                "id": 31,
                "name": "Hyderabad",
                "parent_id": 2
            },
            {
                "id": 32,
                "name": "Warangal",
                "parent_id": 2
            },
            {
                "id": 33,
                "name": "Nizamabad",
                "parent_id": 2
            },
            {
                "id": 34,
                "name": "Khammam",
                "parent_id": 2
            },
            {
                "id": 35,
                "name": "Karimnagar",
                "parent_id": 2
            },
            {
                "id": 36,
                "name": "Ramagundam",
                "parent_id": 2
            },
            {
                "id": 37,
                "name": "Mahbubnagar",
                "parent_id": 2
            },
            {
                "id": 38,
                "name": "Nalgonda",
                "parent_id": 2
            },
            {
                "id": 39,
                "name": "Adilabad",
                "parent_id": 2
            },
            {
                "id": 40,
                "name": "Suryapet",
                "parent_id": 2
            },
            {
                "id": 41,
                "name": "Miryalaguda",
                "parent_id": 2
            },
            {
                "id": 42,
                "name": "Jagtial",
                "parent_id": 2
            },
            {
                "id": 43,
                "name": "Mancherial",
                "parent_id": 2
            },
            {
                "id": 44,
                "name": "Kothagudem",
                "parent_id": 2
            },
            {
                "id": 45,
                "name": "Palwancha",
                "parent_id": 2
            },
            {
                "id": 46,
                "name": "Bodhan",
                "parent_id": 2
            },
            {
                "id": 47,
                "name": "Siddipet",
                "parent_id": 2
            },
            {
                "id": 48,
                "name": "Vikarabad",
                "parent_id": 2
            },
            {
                "id": 49,
                "name": "Jangaon",
                "parent_id": 2
            },
            {
                "id": 50,
                "name": "Wanaparthy",
                "parent_id": 2
            },
            {
                "id": 51,
                "name": "Kagaznagar",
                "parent_id": 2
            }
            ]

        },
        {
            "id":4,
            "name":"town/village",
            "type":"string",
            "input_type":"text_box"

        },
        {
            "id":5,
            "name":"pincode",
            "type":"number",
            "input_type":"text_box"
            
        },
        {
            "id":6,
            "name":"latitude",
            "type":"string",
            "input_type":"text_box"
        },
        {
            "id":7,
            "name":"longitude",
            "type":"string",
            "input_type":"text_box"
        }
    
        
    ],
    "images":{
        "type":"jsonb",
        "input_type":"file"
    },
    "website_link":{
        "type":"string",
        "input_type":"text_box"
    },
    "social_media":{
        "type":"jsonb",
        "input_type":"text_box"
    },
    "youtube_video":{
        "type":"jsonb",
        "input_type":"text_box"
    },
    "brochure":{
        "type":"jsonb",
        "input_type":"file"
    },
    "layout":{
        "type":"jsonb",
        "input_type":"file"
    }  
};

module.exports = {flatVillas} ;