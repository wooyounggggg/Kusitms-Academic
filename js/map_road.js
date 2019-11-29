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
  styles: [
    {
      width: "53px",
      height: "52px",
      background: "url(cluster.png) no-repeat",
      color: "#fff",
      textAlign: "center",
      lineHeight: "54px"
    }
  ]
});
marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.55422131492838, 126.92301169467778)
});
clusterer.addMarker(marker);
marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.555440075383814, 126.9361204389213)
});
clusterer.addMarker(marker);
