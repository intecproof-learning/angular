///////////Mapas
(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
    ({ key: "AIzaSyDBWyZHIwG_kxjGpFr47iNQhwpKbCRytjA", v: "beta" });

function geolocalizar() {
    if (!navigator.geolocation) {
        alert("La geolocalización no está disponible")
    }
    else {
        const geoOptions = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 30000
        }

        navigator.geolocation.getCurrentPosition(geo_success,
            geo_error, geoOptions)
    }
}

function geo_success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    initMap(latitude, longitude, document.querySelector("#map"), 15)
}

function geo_error() {
    alert('Mapas no disponible')
}

async function initMap(lat, long, elemento, zoom) {
    let map;
    const position = { lat: lat, lng: long };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(elemento, {
        zoom: zoom,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Finanzas Puebla",
    });
}