(function(){
    var script = {
 "defaultVRPointer": "laser",
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "data": {
  "name": "Player468"
 },
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9",
  "this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432",
  "this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387",
  "this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C",
  "this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C",
  "this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0",
  "this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9",
  "this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89",
  "this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764"
 ],
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 20,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Player",
 "borderSize": 0,
 "definitions": [{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD795B7A_D0AE_4A49_41E9_2DEC9DE7505E"
},
{
 "thumbnailUrl": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_160355_00_440",
 "id": "panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
   "backwardYaw": 132.14,
   "class": "AdjacentPanorama",
   "yaw": -104.63,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737",
   "backwardYaw": -20.73,
   "class": "AdjacentPanorama",
   "yaw": 154,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737",
   "backwardYaw": -20.73,
   "class": "AdjacentPanorama",
   "yaw": -170.83,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D77C8B8C_CE44_3981_41E9_9D2CF6DF5122",
  "this.overlay_D245CE2D_CE4C_7A83_41C7_D403B1E33723",
  "this.overlay_D471B336_CE4C_6A80_41E8_47BF66A28FE8",
  "this.overlay_D2639E4D_CE4D_DA80_41AB_7EB7B233A4DC",
  "this.overlay_D414BF5B_CE4C_7A87_41E9_AC8C9B48F41D",
  "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843B4AA_D0AA_FEC9_41D6_00EA2381435B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 108.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCCC0A17_D0AE_75C7_41BE_07D5D1E569B1"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD633B80_D0AE_4AB9_41CF_1F15E5CCBF2B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD923AE5_D0AE_4A7B_41E7_EFB0D3E844E8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C844C4A9_D0AA_FECB_41E9_BED06F1959F8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD09EB6A_D0AE_4A48_41D4_FEE209F52D3F"
},
{
 "thumbnailUrl": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_160325_00_439",
 "id": "panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C",
   "backwardYaw": -71.47,
   "class": "AdjacentPanorama",
   "yaw": -122.47,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
   "backwardYaw": -33.54,
   "class": "AdjacentPanorama",
   "yaw": 32.41,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08",
   "backwardYaw": -104.63,
   "class": "AdjacentPanorama",
   "yaw": 132.14,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D935279C_CE3B_E981_41E6_DBC6756C459E",
  "this.overlay_D6E6358A_CE3C_2981_41D8_89FC39539431",
  "this.overlay_D7BC17F5_CE3C_2983_41E4_3E81D065BA3D",
  "this.overlay_D9C58505_CE3C_2E83_41E4_6C1409E4707B",
  "this.overlay_D6EC3E73_CE3F_DA80_41BE_6A3DEA7CDBB0",
  "this.overlay_D5DADDA5_CE44_5980_41B7_2309C7FDF722",
  "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C844F4AD_D0AA_FECB_41E9_BEBDDF6EF163"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.49,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD1B3B59_D0AE_4A48_41DF_38EBA9EFE238"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84484AC_D0AA_FEC9_41CE_099C83010F1C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7C8B81_D0AE_4ABB_41C7_E292BA872FFB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -47.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC47DAC2_D0AE_4AB8_41E8_F76AE5ADBD96"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0CEB70_D0AE_4A59_41E0_595DF49297CB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842E4A0_D0AA_FEF9_41E4_CC1E54E80B29"
},
{
 "thumbnailUrl": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_155517_00_433",
 "id": "panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
   "backwardYaw": -104.01,
   "class": "AdjacentPanorama",
   "yaw": 6.28,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0",
   "backwardYaw": 95.97,
   "class": "AdjacentPanorama",
   "yaw": -117.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4",
   "backwardYaw": 3.87,
   "class": "AdjacentPanorama",
   "yaw": 121.34,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF",
   "backwardYaw": 94.71,
   "class": "AdjacentPanorama",
   "yaw": -42.83,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D9FAA88F_CEC4_2780_41DE_81CE29518A47",
  "this.overlay_D643C2CE_CEC4_2B81_41E4_AB8F226B3B48",
  "this.overlay_D617ED8D_CEC4_7983_41DC_AC7A8B4AC8C5",
  "this.overlay_D6A67A4D_CEC4_3A83_41E0_D36B9344C938",
  "this.overlay_D64EE5C1_CEC4_6980_41E8_DDC533C6DDC7",
  "this.overlay_D6AE7D6E_CECB_DE80_41B8_335C27BAF0A5",
  "this.overlay_D62927B7_CECC_2980_41E4_563B53D39221",
  "this.overlay_D7AE78BA_CEC4_2780_41B2_0110202F6618",
  "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD7E9B7E_D0AE_4A49_41DB_89504E8AFA36"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0A4B67_D0AE_4A47_41E3_32DE642CB80D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0A9B68_D0AE_4A49_41E3_902B794CD284"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7C6B80_D0AE_4AB8_41E9_93934B3A1F28"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842E4A2_D0AA_FEF9_41E8_5588B10A04CE"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC110A56_D0AE_4A58_41D3_87E81A1CB65F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842E49E_D0AA_FEC9_41E7_3B4F25CB396D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD789B7D_D0AE_4A48_41B4_4F53D733ACDB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8426496_D0AA_FED9_41E0_DC08949952EB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84464AC_D0AA_FEC9_41DC_0ADFC54B403C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD787B7D_D0AE_4A48_41E3_B2D327689D6C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0A3B67_D0AE_4A47_41D1_3F18ED48BF5B"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842849E_D0AA_FEC9_41D5_C109DE101234"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C845D4AE_D0AA_FEC9_41E9_ED72529E5796"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7CBB80_D0AE_4AB8_41E2_90E0967D664D"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "mouseControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84484AD_D0AA_FECB_41E3_F4224DC5FB28"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841C49B_D0AA_FECF_41E4_0B0ED100E140"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD765B74_D0AE_4A59_41E0_A24D4B3F095E"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 62.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CDEEFB15_D0AE_4BD8_41CD_280A1EED1670"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7E0B7E_D0AE_4A48_41A6_5B73995B8A12"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842A49E_D0AA_FEC9_41E2_81116E8E36FB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7B4B79_D0AE_4A48_41E0_FB26803643D5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84224A0_D0AA_FEF9_41E0_73148C3B4391"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD786B7C_D0AE_4A49_41E8_A70002354D04"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842649F_D0AA_FEC7_41E0_D17EAAFA371E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C84434A9_D0AA_FECB_41E8_F3DFC63DC82F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD72FB72_D0AE_4A58_41E4_70459B0A9551"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7CCB80_D0AE_4AB8_41D6_6B1F97FB9D78"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843D4AA_D0AA_FEC9_41D8_8ADC52022C6A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD73BB70_D0AE_4A59_41E2_31DB3768AA7E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD716B73_D0AE_4A58_41E4_8EE019A9DE51"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C843A4AC_D0AA_FEC9_41E3_A78E793E3EF3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84204A0_D0AA_FEF9_41AF_71598E865536"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7EDB7E_D0AE_4A49_41E2_E39BF108B85F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C8424499_D0AA_FECB_41E3_CC388829D5A6"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD777B73_D0AE_4A5F_41E7_B020570BDAB8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD77DB76_D0AE_4A58_41B1_BC3ACE06BCE6"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.46,
  "pitch": -3.93
 },
 "class": "PanoramaCamera",
 "id": "panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD629B83_D0AE_4AB8_41E9_025CA32FA417"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7C1B80_D0AE_4AB9_41E5_CC17B3E98241"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0D7B6E_D0AE_4A48_41E1_2F2B465A4745"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84334A8_D0AA_FEC9_41D5_33466F7B1BC0"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 57.53,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD3ADB3B_D0AE_4BCF_41E8_6C885DC15057"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843749A_D0AA_FEC9_41E1_C5CD4D62EFE7"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84574AE_D0AA_FEC9_419E_8CD9C6A2706A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843549D_D0AA_FECB_41C8_A9A2562B5AAE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8422499_D0AA_FECB_41D9_667248DAB211"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841D498_D0AA_FEC9_41BF_6CC2585BE881"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0CBB6F_D0AE_4A47_41E1_7E0C50A50EE4"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84334A1_D0AA_FEFB_41E9_8A86D6726D3E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842D497_D0AA_FEC7_41C0_D89B377003D6"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD706B73_D0AE_4A5F_41DC_0CCEF6508CBB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 146.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC382A2D_D0AE_75CB_41C8_EA5A1E40871E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD756B77_D0AE_4A58_41E3_ABF88241384E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD624B83_D0AE_4AB8_41E0_3E7817EDB896"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7AAB7A_D0AE_4A48_41DD_E486CA49F20A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8410495_D0AA_FEDB_41CD_DF56D320776A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD720B72_D0AE_4A58_41E1_580F9F50E53C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD760B76_D0AE_4A58_41E8_4BCA37C279E1"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84234A2_D0AA_FEF9_41DC_8CA8F15A9F6D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "displayMovements": [
  {
   "easing": "linear",
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "easing": "cubic_in_out",
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0.23,
   "targetStereographicFactor": 0
  }
 ],
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": -159.6,
  "stereographicFactor": 1,
  "pitch": -90,
  "hfov": 165
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.6,
  "pitch": 0.23
 },
 "class": "PanoramaCamera",
 "id": "panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C845E4AE_D0AA_FEC9_41D3_FE8F87241207"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7BEB79_D0AE_4A48_41E0_F093AB627D07"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84304AA_D0AA_FEC9_41E1_A1939698CD6B"
},
{
 "thumbnailUrl": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_155249_00_432",
 "id": "panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
   "backwardYaw": 32.41,
   "class": "AdjacentPanorama",
   "yaw": -33.54,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "backwardYaw": -74.74,
   "class": "AdjacentPanorama",
   "yaw": -156.89,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "backwardYaw": -74.74,
   "class": "AdjacentPanorama",
   "yaw": 159.9,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
   "backwardYaw": 6.28,
   "class": "AdjacentPanorama",
   "yaw": -104.01,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D8A29487_CEDB_EF80_419F_33FE731146F1",
  "this.overlay_D9B6E353_CEC4_2A80_41BC_4F20CF6B1AE4",
  "this.overlay_D997019F_CEC4_2980_41D1_9C108758C121",
  "this.overlay_D878992A_CEC4_2680_41CE_74CB826CCEFA",
  "this.overlay_D85638A4_CEC4_2780_41B5_09165DC37877",
  "this.overlay_D921CD5E_CEC4_7E81_41D0_3F7A21EBA736",
  "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C84434AE_D0AA_FEC9_41D7_9B57A472FDB8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84334A5_D0AA_FEFB_41E6_4DAFA9481591"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -134.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CDDF1B20_D0AE_4BF9_41D8_D5551B4BA0B1"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84454A9_D0AA_FECB_41BD_5AE9A241B701"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_camera"
},
{
 "thumbnailUrl": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_155954_00_436",
 "id": "panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4",
   "backwardYaw": -30.49,
   "class": "AdjacentPanorama",
   "yaw": 53.51,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D8D9172D_CEC4_2A80_41D4_F77144961CFC",
  "this.overlay_D6C43758_CEC4_2A81_41E7_FD324B901302",
  "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C843049F_D0AA_FEC7_41CC_FF8266EE5D35"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0B6B66_D0AE_4A79_41E5_885F92D11D8F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD0DEB70_D0AE_4A59_41BA_87027EDE1D99"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD71BB73_D0AE_4A58_41E6_BB8908C7364D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0C6B70_D0AE_4A59_41D5_11858970C720"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.37,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC24AA3F_D0AE_75C7_41B2_2354AE38CC85"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD083B6A_D0AE_4A48_41AC_485274D5B1EB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD71FB73_D0AE_4A5F_41DD_B70D2F7C529B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC097A86_D0AE_4AB8_41C6_F1E0BF7AE95C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD633B81_D0AE_4ABB_41D8_8CEDAB8FAC9D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0F6B6C_D0AE_4A48_41E3_EDA080CE49C9"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD778B76_D0AE_4A58_41D5_C85B631AB8D4"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0F9B6D_D0AE_4A48_41D9_0983D25719C8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84364A3_D0AA_FEFF_41D0_8A53E459CFD2"
},
{
 "thumbnailUrl": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_154854_00_430",
 "id": "panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
   "backwardYaw": -16.58,
   "class": "AdjacentPanorama",
   "yaw": 45.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C12E2B78_CE3D_FE91_41E3_95A32051E828",
  "this.overlay_DF611AA6_CE3C_3FB1_41C6_D54D1373D5EA",
  "this.overlay_DE8A111F_CEC4_2A8F_41D1_BC6AE0A95DD5",
  "this.overlay_DE97DC3B_CEC4_3A97_41C5_1F73EC265345",
  "this.overlay_DE200451_CEC4_EA92_41BB_2E456CB56152",
  "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84414AD_D0AA_FECB_41E3_40513C4F1867"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD704B73_D0AE_4A5F_41E6_D1D11DEDCBEC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7D6B7E_D0AE_4A49_41E3_D547870A64F6"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD096B69_D0AE_4A4B_41B4_E88C1FF225A5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD63AB82_D0AE_4AB8_41BC_A2BD8BB9917B"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842B498_D0AA_FEC9_41E0_46EEB6F2C7E8"
},
{
 "thumbnailUrl": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_155915_00_435",
 "id": "panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD",
   "backwardYaw": 53.51,
   "class": "AdjacentPanorama",
   "yaw": -30.49,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
   "backwardYaw": 121.34,
   "class": "AdjacentPanorama",
   "yaw": 3.87,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D673BB8D_CEDD_D983_41D8_67BD2171DA53",
  "this.overlay_D7F6B3F4_CEDC_6981_41C2_A39209C1146C",
  "this.overlay_D4F943BD_CEDC_E983_41C5_A3BB47EF6921",
  "this.overlay_D7C6AA5C_CEDF_DA80_41E4_3AC6F9747CBA",
  "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD77FB74_D0AE_4A59_41BF_4BF8CF63825E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841849B_D0AA_FECF_41AD_D7E453D76E1C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD740B77_D0AE_4A47_41E6_5D929E7F9E26"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD089B6C_D0AE_4A48_41B3_30CC74BE84E3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84344A5_D0AA_FEFB_41C8_477DA16B2B7A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD78DB7D_D0AE_4A4B_41CE_51F46BF6C291"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C844E4A9_D0AA_FECB_41DB_CD5E344B00EC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84394A6_D0AA_FEF9_41D6_99046C6FCE0A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842C49A_D0AA_FEC9_41E7_11059F01E54E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842549D_D0AA_FECB_41E1_ACA5D12D83D4"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843F4AA_D0AA_FEC9_41CF_4770097601CA"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84564AC_D0AA_FEC9_419D_9A44C9D3E2F8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7FEB7D_D0AE_4A4B_41C8_5AA234611474"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 36.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CDCF0B2E_D0AE_4BC9_41E1_C6E12970EA76"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7F8B7D_D0AE_4A4B_41C1_FEFE6D9CAA46"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C842A4A2_D0AA_FEF9_41DC_60D31122466B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD04AB66_D0AE_4A79_41D6_79F01C1E3592"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84504AE_D0AA_FEC9_41E4_D1DF2CF9E0DE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842349E_D0AA_FEC9_41E6_BCEA9066ABEC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 149.51,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC66FAA9_D0AE_4ACB_41E7_FD9D9DC9DFC5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD7DFB80_D0AE_4AB9_41D8_6771161A39F3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD79BB7C_D0AE_4A48_41BB_CA70DFD289EB"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD094B6A_D0AE_4A48_41A7_B6830E540870"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84474AB_D0AA_FECF_41E1_B21ECFDEE9CD"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CDB03ACD_D0AE_4A48_41E4_60287C75DDEA"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD082B6C_D0AE_4A48_41C4_8C51222F5B45"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD627B82_D0AE_4AB9_41CF_D7CD780A1672"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD090B6B_D0AE_4A48_41C8_5C51EECD0E14"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C84394AA_D0AA_FEC9_41C7_410CC7E309D8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0C6B6F_D0AE_4A48_41C3_F82629174ECF"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0C0B70_D0AE_4A59_41E3_78B029FC6952"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84354A3_D0AA_FEFF_41A2_C731B6C56C0E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84374A8_D0AA_FEC8_41BC_89FE13336AFA"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD616B83_D0AE_4ABF_41C5_D7EB3AFB83E2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD094B6B_D0AE_4A4F_4195_3960472F11BD"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD749B77_D0AE_4A47_41E9_6BB346DBD555"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD76BB76_D0AE_4A58_41D5_CE33DD7E6113"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0D9B6E_D0AE_4A48_41CB_C9C3BCF388B1"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842C4A4_D0AA_FEF9_41C0_D2B9700BAF25"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8418499_D0AA_FECB_41E1_68CE2F784C43"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD753B77_D0AE_4A58_41E4_9B2D2931F90F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843749C_D0AA_FEC9_41E6_784E8254CCFD"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0DFB6E_D0AE_4A48_41DA_0F1B546260EB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842C49E_D0AA_FEC9_41E8_7279D38CC602"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8420499_D0AA_FECB_41B2_51185ED9B7CB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.27,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CDA1DAD9_D0AE_4A48_41CC_2E0AF0696B56"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD634B81_D0AE_4ABB_41E9_45CC825A3513"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD2ABB49_D0AE_4A4B_41DF_F52D9787DF93"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841C496_D0AA_FED9_41E7_24EDE80655D6"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C842749B_D0AA_FECF_41D4_E4C04CE8B01D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.72,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC74EA9C_D0AE_4AC9_41CE_528F14886698"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84544AC_D0AA_FEC9_41D3_31D162AFDCDC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843749F_D0AA_FEC7_41DB_0167283124F0"
},
{
 "thumbnailUrl": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_154505_00_428",
 "id": "panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
   "backwardYaw": 121.84,
   "class": "AdjacentPanorama",
   "yaw": -143.45,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
   "backwardYaw": 121.84,
   "class": "AdjacentPanorama",
   "yaw": 166.56,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C043846D_CE5C_2AB3_41B7_DFE8756E284E",
  "this.overlay_C050A39D_CE5D_ED93_41E1_3D498A52A756",
  "this.overlay_C0095878_CE44_3A91_41DC_A6A6B63B1CDD",
  "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7C2B80_D0AE_4AB9_41E2_F5DBBDFAB1AE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0BCB67_D0AE_4A47_41D1_51CDD64451C2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842A49A_D0AA_FEC9_41E2_DC72D5203B9A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD799B7A_D0AE_4A49_41DF_106121FEF8BF"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0E7B6D_D0AE_4A48_41BF_17DEAE623C03"
},
{
 "thumbnailUrl": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_160441_00_441",
 "id": "panorama_C4BC2721_CE3C_76B2_41E4_11B444103737",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08",
   "backwardYaw": 154,
   "class": "AdjacentPanorama",
   "yaw": -20.73,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D487977C_CE4F_EA80_417D_178F7E8DC3D2",
  "this.overlay_D39A122E_CE4C_2A80_41C7_08FBFD7E888C",
  "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843F4A5_D0AA_FEFB_41CC_A93E6D4A795D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD78AB7B_D0AE_4A4F_41C1_27C57A21C755"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -84.03,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD83EAF1_D0AE_4A58_418D_EA40CEE4EAAE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD745B77_D0AE_4A47_41E7_5C942A076715"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841849D_D0AA_FECB_41DB_C45558C5AB33"
},
{
 "thumbnailUrl": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_155023_00_431",
 "id": "panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
   "backwardYaw": -156.89,
   "class": "AdjacentPanorama",
   "yaw": -74.74,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_DED4A907_CEC4_2680_41E0_46A75A5C23FD",
  "this.overlay_DDB642A0_CEC4_2B80_41C6_59CB5433636C",
  "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843F4A8_D0AA_FEC9_41E3_5EDE76CE6B63"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD73DB72_D0AE_4A58_4195_1D485D1AF0E9"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842A49C_D0AA_FEC9_41E0_81384B3FBED1"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842C4A2_D0AA_FEF9_41DC_566708569E09"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD098B6B_D0AE_4A4F_41E3_00B35304D67F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD774B76_D0AE_4A58_41D8_F6291B3D7CD5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD703B73_D0AE_4A5F_41E1_FF5541533E3A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84444AC_D0AA_FEC9_41DA_E206D466AF1D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843F4A1_D0AA_FEFB_41C4_3F9FCB98F3AA"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842C49C_D0AA_FEC9_41C1_DACCF3919EA6"
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_C8409494_D0AA_FED9_41C0_0747E0736CB5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_CD0B2B66_D0AE_4A79_41E0_E236C097CFBF, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD0B6B66_D0AE_4A79_41E5_885F92D11D8F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C8417495_D0AA_FEDB_41E6_611A9B7FCAA0, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD0BAB67_D0AE_4A47_41AF_959F6AF06003, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C8415495_D0AA_FEDB_41DB_F0C3D59A28F3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD0B9B67_D0AE_4A47_41E2_137E78EB4356, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C8410495_D0AA_FEDB_41CD_DF56D320776A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD0BCB67_D0AE_4A47_41D1_51CDD64451C2, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C841E495_D0AA_FEDB_41C7_DFC68C53EA20, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD0A3B67_D0AE_4A47_41D1_3F18ED48BF5B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C841C496_D0AA_FED9_41E7_24EDE80655D6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD0A4B67_D0AE_4A47_41E3_32DE642CB80D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C841A496_D0AA_FED9_41E5_10F36F564C7E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD0A9B68_D0AE_4A49_41E3_902B794CD284, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C8418496_D0AA_FED9_41B7_6895F3934296, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD0AFB68_D0AE_4A49_41DB_91D41CF55FA1, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C8426496_D0AA_FED9_41E0_DC08949952EB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_C8409494_D0AA_FED9_41C0_0747E0736CB5, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C8417495_D0AA_FEDB_41E6_611A9B7FCAA0, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C8415495_D0AA_FEDB_41DB_F0C3D59A28F3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C8410495_D0AA_FEDB_41CD_DF56D320776A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C841E495_D0AA_FEDB_41C7_DFC68C53EA20, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C841C496_D0AA_FED9_41E7_24EDE80655D6, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C841A496_D0AA_FED9_41E5_10F36F564C7E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C8418496_D0AA_FED9_41B7_6895F3934296, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C8426496_D0AA_FED9_41E0_DC08949952EB, 'hideEffect', false)",
   "media": "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD096B69_D0AE_4A4B_41B4_E88C1FF225A5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C8424497_D0AA_FEC7_41C5_68C8B62966F4, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_C8423497_D0AA_FEC7_41D8_4168587ADC61, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_CD094B6A_D0AE_4A48_41A7_B6830E540870, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD09EB6A_D0AE_4A48_41D4_FEE209F52D3F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C8421497_D0AA_FEC7_41CB_0F6766EFCA87, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD09DB6A_D0AE_4A48_41D7_6BA5C84F8777, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C842F497_D0AA_FEC7_41D1_39A2949BEB50, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD083B6A_D0AE_4A48_41AC_485274D5B1EB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C842D497_D0AA_FEC7_41C0_D89B377003D6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD0ADB6A_D0AE_4A49_41C3_AA7FD9335441, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842B498_D0AA_FEC9_41E0_46EEB6F2C7E8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD090B6B_D0AE_4A48_41C8_5C51EECD0E14, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C8410498_D0AA_FEC9_41E7_AD240EB324BF, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD094B6B_D0AE_4A4F_4195_3960472F11BD, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C841F498_D0AA_FEC9_41E1_1119389D11BC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD098B6B_D0AE_4A4F_41E3_00B35304D67F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C841D498_D0AA_FEC9_41BF_6CC2585BE881, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C8424497_D0AA_FEC7_41C5_68C8B62966F4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_C8423497_D0AA_FEC7_41D8_4168587ADC61, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C8421497_D0AA_FEC7_41CB_0F6766EFCA87, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C842F497_D0AA_FEC7_41D1_39A2949BEB50, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C842D497_D0AA_FEC7_41C0_D89B377003D6, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842B498_D0AA_FEC9_41E0_46EEB6F2C7E8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C8410498_D0AA_FEC9_41E7_AD240EB324BF, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C841F498_D0AA_FEC9_41E1_1119389D11BC, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C841D498_D0AA_FEC9_41BF_6CC2585BE881, 'hideEffect', false)",
   "media": "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD082B6C_D0AE_4A48_41C4_8C51222F5B45, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C8418499_D0AA_FECB_41E1_68CE2F784C43, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD086B6C_D0AE_4A48_41CA_7CC86122D536, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C8426499_D0AA_FECB_41E1_1D325C039BA2, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_C8424499_D0AA_FECB_41E3_CC388829D5A6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_CD085B6C_D0AE_4A48_41E1_05CC9C04341C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD089B6C_D0AE_4A48_41B3_30CC74BE84E3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C8422499_D0AA_FECB_41D9_667248DAB211, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD0F2B6C_D0AE_4A48_41E8_9EE46D11E5D7, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C8420499_D0AA_FECB_41B2_51185ED9B7CB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD0F6B6C_D0AE_4A48_41E3_EDA080CE49C9, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842C49A_D0AA_FEC9_41E7_11059F01E54E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD0FAB6D_D0AE_4A48_41D4_33BD41950DE3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842A49A_D0AA_FEC9_41E2_DC72D5203B9A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD0F9B6D_D0AE_4A48_41D9_0983D25719C8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842949A_D0AA_FEC9_41E1_34D09CC24D02, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD0FFB6D_D0AE_4A48_41B9_8D9ADD4E7763, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C843749A_D0AA_FEC9_41E1_C5CD4D62EFE7, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C8418499_D0AA_FECB_41E1_68CE2F784C43, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C8426499_D0AA_FECB_41E1_1D325C039BA2, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_C8424499_D0AA_FECB_41E3_CC388829D5A6, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C8422499_D0AA_FECB_41D9_667248DAB211, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C8420499_D0AA_FECB_41B2_51185ED9B7CB, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842C49A_D0AA_FEC9_41E7_11059F01E54E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842A49A_D0AA_FEC9_41E2_DC72D5203B9A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842949A_D0AA_FEC9_41E1_34D09CC24D02, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C843749A_D0AA_FEC9_41E1_C5CD4D62EFE7, 'hideEffect', false)",
   "media": "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD0E6B6D_D0AE_4A48_41EA_13C579F87B0E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C841C49B_D0AA_FECF_41E4_0B0ED100E140, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD0E7B6D_D0AE_4A48_41BF_17DEAE623C03, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C841A49B_D0AA_FECF_41B0_72FDFC00625B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD0E8B6E_D0AE_4A48_41D4_4365B452647A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C841849B_D0AA_FECF_41AD_D7E453D76E1C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_C842749B_D0AA_FECF_41D4_E4C04CE8B01D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_CD0D3B6E_D0AE_4A48_41DD_73B2AED58BF6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD0D7B6E_D0AE_4A48_41E1_2F2B465A4745, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C842549B_D0AA_FECF_41E5_FA0FBC6C1A9A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD0D9B6E_D0AE_4A48_41CB_C9C3BCF388B1, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842349B_D0AA_FECF_41D7_94E70267A8E8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD0DFB6E_D0AE_4A48_41DA_0F1B546260EB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842E49C_D0AA_FEC9_41DA_79857B5A5DC3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD0C2B6E_D0AE_4A48_41D3_0319ECC99BD8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842C49C_D0AA_FEC9_41C1_DACCF3919EA6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD0C6B6F_D0AE_4A48_41C3_F82629174ECF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C842A49C_D0AA_FEC9_41E0_81384B3FBED1, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C841C49B_D0AA_FECF_41E4_0B0ED100E140, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C841A49B_D0AA_FECF_41B0_72FDFC00625B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C841849B_D0AA_FECF_41AD_D7E453D76E1C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_C842749B_D0AA_FECF_41D4_E4C04CE8B01D, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C842549B_D0AA_FECF_41E5_FA0FBC6C1A9A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842349B_D0AA_FECF_41D7_94E70267A8E8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842E49C_D0AA_FEC9_41DA_79857B5A5DC3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842C49C_D0AA_FEC9_41C1_DACCF3919EA6, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C842A49C_D0AA_FEC9_41E0_81384B3FBED1, 'hideEffect', false)",
   "media": "this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD0CBB6F_D0AE_4A47_41E1_7E0C50A50EE4, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C842849C_D0AA_FEC9_41C5_574574CB447B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD732B70_D0AE_4A58_41DE_7030586E3B3E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C843749C_D0AA_FEC9_41E6_784E8254CCFD, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD733B70_D0AE_4A58_41BE_0FD68651B73A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843549D_D0AA_FECB_41C8_A9A2562B5AAE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_C841A49D_D0AA_FECB_41E7_AD0EE413D438, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_CD0DEB70_D0AE_4A59_41BA_87027EDE1D99, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD0C0B70_D0AE_4A59_41E3_78B029FC6952, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C841849D_D0AA_FECB_41DB_C45558C5AB33, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD0C6B70_D0AE_4A59_41D5_11858970C720, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842749D_D0AA_FECB_41DE_A6985D1DFEEA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD0C5B70_D0AE_4A59_41CA_639296A970F2, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842549D_D0AA_FECB_41E1_ACA5D12D83D4, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD0CEB70_D0AE_4A59_41E0_595DF49297CB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842349E_D0AA_FEC9_41E6_BCEA9066ABEC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD733B70_D0AE_4A59_41D0_28AACC4FF40F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C842E49E_D0AA_FEC9_41E7_3B4F25CB396D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C842849C_D0AA_FEC9_41C5_574574CB447B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C843749C_D0AA_FEC9_41E6_784E8254CCFD, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843549D_D0AA_FECB_41C8_A9A2562B5AAE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_C841A49D_D0AA_FECB_41E7_AD0EE413D438, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C841849D_D0AA_FECB_41DB_C45558C5AB33, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842749D_D0AA_FECB_41DE_A6985D1DFEEA, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842549D_D0AA_FECB_41E1_ACA5D12D83D4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842349E_D0AA_FEC9_41E6_BCEA9066ABEC, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C842E49E_D0AA_FEC9_41E7_3B4F25CB396D, 'hideEffect', false)",
   "media": "this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD73BB70_D0AE_4A59_41E2_31DB3768AA7E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C842C49E_D0AA_FEC9_41E8_7279D38CC602, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD738B70_D0AE_4A59_41E1_2BA2273B607B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C842A49E_D0AA_FEC9_41E2_81116E8E36FB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD73DB72_D0AE_4A58_4195_1D485D1AF0E9, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C842849E_D0AA_FEC9_41D5_C109DE101234, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD720B72_D0AE_4A58_41E1_580F9F50E53C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843749F_D0AA_FEC7_41DB_0167283124F0, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD727B72_D0AE_4A58_41CB_FDE1CAA0A046, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C843549F_D0AA_FEC7_41B0_140B703DA027, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_C843049F_D0AA_FEC7_41CC_FF8266EE5D35, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_CD72FB72_D0AE_4A58_41E4_70459B0A9551, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD712B72_D0AE_4A58_41E6_3283A21380B5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842649F_D0AA_FEC7_41E0_D17EAAFA371E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD716B73_D0AE_4A58_41E4_8EE019A9DE51, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842449F_D0AA_FEC7_41DB_16EA4B80847E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD71BB73_D0AE_4A58_41E6_BB8908C7364D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84224A0_D0AA_FEF9_41E0_73148C3B4391, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C842C49E_D0AA_FEC9_41E8_7279D38CC602, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C842A49E_D0AA_FEC9_41E2_81116E8E36FB, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C842849E_D0AA_FEC9_41D5_C109DE101234, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843749F_D0AA_FEC7_41DB_0167283124F0, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C843549F_D0AA_FEC7_41B0_140B703DA027, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_C843049F_D0AA_FEC7_41CC_FF8266EE5D35, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C842649F_D0AA_FEC7_41E0_D17EAAFA371E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C842449F_D0AA_FEC7_41DB_16EA4B80847E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84224A0_D0AA_FEF9_41E0_73148C3B4391, 'hideEffect', false)",
   "media": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD71FB73_D0AE_4A5F_41DD_B70D2F7C529B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84204A0_D0AA_FEF9_41AF_71598E865536, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD703B73_D0AE_4A5F_41E1_FF5541533E3A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C842E4A0_D0AA_FEF9_41E4_CC1E54E80B29, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD706B73_D0AE_4A5F_41DC_0CCEF6508CBB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C842D4A0_D0AA_FEF9_41E6_AF3102B3498B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD704B73_D0AE_4A5F_41E6_D1D11DEDCBEC, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C842B4A0_D0AA_FEF9_416C_1E5EAC36F3D8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_C84364A1_D0AA_FEFB_41DC_1A64D4862580, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_CD708B73_D0AE_4A5F_41DF_14B6ED90ACC2, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD773B73_D0AE_4A5F_41E4_9663B2483442, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84344A1_D0AA_FEFB_41E9_95536D7AF7DD, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD777B73_D0AE_4A5F_41E7_B020570BDAB8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84334A1_D0AA_FEFB_41E9_8A86D6726D3E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD77AB74_D0AE_4A59_41DA_B02204E4587D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84314A1_D0AA_FEFB_41E7_8235C728EADE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD77FB74_D0AE_4A59_41BF_4BF8CF63825E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C843F4A1_D0AA_FEFB_41C4_3F9FCB98F3AA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84204A0_D0AA_FEF9_41AF_71598E865536, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C842E4A0_D0AA_FEF9_41E4_CC1E54E80B29, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C842D4A0_D0AA_FEF9_41E6_AF3102B3498B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C842B4A0_D0AA_FEF9_416C_1E5EAC36F3D8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_C84364A1_D0AA_FEFB_41DC_1A64D4862580, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84344A1_D0AA_FEFB_41E9_95536D7AF7DD, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84334A1_D0AA_FEFB_41E9_8A86D6726D3E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84314A1_D0AA_FEFB_41E7_8235C728EADE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C843F4A1_D0AA_FEFB_41C4_3F9FCB98F3AA, 'hideEffect', false)",
   "media": "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD761B74_D0AE_4A59_41DD_B6AD14AF0A30, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84254A2_D0AA_FEF9_41B7_BBFC36371D90, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD765B74_D0AE_4A59_41E0_A24D4B3F095E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C84234A2_D0AA_FEF9_41DC_8CA8F15A9F6D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD770B75_D0AE_4A5B_41CC_600DA9691DE3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C842E4A2_D0AA_FEF9_41E8_5588B10A04CE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD774B76_D0AE_4A58_41D8_F6291B3D7CD5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C842C4A2_D0AA_FEF9_41DC_566708569E09, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_C842A4A2_D0AA_FEF9_41DC_60D31122466B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_CD778B76_D0AE_4A58_41D5_C85B631AB8D4, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD77DB76_D0AE_4A58_41B1_BC3ACE06BCE6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84284A2_D0AA_FEF9_41DC_E8CB9285F617, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD760B76_D0AE_4A58_41E8_4BCA37C279E1, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84364A3_D0AA_FEFF_41D0_8A53E459CFD2, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD765B76_D0AE_4A58_41DE_3F295E73EBC4, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84354A3_D0AA_FEFF_41A2_C731B6C56C0E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD76BB76_D0AE_4A58_41D5_CE33DD7E6113, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84304A3_D0AA_FEFF_41D7_2B1CFF170E0D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84254A2_D0AA_FEF9_41B7_BBFC36371D90, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C84234A2_D0AA_FEF9_41DC_8CA8F15A9F6D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C842E4A2_D0AA_FEF9_41E8_5588B10A04CE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C842C4A2_D0AA_FEF9_41DC_566708569E09, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_C842A4A2_D0AA_FEF9_41DC_60D31122466B, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84284A2_D0AA_FEF9_41DC_E8CB9285F617, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84364A3_D0AA_FEFF_41D0_8A53E459CFD2, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84354A3_D0AA_FEFF_41A2_C731B6C56C0E, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84304A3_D0AA_FEFF_41D7_2B1CFF170E0D, 'hideEffect', false)",
   "media": "this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD753B77_D0AE_4A58_41E4_9B2D2931F90F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C843F4A3_D0AA_FEFF_41E2_61580661B8D9, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD756B77_D0AE_4A58_41E3_ABF88241384E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C843D4A3_D0AA_FEFF_41C8_25DC78A92BC4, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD75FB77_D0AE_4A47_41E6_9A2B36652423, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C84384A4_D0AA_FEF9_41D3_F0A19D1669D5, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD740B77_D0AE_4A47_41E6_5D929E7F9E26, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C84474A4_D0AA_FEF9_41E9_F22290304BA6, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD745B77_D0AE_4A47_41E7_5C942A076715, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C842C4A4_D0AA_FEF9_41C0_D2B9700BAF25, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD749B77_D0AE_4A47_41E9_6BB346DBD555, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842A4A4_D0AA_FEF9_41DB_AC7DE4BB431F, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_C84294A4_D0AA_FEF9_41E2_17D5916CC5AC, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_CD74CB77_D0AE_4A47_41C7_92DD0CC54F56, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD7B0B77_D0AE_4A47_41B2_92986403BC34, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84344A5_D0AA_FEFB_41C8_477DA16B2B7A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD7B4B79_D0AE_4A48_41E0_FB26803643D5, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84334A5_D0AA_FEFB_41E6_4DAFA9481591, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C843F4A3_D0AA_FEFF_41E2_61580661B8D9, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C843D4A3_D0AA_FEFF_41C8_25DC78A92BC4, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C84384A4_D0AA_FEF9_41D3_F0A19D1669D5, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C84474A4_D0AA_FEF9_41E9_F22290304BA6, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C842C4A4_D0AA_FEF9_41C0_D2B9700BAF25, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C842A4A4_D0AA_FEF9_41DB_AC7DE4BB431F, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_C84294A4_D0AA_FEF9_41E2_17D5916CC5AC, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84344A5_D0AA_FEFB_41C8_477DA16B2B7A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84334A5_D0AA_FEFB_41E6_4DAFA9481591, 'hideEffect', false)",
   "media": "this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD7BEB79_D0AE_4A48_41E0_F093AB627D07, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84314A5_D0AA_FEFB_41B7_82640A8268A2, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD7A0B79_D0AE_4A4B_41E9_66220A4F84BE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C843F4A5_D0AA_FEFB_41CC_A93E6D4A795D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD7A6B7A_D0AE_4A48_41C0_584728D9815D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843D4A6_D0AA_FEF9_41E6_4529734F30C8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD7AAB7A_D0AE_4A48_41DD_E486CA49F20A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843B4A6_D0AA_FEF9_41E4_78F5F535C351, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD7AEB7A_D0AE_4A48_41BC_6C8FC4FCD8A7, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84394A6_D0AA_FEF9_41D6_99046C6FCE0A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD793B7A_D0AE_4A49_41AB_03700F117E9D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84454A6_D0AA_FEF9_41CF_DAA79EB13608, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_C84404A7_D0AA_FEC7_41C4_024C663B2B41, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_CD795B7A_D0AE_4A49_41E9_2DEC9DE7505E, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD799B7A_D0AE_4A49_41DF_106121FEF8BF, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84294A7_D0AA_FEC7_41D1_5BE53042D9C1, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD79CB7B_D0AE_4A48_41C1_EE4081D4D89E, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84374A8_D0AA_FEC8_41BC_89FE13336AFA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84314A5_D0AA_FEFB_41B7_82640A8268A2, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C843F4A5_D0AA_FEFB_41CC_A93E6D4A795D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843D4A6_D0AA_FEF9_41E6_4529734F30C8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843B4A6_D0AA_FEF9_41E4_78F5F535C351, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84394A6_D0AA_FEF9_41D6_99046C6FCE0A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84454A6_D0AA_FEF9_41CF_DAA79EB13608, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_C84404A7_D0AA_FEC7_41C4_024C663B2B41, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84294A7_D0AA_FEC7_41D1_5BE53042D9C1, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84374A8_D0AA_FEC8_41BC_89FE13336AFA, 'hideEffect', false)",
   "media": "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD78AB7B_D0AE_4A4F_41C1_27C57A21C755, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84334A8_D0AA_FEC9_41D5_33466F7B1BC0, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD792B7B_D0AE_4A4F_41E5_C214A217F386, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C84314A8_D0AA_FEC9_41D5_F5400B20B1C2, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD794B7B_D0AE_4A4F_41DB_275F30017784, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843F4A8_D0AA_FEC9_41E3_5EDE76CE6B63, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD79BB7C_D0AE_4A48_41BB_CA70DFD289EB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843A4A8_D0AA_FEC9_41DB_E7B8C4CF8A0C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD79CB7C_D0AE_4A49_41B6_476B9799AC40, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84394A8_D0AA_FEC9_41E2_CDD9C1E568A7, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD786B7C_D0AE_4A49_41E8_A70002354D04, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84474A9_D0AA_FECB_41D0_91E7401E6DF0, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD787B7D_D0AE_4A48_41E3_B2D327689D6C, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84454A9_D0AA_FECB_41BD_5AE9A241B701, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_C84434A9_D0AA_FECB_41E8_F3DFC63DC82F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_CD789B7D_D0AE_4A48_41B4_4F53D733ACDB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD78DB7D_D0AE_4A4B_41CE_51F46BF6C291, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C844E4A9_D0AA_FECB_41DB_CD5E344B00EC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C84334A8_D0AA_FEC9_41D5_33466F7B1BC0, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C84314A8_D0AA_FEC9_41D5_F5400B20B1C2, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843F4A8_D0AA_FEC9_41E3_5EDE76CE6B63, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843A4A8_D0AA_FEC9_41DB_E7B8C4CF8A0C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84394A8_D0AA_FEC9_41E2_CDD9C1E568A7, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84474A9_D0AA_FECB_41D0_91E7401E6DF0, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84454A9_D0AA_FECB_41BD_5AE9A241B701, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_C84434A9_D0AA_FECB_41E8_F3DFC63DC82F, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C844E4A9_D0AA_FECB_41DB_CD5E344B00EC, 'hideEffect', false)",
   "media": "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD7F6B7D_D0AE_4A4B_41C2_1E5F0AE6A66D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C844C4A9_D0AA_FECB_41E9_BED06F1959F8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD7F8B7D_D0AE_4A4B_41C1_FEFE6D9CAA46, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C84304AA_D0AA_FEC9_41E1_A1939698CD6B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD7FEB7D_D0AE_4A4B_41C8_5AA234611474, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843F4AA_D0AA_FEC9_41CF_4770097601CA, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD7E0B7E_D0AE_4A48_41A6_5B73995B8A12, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843D4AA_D0AA_FEC9_41D8_8ADC52022C6A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD7EAB7E_D0AE_4A49_41C0_AFD589542ED9, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C843B4AA_D0AA_FEC9_41D6_00EA2381435B, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_C84394AA_D0AA_FEC9_41C7_410CC7E309D8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_CD7E9B7E_D0AE_4A49_41DB_89504E8AFA36, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD7EDB7E_D0AE_4A49_41E2_E39BF108B85F, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84474AB_D0AA_FECF_41E1_B21ECFDEE9CD, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD7D6B7E_D0AE_4A49_41E3_D547870A64F6, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84454AB_D0AA_FECF_41D0_74F41B1C8313, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD7DBB7F_D0AE_4A47_41AE_A96AE203ED4A, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84404AB_D0AA_FECF_41E5_2FC220E221BC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C844C4A9_D0AA_FECB_41E9_BED06F1959F8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C84304AA_D0AA_FEC9_41E1_A1939698CD6B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C843F4AA_D0AA_FEC9_41CF_4770097601CA, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C843D4AA_D0AA_FEC9_41D8_8ADC52022C6A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C843B4AA_D0AA_FEC9_41D6_00EA2381435B, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_C84394AA_D0AA_FEC9_41C7_410CC7E309D8, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84474AB_D0AA_FECF_41E1_B21ECFDEE9CD, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84454AB_D0AA_FECF_41D0_74F41B1C8313, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84404AB_D0AA_FECF_41E5_2FC220E221BC, 'hideEffect', false)",
   "media": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "camera": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_camera",
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD7C0B7F_D0AE_4A47_41D5_F6A248B96235, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C844E4AB_D0AA_FECF_41BB_7843FD01CBC3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD7C6B80_D0AE_4AB8_41E9_93934B3A1F28, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C844D4AB_D0AA_FECF_41B1_AA1B5CD10866, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD7CBB80_D0AE_4AB8_41E2_90E0967D664D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C84484AC_D0AA_FEC9_41CE_099C83010F1C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD7CCB80_D0AE_4AB8_41D6_6B1F97FB9D78, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C84564AC_D0AA_FEC9_419D_9A44C9D3E2F8, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD633B80_D0AE_4AB9_41CF_1F15E5CCBF2B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84544AC_D0AA_FEC9_41D3_31D162AFDCDC, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_C843A4AC_D0AA_FEC9_41E3_A78E793E3EF3, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_CD7DFB80_D0AE_4AB9_41D8_6771161A39F3, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD7C2B80_D0AE_4AB9_41E2_F5DBBDFAB1AE, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84464AC_D0AA_FEC9_41DC_0ADFC54B403C, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD7C1B80_D0AE_4AB9_41E5_CC17B3E98241, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84444AC_D0AA_FEC9_41DA_E206D466AF1D, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_CD7C8B81_D0AE_4ABB_41C7_E292BA872FFB, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84414AD_D0AA_FECB_41E3_40513C4F1867, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 12, 13); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C844E4AB_D0AA_FECF_41BB_7843FD01CBC3, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C844D4AB_D0AA_FECF_41B1_AA1B5CD10866, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C84484AC_D0AA_FEC9_41CE_099C83010F1C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C84564AC_D0AA_FEC9_419D_9A44C9D3E2F8, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84544AC_D0AA_FEC9_41D3_31D162AFDCDC, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_C843A4AC_D0AA_FEC9_41E3_A78E793E3EF3, 'showEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C84464AC_D0AA_FEC9_41DC_0ADFC54B403C, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C84444AC_D0AA_FEC9_41DA_E206D466AF1D, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_C84414AD_D0AA_FECB_41E3_40513C4F1867, 'hideEffect', false)",
   "media": "this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08",
   "class": "PanoramaPlayListItem",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)"
  },
  {
   "end": "if(this.existsKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')){ if(this.getKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9')) { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true, -1, this.effect_CD633B81_D0AE_4ABB_41D8_8CEDAB8FAC9D, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C844F4AD_D0AA_FECB_41E9_BEBDDF6EF163, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9'); if(this.existsKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')){ if(this.getKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432')) { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true, -1, this.effect_CD634B81_D0AE_4ABB_41E9_45CC825A3513, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C844D4AD_D0AA_FECB_41C0_013A425F18AB, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432'); if(this.existsKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')){ if(this.getKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387')) { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true, -1, this.effect_CD63AB82_D0AE_4AB8_41BC_A2BD8BB9917B, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C84484AD_D0AA_FECB_41E3_F4224DC5FB28, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387'); if(this.existsKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')){ if(this.getKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C')) { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true, -1, this.effect_CD63CB82_D0AE_4AB9_41E1_FF25CE691664, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C84574AE_D0AA_FEC9_419E_8CD9C6A2706A, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C'); if(this.existsKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')){ if(this.getKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C')) { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true, -1, this.effect_CD627B82_D0AE_4AB9_41CF_D7CD780A1672, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84524AE_D0AA_FEC9_41D3_E5534A10BE94, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C'); if(this.existsKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')){ if(this.getKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0')) { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true, -1, this.effect_CD624B83_D0AE_4AB8_41E0_3E7817EDB896, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84504AE_D0AA_FEC9_41E4_D1DF2CF9E0DE, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0'); if(this.existsKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')){ if(this.getKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9')) { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true, -1, this.effect_CD629B83_D0AE_4AB8_41E9_025CA32FA417, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C845E4AE_D0AA_FEC9_41D3_FE8F87241207, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9'); if(this.existsKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')){ if(this.getKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89')) { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true, -1, this.effect_CD62DB83_D0AE_4ABF_41D0_1813ED5927BC, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C845D4AE_D0AA_FEC9_41E9_ED72529E5796, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89'); if(this.existsKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')){ if(this.getKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764')) { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_C84434AE_D0AA_FEC9_41D7_9B57A472FDB8, 'showEffect', false); } else { this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false, -1, this.effect_CD616B83_D0AE_4ABF_41C5_D7EB3AFB83E2, 'hideEffect', false); } }; this.unregisterKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764'); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, true); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, true); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, true); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, true); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, true); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, true); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, true); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, true); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true)",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.registerKey('visibility_HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764', this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764.get('visible')); this.registerKey('visibility_HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89', this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89.get('visible')); this.registerKey('visibility_HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9', this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9.get('visible')); this.registerKey('visibility_HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0', this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0.get('visible')); this.registerKey('visibility_HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C', this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C.get('visible')); this.registerKey('visibility_HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C', this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C.get('visible')); this.registerKey('visibility_HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387', this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387.get('visible')); this.registerKey('visibility_HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432', this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432.get('visible')); this.registerKey('visibility_HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9', this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9.get('visible')); this.setEndToItemIndex(this.mainPlayList, 13, 0); this.keepComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false); this.setComponentVisibility(this.HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9, false, -1, this.effect_C844F4AD_D0AA_FECB_41E9_BEBDDF6EF163, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false); this.setComponentVisibility(this.HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432, false, -1, this.effect_C844D4AD_D0AA_FECB_41C0_013A425F18AB, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false); this.setComponentVisibility(this.HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387, false, -1, this.effect_C84484AD_D0AA_FECB_41E3_F4224DC5FB28, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false); this.setComponentVisibility(this.HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C, false, -1, this.effect_C84574AE_D0AA_FEC9_419E_8CD9C6A2706A, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false); this.setComponentVisibility(this.HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C, false, -1, this.effect_C84524AE_D0AA_FEC9_41D3_E5534A10BE94, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false); this.setComponentVisibility(this.HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0, false, -1, this.effect_C84504AE_D0AA_FEC9_41E4_D1DF2CF9E0DE, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false); this.setComponentVisibility(this.HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9, false, -1, this.effect_C845E4AE_D0AA_FEC9_41D3_FE8F87241207, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false); this.setComponentVisibility(this.HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89, false, -1, this.effect_C845D4AE_D0AA_FEC9_41E9_ED72529E5796, 'hideEffect', false); this.keepComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, false); this.setComponentVisibility(this.HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764, true, -1, this.effect_C84434AE_D0AA_FEC9_41D7_9B57A472FDB8, 'showEffect', false)",
   "media": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_camera"
  }
 ]
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7EAB7E_D0AE_4A49_41C0_AFD589542ED9"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD63CB82_D0AE_4AB9_41E1_FF25CE691664"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD0B2B66_D0AE_4A79_41E0_E236C097CFBF"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842849C_D0AA_FEC9_41C5_574574CB447B"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8418496_D0AA_FED9_41B7_6895F3934296"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C84364A1_D0AA_FEFB_41DC_1A64D4862580"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7F6B7D_D0AE_4A4B_41C2_1E5F0AE6A66D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0BAB67_D0AE_4A47_41AF_959F6AF06003"
},
{
 "thumbnailUrl": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_154744_00_429",
 "id": "panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5",
   "backwardYaw": 45.97,
   "class": "AdjacentPanorama",
   "yaw": -16.58,
   "distance": 1
  },
  {
   "panorama": "this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793",
   "backwardYaw": -143.45,
   "class": "AdjacentPanorama",
   "yaw": 121.84,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_C0240F4B_CE7C_D6F7_416C_BFEBA9C2F4BB",
  "this.overlay_C10006D4_CE7C_3792_41DF_F7578C8FFDB2",
  "this.overlay_C0C69303_CE7C_2E76_41E2_33E029D6575B",
  "this.overlay_D9048569_CEDC_2E80_41E2_E92601A948CC",
  "this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842749D_D0AA_FECB_41DE_A6985D1DFEEA"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843B4A6_D0AA_FEF9_41E4_78F5F535C351"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8421497_D0AA_FEC7_41CB_0F6766EFCA87"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84254A2_D0AA_FEF9_41B7_BBFC36371D90"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7AEB7A_D0AE_4A48_41BC_6C8FC4FCD8A7"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8415495_D0AA_FEDB_41DB_F0C3D59A28F3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD770B75_D0AE_4A5B_41CC_600DA9691DE3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0FFB6D_D0AE_4A48_41B9_8D9ADD4E7763"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 137.17,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC567AB5_D0AE_4ADB_41D3_98A77EA0716E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84474A4_D0AA_FEF9_41E9_F22290304BA6"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C841A49D_D0AA_FECB_41E7_AD0EE413D438"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C8423497_D0AA_FEC7_41D8_4168587ADC61"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84394A8_D0AA_FEC9_41E2_CDD9C1E568A7"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD0D3B6E_D0AE_4A48_41DD_73B2AED58BF6"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0E6B6D_D0AE_4A48_41EA_13C579F87B0E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C84404A7_D0AA_FEC7_41C4_024C663B2B41"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD086B6C_D0AE_4A48_41CA_7CC86122D536"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842F497_D0AA_FEC7_41D1_39A2949BEB50"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843549F_D0AA_FEC7_41B0_140B703DA027"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84404AB_D0AA_FECF_41E5_2FC220E221BC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD727B72_D0AE_4A58_41CB_FDE1CAA0A046"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0F2B6C_D0AE_4A48_41E8_9EE46D11E5D7"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841A49B_D0AA_FECF_41B0_72FDFC00625B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CDFD7B09_D0AE_4BCB_41E5_EB80852DDADA"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7B0B77_D0AE_4A47_41B2_92986403BC34"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84474A9_D0AA_FECB_41D0_91E7401E6DF0"
},
{
 "thumbnailUrl": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_160122_00_437",
 "id": "panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
   "backwardYaw": -42.83,
   "class": "AdjacentPanorama",
   "yaw": 94.71,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D9BE012D_CEC4_2680_4190_99F039A61DC2",
  "this.overlay_D739A58A_CEC4_2980_41E2_908B23319E2F",
  "this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD74CB77_D0AE_4A47_41C7_92DD0CC54F56"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C84294A4_D0AA_FEF9_41E2_17D5916CC5AC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD732B70_D0AE_4A58_41DE_7030586E3B3E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84314A1_D0AA_FEFB_41E7_8235C728EADE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841F498_D0AA_FEC9_41E1_1119389D11BC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7C0B7F_D0AE_4A47_41D5_F6A248B96235"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84454AB_D0AA_FECF_41D0_74F41B1C8313"
},
{
 "thumbnailUrl": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_160237_00_438",
 "id": "panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D",
   "backwardYaw": -122.47,
   "class": "AdjacentPanorama",
   "yaw": -71.47,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D9888EBD_CEC4_7B80_41BE_B715AC5038AC",
  "this.overlay_D91D6616_CEC4_2A80_41A0_AC2E605E0C33",
  "this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84314A8_D0AA_FEC9_41D5_F5400B20B1C2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0C5B70_D0AE_4A59_41CA_639296A970F2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_C8409494_D0AA_FED9_41C0_0747E0736CB5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD773B73_D0AE_4A5F_41E4_9663B2483442"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8417495_D0AA_FEDB_41E6_611A9B7FCAA0"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD712B72_D0AE_4A58_41E6_3283A21380B5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84284A2_D0AA_FEF9_41DC_E8CB9285F617"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842B4A0_D0AA_FEF9_416C_1E5EAC36F3D8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842349B_D0AA_FECF_41D7_94E70267A8E8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8410498_D0AA_FEC9_41E7_AD240EB324BF"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7A6B7A_D0AE_4A48_41C0_584728D9815D"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843D4A3_D0AA_FEFF_41C8_25DC78A92BC4"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7A0B79_D0AE_4A4B_41E9_66220A4F84BE"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841E495_D0AA_FEDB_41C7_DFC68C53EA20"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842A4A4_D0AA_FEF9_41DB_AC7DE4BB431F"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84454A6_D0AA_FEF9_41CF_DAA79EB13608"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCD159D4_D0AE_7658_41E2_D80575C1AA06"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD794B7B_D0AE_4A4F_41DB_275F30017784"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C841A496_D0AA_FED9_41E5_10F36F564C7E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0E8B6E_D0AE_4A48_41D4_4365B452647A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84294A7_D0AA_FEC7_41D1_5BE53042D9C1"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD733B70_D0AE_4A59_41D0_28AACC4FF40F"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 105.26,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CC1C0A6E_D0AE_4A48_41DB_DE6F25D385FC"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843F4A3_D0AA_FEFF_41E2_61580661B8D9"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842E49C_D0AA_FEC9_41DA_79857B5A5DC3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD79CB7C_D0AE_4A49_41B6_476B9799AC40"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C844E4AB_D0AA_FECF_41BB_7843FD01CBC3"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.13,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CD8DEAFD_D0AE_4A4B_41C0_8916EA34C694"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD085B6C_D0AE_4A48_41E1_05CC9C04341C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD733B70_D0AE_4A58_41BE_0FD68651B73A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C844D4AB_D0AA_FECF_41B1_AA1B5CD10866"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84314A5_D0AA_FEFB_41B7_82640A8268A2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0C2B6E_D0AE_4A48_41D3_0319ECC99BD8"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD75FB77_D0AE_4A47_41E6_9A2B36652423"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD792B7B_D0AE_4A4F_41E5_C214A217F386"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD62DB83_D0AE_4ABF_41D0_1813ED5927BC"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD738B70_D0AE_4A59_41E1_2BA2273B607B"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCC6DA01_D0AE_75BB_41C4_02C31B0FA223"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_camera"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C844D4AD_D0AA_FECB_41C0_013A425F18AB"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -58.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCD819EA_D0AE_7649_41E4_C53DC08F6E25"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84384A4_D0AA_FEF9_41D3_F0A19D1669D5"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0FAB6D_D0AE_4A48_41D4_33BD41950DE3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842949A_D0AA_FEC9_41E1_34D09CC24D02"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD79CB7B_D0AE_4A48_41C1_EE4081D4D89E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84344A1_D0AA_FEFB_41E9_95536D7AF7DD"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843D4A6_D0AA_FEF9_41E6_4529734F30C8"
},
{
 "thumbnailUrl": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_t.jpg",
 "class": "Panorama",
 "label": "IMG_20220427_155742_00_434",
 "id": "panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7",
   "backwardYaw": -117.45,
   "class": "AdjacentPanorama",
   "yaw": 95.97,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_D6CA8517_CEC4_2E80_41E2_605FA9FC9C5C",
  "this.overlay_D7E05C1F_CEDC_3E80_41A1_64720410C0A2",
  "this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_tcap0"
 ],
 "hfov": 360,
 "hfovMin": "135%",
 "partial": false
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD765B76_D0AE_4A58_41DE_3F295E73EBC4"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C843A4A8_D0AA_FEC9_41DB_E7B8C4CF8A0C"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD77AB74_D0AE_4A59_41DA_B02204E4587D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD761B74_D0AE_4A59_41DD_B6AD14AF0A30"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842549B_D0AA_FECF_41E5_FA0FBC6C1A9A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0ADB6A_D0AE_4A49_41C3_AA7FD9335441"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD7DBB7F_D0AE_4A47_41AE_A96AE203ED4A"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84304A3_D0AA_FEFF_41D7_2B1CFF170E0D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0B9B67_D0AE_4A47_41E2_137E78EB4356"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C84524AE_D0AA_FEC9_41D3_E5534A10BE94"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8426499_D0AA_FECB_41E1_1D325C039BA2"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842449F_D0AA_FEC7_41DB_16EA4B80847E"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C8424497_D0AA_FEC7_41C5_68C8B62966F4"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_C842D4A0_D0AA_FEF9_41E6_AF3102B3498B"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD793B7A_D0AE_4A49_41AB_03700F117E9D"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD0AFB68_D0AE_4A49_41DB_91D41CF55FA1"
},
{
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.42,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_CCEBE9BD_D0AE_76CB_41C9_B13C2655E1D3"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeInEffect",
 "id": "effect_CD09DB6A_D0AE_4A48_41D7_6BA5C84F8777"
},
{
 "easing": "cubic_in_out",
 "duration": 1000,
 "class": "FadeOutEffect",
 "id": "effect_CD708B73_D0AE_4A5F_41DF_14B6ED90ACC2"
},
{
 "progressBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderSize": 1,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "minHeight": 50,
 "toolTipDisplayTime": 600,
 "playbackBarLeft": 0,
 "width": "100%",
 "borderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderColor": "#767676",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "transitionDuration": 500,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "height": "100%",
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "paddingRight": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Georgia",
 "top": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "transitionMode": "blending",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "absolute",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "minWidth": 1,
 "borderSize": 0,
 "height": 641,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "data": {
  "name": "Entrance"
 },
 "id": "HTMLText_CB46F497_D0AA_5ED8_41DF_95098E7A8FC9",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Entrance</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:32px;\"><B>Front Door</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Compound"
 },
 "id": "HTMLText_C821B86F_D0AA_3647_41C7_918EB91B4432",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Veranda</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Front door"
 },
 "id": "HTMLText_C7ABF1A1_D0AA_36FB_41E8_1F6605D44387",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Front Door</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Living Room"
 },
 "id": "HTMLText_CA3A7B5A_D0AA_4A48_41C0_1524951A0B6C",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Living Room</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bed room"
 },
 "id": "HTMLText_C7894EC3_D0B5_CAB8_41E4_6A6E973A705C",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Bedroom</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Hallway"
 },
 "id": "HTMLText_CB9E5E2C_D0B6_CDC8_4194_3A22AD8DEED0",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Hallway</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Bathroom"
 },
 "id": "HTMLText_CBA5DE8A_D0B6_4AC8_4172_CBC4D0EC62D9",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Bathroom</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Kitchen "
 },
 "id": "HTMLText_C96DE4F8_D0B7_FE48_41DC_EBAB576A6E89",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Kitchen</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:32px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "data": {
  "name": "Store"
 },
 "id": "HTMLText_C7C8ECB5_D0B6_4ED8_41E8_6E7C9DF57764",
 "left": "3.68%",
 "paddingLeft": 10,
 "paddingRight": 10,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "top": "4.22%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderSize": 3,
 "width": "26.417%",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "borderColor": "#000000",
 "height": "16.757%",
 "scrollBarColor": "#000000",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:50px;\"><B>Store</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "paddingTop": 10,
 "visible": false
},
{
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 75,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D, this.camera_CC47DAC2_D0AE_4AB8_41E8_F76AE5ADBD96); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D77C8B8C_CE44_3981_41E9_9D2CF6DF5122",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D44FCC9F_CE4C_3F80_41C2_042BD843CD80",
   "pitch": -39.88,
   "yaw": -106.59,
   "hfov": 11.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D245CE2D_CE4C_7A83_41C7_D403B1E33723",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -39.88,
   "hfov": 11.26
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737, this.camera_CDB03ACD_D0AE_4A48_41E4_60287C75DDEA); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D471B336_CE4C_6A80_41E8_47BF66A28FE8",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C4BC2721_CE3C_76B2_41E4_11B444103737, this.camera_CDA1DAD9_D0AE_4A48_41CC_2E0AF0696B56); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D2639E4D_CE4D_DA80_41AB_7EB7B233A4DC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_3_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_3_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_3_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D4547588_CE44_6981_41BB_5F85814991C1",
   "pitch": 20.9,
   "yaw": 167.71,
   "hfov": 10.36,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D414BF5B_CE4C_7A87_41E9_AC8C9B48F41D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 167.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 20.9,
   "hfov": 10.36
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C, this.camera_CCCC0A17_D0AE_75C7_41BE_07D5D1E569B1); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D935279C_CE3B_E981_41E6_DBC6756C459E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D4554582_CE44_6981_41E0_D433B55C1521",
   "pitch": 15.75,
   "yaw": -120.71,
   "hfov": 8.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6E6358A_CE3C_2981_41D8_89FC39539431",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -120.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.75,
   "hfov": 8.74
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F, this.camera_CC382A2D_D0AE_75CB_41C8_EA5A1E40871E); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D7BC17F5_CE3C_2983_41E4_3E81D065BA3D",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08, this.camera_CC24AA3F_D0AE_75C7_41B2_2354AE38CC85); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D9C58505_CE3C_2E83_41E4_6C1409E4707B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_4_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D4650503_CE3C_EE87_41E9_483430FC6F24",
   "pitch": -29.58,
   "yaw": 135.7,
   "hfov": 12.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6EC3E73_CE3F_DA80_41BE_6A3DEA7CDBB0",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_5_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.58,
   "hfov": 12.08
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D454E585_CE44_6983_41D7_457D23FCACF1",
   "pitch": 19.01,
   "yaw": 18.85,
   "hfov": 8.35,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D5DADDA5_CE44_5980_41B7_2309C7FDF722",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_6_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.01,
   "hfov": 8.35
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF, this.camera_CDFD7B09_D0AE_4BCB_41E5_EB80852DDADA); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D9FAA88F_CEC4_2780_41DE_81CE29518A47",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_0_1_0_map.gif",
      "width": 46,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "hfov": 45.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0, this.camera_CD83EAF1_D0AE_4A58_418D_EA40CEE4EAAE); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D643C2CE_CEC4_2B81_41E4_AB8F226B3B48",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -117.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_1_1_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.58,
   "hfov": 50.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4, this.camera_CD8DEAFD_D0AE_4A4B_41C0_8916EA34C694); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D617ED8D_CEC4_7983_41DC_AC7A8B4AC8C5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_2_1_0_map.gif",
      "width": 64,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.56,
   "hfov": 64.16
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DA9E82_CE5C_5B81_41E8_FDC5EC5955EA",
   "pitch": 9.7,
   "yaw": -116.87,
   "hfov": 8.82,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6A67A4D_CEC4_3A83_41E0_D36B9344C938",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.7,
   "hfov": 8.82
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DAAE84_CE5C_5B80_41DA_7500A784B52E",
   "pitch": 14.37,
   "yaw": 113.19,
   "hfov": 10.26,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D64EE5C1_CEC4_6980_41E8_DDC533C6DDC7",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.37,
   "hfov": 10.26
  }
 ]
},
{
 "items": [
  {
   "yaw": -45.9,
   "hfov": 9.72,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_5_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6AE7D6E_CECB_DE80_41B8_335C27BAF0A5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.3,
   "hfov": 9.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F, this.camera_CD923AE5_D0AE_4A7B_41E7_EFB0D3E844E8); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D62927B7_CECC_2980_41E4_563B53D39221",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_6_1_0_map.gif",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.84,
   "hfov": 50.91
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D78FFD01_CE7C_5E80_41C7_AFAECF90D365",
   "pitch": -30.96,
   "yaw": 1.05,
   "hfov": 11.08,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 02c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D7AE78BA_CEC4_2780_41B2_0110202F6618",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_7_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.96,
   "hfov": 11.08
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 75,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 75,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 58,
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_CC74EA9C_D0AE_4AC9_41CE_528F14886698); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D8A29487_CEDB_EF80_419F_33FE731146F1",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_0_1_0_map.gif",
      "width": 97,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "hfov": 42.07
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DB4E7F_CE5C_5B7F_41E1_BD120D816CC3",
   "pitch": 6.13,
   "yaw": -104.19,
   "hfov": 6.2,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9B6E353_CEC4_2A80_41BC_4F20CF6B1AE4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -104.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.13,
   "hfov": 6.2
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D, this.camera_CC110A56_D0AE_4A58_41D3_87E81A1CB65F); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D997019F_CEC4_2980_41D1_9C108758C121",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -33.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_2_1_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.19,
   "hfov": 22.33
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DBAE80_CE5C_5B81_41C2_61D2BA86C396",
   "pitch": 5.31,
   "yaw": -28.75,
   "hfov": 4.98,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D878992A_CEC4_2680_41CE_74CB826CCEFA",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.31,
   "hfov": 4.98
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38, this.camera_CC1C0A6E_D0AE_4A48_41DB_DE6F25D385FC); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D85638A4_CEC4_2780_41B5_09165DC37877",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -156.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_4_1_0_map.gif",
      "width": 100,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.24,
   "hfov": 50.87
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38, this.camera_CC097A86_D0AE_4AB8_41C6_F1E0BF7AE95C); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D921CD5E_CEC4_7E81_41D0_3F7A21EBA736",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_5_1_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.23,
   "hfov": 44.35
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4, this.camera_CC66FAA9_D0AE_4ACB_41E7_FD9D9DC9DFC5); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D8D9172D_CEC4_2A80_41D4_F77144961CFC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "yaw": 65.46,
   "hfov": 10.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_1_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 241
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D6C43758_CEC4_2A81_41E7_FD324B901302",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.87,
   "hfov": 10.05
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_C12E2B78_CE3D_FE91_41E3_95A32051E828",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DF611AA6_CE3C_3FB1_41C6_D54D1373D5EA",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_1_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_1_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_1_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199, this.camera_CCEBE9BD_D0AE_76CB_41C9_B13C2655E1D3); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DE8A111F_CEC4_2A8F_41D1_BC6AE0A95DD5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_2_1_6_map.gif",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.98,
   "hfov": 63.9
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DCCE7D_CE5C_5A83_41DC_BAB9D0BB892F",
   "pitch": -19.53,
   "yaw": 54.6,
   "hfov": 13.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE97DC3B_CEC4_3A97_41C5_1F73EC265345",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.53,
   "hfov": 13.19
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D8340F84_CEDC_5981_41E5_AD80BD97E6A1",
   "pitch": 2.22,
   "yaw": -144.04,
   "hfov": 8.55,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DE200451_CEC4_EA92_41BB_2E456CB56152",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_4_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.22,
   "hfov": 8.55
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C4487EEA_CE3D_F7B6_41E2_4DC956D58CDD, this.camera_CD1B3B59_D0AE_4A48_41DF_38EBA9EFE238); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D673BB8D_CEDD_D983_41D8_67BD2171DA53",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_0_1_0_map.gif",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.54,
   "hfov": 51.46
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D46994FA_CE3C_EF81_41E7_5AB3976CB9F9",
   "pitch": 6.69,
   "yaw": -0.57,
   "hfov": 4.4,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D7F6B3F4_CEDC_6981_41C2_A39209C1146C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.69,
   "hfov": 4.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_CD04AB66_D0AE_4A79_41D6_79F01C1E3592); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D4F943BD_CEDC_E983_41C5_A3BB47EF6921",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_2_1_0_map.gif",
      "width": 72,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.57,
   "hfov": 22.99
  }
 ]
},
{
 "items": [
  {
   "yaw": -23.4,
   "hfov": 6.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_3_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 136
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D7C6AA5C_CEDF_DA80_41E4_3AC6F9747CBA",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.4,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.79,
   "hfov": 6.02
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199, this.camera_CCD819EA_D0AE_7649_41E4_C53DC08F6E25); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_C043846D_CE5C_2AB3_41B7_DFE8756E284E",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_1_HS_0_1_0_map.gif",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.24,
   "hfov": 75.61
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199, this.camera_CCC6DA01_D0AE_75BB_41C4_02C31B0FA223); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_C050A39D_CE5D_ED93_41E1_3D498A52A756",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_1_HS_1_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "hfov": 26.58
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DC1E7B_CE5C_5A87_41C8_DCDD1E3C105D",
   "pitch": 10.32,
   "yaw": -151.82,
   "hfov": 6.14,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C0095878_CE44_3A91_41DC_A6A6B63B1CDD",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.32,
   "hfov": 6.14
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08, this.camera_CD2ABB49_D0AE_4A4B_41DF_F52D9787DF93); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D487977C_CE4F_EA80_417D_178F7E8DC3D2",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0_HS_0_1_0_map.gif",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.64,
   "hfov": 62.48
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D44EFCA2_CE4C_3F80_41D1_7E09C6451212",
   "pitch": 10.85,
   "yaw": -8.65,
   "hfov": 8.92,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D39A122E_CE4C_2A80_41C7_08FBFD7E888C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.85,
   "hfov": 8.92
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F, this.camera_CCD159D4_D0AE_7658_41E2_D80575C1AA06); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_DED4A907_CEC4_2680_41E0_46A75A5C23FD",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D9F5A9D3_CEC4_7987_41E3_8CE0998E023E",
   "pitch": -21.56,
   "yaw": -71.56,
   "hfov": 13.86,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_DDB642A0_CEC4_2B80_41C6_59CB5433636C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.56,
   "hfov": 13.86
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793, this.camera_CDCF0B2E_D0AE_4BC9_41E1_C6E12970EA76); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_C0240F4B_CE7C_D6F7_416C_BFEBA9C2F4BB",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 157
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.33,
   "hfov": 104.55
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D83BBF81_CEDC_5983_41D0_AFB869B1065A",
   "pitch": 7.71,
   "yaw": 98.75,
   "hfov": 11.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_C10006D4_CE7C_3792_41DF_F7578C8FFDB2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.71,
   "hfov": 11.74
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5, this.camera_CDDF1B20_D0AE_4BF9_41D8_D5551B4BA0B1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_C0C69303_CE7C_2E76_41E2_33E029D6575B",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_3_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_2_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7DC7E7C_CE5C_5A81_41D3_3D69A0F09D34",
   "pitch": -12,
   "yaw": 3.86,
   "hfov": 10.74,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03c"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D9048569_CEDC_2E80_41E2_E92601A948CC",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_3_0_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12,
   "hfov": 10.74
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_CC567AB5_D0AE_4ADB_41D3_98A77EA0716E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D9BE012D_CEC4_2680_4190_99F039A61DC2",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_1_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_2_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "yaw": 78.96,
   "hfov": 11.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_1_0.png",
      "width": 201,
      "class": "ImageResourceLevel",
      "height": 286
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D739A58A_CEC4_2980_41E2_908B23319E2F",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13.94,
   "hfov": 11.6
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C44A9A9F_CE3D_DF8F_41DA_1C6FAA355EBF_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D, this.camera_CD3ADB3B_D0AE_4BCF_41E8_6C885DC15057); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D9888EBD_CEC4_7B80_41BE_B715AC5038AC",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0_HS_0_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.08,
   "hfov": 71.01
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D467A4FC_CE3C_EF81_41B0_63A7114F8192",
   "pitch": 9.97,
   "yaw": -59.52,
   "hfov": 9.19,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D91D6616_CEC4_2A80_41A0_AC2E605E0C33",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.97,
   "hfov": 9.19
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7, this.camera_CDEEFB15_D0AE_4BD8_41CD_280A1EED1670); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_D6CA8517_CEC4_2E80_41E2_605FA9FC9C5C",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_D7D97E86_CE5C_5B80_41A1_AB1CA4116AD0",
   "pitch": 8.41,
   "yaw": 67.87,
   "hfov": 8.18,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_D7E05C1F_CEDC_3E80_41A1_64720410C0A2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.41,
   "hfov": 8.18
  }
 ]
},
{
 "angle": 0,
 "distance": 50,
 "rotate": false,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_tcap0",
 "inertia": false,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 45
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 110,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "horizontalAlign": "center",
 "gap": 10,
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "button menu sup"
 },
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "contentOpaque": false
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "height": "85.959%",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "gap": 3,
 "width": "91.304%",
 "shadow": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "contentOpaque": false,
 "visible": false
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D44FCC9F_CE4C_3F80_41C2_042BD843CD80",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45AAB88_CE3C_5E72_41E5_D6320712FF08_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4547588_CE44_6981_41BB_5F85814991C1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4554582_CE44_6981_41E0_D433B55C1521",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D4650503_CE3C_EE87_41E9_483430FC6F24",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45AF0BA_CE3C_2B91_41DF_743E2687574D_0_HS_6_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D454E585_CE44_6983_41D7_457D23FCACF1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DA9E82_CE5C_5B81_41E8_FDC5EC5955EA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DAAE84_CE5C_5B80_41DA_7500A784B52E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C449F804_CE3C_3A71_41E4_3FF553E905F7_0_HS_7_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D78FFD01_CE7C_5E80_41C7_AFAECF90D365",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DB4E7F_CE5C_5B7F_41E1_BD120D816CC3",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C44ACD26_CE3C_5ABE_41C2_30D77867026F_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DBAE80_CE5C_5B81_41C2_61D2BA86C396",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DCCE7D_CE5C_5A83_41DC_BAB9D0BB892F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C45B966C_CE3C_76B1_4188_3E419B63FAB5_1_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D8340F84_CEDC_5981_41E5_AD80BD97E6A1",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C448B1EA_CE3D_EDB6_41D0_BD61BE1277F4_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D46994FA_CE3C_EF81_41E7_5AB3976CB9F9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C5B58EF8_CE3C_D791_41E3_3F3C79C4F793_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DC1E7B_CE5C_5A87_41C8_DCDD1E3C105D",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C4BC2721_CE3C_76B2_41E4_11B444103737_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D44EFCA2_CE4C_3F80_41D1_7E09C6451212",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C440C1F9_CE3C_6D93_41D2_44B5DF2B0D38_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D9F5A9D3_CEC4_7987_41E3_8CE0998E023E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D83BBF81_CEDC_5983_41D0_AFB869B1065A",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C456CB4A_CE3C_5EF1_41D9_663EDF69E199_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7DC7E7C_CE5C_5A81_41D3_3D69A0F09D34",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C448955A_CE3C_2A96_41E4_706C38EFB18C_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D467A4FC_CE3C_EF81_41B0_63A7114F8192",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_C4482391_CE3C_2D93_41E8_F69144D8DCF0_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_D7D97E86_CE5C_5B80_41A1_AB1CA4116AD0",
 "frameDuration": 41
},
{
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "maxHeight": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "pressedIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_pressed.png",
 "maxHeight": 58,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 80,
 "paddingRight": 0,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "mode": "push",
 "height": 58,
 "click": "this.openLink('https://www.instagram.com/eyita.app/', '_blank')",
 "horizontalAlign": "center",
 "shadow": false,
 "data": {
  "name": "IconButton Instagram"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "mobileMipmappingEnabled": false,
 "shadow": false,
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "existsKey": function(key){  return key in window; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); }
 },
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "width": "100%",
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
