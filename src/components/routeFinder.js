const form = document.querySelector('form');

form.addEventListener('submit', function(e) {

    resetElement(); // To reset edges

    let startStn = document.querySelector('#startStn');
    let endStn = document.querySelector('#endStn');
    const results = document.querySelector('#results');
    let trail = [];
    let edgesArr = []; // NEW: To store path of edges
    // const img = document.querySelector('e1id'); // NEW

    e.preventDefault();
    startStn = startStn.value;
    endStn = endStn.value;
    
    if (startStn === "") {
        results.textContent = "Please select an origin.";
    } else if (endStn === "") {
        results.textContent = "Please select a destination.";
    } else if (startStn === endStn) {
        results.textContent = "Your origin and destination have to be different!";
    } else {
        let interim = shortestPathName(startStn, endStn);
        results.textContent = `Your journey will be ${interim.distance}km long and cost $${interim.fare}.`;

        // Assign interim.path containing station sequence to 'trail'
        trail = interim.path;
    }
    
    // NEW ALGO TO RETRIEVE EDGES FROM interim.path
    for (i = 0; i < trail.length; i++) {
        for (let edge in edgesDict) {
            if ( edgesDict[edge].includes(trail[i]) && edgesDict[edge].includes(trail[i+1]) ) {
                edgesArr.push(edge);
            }
        }
    }

    // EXAMPLE TO HIGHLIGHT PATH
    changeElement(edgesArr);

})

// AUX FUNCTION TO CHANGE OPACITY OF EDGES TO 0.7
// MEANT TO HIGHLIGHT INTENDED PATH FROM AN ARRAY OF EDGES
function changeElement(id) {
    for (let i of id) {
        let el = document.getElementById(i);
        el.style.opacity = 0.7; // TOGGLE TO 0
    }
}

// AUX FUNCTION TO RESET OPACITY OF EDGES TO 0
function resetElement() {
    for (let i in edgesDict) {
        let el = document.getElementById(i);
        el.style.opacity = 0;
    }
}


const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};



// AUX METHOD TO CONVERT INPUT (STATION NAME) FROM MAP INTO  
// VALID INPUT FOR MAIN METHOD BELOW (STATION CODE)
const shortestPathName = (startStn, endStn) => {
    let startCode = null;
    let endCode = null;

    for (let name in dict) {
        if (startStn === name) {
            startCode = dict[name];
        }
        if (endStn === name) {
            endCode = dict[name];
        }
    }
    return findShortestPath(startCode, endCode);
}



// MAIN METHOD TO FIND SHORTEST PATH FROM startNode to endNode
const findShortestPath = (startNode, endNode) => {
	// create new object for recording distances from the start node
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);

	// track paths
	let parents = { endNode: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}

	// track visited nodes 
	let visited = [];

	// find nearest node
	let node = shortestDistanceNode(distances, visited);

	// for that node
	while (node) {
		// find its distance from the start node & its child nodes
		let distance = distances[node];
		let children = graph[node];
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(startNode)) {
				continue;
			} else {
				// save the distance from the start node to the child node
				let newdistance = distance + children[child];
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
				}
			}
		}
		// move the node to the visited set
		visited.push(node);
		// move to the nearest neighbor node
		node = shortestDistanceNode(distances, visited);
	}

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();
  

	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[endNode],
		path: shortestPath,
        fare: cost(distances[endNode])
	};

	return results;
};



