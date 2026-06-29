var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Polgonos_Tursticos_1 = new ol.format.GeoJSON();
var features_Polgonos_Tursticos_1 = format_Polgonos_Tursticos_1.readFeatures(json_Polgonos_Tursticos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polgonos_Tursticos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polgonos_Tursticos_1.addFeatures(features_Polgonos_Tursticos_1);
var lyr_Polgonos_Tursticos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polgonos_Tursticos_1, 
                style: style_Polgonos_Tursticos_1,
                popuplayertitle: 'Polígonos_Turísticos ',
                interactive: true,
    title: 'Polígonos_Turísticos <br />\
    <img src="styles/legend/Polgonos_Tursticos_1_0.png" /> <br />\
    <img src="styles/legend/Polgonos_Tursticos_1_1.png" /> Cancha_Michaihue<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_2.png" /> Cancha_Vega<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_3.png" /> Cerro_Amarillo<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_4.png" /> Club_Hípico<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_5.png" /> E_Ester_Roa<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_6.png" /> Ex_Coperhua<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_7.png" /> L_Lo_Custodio<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_8.png" /> L_Lo_Mendez<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_9.png" /> Lagua_Las_T_Pascualas<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_10.png" /> Laguna_Lo_Custodio<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_11.png" /> Plaza_Belgica<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_12.png" /> Plaza_Condell<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_13.png" /> Plaza_Cruz<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_14.png" /> Plaza_Homero<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_15.png" /> Plaza_Indep_Ccp<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_16.png" /> Plaza_Los_Bunkers<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_17.png" /> Plaza_Thno<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_18.png" /> Ruinas_Teatro_EMG<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_19.png" /> Skatepark_LA<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_20.png" /> Templo_CCP<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_21.png" /> Laguna_Las_Tres_Pascualas<br />\
    <img src="styles/legend/Polgonos_Tursticos_1_22.png" /> Plaza independencia ccp<br />' });
var format_turistico_2 = new ol.format.GeoJSON();
var features_turistico_2 = format_turistico_2.readFeatures(json_turistico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_turistico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_turistico_2.addFeatures(features_turistico_2);
var lyr_turistico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_turistico_2, 
                style: style_turistico_2,
                popuplayertitle: 'turistico',
                interactive: true,
    title: 'turistico<br />\
    <img src="styles/legend/turistico_2_0.png" /> Templo Concepción<br />\
    <img src="styles/legend/turistico_2_1.png" /> Skatepark Lorenzo Arenas<br />\
    <img src="styles/legend/turistico_2_2.png" /> Ruinas Teatro Enrique Molina<br />\
    <img src="styles/legend/turistico_2_3.png" /> Plaza Los Bunkers<br />\
    <img src="styles/legend/turistico_2_4.png" /> Plaza Independencia CCP<br />\
    <img src="styles/legend/turistico_2_5.png" /> Plaza Homero<br />\
    <img src="styles/legend/turistico_2_6.png" /> Plaza Cruz<br />\
    <img src="styles/legend/turistico_2_7.png" /> Plaza Condell<br />\
    <img src="styles/legend/turistico_2_8.png" /> Plaza Bélgica<br />\
    <img src="styles/legend/turistico_2_9.png" /> Paseo Morro Talcahuano<br />\
    <img src="styles/legend/turistico_2_10.png" /> Mirador Humedal Rocuant<br />\
    <img src="styles/legend/turistico_2_11.png" /> Mirador Cerro Manquimavida<br />\
    <img src="styles/legend/turistico_2_12.png" /> Laguna Lo Mendez<br />\
    <img src="styles/legend/turistico_2_13.png" /> Laguna Lo Custodio<br />\
    <img src="styles/legend/turistico_2_14.png" /> Laguna Las Tres Pascualas<br />\
    <img src="styles/legend/turistico_2_15.png" /> Gimnasio Candelaria<br />\
    <img src="styles/legend/turistico_2_16.png" /> Ex Coperhua<br />\
    <img src="styles/legend/turistico_2_17.png" /> Estadio Ester Roa<br />\
    <img src="styles/legend/turistico_2_18.png" /> Club Hípico<br />\
    <img src="styles/legend/turistico_2_19.png" /> Club de Rehabilitados CAP<br />\
    <img src="styles/legend/turistico_2_20.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/turistico_2_21.png" /> Cancha Vega<br />\
    <img src="styles/legend/turistico_2_22.png" /> Cancha Michaihue<br />\
    <img src="styles/legend/turistico_2_23.png" /> Caleta Alto Del Rey<br />\
    <img src="styles/legend/turistico_2_24.png" /> <br />\
    <img src="styles/legend/turistico_2_25.png" /> Plaza de Armas Thno.<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_Polgonos_Tursticos_1.setVisible(true);lyr_turistico_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Polgonos_Tursticos_1,lyr_turistico_2];
lyr_Polgonos_Tursticos_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'X': 'X', 'Y': 'Y', });
lyr_turistico_2.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'X': 'X', 'Y': 'Y', 'categoria': 'categoria', 'MS.N.M': 'MS.N.M', 'Calle aled': 'Calle aled', 'Video': 'Video', });
lyr_Polgonos_Tursticos_1.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_turistico_2.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'categoria': 'TextEdit', 'MS.N.M': 'Range', 'Calle aled': 'TextEdit', 'Video': '', });
lyr_Polgonos_Tursticos_1.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_turistico_2.set('fieldLabels', {'id': 'inline label - always visible', 'nombre': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'categoria': 'inline label - always visible', 'MS.N.M': 'inline label - always visible', 'Calle aled': 'inline label - always visible', 'Video': 'inline label - visible with data', });
lyr_turistico_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});