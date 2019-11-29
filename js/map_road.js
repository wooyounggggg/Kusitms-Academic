var container = document.getElementById("map");

var options = {
  center: new kakao.maps.LatLng(37.554830695156097, 126.92956606679954),
  level: 5
};
var map = new kakao.maps.Map(container, options);

var markers;
var clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  markers: markers,
  gridSize: 35,
  averageCenter: true,
  minLevel: 6,
  disableClickZoom: true,
  styles: [{
    width: "53px",
    height: "52px",
    background: "url(cluster.png) no-repeat",
    color: "#fff",
    textAlign: "center",
    lineHeight: "54px"
  }]
});
marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.55422131492838, 126.92301169467778)
});
clusterer.addMarker(marker);
marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.555440075383814, 126.9361204389213)
});
clusterer.addMarker(marker);

var linePath = [
  new kakao.maps.LatLng(37.55422131492838, 126.92301169467778),
  new kakao.maps.LatLng(37.5528886181589, 126.924217188699),
  new kakao.maps.LatLng(37.5533765453674, 126.926412196563),
  new kakao.maps.LatLng(37.5538030104005, 126.928353788999),
  new kakao.maps.LatLng(37.5547409686393, 126.929887507003),
  new kakao.maps.LatLng(37.55728265162729, 126.93136886448296),
  new kakao.maps.LatLng(37.555440075383814, 126.9361204389213),
];

// 지도에 표시할 선을 생성합니다
var polyline = new kakao.maps.Polyline({
  path: linePath, // 선을 구성하는 좌표배열 입니다
  strokeWeight: 5, // 선의 두께 입니다
  strokeColor: '#EE63AE', // 선의 색깔입니다
  strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
  strokeStyle: 'solid' // 선의 스타일입니다
});

// 지도에 선을 표시합니다 
polyline.setMap(map);



/*위치 get*/
/*
var places = new kakao.maps.services.Places();

var callback = function (result, status) {
  if (status === kakao.maps.services.Status.OK) {
    console.log(result);
  }
};

places.keywordSearch('홍익대앞교차로', callback);
*/