// AUX METHOD: FARE CALCULATOR 
const cost = (rate) => {
  if (rate <= 3.2) {
    rate = 0.92;
  } else if (rate <= 4.2) {
      rate = 1.02;
  } else if (rate <= 5.2){
      rate = 1.12;
  } else if (rate <= 6.2) {
      rate = 1.22;
  } else if (rate <= 7.2) {
      rate = 1.31;
  } else if (rate <= 8.2) {
      rate = 1.38;
  } else if (rate <= 9.2) {
      rate = 1.44;
  } else if (rate <= 10.2) {
      rate = 1.48;
  } else if (rate <= 11.2) {
      rate = 1.52;
  } else if (rate <= 12.2) {
      rate = 1.56;
  } else if (rate <= 13.2) {
      rate = 1.60;
  } else if (rate <= 14.2) {
      rate = 1.64;
  } else if (rate <= 15.2) {
      rate = 1.68;
  } else if (rate <= 16.2) {
      rate = 1.72;
  } else if (rate <= 17.2) {
      rate = 1.76;
  } else if (rate <= 18.2) {
      rate = 1.80;
  } else if (rate <= 19.2) {
      rate = 1.84;
  } else if (rate <= 20.2) {
      rate = 1.87;
  } else if (rate <= 21.2) {
      rate = 1.90;
  } else if (rate <= 22.2) {
      rate = 1.93;
  } else if (rate <= 23.2) {
      rate = 1.96;
  } else if (rate <= 24.2) {
      rate = 1.98;
  } else if (rate <= 25.2) {
      rate = 2.00;
  } else if (rate <= 26.2) {
      rate = 2.02;
  } else if (rate <= 27.2) {
      rate = 2.03;
  } else if (rate <= 28.2) {
      rate = 2.04;
  } else if (rate <= 29.2) {
      rate = 2.05;
  } else if (rate <= 30.2) {
      rate = 2.06;
  } else if (rate <= 31.2) {
      rate = 2.07;
  } else if (rate <= 32.2) {
      rate = 2.08;
  } else if (rate <= 33.2) {
      rate = 2.09;
  } else if (rate <= 34.2) {
      rate = 2.10;
  } else if (rate <= 35.2) {
      rate = 2.11;
  } else if (rate <= 36.2) {
      rate = 2.12;
  } else if (rate <= 37.2) {
      rate = 2.13;
  } else if (rate <= 38.2) {
      rate = 2.14;
  } else if (rate <= 39.2) {
      rate = 2.15;
  } else if (rate <= 40.2) {
      rate = 2.16;
  } else {
      rate = 2.17;
  }
  return rate;
};


// TEST DATA
let test_graph = {
	start: { A: 5, B: 2 },
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, finish: 3 },
	D: { finish: 1 },
	finish: {},
};


