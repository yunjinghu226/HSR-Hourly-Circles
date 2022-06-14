
// display the base map
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleHlzaHUyMjYiLCJhIjoiY2puMzl0bzRrMmR5eDNwcXZ6YTk1b2x4MSJ9.YExeZS4oHiM3y4zZtiWO7g';
  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/alexyshu226/cl456llkn000514pndxtg8n4g',
  center: [107.551,37.813],
  zoom: 3.49,
  doubleClickZoom: false
});

var cities = ['北京市', '九江市', '衡水市', '聊城市', '菏泽市', '阜阳市', '南昌市', '抚州市', '三明市', '莆田市', '吉安市', '赣州市', '惠州市', '南京市', '苏州市', '德州市', '嘉兴市', '唐山市', '秦皇岛市', '葫芦岛市', '盘锦市', '常州市', '锦州市', '营口市', '大连市', '上海市', '沧州市', '泰州市', '扬州市', '南通市', '盐城市', '淮安市', '宿迁市', '无锡市', '连云港市', '日照市', '青岛市', '潍坊市', '徐州市', '重庆城区', '恩施土家族苗族自治州', '宜昌市', '荆州市', '武汉市', '六安市', '合肥市', '镇江市', '杭州市', '金华市', '衢州市', '景德镇市', '烟台市', '威海市', '天门市', '天津市', '淄博市', '济南市', '潜江市', '遂宁市', '绍兴市', '宁波市', '温州市', '宁德市', '福州市', '泉州市', '厦门市', '漳州市', '台州市', '龙岩市', '仙桃市', '黄山市', '亳州市', '淮南市', '成都市', '广州市', '佛山市', '肇庆市', '贺州市', '桂林市', '贵阳市', '毕节市', '乐山市', '眉山市', '遵义市', '资阳市', '绵阳市', '宜宾市', '德阳市', '云浮市', '梧州市', '贵港市', '南宁市', '钦州市', '深圳市', '东莞市', '北海市', '广元市', '内江市', '汕尾市', '揭阳市', '汕头市', '梅州市', '百色市', '来宾市', '昆明市', '楚雄彝族自治州', '自贡市', '南充市', '汉中市', '陇南市', '江门市', '兰州市', '芜湖市', '宣城市', '鄂州市', '黄石市', '安顺市', '湖州市', '阳江市', '茂名市', '西宁市', '海东市', '西安市', '咸阳市', '中山市', '珠海市', '渭南市', '运城市', '临汾市', '柳州市', '广安市', '湛江市', '六盘水市', '太原市', '防城港市', '泸州市', '大理白族自治州', '哈尔滨市', '大庆市', '齐齐哈尔市', '长春市', '吉林市', '佳木斯市', '牡丹江市', '张家界市', '常德市', '益阳市', '长沙市', '株洲市', '郑州市', '焦作市', '开封市', '长治市', '晋城市', '晋中市', '张掖市', '酒泉市', '嘉峪关市', '哈密市', '吐鲁番市', '定西市', '天水市', '宝鸡市', '中卫市', '吴忠市', '银川市', '石家庄市', '阳泉市', '永州市', '湘潭市', '沈阳市', '本溪市', '丹东市', '马鞍山市', '铜陵市', '池州市', '安庆市', '忻州市', '呼和浩特市', '乌兰察布市', '大同市', '包头市', '丽水市', '玉溪市', '临沧市', '丽江市', '海口市', '临高县', '东方市', '三亚市', '万宁市', '琼海市', '文昌市', '陵水黎族自治县', '庆阳市', '攀枝花市', '怀化市', '衡阳市', '邵阳市', '孝感市', '雅安市', '黄冈市', '通辽市', '乌鲁木齐市', '保定市', '玉林市', '张家口市', '达州市', '河源市', '巴中市', '松原市', '白城市', '铁岭市', '新余市', '双鸭山市', '七台河市', '鸡西市', '鄂尔多斯市', '榆林市', '延安市', '巴彦淖尔市', '乌海市', '上饶市', '曲靖市', '普洱市', '西双版纳傣族自治州', '拉萨市', '山南市', '日喀则市', '林芝市', '辽阳市', '鞍山市', '阜新市', '朝阳市', '赤峰市', '吕梁市', '咸宁市', '随州市', '襄阳市', '十堰市', '石河子市', '克拉玛依市', '商丘市', '安康市', '铜川市', '铜仁市', '新乡市', '驻马店市', '信阳市', '邢台市', '邯郸市', '鹤壁市', '岳阳市', '安阳市', '娄底市', '韶关市', '许昌市', '漯河市', '洛阳市', '三门峡市', '萍乡市', '宜春市', '南阳市', '平顶山市', '郴州市', '清远市', '周口市', '枣庄市', '蚌埠市', '宿州市', '滁州市', '泰安市', '廊坊市', '鹰潭市', '济宁市', '承德市', '四平市', '淮北市']


