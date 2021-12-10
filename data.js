var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.19655050981170952,
        "pitch": -0.03936961856794241,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07420574579720274,
          "pitch": -0.23753321288074147,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6603088517506919,
          "pitch": -0.07691470441709392,
          "title": "Faculty of Engineering",
          "text": "Welcome to the Faculty of Engineering!&nbsp;"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.05691670908043989,
        "pitch": -0.2814802616128418,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.719159011908447,
          "pitch": -0.08386393965531269,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.09420698104958447,
          "pitch": 0.052164334888894714,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5694130459660034,
          "pitch": -0.6369823160930146,
          "title": "Engineering Building",
          "text": "Explore the engineering building inside!"
        },
        {
          "yaw": -1.1942061156996928,
          "pitch": -0.6651080777639748,
          "title": "Statue of Liberty",
          "text": "This statue marks the beginning of the founding of the engineering faculty in NUS where innovation and ideas were formed."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.0858063500404764,
        "pitch": -0.13041638715159465,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0623009297690906,
          "pitch": -0.1303808943936211,
          "rotation": 3.9269908169872414,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7707190136437632,
          "pitch": -0.051020105857883635,
          "title": "Study Tables",
          "text": "This is where engineering students work and study"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