// DICTIONARY OF STATION NAMES PAIRED WITH STATION CODES
let dict = {

    "CG1 / DT35 Expo": "cg1",
    "CG2 Changi Airport": "cg2",

    "EW1 Pasir Ris": "ew1",
    "EW2 / DT32 Tampines": "ew2",
    "EW3 Simei": "ew3",
    "EW4 Tanah Merah": "ew4",
    "EW5 Bedok": "ew5",
    "EW6 Kembangan": "ew6",
    "EW7 Eunos": "ew7",
    "EW8 / CC9 Paya Lebar": "ew8",
    "EW9 Aljunied": "ew9",
    "EW10 Kallang": "ew10",
    "EW11 Lavender": "ew11",
    "EW12 / DT14 Bugis": "ew12",
    "EW13 / NS25 City Hall": "ew13",
    "EW14 / NS26 Raffles Place": "ew14",
    "EW15 Tanjong Pagar": "ew15",
    "EW16 / NE3 Outram Park": "ew16",
    "EW17 Tiong Bahru": "ew17",
    "EW18 Redhill": "ew18",
    "EW19 Queenstown": "ew19",
    "EW20 Commonwealth": "ew20",
    "EW21 / CC22 Buona Vista": "ew21",
    "EW22 Dover": "ew22",
    "EW23 Clementi": "ew23",
    "EW24 / NS1 Jurong East": "ew24",
    "EW25 Chinese Garden": "ew25",
    "EW26 Lakeside": "ew26",
    "EW27 Boon Lay": "ew27",
    "EW28 Pioneer": "ew28",
    "EW29 Joo Koon": "ew29",
    "EW30 Gul Circle": "ew30",
    "EW31 Tuas Central": "ew31",
    "EW32 Tuas West Road": "ew32",
    "EW33 Tuas Link": "ew33",

    "NS2 Bukit Batok": "ns2",
    "NS3 Bukit Gombak": "ns3",
    "NS4 / BP1 Choa Chu Kang": "ns4",
    "NS5 Yew Tee": "ns5",
    "NS7 Kranji": "ns7",
    "NS8 Marsiling": "ns8",
    "NS9 / TE2 Woodlands": "ns9",
    "NS10 Admiralty": "ns10",
    "NS11 Sembawang": "ns11",
    "NS12 Canberra": "ns12",
    "NS13 Yishun": "ns13",
    "NS14 Khatib": "ns14",
    "NS15 Yio Chu Kang": "ns15",
    "NS16 Ang Mo Kio": "ns16",
    "NS17 / CC15 Bishan": "ns17",
    "NS18 Braddell": "ns18",
    "NS19 Toa Payoh": "ns19",
    "NS20 Novena": "ns20",
    "NS21 / DT11 Newton": "ns21",
    "NS22 Orchard": "ns22",
    "NS23 Somerset": "ns23",
    "NS24 / NE6 / CC1 Dhoby Ghaut": "ns24",
    "NS27 / CE2 Marina Bay": "ns27",
    "NS28 Marina South Pier": "ns28",

    "NE1 / CC28 HarbourFront": "ne1",
    "NE4 / DT19 Chinatown": "ne4",
    "NE5 Clarke Quay": "ne5",
    "NE7 / DT12 Little India": "ne7",
    "NE8 Farrer Park": "ne8",
    "NE9 Boon Keng": "ne9",
    "NE10 Potong Pasir": "ne10",
    "NE11 Woodleigh": "ne11",
    "NE12 / CC13 Serangoon": "ne12",
    "NE13 Kovan": "ne13",
    "NE14 Hougang": "ne14",
    "NE15 Buangkok": "ne15",
    "NE16 Sengkang": "ne16",
    "NE17 Punggol": "ne17",

    "CC2 Bras Basah": "cc2",
    "CC3 Esplanade": "cc3",
    "CC4 / DT15 Promenade": "cc4",
    "CC5 Nicoll Highway": "cc5",
    "CC6 Stadium": 'cc6',
    'CC7 Mountbatten': 'cc7',
    'CC8 Dakota': 'cc8',
    'CC10 / DT26 MacPherson': 'cc10',
    'CC11 Tai Seng': 'cc11',
    'CC12 Bartley': 'cc12',
    'CC14 Lorong Chuan': 'cc14',
    'CC16 Marymount': 'cc16',
    'CC17 Caldecott': 'cc17',
    'CC19 / DT9 Botanic Gardens': 'cc19',
    'CC20 Farrer Road': 'cc20',
    'CC21 Holland Village': 'cc21',
    'CC23 one-north': 'cc23',
    'CC24 Kent Ridge': 'cc24',
    'CC25 Haw Par Villa': 'cc25',
    'CC26 Pasir Panjang': 'cc26',
    'CC27 Labrador Park': 'cc27',
    'CC28 Telok Blangah': 'cc28',
    'CE1 / DT16 Bayfront': 'ce1',
    
    'DT1 / BP6 Bukit Panjang': 'dt1',
    'DT2 Cashew': 'dt2',
    'DT3 Hillview': 'dt3',
    'DT5 Beauty World': 'dt5',
    'DT6 King Albert Park': 'dt6',
    'DT7 Sixth Avenue': 'dt7',
    'DT8 Tan Kah Kee': 'dt8',
    'DT10 Stevens': 'dt10',
    'DT13 Rochor': 'dt13',
    'DT17 Downtown': 'dt17',
    'DT18 Telok Ayer': 'dt18',
    'DT20 Fort Canning': 'dt20',
    'DT21 Bencoolen': 'dt21',
    'DT22 Jalan Besar': 'dt22',
    'DT23 Bendemeer': 'dt23',
    'DT24 Geylang Bahru': 'dt24',
    'DT25 Mattar': 'dt25',
    'DT27 Ubi': 'dt27',
    'DT28 Kaki Bukit': 'dt28',
    'DT29 Bedok North': 'dt29',
    'DT30 Bedok Reservoir': 'dt30',
    'DT31 Tampines West': 'dt31',
    'DT33 Tampines East': 'dt33',
    'DT34 Upper Changi': 'dt34',

    'TE1 Woodlands North': 'te1',
    'TE3 Woodlands South': 'te3',

    'BP2 South View': 'bp2',
    'BP3 Keat Hong': 'bp3',
    'BP4 Teck Whye': 'bp4',
    'BP5 Phoenix': 'bp5',
    'BP7 Petir': 'bp7',
    'BP8 Pending': 'bp8',
    'BP9 Bangkit': 'bp9',
    'BP10 Fajar': 'bp10',
    'BP11 Segar': 'bp11',
    'BP12 Jelapang': 'bp12',
    'BP13 Senja': 'bp13',

    'SW1 Cheng Lim': 'sw1',
    'SW2 Farmway': 'sw2',
    'SW3 Kupang': 'sw3',
    'SW4 Thanggam': 'sw4',
    'SW5 Fernvale': 'sw5',
    'SW6 Layar': 'sw6',
    'SW7 Tongkang': 'sw7',
    'SW8 Renjong': 'sw8',

    'SE1 Compassvale': 'se1',
    'SE2 Rumbia': 'se2',
    'SE3 Bakau': 'se3',
    'SE4 Kangkar': 'se4',
    'SE5 Ranggung': 'se5',

    'PW1 Sam Kee': 'pw1',
    'PW3 Punggol Point': 'pw3',
    'PW4 Samudera': 'pw4',
    'PW5 Nibong': 'pw5',
    'PW6 Sumang': 'pw6',
    'PW7 Soo Teck': 'pw7',
    
    'PE1 Cove': 'pe1',
    'PE2 Meridian': 'pe2',
    'PE3 Coral Edge': 'pe3',
    'PE4 Riviera': 'pe4',
    'PE5 Kadaloor': 'pe5',
    'PE6 Oasis': 'pe6',
    'PE7 Damai': 'pe7'

};


