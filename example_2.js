$(function() {
    // Setup leaflet map
    var map = new L.Map('map',{
        center: [-6.17455182987, 106.844726759],
        zoom: 18,
		zoomControl: false
        });
		
		var elem = document.documentElement;
		var toggle = L.easyButton({
		  states: [{
			stateName: 'add-markers',
			icon: 'fa fa-arrows-alt',
			title: 'View Fullscreen, press esc to exit full screen',
			onClick: function openFullscreen() {
					  if (elem.requestFullscreen) {
						elem.requestFullscreen();
					  } else if (elem.mozRequestFullScreen) { /* Firefox */
						elem.mozRequestFullScreen();
					  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
						elem.webkitRequestFullscreen();
					  } else if (elem.msRequestFullscreen) { /* IE/Edge */
						elem.msRequestFullscreen();
					  }
					}
		  }]
		  });
			toggle.addTo(map);
			
		
			var mapboxUrl = 'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
			var accessToken = 'pk.eyJ1Ijoid2FoeXVkbSIsImEiOiJjazliYzh2YmcwMnduM2hueWV3a3ozbW5sIn0.VXnWR-rP0rVVR5Z8tqCBqA';

			var grayscale = L.tileLayer(mapboxUrl, {id: 'dark-v9', attribution: '', maxZoom: 20, accessToken: accessToken});
			var streets = L.tileLayer(mapboxUrl, {id: 'streets-v9', attribution: '', maxZoom: 20, accessToken: accessToken}).addTo(map);
			
			var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
			});
			
			var google = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
		   maxZoom: 20,
		   subdomains:['mt0','mt1','mt2','mt3'],
		   attribution: 'Google Satellite'
		   });
		   
		   var gmaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
		   maxZoom: 20,
		   subdomains:['mt0','mt1','mt2','mt3'],
		   attribution: 'Google Streets'
			});

			map.attributionControl.setPrefix('');

			var data = [
			{"loc":[-6.1766309,106.8304899], "title":"Stasiun Gambir", "info":"<a href='https://www.google.com/maps/place/-6.1766309,106.8304899'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Gambir</a> <br><img src='gambar/Gambir.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.1747185,106.844333], "title":"Stasiun Pasar Senen", "info":"<a href='https://www.google.com/maps/place/-6.1747185,106.844333'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pasar Senen</a> <br><img src='gambar/Senen.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.209878,106.8502174], "title":"Stasiun Manggarai", "info":"<a href='https://www.google.com/maps/place/-6.209878,106.8502174'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Manggarai</a> <br><img src='gambar/Manggarai.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2152273,106.8703446], "title":"Stasiun Jatinegara", "info":"<a href='https://www.google.com/maps/place/-6.2152273,106.8703446'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jatinegara</a> <br><img src='gambar/Jatinegara.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2193255,106.9523325], "title":"Stasiun Cakung", "info":"<a href='https://www.google.com/maps/place/-6.2193255,106.9523325'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cakung</a> <br><img src='gambar/Cakung.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2361393,106.9994797], "title":"Stasiun Bekasi", "info":"<a href='https://www.google.com/maps/place/-6.2361393,106.9994797'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bekasi</a> <br><img src='gambar/Bekasi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2587068,107.0558152], "title":"Stasiun Tambun", "info":"<a href='https://www.google.com/maps/place/-6.2587068,107.0558152'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tambun</a> <br><img src='gambar/Tambun.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.255403,107.1451267], "title":"Stasiun Cikarang", "info":"<a href='https://www.google.com/maps/place/-6.255403,107.1451267'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikarang</a> <br><img src='gambar/Cikarang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2705733,107.1798401], "title":"Stasiun Lemahabang", "info":"<a href='https://www.google.com/maps/place/-6.2705733,107.1798401'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Lemahabang</a> <br><img src='gambar/Lemahabang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.2700584,107.2612263], "title":"Stasiun Kedunggedeh", "info":"<a href='https://www.google.com/maps/place/-6.2700584,107.2612263'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kedunggedeh</a> <br><img src='gambar/Kedunggedeh.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.3052285,107.3001498], "title":"Stasiun Karawang", "info":"<a href='https://www.google.com/maps/place/-6.3052285,107.3001498'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karawang</a> <br><img src='gambar/Karawang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.349927,107.3453097], "title":"Stasiun Klari", "info":"<a href='https://www.google.com/maps/place/-6.349927,107.3453097'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Klari</a> <br><img src='gambar/Klari.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.369167,107.3746655], "title":"Stasiun Kosambi", "info":"<a href='https://www.google.com/maps/place/-6.369167,107.3746655'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kosambi</a> <br><img src='gambar/Kosambi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.393221,107.4332273], "title":"Stasiun Dawuan", "info":"<a href='https://www.google.com/maps/place/-6.393221,107.4332273'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Dawuan</a> <br><img src='gambar/Dawuan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4061293,107.4589963], "title":"Stasiun Cikampek", "info":"<a href='https://www.google.com/maps/place/-6.4061293,107.4589963'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikampek</a> <br><img src='gambar/Cikampek.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4083877,107.5406358], "title":"Stasiun Tanjungrasa", "info":"<a href='https://www.google.com/maps/place/-6.4083877,107.5406358'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tanjungrasa</a> <br><img src='gambar/Tanjungrasa.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4092452,107.584019], "title":"Stasiun Pabuaran", "info":"<a href='https://www.google.com/maps/place/-6.4092452,107.584019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pabuaran</a> <br><img src='gambar/Pabuaran.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4181861,107.6344593], "title":"Stasiun Pringkasap", "info":"<a href='https://www.google.com/maps/place/-6.4181861,107.6344593'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pringkasap</a> <br><img src='gambar/Pringkasap.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4264075,107.6885019], "title":"Stasiun Pasirbungur", "info":"<a href='https://www.google.com/maps/place/-6.4264075,107.6885019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pasirbungur</a> <br><img src='gambar/Pasirbungur.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4355589,107.7396058], "title":"Stasiun Cikaum", "info":"<a href='https://www.google.com/maps/place/-6.4355589,107.7396058'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cikaum</a> <br><img src='gambar/Cikaum.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4537701,107.8171019], "title":"Stasiun Pegadenbaru", "info":"<a href='https://www.google.com/maps/place/-6.4537701,107.8171019'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Pegadenbaru</a> <br><img src='gambar/Pegadenbaru.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4554184,107.8830859], "title":"Stasiun Cipunegara", "info":"<a href='https://www.google.com/maps/place/-6.4554184,107.8830859'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cipunegara</a> <br><img src='gambar/Cipunegara.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4586318,107.9409389], "title":"Stasiun Haurgeulis", "info":"<a href='https://www.google.com/maps/place/-6.4586318,107.9409389'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Haurgeulis</a> <br><img src='gambar/Haurgeulis.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4639811,108.0352762], "title":"Stasiun Cilegeh", "info":"<a href='https://www.google.com/maps/place/-6.4639811,108.0352762'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cilegeh</a> <br><img src='gambar/Cilegeh.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4677987,108.1067379], "title":"Stasiun Kadokangabus", "info":"<a href='https://www.google.com/maps/place/-6.4677987,108.1067379'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kadokangabus</a> <br><img src='gambar/Kadokangabus.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.46987,108.1609946], "title":"Stasiun Terisi", "info":"<a href='https://www.google.com/maps/place/-6.46987,108.1609946'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Terisi</a> <br><img src='gambar/Terisi.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4647363,108.2346823], "title":"Stasiun Telagasari", "info":"<a href='https://www.google.com/maps/place/-6.4647363,108.2346823'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Telagasari</a> <br><img src='gambar/Telagasari.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.4728392,108.3063283], "title":"Stasiun Jatibarang", "info":"<a href='https://www.google.com/maps/place/-6.4728392,108.3063283'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jatibarang</a> <br><img src='gambar/Jatibarang.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.5283802,108.3532988], "title":"Stasiun Kertasemaya", "info":"<a href='https://www.google.com/maps/place/-6.5283802,108.3532988'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kertasemaya</a> <br><img src='gambar/Kertasemaya.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.6446634,108.4145435], "title":"Stasiun Arjawinangun", "info":"<a href='https://www.google.com/maps/place/-6.6446634,108.4145435'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Arjawinangun</a> <br><img src='gambar/Arjawinangun.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.6630732,108.4599957], "title":"Stasiun Bangoduwa", "info":"<a href='https://www.google.com/maps/place/-6.6630732,108.4599957'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bangoduwa</a> <br><img src='gambar/Bangoduwa.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.679535,108.5006765], "title":"Stasiun Cangkring", "info":"<a href='https://www.google.com/maps/place/-6.679535,108.5006765'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cangkring</a> <br><img src='gambar/Cangkring.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7052739,108.55555], "title":"Stasiun Cirebon", "info":"<a href='https://www.google.com/maps/place/-6.7052739,108.55555'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cirebon</a> <br><img src='gambar/Cirebon.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7193421,108.5588038], "title":"Stasiun Cirebon Prujakan", "info":"<a href='https://www.google.com/maps/place/-6.7193421,108.5588038'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Cirebon Prujakan</a> <br><img src='gambar/Prujakan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.7777247,108.5930935], "title":"Stasiun Luwung", "info":"<a href='https://www.google.com/maps/place/-6.7777247,108.5930935'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Luwung</a> <br><img src='gambar/Luwung.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.832756,108.6259513], "title":"Stasiun Sindanglaut", "info":"<a href='https://www.google.com/maps/place/-6.832756,108.6259513'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sindanglaut</a> <br><img src='gambar/Sindanglaut.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9029226,108.7439859], "title":"Stasiun Ciledug", "info":"<a href='https://www.google.com/maps/place/-6.9029226,108.7439859'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ciledug</a> <br><img src='gambar/Ciledug.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9382946,108.8843762], "title":"Stasiun Ketanggungan", "info":"<a href='https://www.google.com/maps/place/-6.9382946,108.8843762'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ketanggungan</a> <br><img src='gambar/Ketanggungan.jpg' width='305' height='55' /></a>"},
			{"loc":[-6.9905456,108.9486991], "title":"Stasiun Larangan", "info":"<a href='https://www.google.com/maps/place/-6.9905456,108.9486991'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Larangan</a> <br><img src='gambar/Larangan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.0245279,108.9888423], "title":"Stasiun Songgom", "info":"<a href='https://www.google.com/maps/place/-7.0245279,108.9888423'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Songgom</a> <br><img src='gambar/Songgom.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.1228194,108.9826878], "title":"Stasiun Prupuk", "info":"<a href='https://www.google.com/maps/place/-7.1228194,108.9826878'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Prupuk</a> <br><img src='gambar/Prupuk.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.1849349,109.0124701], "title":"Stasiun Linggapura", "info":"<a href='https://www.google.com/maps/place/-7.1849349,109.0124701'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Linggapura</a> <br><img src='gambar/Linggapura.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.2374021,109.0098136], "title":"Stasiun Bumiayu", "info":"<a href='https://www.google.com/maps/place/-7.2374021,109.0098136'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Bumiayu</a> <br><img src='gambar/Bumiayu.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.2855943,109.0297816], "title":"Stasiun Kretek", "info":"<a href='https://www.google.com/maps/place/-7.2855943,109.0297816'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kretek</a> <br><img src='gambar/Kretek.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3281891,109.0576696], "title":"Stasiun Patuguran", "info":"<a href='https://www.google.com/maps/place/-7.3281891,109.0576696'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Patuguran</a> <br><img src='gambar/Patuguran.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3824967,109.1211045], "title":"Stasiun Karangsari", "info":"<a href='https://www.google.com/maps/place/-7.3824967,109.1211045'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karangsari</a> <br><img src='gambar/Karangsari.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.3884039,109.1859918], "title":"Stasiun Karanggandul", "info":"<a href='https://www.google.com/maps/place/-7.3884039,109.1859918'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karanggandul</a> <br><img src='gambar/Karanggandul.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.4192276,109.2219922], "title":"Stasiun Purwokerto", "info":"<a href='https://www.google.com/maps/place/-7.4192276,109.2219922'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Purwokerto</a> <br><img src='gambar/Purwokerto.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.485911,109.2134084], "title":"Stasiun Notog", "info":"<a href='https://www.google.com/maps/place/-7.485911,109.2134084'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Notog</a> <br><img src='gambar/Notog.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.5324943,109.2040465], "title":"Stasiun Kebasen", "info":"<a href='https://www.google.com/maps/place/-7.5324943,109.2040465'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kebasen</a> <br><img src='gambar/Kebasen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.5699609,109.2199129], "title":"Stasiun Randegan", "info":"<a href='https://www.google.com/maps/place/-7.5699609,109.2199129'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Randegan</a> <br><img src='gambar/Randegan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6302529,109.2535622], "title":"Stasiun Kroya", "info":"<a href='https://www.google.com/maps/place/-7.6302529,109.2535622'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kroya</a> <br><img src='gambar/Kroya.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6214037,109.3150298], "title":"Stasiun Kemranjen", "info":"<a href='https://www.google.com/maps/place/-7.6214037,109.3150298'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kemranjen</a> <br><img src='gambar/Kemranjen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6150948,109.3611648], "title":"Stasiun Sumpiuh", "info":"<a href='https://www.google.com/maps/place/-7.6150948,109.3611648'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sumpiuh</a> <br><img src='gambar/Sumpiuh.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6130186,109.4086212], "title":"Stasiun Tambak", "info":"<a href='https://www.google.com/maps/place/-7.6130186,109.4086212'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Tambak</a> <br><img src='gambar/Tambak.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.615265,109.4469526], "title":"Stasiun Ijo", "info":"<a href='https://www.google.com/maps/place/-7.615265,109.4469526'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Ijo</a> <br><img src='gambar/Ijo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6105735,109.5078155], "title":"Stasiun Gombong", "info":"<a href='https://www.google.com/maps/place/-7.6105735,109.5078155'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Gombong</a> <br><img src='gambar/Gombong.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6331663,109.5734925], "title":"Stasiun Karanganyar", "info":"<a href='https://www.google.com/maps/place/-7.6331663,109.5734925'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Karanganyar</a> <br><img src='gambar/Karanganyar.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6552086,109.6030665], "title":"Stasiun Sruweng", "info":"<a href='https://www.google.com/maps/place/-7.6552086,109.6030665'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sruweng</a> <br><img src='gambar/Sruweng.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6791334,109.6395574], "title":"Stasiun Soka", "info":"<a href='https://www.google.com/maps/place/-7.6791334,109.6395574'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Soka</a> <br><img src='gambar/Soka.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6817128,109.6621947], "title":"Stasiun Kebumen", "info":"<a href='https://www.google.com/maps/place/-7.6817128,109.6621947'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kebumen</a> <br><img src='gambar/Kebumen.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.6973976,109.7013199], "title":"Stasiun Wonosari", "info":"<a href='https://www.google.com/maps/place/-7.6973976,109.7013199'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wonosari</a> <br><img src='gambar/Wonosari.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7168199,109.7342951], "title":"Stasiun Kutowinangun", "info":"<a href='https://www.google.com/maps/place/-7.7168199,109.7342951'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kutowinangun</a> <br><img src='gambar/Kutowinangun.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7243091,109.7981071], "title":"Stasiun Prembun", "info":"<a href='https://www.google.com/maps/place/-7.7243091,109.7981071'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Prembun</a> <br><img src='gambar/Prembun.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7243242,109.8585004], "title":"Stasiun Butuh", "info":"<a href='https://www.google.com/maps/place/-7.7243242,109.8585004'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Butuh</a> <br><img src='gambar/Butuh.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7258869,109.9071841], "title":"Stasiun Kutoarjo", "info":"<a href='https://www.google.com/maps/place/-7.7258869,109.9071841'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Kutoarjo</a> <br><img src='gambar/Kutoarjo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8027515,110.0012486], "title":"Stasiun Jenar", "info":"<a href='https://www.google.com/maps/place/-7.8027515,110.0012486'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Jenar</a> <br><img src='gambar/Jenar.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8619388,110.0404738], "title":"Stasiun Wojo", "info":"<a href='https://www.google.com/maps/place/-7.8619388,110.0404738'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wojo</a> <br><img src='gambar/Wojo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8595563,110.1579272], "title":"Stasiun Wates", "info":"<a href='https://www.google.com/maps/place/-7.8595563,110.1579272'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Wates</a> <br><img src='gambar/Wates.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.8332315,110.2201313], "title":"Stasiun Sentolo", "info":"<a href='https://www.google.com/maps/place/-7.8332315,110.2201313'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Sentolo</a> <br><img src='gambar/Sentolo.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7960004,110.2842375], "title":"Stasiun Rewulu", "info":"<a href='https://www.google.com/maps/place/-7.7960004,110.2842375'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Rewulu</a> <br><img src='gambar/Rewulu.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.790877,110.3253908], "title":"Stasiun Patukan", "info":"<a href='https://www.google.com/maps/place/-7.790877,110.3253908'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Patukan</a> <br><img src='gambar/Patukan.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7892755,110.3638738], "title":"Stasiun Yogyakarta", "info":"<a href='https://www.google.com/maps/place/-7.7892755,110.3638738'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Yogyakarta</a> <br><img src='gambar/Yogyakarta.jpg' width='305' height='55' /></a>"},
			{"loc":[-7.7902301,110.3754493], "title":"Stasiun Lempuyangan", "info":"<a href='https://www.google.com/maps/place/-7.7902301,110.3754493'target='_blank' style='margin:auto; text-align:center; display:block;'>Stasiun Lempuyangan</a> <br><img src='gambar/Lempuyangan.jpg' width='305' height='55' /></a>"}
			];
			
			var markersLayer = new L.LayerGroup();	//layer contain searched elements
	
			map.addLayer(markersLayer);

			var controlSearch = new L.Control.Search({
				position:'topright',		
				layer: markersLayer,
				textPlaceholder: 'Cari Stasiun...',
				textErr: 'Hanya Menampilkan Stasiun yang DIlewati <br> Kereta Api Rute Jakarta - Yogyakarta',
				initial: false,
				zoom: 18,
				marker: false
			});
			controlSearch.on('search:locationfound', function(e) {
				e.layer.openPopup();
				});
			map.addControl( controlSearch );
			
			var smallIcon = L.icon({
				iconUrl: 'images/st3.png',
				iconSize:     [15, 15],
				iconAnchor:   [4, 13],
				popupAnchor:  [3, -12]
			});
			
			var bigIcon = L.icon({
				iconUrl: 'images/st2.png',
				iconSize:     [35, 35],
				iconAnchor:   [9, 30],
				popupAnchor:  [7, -28]
			});
			
			
			////////////populate map with markers from sample data
			for(i in data) {
				var title = data[i].title,	//value searched
					loc = data[i].loc,		//position found
					info = data[i].info,
					marker = new L.Marker(new L.latLng(loc), {title: title, icon: smallIcon});//se property searched
				marker.bindPopup(info);
				markersLayer.addLayer(marker);
			}

			var data1 = [
				{"loc":[-6.91468315,107.6018077], "title":"Stasiun Bandung"},
				{"loc":[-7.59858885,112.77808913], "title":"Stasiun Bangil"},
				{"loc":[-7.37629635,108.54265293], "title":"Stasiun Banjar"},
				{"loc":[-8.22288472,114.34080012], "title":"Stasiun Banyuwangi"},
				{"loc":[-6.23648781,106.99902718], "title":"Stasiun Bekasi"},
				{"loc":[-8.10113104,112.16238322], "title":"Stasiun Blitar"},
				{"loc":[-7.16427559,111.88668106], "title":"Stasiun Bojonegoro"},
				{"loc":[-6.59562804,106.79037142], "title":"Stasiun Bogor"},
				{"loc":[-7.2373831,109.00978235], "title":"Stasiun Bumiayu"},
				{"loc":[-7.5511063,111.65478802], "title":"Stasiun Caruban"},
				{"loc":[-6.24266131,106.85880273], "title":"Stasiun Cawang"},
				{"loc":[-7.32917896,108.3559307], "title":"Stasiun Ciamis"},
				{"loc":[-6.98138228,107.83272863], "title":"Stasiun Cicalengka"},
				{"loc":[-6.742197,106.803104], "title":"Stasiun Cigombong"},
				{"loc":[-6.40616372,107.45823201], "title":"Stasiun Cikampek"},
				{"loc":[-6.2554302,107.14529725], "title":"Stasiun Cikarang"},
				{"loc":[-6.43556999,107.73959455], "title":"Stasiun Cikaum"},
				{"loc":[-6.918804,107.62589], "title":"Stasiun Cikudapateu"},
				{"loc":[-6.88559384,107.53585923], "title":"Stasiun Cimahi"},
				{"loc":[-7.093561,108.100454], "title":"Stasiun Cipeundeuy"},
				{"loc":[-6.214316,106.886106], "title":"Stasiun Cipinang"},
				{"loc":[-6.70626629,108.55578356], "title":"Stasiun Cirebon"},
				{"loc":[-6.719282,108.5588], "title":"Stasiun Cirebon Prujakan"},
				{"loc":[-6.913973,106.887504], "title":"Stasiun Cisaat"},
				{"loc":[-6.39306778,107.43328473], "title":"Stasiun Dawuan"},
				{"loc":[-6.17781818,106.83000043], "title":"Stasiun Gambir"},
				{"loc":[-7.388968,112.728455], "title":"Stasiun Gedangan"},
				{"loc":[-6.940719,107.689463], "title":"Stasiun Gedebage"},
				{"loc":[-7.498011,111.4186], "title":"Stasiun Geneng"},
				{"loc":[-6.185644,106.83258], "title":"Stasiun Gondangdia"},
				{"loc":[-6.458588,107.940879], "title":"Stasiun Haurgeulis"},
				{"loc":[-6.21484477,106.87169415], "title":"Stasiun Jatinegara"},
				{"loc":[-8.16525569,113.70317507], "title":"Stasiun Jember"},
				{"loc":[-7.802712,110.001232], "title":"Stasiun Jenar"},
				{"loc":[-7.55833366,112.23313746], "title":"Stasiun Jombang"},
				{"loc":[-7.633225,109.573441], "title":"Stasiun Karanganyar"},
				{"loc":[-6.3048124,107.29976799], "title":"Stasiun Karawang"},
				{"loc":[-7.6820321,109.66264305], "title":"Stasiun Kebumen"},
				{"loc":[-7.81741395,112.01548657], "title":"Stasiun Kediri"},
				{"loc":[-6.269994,107.26092], "title":"Stasiun Kedunggedeh"},
				{"loc":[-7.621356,109.315025], "title":"Stasiun Kemranjen"},
				{"loc":[-7.59197582,112.10009371], "title":"Stasiun Kertosono"},
				{"loc":[-6.938282,108.884343], "title":"Stasiun Ketanggungan"},
				{"loc":[-6.92465373,107.64665079], "title":"Stasiun Kiaracondong"},
				{"loc":[-7.71253927,110.60270383], "title":"Stasiun Klaten"},
				{"loc":[-6.213139,106.899326], "title":"Stasiun Klender"},
				{"loc":[-6.369392,107.37495071], "title":"Stasiun Kosambi"},
				{"loc":[-7.948708,111.960322], "title":"Stasiun Kras"},
				{"loc":[-7.63018742,109.25360949], "title":"Stasiun Kroya"},
				{"loc":[-7.72616372,109.90629185], "title":"Stasiun Kutoarjo"},
				{"loc":[-7.71683,109.734297], "title":"Stasiun Kutowinangun"},
				{"loc":[-7.112529,112.420181], "title":"Stasiun Lamongan"},
				{"loc":[-7.8367,112.697624], "title":"Stasiun Lawang"},
				{"loc":[-7.084536,107.89965], "title":"Stasiun Leles"},
				{"loc":[-6.270507,107.179534], "title":"Stasiun Lemah Abang"},
				{"loc":[-7.79009524,110.37415035], "title":"Stasiun Lempuyangan"},
				{"loc":[-7.61890853,111.52383068], "title":"Stasiun Madiun"},
				{"loc":[-7.785017,110.436865], "title":"Stasiun Maguwo"},
				{"loc":[-7.97744988,112.63764538], "title":"Stasiun Malang"},
				{"loc":[-6.21025714,106.849606], "title":"Stasiun Manggarai"},
				{"loc":[-7.47239991,112.43359738], "title":"Stasiun Mojokerto"},
				{"loc":[-7.018753,107.887423], "title":"Stasiun Nagreg"},
				{"loc":[-8.102927,112.011953], "title":"Stasiun Ngunut"},
				{"loc":[-7.48588,109.213436], "title":"Stasiun Notog"},
				{"loc":[-6.409213,107.584015], "title":"Stasiun Pabuaran"},
				{"loc":[-6.84262117,107.49714893], "title":"Stasiun Padalarang"},
				{"loc":[-7.697604,112.079506], "title":"Stasiun Papar"},
				{"loc":[-7.442147,111.386492], "title":"Stasiun Paron"},
				{"loc":[-6.1751549,106.84459052], "title":"Stasiun Pasar Senen"},
				{"loc":[-7.63786,112.910008], "title":"Stasiun Pasuruan"},
				{"loc":[-6.453729,107.816754], "title":"Stasiun Pegadenbaru"},
				{"loc":[-6.88977483,109.66399064], "title":"Stasiun Pekalongan"},
				{"loc":[-6.887358,109.388207], "title":"Stasiun Pemalang"},
				{"loc":[-6.552759,107.44647], "title":"Stasiun Purwakarta"},
				{"loc":[-7.41908307,109.22154517], "title":"Stasiun Purwokerto"},
				{"loc":[-7.56171817,110.79622625], "title":"Stasiun Purwosari"},
				{"loc":[-7.192286,111.398026], "title":"Stasiun Randublatung"},
				{"loc":[-6.97270578,110.41452072], "title":"Stasiun Semarang Poncol"},
				{"loc":[-6.96502519,110.42758466], "title":"Stasiun Semarang Tawang"},
				{"loc":[-7.582631,112.167064], "title":"Stasiun Sembung"},
				{"loc":[-7.347183,112.69748], "title":"Stasiun Sepanjang"},
				{"loc":[-7.486315,108.807524], "title":"Stasiun Sidareja"},
				{"loc":[-7.45675591,112.71273101], "title":"Stasiun Sidoarjo"},
				{"loc":[-7.55720303,110.82102849], "title":"Stasiun Solo Balapan"},
				{"loc":[-7.56221176,110.83949093], "title":"Stasiun Solo Jebres"},
				{"loc":[-7.42928693,111.01785779], "title":"Stasiun Sragen"},
				{"loc":[-6.92507118,106.92959345], "title":"Stasiun Sukabumi"},
				{"loc":[-7.61515432,109.36116497], "title":"Stasiun Sumpiuh"},
				{"loc":[-7.2657093,112.7530779], "title":"Stasiun Surabaya Gubeng"},
				{"loc":[-7.24896672,112.73114745], "title":"Stasiun Surabaya Pasarturi"},
				{"loc":[-6.25851998,107.05517649], "title":"Stasiun Tambun"},
				{"loc":[-6.18613938,106.81089537], "title":"Stasiun Tanah Abang"},
				{"loc":[-6.110915,106.881112], "title":"Stasiun Tanjung Priuk "},
				{"loc":[-7.32237634,108.22381984], "title":"Stasiun Tasikmalaya"},
				{"loc":[-6.86843366,109.14270185], "title":"Stasiun Tegal"},
				{"loc":[-8.06354478,111.90454911], "title":"Stasiun Tulungagung"},
				{"loc":[-7.35308232,112.72927528], "title":"Stasiun Waru"},
				{"loc":[-7.85963138,110.15720899], "title":"Stasiun Wates"},
				{"loc":[-6.97091878,110.06970009], "title":"Stasiun Weleri"},
				{"loc":[-7.81591048,110.9219065], "title":"Stasiun Wonogiri"},
				{"loc":[-7.30228261,112.73876629], "title":"Stasiun Wonokromo"},
				{"loc":[-7.69730471,109.70123658], "title":"Stasiun Wonosari"},
				{"loc":[-7.78968799,110.36529828], "title":"Stasiun Yogyakarta"}
			]

			var markersLayer1 = new L.LayerGroup();	//layer contain searched elements
	
			map.addLayer(markersLayer1);

			var controlSearch1 = new L.Control.Search({
				container: 'findbox',		
				layer: markersLayer1,
				textPlaceholder: 'Lokasi Komplain, ketik stasiun..',
				textErr: 'Tidak ada komplain di lokasi tersebut.',
				initial: false,
				zoom: 18,
				marker: false,
				collapsed: false
			});
			map.addControl( controlSearch1 );

			for(i in data1) {
				var title = data1[i].title,	//value searched
					loc = data1[i].loc,		//position found
					info = data1[i].info,
					marker = new L.Marker(new L.latLng(loc), {title: title,  opacity: 0});//se property searched
				
					markersLayer1.addLayer(marker);
			}
			
			
		var hg = L.control.heightgraph({
             width: 600,
             height: 195,
             margins: {
                 top: 10,
                 right: 30,
                 bottom: 55,
                 left: 50
             },
             translation: {
                 distance: "Jarak (dari LPN)",
				 elevation: "Elevasi",
				 segment_length: "Panjang Segmen (Petak)",
				 type: "Petak",
				 legend: "Legenda"
             },
             expandCallback: function(expand){console.log("Expand: "+expand)},
             position: "topright",
			 expand: false,
             mappings: colorMappings
         });
		 
         hg.addTo(map);

         hg.addData(geojson);	
		
		var exteriorStyle = {
		"color": "#ffffff",
		"weight": 0,
		"fillOpacity": .75
		};
		
		var cb = L.geoJson(geojson, {style: exteriorStyle}).addTo(map);
		
		var cb1 = L.geoJson(jalur,{
		onEachFeature: function (feature, layer) {
			layer.bindPopup(
			feature.properties.Jarak
			);
		}
	}).addTo(map);
		
		var markers = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}
		
		var zoomHome = L.Control.zoomHome({homeCoordinates: [-6.746844, 108.175107],
            homeZoom: 9});
		zoomHome.addTo(map);
		
		var cb2 = {
		"Rel KA" : cb1,
		"Stasiun" : markersLayer
		};
		
		var baseMaps = {
		"Mapbox Dark" : grayscale,
		"Mapbox Street" : streets,
		"Citra Esri": esri,
		"Citra Google" : google,
		"Google Maps" : gmaps
		};
		
		//Init Sidebar Control
		var sidebar = L.control.sidebar({
		  autopan: true,
		  container: "sidebar",
		  position: "left"
		}).addTo(map);
		
		var layerControl = L.control.layers(
		  baseMaps, 
		  cb2, 
		  {
			position: "topleft",
			collapsed: false
		  }
		).addTo(map);
		
		//Move Layers control to sidebar
		var layerControlContainer = layerControl.getContainer();
		$("#layercontrol").append(layerControlContainer);
		$(".leaflet-control-layers-list").prepend("<strong class='title'>Base Maps</strong><br>");
		$(".leaflet-control-layers-separator").after("<br><strong class='title'>Layers</strong><br>");

		var markersjan = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < jan.length; i++) {
			var a = jan[i];
			var title = a[2];
			var marker1 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker1.bindPopup(title);
			markersjan.addLayer(marker1);
		}

		var markersfeb = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < feb.length; i++) {
			var a = feb[i];
			var title = a[2];
			var marker2 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker2.bindPopup(title);
			markersfeb.addLayer(marker2);
		}

		var markersmar = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < mar.length; i++) {
			var a = mar[i];
			var title = a[2];
			var marker3 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker3.bindPopup(title);
			markersmar.addLayer(marker3);
		}

		var markersapr = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < apr.length; i++) {
			var a = apr[i];
			var title = a[2];
			var marker4 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker4.bindPopup(title);
			markersapr.addLayer(marker4);
		}
		var markersmei = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < mei.length; i++) {
			var a = mei[i];
			var title = a[2];
			var marker5 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker5.bindPopup(title);
			markersmei.addLayer(marker5);
		}

		var markersjun = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < jun.length; i++) {
			var a = jun[i];
			var title = a[2];
			var marker6 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker6.bindPopup(title);
			markersjun.addLayer(marker6);
		}

		var markersjul = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < jul.length; i++) {
			var a = jul[i];
			var title = a[2];
			var marker7 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker7.bindPopup(title);
			markersjul.addLayer(marker7);
		}

		var markersagst = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < agst.length; i++) {
			var a = agst[i];
			var title = a[2];
			var marker8 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker8.bindPopup(title);
			markersagst.addLayer(marker8);
		}

		var markerssept = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < sept.length; i++) {
			var a = sept[i];
			var title = a[2];
			var marker9 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker9.bindPopup(title);
			markerssept.addLayer(marker9);
		}

		var markersokt = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < okt.length; i++) {
			var a = okt[i];
			var title = a[2];
			var marker10 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker10.bindPopup(title);
			markersokt.addLayer(marker10);
		}

		var markersnov = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < nov.length; i++) {
			var a = nov[i];
			var title = a[2];
			var marker11 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker11.bindPopup(title);
			markersnov.addLayer(marker11);
		}

		var markersdes = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < des.length; i++) {
			var a = des[i];
			var title = a[2];
			var marker12 = L.marker(L.latLng(a[0], a[1]), { title: title });
			marker12.bindPopup(title);
			markersdes.addLayer(marker12);
		}

		var cb3 ={
			"Total Komplain Tahun 2019" : markers,
		}

		var layerControl2 = L.control.layers(
			null,
			cb3, 
			{
			  position: "topleft",
			  collapsed: false
			}
		  ).addTo(map);

		  var layerControlContainer2 = layerControl2.getContainer();
		$("#layercontrol1").append(layerControlContainer2);

		var cb4 = {
			
			"Januari 2019" : markersjan,
			"Februari 2019" : markersfeb,
			"Maret 2019" : markersmar,
			"April 2019" : markersapr,
			"Mei 2019" : markersmei,
			"Juni 2019" : markersjun,
			"Juli 2019" : markersjul,
			"Agustus 2019" : markersagst,
			"September 2019" : markerssept,
			"Oktober 2019" : markersokt,
			"November 2019" : markersnov,
			"Desember 2019" : markersdes
			};

		var layerControl1 = L.control.layers(
			null,
			cb4, 
			{
			  position: "topleft",
			  collapsed: false
			}
		  ).addTo(map);

		  var layerControlContainer1 = layerControl1.getContainer();
		$("#layercontrol2").append(layerControlContainer1);

    // Colors for AwesomeMarkers
   var lokoIcon = L.icon({
                            iconUrl: 'images/loko1.png',
                            iconSize: [40, 40], // size of the icon
                            shadowSize: [0, 0], // size of the shadow
                            iconAnchor: [17, 20], // point of the icon which will correspond to marker's location
                            shadowAnchor: [0, 0], // the same for the shadow
                            popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
                        });
    
	
	 var _colorIdx = 0,
        _colors = [
          'orange',
          'green',
          'blue',
          'purple',
          'darkred',
          'cadetblue',
          'red',
          'darkgreen',
          'darkblue',
          'darkpurple'
        ];
        
    function _assignColor() {
        return _colors[_colorIdx++%10];
    }
	
    // =====================================================
    // =============== Playback ============================
    // =====================================================

    // Playback options
    var playbackOptions = {        
        // layer and marker options
        layer: {
            pointToLayer : function(featureData, latlng){
                var result = {};
                if (featureData && featureData.properties && featureData.properties.path_options){
                    result = featureData.properties.path_options;
                }
                if (!result.radius){
                    result.radius = 5;
                }
                return new L.CircleMarker(latlng, result);
            }
        },
         marker: function(featureData){
            return {
                icon: L.AwesomeMarkers.icon({
                    prefix: 'fa',
                    icon: 'train', 
                    markerColor: _assignColor()
		
                }),
				getPopup: function (feature) {
				return feature.properties.title;}
            };
        },
		popups: true,
		fadeMarkersWhenStale: true,
		tracksLayer : false
    };
    
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);
    
    // Initialize custom control
    var control = new L.Playback.Control(playback);
    control.addTo(map);
    
    // Add data
    playback.addData(ka85);
	   
	var options = {
		series: [{
		name: 'Jumlah',
		data: [21, 20, 24, 28, 24, 30, 49, 33, 29, 28, 50, 166]
	  }],
	  chart: {
		height: 300,
		type: 'bar',
	  },
	  plotOptions: {
		bar: {
		  columnWidth: '50%',
		  endingShape: 'rounded'  
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  stroke: {
		width: 2
	  },
	  
	  grid: {
		row: {
		  colors: ['#fff', '#f2f2f2']
		}
	  },
	  xaxis: {
		labels: {
		  rotate: -45
		},
		categories: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
		  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
		],
		tickPlacement: 'on'
	  },
	  yaxis: {
		title: {
		  text: 'Jumlah Komplain',
		},
	  },
	  fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: "horizontal",
		  shadeIntensity: 0.25,
		  gradientToColors: undefined,
		  inverseColors: true,
		  opacityFrom: 0.85,
		  opacityTo: 0.85,
		  stops: [50, 0, 100]
		},
	  }
	  };

	  var chart = new ApexCharts(document.querySelector("#chart"), options);
	  chart.render();
	  
});