// add functional features
map.on('load',function(){


  // add tileset sources
  map.addSource('boundary_line', {
    "type": "vector",
    "url": "mapbox://alexyshu226.9rg9792h"
  });

  map.addSource('destinations',{
    "type":"vector",
    "url":"mapbox://alexyshu226.b1zx2lzr"
  });

  map.addSource('circles',{
    "type":"vector",
    "url":"mapbox://alexyshu226.4qyi1d4g"
  });

  //add boundary layer
  map.addLayer({
    'id': 'boundary',
    'type': 'line',
    'source': 'boundary_line',
    'source-layer': 'province_boundaries_line-37maft', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'line-color': '#b8b8b8',
      'line-opacity': 1,
      'line-width': 1
    }
  });

  //add city and town dots with sized varied with destination numbers
  map.addLayer({
    'id': 'town-circles',
    'type': 'circle',
    'source': 'destinations',
    'source-layer': 'destination_counts-9uu7d3', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'circle-color': '#828282',
      'circle-opacity': 0.6,
      'circle-radius': [
        'interpolate',
            ['linear'],
            ['get', 'all_d_num'],
            1,3,
            50,6,
            413,15
      ]
    },
    'filter':['==','deep',2]
  });

  map.addLayer({
    'id': 'city-circles',
    'type': 'circle',
    'source': 'destinations',
    'source-layer': 'destination_counts-9uu7d3', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'circle-color': '#10640c',
      'circle-opacity': 0.6,
      'circle-radius': [
        'interpolate',
            ['linear'],
            ['get', 'all_d_num'],
            1,3,
            50,6,
            413,15
      ]
    },
    'filter':['==','deep',1]
  });

  //add destinations dots with identical style that appear with the hour circles
  map.addLayer({
    'id': 'city-dots',
    'type': 'circle',
    'source': 'destinations',
    'source-layer': 'destination_counts-9uu7d3', // name of tilesets
    'layout': {'visibility':'none'},
    'paint': {
      'circle-color': '#10640c',
      'circle-opacity': 1,
      'circle-radius': 4
    },
    'filter': ['==','deep',1]
  });

  map.addLayer({
    'id': 'town-dots',
    'type': 'circle',
    'source': 'destinations',
    'source-layer': 'destination_counts-9uu7d3', // name of tilesets
    'layout': {'visibility':'none'},
    'paint': {
      'circle-color': '#828282',
      'circle-opacity': 1,
      'circle-radius': 4
    },
    'filter': ['==','deep',2]
  });

  // add hour circle layers by cities
  map.addLayer({
    'id': 'city-hour-circles',
    'type': 'line',
    'source': 'circles',
    'source-layer': 'city_hour_circles-97x86u', // name of tilesets
    'layout': {'visibility': 'visible'},
    'paint': {
      'line-color': [
        'match',['get', 'time_range'],
        '0-30','#789b82',
        '30-90','#a4b899',
        '90-150','#cfdaaf',
        '150-210','#e7c5b1',
        '210-270','#e0afa9',
        '270-330','#c17b7b',
        'all_time','#cfcece','#000000'],
      'line-opacity': 1,
      'line-width': 4,
    },
    'filter': ['==','city','']
  });

  //add highlighed city dots when double clicked
  map.addLayer({
    'id': 'highlighted-city',
    'type': 'circle',
    'source': 'destinations',
    'source-layer': 'destination_counts-9uu7d3', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'circle-color': '#950909',
      'circle-opacity': 1,
      'circle-radius': 10
    },
    'filter': ['==','town','']
  });

  // double click on city to display the hour circles and switch destination circles to dots
  map.on('dblclick', function (e) {
    var city = map.queryRenderedFeatures(e.point, {
        layers: ['city-circles','city-dots']
    });

    if (city.length > 0) {
        var current_city = city[0].properties.town;
        map.setFilter('city-hour-circles', ["==", "city", current_city]);
        map.setFilter('highlighted-city', ["==", "town", current_city]);
        map.setLayoutProperty('city-circles','visibility','none');
        map.setLayoutProperty('town-circles','visibility','none');
        map.setLayoutProperty('city-dots','visibility','visible');
        map.setLayoutProperty('town-dots','visibility','visible');

    } else {
        map.setFilter('city-hour-circles',["==",'city','']);
        map.setFilter('highlighted-city', ["==", "town", '']);
        map.setLayoutProperty('city-circles','visibility','visible');
        map.setLayoutProperty('town-circles','visibility','visible');
        map.setLayoutProperty('city-dots','visibility','none');
        map.setLayoutProperty('town-dots','visibility','none');
    }
  });

  // pop up for the destination circles and dots
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.on('mouseenter', ['city-circles','town-circles','city-dots','town-dots'], (e) => {

    const coordinates = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.town;
    const province = e.features[0].properties.province;
    const num = e.features[0].properties.all_d_num;

    // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates).setHTML('<strong>'+name+'</strong><br/>省份：'+province+'<br/>可直达目的地数：<strong>'+num.toString()+'</strong>').addTo(map);
  });

  map.on('mouseleave', ['city-circles','town-circles','city-dots','town-dots'], () => {
    popup.remove();
  });

  // add hover hour circle layers
  map.addLayer({
    'id': 'hover-hour-circles',
    'type': 'line',
    'source': 'circles',
    'source-layer': 'city_hour_circles-97x86u', // name of tilesets
    'layout': {'visibility': 'visible'},
    'paint': {
      'line-color': [
        'match',['get', 'time_range'],
        '0-30','#789b82',
        '30-90','#a4b899',
        '90-150','#cfdaaf',
        '150-210','#e7c5b1',
        '210-270','#e0afa9',
        '270-330','#c17b7b',
        'all_time','#cfcece','#000000'],
      'line-opacity': 1,
      'line-width': 8,
    },
    'filter': ['all',['==','city',''],['==','time_range','']]
  });

  //add destinations in circles
  map.addLayer({
    'id': 'destination-in-circle',
    'type': 'circle',
    'source': 'destinations',
    'source-layer': 'destination_counts-9uu7d3', // name of tilesets
    'layout': {'visibility':'visible'},
    'paint': {
      'circle-color': '#ffffff',
      'circle-opacity': 1,
      'circle-radius': [
        'match',['get','deep'],
        1,4,3
      ],
      'circle-stroke-width':3,
      'circle-stroke-color':'#02325f'
    },
    'filter':['in','town','']
  });

  // highlight destinations when hour circle hovers
  map.on('click',function(e){
    var hc = map.queryRenderedFeatures(e.point,{
      layers:['city-hour-circles']
    });
    if (hc.length > 0) {
      var city = hc[0].properties.city;
      var time_range = hc[0].properties.time_range;
      var destinations = hc[0].properties.d_list.split(',');
      map.setFilter('hover-hour-circles',['all',['==','city',city],['==','time_range',time_range]]);
      map.setFilter('destination-in-circle',['in','town',...destinations]);
      map.setPaintProperty('city-dots','circle-radius',2);
      map.setPaintProperty('town-dots','circle-radius',2);
    } else {
      map.setFilter('hover-hour-circles',['all',['==','city',''],['==','time_range','']]);
      map.setFilter('destination-in-circle',['in','town','']);
      map.setPaintProperty('city-dots','circle-radius',4);
      map.setPaintProperty('town-dots','circle-radius',4);
    }
  });

  //change cursor to pointer when over clickable items
  map.on('mousemove',function(e){
    var mouse = map.queryRenderedFeatures(e.point,{
      layers:['city-circles','city-dots','city-hour-circles']
    });
    if (mouse.length > 0) {
      map.getCanvas().style.cursor = 'pointer';
    } else {
      map.getCanvas().style.cursor = '';
    };
  });

});