// DICTIONARY OF INDIVIDUAL EDGES PAIRED WITH ARRAY OF CONNECTING STATIONS
let edgesDict = {

    // EAST-WEST LINE EDGES
    'g1': ['ew1', 'ew2'],
    'g2': ['ew2', 'ew3'],
    'g3': ['ew3', 'ew4'],
    'g4': ['ew4', 'ew5'],
    'g5': ['ew5', 'ew6'],
    'g6': ['ew6', 'ew7'],
    'g7': ['ew7', 'ew8'],
    'g8': ['ew8', 'ew9'],
    'g9': ['ew9', 'ew10'],
    'g10': ['ew10', 'ew11'],
    'g11': ['ew11', 'ew12'],
    'g12': ['ew12', 'ew13'],
    'g13': ['ew13', 'ew14'],
    'g14': ['ew14', 'ew15'],
    'g14_1': ['ew14', 'ew15'],
    'g15': ['ew15', 'ew16'],
    'g16': ['ew16', 'ew17'],
    'g17': ['ew17', 'ew18'],
    'g18': ['ew18', 'ew19'],
    'g19': ['ew19', 'ew20'],
    'g20': ['ew20', 'ew21'],
    'g21': ['ew21', 'ew22'],
    'g22': ['ew22', 'ew23'],
    'g23': ['ew23', 'ew24'],
    'g24': ['ew24', 'ew25'],
    'g25': ['ew25', 'ew26'],
    'g26': ['ew26', 'ew27'],
    'g27': ['ew27', 'ew28'],
    'g28': ['ew28', 'ew29'],
    'g29': ['ew29', 'ew30'],
    'g30': ['ew30', 'ew31'],
    'g31': ['ew31', 'ew32'],
    'g32': ['ew32', 'ew33'],

    // CHANGI AIRPORT BRANCH LINE EDGES
    'gc1': ['cg1', 'cg2'],
    'gc2': ['cg1', 'ew4'],
    'gc2_1': ['cg1', 'ew4'],

    // NORTH-SOUTH LINE EDGES
    'r1': ['ew24', 'ns2'],
    'r2': ['ns2', 'ns3'],
    'r3': ['ns3', 'ns4'],
    'r4': ['ns4', 'ns5'],
    'r5': ['ns5', 'ns7'],
    'r5_1': ['ns5', 'ns7'],
    'r6': ['ns7', 'ns8'],
    'r7': ['ns8', 'ns9'],
    'r8': ['ns9', 'ns10'],
    'r9': ['ns10', 'ns11'],
    'r10': ['ns11', 'ns12'],
    'r10_1': ['ns11', 'ns12'],
    'r11': ['ns12', 'ns13'],
    'r12': ['ns13', 'ns14'],
    'r12_1': ['ns13', 'ns14'],
    'r13': ['ns14', 'ns15'],
    'r14': ['ns15', 'ns16'],
    'r15': ['ns16', 'ns17'],
    'r16': ['ns17', 'ns18'],
    'r17': ['ns18', 'ns19'],
    'r18': ['ns19', 'ns20'],
    'r19': ['ns20', 'ns21'],
    'r20': ['ns21', 'ns22'],
    'r21': ['ns22', 'ns23'],
    'r22': ['ns23', 'ns24'],
    'r23': ['ns24', 'ew13'],
    'r23_1': ['ns24', 'ew13'],
    'r24': ['ns27', 'ew14'],
    'r25': ['ns27', 'ns28'],

    // NORTH-EAST LINE EDGES
    'p1': ['ne1', 'ew16'],
    'p2': ['ew16', 'ne4'],
    'p3': ['ne4', 'ne5'],
    'p4': ['ne5', 'ns24'],
    'p5': ['ns24', 'ne7'],
    'p6': ['ne7', 'ne8'],
    'p7': ['ne8', 'ne9'],
    'p8': ['ne9', 'ne10'],
    'p9': ['ne10', 'ne11'],
    'p10': ['ne11', 'ne12'],
    'p11': ['ne12', 'ne13'],
    'p12': ['ne13', 'ne14'],
    'p13': ['ne14', 'ne15'],
    'p14': ['ne15', 'ne16'],
    'p15': ['ne16', 'ne17'],

    // CIRCLE LINE EDGES
    'y1': ['ns24', 'cc2'],
    'y2': ['cc2', 'cc3'],
    'y3': ['cc3', 'cc4'],
    'y3_1': ['cc3', 'cc4'],
    'y4': ['cc4', 'cc5'],
    'y5': ['cc5', 'cc6'],
    'y6': ['cc6', 'cc7'],
    'y7': ['cc7', 'cc8'],
    'y8': ['cc8', 'ew8'],
    'y9': ['ew8', 'cc10'],
    'y10': ['cc10', 'cc11'],
    'y11': ['cc11', 'cc12'],
    'y12': ['cc12', 'ne12'],
    'y13': ['ne12', 'cc14'],
    'y14': ['cc14', 'ns17'],
    'y15': ['ns17', 'cc16'],
    'y16': ['cc16', 'cc17'],
    'y17': ['cc17', 'cc19'],
    'y17_1': ['cc17', 'cc19'],
    'y18': ['cc19', 'cc20'],
    'y19': ['cc20', 'cc21'],
    'y20': ['cc21', 'ew21'],
    'y21': ['ew21', 'cc23'],
    'y22': ['cc23', 'cc24'],
    'y23': ['cc24', 'cc25'],
    'y24': ['cc25', 'cc26'],
    'y25': ['cc26', 'cc27'],
    'y26': ['cc27', 'cc28'],
    'y27': ['cc28', 'ne1'],

    // CIRCLE LINE EXTENSION EDGES
    'ye1': ['cc4', 'ce1'],
    'ye2': ['ce1', 'ns27'],
    'ye2_1': ['ce1', 'ns27'],

    // DOWNTOWN LINE EDGES
    'b1': ['dt1', 'dt2'],
    'b2': ['dt2', 'dt3'],
    'b3': ['dt3', 'dt5'],
    'b4': ['dt5', 'dt6'],
    'b5': ['dt6', 'dt7'],
    'b6': ['dt7', 'dt8'],
    'b7': ['dt8', 'cc19'],
    'b8': ['cc19', 'dt10'],
    'b9': ['dt10', 'ns21'],
    'b10': ['ns21', 'ne7'],
    'b11': ['ne7', 'dt13'],
    'b12': ['dt13', 'ew12'],
    'b13': ['ew12', 'cc4'],
    'b13_1': ['ew12', 'cc4'],
    'b14': ['ce1', 'dt17'],
    'b15': ['dt17', 'dt18'],
    'b16': ['dt18', 'ne4'],
    'b17': ['ne4', 'dt20'],
    'b18': ['dt20', 'dt21'],
    'b18_1': ['dt20', 'dt21'],
    'b18_2': ['dt20', 'dt21'],
    'b19': ['dt21', 'dt22'],
    'b20': ['dt22', 'dt23'],
    'b21': ['dt23', 'dt24'],
    'b22': ['dt24', 'dt25'],
    'b23': ['dt25', 'cc10'],
    'b24': ['cc10', 'dt27'],
    'b25': ['dt27', 'dt28'],
    'b26': ['dt28', 'dt29'],
    'b27': ['dt29', 'dt30'],
    'b28': ['dt30', 'dt31'],
    'b29': ['dt31', 'ew2'],
    'b30': ['ew2', 'dt33'],
    'b30_1': ['ew2', 'dt33'],
    'b31': ['dt33', 'dt34'],
    'b32': ['dt34', 'cg1'],

    // THOMSON-EAST COAST LINE EDGES
    'br1': ['br1', 'ns9'],
    'br2': ['ns9', 'br3'],

    // BUKIT PANJANG LRT EDGES
    'bp_e1': ['ns4', 'bp2'],
    'bp_e2': ['bp2', 'bp3'],
    'bp_e3': ['bp3', 'bp4'],
    'bp_e4': ['bp4', 'bp5'],
    'bp_e5': ['bp5', 'dt1'],
    'bp_e6': ['dt1', 'bp7'],
    'bp_e6_1': ['dt1', 'bp7'],
    'bp_e7': ['bp7', 'bp8'],
    'bp_e8': ['bp8', 'bp9'],
    'bp_e9': ['bp9', 'bp10'],
    'bp_e10': ['bp10', 'bp11'],
    'bp_e11': ['bp11', 'bp12'],
    'bp_e12': ['bp12', 'bp13'],
    'bp_e13': ['bp13', 'dt1'],
    'bp_e13_1': ['bp13', 'dt1'],

    // SENGKANG WEST LRT EDGES
    'skw_e1': ['ne16', 'sw1'],
    'skw_e2': ['sw1', 'sw2'],
    'skw_e3': ['sw2', 'sw3'],
    'skw_e4': ['sw3', 'sw4'],
    'skw_e5': ['sw4', 'sw5'],
    'skw_e6': ['sw5', 'sw6'],
    'skw_e7': ['sw6', 'sw7'],
    'skw_e8': ['sw7', 'sw8'],
    'skw_e9': ['sw8', 'ne16'],

    // SENGKANG EAST LRT EDGES
    'ske_e1': ['ne16', 'se1'],
    'ske_e2': ['se1', 'se2'],
    'ske_e3': ['se2', 'se3'],
    'ske_e3_1': ['se2', 'se3'],
    'ske_e4': ['se3', 'se4'],
    'ske_e4_1': ['se3', 'se4'],
    'ske_e5': ['se4', 'se5'],
    'ske_e6': ['se5', 'ne16'],

    // PUNGGOL WEST LRT EDGES
    'pgw_e1': ['ne17', 'pw1'],
    'pgw_e2': ['pw1', 'pw3'],
    'pgw_e3': ['pw3', 'pw4'],
    'pgw_e3_1': ['pw3', 'pw4'],
    'pgw_e4': ['pw4', 'pw5'],
    'pgw_e5': ['pw5', 'pw6'],
    'pgw_e6': ['pw6', 'pw7'],
    'pgw_e7': ['pw7', 'ne17'],

    // PUNGGOL EAST LRT EDGES
    'pge_e1': ['ne17', 'pe1'],
    'pge_e2': ['pe1', 'pe2'],
    'pge_e3': ['pe2', 'pe3'],
    'pge_e4': ['pe3', 'pe4'],
    'pge_e4_1': ['pe3', 'pe4'],
    'pge_e5': ['pe4', 'pe5'],
    'pge_e6': ['pe5', 'pe6'],
    'pge_e7': ['pe6', 'pe7'],
    'pge_e8': ['pe7', 'ne17']

}

