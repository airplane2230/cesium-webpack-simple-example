import * as Cesium from 'cesium/Cesium';
// import {Viewer} from 'cesium/Cesium';

require('cesium/Widgets/widgets.css');
import OLCesium from 'ol-cesium';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import * as olProj from 'ol/proj.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';

// var viewer = new Cesium.Viewer('cesiumContainer');
// var viewer = new Viewer('cesiumContainer');

// ex: http://your_ip/hot/{z}/{x}/{y}.png
var url = 'your own\'s link or osm tile';
var png_map = new Cesium.UrlTemplateImageryProvider({
  url:url
});

var baseMap, mapViewr;
var extent = Cesium.Rectangle.fromDegrees(117.896284, 31.499028, 139.597380, 43.311528);
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.7;

var mapViewer = new Cesium.Viewer(
  'cesiumContainer',
  {
    timeline:false,
    animation:false,
    selectionIndicator:false,
    navigationHelpButton:false,
    infoBox:false,
    navigationInstructionsInitiallyVisible:false,
   baseLayerPicker:true
  }
);

var layers = mapViewer.scene.imageryLayers;
layers.addImageryProvider(png_map);

  // let tileWorldImagery = new TileLayer({
  //     source: new XYZ({
  //       url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  //       crossOrigin: 'Anonymous',
  //     })
  //   });

  // let map = new Map({
  //   target: "map",
  //   projection: 'EPSG:3857',
  //   layers: [
  //     tileWorldImagery
  //   ],
  //   view: new View({
  //     center: olProj.fromLonLat([134.364805, -26.710497]),
  //     zoom: 4,
  //     minZoom: 2,
  //   }),
  // });
  
  // const ol3d = new OLCesium({map: map}); // map is the ol.Map instance
  // ol3d.setEnabled(true);
  // window.ol3d = ol3d; // temporary hack for easy console debugging