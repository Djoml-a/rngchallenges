// Example database: You can manually add your car, tune, and track data here
const cars = [
    '240SX', 'Corolla GT-S', 'Fiat Punto', 'Lexus IS300', 'Audi A3', 'Audi TT', 'Mazda Mazdaspeed3', 'Alfa Romeo Brera', 'Cobalt SS', 'Camaro SS', 'Golf GTI', 'Cadillac CTS', 'Chrysler 300C', 'Eclipse GT', 'Mercedes CLK500', 'Mercedes SL500', 'Hummer H1', 'BMW E36', 'Audi A4', 'Monaro VXR', 'Pontiac GTO', 'Golf R32', 'Mitsubishi Eclipse', 'Toyota MR2', 'Dodge Challenger 1970', 'Ford Mustang GT', 'Infinity G35', 'Mazda RX-8', 'Plymouth Roadrunner', 'Dodge Charger R/T', 'Dodge Charger SRT8', 'Clio V6', 'Chevelle SS 454', 'Mazda RX-7', 'Integra Type-R', 'Corvette 427 Sting-ray', 'Lotus Europa S', 'Lotus Elise', 'Jaguar XK', 'Porsche Cayman S', 'Aston Martin DB9', 'Mercedes CLS 63 AMG', 'BMW E46 CSL', 'Cadillac Sixteen', 'Subaru Impreza WRX Blob-eye', 'Mitsubishi Lancer EVO VIII', 'Plymouth Hemicuda', 'Nissan 350Z', 'Toyota Supra', 'Subaru Impreza WRX Hawk-eye', 'Shelby G.T.500', 'Nissan Skyline GT-R R34', 'Dodge Challenger 2012', 'Chevrolet Camaro', 'Porsche 911 Carrera S', 'Shelby GT-500', 'Corvette C6', 'Mitsubishi Lancer EVO IX MR', 'Dodge Viper SRT-10', 'Ford Mustang GT EV', 'Corvette Z06', 'Porsche 911 Turbo S', 'Porsche 911 Turbo', 'Lamborghini Gallardo', 'Porsche 911 GT3 RS', 'Ford GT', 'Lamborghini Murcielago', 'Lamborghini Murcielago LP 640', 'BMW E46 M3 GTR', 'Mercedes McLaren SLR', 'Audi LeMans Quattro', 'Sledgehammer', 'Pagani Zonda F', 'Saleen S7', 'Koenigsegg CCX', 'Porsche Carrera GT', 'Ferrari Enzo', 'BMW M3 E46 GTR Race Car Version', 'Corvette C6.R', 'Bugatti Veyron 16.4'
];

const tunes = [
    'Stock', 'Drift', 'Race', 'Stock, Tier 1 NOS', 'Stock, Tier 2 NOS', 'Stock, Tier 3 NOS', 'Drag'
];

const tracks = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
    '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
    '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
    '51', '52', '53', '54', '55', '56', '57', '58', '59', '60',
    '61', '62', '63', '64', '65', '66', '67', '68', '69', '70',
    '71', '72', '73', '74', '75', '76', '77', '78', '79', '80',
    '81', '82', '83', '84', '85', '86', '87', '88', '89', '90',
    '91', '92', '93', '94', '95', '96', '97', '98', '99', '100',
    '101', '102', '103', '104', '105', '106', '107', '108', '109', '110',
    '111', '112', '113', '114', '115', '116', '117', '118', '119', '120',
    '121', '122', '123', '124', '125', '126', '127', '128', '129', '130',
    '131', '132', '133', '134', '135'
];

// Function to generate a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to update the UI with random car, tune, and track
function generateRandomSelection() {
    const car = getRandomElement(cars);
    const tune = getRandomElement(tunes);
    const track = getRandomElement(tracks);
    
    // Update the HTML elements with the random selection
    document.getElementById('car').textContent = `Car: ${car}`
    document.getElementById('tune').textContent = `Tune: ${tune}`
    document.getElementById('track').textContent = `Quick Race ID: ${track}`
}

// Event listener for the "Generate" button
document.getElementById('generateBtn').addEventListener('click', generateRandomSelection);
