// ═══════════════════════════════════════════════════
// DONNÉES
// ═══════════════════════════════════════════════════
const DATA = {
soleil: {
title: ‘☀️ Terrasses ensoleillées’, badge: ‘8 spots’, acc: ‘#FFB700’,
places: [
{ n:‘Café des Anges’, t:‘Terrasse · Plein soleil’, ico:‘☀️’, bg:’#FFF8E1’, dist:‘3 min’, stars:4.8, vibe:‘Calme’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Soleil direct jusqu'à 18h30 — orienté sud-ouest’,
tags:[{l:“Soleil jusqu’à 18h”,c:‘gd’},{l:‘Ouvert’,c:‘gr’},{l:‘Chien ✓’,c:‘bl’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘7h – 23h · Ferme dans 4h’,c:‘gr’},{i:‘👥’,l:‘Affluence’,v:‘Calme (3/10)’,c:’’},{i:‘🐕’,l:‘Animaux’,v:‘Chiens acceptés’,c:’’},{i:‘💶’,l:‘Prix’,v:‘€ · Café 2,50 · Bière 4,50’,c:’’}],
reviews:[{av:‘🦊’,nm:‘Camille R.’,nv:‘Le Rôdeur’,bdg:‘🥈’,st:5,adjs:[‘☀️ Ensoleillé’,‘🛋️ Cosy’],photo:‘selfie’,photoData:null,date:‘Hier’},{av:‘🌸’,nm:‘Léa V.’,nv:‘Le Vagabond’,bdg:‘💎’,st:4,adjs:[‘💯 Authentique’],photo:null,date:‘Il y a 2 jours’}]
},
{ n:‘Square Voltaire’, t:‘Espace vert · Bancs au soleil’, ico:‘🌸’, bg:’#F0FDF4’, dist:‘5 min’, stars:4.5, vibe:‘Parfait’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Ensoleillement toute la journée — espace ouvert sans ombre’,
tags:[{l:‘Plein soleil’,c:‘gd’},{l:‘Gratuit’,c:‘gr’},{l:‘Chien ✓’,c:‘bl’}],
rows:[{i:‘💶’,l:‘Entrée’,v:‘Gratuit · Ouvert 24h/24’,c:‘gr’},{i:‘👥’,l:‘Affluence’,v:‘Modéré (5/10)’,c:’’}],
reviews:[{av:‘🐺’,nm:‘Thomas M.’,nv:‘Le Curieux’,bdg:‘🥇’,st:5,adjs:[‘🌿 Tranquille’,‘✨ Inédit’],photo:‘lieu’,photoData:null,date:‘Il y a 3 jours’}]
},
{ n:‘Rooftop Le Bellevue’, t:‘Bar terrasse · Vue panoramique’, ico:‘🏙️’, bg:’#FFF3E0’, dist:‘9 min’, stars:4.9, vibe:‘Animé’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Coucher de soleil spectaculaire — meilleur après 17h’,
tags:[{l:‘Vue 360°’,c:‘def’},{l:‘Happy hour’,c:‘gd’},{l:‘Résa conseillée’,c:‘rd’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘16h – 2h · Happy hour 16h–19h’,c:‘gr’},{i:‘👥’,l:‘Affluence’,v:‘Animé (7/10)’,c:‘rd’},{i:‘💶’,l:‘Prix’,v:‘€€ · Cocktail 9–12€’,c:’’}],
reviews:[{av:‘⭐’,nm:‘Maxime D.’,nv:‘Le Flâneur’,bdg:‘🥉’,st:5,adjs:[‘🔥 Vibe’,‘📸 Instagrammable’],photo:‘selfie’,photoData:null,date:‘Il y a 4 jours’}]
},
{ n:‘Jardin de la Fontaine’, t:‘Jardin historique · Bancs’, ico:‘🌳’, bg:’#F0FDF4’, dist:‘12 min’, stars:4.6, vibe:‘Tranquille’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Soleil le matin jusqu'à 13h — ombragé l'après-midi’,
tags:[{l:‘Ombragé’,c:‘gr’},{l:‘Gratuit’,c:‘gr’},{l:‘Calme’,c:‘def’}],
rows:[{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’},{i:‘🕐’,l:‘Horaires’,v:‘8h – 20h · Tous les jours’,c:’’}],
reviews:[]
},
{ n:‘Place du Capitole’, t:‘Place publique · Terrasse de café’, ico:‘🏛️’, bg:’#FFF8E1’, dist:‘7 min’, stars:4.4, vibe:‘Animé’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Ensoleillement de 11h à 16h — ombre en soirée’,
tags:[{l:‘Historique’,c:‘def’},{l:‘Animé’,c:‘def’},{l:‘Photo ✓’,c:‘gd’}],
rows:[{i:‘👥’,l:‘Affluence’,v:‘Touristique mais agréable’,c:’’},{i:‘💶’,l:‘Prix’,v:‘€€ · Café terrasse 3–4€’,c:’’}],
reviews:[]
},
{ n:‘Terrasse Chez Marcel’, t:‘Bistrot · Terrasse au soleil’, ico:‘🌞’, bg:’#FFF8E1’, dist:‘4 min’, stars:4.3, vibe:‘Détendu’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Soleil de 9h à 18h — orienté plein sud’,
tags:[{l:‘Plein sud’,c:‘gd’},{l:‘Ouvert’,c:‘gr’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘8h – 22h30’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€ · Menu 14€’,c:’’}],
reviews:[]
}
]
},
bar: {
title: ‘🍺 Bars & Terrasses’, badge: ‘6 spots’, acc: ‘#FB923C’,
places: [
{ n:‘Le Zinc’, t:‘Bar de quartier · Terrasse’, ico:‘🍺’, bg:’#FFF3E0’, dist:‘4 min’, stars:4.6, vibe:‘Détendu’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Terrasse à l'ombre — idéal en été’,
tags:[{l:‘Ouvert’,c:‘gr’},{l:‘Happy hour 17–19h’,c:‘gd’},{l:‘Terrasse’,c:‘def’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘11h – 2h’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€ · Pinte 4€’,c:’’}],
reviews:[{av:‘🎯’,nm:‘Sophie B.’,nv:‘Le Rôdeur’,bdg:‘🥈’,st:4,adjs:[‘🛋️ Cosy’,‘🔍 Caché’],photo:‘lieu’,photoData:null,date:‘Il y a 4 jours’}]
},
{ n:‘Bar à Vins Léonie’, t:‘Cave & vins naturels’, ico:‘🍷’, bg:’#FDF4FF’, dist:‘7 min’, stars:4.7, vibe:‘Intime’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Intérieur cave — lumière tamisée’,
tags:[{l:‘Naturels’,c:‘def’},{l:‘Planches’,c:‘def’},{l:‘Calme’,c:‘gr’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘17h – minuit · Fermé lundi’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€€ · Verre 6–9€’,c:’’}],
reviews:[]
},
{ n:‘La Brasserie du Coin’, t:‘Brasserie traditionnelle’, ico:‘🥨’, bg:’#FFF8E1’, dist:‘2 min’, stars:4.3, vibe:‘Animé’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Grande terrasse exposée est — soleil le matin’,
tags:[{l:‘Ouvert’,c:‘gr’},{l:‘Chien ✓’,c:‘bl’},{l:‘Terrasse’,c:‘def’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘8h – 1h · 7j/7’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€ · Demi 3,50€’,c:’’}],
reviews:[]
},
{ n:‘Le Perchoir’, t:‘Rooftop bar · Vue imprenable’, ico:‘🌆’, bg:’#FFF3E0’, dist:‘11 min’, stars:4.8, vibe:‘Tendance’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Plein soleil coucher — vue dégagée’,
tags:[{l:‘Vue’,c:‘gd’},{l:‘Réservation’,c:‘rd’},{l:‘Cocktails’,c:‘def’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘16h – 2h’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€€€’,c:’’}],
reviews:[]
},
{ n:‘Café des Artistes’, t:‘Bar culturel · Expos’, ico:‘🎨’, bg:’#F5F3FF’, dist:‘6 min’, stars:4.5, vibe:‘Créatif’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Lumière naturelle toute la journée — grandes baies vitrées’,
tags:[{l:‘Expos’,c:‘def’},{l:‘Calme’,c:‘gr’},{l:‘Wi-Fi’,c:‘bl’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘10h – minuit’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€ · Verre 4€’,c:’’}],
reviews:[]
},
{ n:‘Le Wanderlust’, t:‘Bar-club · Bord de Seine’, ico:‘🌊’, bg:’#EFF6FF’, dist:‘14 min’, stars:4.6, vibe:‘Festif’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Face au fleuve — beau coucher de soleil’,
tags:[{l:‘Bord eau’,c:‘bl’},{l:‘Live music’,c:‘gd’},{l:‘Grande terrasse’,c:‘def’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘18h – 4h’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€€’,c:’’}],
reviews:[]
}
]
},
balade: {
title: ‘🚶 Balades’, badge: ‘4 itinéraires’, acc: ‘#4ADE80’,
places: [
{ n:‘Tour des Berges’, t:‘Itinéraire · 3,2 km · 40 min’, ico:‘🚶’, bg:’#F0FDF4’, dist:‘2 min du départ’, stars:4.8, vibe:‘Ombragé’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Partiellement ombragé — 60% sous les arbres’,
tags:[{l:‘Tout plat’,c:‘gr’},{l:‘Vue eau’,c:‘bl’},{l:‘Chien ✓’,c:‘bl’}],
rows:[{i:‘🗺️’,l:‘Distance’,v:‘3,2 km · Boucle facile’,c:’’},{i:‘🌳’,l:‘Nature’,v:‘60% sous les arbres’,c:‘gr’},{i:‘🐕’,l:‘Chiens’,v:‘Sans laisse autorisé sur 1 km’,c:’’}],
reviews:[]
},
{ n:‘Circuit Street Art’, t:‘Balade urbaine · 2,5 km · 35 min’, ico:‘🎨’, bg:’#FFF1F2’, dist:‘5 min du départ’, stars:4.5, vibe:‘Original’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Rues urbaines — soleil selon orientation des rues’,
tags:[{l:‘Photo’,c:‘def’},{l:‘Culturel’,c:‘def’},{l:‘Découverte’,c:‘gd’}],
rows:[{i:‘🗺️’,l:‘Distance’,v:‘2,5 km · Linéaire’,c:’’},{i:‘🎨’,l:‘Art’,v:‘12 oeuvres à découvrir’,c:’’}],
reviews:[]
},
{ n:‘Promenade des Jardins’, t:‘Itinéraire fleuri · 1,8 km · 25 min’, ico:‘🌺’, bg:’#FFF8E1’, dist:‘8 min du départ’, stars:4.7, vibe:‘Bucolique’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Jardins ensoleillés — exposition optimale 10h–16h’,
tags:[{l:‘Fleuri’,c:‘gd’},{l:‘Famille’,c:‘def’},{l:‘Calme’,c:‘gr’}],
rows:[{i:‘🗺️’,l:‘Distance’,v:‘1,8 km · Facile’,c:’’},{i:‘🌸’,l:‘Saison’,v:‘En pleine floraison’,c:‘gd’}],
reviews:[]
},
{ n:‘Quartiers Historiques’, t:‘Visite guidée libre · 4 km · 1h15’, ico:‘🏛️’, bg:’#EFF6FF’, dist:‘3 min du départ’, stars:4.9, vibe:‘Culturel’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Ruelles étroites — lumière variable selon l'heure’,
tags:[{l:‘Histoire’,c:‘def’},{l:‘Architecture’,c:‘def’},{l:‘Incontournable’,c:‘gd’}],
rows:[{i:‘🗺️’,l:‘Distance’,v:‘4 km · Modéré’,c:’’},{i:‘📖’,l:‘Guide’,v:‘QR codes explicatifs’,c:’’}],
reviews:[]
}
]
},
food: {
title: ‘🍽️ Où manger’, badge: ‘5 restos’, acc: ‘#FB7185’,
places: [
{ n:‘Chez Marguerite’, t:‘Bistrot · Cuisine du marché’, ico:‘🍽️’, bg:’#FFF1F2’, dist:‘4 min’, stars:4.7, vibe:‘Tables dispo’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Terrasse ensoleillée jusqu'à 16h’,
tags:[{l:‘Ouvert’,c:‘gr’},{l:‘Tables libres’,c:‘gr’},{l:‘Menu 16€’,c:‘gd’}],
rows:[{i:‘🕐’,l:‘Service’,v:‘12h–14h · 19h–22h30’,c:‘gr’},{i:‘🪑’,l:‘Dispo’,v:‘Tables disponibles maintenant’,c:‘gr’},{i:‘💶’,l:‘Menu’,v:‘Entrée + Plat 16€’,c:’’}],
reviews:[]
},
{ n:‘Tacos del Sol’, t:‘Street food · File rapide’, ico:‘🌮’, bg:’#FFF8E1’, dist:‘2 min’, stars:4.5, vibe:‘Petite file’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Pas de terrasse — à emporter’,
tags:[{l:‘Rapide’,c:‘gr’},{l:‘Moins de 10€’,c:‘gd’}],
rows:[{i:‘💶’,l:‘Prix’,v:‘Tacos 3,50€ · Menu 9€’,c:’’},{i:‘⏱️’,l:‘Attente’,v:‘~10 min’,c:’’}],
reviews:[]
},
{ n:‘Le Ramen House’, t:‘Restaurant japonais · Ramen artisanaux’, ico:‘🍜’, bg:’#EFF6FF’, dist:‘6 min’, stars:4.8, vibe:“File d’attente”, vc:’#DC2626’, vbg:’#FEE2E2’, sun:‘Intérieur cosy — pas de terrasse’,
tags:[{l:“File d’attente”,c:‘rd’},{l:‘Vaut le coup’,c:‘gd’}],
rows:[{i:‘⏱️’,l:‘Attente’,v:‘~25 min’,c:‘rd’},{i:‘💶’,l:‘Prix’,v:‘€€ · Bol 14–18€’,c:’’}],
reviews:[]
},
{ n:‘La Pizzeria Napoli’, t:‘Pizzeria authentique · Four à bois’, ico:‘🍕’, bg:’#FFF1F2’, dist:‘5 min’, stars:4.6, vibe:‘Sympa’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Terrasse couverte — abrité’,
tags:[{l:‘Terrasse’,c:‘def’},{l:‘Authentique’,c:‘gd’},{l:‘Sans résa’,c:‘gr’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘12h – 23h · Fermé lundi’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€ · Pizza 11–14€’,c:’’}],
reviews:[]
},
{ n:‘Le Marché Couvert’, t:‘Street food · Plusieurs stands’, ico:‘🥗’, bg:’#F0FDF4’, dist:‘8 min’, stars:4.4, vibe:‘Varié’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Couvert — idéal par tous temps’,
tags:[{l:‘Varié’,c:‘gr’},{l:‘Rapide’,c:‘gr’},{l:‘Pas cher’,c:‘gd’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘7h – 14h · Fermé dimanche’,c:‘gr’},{i:‘💶’,l:‘Prix’,v:‘€ · Plat 7–10€’,c:’’}],
reviews:[]
}
]
},
event: {
title: ‘🎭 Événements’, badge: ‘3 ce soir’, acc: ‘#A78BFA’,
places: [
{ n:‘Marché des Créateurs’, t:‘Marché · Place du Bourg’, ico:‘🎨’, bg:’#F5F3FF’, dist:‘8 min’, stars:4.6, vibe:‘Gratuit’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘En plein air — prévoir de la crème solaire’,
tags:[{l:‘Gratuit’,c:‘gr’},{l:“Jusqu’à 19h”,c:‘gd’},{l:‘En plein air’,c:‘def’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘10h – 19h · Dimanches’,c:’’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
},
{ n:‘Concert Jazz Plein Air’, t:‘Live music · Jardin du Palais’, ico:‘🎷’, bg:’#FFF1F2’, dist:‘12 min’, stars:4.9, vibe:‘Ce soir 20h’, vc:’#EA580C’, vbg:’#FFEDD5’, sun:‘Plein air le soir — fraîcheur agréable’,
tags:[{l:‘Gratuit’,c:‘gr’},{l:‘Ce soir’,c:‘gd’}],
rows:[{i:‘🕐’,l:‘Heure’,v:‘20h – 22h30 · Ce soir’,c:‘gd’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
},
{ n:‘Expo Photo Urbaine’, t:‘Exposition · Galerie Lumière’, ico:‘📷’, bg:’#EFF6FF’, dist:‘5 min’, stars:4.4, vibe:‘Peu de monde’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Intérieur galerie — lumière artificielle maîtrisée’,
tags:[{l:‘Entrée libre’,c:‘gr’},{l:‘Intérieur’,c:‘bl’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘10h – 19h · Fermé lundi’,c:’’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
}
]
},
zen: {
title: ‘🌿 Coins zen’, badge: ‘5 coins’, acc: ‘#34D399’,
places: [
{ n:‘Jardin Secret de la Mairie’, t:‘Jardin caché · Peu connu’, ico:‘🌿’, bg:’#F0FDF4’, dist:‘5 min’, stars:4.9, vibe:‘Calme absolu’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Ombragé par de vieux arbres — frais même en été’,
tags:[{l:‘Gratuit’,c:‘gr’},{l:‘Peu connu’,c:‘gd’}],
rows:[{i:‘🕐’,l:‘Ouverture’,v:‘8h – 20h30 · Fermé mardi’,c:’’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
},
{ n:‘Quai des Sculpteurs’, t:“Bord d’eau · Face à la rivière”, ico:‘💧’, bg:’#EFF6FF’, dist:‘7 min’, stars:4.7, vibe:‘Paisible’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Face ouest — magnifique coucher de soleil’,
tags:[{l:‘Vue eau’,c:‘bl’},{l:‘Coucher de soleil’,c:‘gd’}],
rows:[{i:‘☀️’,l:‘Coucher’,v:‘Face ouest — parfait après 17h’,c:‘gd’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit 24h/24’,c:‘gr’}],
reviews:[]
},
{ n:‘Médiathèque José Cabanis’, t:‘Bibliothèque · Espace calme’, ico:‘📚’, bg:’#F0FDF4’, dist:‘3 min’, stars:4.5, vibe:‘Ultra calme’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Intérieur climatisé — idéal en forte chaleur’,
tags:[{l:‘Climatisé’,c:‘bl’},{l:‘Gratuit’,c:‘gr’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘10h – 19h · Fermé dimanche’,c:’’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
},
{ n:‘Parc de la Bachelerie’, t:‘Parc naturel · Bord de lac’, ico:‘🌊’, bg:’#EFF6FF’, dist:‘15 min’, stars:4.8, vibe:‘Nature’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Espace ouvert — très ensoleillé la journée’,
tags:[{l:‘Nature’,c:‘gr’},{l:‘Baignade’,c:‘bl’},{l:‘Gratuit’,c:‘gr’}],
rows:[{i:‘🗺️’,l:‘Surface’,v:‘12 hectares · Sentiers balisés’,c:’’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
},
{ n:‘Couvent des Jacobins’, t:‘Cloître médiéval · Silence total’, ico:‘🏛️’, bg:’#F5F3FF’, dist:‘6 min’, stars:4.9, vibe:‘Hors du temps’, vc:’#16A34A’, vbg:’#DCFCE7’, sun:‘Cloître semi-ouvert — lumière douce en fin de journée’,
tags:[{l:‘Historique’,c:‘def’},{l:‘Calme’,c:‘gr’},{l:‘Unique’,c:‘gd’}],
rows:[{i:‘🕐’,l:‘Horaires’,v:‘9h – 19h · Tous les jours’,c:’’},{i:‘💶’,l:‘Entrée’,v:‘Gratuit’,c:‘gr’}],
reviews:[]
}
]
}
};

const SURPRISES = [
{e:‘📚’,n:‘Librairie Le Divan’,d:“Librairie indépendante avec un café caché au fond. Lumière parfaite, on peut y rester des heures.”,p:‘📍 6 min à pied’},
{e:‘🌺’,n:‘Terrasse La Pagode’,d:“Jardin d’un ancien cinéma converti. Peu connu, très calme, érables centenaires.”,p:‘📍 11 min à pied’},
{e:‘🎵’,n:‘Bar Le Caveau du Jazz’,d:“Jazz live tous les jours à 18h. Entrée gratuite avant 20h.”,p:‘📍 8 min à pied’},
{e:‘🍦’,n:‘Glacier Polare’,d:“Fabrication sur place, parfums changeants. Terrasse côté rue toujours disponible.”,p:‘📍 4 min à pied’},
{e:‘🏛️’,n:‘Cour du Musée Carnavalet’,d:“Entrée gratuite, cour magnifique. La plupart des gens l’ignorent.”,p:‘📍 9 min à pied’},
{e:‘🌅’,n:‘Rooftop BHV Marais’,d:“Vue 360° sur les toits. Café, hamacs, coucher de soleil garanti.”,p:‘📍 14 min à pied’}
];

// ═══════════════════════════════════════════════════
// ÉTAT GLOBAL
// ═══════════════════════════════════════════════════
let profil = {};
let curH = ‘soleil’;
let curPlace = null;
let surpIdx = 0;
let tempAvatar = ‘🐱’;
let rating = { like: null, stars: 0, adjs: [], photo: null, photoData: null };

// ═══════════════════════════════════════════════════
// STORAGE (avec fallback si bloqué)
// ═══════════════════════════════════════════════════
const store = {
get: function(k) { try { return localStorage.getItem(k); } catch(e) { return null; } },
set: function(k,v) { try { localStorage.setItem(k,v); } catch(e) {} },
parse: function(k,def) { try { return JSON.parse(this.get(k) || JSON.stringify(def)); } catch(e) { return def; } }
};

// ═══════════════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════════════
let obAge = 28;
const obSel = {};

function obNext(step) {
if(step === 2) { profil.prenom = (document.getElementById(‘ob-prenom’).value || ‘’).trim() || ‘Flâneur’; }
if(step === 3) { profil.age = obAge; }
if(step === 4) { profil.ville = (document.getElementById(‘ob-ville’).value || ‘’).trim(); profil.quartier = (document.getElementById(‘ob-quartier’).value || ‘’).trim(); }
document.querySelectorAll(’.ob-step’).forEach(function(s){ s.classList.remove(‘active’); });
var el = document.getElementById(‘obs’ + step);
if(el) el.classList.add(‘active’);
document.getElementById(‘ob-bar’).style.width = Math.round((step / 7) * 100) + ‘%’;
window.scrollTo(0, 0);
}

function chgAge(d) {
obAge = Math.max(13, Math.min(99, obAge + d));
document.getElementById(‘ob-age-val’).textContent = obAge;
}
function setAge(el, v) {
document.querySelectorAll(’#obs2 .ob-chip’).forEach(function(c){ c.classList.remove(‘on’); });
el.classList.add(‘on’);
obAge = v;
document.getElementById(‘ob-age-val’).textContent = v;
}
function togGc(el) { el.classList.toggle(‘on’); }
function togChip(el) { el.classList.toggle(‘on’); }
function soloChip(el, parentId) {
var par = document.getElementById(parentId);
if(par) par.querySelectorAll(’.ob-chip’).forEach(function(c){ c.classList.remove(‘on’); });
el.classList.add(‘on’);
}

function finishOnboard() {
profil.age = obAge;
profil.prenom = (document.getElementById(‘ob-prenom’).value || ‘’).trim() || ‘Flâneur’;
profil.ville = (document.getElementById(‘ob-ville’).value || ‘’).trim() || ‘Paris’;
profil.quartier = (document.getElementById(‘ob-quartier’).value || ‘’).trim();
profil.situ = getChips(’#obs4 .ob-gc.on .ob-gc-t’);
profil.humeurs = getChips(’#obs5 .ob-chip.on’);
profil.ambiance = getFirst(’#ob-ambiance-chips .ob-chip.on’);
profil.budget = getFirst(’#ob-budget-chips .ob-chip.on’);
profil.moments = getChips(’#obs6 .ob-chips:last-of-type .ob-chip.on’);
profil.interets = getChips(’#obs7 .ob-gc.on .ob-gc-t’);
profil.avatar = ‘🐱’;
profil.notifs = false;
store.set(‘flany_profil’, JSON.stringify(profil));
document.getElementById(‘onboard’).style.display = ‘none’;
document.getElementById(‘app’).style.display = ‘block’;
initApp();
}

function getChips(sel) { var arr = []; document.querySelectorAll(sel).forEach(function(el){ arr.push(el.textContent.trim()); }); return arr; }
function getFirst(sel) { var el = document.querySelector(sel); return el ? el.textContent.trim() : ‘’; }
function resetProfil() { store.set(‘flany_profil’,’’); location.reload(); }

// ═══════════════════════════════════════════════════
// INIT APP
// ═══════════════════════════════════════════════════
function initApp() {
// Clock
function tick() {
var n = new Date();
var el = document.getElementById(‘clock’);
if(el) el.textContent = pad(n.getHours()) + ‘:’ + pad(n.getMinutes());
}
function pad(n) { return n < 10 ? ‘0’+n : ‘’+n; }
tick(); setInterval(tick, 30000);

// Hero tag
var ht = document.getElementById(‘hero-tag’);
if(ht && profil.prenom) ht.innerHTML = ‘Bonjour <strong>’ + profil.prenom + ‘</strong> 👋’;

// Géo
if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(pos) {
var lat = pos.coords.latitude.toFixed(4);
var lng = pos.coords.longitude.toFixed(4);
var el1 = document.getElementById(‘loc-name’);
var el2 = document.getElementById(‘loc-sub’);
var el3 = document.getElementById(‘carte-loc’);
if(el1) el1.textContent = profil.ville || ‘Ma position’;
if(el2) el2.textContent = lat + ’°N · ’ + lng + ’°E · Précis à ’ + Math.round(pos.coords.accuracy) + ‘m’;
if(el3) el3.textContent = profil.ville || ‘Ma position’;
calcSunCalc(pos.coords.latitude, pos.coords.longitude);
loadMeteo(pos.coords.latitude, pos.coords.longitude);
userLat = pos.coords.latitude; userLng = pos.coords.longitude;
if(typeof google !== ‘undefined’ && gmapsLoaded) initMaps(pos.coords.latitude, pos.coords.longitude);
}, function() {
var el1 = document.getElementById(‘loc-name’);
if(el1) el1.textContent = profil.ville || ‘Paris, France’;
calcSunCalcDefault();
});
} else {
calcSunCalcDefault();
loadMeteo(48.8566, 2.3522);
userLat = 48.8566; userLng = 2.3522;
if(typeof google !== ‘undefined’ && gmapsLoaded) initMaps(48.8566, 2.3522);
}

// Météo réelle OpenWeatherMap
function loadMeteo(lat, lng) {
var apiKey = ‘6f716e4ca95fa53c70ffb763ab106f2d’;
var url = ‘https://api.openweathermap.org/data/2.5/weather?lat=’+lat+’&lon=’+lng+’&appid=’+apiKey+’&units=metric&lang=fr’;
fetch(url)
.then(function(r){ return r.json(); })
.then(function(d) {
var t = document.getElementById(‘mt’), w = document.getElementById(‘mw’);
var u = document.getElementById(‘mu’), s = document.getElementById(‘ms’);
if(t) t.textContent = Math.round(d.main.temp) + ‘°C’;
if(w) w.textContent = Math.round((d.wind.speed||0) * 3.6) + ’ km/h’;
if(u) u.textContent = ‘UV ’ + (d.uvi !== undefined ? d.uvi : ‘—’);
// Coucher de soleil
if(d.sys && d.sys.sunset && s) {
var ss = new Date(d.sys.sunset * 1000);
var now = new Date();
var df = ss - now;
if(df > 0) {
s.textContent = ‘dans ’ + Math.floor(df/3600000) + ‘h’ + String(Math.floor((df%3600000)/60000)).padStart(2,‘0’);
} else {
s.textContent = ss.getHours() + ‘h’ + String(ss.getMinutes()).padStart(2,‘0’);
}
}
// Info météo dans le soleil banner
if(d.weather && d.weather[0]) {
var desc = d.weather[0].description;
var nuage = d.clouds && d.clouds.all > 70;
var pluie = d.weather[0].main === ‘Rain’ || d.weather[0].main === ‘Drizzle’;
var si1 = document.getElementById(‘si-txt’), si2 = document.getElementById(‘si-sub’);
if(pluie) {
if(si1) si1.textContent = ‘🌧️ Pluie en cours — terrasses couvertes’;
if(si2) si2.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
} else if(nuage) {
if(si1) si1.textContent = ‘⛅ Ciel couvert — peu d’ensoleillement’;
if(si2) si2.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
}
// Pas besoin de recalculer si beau temps — SunCalc s’en charge
}
})
.catch(function() {
// Fallback si pas de réseau
var t = document.getElementById(‘mt’), w = document.getElementById(‘mw’), u = document.getElementById(‘mu’);
if(t) t.textContent = ‘—’; if(w) w.textContent = ‘—’; if(u) u.textContent = ‘—’;
});
}

// Pour toi
buildPourToi();

// Profil page
buildProfilPage();

// Avatar
setAvatar(profil.avatar || ‘🐱’);

// Niveau
updateNiveau();

// Render places
renderPlaces(‘soleil’);

// Shake
var lastShake = 0;
window.addEventListener(‘devicemotion’, function(e) {
var a = e.accelerationIncludingGravity;
if(!a) return;
var tot = Math.abs(a.x||0) + Math.abs(a.y||0) + Math.abs(a.z||0);
var now2 = Date.now();
if(tot > 30 && now2 - lastShake > 2000) { lastShake = now2; openSurprise(); }
});
}

// ═══════════════════════════════════════════════════
// SUNCALC — Ensoleillement
// ═══════════════════════════════════════════════════
function calcSunCalc(lat, lng) {
var now = new Date();
var h = now.getHours() + now.getMinutes()/60;
// Calcul simplifié de l’altitude solaire
var d = Math.floor((now - new Date(now.getFullYear(),0,0)) / 86400000);
var decl = 23.45 * Math.sin((360/365 * (d - 81)) * Math.PI/180);
var ha = (h - 12) * 15;
var alt = Math.asin(
Math.sin(lat*Math.PI/180) * Math.sin(decl*Math.PI/180) +
Math.cos(lat*Math.PI/180) * Math.cos(decl*Math.PI/180) * Math.cos(ha*Math.PI/180)
) * 180/Math.PI;

var sunset = new Date(); sunset.setHours(19,42,0,0);
var sunrise = new Date(); sunrise.setHours(7,15,0,0);
var minsToSunset = Math.round((sunset - now) / 60000);

var txt, sub;
if(alt < 0) {
txt = ‘🌙 Nuit tombée — pas d'ensoleillement’;
sub = ‘Lever du soleil demain à 7h15’;
} else if(alt < 10) {
txt = ‘🌅 Soleil rasant — lumière dorée’;
sub = ‘Angle très bas, ombres longues et chaudes’;
} else if(alt < 30) {
txt = ‘☀️ Bon ensoleillement — lumière douce’;
sub = minsToSunset > 0 ? ‘Encore ’ + minsToSunset + ’ min de soleil’ : ‘Coucher imminent’;
} else {
txt = ‘🌞 Plein soleil — ensoleillement optimal’;
sub = minsToSunset > 0 ? ‘Encore ’ + Math.floor(minsToSunset/60) + ‘h’ + (minsToSunset%60) + ’ de soleil’ : ‘Coucher imminent’;
}

var si1 = document.getElementById(‘si-txt’), si2 = document.getElementById(‘si-sub’);
if(si1) si1.textContent = txt;
if(si2) si2.textContent = sub;
}

function calcSunCalcDefault() {
var now = new Date();
var h = now.getHours();
var txt, sub;
if(h < 7) { txt = ‘🌙 Nuit — pas de soleil’; sub = ‘Lever vers 7h15’; }
else if(h < 10) { txt = ‘🌅 Soleil matinal — lumière douce’; sub = ‘Bonne heure pour les terrasses est’; }
else if(h < 15) { txt = ‘🌞 Plein soleil — optimal maintenant’; sub = ‘Terrasses sud très ensoleillées’; }
else if(h < 18) { txt = ‘☀️ Bon soleil — lumière chaude’; sub = ‘Terrasses ouest idéales’; }
else if(h < 20) { txt = ‘🌆 Lumière dorée — coucher bientôt’; sub = ‘Meilleure lumière de la journée’; }
else { txt = ‘🌙 Soleil couché’; sub = ‘Terrasses en soirée sans soleil’; }
var si1 = document.getElementById(‘si-txt’), si2 = document.getElementById(‘si-sub’);
if(si1) si1.textContent = txt;
if(si2) si2.textContent = sub;
}

// ═══════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════
function goScreen(name) {
document.querySelectorAll(’.screen’).forEach(function(s){ s.classList.remove(‘active’); });
document.querySelectorAll(’.ni’).forEach(function(n){ n.classList.remove(‘on’); });
var s = document.getElementById(‘s-’ + name);
var n = document.getElementById(‘ni-’ + name);
if(s) s.classList.add(‘active’);
if(n) n.classList.add(‘on’);
window.scrollTo(0,0);
if(name === ‘communaute’) buildCommFeed();
if(name === ‘profil’) updateNiveau();
}

// ═══════════════════════════════════════════════════
// HUMEURS
// ═══════════════════════════════════════════════════
function setH(el, key) {
document.querySelectorAll(’.hcard’).forEach(function(c){ c.classList.remove(‘on’); });
el.classList.add(‘on’);
curH = key;
var d = DATA[key];
var rt = document.getElementById(‘r-title’), rb = document.getElementById(‘r-badge’);
if(rt) rt.textContent = d.title;
if(rb) rb.textContent = d.badge;
renderPlaces(key);
setTimeout(function(){ var el2 = document.getElementById(‘r-title’); if(el2) el2.scrollIntoView({behavior:‘smooth’,block:‘start’}); }, 80);
}

// ═══════════════════════════════════════════════════
// RENDER PLACES
// ═══════════════════════════════════════════════════
function renderPlaces(key) {
var places = DATA[key].places;
var acc = DATA[key].acc;
var c = document.getElementById(‘place-list’);
if(!c) return;
c.innerHTML = ‘’;
places.forEach(function(p, i) {
var tags = p.tags.map(function(t){ return ‘<span class="ct ' + t.c + '">’ + t.l + ‘</span>’; }).join(’’);
var d = document.createElement(‘div’);
d.className = ‘pcard’;
d.style.setProperty(’–acc’, acc);
d.onclick = function(){ openPlace(i, key); };
d.innerHTML = ‘<div class="pc-top"><div class="pc-ico" style="background:' + p.bg + '">’ + p.ico + ‘</div>’
+ ‘<div style="flex:1;min-width:0"><div class="pc-name">’ + p.n + ‘</div><div class="pc-type">’ + p.t + ‘</div>’
+ ‘<div class="pc-tags">’ + tags + ‘</div></div></div>’
+ ’<div class="pc-bot"><div class="pc-dist">🚶 ’ + p.dist + ‘</div>’
+ ‘<div style="display:flex;align-items:center;gap:8px">’
+ ’<div class="vchip" style="background:' + p.vbg + ';color:' + p.vc + '"><span style="width:6px;height:6px;border-radius:50%;background:' + p.vc + ';display:inline-block"></span> ’ + p.vibe + ‘</div>’
+ ’<span class="st">★ ’ + p.stars + ‘</span></div></div>’;
c.appendChild(d);
});
}

// ═══════════════════════════════════════════════════
// FICHE LIEU
// ═══════════════════════════════════════════════════
function openPlace(idx, key) {
var h = key || curH;
curPlace = { idx: idx, key: h };
var p = DATA[h].places[idx];
if(!p) return;

var ico = document.getElementById(‘sh-ico’);
var ttl = document.getElementById(‘sh-ttl’);
var sub = document.getElementById(‘sh-sub’);
var rows = document.getElementById(‘sh-rows’);
var ssTxt = document.getElementById(‘sh-soleil-txt’);
var ssSub = document.getElementById(‘sh-soleil-sub’);

if(ico) { ico.textContent = p.ico; ico.style.background = p.bg; }
if(ttl) ttl.textContent = p.n;
if(sub) sub.textContent = p.t;
if(ssTxt) ssTxt.textContent = p.sun || ‘Données non disponibles’;
if(ssSub) ssSub.textContent = ‘Orientation et ensoleillement du lieu’;

if(rows) {
rows.innerHTML = p.rows.map(function(r) {
return ‘<div class="srow"><span class="sr-ico">’ + r.i + ‘</span>’
+ ‘<div><div class="sr-lbl">’ + r.l + ‘</div>’
+ ‘<div class="sr-val ' + r.c + '">’ + r.v + ‘</div></div></div>’;
}).join(’’);
}

renderReviews(p);
document.getElementById(‘ov-fiche’).classList.add(‘on’);
}

function closeFiche() { document.getElementById(‘ov-fiche’).classList.remove(‘on’); }

function saveFiche() {
if(!curPlace) return;
var p = DATA[curPlace.key].places[curPlace.idx];
var saved = store.parse(‘flany_saved’, []);
var exists = saved.some(function(s){ return s.n === p.n; });
if(!exists) {
saved.unshift({ n: p.n, ico: p.ico, dist: p.dist, key: curPlace.key });
store.set(‘flany_saved’, JSON.stringify(saved));
showToast(‘📍 ’ + p.n + ’ sauvegardé !’);
var ps = document.getElementById(‘ps-saved’);
if(ps) ps.textContent = saved.length;
buildSavedPage();
} else {
showToast(‘Déjà dans tes sauvegardés !’);
}
closeFiche();
}

// ═══════════════════════════════════════════════════
// AVIS / REVIEWS
// ═══════════════════════════════════════════════════
function renderReviews(p) {
var allRevs = [];
// Avis de l’utilisateur
var userRevs = store.parse(‘flany_reviews’, []);
userRevs.filter(function(r){ return r.place === p.n; }).forEach(function(r) {
allRevs.push({
av: profil.avatar || ‘🐱’,
nm: (profil.prenom || ‘Toi’) + ’ ✓’,
nv: getNiveau(getPoints()).surnom,
bdg: getNiveau(getPoints()).badge,
st: r.stars, adjs: r.adjs || [],
photo: r.photo, photoData: r.photoData,
date: “Aujourd’hui”, isUser: true
});
});
// Avis mock du lieu
(p.reviews || []).forEach(function(r){ allRevs.push(r); });

var list = document.getElementById(‘rev-list’);
var count = document.getElementById(‘rev-count’);
var stars = document.getElementById(‘rev-stars’);
if(!list) return;

if(allRevs.length === 0) {
list.innerHTML = ‘<div style="text-align:center;color:var(--grey);font-size:13px;font-weight:600;padding:12px 0">Sois le premier à donner ton avis !</div>’;
if(count) count.textContent = ‘💬 Pas encore d'avis’;
if(stars) stars.textContent = ‘’;
return;
}

var avgSt = allRevs.reduce(function(a,r){ return a + (r.st||0); }, 0) / allRevs.length;
if(count) count.textContent = ‘💬 ’ + allRevs.length + ’ avis’;
if(stars) stars.textContent = ’★ ’ + avgSt.toFixed(1);

list.innerHTML = allRevs.map(function(r) {
var adjHtml = (r.adjs||[]).map(function(a){ return ‘<span class="rev-adj">’ + a + ‘</span>’; }).join(’’);
var photoHtml = ‘’;
if(r.photo === ‘selfie’) {
photoHtml = r.photoData
? ‘<img class="rev-photo-img" src="' + r.photoData + '" alt="selfie">’
: ‘’;
photoHtml += ‘<span class="rev-photo-badge selfie">🤳 Selfie vérifié sur place · +5 pts</span>’;
} else if(r.photo === ‘lieu’) {
photoHtml = r.photoData
? ‘<img class="rev-photo-img" src="' + r.photoData + '" alt="photo">’
: ‘’;
photoHtml += ‘<span class="rev-photo-badge lieu">📷 Photo du lieu · +1 pt</span>’;
}
return ‘<div class="rev-item" style="' + (r.isUser ? 'background:var(--gold-l);border:1.5px solid var(--gold)' : '') + '">’
+ ‘<div class="rev-top"><span class="rev-av">’ + r.bdg + ‘</span>’
+ ‘<div><div class="rev-nm">’ + r.av + ’ ’ + r.nm + ‘</div>’
+ ‘<div class="rev-nv">’ + r.nv + ’ · ’ + r.date + ‘</div></div>’
+ ‘<div class="rev-st">’ + ‘⭐’.repeat(r.st||0) + ‘</div></div>’
+ (adjHtml ? ‘<div class="rev-adjs">’ + adjHtml + ‘</div>’ : ‘’)
+ photoHtml + ‘</div>’;
}).join(’’);
}

// ═══════════════════════════════════════════════════
// NOTATION
// ═══════════════════════════════════════════════════
function openRating() {
rating = { like: null, stars: 0, adjs: [], photo: null, photoData: null };
document.querySelectorAll(’.like-btn’).forEach(function(b){ b.className = ‘like-btn’; });
document.querySelectorAll(’.star-btn’).forEach(function(b){ b.classList.remove(‘on’); });
document.querySelectorAll(’.adj-chip’).forEach(function(b){ b.classList.remove(‘on’); });
document.querySelectorAll(’.photo-opt’).forEach(function(b){ b.classList.remove(‘on’); });
var pp = document.getElementById(‘photo-preview’);
var pl = document.getElementById(‘photo-lbl’);
if(pp) { pp.style.display = ‘none’; pp.src = ‘’; }
if(pl) pl.classList.remove(‘show’);
rsGo(0);
document.getElementById(‘modal-rating’).classList.add(‘on’);
}

function closeRating() { document.getElementById(‘modal-rating’).classList.remove(‘on’); }

function rsGo(step) {
document.querySelectorAll(’.rs-step’).forEach(function(s){ s.classList.remove(‘active’); });
var el = document.getElementById(‘rst’ + step);
if(el) el.classList.add(‘active’);
for(var i=0;i<4;i++) {
var d = document.getElementById(‘rd’+i);
if(d) d.classList.toggle(‘on’, i <= step);
}
if(curPlace) {
var q = document.getElementById(‘rsq0’);
if(q) q.textContent = ‘Tu as aimé ’ + DATA[curPlace.key].places[curPlace.idx].n + ’ ?’;
}
}

function setLike(val) {
rating.like = val;
var ly = document.getElementById(‘like-yes’), ln = document.getElementById(‘like-no’);
if(ly) ly.className = ‘like-btn’ + (val ? ’ on-like’ : ‘’);
if(ln) ln.className = ‘like-btn’ + (!val ? ’ on-dislike’ : ‘’);
}

function setStar(n) {
rating.stars = n;
document.querySelectorAll(’.star-btn’).forEach(function(b, i){ b.classList.toggle(‘on’, i < n); });
}

function togAdj(el) {
el.classList.toggle(‘on’);
var txt = el.textContent.trim();
var idx = rating.adjs.indexOf(txt);
if(idx > -1) rating.adjs.splice(idx, 1); else rating.adjs.push(txt);
}

function triggerPhoto(type) {
var inp = document.getElementById(type === ‘selfie’ ? ‘input-selfie’ : ‘input-lieu’);
if(inp) inp.click();
}

function handlePhoto(input, type) {
if(!input.files || !input.files[0]) return;
var reader = new FileReader();
reader.onload = function(e) {
rating.photo = type;
rating.photoData = e.target.result;
var pp = document.getElementById(‘photo-preview’);
var pl = document.getElementById(‘photo-lbl’);
var opS = document.getElementById(‘opt-selfie’);
var opL = document.getElementById(‘opt-lieu’);
if(pp) { pp.src = e.target.result; pp.style.display = ‘block’; }
if(pl) { pl.textContent = type === ‘selfie’ ? ‘🤳 Selfie validé · +5 pts !’ : ‘📷 Photo ajoutée · +1 pt’; pl.classList.add(‘show’); }
if(opS) opS.classList.toggle(‘on’, type === ‘selfie’);
if(opL) opL.classList.toggle(‘on’, type === ‘lieu’);
};
reader.readAsDataURL(input.files[0]);
}

function submitRating() {
if(!curPlace) { closeRating(); return; }
var p = DATA[curPlace.key].places[curPlace.idx];
var pts = 0;
if(rating.like !== null) pts += 1;
if(rating.stars > 0) pts += 2;
if(rating.adjs.length > 0) pts += 2;
if(rating.photo === ‘selfie’) pts += 5;
else if(rating.photo === ‘lieu’) pts += 1;

var reviews = store.parse(‘flany_reviews’, []);
reviews.unshift({
place: p.n, ico: p.ico,
like: rating.like, stars: rating.stars, adjs: rating.adjs,
photo: rating.photo, photoData: rating.photoData,
pts: pts, date: new Date().toLocaleDateString(‘fr-FR’),
author: profil.prenom || ‘Flâneur’
});
store.set(‘flany_reviews’, JSON.stringify(reviews));

addPoints(pts);
closeRating();

var ps = document.getElementById(‘ps-avis’);
if(ps) ps.textContent = reviews.length;

// Rafraîchir les avis dans la fiche si toujours ouverte
renderReviews(p);
}

// ═══════════════════════════════════════════════════
// NIVEAUX & POINTS
// ═══════════════════════════════════════════════════
var NIVEAUX = [
{min:0,   max:49,  surnom:‘Le Flâneur’,  badge:‘🥉’, label:‘Bronze’},
{min:50,  max:149, surnom:‘Le Rôdeur’,   badge:‘🥈’, label:‘Argent’},
{min:150, max:349, surnom:‘Le Curieux’,  badge:‘🥇’, label:‘Or’},
{min:350, max:699, surnom:‘Le Vagabond’, badge:‘💎’, label:‘Diamant’},
{min:700, max:9999,surnom:‘Le Baladin’,  badge:‘👑’, label:‘Légende’}
];

function getPoints() { return parseInt(store.get(‘flany_pts’) || ‘0’); }

function getNiveau(pts) {
return NIVEAUX.filter(function(n){ return pts >= n.min && pts <= n.max; })[0] || NIVEAUX[0];
}

function addPoints(n) {
var p = getPoints() + n;
store.set(‘flany_pts’, p);
updateNiveau();
showPtsPopup(n);
}

function updateNiveau() {
var pts = getPoints();
var nv = getNiveau(pts);
var next = NIVEAUX.filter(function(n){ return n.min > pts; })[0];
var ids = { badge:‘nv-badge’, surnom:‘nv-surnom’, pts:‘nv-pts’, bar:‘nv-bar’, next:‘nv-next’, sub:‘profil-sub’ };
var b = document.getElementById(ids.badge), sn = document.getElementById(ids.surnom);
var np = document.getElementById(ids.pts), nb = document.getElementById(ids.bar);
var nn = document.getElementById(ids.next), sb = document.getElementById(ids.sub);
var ppEl = document.getElementById(‘ps-pts’);
if(b) b.textContent = nv.badge;
if(sn) sn.textContent = nv.surnom;
if(np) np.textContent = pts + ’ pts · ’ + nv.label;
if(nb) nb.style.width = Math.min(100, Math.round((pts - nv.min) / (nv.max - nv.min + 1) * 100)) + ‘%’;
if(nn) nn.textContent = next ? (next.min - pts) + ’ pts pour devenir ’ + next.surnom : ‘Niveau maximum 👑’;
if(sb) sb.textContent = nv.surnom + “ · Les FLÂNY’S”;
if(ppEl) ppEl.textContent = pts;
}

function showPtsPopup(pts) {
var nv = getNiveau(getPoints());
var ico = document.getElementById(‘pp-ico’), val = document.getElementById(‘pp-val’), lbl = document.getElementById(‘pp-lbl’);
var pop = document.getElementById(‘pts-pop’);
if(ico) ico.textContent = nv.badge;
if(val) val.textContent = ‘+’ + pts + ’ pts’;
if(lbl) lbl.textContent = pts >= 5 ? ‘Selfie validé 🤳’ : pts >= 3 ? ‘Avis publié !’ : ‘Merci !’;
if(pop) {
pop.classList.add(‘show’);
setTimeout(function(){ pop.classList.remove(‘show’); }, 2500);
}
}

// ═══════════════════════════════════════════════════
// SURPRISE
// ═══════════════════════════════════════════════════
function openSurprise() {
surpIdx = Math.floor(Math.random() * SURPRISES.length);
fillSurprise();
document.getElementById(‘modal-surprise’).classList.add(‘on’);
}
function closeSurprise() { document.getElementById(‘modal-surprise’).classList.remove(‘on’); }
function fillSurprise() {
var s = SURPRISES[surpIdx];
var ei = document.getElementById(‘surp-ico’), en = document.getElementById(‘surp-name’);
var ed = document.getElementById(‘surp-desc’), ep = document.getElementById(‘surp-dist’);
if(ei) ei.textContent = s.e;
if(en) en.textContent = s.n;
if(ed) ed.textContent = s.d;
if(ep) ep.textContent = s.p;
}
function nextSurprise() {
surpIdx = (surpIdx + 1) % SURPRISES.length;
fillSurprise();
}

// ═══════════════════════════════════════════════════
// AVATAR
// ═══════════════════════════════════════════════════
function setAvatar(av) {
[‘profil-av’,‘av-display’].forEach(function(id){
var el = document.getElementById(id);
if(el) el.textContent = av;
});
var nm = document.getElementById(‘profil-name’);
if(nm) nm.textContent = (profil.prenom || ‘Mon FLÂNY’) + ‘, ’ + (profil.age || ‘’) + ’ ans’;
}

function openAvatarPicker() {
var cur = profil.avatar || ‘🐱’;
document.querySelectorAll(’.av-opt’).forEach(function(el){
el.classList.toggle(‘on’, el.textContent.trim() === cur);
});
tempAvatar = cur;
document.getElementById(‘modal-avatar’).classList.add(‘on’);
}
function closeAvatarPicker() { document.getElementById(‘modal-avatar’).classList.remove(‘on’); }
function selAv(el) {
document.querySelectorAll(’.av-opt’).forEach(function(e){ e.classList.remove(‘on’); });
el.classList.add(‘on’);
tempAvatar = el.textContent.trim();
}
function confirmAvatar() {
profil.avatar = tempAvatar;
store.set(‘flany_profil’, JSON.stringify(profil));
setAvatar(tempAvatar);
closeAvatarPicker();
showToast(‘Avatar mis à jour !’);
}

// ═══════════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════════
function toggleNotif(item) {
var tgl = document.getElementById(‘notif-toggle’);
var sts = document.getElementById(‘notif-status’);
var isOn = tgl && tgl.classList.contains(‘on’);
if(isOn) {
if(tgl) tgl.classList.remove(‘on’);
if(sts) sts.textContent = ‘Activer les alertes spots’;
profil.notifs = false;
} else {
var activate = function() {
if(tgl) tgl.classList.add(‘on’);
if(sts) sts.textContent = ‘Activées · Alertes spots & événements’;
profil.notifs = true;
store.set(‘flany_profil’, JSON.stringify(profil));
showToast(‘🔔 Notifications activées !’);
};
if(‘Notification’ in window && Notification.permission !== ‘denied’) {
Notification.requestPermission().then(function(){ activate(); }).catch(function(){ activate(); });
} else { activate(); }
}
store.set(‘flany_profil’, JSON.stringify(profil));
}

// ═══════════════════════════════════════════════════
// PROPOSER UN SPOT
// ═══════════════════════════════════════════════════
function openSpotForm() {
var sn = document.getElementById(‘spot-name’), sa = document.getElementById(‘spot-addr’), sd = document.getElementById(‘spot-desc’);
if(sn) sn.value = ‘’;
if(sa) sa.value = ‘’;
if(sd) sd.value = ‘’;
document.querySelectorAll(’#spot-cat .ob-chip’).forEach(function(c){ c.classList.remove(‘on’); });
var sp = document.getElementById(‘spot-preview’);
if(sp) { sp.style.display = ‘none’; sp.src = ‘’; }
var spz = document.getElementById(‘spot-photo-zone’);
if(spz) spz.classList.remove(‘has’);
document.getElementById(‘modal-spot’).classList.add(‘on’);
}
function closeSpotForm() { document.getElementById(‘modal-spot’).classList.remove(‘on’); }

function handleSpotPhoto(input) {
if(!input.files || !input.files[0]) return;
var reader = new FileReader();
reader.onload = function(e) {
var sp = document.getElementById(‘spot-preview’);
var spz = document.getElementById(‘spot-photo-zone’);
if(sp) { sp.src = e.target.result; sp.style.display = ‘block’; }
if(spz) spz.classList.add(‘has’);
};
reader.readAsDataURL(input.files[0]);
}

function submitSpot() {
var name = (document.getElementById(‘spot-name’).value || ‘’).trim();
var addr = (document.getElementById(‘spot-addr’).value || ‘’).trim();
var desc = (document.getElementById(‘spot-desc’).value || ‘’).trim();
if(!name) {
var sn = document.getElementById(‘spot-name’);
if(sn) { sn.style.borderColor = ‘var(–red)’; sn.focus(); }
return;
}
var spots = store.parse(‘flany_spots’, []);
spots.unshift({ name: name, addr: addr, desc: desc, date: new Date().toLocaleDateString(‘fr-FR’), author: profil.prenom || ‘Flâneur’ });
store.set(‘flany_spots’, JSON.stringify(spots));
addPoints(3);
closeSpotForm();
showToast(‘🎉 Spot proposé ! +3 pts gagnés’);
}

// ═══════════════════════════════════════════════════
// COMMUNAUTÉ
// ═══════════════════════════════════════════════════
var COMM_MOCK = [
{ av:‘🦊’, nm:‘Camille R.’, nv:‘Le Rôdeur’, bdg:‘🥈’, place:“Café des Anges”, placeIco:‘☀️’, st:5, adjs:[‘☀️ Ensoleillé’,‘🛋️ Cosy’], photo:‘selfie’, photoData:null, date:‘Il y a 2h’ },
{ av:‘🐺’, nm:‘Thomas M.’, nv:‘Le Curieux’, bdg:‘🥇’, place:‘Rooftop Le Bellevue’, placeIco:‘🏙️’, st:5, adjs:[‘🔥 Vibe’,‘📸 Instagrammable’], photo:‘lieu’, photoData:null, date:‘Hier soir’ },
{ av:‘🌸’, nm:‘Léa V.’, nv:‘Le Vagabond’, bdg:‘💎’, place:‘Square Voltaire’, placeIco:‘🌸’, st:4, adjs:[‘🌿 Tranquille’,‘💯 Authentique’], photo:‘selfie’, photoData:null, date:‘Il y a 2 jours’ },
{ av:‘⭐’, nm:‘Maxime D.’, nv:‘Le Flâneur’, bdg:‘🥉’, place:‘Concert Jazz Plein Air’, placeIco:‘🎷’, st:5, adjs:[‘🎉 Vivant’,‘✨ Inédit’], photo:null, photoData:null, date:‘Il y a 3 jours’ },
{ av:‘🎯’, nm:‘Sophie B.’, nv:‘Le Rôdeur’, bdg:‘🥈’, place:“Bar à Vins Léonie”, placeIco:‘🍷’, st:4, adjs:[‘🛋️ Cosy’,‘🔍 Caché’], photo:‘lieu’, photoData:null, date:‘Il y a 4 jours’ }
];

function buildCommFeed() {
var feed = document.getElementById(‘comm-feed’);
if(!feed) return;
var userRevs = store.parse(‘flany_reviews’, []).map(function(r) {
return { av: profil.avatar||‘🐱’, nm:(profil.prenom||‘Toi’)+’ ✓’, nv:getNiveau(getPoints()).surnom, bdg:getNiveau(getPoints()).badge, place:r.place, placeIco:r.ico||‘📍’, st:r.stars, adjs:r.adjs||[], photo:r.photo, photoData:r.photoData, date:“Aujourd’hui”, isUser:true };
});
var all = userRevs.concat(COMM_MOCK);
feed.innerHTML = all.map(function(r) {
var adjHtml = r.adjs.map(function(a){ return ‘<span class="fc-adj">’ + a + ‘</span>’; }).join(’’);
var photoHtml = ‘’;
if(r.photo) {
photoHtml = ‘<div class="fc-photo">’ + (r.photoData ? ‘<img src="'+r.photoData+'" alt="">’ : (r.photo===‘selfie’?‘🤳’:‘📷’)) + ‘</div>’;
photoHtml += ‘<span class="fc-pbadge ' + r.photo + '">’ + (r.photo===‘selfie’?‘🤳 Selfie vérifié · +5 pts’:‘📷 Photo du lieu · +1 pt’) + ‘</span>’;
}
return ‘<div class="feed-card" style="' + (r.isUser?'border:2px solid var(--gold)':'') + '">’
+ ‘<div class="fc-hd"><span class="fc-av">’ + r.av + ‘</span>’
+ ‘<div><div class="fc-nm">’ + r.nm + ‘</div><div class="fc-mt">’ + r.nv + ’ · ’ + r.date + ‘</div></div>’
+ ‘<span class="fc-bdg">’ + r.bdg + ‘</span></div>’
+ ‘<div class="fc-place"><span class="fc-pi">’ + r.placeIco + ‘</span><div class="fc-pn">’ + r.place + ‘</div><div class="fc-st">’ + ‘⭐’.repeat(r.st||0) + ‘</div></div>’
+ (adjHtml ? ‘<div class="fc-adjs">’ + adjHtml + ‘</div>’ : ‘’)
+ photoHtml + ‘</div>’;
}).join(’’);
}

// ═══════════════════════════════════════════════════
// POUR TOI
// ═══════════════════════════════════════════════════
function buildPourToi() {
var hf = profil.humeurs || [];
if(!hf.length) return;
var pt = document.getElementById(‘pour-toi’), sc = document.getElementById(‘pt-scroll’), lbl = document.getElementById(‘pt-label’);
if(!pt || !sc) return;
pt.style.display = ‘block’;
if(lbl) lbl.textContent = profil.prenom ? ’— pour toi, ’ + profil.prenom : ‘’;
sc.innerHTML = ‘’;
var added = 0;
hf.forEach(function(h) {
var key = h.includes(‘Terrasse’)||h.includes(‘soleil’) ? ‘soleil’ : h.includes(‘verre’)||h.includes(‘Bar’) ? ‘bar’ : h.includes(‘Bala’) ? ‘balade’ : h.includes(‘Mang’) ? ‘food’ : h.includes(‘nemen’) ? ‘event’ : ‘zen’;
var d = DATA[key];
if(d && d.places.length && added < 5) {
var p = d.places[0];
var el = document.createElement(‘div’);
el.className = ‘pt-card’;
el.style.background = d.acc;
var kidx = key, pidx = 0;
el.onclick = function(){ openPlace(pidx, kidx); };
el.innerHTML = ‘<span class="pt-ico">’ + p.ico + ‘</span>’
+ ‘<div class="pt-name">’ + p.n + ‘</div>’
+ ‘<div class="pt-dist">🚶 ’ + p.dist + ‘</div>’
+ ‘<span class="pt-tag">’ + d.title.split(’ ‘).slice(0,2).join(’ ’) + ‘</span>’;
sc.appendChild(el);
added++;
}
});
}

// ═══════════════════════════════════════════════════
// PROFIL PAGE
// ═══════════════════════════════════════════════════
function buildProfilPage() {
var infos = [
{ i:‘👤’, t: profil.prenom || ‘—’, s:‘Prénom’ },
{ i:‘🎂’, t: (profil.age||’—’) + ’ ans’, s:‘Âge’ },
{ i:‘📍’, t: (profil.ville||’—’) + (profil.quartier?’ · ‘+profil.quartier:’’), s:‘Localisation’ },
{ i:‘🐾’, t: (profil.situ&&profil.situ.length ? profil.situ.join(’, ‘) : ‘Non renseigné’), s:‘Mode de balade’ }
];
var pi = document.getElementById(‘profil-infos’);
if(pi) pi.innerHTML = infos.map(function(x){ return ‘<div class="pitem"><span class="pi-ico">’+x.i+’</span><div><div class="pi-t">’+x.t+’</div><div class="pi-s">’+x.s+’</div></div></div>’; }).join(’’);

var prefs = [
{ i:‘❤️’, t:(profil.humeurs&&profil.humeurs.length ? profil.humeurs.join(’ · ‘) : ‘Non renseigné’), s:‘Humeurs favorites’ },
{ i:‘🎭’, t: profil.ambiance || ‘—’, s:‘Ambiance’ },
{ i:‘💶’, t: profil.budget || ‘—’, s:‘Budget’ },
{ i:‘🕐’, t:(profil.moments&&profil.moments.length ? profil.moments.join(’ · ‘) : ‘—’), s:‘Moment préféré’ },
{ i:‘🎯’, t:(profil.interets&&profil.interets.length ? profil.interets.join(’, ‘) : ‘Non renseigné’), s:“Centres d’intérêt” }
];
var pp = document.getElementById(‘profil-prefs’);
if(pp) pp.innerHTML = prefs.map(function(x){ return ‘<div class="pitem"><span class="pi-ico">’+x.i+’</span><div><div class="pi-t">’+x.t+’</div><div class="pi-s">’+x.s+’</div></div></div>’; }).join(’’);

if(profil.notifs) {
var tgl = document.getElementById(‘notif-toggle’), sts = document.getElementById(‘notif-status’);
if(tgl) tgl.classList.add(‘on’);
if(sts) sts.textContent = ‘Activées · Alertes spots & événements’;
}
updateNiveau();
var pa = document.getElementById(‘ps-avis’);
var ps2 = document.getElementById(‘ps-saved’);
if(pa) pa.textContent = store.parse(‘flany_reviews’,[]).length;
if(ps2) ps2.textContent = store.parse(‘flany_saved’,[]).length;
}

// ═══════════════════════════════════════════════════
// SAUVÉS PAGE
// ═══════════════════════════════════════════════════
function buildSavedPage() {
var saved = store.parse(‘flany_saved’, []);
var body = document.getElementById(‘saved-body’);
if(!body) return;
if(!saved.length) {
body.innerHTML = ‘<span style="font-size:64px;display:block;margin-bottom:16px">🐱</span><div style="font-size:18px;font-weight:900;margin-bottom:8px">Rien de sauvé encore</div><div style="font-size:14px;color:var(--grey);font-weight:600;line-height:1.6">Depuis une fiche lieu, appuie sur<br><strong>📍 J'y vais !</strong> pour sauvegarder.</div>’;
return;
}
body.style.display = ‘block’;
body.style.padding = ‘16px 16px 90px’;
body.innerHTML = saved.map(function(s) {
return ‘<div class="pcard" onclick="openPlace(' + DATA[s.key].places.findIndex(function(p){ return p.n === s.n; }) + ',\'' + s.key + '\')">’
+ ‘<div class="pc-top"><div class="pc-ico" style="background:var(--gold-l)">’ + s.ico + ‘</div>’
+ ‘<div><div class="pc-name">’ + s.n + ‘</div><div class="pc-type">🚶 ’ + s.dist + ‘</div></div></div></div>’;
}).join(’’);
}

// ═══════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════
function showToast(msg) {
var t = document.getElementById(‘toast’);
if(!t) return;
t.textContent = msg;
t.classList.add(‘show’);
setTimeout(function(){ t.classList.remove(‘show’); }, 2500);
}

// ═══════════════════════════════════════════════════
// TIME PICKER
// ═══════════════════════════════════════════════════
function setTb(el) {
document.querySelectorAll(’.tb’).forEach(function(e){ e.classList.remove(‘on’); });
el.classList.add(‘on’);
}

// ═══════════════════════════════════════════════════
// GOOGLE MAPS & PLACES
// ═══════════════════════════════════════════════════
var GOOGLE_KEY = ‘AIzaSyBrAZ1O8zsP_I-CPN7JnEQ’;
var miniMap = null;
var fullMap = null;
var userLat = 48.8566;
var userLng = 2.3522;
var allMarkers = [];
var placesResults = {};

var PLACE_TYPES = [
{ key:‘soleil’, query:‘terrasse café’, type:‘cafe’, emoji:‘☀️’, color:’#FFB700’, keyword:‘terrasse’ },
{ key:‘bar’,    query:‘bar brasserie’, type:‘bar’, emoji:‘🍺’, color:’#FB923C’, keyword:‘bar’ },
{ key:‘food’,   query:‘restaurant’,   type:‘restaurant’, emoji:‘🍽️’, color:’#FB7185’, keyword:‘restaurant’ },
{ key:‘zen’,    query:‘parc jardin’,  type:‘park’, emoji:‘🌿’, color:’#34D399’, keyword:‘parc’ },
{ key:‘event’,  query:‘musée galerie’,type:‘museum’, emoji:‘🎭’, color:’#A78BFA’, keyword:‘musée’ },
{ key:‘balade’, query:‘parc promenade’,type:‘park’, emoji:‘🚶’, color:’#4ADE80’, keyword:‘promenade’ }
];

function initMaps(lat, lng) {
userLat = lat; userLng = lng;
var center = { lat: lat, lng: lng };

// Style carte épuré
var mapStyle = [
{ featureType:‘poi’, elementType:‘labels’, stylers:[{visibility:‘off’}] },
{ featureType:‘transit’, stylers:[{visibility:‘off’}] },
{ featureType:‘road’, elementType:‘labels.icon’, stylers:[{visibility:‘off’}] }
];

var mapOpts = {
center: center, zoom: 15,
styles: mapStyle,
disableDefaultUI: true,
zoomControl: true,
gestureHandling: ‘cooperative’
};

// Mini map
var miniEl = document.getElementById(‘mini-map’);
if(miniEl && typeof google !== ‘undefined’) {
miniMap = new google.maps.Map(miniEl, Object.assign({}, mapOpts, {zoom:14, zoomControl:false, gestureHandling:‘none’, draggable:false}));
// Marker position utilisateur
new google.maps.Marker({
position: center, map: miniMap,
icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8, fillColor:’#2563EB’, fillOpacity:1, strokeColor:‘white’, strokeWeight:2 }
});
}

// Full map
var fullEl = document.getElementById(‘full-map’);
if(fullEl && typeof google !== ‘undefined’) {
fullMap = new google.maps.Map(fullEl, mapOpts);
new google.maps.Marker({
position: center, map: fullMap,
icon: { path: google.maps.SymbolPath.CIRCLE, scale: 10, fillColor:’#2563EB’, fillOpacity:1, strokeColor:‘white’, strokeWeight:3 }
});
}

// Charger les places pour l’humeur active
loadPlacesForHumeur(curH, lat, lng);
}

function loadPlacesForHumeur(humeurKey, lat, lng) {
if(typeof google === ‘undefined’) return;
var typeInfo = PLACE_TYPES.filter(function(t){ return t.key === humeurKey; })[0];
if(!typeInfo) return;

var service = new google.maps.places.PlacesService(document.createElement(‘div’));
var req = {
location: new google.maps.LatLng(lat, lng),
radius: 1000,
type: typeInfo.type,
openNow: true,
language: ‘fr’
};

service.nearbySearch(req, function(results, status) {
if(status === google.maps.places.PlacesServiceStatus.OK && results) {
placesResults[humeurKey] = results;
renderGooglePlaces(humeurKey, results, lat, lng);
addMarkersToMap(results, typeInfo);
}
});
}

function renderGooglePlaces(humeurKey, results, userLat, userLng) {
var container = document.getElementById(‘place-list’);
if(!container) return;
container.innerHTML = ‘’;

var d = DATA[humeurKey];
var acc = d ? d.acc : ‘#FFB700’;

// Mettre à jour le badge
var rb = document.getElementById(‘r-badge’);
if(rb) rb.textContent = results.length + ’ spots’;

results.slice(0, 10).forEach(function(place, i) {
var dist = ‘’;
if(place.geometry && place.geometry.location) {
var dlat = place.geometry.location.lat() - userLat;
var dlng = place.geometry.location.lng() - userLng;
var dm = Math.round(Math.sqrt(dlat*dlat + dlng*dlng) * 111000);
var walkMin = Math.round(dm / 80);
dist = dm < 1000 ? dm + ‘m · ’ + walkMin + ’ min à pied’ : (dm/1000).toFixed(1) + ‘km’;
}

```
var stars = place.rating || 0;
var isOpen = place.opening_hours && place.opening_hours.open_now;
var openTxt = isOpen ? 'Ouvert' : (place.opening_hours ? 'Fermé' : '');
var openClass = isOpen ? 'gr' : 'rd';

var el = document.createElement('div');
el.className = 'pcard';
el.style.setProperty('--acc', acc);
el.onclick = (function(p, idx, dist2) {
  return function() { openGooglePlace(p, idx, humeurKey, dist2); };
})(place, i, dist);

var tags = '';
if(openTxt) tags += '<span class="ct ' + openClass + '">' + (isOpen ? '✓ ' : '✗ ') + openTxt + '</span>';
if(place.rating) tags += '<span class="ct gd">★ ' + place.rating + '</span>';
if(place.user_ratings_total) tags += '<span class="ct def">' + place.user_ratings_total + ' avis</span>';

el.innerHTML = '<div class="pc-top">'
  + '<div class="pc-ico" style="background:' + (d?d.places[0].bg:'#FFF8E1') + '">' + (PLACE_TYPES.filter(function(t){return t.key===humeurKey;})[0]||{}).emoji + '</div>'
  + '<div style="flex:1;min-width:0">'
  + '<div class="pc-name">' + place.name + '</div>'
  + '<div class="pc-type">' + (place.vicinity||'') + '</div>'
  + '<div class="pc-tags">' + tags + '</div>'
  + '</div></div>'
  + '<div class="pc-bot">'
  + '<div class="pc-dist">🚶 ' + (dist||'Proche') + '</div>'
  + '<div style="display:flex;align-items:center;gap:8px">'
  + (stars ? '<span class="st">★ ' + stars.toFixed(1) + '</span>' : '')
  + '</div></div>';

container.appendChild(el);
```

});

// Mettre à jour carte count
var cc = document.getElementById(‘carte-count’);
var cn = document.getElementById(‘carte-nb’);
if(cc) cc.textContent = results.length + ’ spots trouvés à proximité’;
if(cn) cn.textContent = results.length + ’ spots’;
}

function addMarkersToMap(results, typeInfo) {
if(!fullMap || typeof google === ‘undefined’) return;
// Supprimer anciens markers
allMarkers.forEach(function(m){ m.setMap(null); });
allMarkers = [];

results.slice(0, 15).forEach(function(place) {
if(!place.geometry) return;
var marker = new google.maps.Marker({
position: place.geometry.location,
map: fullMap,
title: place.name,
icon: {
path: ‘M 0,-20 C -11,-20 -20,-11 -20,0 C -20,11 -11,20 0,20 C 11,20 20,11 20,0 C 20,-11 11,-20 0,-20 Z’,
fillColor: typeInfo.color,
fillOpacity: 1,
strokeColor: ‘white’,
strokeWeight: 2,
scale: 0.8,
anchor: new google.maps.Point(0, 0),
labelOrigin: new google.maps.Point(0, 0)
},
label: { text: typeInfo.emoji, fontSize:‘14px’ }
});
// Aussi sur mini map
if(miniMap) {
new google.maps.Marker({
position: place.geometry.location, map: miniMap,
icon: { path: google.maps.SymbolPath.CIRCLE, scale:5, fillColor:typeInfo.color, fillOpacity:1, strokeColor:‘white’, strokeWeight:1.5 }
});
}
allMarkers.push(marker);
});
}

function openGooglePlace(place, idx, humeurKey, dist) {
curPlace = { idx: idx, key: humeurKey, isGoogle: true, googlePlace: place };
var typeInfo = PLACE_TYPES.filter(function(t){return t.key===humeurKey;})[0] || {};

var ico = document.getElementById(‘sh-ico’);
var ttl = document.getElementById(‘sh-ttl’);
var sub = document.getElementById(‘sh-sub’);
var rows = document.getElementById(‘sh-rows’);
var ssTxt = document.getElementById(‘sh-soleil-txt’);
var ssSub = document.getElementById(‘sh-soleil-sub’);

if(ico) { ico.textContent = typeInfo.emoji || ‘📍’; ico.style.background = ‘#FFF8E1’; }
if(ttl) ttl.textContent = place.name;
if(sub) sub.textContent = place.vicinity || ‘’;

// Info soleil calculée
var h = new Date().getHours();
var sunTxt = h < 8 ? ‘🌙 Nuit tombée’ : h < 11 ? ‘🌅 Soleil matinal’ : h < 16 ? ‘🌞 Plein soleil maintenant’ : h < 19 ? ‘☀️ Lumière chaude’ : ‘🌆 Soleil en fin de journée’;
if(ssTxt) ssTxt.textContent = sunTxt;
if(ssSub) ssSub.textContent = ‘Selon l’heure actuelle · ’ + new Date().toLocaleTimeString(‘fr-FR’, {hour:‘2-digit’,minute:‘2-digit’});

// Lignes de détail
var rowsHtml = ‘’;
if(place.opening_hours) {
var isOpen = place.opening_hours.open_now;
rowsHtml += ‘<div class="srow"><span class="sr-ico">🕐</span><div><div class="sr-lbl">Statut</div><div class="sr-val ' + (isOpen?'gr':'rd') + '">’ + (isOpen ? ‘Ouvert en ce moment’ : ‘Actuellement fermé’) + ‘</div></div></div>’;
}
if(place.rating) {
rowsHtml += ‘<div class="srow"><span class="sr-ico">⭐</span><div><div class="sr-lbl">Note Google</div><div class="sr-val gd">★ ’ + place.rating + ’ / 5 · ’ + (place.user_ratings_total||0) + ’ avis</div></div></div>’;
}
if(dist) {
rowsHtml += ‘<div class="srow"><span class="sr-ico">🚶</span><div><div class="sr-lbl">Distance</div><div class="sr-val">’ + dist + ‘</div></div></div>’;
}
if(place.vicinity) {
rowsHtml += ‘<div class="srow"><span class="sr-ico">📍</span><div><div class="sr-lbl">Adresse</div><div class="sr-val">’ + place.vicinity + ‘</div></div></div>’;
}
if(place.price_level !== undefined) {
var prix = [‘Gratuit’,‘€’,‘€€’,‘€€€’,‘€€€€’][place.price_level] || ‘—’;
rowsHtml += ‘<div class="srow"><span class="sr-ico">💶</span><div><div class="sr-lbl">Prix</div><div class="sr-val">’ + prix + ‘</div></div></div>’;
}

if(rows) rows.innerHTML = rowsHtml;
renderReviews({ n: place.name, reviews: [] });
document.getElementById(‘ov-fiche’).classList.add(‘on’);
}

// Override setH pour déclencher Places
var _setH_orig = setH;
function setH(el, key) {
_setH_orig(el, key);
if(typeof google !== ‘undefined’ && gmapsLoaded && userLat) {
loadPlacesForHumeur(key, userLat, userLng);
}
}

// ═══════════════════════════════════════════════════
// BOOT
// ═══════════════════════════════════════════════════
(function() {
var saved = store.get(‘flany_profil’);
if(saved) {
try {
profil = JSON.parse(saved);
var ob2 = document.getElementById(‘onboard’);
var ap = document.getElementById(‘app’);
if(ob2) ob2.style.display = ‘none’;
if(ap) ap.style.display = ‘block’;
initApp();
} catch(e) {
var ob3 = document.getElementById(‘onboard’);
if(ob3) ob3.style.display = ‘flex’;
}
} else {
var ob = document.getElementById(‘onboard’);
if(ob) ob.style.display = ‘flex’;
}
})();