// RAW DATA
// Edges between each MRT/LRT Station
let graph = {
  cg1: { cg2: 4.5, ew4: 1.9, dt34: 0.9 },
  cg2: { cg1: 4.5 },

  ew1: { ew2: 2.4 },
  ew2: { ew1: 2.4, ew3: 1.4, dt31: 1.3, dt33: 1.4 },
  ew3: { ew2: 1.4, ew4: 2.5 },
  ew4: { ew3: 2.5, ew5: 1.9, cg1: 1.9 },
  ew5: { ew4: 1.9, ew6: 2 },
  ew6: { ew5: 2, ew7: 1.1 },
  ew7: { ew6: 1.1, ew8: 1.1 },
  ew8: { ew7: 1.1, ew9: 1.2, cc8: 1.2, cc10: 1.1 },
  ew9: { ew8: 1.2, ew10: 1.4 },
  ew10: { ew9: 1.4, ew11: 1.1 },
  ew11: { ew10: 1.1, ew12: 1.1 },
  ew12: { ew11: 1.1, ew13: 1, dt13: 0.8, cc4: 0.9 },
  ew13: { ew12: 1, ew14: 1, ns24: 1 },
  ew14: { ew13: 1, ew15: 1.2, ns27: 1 },
  ew15: { ew14: 1.2, ew16: 1 },
  ew16: { ew15: 1, ew17: 1.5, ne1: 2.6, ne4: 0.7 },
  ew17: { ew16: 1.5, ew18: 1.2},
  ew18: { ew17: 1.2, ew19: 1.4},
  ew19: { ew18: 1.4, ew20: 1.2},
  ew20: { ew19: 1.2, ew21: 1.1},
  ew21: { ew20: 1.1, ew22: 1.4, cc21: 0.9, cc23: 0.8},
  ew22: { ew21: 1.4, ew23: 1.7},
  ew23: { ew22: 1.7, ew24: 3.5},
  ew24: { ew23: 3.5, ew25: 1.5, ns2: 2.1},
  ew25: { ew24: 1.5, ew26: 1.4},
  ew26: { ew25: 1.4, ew27: 1.8},
  ew27: { ew26: 1.8, ew28: 0.9},
  ew28: { ew27: 0.9, ew29: 2.6},
  ew29: { ew28: 2.6, ew30: 2.3},
  ew30: { ew29: 2.3, ew31: 1.7},
  ew31: { ew30: 1.7, ew32: 1.4},
  ew32: { ew31: 1.4, ew33: 1.3},
  ew33: { ew32: 1.3},

  ns2: {ew24: 2.1, ns3: 1.2},
  ns3: {ns2: 1.2, ns4: 3.3},
  ns4: {ns3: 3.3, ns5: 1.4, bp2: 0.6},
  ns5: {ns4: 1.4, ns7: 4.1},
  ns7: {ns5: 4.1, ns8: 1.7},
  ns8: {ns7: 1.7, ns9: 1.5},
  ns9: {ns8: 1.5, ns10: 1.7, te1: 1.4, te3: 1.4},
  ns10: {ns9: 1.7, ns11: 2.4},
  ns11: {ns10: 2.4, ns12: 1.5},
  ns12: {ns11: 1.5, ns13: 1.7},
  ns13: {ns12: 1.7, ns14: 1.4},
  ns14: {ns13: 1.4, ns15: 4.9},
  ns15: {ns14: 4.9, ns16: 1.5},
  ns16: {ns15: 1.5, ns17: 2.4},
  ns17: {ns16: 2.4, ns18: 1.2, cc14: 1.7, cc16: 1.6},
  ns18: {ns17: 1.2, ns19: 0.9},
  ns19: {ns18: 0.9, ns20: 1.5},
  ns20: {ns19: 1.5, ns21: 1.2},
  ns21: {ns20: 1.2, ns22: 1.2, dt10: 1.6, ne7: 1.4},
  ns22: {ns21: 1.2, ns23: 1},
  ns23: {ns22: 1, ns24: 0.8},
  ns24: {ns23: 0.8, ew13: 1, ne5: 1.4, ne7: 1, cc2: 0.6},
  ns27: {ew14: 1, ns28: 1.4, ce1: 0.8},
  ns28: {ns27: 1.4},

  ne1: {ew16: 2.6, cc28: 1.5},
  ne4: {ew16: 0.7, ne5: 0.6, dt18: 0.6, dt20: 1},
  ne5: {ne4: 0.6, ns24: 1.4},
  ne7: {ns24: 1, ne8: 0.8, ns21: 1.4, dt13: 0.5},
  ne8: {ne7: 0.8, ne9: 1.2},
  ne9: {ne8: 1.2, ne10: 1.6},
  ne10: {ne9: 1.6, ne11: 0.9},
  ne11: {ne10: 0.9, ne12: 1.2},
  ne12: {ne11: 1.2, ne13: 1.7, cc12: 1.3, cc14: 0.9},
  ne13: {ne12: 1.7, ne14: 1.5},
  ne14: {ne13: 1.5, ne15: 1.3},
  ne15: {ne14: 1.3, ne16: 1.1},
  ne16: {ne15: 1.1, ne17: 1.7, sw1: 0.8, sw8: 0.9, se1: 0.8, se5: 1},
  ne17: {ne16: 1.7, pw1: 0.6, pw7: 1, pe1: 1, pe7: 0.9},

  cc2: {ns24: 0.6, cc3: 0.7},
  cc3: {cc2: 0.7, cc4: 0.8},
  cc4: {cc3: 0.8, cc5: 0.8, ce1: 1.3, ew12: 0.9},
  cc5: {cc4: 0.8, cc6: 1.5},
  cc6: {cc5: 1.5, cc7: 0.9},
  cc7: {cc6: 0.9, cc8: 0.7},
  cc8: {cc7: 0.7, ew8: 1.2},
  cc10: {ew8: 1.1, cc11: 1, dt25: 0.8, dt27: 1.1},
  cc11: {cc10: 1, cc12: 1.3},
  cc12: {cc11: 1.3, ne12: 1.3},
  cc14: {ne12: 0.9, ns17: 1.7},
  cc16: {ns17: 1.6, cc17: 1.2},
  cc17: {cc16: 1.2, cc19: 3.9},
  cc19: {cc17: 3.9, cc20: 1, dt8: 1.1, dt10: 1.1},
  cc20: {cc19: 1, cc21: 1.4},
  cc21: {cc20: 1.4, ew21: 0.9},
  cc23: {ew21: 0.8, cc24: 0.8},
  cc24: {cc23: 0.8, cc25: 1.4},
  cc25: {cc24: 1.4, cc26: 1.3},
  cc26: {cc25: 1.3, cc27: 1.4}, 
  cc27: {cc26: 1.4, cc28: 0.8},
  cc28: {cc27: 0.8, ne1: 1.5},
  ce1: { cc4: 1.3, ns27: 0.8, dt17: 0.9},

  dt1: {dt2: 1.2, bp5: 0.7, bp7: 0.4, bp13: 0.6},
  dt2: {dt1: 1.2, dt3: 0.9},
  dt3: {dt2: 0.9, dt5: 2.6},
  dt5: {dt3: 2.6, dt6: 1.2},
  dt6: {dt5: 1.2, dt7: 1.6},
  dt7: {dt6: 1.6, dt8: 1.3},
  dt8: {dt7: 1.3, cc19: 1.1},
  dt10: {cc19: 1.1, ns21: 1.6},
  dt13: {ne7: 0.5, ew12: 0.8},
  dt17: {ce1: 0.9, dt18: 0.6},
  dt18: {dt17: 0.6, ne4: 0.6},
  dt20: {ne4: 1, dt21: 1},
  dt21: {dt20: 1, dt22: 0.9},
  dt22: {dt22: 0.9, dt23: 1.3},
  dt23: {dt22: 1.3, dt24: 1.4},
  dt24: {dt23: 1.4, dt25: 1.5},
  dt25: {dt24: 1.5, cc10: 0.8},
  dt27: {cc10: 1.1, dt28: 1.2},
  dt28: {dt27: 1.2, dt29: 1.1},
  dt29: {dt28: 1.1, dt30: 1.8},
  dt30: {dt29: 1.8, dt31: 1.7},
  dt31: {dt30: 1.7, ew2: 1.3},
  dt33: {ew2: 1.4, dt34: 2.6},
  dt34: {dt33: 2.6, cg1: 0.9},

  te1: {ns9: 1.4},
  te3: {ns9: 1.4},

  bp2: {ns4: 0.6, bp3: 0.5},
  bp3: {bp2: 0.5, bp4: 0.6},
  bp4: {bp3: 0.6, bp5: 0.5},
  bp5: {bp4: 0.5, dt1: 0.7},
  bp7: {dt1: 0.4, bp8: 0.6},
  bp8: {bp7: 0.6, bp9: 0.5},
  bp9: {bp8: 0.5, bp10: 0.9},
  bp10: {bp9: 0.9, bp11: 0.5},
  bp11: {bp10: 0.5, bp12: 0.7},
  bp12: {bp11: 0.7, bp13: 0.6},
  bp13: {bp12: 0.6, dt1: 0.6},

  sw1: {ne16: 0.8, sw2: 0.5},
  sw2: {sw1: 0.5, sw3: 0.9},
  sw3: {sw2: 0.9, sw4: 0.7},
  sw4: {sw3: 0.7, sw5: 0.6},
  sw5: {sw4: 0.6, sw6: 0.5},
  sw6: {sw5: 0.5, sw7: 0.7},
  sw7: {sw6: 0.7, sw8: 0.6},
  sw8: {sw7: 0.6, ne16: 0.9},

  se1: {ne16: 0.8, se2: 0.7},
  se2: {se1: 0.7, se3: 0.5},
  se3: {se2: 0.5, se4: 0.6},
  se4: {se3: 0.6, se5: 0.8},
  se5: {se4: 0.8, ne16: 1},

  pw1: {ne17: 0.6, pw3: 1},
  pw3: {pw1: 1, pw4: 0.6},
  pw4: {pw3: 0.6, pw5: 0.5},
  pw5: {pw4: 0.5, pw6: 0.4},
  pw6: {pw5: 0.4, pw7: 0.4},
  pw7: {pw6: 0.4, ne17: 1},

  pe1: {ne17: 1, pe2: 0.4},
  pe2: {pe1: 0.4, pe3: 0.5},
  pe3: {pe2: 0.5, pe4: 0.5},
  pe4: {pe3: 0.5, pe5: 0.7},
  pe5: {pe4: 0.7, pe6: 0.5},
  pe6: {pe5: 0.5, pe7: 0.6},
  pe7: {pe6: 0.6, ne17: 0.9}
}