(function() {
var colors = {
  fir : { strokeColor: '#FFFFFF', strokeOpacity: 0.5, strokeWeight: 1 },
  fir2: { strokeOpacity: 0, icons : [{ icon: { path: 'M-5-8l5,0M5,8l-5,0', strokeColor:'#FFFFFF', strokeOpacity: 0.5, scale: 1 }, offset: '0', repeat: '32px' }] },
  tma : { strokeColor: '#FFFFFF', strokeOpacity: 0.5, strokeWeight: 1 },
};
var pos = function(lat, lng) {
    return new google.maps.LatLng(lat, lng);
}

var route = function(type, path) {
    var options = colors[type];
    options.path = path;
    options.map = map;
    return new google.maps.Polyline(options);
};

var routefir = function(path) {
    var options = colors.fir;
    options.path = path;
    options.map = map;
    new google.maps.Polyline(options);
    options = colors.fir2;
    options.path = path;
    options.map = map;
    return new google.maps.Polyline(options);   
};

var fir  = routefir([pos(21.416667, 111.5), pos(19.5, 111.5), pos(16.666667, 114), pos(21, 117.5), pos(23.666667, 117.5),pos(23.485400, 117.464803),pos(23.460180, 117.411147),pos(23.501170, 117.261933),pos(23.488560, 117.218338),pos(23.393996, 117.246842),pos(23.387386,117.241513),pos(23.316529,117.180321),pos(23.316851,117.081764),pos(23.318546,116.983238),pos(23.318634,116.978056),pos(23.376760,116.915900),pos(23.307109,116.862161),pos(23.298913,116.865106),pos(23.238096,116.887804),pos(23.214218,116.880604),pos(23.166490,116.865698),pos(23.143578,116.828475),pos(23.132841,116.811180),pos(23.146975,116.735278),pos(23.148574,116.725464),pos(23.099296,116.654651),pos(23.077215,116.623193),pos(23.023012,116.622248),pos(22.984172,116.621571),pos(22.941416,116.592891),pos(22.875867,116.548316),pos(22.873189,116.534831),pos(22.860655,116.437411),pos(22.850676,116.361242),pos(22.857173,116.342209),pos(22.879079,116.281531),pos(22.859272,116.255900),pos(22.801223,116.180601),pos(22.768642,116.138786),pos(22.766765,116.095366),pos(22.764162,116.031775),pos(22.751584,116.000099),pos(22.715185,115.910254),pos(22.678262,115.820447),pos(22.698031,115.763885),pos(22.724172,115.741471),pos(22.751263,115.718550),pos(22.734087,115.660495),pos(22.730837,115.649096),pos(22.688951,115.614028),pos(22.662617,115.609099),pos(22.625271,115.601979),pos(22.625798,115.544701),pos(22.625904,115.532825),pos(22.637046,115.464292),pos(22.636240,115.447772),pos(22.631675,115.362048),pos(22.638946,115.352316),pos(22.697090,115.276949),pos(22.710180,115.259510),pos(22.706410,115.183564),pos(22.703913,115.127788),pos(22.677720,115.099704),pos(22.615787,115.032151),pos(22.613403,115.030585),pos(22.538419,114.975380),pos(22.535074,114.972777),pos(22.512428,114.907128),pos(22.515907,114.883951),pos(22.528883,114.786558),pos(22.536338,114.731927),pos(22.565247,114.702679),pos(22.645455,114.675212),pos(22.569309,114.648538),pos(22.562082,114.655214),pos(22.535114,114.681383),pos(22.483304,114.681129),pos(22.452606,114.680978),pos(22.435115,114.618534),pos(22.409082,114.525139),pos(22.419673,114.511788),pos(22.448937,114.510352),pos(22.452332,114.499541),pos(22.463836,114.500107),pos(22.467242,114.485684),pos(22.481146,114.486251),pos(22.487838,114.490911),pos(22.491710,114.482678),pos(22.498423,114.484773),pos(22.503217,114.482720),pos(22.510902,114.480684),pos(22.520939,114.490008),pos(22.529593,114.487460),pos(22.531027,114.489529),pos(22.533908,114.489024),pos(22.538719,114.481301),pos(22.540644,114.481824),pos(22.546405,114.479264),pos(22.545943,114.473586),pos(22.555082,114.464859),pos(22.562286,114.463329),pos(22.567568,114.462839),pos(22.568592,114.441178),pos(22.580581,114.440186),pos(22.599323,114.429932),pos(22.602226,114.417049),pos(22.607991,114.415002),pos(22.607534,114.406741),pos(22.610945,114.387409),pos(22.604756,114.367525),pos(22.606203,114.367529),pos(22.606695,114.359786),pos(22.601421,114.360281),pos(22.591397,114.340134),pos(22.602447,114.332427),pos(22.600077,114.325194),pos(22.596227,114.326732),pos(22.595769,114.320020),pos(22.599128,114.317448),pos(22.587643,114.301946),pos(22.580920,114.306575),pos(22.582370,114.298843),pos(22.579030,114.295229),pos(22.580006,114.287489),pos(22.585752,114.288012),pos(22.584316,114.282847),pos(22.587202,114.279770),pos(22.580984,114.272529),pos(22.571359,114.285397),pos(22.564656,114.283316),pos(22.564666,114.278169),pos(22.573788,114.270448),pos(22.564226,114.258047),pos(22.569034,114.253412),pos(22.560384,114.255974),pos(22.555597,114.248738),pos(22.558003,114.245654),pos(22.553691,114.241516),pos(22.565268,114.215239),pos(22.584680,114.198409),pos(22.578946,114.181359),pos(22.567945,114.159691),pos(22.542057,114.151394),pos(22.544000,114.133343),pos(22.536821,114.116311),pos(22.539716,114.102913),pos(22.536861,114.077632),pos(22.513835,114.070914),pos(22.519124,114.060092),pos(22.503784,114.052339),pos(22.504751,114.043577),pos(22.499967,114.020379),pos(22.508617,113.985317),pos(22.463545,113.968290),pos(22.409805,113.828632),pos(22.229299,113.665575),pos(22.159311,113.698101),pos(22.020936,113.557449),pos(21.967040,113.478958),pos(21.913103,113.400521),pos(21.859144,113.322131),pos(21.808991,113.248928),pos(21.808487,113.242247),pos(21.800909,113.144751),pos(21.793274,113.047784),pos(21.791215,113.018029),pos(21.732578,112.995789),pos(21.647021,112.963464),pos(21.567224,112.933710),pos(21.566240,112.927049),pos(21.546978,112.831853),pos(21.537091,112.783230),pos(21.538704,112.735564),pos(21.542350,112.638168),pos(21.545470,112.540770),pos(21.547093,112.503340),pos(21.594333,112.471643),pos(21.656356,112.430551),pos(21.656200,112.411065),pos(21.656310,112.313616),pos(21.656374,112.216165),pos(21.656373,112.216152),pos(21.656985,112.083811),pos(21.603482,112.058289),pos(21.573584,112.043766),pos(21.556649,111.984509),pos(21.416462,111.500131), pos(21.416667, 111.5)]);
//sanya
var fir1 = routefir([pos(16.666667, 114), pos(14.5, 114), pos(14.5, 112), pos(18.341111,107.681388), pos(19.267778,107.189722), pos(19.959167, 107.929722), pos(20.5, 108.05), pos(21.209722, 108.208611)]);
var fir2 = routefir([pos(20.5, 111.5), pos(20.5, 108.05)]);
var fir22 = routefir([pos(14.5, 114), pos(13, 114)]);
// taipei
var fir3 = routefir([pos(21, 117.5), pos(21, 121.5), pos(23.5, 124), pos(29, 124), pos(25, 120), pos(23, 117.5)]);
var fir4 = routefir([pos(21, 121.5), pos(21, 126)]);
//guangzhou
var fir5 = routefir([pos(23.5, 117.5), pos(23.7, 117.183333), pos(24.366667, 116.7), pos(24.673333, 115.408333), pos(25.091667, 115.416667), pos(26.05, 114.116667), pos(26.7, 113.95), pos(29.03333, 114.566667), pos(29.383333, 113.12), pos(29.516667, 109.4), pos(26.571667, 109.308333), pos(25.7,107.65), pos(24.65, 105.8), pos(23.195833, 105.541667)]);

var tma = route('tma', [pos(18.933333, 115.816667), pos(19, 112.5), pos(19.5, 111.5)]);
})();